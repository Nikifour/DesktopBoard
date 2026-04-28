const { app, BrowserWindow, WebContentsView, globalShortcut, ipcMain, screen, dialog, nativeTheme, systemPreferences, shell, Notification, Tray, Menu, nativeImage } = require("electron");
const { spawn } = require("child_process");
const crypto = require("crypto");
const fsSync = require("fs");
const fs = require("fs/promises");
const path = require("path");
const { autoUpdater } = require("electron-updater");
const packageJson = require("./package.json");
const mammoth = require("mammoth");
const XLSX = require("xlsx");
const JSZip = require("jszip");
const { pathToFileURL, fileURLToPath } = require("url");

let mainWindow;
let splashWindow = null;
let overlayWindow = null;
let workspaceWindows = new Map();
let workspaceOverlayWindows = new Map();
let workspaceWallpaperControlWindows = new Map();
let windowSessions = new Map();
let nativeWebCardViews = new Map();
let appConfig = {
  storagePath: "",
  diagnosticsEnabled: true,
  activeBoardId: "main",
  autoStartEnabled: false,
  autoManageAssetsOnLaunch: true,
  wallpaperModeEnabled: true,
  wallpaperInteractionEnabled: false,
  multiMonitorEnabled: false,
  multiMonitorMode: "single",
  multiMonitorDisplayIds: [],
  windowMode: "normal"
};
let logWriteQueue = Promise.resolve();
let lastKnownState = null;
let autoUpdateTimer = null;
let autoUpdaterInitialized = false;
let autoUpdateState = null;
let manualUpdateDownloadPromise = null;
let tray = null;
let isQuitting = false;
let trayBalloonShown = false;
let currentWindowMode = "normal";
let multiWindowWorkspaceActive = false;
let wallpaperOverlayActive = false;
let wallpaperControlWindow = null;
let widgetOverlayInteractive = false;
let widgetOverlayCaptured = false;
let wallpaperAttachmentState = {
  attached: false,
  parentClass: "",
  error: null
};
let wallpaperAttachmentPromise = Promise.resolve();
let foregroundWatchTimer = null;
let foregroundWatchInFlight = false;
let foregroundState = {
  externalFullscreenActive: false,
  pendingExternalFullscreenActive: null,
  stableSampleCount: 0,
  autoHidden: false,
  manualHidden: false,
  foregroundClassName: "",
  foregroundProcessName: "",
  error: null
};

const appId = "com.desktopboard.app";
const stateSchemaVersion = 6;
const boardArchiveVersion = 1;
const boardArchiveStateEntry = "board-state.json";
const boardArchiveMetaEntry = "desktop-board-export.json";
const defaultBoardId = "main";
const defaultBoardName = "Main board";
const mediaKinds = new Set(["image", "video", "audio"]);
const storedAssetKinds = new Set(["image", "video", "audio", "file"]);
const themeAssetExtensions = new Set([".svg", ".png", ".webp", ".gif"]);
const themeAssetMimeTypes = {
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".webp": "image/webp",
  ".gif": "image/gif"
};
const maxThemeManifestBytes = 1024 * 1024;
const maxThemeAssetBytes = 512 * 1024;
const windowIconPath = path.join(__dirname, "src", "assets", "app-icon.ico");
const trayIconPath = path.join(__dirname, "src", "assets", "tray-icon.png");
const taskbarIconPath = path.join(__dirname, "src", "assets", "taskbar-icon.png");
const notificationIconPath = path.join(__dirname, "src", "assets", "app-logo.png");
const splashHtmlPath = path.join(__dirname, "src", "splash.html");
const wallpaperHelperScriptPath = app.isPackaged
  ? path.join(process.resourcesPath, "native", "wallpaper-helper.ps1")
  : path.join(__dirname, "src", "native", "wallpaper-helper.ps1");
const foregroundHelperScriptPath = app.isPackaged
  ? path.join(process.resourcesPath, "native", "foreground-helper.ps1")
  : path.join(__dirname, "src", "native", "foreground-helper.ps1");
const sessionId = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
const autoUpdateInitialDelayMs = 15000;
const autoUpdateIntervalMs = 6 * 60 * 60 * 1000;
const foregroundWatchIntervalMs = 1500;
const foregroundFullscreenEnterSamples = 1;
const foregroundFullscreenExitSamples = 2;
const activeNotifications = new Map();

const defaultHotkeys = {
  toggleHotkey: "CommandOrControl+Alt+B",
  lockHotkey: "CommandOrControl+Alt+L"
};

const defaultAppConfig = {
  storagePath: "",
  diagnosticsEnabled: true,
  activeBoardId: defaultBoardId,
  autoStartEnabled: false,
  autoManageAssetsOnLaunch: true,
  wallpaperModeEnabled: true,
  wallpaperInteractionEnabled: false,
  multiMonitorMode: "single",
  multiMonitorDisplayIds: [],
  windowMode: "normal"
};

const supportedWindowModes = new Set(["normal", "wallpaper-view", "widget-mode"]);
const supportedMultiMonitorModes = new Set(["single", "seamless", "workspace"]);

function normalizeStoragePath(value) {
  if (typeof value !== "string" || !value.trim()) {
    return "";
  }
  return path.resolve(value.trim());
}

function normalizeBoardId(value) {
  if (typeof value !== "string" || !value.trim()) {
    return "";
  }

  const normalized = value.trim().toLowerCase();
  return /^[a-z0-9][a-z0-9_-]{0,63}$/.test(normalized) ? normalized : "";
}

function getActiveBoardId(boardId = null) {
  return normalizeBoardId(boardId || "") || normalizeBoardId(appConfig.activeBoardId) || defaultBoardId;
}

function getWindowSessionKey(target) {
  const webContents = target?.webContents || target;
  return Number.isInteger(webContents?.id) ? webContents.id : null;
}

function getWindowSession(target) {
  const key = getWindowSessionKey(target);
  return key === null ? null : windowSessions.get(key) || null;
}

function getWindowSessionMode(target) {
  const session = getWindowSession(target);
  return normalizeWindowMode(session?.mode || currentWindowMode);
}

function getRendererBoardId(target) {
  return getActiveBoardId(getWindowSession(target)?.boardId);
}

function setRendererBoardId(target, boardId) {
  const session = getWindowSession(target);
  const nextBoardId = getActiveBoardId(boardId);
  if (session) {
    session.boardId = nextBoardId;
  }
  return nextBoardId;
}

function updateWindowSessionViewport(target, viewport = null) {
  const session = getWindowSession(target);
  if (!session || !viewport || typeof viewport !== "object") {
    return false;
  }

  const zoom = Number(viewport.zoom);
  session.viewport = {
    x: Number(viewport.x) || 0,
    y: Number(viewport.y) || 0,
    zoom: Number.isFinite(zoom) && zoom > 0 ? zoom : 1
  };
  return true;
}

function registerWindowSession(windowRef, options = {}) {
  if (!windowRef || windowRef.isDestroyed()) {
    return null;
  }

  const key = getWindowSessionKey(windowRef);
  if (key === null) {
    return null;
  }

  const bounds = windowRef.getBounds();
  const display = screen.getDisplayMatching(bounds) || screen.getPrimaryDisplay();
  const session = {
    id: options.id || crypto.randomUUID(),
    role: options.role || "window",
    boardId: getActiveBoardId(options.boardId),
    mode: normalizeWindowMode(options.mode || currentWindowMode),
    displayId: String(options.displayId || display.id || ""),
    viewport: options.viewport || null,
    wallpaperAttached: false,
    wallpaperParentClass: "",
    wallpaperError: null,
    widgetInteractive: false,
    widgetCaptured: false,
    overlayForSessionId: options.overlayForSessionId || ""
  };
  windowRef.__desktopBoardSessionId = session.id;
  windowSessions.set(key, session);
  return session;
}

function unregisterWindowSession(target) {
  const key = getWindowSessionKey(target);
  if (key !== null) {
    removeNativeWebCardViewsForOwner(key);
    windowSessions.delete(key);
  }
}

function isWorkspaceWindowSession(session) {
  return Boolean(session && (session.role === "main" || session.role === "workspace" || session.role === "workspace-overlay"));
}

function getWindowBySessionId(sessionId) {
  if (!sessionId) {
    return null;
  }

  const windows = [
    mainWindow,
    overlayWindow,
    ...workspaceWindows.values(),
    ...workspaceOverlayWindows.values(),
    ...workspaceWallpaperControlWindows.values()
  ];
  return windows.find((windowRef) => {
    const session = getWindowSession(windowRef);
    return session?.id === sessionId;
  }) || null;
}

function getBaseSessionForLocalSession(session) {
  if (!session) {
    return null;
  }

  if (session.role !== "workspace-overlay") {
    return session;
  }

  const baseWindow = getWindowBySessionId(session.overlayForSessionId);
  return getWindowSession(baseWindow) || null;
}

function getLocalWidgetOverlayWindow(session) {
  const baseSession = getBaseSessionForLocalSession(session);
  return baseSession ? workspaceOverlayWindows.get(baseSession.id) || null : null;
}

function getNativeWebCardViewKey(ownerId, cardId) {
  return `${ownerId}:${cardId}`;
}

function normalizeNativeWebCardUrl(value) {
  try {
    const url = new URL(String(value || ""));
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return "";
    }
    return url.href;
  } catch {
    return "";
  }
}

function normalizeNativeWebCardBounds(bounds = {}) {
  const x = Math.max(-32768, Math.round(Number(bounds.x) || 0));
  const y = Math.max(-32768, Math.round(Number(bounds.y) || 0));
  const width = Math.max(1, Math.round(Number(bounds.width) || 0));
  const height = Math.max(1, Math.round(Number(bounds.height) || 0));
  return { x, y, width, height };
}

function destroyNativeWebCardView(entry) {
  if (!entry?.view) {
    return;
  }

  try {
    const ownerWindow = BrowserWindow.fromWebContents(entry.ownerWebContents);
    ownerWindow?.contentView?.removeChildView(entry.view);
  } catch {
    // Ignore view detach failures during window teardown.
  }

  try {
    if (!entry.view.webContents.isDestroyed()) {
      entry.view.webContents.destroy();
    }
  } catch {
    // Ignore web contents teardown failures.
  }
}

function removeNativeWebCardViewsForOwner(ownerId) {
  const ownerKey = String(ownerId);
  Array.from(nativeWebCardViews.entries()).forEach(([key, entry]) => {
    if (String(entry.ownerId) !== ownerKey) {
      return;
    }
    destroyNativeWebCardView(entry);
    nativeWebCardViews.delete(key);
  });
}

function removeNativeWebCardViewsExcept(ownerId, activeKeys) {
  const ownerKey = String(ownerId);
  Array.from(nativeWebCardViews.entries()).forEach(([key, entry]) => {
    if (String(entry.ownerId) !== ownerKey || activeKeys.has(key)) {
      return;
    }
    destroyNativeWebCardView(entry);
    nativeWebCardViews.delete(key);
  });
}

function createNativeWebCardView(ownerWindow, ownerWebContents, ownerId, cardId) {
  if (!WebContentsView || !ownerWindow?.contentView) {
    return null;
  }

  const view = new WebContentsView({
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      partition: "persist:desktop-board-web"
    }
  });

  view.setBackgroundColor("#ffffff");
  view.webContents.setWindowOpenHandler(({ url }) => {
    if (normalizeNativeWebCardUrl(url)) {
      void shell.openExternal(url);
    }
    return { action: "deny" };
  });
  view.webContents.on("did-fail-load", (_event, errorCode, errorDescription, validatedUrl, isMainFrame) => {
    if (isMainFrame && errorCode !== -3) {
      void logError("webCard.load", new Error(`${errorCode}: ${errorDescription}`), { url: validatedUrl });
    }
  });

  ownerWindow.contentView.addChildView(view);
  return {
    ownerId: String(ownerId),
    ownerWebContents,
    cardId: String(cardId),
    url: "",
    view
  };
}

function syncNativeWebCards(ownerWebContents, cards = []) {
  const ownerWindow = BrowserWindow.fromWebContents(ownerWebContents);
  if (!ownerWindow || ownerWindow.isDestroyed()) {
    return false;
  }

  const ownerId = String(ownerWebContents.id);
  const activeKeys = new Set();
  const normalizedCards = Array.isArray(cards) ? cards : [];

  normalizedCards.forEach((card) => {
    const cardId = String(card?.cardId || "");
    const url = normalizeNativeWebCardUrl(card?.url);
    if (!cardId || !url) {
      return;
    }

    const key = getNativeWebCardViewKey(ownerId, cardId);
    let entry = nativeWebCardViews.get(key);
    if (card?.visible === false) {
      if (entry) {
        activeKeys.add(key);
        entry.view.setVisible(false);
      }
      return;
    }

    if (!entry) {
      entry = createNativeWebCardView(ownerWindow, ownerWebContents, ownerId, cardId);
      if (!entry) {
        return;
      }
      nativeWebCardViews.set(key, entry);
    }

    activeKeys.add(key);
    entry.view.setVisible(true);
    entry.view.setBounds(normalizeNativeWebCardBounds(card.bounds));
    try {
      ownerWindow.contentView.addChildView(entry.view);
    } catch (error) {
      void logError("webCard.reorder", error, { cardId });
    }
    if (entry.url !== url) {
      entry.url = url;
      void entry.view.webContents.loadURL(url).catch((error) => {
        void logError("webCard.loadUrl", error, { url });
      });
    }
  });

  removeNativeWebCardViewsExcept(ownerId, activeKeys);
  return true;
}

function reloadNativeWebCard(ownerWebContents, cardId) {
  const ownerId = String(ownerWebContents?.id || "");
  const key = getNativeWebCardViewKey(ownerId, String(cardId || ""));
  const entry = nativeWebCardViews.get(key);
  if (!entry?.view || entry.view.webContents.isDestroyed()) {
    return false;
  }

  entry.view.webContents.reloadIgnoringCache();
  return true;
}

function normalizeBoardName(value, fallback = defaultBoardName) {
  if (typeof value !== "string" || !value.trim()) {
    return fallback;
  }
  return value.trim().slice(0, 120);
}

function normalizeMultiMonitorMode(value, legacyEnabled = false) {
  const normalized = typeof value === "string" ? value.trim().toLowerCase() : "";
  if (supportedMultiMonitorModes.has(normalized)) {
    return normalized;
  }
  return legacyEnabled ? "seamless" : "single";
}

function normalizeDisplayIds(value) {
  if (!Array.isArray(value)) {
    return [];
  }

  return [...new Set(value
    .map((id) => String(id || "").trim())
    .filter(Boolean))];
}

function normalizeAppConfig(config = {}) {
  const multiMonitorMode = normalizeMultiMonitorMode(config.multiMonitorMode, config.multiMonitorEnabled === true);
  return {
    ...defaultAppConfig,
    ...config,
    storagePath: normalizeStoragePath(config.storagePath),
    diagnosticsEnabled: config.diagnosticsEnabled !== false,
    activeBoardId: normalizeBoardId(config.activeBoardId) || defaultBoardId,
    autoStartEnabled: config.autoStartEnabled === true,
    autoManageAssetsOnLaunch: config.autoManageAssetsOnLaunch !== false,
    wallpaperModeEnabled: true,
    wallpaperInteractionEnabled: false,
    multiMonitorEnabled: multiMonitorMode === "seamless",
    multiMonitorMode,
    multiMonitorDisplayIds: normalizeDisplayIds(config.multiMonitorDisplayIds),
    windowMode: normalizeWindowMode(config.windowMode)
  };
}

function isWallpaperModeSupported() {
  return process.platform === "win32";
}

function normalizeWindowMode(value) {
  const normalized = typeof value === "string" ? value.trim().toLowerCase() : "";
  return supportedWindowModes.has(normalized) ? normalized : "normal";
}

function getRectUnion(rects = []) {
  const validRects = rects.filter((rect) => (
    rect
    && Number.isFinite(rect.x)
    && Number.isFinite(rect.y)
    && Number.isFinite(rect.width)
    && Number.isFinite(rect.height)
    && rect.width > 0
    && rect.height > 0
  ));

  if (!validRects.length) {
    return { x: 0, y: 0, width: 1280, height: 720 };
  }

  const left = Math.min(...validRects.map((rect) => rect.x));
  const top = Math.min(...validRects.map((rect) => rect.y));
  const right = Math.max(...validRects.map((rect) => rect.x + rect.width));
  const bottom = Math.max(...validRects.map((rect) => rect.y + rect.height));

  return {
    x: left,
    y: top,
    width: right - left,
    height: bottom - top
  };
}

function getDisplayId(display) {
  return String(display?.id ?? "");
}

function getSelectedBoardDisplays(config = appConfig) {
  const displays = screen.getAllDisplays();
  const primaryDisplay = screen.getPrimaryDisplay();
  const mode = normalizeMultiMonitorMode(config?.multiMonitorMode, config?.multiMonitorEnabled === true);
  const selectedIds = new Set(normalizeDisplayIds(config?.multiMonitorDisplayIds));

  if (mode === "single") {
    const selectedDisplay = selectedIds.size > 0
      ? displays.find((display) => selectedIds.has(getDisplayId(display)))
      : null;
    return [selectedDisplay || primaryDisplay];
  }

  const selectedDisplays = selectedIds.size > 0
    ? displays.filter((display) => selectedIds.has(getDisplayId(display)))
    : displays;

  return selectedDisplays.length ? selectedDisplays : [primaryDisplay];
}

function getMainBoardDisplay(config = appConfig) {
  const selectedDisplays = getSelectedBoardDisplays(config);
  const primaryDisplay = screen.getPrimaryDisplay();
  return selectedDisplays.find((display) => display.id === primaryDisplay.id) || selectedDisplays[0] || primaryDisplay;
}

function isMultiWindowWorkspaceEnabled(config = appConfig) {
  return normalizeMultiMonitorMode(config?.multiMonitorMode, config?.multiMonitorEnabled === true) === "workspace"
    && screen.getAllDisplays().length > 1
    && getSelectedBoardDisplays(config).length > 0;
}

function isMultiMonitorBoardEnabled(config = appConfig) {
  return normalizeMultiMonitorMode(config?.multiMonitorMode, config?.multiMonitorEnabled === true) === "seamless"
    && getSelectedBoardDisplays(config).length > 0;
}

function getBoardWindowBounds(config = appConfig) {
  const primaryDisplay = screen.getPrimaryDisplay();
  const mode = normalizeMultiMonitorMode(config?.multiMonitorMode, config?.multiMonitorEnabled === true);

  if (multiWindowWorkspaceActive || mode === "workspace") {
    const mainDisplay = getMainBoardDisplay(config);
    return { ...(mainDisplay.workArea || mainDisplay.bounds || primaryDisplay.workArea) };
  }

  if (mode !== "seamless") {
    const mainDisplay = getMainBoardDisplay(config);
    return { ...(mainDisplay.workArea || mainDisplay.bounds || primaryDisplay.workArea) };
  }

  return getRectUnion(getSelectedBoardDisplays(config).map((display) => display.workArea || display.bounds));
}

function getDisplayLayoutInfo(config = appConfig, windowRef = null) {
  const displays = screen.getAllDisplays();
  const primaryDisplay = screen.getPrimaryDisplay();
  const selectedDisplayIds = getSelectedBoardDisplays(config).map(getDisplayId);
  const availableDisplays = displays.map((display, index) => {
    const displayBounds = display.workArea || display.bounds;
    const id = getDisplayId(display);
    return {
      id,
      name: display.label || `Display ${index + 1}`,
      primary: display.id === primaryDisplay.id,
      selected: selectedDisplayIds.includes(id),
      scaleFactor: display.scaleFactor,
      x: displayBounds.x,
      y: displayBounds.y,
      width: displayBounds.width,
      height: displayBounds.height
    };
  });
  const session = getWindowSession(windowRef);
  if (session?.role === "workspace" || session?.role === "workspace-overlay") {
    const bounds = windowRef && !windowRef.isDestroyed() ? windowRef.getBounds() : primaryDisplay.workArea;
    const display = displays.find((candidate) => String(candidate.id) === String(session.displayId))
      || screen.getDisplayMatching(bounds)
      || primaryDisplay;
    const displayBounds = display.workArea || display.bounds;
    const width = bounds.width || displayBounds.width;
    const height = bounds.height || displayBounds.height;
    return {
      multiMonitorMode: normalizeMultiMonitorMode(config?.multiMonitorMode, config?.multiMonitorEnabled === true),
      multiMonitorEnabled: false,
      displayCount: displays.length,
      selectedDisplayCount: 1,
      selectedDisplayIds,
      bounds: { x: 0, y: 0, width, height },
      primaryBounds: { x: 0, y: 0, width, height },
      availableDisplays,
      displays: [{
        id: getDisplayId(display),
        name: display.label || "Display",
        primary: display.id === primaryDisplay.id,
        selected: true,
        scaleFactor: display.scaleFactor,
        x: 0,
        y: 0,
        width,
        height
      }]
    };
  }

  const boardBounds = getBoardWindowBounds(config);
  const mainDisplay = getMainBoardDisplay(config);
  const primaryBounds = mainDisplay.workArea || mainDisplay.bounds || primaryDisplay.workArea || primaryDisplay.bounds;
  const layoutDisplays = getSelectedBoardDisplays(config);

  return {
    multiMonitorMode: normalizeMultiMonitorMode(config?.multiMonitorMode, config?.multiMonitorEnabled === true),
    multiMonitorEnabled: isMultiMonitorBoardEnabled(config),
    displayCount: displays.length,
    selectedDisplayCount: layoutDisplays.length,
    selectedDisplayIds,
    bounds: { ...boardBounds },
    primaryBounds: {
      x: primaryBounds.x - boardBounds.x,
      y: primaryBounds.y - boardBounds.y,
      width: primaryBounds.width,
      height: primaryBounds.height
    },
    availableDisplays,
    displays: layoutDisplays.map((display, index) => {
      const displayBounds = display.workArea || display.bounds;
      return {
        id: getDisplayId(display),
        name: display.label || `Display ${index + 1}`,
        primary: display.id === primaryDisplay.id,
        selected: true,
        scaleFactor: display.scaleFactor,
        x: displayBounds.x - boardBounds.x,
        y: displayBounds.y - boardBounds.y,
        width: displayBounds.width,
        height: displayBounds.height
      };
    })
  };
}

function getEffectiveWindowMode(config = appConfig, requestedMode = null) {
  if (!isWallpaperModeSupported() || config?.wallpaperModeEnabled !== true) {
    return "normal";
  }
  return normalizeWindowMode(requestedMode ?? config?.windowMode);
}

function getAppConfigPath() {
  return path.join(app.getPath("userData"), "app-config.json");
}

function getStorageRoot(storageRoot = null) {
  const explicitRoot = normalizeStoragePath(storageRoot || "");
  if (explicitRoot) {
    return explicitRoot;
  }
  return appConfig.storagePath || app.getPath("userData");
}

function getBoardsPath(storageRoot = null) {
  return path.join(getStorageRoot(storageRoot), "boards");
}

function getBoardRoot(storageRoot = null, boardId = null) {
  return path.join(getBoardsPath(storageRoot), getActiveBoardId(boardId));
}

function getLegacyStatePath(storageRoot = null) {
  return path.join(getStorageRoot(storageRoot), "board-state.json");
}

function getLegacyAssetsPath(storageRoot = null) {
  return path.join(getStorageRoot(storageRoot), "assets");
}

function getStatePath(storageRoot = null, boardId = null) {
  return path.join(getBoardRoot(storageRoot, boardId), "board-state.json");
}

function getAssetsPath(storageRoot = null, boardId = null) {
  return path.join(getBoardRoot(storageRoot, boardId), "assets");
}

function getLogsPath(storageRoot = null) {
  return path.join(getStorageRoot(storageRoot), "logs");
}

function getAbsoluteAssetPath(assetRelativePath, storageRoot = null, boardId = null) {
  return path.join(getBoardRoot(storageRoot, boardId), assetRelativePath);
}

function getStorageInfo(storageRoot = null, boardId = null) {
  const root = getStorageRoot(storageRoot);
  const activeBoardId = getActiveBoardId(boardId);
  return {
    root,
    boardsPath: getBoardsPath(root),
    activeBoardId,
    boardRoot: getBoardRoot(root, activeBoardId),
    statePath: getStatePath(root, activeBoardId),
    assetsPath: getAssetsPath(root, activeBoardId),
    logsPath: getLogsPath(root),
    isDefault: !normalizeStoragePath(storageRoot ?? appConfig.storagePath)
  };
}

function getAutoStartSupportReason() {
  if (process.platform !== "win32") {
    return "platform";
  }
  if (!app.isPackaged) {
    return "unpacked";
  }
  return "supported";
}

function isAutoStartSupported() {
  return getAutoStartSupportReason() === "supported";
}

function getAutoStartStatus() {
  const supported = isAutoStartSupported();
  let effective = false;
  try {
    if (process.platform === "win32") {
      effective = Boolean(app.getLoginItemSettings().openAtLogin);
    }
  } catch {
    effective = false;
  }

  return {
    supported,
    reason: getAutoStartSupportReason(),
    enabled: appConfig.autoStartEnabled === true,
    effective: supported ? effective : false
  };
}

function applyAutoStartPreference() {
  if (!isAutoStartSupported()) {
    return getAutoStartStatus();
  }

  app.setLoginItemSettings({
    openAtLogin: appConfig.autoStartEnabled === true,
    path: process.execPath
  });
  return getAutoStartStatus();
}

function getAppConfigForRenderer(target = null) {
  const windowRef = target?.webContents ? target : target ? BrowserWindow.fromWebContents(target) || target : null;
  return {
    ...appConfig,
    appVersion: app.getVersion(),
    storageInfo: getStorageInfo(),
    autoStart: getAutoStartStatus(),
    windowModeSupported: isWallpaperModeSupported(),
    displayLayout: getDisplayLayoutInfo(appConfig, windowRef)
  };
}

function getWindowModeState(target = null) {
  const windowRef = target?.webContents ? target : target ? BrowserWindow.fromWebContents(target) || target : null;
  const session = getWindowSession(windowRef);
  const sessionMode = getWindowSessionMode(windowRef);
  const useSessionWallpaperState = Boolean(multiWindowWorkspaceActive && isWorkspaceWindowSession(session));
  const baseSession = getBaseSessionForLocalSession(session);
  const wallpaperState = useSessionWallpaperState && baseSession
    ? {
        attached: baseSession.wallpaperAttached === true,
        parentClass: baseSession.wallpaperParentClass || "",
        error: baseSession.wallpaperError || null
      }
    : wallpaperAttachmentState;
  const localWidgetOverlayWindow = useSessionWallpaperState && baseSession ? getLocalWidgetOverlayWindow(baseSession) : null;
  const isLocalWidgetMode = useSessionWallpaperState && sessionMode === "widget-mode";
  const localWidgetOverlayVisible = isLocalWidgetMode && (
    session?.role === "workspace-overlay"
    || Boolean(localWidgetOverlayWindow && !localWidgetOverlayWindow.isDestroyed() && localWidgetOverlayWindow.isVisible())
  );
  return {
    supported: isWallpaperModeSupported(),
    enabled: appConfig.wallpaperModeEnabled === true,
    interactionEnabled: appConfig.wallpaperInteractionEnabled === true,
    windowRole: session?.role || "window",
    configuredMode: normalizeWindowMode(appConfig.windowMode),
    currentMode: sessionMode,
    effectiveMode: sessionMode,
    multiMonitorMode: normalizeMultiMonitorMode(appConfig.multiMonitorMode, appConfig.multiMonitorEnabled === true),
    multiWindowWorkspaceActive,
    attachedToWallpaper: wallpaperState.attached === true,
    wallpaperParentClass: wallpaperState.parentClass || "",
    wallpaperError: wallpaperState.error || null,
    overlayVisible: isLocalWidgetMode
      ? localWidgetOverlayVisible
      : Boolean(overlayWindow && !overlayWindow.isDestroyed() && overlayWindow.isVisible()),
    widgetInteractive: isLocalWidgetMode
      ? session.widgetInteractive === true
      : sessionMode === "widget-mode" && widgetOverlayInteractive === true,
    displayLayout: getDisplayLayoutInfo(appConfig, windowRef)
  };
}

function normalizeBoardRelativePath(value) {
  if (typeof value !== "string" || !value.trim()) {
    return "";
  }

  const raw = value.trim().replace(/\\/g, "/");
  if (!raw || raw.startsWith("/")) {
    return "";
  }

  const normalized = path.posix.normalize(raw);
  if (!normalized || normalized === "." || normalized === ".." || normalized.startsWith("../")) {
    return "";
  }

  return normalized;
}

function normalizeAssetRelativePath(value) {
  const normalized = normalizeBoardRelativePath(value);
  return normalized.startsWith("assets/") ? normalized : "";
}

function resolveBoardRelativePath(basePath, relativePath) {
  return path.join(basePath, ...String(relativePath || "").split("/"));
}

function createBoardId() {
  return `board-${crypto.randomUUID().replace(/[^a-z0-9-]/gi, "").toLowerCase()}`;
}

async function movePathIfPossible(sourcePath, targetPath) {
  if (!await pathExists(sourcePath)) {
    return false;
  }

  await ensureDirectory(path.dirname(targetPath));

  if (!await pathExists(targetPath)) {
    await fs.rename(sourcePath, targetPath);
    return true;
  }

  const sourceStats = await fs.stat(sourcePath);
  if (sourceStats.isDirectory()) {
    await fs.cp(sourcePath, targetPath, { recursive: true, force: true });
    await fs.rm(sourcePath, { recursive: true, force: true });
    return true;
  }

  return false;
}

async function ensureBoardStorageLayout(storageRoot = null) {
  const root = getStorageRoot(storageRoot);
  await ensureDirectory(root);
  await ensureDirectory(getBoardsPath(storageRoot));

  const legacyStatePath = getLegacyStatePath(storageRoot);
  const legacyAssetsPath = getLegacyAssetsPath(storageRoot);
  const mainStatePath = getStatePath(storageRoot, defaultBoardId);
  const mainAssetsPath = getAssetsPath(storageRoot, defaultBoardId);

  if (await pathExists(legacyStatePath)) {
    await movePathIfPossible(legacyStatePath, mainStatePath);
  }

  if (await pathExists(legacyAssetsPath)) {
    await movePathIfPossible(legacyAssetsPath, mainAssetsPath);
  }
}

function getFallbackBoardName(boardId = defaultBoardId) {
  return boardId === defaultBoardId ? defaultBoardName : "Board";
}

function buildEmptyBoardState(boardId, boardName, templateState = null) {
  return {
    schemaVersion: stateSchemaVersion,
    boardId,
    boardName: normalizeBoardName(boardName, getFallbackBoardName(boardId)),
    locked: false,
    viewport: {
      x: 0,
      y: 0,
      zoom: 1
    },
    settings: templateState?.settings || {},
    cards: [],
    connections: []
  };
}

async function listBoards(storageRoot = null, currentState = null, activeBoardId = null) {
  await ensureBoardStorageLayout(storageRoot);

  const normalizedActiveBoardId = getActiveBoardId(activeBoardId);
  const boardsPath = getBoardsPath(storageRoot);
  const directoryEntries = await fs.readdir(boardsPath, { withFileTypes: true });
  const boards = [];

  for (const entry of directoryEntries) {
    if (!entry.isDirectory()) {
      continue;
    }

    const boardId = normalizeBoardId(entry.name);
    if (!boardId) {
      continue;
    }

    const statePath = getStatePath(storageRoot, boardId);
    if (!await pathExists(statePath)) {
      continue;
    }

    try {
      const [raw, stats] = await Promise.all([
        fs.readFile(statePath, "utf8"),
        fs.stat(statePath)
      ]);
      let parsed = null;
      try {
        parsed = JSON.parse(raw);
      } catch (parseError) {
        await logError("boards.list.parse", parseError, {
          boardId,
          statePath
        }, storageRoot);
      }
      boards.push({
        id: boardId,
        name: normalizeBoardName(parsed?.boardName, getFallbackBoardName(boardId)),
        cardCount: Array.isArray(parsed?.cards) ? parsed.cards.length : 0,
        updatedAt: stats.mtime.toISOString(),
        exists: true
      });
    } catch (error) {
      console.error("Failed to read board metadata:", error);
      await logError("boards.list", error, { boardId }, storageRoot);
    }
  }

  if (currentState && !boards.some((board) => board.id === normalizedActiveBoardId)) {
    boards.unshift({
      id: normalizedActiveBoardId,
      name: normalizeBoardName(currentState.boardName, getFallbackBoardName(normalizedActiveBoardId)),
      cardCount: Array.isArray(currentState.cards) ? currentState.cards.length : 0,
      updatedAt: null,
      exists: false
    });
  }

  boards.sort((left, right) => {
    if (left.id === normalizedActiveBoardId) {
      return -1;
    }
    if (right.id === normalizedActiveBoardId) {
      return 1;
    }
    const leftTime = left.updatedAt ? Date.parse(left.updatedAt) : 0;
    const rightTime = right.updatedAt ? Date.parse(right.updatedAt) : 0;
    if (leftTime !== rightTime) {
      return rightTime - leftTime;
    }
    return left.name.localeCompare(right.name);
  });

  return boards.map((board) => ({
    ...board,
    isActive: board.id === normalizedActiveBoardId
  }));
}

async function resolveBoardIdForStorage(storageRoot = null, preferredBoardId = null, currentState = null) {
  const boards = await listBoards(storageRoot, currentState, preferredBoardId);
  if (!boards.length) {
    return getActiveBoardId(preferredBoardId);
  }

  const normalizedPreferredBoardId = getActiveBoardId(preferredBoardId);
  const preferredBoard = boards.find((board) => board.id === normalizedPreferredBoardId);
  return preferredBoard?.id || boards[0].id;
}

function shouldSyncLastKnownState(storageRoot = null, boardId = null) {
  return getStorageRoot(storageRoot) === getStorageRoot() && getActiveBoardId(boardId) === getActiveBoardId();
}

function getBoardArchiveDefaultPath() {
  const now = new Date();
  const stamp = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0"),
    String(now.getHours()).padStart(2, "0"),
    String(now.getMinutes()).padStart(2, "0")
  ].join("-");
  return path.join(app.getPath("documents"), `desktop-board-${stamp}.desktopboard`);
}

function collectReferencedAssetPaths(state) {
  const assetPaths = new Set();
  const cards = Array.isArray(state?.cards) ? state.cards : [];
  cards.forEach((card) => {
    if (!isStoredAssetKind(card?.kind)) {
      return;
    }

    const assetRelativePath = normalizeAssetRelativePath(card.assetRelativePath);
    if (assetRelativePath) {
      assetPaths.add(assetRelativePath);
    }
  });
  return [...assetPaths];
}

function collectReferencedAssetUsage(state) {
  const usageByPath = new Map();
  const cards = Array.isArray(state?.cards) ? state.cards : [];

  cards.forEach((card) => {
    if (!isStoredAssetKind(card?.kind)) {
      return;
    }

    const assetRelativePath = normalizeAssetRelativePath(card.assetRelativePath);
    if (!assetRelativePath) {
      return;
    }

    let entry = usageByPath.get(assetRelativePath);
    if (!entry) {
      entry = {
        assetRelativePath,
        fileName: path.posix.basename(assetRelativePath),
        kinds: new Set(),
        cardIds: new Set(),
        cardTitles: new Set()
      };
      usageByPath.set(assetRelativePath, entry);
    }

    if (card.kind) {
      entry.kinds.add(card.kind);
    }
    if (card.id) {
      entry.cardIds.add(card.id);
    }

    const title = typeof card.title === "string" && card.title.trim()
      ? card.title.trim()
      : (typeof card.originalName === "string" ? card.originalName.trim() : "");
    if (title) {
      entry.cardTitles.add(title);
    }
  });

  return [...usageByPath.values()]
    .map((entry) => ({
      assetRelativePath: entry.assetRelativePath,
      fileName: entry.fileName,
      kinds: [...entry.kinds].sort(),
      cardIds: [...entry.cardIds],
      cardTitles: [...entry.cardTitles].sort(),
      cardCount: entry.cardIds.size
    }))
    .sort((left, right) => left.assetRelativePath.localeCompare(right.assetRelativePath));
}

async function listStoredAssetFiles(storageRoot = null, relativeDir = "assets", boardId = null) {
  const directoryPath = resolveBoardRelativePath(getBoardRoot(storageRoot, boardId), relativeDir);
  if (!await pathExists(directoryPath)) {
    return [];
  }

  const directoryEntries = await fs.readdir(directoryPath, { withFileTypes: true });
  const files = [];

  for (const entry of directoryEntries) {
    const relativePath = path.posix.join(relativeDir, entry.name);
    const absolutePath = resolveBoardRelativePath(getBoardRoot(storageRoot, boardId), relativePath);

    if (entry.isDirectory()) {
      files.push(...await listStoredAssetFiles(storageRoot, relativePath, boardId));
      continue;
    }

    if (!entry.isFile()) {
      continue;
    }

    const stats = await fs.stat(absolutePath);
    files.push({
      assetRelativePath: relativePath,
      fileName: path.posix.basename(relativePath),
      absolutePath,
      sizeBytes: stats.size,
      modifiedAt: stats.mtime.toISOString()
    });
  }

  return files.sort((left, right) => left.assetRelativePath.localeCompare(right.assetRelativePath));
}

async function removeEmptyAssetDirectories(storageRoot = null, relativeDir = "assets", boardId = null) {
  const directoryPath = resolveBoardRelativePath(getBoardRoot(storageRoot, boardId), relativeDir);
  if (!await pathExists(directoryPath)) {
    return false;
  }

  const directoryEntries = await fs.readdir(directoryPath, { withFileTypes: true });
  let hasChildren = false;

  for (const entry of directoryEntries) {
    const childRelativePath = path.posix.join(relativeDir, entry.name);
    if (entry.isDirectory()) {
      const childHasChildren = await removeEmptyAssetDirectories(storageRoot, childRelativePath, boardId);
      hasChildren = hasChildren || childHasChildren;
      continue;
    }

    hasChildren = true;
  }

  if (!hasChildren && relativeDir !== "assets") {
    await fs.rm(directoryPath, { recursive: true, force: true });
    return false;
  }

  return hasChildren;
}

function sumAssetSize(entries) {
  return (entries || []).reduce((total, entry) => total + (Number(entry?.sizeBytes) || 0), 0);
}

async function analyzeStoredAssets(currentState = null, storageRoot = null, boardId = null) {
  const sourceState = currentState || lastKnownState || await readState(storageRoot, boardId) || { cards: [] };
  const referencedAssets = collectReferencedAssetUsage(sourceState);
  const storedAssets = await listStoredAssetFiles(storageRoot, "assets", boardId);
  const storedAssetsByPath = new Map(storedAssets.map((entry) => [entry.assetRelativePath, entry]));
  const referencedPaths = new Set(referencedAssets.map((entry) => entry.assetRelativePath));

  const brokenAssets = referencedAssets
    .filter((entry) => !storedAssetsByPath.has(entry.assetRelativePath))
    .map((entry) => ({
      ...entry,
      exists: false
    }));
  const unusedAssets = storedAssets
    .filter((entry) => !referencedPaths.has(entry.assetRelativePath))
    .map((entry) => ({
      ...entry,
      exists: true
    }));
  const referencedExistingAssets = referencedAssets
    .map((entry) => storedAssetsByPath.get(entry.assetRelativePath))
    .filter(Boolean);

  return {
    storageRoot: getStorageRoot(storageRoot),
    assetsPath: getAssetsPath(storageRoot, boardId),
    lastScannedAt: new Date().toISOString(),
    referencedAssetCount: referencedAssets.length,
    storedAssetCount: storedAssets.length,
    brokenAssetCount: brokenAssets.length,
    unusedAssetCount: unusedAssets.length,
    storedSizeBytes: sumAssetSize(storedAssets),
    referencedSizeBytes: sumAssetSize(referencedExistingAssets),
    unusedSizeBytes: sumAssetSize(unusedAssets),
    brokenAssets,
    unusedAssets
  };
}

async function cleanupUnusedStoredAssets(currentState = null, storageRoot = null, boardId = null) {
  const analysis = await analyzeStoredAssets(currentState, storageRoot, boardId);
  const removedAssets = [];

  for (const asset of analysis.unusedAssets) {
    await fs.rm(asset.absolutePath, { force: true });
    removedAssets.push({
      assetRelativePath: asset.assetRelativePath,
      fileName: asset.fileName,
      sizeBytes: asset.sizeBytes
    });
  }

  await removeEmptyAssetDirectories(storageRoot, "assets", boardId);

  const nextAnalysis = await analyzeStoredAssets(currentState, storageRoot, boardId);
  const removedBytes = sumAssetSize(removedAssets);
  await logEvent("info", "assets.cleanup", "Removed unused stored assets", {
    removedCount: removedAssets.length,
    removedBytes,
    storageRoot: getStorageRoot(storageRoot),
    boardId: getActiveBoardId(boardId)
  }, storageRoot);

  return {
    removedCount: removedAssets.length,
    removedBytes,
    removedAssets,
    analysis: nextAnalysis
  };
}

async function ensureDirectory(directoryPath) {
  await fs.mkdir(directoryPath, { recursive: true });
  return directoryPath;
}

async function pathExists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

function normalizeThemePackageAssetReference(value) {
  if (typeof value !== "string") {
    return "";
  }

  const raw = value.trim().replace(/\\/g, "/");
  if (
    !raw
    || raw.startsWith("/")
    || raw.includes("..")
    || /^[a-z][a-z0-9+.-]*:/i.test(raw)
  ) {
    return "";
  }

  const normalized = normalizeBoardRelativePath(raw);
  if (!normalized || !normalized.startsWith("assets/")) {
    return "";
  }

  const extension = path.extname(normalized).toLowerCase();
  return themeAssetExtensions.has(extension) ? normalized : "";
}

function isThemeDataImage(value) {
  return typeof value === "string"
    && /^data:image\/(png|webp|gif|svg\+xml);base64,/i.test(value.trim());
}

function getThemeAssetMimeType(assetPath) {
  return themeAssetMimeTypes[path.extname(assetPath).toLowerCase()] || "";
}

async function encodeThemePackageAsset(packageRoot, assetReference, skippedAssets) {
  if (isThemeDataImage(assetReference)) {
    const dataUri = assetReference.trim();
    if (dataUri.length <= 700000) {
      return dataUri;
    }
    skippedAssets.push({ path: "embedded", reason: "too-large" });
    return "";
  }

  const normalizedReference = normalizeThemePackageAssetReference(assetReference);
  if (!normalizedReference) {
    if (assetReference) {
      skippedAssets.push({ path: String(assetReference).slice(0, 240), reason: "invalid-path" });
    }
    return "";
  }

  const sourcePath = resolveBoardRelativePath(packageRoot, normalizedReference);
  if (!isPathInsideDirectory(sourcePath, packageRoot)) {
    skippedAssets.push({ path: normalizedReference, reason: "outside-package" });
    return "";
  }

  if (!await pathExists(sourcePath)) {
    skippedAssets.push({ path: normalizedReference, reason: "missing" });
    return "";
  }

  const stats = await fs.stat(sourcePath);
  if (!stats.isFile()) {
    skippedAssets.push({ path: normalizedReference, reason: "not-file" });
    return "";
  }
  if (stats.size > maxThemeAssetBytes) {
    skippedAssets.push({ path: normalizedReference, reason: "too-large" });
    return "";
  }

  const mimeType = getThemeAssetMimeType(sourcePath);
  if (!mimeType) {
    skippedAssets.push({ path: normalizedReference, reason: "unsupported-type" });
    return "";
  }

  const buffer = await fs.readFile(sourcePath);
  const dataUri = `data:${mimeType};base64,${buffer.toString("base64")}`;
  if (dataUri.length > 700000) {
    skippedAssets.push({ path: normalizedReference, reason: "too-large" });
    return "";
  }

  return dataUri;
}

async function hydrateThemePackageAssetMap(sourceMap, packageRoot, skippedAssets) {
  if (!sourceMap || typeof sourceMap !== "object" || Array.isArray(sourceMap)) {
    return {};
  }

  const entries = await Promise.all(Object.entries(sourceMap).map(async ([key, value]) => [
    key,
    await encodeThemePackageAsset(packageRoot, value, skippedAssets)
  ]));
  return Object.fromEntries(entries.filter(([, value]) => value));
}

async function hydrateThemePackageAssetsBlock(assets, packageRoot, skippedAssets) {
  if (!assets || typeof assets !== "object" || Array.isArray(assets)) {
    return assets;
  }

  const nextAssets = {
    ...assets
  };
  if (assets.icons && typeof assets.icons === "object" && !Array.isArray(assets.icons)) {
    nextAssets.icons = await hydrateThemePackageAssetMap(assets.icons, packageRoot, skippedAssets);
  }

  if (assets.connection && typeof assets.connection === "object" && !Array.isArray(assets.connection)) {
    nextAssets.connection = await hydrateThemePackageAssetMap(assets.connection, packageRoot, skippedAssets);
  }

  if (assets.actors && typeof assets.actors === "object" && !Array.isArray(assets.actors)) {
    nextAssets.actors = await hydrateThemePackageAssetMap(assets.actors, packageRoot, skippedAssets);
  }

  if (assets.backgrounds && typeof assets.backgrounds === "object" && !Array.isArray(assets.backgrounds)) {
    nextAssets.backgrounds = await hydrateThemePackageAssetMap(assets.backgrounds, packageRoot, skippedAssets);
  }

  if (assets.cardHeaders && typeof assets.cardHeaders === "object" && !Array.isArray(assets.cardHeaders)) {
    nextAssets.cardHeaders = await hydrateThemePackageAssetMap(assets.cardHeaders, packageRoot, skippedAssets);
  }

  if (assets.cardBodies && typeof assets.cardBodies === "object" && !Array.isArray(assets.cardBodies)) {
    nextAssets.cardBodies = await hydrateThemePackageAssetMap(assets.cardBodies, packageRoot, skippedAssets);
  }

  return nextAssets;
}

async function hydrateThemePackageAssets(payload, packageRoot) {
  const nextPayload = JSON.parse(JSON.stringify(payload || {}));
  const skippedAssets = [];
  let importedAssetCount = 0;

  async function hydrateVisualObject(target) {
    if (!target || typeof target !== "object" || !target.assets) {
      return;
    }

    const beforeSkipped = skippedAssets.length;
    target.assets = await hydrateThemePackageAssetsBlock(target.assets, packageRoot, skippedAssets);
    const importedInBlock = Object.values(target.assets?.icons || {}).filter(Boolean).length
      + Object.values(target.assets?.connection || {}).filter(Boolean).length
      + Object.values(target.assets?.actors || {}).filter(Boolean).length
      + Object.values(target.assets?.backgrounds || {}).filter(Boolean).length
      + Object.values(target.assets?.cardHeaders || {}).filter(Boolean).length
      + Object.values(target.assets?.cardBodies || {}).filter(Boolean).length;
    importedAssetCount += importedInBlock;
    if (skippedAssets.length > beforeSkipped) {
      target.assets.skipped = undefined;
    }
  }

  const rootTheme = nextPayload.type === "desktop-board-theme" && nextPayload.theme && typeof nextPayload.theme === "object"
    ? nextPayload.theme
    : nextPayload.type === "desktop-board-color-scheme" && nextPayload.scheme && typeof nextPayload.scheme === "object"
      ? nextPayload.scheme
      : nextPayload;

  await hydrateVisualObject(rootTheme);
  await hydrateVisualObject(rootTheme.visual);
  await hydrateVisualObject(rootTheme.visualTheme);
  await hydrateVisualObject(rootTheme.colorScheme?.visual);
  await hydrateVisualObject(rootTheme.colorScheme?.visualTheme);

  return {
    payload: nextPayload,
    importedAssetCount,
    skippedAssets
  };
}

async function importThemePackage() {
  const result = await dialog.showOpenDialog(mainWindow || undefined, {
    title: "Choose Desktop Board theme folder",
    defaultPath: app.getPath("documents"),
    properties: ["openDirectory"]
  });

  if (result.canceled || result.filePaths.length === 0) {
    return null;
  }

  const packageRoot = result.filePaths[0];
  const manifestPath = path.join(packageRoot, "theme.json");
  if (!await pathExists(manifestPath)) {
    throw new Error("Theme package must contain theme.json");
  }

  const manifestStats = await fs.stat(manifestPath);
  if (!manifestStats.isFile() || manifestStats.size > maxThemeManifestBytes) {
    throw new Error("Theme manifest is missing or too large");
  }

  const manifest = JSON.parse(await fs.readFile(manifestPath, "utf8"));
  const hydrated = await hydrateThemePackageAssets(manifest, packageRoot);
  await logEvent("info", "theme.importPackage", "Imported theme package", {
    packageRoot,
    importedAssetCount: hydrated.importedAssetCount,
    skippedAssetCount: hydrated.skippedAssets.length
  });

  return {
    ...hydrated,
    packageRoot
  };
}

function serializeError(error) {
  if (!error) {
    return null;
  }

  return {
    name: error.name || "Error",
    message: error.message || String(error),
    stack: error.stack || null
  };
}

const updateMessages = {
  ru: {
    updateReadyTitle: "Обновление готово",
    updateReadyMessage: "Версия {version} уже скачана.",
    updateReadyDetail: "Приложение может перезапуститься и установить обновление сейчас.",
    updateInstallNow: "Установить сейчас",
    updateLater: "Позже",
    archiveExportTitle: "Экспорт доски",
    archiveImportTitle: "Импорт доски",
    archiveImportMessage: "Импортировать доску из архива?",
    archiveImportDetail: "Текущая доска в выбранной папке хранения будет заменена.\n\nАрхив: {fileName}",
    archiveImportNow: "Импортировать",
    archiveImportCancel: "Отмена"
  },
  en: {
    updateReadyTitle: "Update ready",
    updateReadyMessage: "Version {version} has been downloaded.",
    updateReadyDetail: "The app can restart and install the update now.",
    updateInstallNow: "Install now",
    updateLater: "Later",
    archiveExportTitle: "Export board archive",
    archiveImportTitle: "Import board archive",
    archiveImportMessage: "Import the board from this archive?",
    archiveImportDetail: "The current board in the selected storage folder will be replaced.\n\nArchive: {fileName}",
    archiveImportNow: "Import",
    archiveImportCancel: "Cancel"
  }
};

function getUiLanguage() {
  const mode = lastKnownState?.settings?.languageMode;
  if (mode === "ru" || mode === "en") {
    return mode;
  }

  return app.getLocale().toLowerCase().startsWith("ru") ? "ru" : "en";
}

function tMain(key, replacements = {}) {
  const language = updateMessages[getUiLanguage()] ? getUiLanguage() : "en";
  const template = updateMessages[language][key] || updateMessages.en[key] || key;
  return Object.entries(replacements).reduce(
    (text, [name, value]) => text.replaceAll(`{${name}}`, String(value)),
    template
  );
}

function isPortableBuild() {
  return Boolean(process.env.PORTABLE_EXECUTABLE_DIR || process.env.PORTABLE_EXECUTABLE_FILE);
}

function parseFlatYamlConfig(source = "") {
  const result = {};
  String(source || "")
    .split(/\r?\n/)
    .forEach((line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) {
        return;
      }
      const match = trimmed.match(/^([A-Za-z0-9_]+):\s*(.+?)\s*$/);
      if (!match) {
        return;
      }
      const key = match[1];
      const rawValue = match[2];
      result[key] = rawValue.replace(/^["']|["']$/g, "");
    });
  return result;
}

function getGitHubPublishConfig() {
  const publishEntries = Array.isArray(packageJson?.build?.publish)
    ? packageJson.build.publish
    : packageJson?.build?.publish
      ? [packageJson.build.publish]
      : [];
  const githubConfig = publishEntries.find((entry) => entry?.provider === "github" && entry.owner && entry.repo);
  if (!githubConfig) {
    try {
      const updateConfigPath = path.join(process.resourcesPath, "app-update.yml");
      if (fsSync.existsSync(updateConfigPath)) {
        const parsedConfig = parseFlatYamlConfig(fsSync.readFileSync(updateConfigPath, "utf8"));
        if (parsedConfig.provider === "github" && parsedConfig.owner && parsedConfig.repo) {
          return {
            owner: String(parsedConfig.owner),
            repo: String(parsedConfig.repo)
          };
        }
      }
    } catch {
      return null;
    }
    return null;
  }

  return {
    owner: String(githubConfig.owner),
    repo: String(githubConfig.repo)
  };
}

function normalizeReleaseVersion(value) {
  return String(value || "")
    .trim()
    .replace(/^v/i, "")
    .replace(/\s+/g, "");
}

function compareVersions(left, right) {
  const leftParts = normalizeReleaseVersion(left).split(".").map((part) => Number.parseInt(part, 10) || 0);
  const rightParts = normalizeReleaseVersion(right).split(".").map((part) => Number.parseInt(part, 10) || 0);
  const maxLength = Math.max(leftParts.length, rightParts.length);

  for (let index = 0; index < maxLength; index += 1) {
    const leftValue = leftParts[index] || 0;
    const rightValue = rightParts[index] || 0;
    if (leftValue > rightValue) {
      return 1;
    }
    if (leftValue < rightValue) {
      return -1;
    }
  }

  return 0;
}

function findInstallerAsset(assets = []) {
  if (!Array.isArray(assets)) {
    return null;
  }

  return assets.find((asset) => /\.exe$/i.test(asset?.name || "") && !/\.blockmap$/i.test(asset?.name || "") && /setup/i.test(asset?.name || ""))
    || assets.find((asset) => /\.exe$/i.test(asset?.name || "") && !/\.blockmap$/i.test(asset?.name || ""));
}

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

function loadNativeImage(assetPath) {
  const image = nativeImage.createFromPath(assetPath);
  return image.isEmpty() ? null : image;
}

function getMainWindowHandleValue(windowRef = mainWindow) {
  if (!windowRef || windowRef.isDestroyed()) {
    return "";
  }

  const nativeHandle = windowRef.getNativeWindowHandle?.();
  if (!Buffer.isBuffer(nativeHandle)) {
    return "";
  }

  if (nativeHandle.length >= 8 && typeof nativeHandle.readBigUInt64LE === "function") {
    return nativeHandle.readBigUInt64LE(0).toString();
  }

  if (nativeHandle.length >= 4) {
    return String(nativeHandle.readUInt32LE(0));
  }

  return "";
}

async function runWallpaperHelper(action, windowRef = mainWindow) {
  if (!isWallpaperModeSupported()) {
    return {
      ok: false,
      action,
      error: "Wallpaper mode is supported only on Windows."
    };
  }

  const windowHandle = getMainWindowHandleValue(windowRef);
  if (!windowHandle) {
    return {
      ok: false,
      action,
      error: "Could not resolve native window handle."
    };
  }

  return new Promise((resolve, reject) => {
    const child = spawn("powershell.exe", [
      "-NoProfile",
      "-NonInteractive",
      "-ExecutionPolicy",
      "Bypass",
      "-File",
      wallpaperHelperScriptPath,
      "-Action",
      action,
      "-WindowHandle",
      windowHandle
    ], {
      windowsHide: true,
      stdio: ["ignore", "pipe", "pipe"]
    });

    let stdout = "";
    let stderr = "";

    child.stdout.on("data", (chunk) => {
      stdout += String(chunk);
    });

    child.stderr.on("data", (chunk) => {
      stderr += String(chunk);
    });

    child.on("error", reject);
    child.on("close", (code) => {
      const output = stdout.trim();
      if (!output) {
        if (code === 0) {
          resolve({
            ok: false,
            action,
            error: "Wallpaper helper did not return a result."
          });
          return;
        }
        reject(new Error(stderr.trim() || `Wallpaper helper exited with code ${code}.`));
        return;
      }

      try {
        resolve(JSON.parse(output));
      } catch (error) {
        reject(new Error(`Wallpaper helper returned invalid JSON. ${stderr.trim() || output}`.trim()));
      }
    });
  });
}

async function runForegroundHelper() {
  if (!isWallpaperModeSupported()) {
    return {
      ok: false,
      error: "Foreground watcher is supported only on Windows."
    };
  }

  return new Promise((resolve, reject) => {
    const child = spawn("powershell.exe", [
      "-NoProfile",
      "-NonInteractive",
      "-ExecutionPolicy",
      "Bypass",
      "-File",
      foregroundHelperScriptPath
    ], {
      windowsHide: true,
      stdio: ["ignore", "pipe", "pipe"]
    });

    let stdout = "";
    let stderr = "";

    child.stdout.on("data", (chunk) => {
      stdout += String(chunk);
    });

    child.stderr.on("data", (chunk) => {
      stderr += String(chunk);
    });

    child.on("error", reject);
    child.on("close", (code) => {
      const output = stdout.trim();
      if (!output) {
        if (code === 0) {
          resolve({
            ok: false,
            error: "Foreground helper did not return a result."
          });
          return;
        }
        reject(new Error(stderr.trim() || `Foreground helper exited with code ${code}.`));
        return;
      }

      try {
        resolve(JSON.parse(output));
      } catch (error) {
        reject(new Error(`Foreground helper returned invalid JSON. ${stderr.trim() || output}`.trim()));
      }
    });
  });
}

function isWallpaperManagedMode(mode = currentWindowMode) {
  const nextMode = normalizeWindowMode(mode);
  return appConfig.wallpaperModeEnabled === true && (nextMode === "wallpaper-view" || nextMode === "widget-mode");
}

function isAnyBoardWindowVisible() {
  const isVisible = (windowRef) => Boolean(windowRef && !windowRef.isDestroyed() && windowRef.isVisible());
  return isVisible(mainWindow)
    || isVisible(overlayWindow)
    || Array.from(workspaceWindows.values()).some((windowRef) => isVisible(windowRef))
    || Array.from(workspaceOverlayWindows.values()).some((windowRef) => isVisible(windowRef))
    || Array.from(workspaceWallpaperControlWindows.values()).some((windowRef) => isVisible(windowRef))
    || isVisible(wallpaperControlWindow);
}

function getKnownDesktopBoardHandles() {
  return new Set(
    [
      mainWindow,
      overlayWindow,
      ...workspaceWindows.values(),
      ...workspaceOverlayWindows.values(),
      ...workspaceWallpaperControlWindows.values(),
      wallpaperControlWindow
    ]
      .map((windowRef) => getMainWindowHandleValue(windowRef))
      .filter(Boolean)
  );
}

function clearForegroundAutomationFlags() {
  foregroundState.externalFullscreenActive = false;
  foregroundState.pendingExternalFullscreenActive = null;
  foregroundState.stableSampleCount = 0;
  foregroundState.autoHidden = false;
  foregroundState.manualHidden = false;
  foregroundState.error = null;
}

function hideBoardWindows(options = {}) {
  const manual = options.manual === true;
  ensureTray();

  if (currentWindowMode === "widget-mode") {
    widgetOverlayInteractive = false;
    widgetOverlayCaptured = false;
  }

  if (overlayWindow && !overlayWindow.isDestroyed() && overlayWindow.isVisible()) {
    overlayWindow.hide();
  }
  Array.from(workspaceWindows.values()).forEach((windowRef) => {
    if (windowRef && !windowRef.isDestroyed() && windowRef.isVisible()) {
      windowRef.hide();
    }
  });
  Array.from(workspaceOverlayWindows.values()).forEach((windowRef) => {
    if (windowRef && !windowRef.isDestroyed() && windowRef.isVisible()) {
      windowRef.hide();
    }
  });
  Array.from(workspaceWallpaperControlWindows.values()).forEach((windowRef) => {
    if (windowRef && !windowRef.isDestroyed() && windowRef.isVisible()) {
      windowRef.hide();
    }
  });

  hideWallpaperControlWindow();

  if (mainWindow && !mainWindow.isDestroyed() && mainWindow.isVisible()) {
    mainWindow.hide();
  }

  foregroundState.manualHidden = manual;
  foregroundState.autoHidden = manual !== true;
  updateTrayMenu();
  sendWindowModeState();
  return true;
}

function restoreBoardWindowsAfterAutoHide() {
  if (!isWallpaperManagedMode(currentWindowMode)) {
    clearForegroundAutomationFlags();
    return false;
  }

  foregroundState.autoHidden = false;
  if (foregroundState.manualHidden) {
    return false;
  }

  showWindowForMode(currentWindowMode);
  return true;
}

function updateForegroundWatcher() {
  const shouldWatch = isWallpaperManagedMode(currentWindowMode);

  if (!shouldWatch) {
    if (foregroundWatchTimer) {
      clearInterval(foregroundWatchTimer);
      foregroundWatchTimer = null;
    }
    foregroundWatchInFlight = false;
    clearForegroundAutomationFlags();
    return false;
  }

  if (!foregroundWatchTimer) {
    foregroundWatchTimer = setInterval(() => {
      void pollForegroundWindowState();
    }, foregroundWatchIntervalMs);
  }

  return true;
}

function getConfirmedExternalFullscreenState(observedValue) {
  const observed = observedValue === true;

  if (observed === foregroundState.externalFullscreenActive) {
    foregroundState.pendingExternalFullscreenActive = null;
    foregroundState.stableSampleCount = 0;
    return foregroundState.externalFullscreenActive;
  }

  if (foregroundState.pendingExternalFullscreenActive !== observed) {
    foregroundState.pendingExternalFullscreenActive = observed;
    foregroundState.stableSampleCount = 1;
  } else {
    foregroundState.stableSampleCount += 1;
  }

  const requiredSamples = observed ? foregroundFullscreenEnterSamples : foregroundFullscreenExitSamples;
  if (foregroundState.stableSampleCount < requiredSamples) {
    return foregroundState.externalFullscreenActive;
  }

  foregroundState.externalFullscreenActive = observed;
  foregroundState.pendingExternalFullscreenActive = null;
  foregroundState.stableSampleCount = 0;
  return foregroundState.externalFullscreenActive;
}

async function pollForegroundWindowState() {
  if (foregroundWatchInFlight || !isWallpaperManagedMode(currentWindowMode) || isQuitting) {
    return false;
  }

  foregroundWatchInFlight = true;

  try {
    const result = await runForegroundHelper();
    if (result?.ok !== true) {
      const message = String(result?.error || "Foreground helper failed.");
      if (foregroundState.error !== message) {
        foregroundState.error = message;
        await logError("foreground.watch", new Error(message), {
          mode: currentWindowMode
        });
      }
      return false;
    }

    foregroundState.error = null;
    foregroundState.foregroundClassName = String(result.className || "");
    foregroundState.foregroundProcessName = String(result.processName || "");

    const foregroundHandle = String(result.windowHandle || "");
    const isOwnWindow = foregroundHandle && getKnownDesktopBoardHandles().has(foregroundHandle);
    const observedExternalFullscreenActive = result.isFullscreen === true && result.isPrimaryMonitor === true && !isOwnWindow;
    const previousExternalFullscreenActive = foregroundState.externalFullscreenActive;
    const externalFullscreenActive = getConfirmedExternalFullscreenState(observedExternalFullscreenActive);

    if (externalFullscreenActive === previousExternalFullscreenActive) {
      return externalFullscreenActive;
    }

    await syncOverlayWindowVisibility();
    syncWallpaperControlWindowVisibility();
    syncAllLocalWallpaperControlWindows();
    return externalFullscreenActive;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    if (foregroundState.error !== message) {
      foregroundState.error = message;
      await logError("foreground.watch", error instanceof Error ? error : new Error(message), {
        mode: currentWindowMode
      });
    }
    return false;
  } finally {
    foregroundWatchInFlight = false;
  }
}

async function syncWallpaperAttachment(mode = currentWindowMode) {
  const nextMode = normalizeWindowMode(mode);
  if (!isWallpaperModeSupported()) {
    wallpaperAttachmentState = {
      attached: false,
      parentClass: "",
      error: "Wallpaper mode is supported only on Windows."
    };
    sendWindowModeState();
    return false;
  }

  if (!mainWindow || mainWindow.isDestroyed()) {
    wallpaperAttachmentState = {
      attached: false,
      parentClass: "",
      error: null
    };
    sendWindowModeState();
    return false;
  }

  const shouldAttach = appConfig.wallpaperModeEnabled === true && (nextMode === "wallpaper-view" || nextMode === "widget-mode");
  const action = shouldAttach ? "attach" : "detach";
  const result = await runWallpaperHelper(action, mainWindow);

  if (result?.ok !== true) {
    const message = String(result?.error || `Wallpaper helper failed during ${action}.`);
    wallpaperAttachmentState = {
      attached: shouldAttach && wallpaperAttachmentState.attached === true,
      parentClass: shouldAttach ? wallpaperAttachmentState.parentClass : "",
      error: message
    };
    throw new Error(message);
  }

  wallpaperAttachmentState = {
    attached: shouldAttach,
    parentClass: shouldAttach ? String(result.parentClass || "") : "",
    error: null
  };
  sendWindowModeState();
  return shouldAttach;
}

function queueWallpaperAttachmentSync(mode = currentWindowMode) {
  const nextMode = normalizeWindowMode(mode);
  wallpaperAttachmentPromise = wallpaperAttachmentPromise.then(async () => {
    try {
      await syncWallpaperAttachment(nextMode);
    } catch (error) {
      await logError("wallpaper.sync", error, {
        mode: nextMode,
        attached: wallpaperAttachmentState.attached,
        parentClass: wallpaperAttachmentState.parentClass
      });

      if ((nextMode === "wallpaper-view" || nextMode === "widget-mode") && currentWindowMode === nextMode) {
        currentWindowMode = getEffectiveWindowMode(appConfig, "normal");
        if (mainWindow && !mainWindow.isDestroyed()) {
          mainWindow.setIgnoreMouseEvents(false);
          mainWindow.setFocusable(true);
          mainWindow.setSkipTaskbar(false);
          updateTrayMenu();
        }
      }

      sendWindowModeState();
    }
  });

  return wallpaperAttachmentPromise;
}

async function fetchJsonWithTimeout(url, options = {}, timeoutMs = 15000) {
  const controller = new AbortController();
  const timeoutHandle = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
      headers: {
        Accept: "application/vnd.github+json",
        "User-Agent": `DesktopBoard/${app.getVersion()}`,
        ...(options.headers || {})
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status} ${response.statusText}`.trim());
    }

    return await response.json();
  } finally {
    clearTimeout(timeoutHandle);
  }
}

async function fetchLatestGitHubRelease() {
  const githubConfig = getGitHubPublishConfig();
  if (!githubConfig) {
    throw new Error("GitHub release feed is not configured.");
  }

  let lastError = null;
  for (let attempt = 0; attempt < 3; attempt += 1) {
    try {
      const release = await fetchJsonWithTimeout(
        `https://api.github.com/repos/${githubConfig.owner}/${githubConfig.repo}/releases/latest`
      );
      return {
        version: normalizeReleaseVersion(release?.tag_name || release?.name || ""),
        htmlUrl: typeof release?.html_url === "string" ? release.html_url : "",
        installerAsset: findInstallerAsset(release?.assets),
        raw: release
      };
    } catch (error) {
      lastError = error;
      if (attempt < 2) {
        await delay(1200 * (attempt + 1));
      }
    }
  }

  throw lastError || new Error("Could not load the latest GitHub release.");
}

function getUpdateDownloadDirectory() {
  return path.join(app.getPath("userData"), "updates");
}

function buildManualUpdateFileName(assetName, version) {
  const extension = path.extname(String(assetName || "")).trim() || ".exe";
  const rawBaseName = path.parse(String(assetName || "")).name || `Desktop Board Setup ${version || "latest"}`;
  const baseName = sanitizeStoredAssetBaseName(rawBaseName, `Desktop Board Setup ${version || "latest"}`, extension);
  const safeVersion = normalizeReleaseVersion(version) || "latest";
  return `${baseName}-${safeVersion}${extension}`;
}

function getManualUpdateFilePath(assetName, version) {
  return path.join(getUpdateDownloadDirectory(), buildManualUpdateFileName(assetName, version));
}

async function isMatchingDownloadedUpdate(filePath, expectedSize = null) {
  if (!filePath || !await pathExists(filePath)) {
    return false;
  }

  if (!Number.isFinite(Number(expectedSize)) || Number(expectedSize) <= 0) {
    return true;
  }

  try {
    const stats = await fs.stat(filePath);
    return stats.size === Number(expectedSize);
  } catch {
    return false;
  }
}

async function cleanupStaleUpdateFiles(activeFilePath = null) {
  const updatesDirectory = getUpdateDownloadDirectory();
  if (!await pathExists(updatesDirectory)) {
    return;
  }

  const activeResolvedPath = activeFilePath ? path.resolve(activeFilePath) : null;
  const entries = await fs.readdir(updatesDirectory, { withFileTypes: true });
  await Promise.all(entries.map(async (entry) => {
    if (!entry.isFile()) {
      return;
    }

    const entryPath = path.join(updatesDirectory, entry.name);
    if (activeResolvedPath && path.resolve(entryPath) === activeResolvedPath) {
      return;
    }

    await removeFileIfExists(entryPath);
  }));
}

async function downloadFileWithProgress(url, destinationPath, onProgress = () => {}) {
  const tempPath = `${destinationPath}.download`;
  await ensureDirectory(path.dirname(destinationPath));
  await removeFileIfExists(tempPath);

  const response = await fetch(url, {
    headers: {
      "User-Agent": `DesktopBoard/${app.getVersion()}`
    }
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} ${response.statusText}`.trim());
  }

  const totalBytes = Number.parseInt(response.headers.get("content-length") || "", 10);
  const writer = fsSync.createWriteStream(tempPath);

  try {
    if (!response.body?.getReader) {
      const buffer = Buffer.from(await response.arrayBuffer());
      await fs.writeFile(tempPath, buffer);
      onProgress(100);
    } else {
      const reader = response.body.getReader();
      let receivedBytes = 0;

      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }

        const chunk = Buffer.from(value);
        receivedBytes += chunk.length;
        if (!writer.write(chunk)) {
          await new Promise((resolve) => writer.once("drain", resolve));
        }

        if (totalBytes > 0) {
          onProgress((receivedBytes / totalBytes) * 100);
        }
      }

      if (totalBytes <= 0) {
        onProgress(100);
      }
    }

    await new Promise((resolve, reject) => {
      writer.once("finish", resolve);
      writer.once("error", reject);
      writer.end();
    });

    await removeFileIfExists(destinationPath);
    await fs.rename(tempPath, destinationPath);
  } catch (error) {
    writer.destroy();
    await removeFileIfExists(tempPath);
    throw error;
  }
}

async function beginManualUpdateDownload(downloadInfo = {}, source = "manualFallback") {
  const availableVersion = normalizeReleaseVersion(downloadInfo.version);
  const downloadUrl = String(downloadInfo.downloadUrl || "").trim();
  const releaseUrl = String(downloadInfo.releaseUrl || "").trim() || downloadUrl || null;
  const assetName = String(downloadInfo.assetName || "").trim() || `Desktop-Board-Setup-${availableVersion || "latest"}.exe`;
  const assetSize = Number(downloadInfo.assetSizeBytes);

  if (!availableVersion || !downloadUrl) {
    return false;
  }

  if (manualUpdateDownloadPromise) {
    return true;
  }

  const downloadedFilePath = getManualUpdateFilePath(assetName, availableVersion);
  if (await isMatchingDownloadedUpdate(downloadedFilePath, assetSize)) {
    await cleanupStaleUpdateFiles(downloadedFilePath);
    setAutoUpdateState({
      checking: false,
      phase: "downloaded",
      availableVersion,
      downloadedVersion: availableVersion,
      progressPercent: 100,
      downloadUrl,
      releaseUrl,
      downloadAssetName: assetName,
      downloadSizeBytes: Number.isFinite(assetSize) ? assetSize : null,
      downloadStrategy: "manual",
      downloadedFilePath,
      error: null,
      lastCheckedAt: new Date().toISOString()
    });
    void promptInstallDownloadedUpdate(availableVersion);
    return true;
  }

  setAutoUpdateState({
    checking: false,
    phase: "downloading",
    availableVersion,
    downloadedVersion: null,
    progressPercent: 0,
    downloadUrl,
    releaseUrl,
    downloadAssetName: assetName,
    downloadSizeBytes: Number.isFinite(assetSize) ? assetSize : null,
    downloadStrategy: "manual",
    downloadedFilePath: null,
    error: null,
    lastCheckedAt: new Date().toISOString()
  });

  manualUpdateDownloadPromise = (async () => {
    try {
      await cleanupStaleUpdateFiles(downloadedFilePath);
      await downloadFileWithProgress(downloadUrl, downloadedFilePath, (percent) => {
        setAutoUpdateState({
          checking: false,
          phase: "downloading",
          progressPercent: Number.isFinite(percent) ? Math.max(0, Math.min(100, percent)) : 0
        });
      });

      setAutoUpdateState({
        checking: false,
        phase: "downloaded",
        availableVersion,
        downloadedVersion: availableVersion,
        progressPercent: 100,
        downloadUrl,
        releaseUrl,
        downloadAssetName: assetName,
        downloadSizeBytes: Number.isFinite(assetSize) ? assetSize : null,
        downloadStrategy: "manual",
        downloadedFilePath,
        error: null,
        lastCheckedAt: new Date().toISOString()
      });
      await logEvent("info", "updates.manualDownloaded", "Downloaded installer via GitHub release asset", {
        source,
        availableVersion,
        assetName
      });
      void promptInstallDownloadedUpdate(availableVersion);
      return true;
    } catch (error) {
      await logError("updates.manualDownload", error, {
        source,
        availableVersion,
        url: downloadUrl
      });
      setAutoUpdateState({
        checking: false,
        phase: "available",
        availableVersion,
        downloadedVersion: null,
        progressPercent: 0,
        downloadUrl,
        releaseUrl,
        downloadAssetName: assetName,
        downloadSizeBytes: Number.isFinite(assetSize) ? assetSize : null,
        downloadStrategy: "manual",
        downloadedFilePath: null,
        error: null,
        lastCheckedAt: new Date().toISOString()
      });
      return false;
    } finally {
      manualUpdateDownloadPromise = null;
    }
  })();

  return true;
}

async function applyGitHubReleaseFallback(source = "manual", originalError = null) {
  const githubConfig = getGitHubPublishConfig();
  if (!githubConfig) {
    return false;
  }

  try {
    const release = await fetchLatestGitHubRelease();
    const currentVersion = app.getVersion();
    const installerUrl = release.installerAsset?.browser_download_url || "";
    const releaseUrl = release.htmlUrl || installerUrl || "";
    const installerAssetName = release.installerAsset?.name || null;
    const installerAssetSize = Number(release.installerAsset?.size);
    const hasUpdate = release.version && compareVersions(release.version, currentVersion) > 0;

    if (hasUpdate) {
      setAutoUpdateState({
        checking: false,
        phase: "available",
        availableVersion: release.version,
        downloadedVersion: null,
        progressPercent: 0,
        error: null,
        lastCheckedAt: new Date().toISOString(),
        downloadUrl: installerUrl || releaseUrl || null,
        releaseUrl: releaseUrl || null,
        downloadAssetName: installerAssetName,
        downloadSizeBytes: Number.isFinite(installerAssetSize) ? installerAssetSize : null,
        downloadStrategy: installerUrl ? "manual" : null,
        downloadedFilePath: null
      });
      await logEvent("info", "updates.githubFallback", "Resolved update via GitHub release API", {
        source,
        currentVersion,
        availableVersion: release.version,
        hadOriginalError: Boolean(originalError)
      });
      if (installerUrl) {
        void beginManualUpdateDownload({
          version: release.version,
          downloadUrl: installerUrl,
          releaseUrl,
          assetName: installerAssetName,
          assetSizeBytes: installerAssetSize
        }, source);
      }
      return true;
    }

    setAutoUpdateState({
      checking: false,
      phase: "idle",
      availableVersion: null,
      downloadedVersion: null,
        progressPercent: 0,
        error: null,
        lastCheckedAt: new Date().toISOString(),
        downloadUrl: installerUrl || null,
        releaseUrl: releaseUrl || null,
        downloadAssetName: installerAssetName,
        downloadSizeBytes: Number.isFinite(installerAssetSize) ? installerAssetSize : null,
        downloadStrategy: null,
        downloadedFilePath: null
      });
    await logEvent("info", "updates.githubFallback", "Checked GitHub release API and found no newer version", {
      source,
      currentVersion,
      latestReleaseVersion: release.version || ""
    });
    return true;
  } catch (fallbackError) {
    await logError("updates.githubFallback", fallbackError, {
      source,
      originalError: serializeError(originalError)
    });
    return false;
  }
}

async function resolveAutoUpdateSupport() {
  if (process.platform !== "win32") {
    return { supported: false, reason: "platform", autoUpdaterEnabled: false, githubFallbackEnabled: false };
  }

  if (!app.isPackaged) {
    return { supported: false, reason: "unpacked", autoUpdaterEnabled: false, githubFallbackEnabled: false };
  }

  if (isPortableBuild()) {
    return { supported: false, reason: "portable", autoUpdaterEnabled: false, githubFallbackEnabled: false };
  }

  const configPath = path.join(process.resourcesPath, "app-update.yml");
  const autoUpdaterEnabled = await pathExists(configPath);
  const githubFallbackEnabled = Boolean(getGitHubPublishConfig());
  if (!autoUpdaterEnabled && !githubFallbackEnabled) {
    return { supported: false, reason: "missing-config", autoUpdaterEnabled: false, githubFallbackEnabled: false };
  }

  return {
    supported: true,
    reason: null,
    autoUpdaterEnabled,
    githubFallbackEnabled
  };
}

function createAutoUpdateState(overrides = {}) {
  return {
    supported: false,
    reason: "unknown",
    phase: "disabled",
    checking: false,
    currentVersion: app.getVersion(),
    availableVersion: null,
    downloadedVersion: null,
    progressPercent: 0,
    lastCheckedAt: null,
    downloadUrl: null,
    releaseUrl: null,
    downloadAssetName: null,
    downloadSizeBytes: null,
    downloadStrategy: null,
    downloadedFilePath: null,
    error: null,
    ...overrides
  };
}

function sendAutoUpdateState() {
  return sendRendererEvent("updates:state", getAutoUpdateStateForRenderer());
}

function setAutoUpdateState(patch = {}) {
  autoUpdateState = createAutoUpdateState({
    ...autoUpdateState,
    ...patch,
    currentVersion: app.getVersion()
  });
  sendAutoUpdateState();
  return autoUpdateState;
}

function getAutoUpdateStateForRenderer() {
  return createAutoUpdateState(autoUpdateState || {});
}

function queueLogWrite(entry, storageRoot = null) {
  logWriteQueue = logWriteQueue
    .then(async () => {
      if (!appConfig.diagnosticsEnabled) {
        return;
      }

      const logFilePath = path.join(getLogsPath(storageRoot), "desktop-board.log");
      await ensureDirectory(path.dirname(logFilePath));
      await fs.appendFile(logFilePath, `${JSON.stringify(entry)}\n`, "utf8");
    })
    .catch(() => {});

  return logWriteQueue;
}

function logEvent(level, scope, message, details = {}, storageRoot = null) {
  return queueLogWrite({
    ts: new Date().toISOString(),
    level,
    scope,
    message,
    details,
    sessionId,
    version: app.getVersion(),
    platform: process.platform
  }, storageRoot);
}

function logError(scope, error, details = {}, storageRoot = null) {
  return logEvent("error", scope, error?.message || String(error), {
    ...details,
    error: serializeError(error)
  }, storageRoot);
}

async function readAppConfig() {
  try {
    const raw = await fs.readFile(getAppConfigPath(), "utf8");
    appConfig = normalizeAppConfig(JSON.parse(raw));
  } catch (error) {
    if (error.code !== "ENOENT") {
      console.error("Failed to read app config:", error);
    }
    appConfig = normalizeAppConfig(defaultAppConfig);
  }

  return appConfig;
}

async function writeAppConfig(nextConfig) {
  appConfig = normalizeAppConfig(nextConfig);
  multiWindowWorkspaceActive = isMultiWindowWorkspaceEnabled(appConfig);
  const filePath = getAppConfigPath();
  await ensureDirectory(path.dirname(filePath));
  await fs.writeFile(filePath, JSON.stringify(appConfig, null, 2), "utf8");
  try {
    applyAutoStartPreference();
  } catch (error) {
    await logError("config.autostart", error, {
      enabled: appConfig.autoStartEnabled,
      packaged: app.isPackaged
    });
    throw error;
  }
  syncCurrentWindowModeFromConfig();
  syncWorkspaceWindows();
  await syncOverlayWindowVisibility();
  sendWindowModeState();
  return getAppConfigForRenderer();
}

async function updateAppConfig(partial = {}, target = null) {
  await writeAppConfig({
    ...appConfig,
    ...partial
  });
  const nextConfig = getAppConfigForRenderer(target);
  await logEvent("info", "config", "Updated app config", {
    storagePath: nextConfig.storagePath || "",
    diagnosticsEnabled: nextConfig.diagnosticsEnabled,
    activeBoardId: nextConfig.activeBoardId,
    autoStartEnabled: nextConfig.autoStartEnabled === true,
    autoManageAssetsOnLaunch: nextConfig.autoManageAssetsOnLaunch === true,
    wallpaperModeEnabled: nextConfig.wallpaperModeEnabled === true,
    wallpaperInteractionEnabled: nextConfig.wallpaperInteractionEnabled === true,
    multiMonitorEnabled: nextConfig.multiMonitorEnabled === true,
    multiMonitorMode: normalizeMultiMonitorMode(nextConfig.multiMonitorMode, nextConfig.multiMonitorEnabled === true),
    multiMonitorDisplayIds: normalizeDisplayIds(nextConfig.multiMonitorDisplayIds),
    windowMode: normalizeWindowMode(nextConfig.windowMode)
  });
  return nextConfig;
}

function isMediaKind(kind) {
  return mediaKinds.has(kind);
}

function isStoredAssetKind(kind) {
  return storedAssetKinds.has(kind);
}

function isAbsoluteFilePath(value) {
  return typeof value === "string" && path.isAbsolute(value);
}

function extractLocalPath(value) {
  if (isAbsoluteFilePath(value)) {
    return value;
  }

  if (typeof value !== "string" || !value.startsWith("file://")) {
    return null;
  }

  try {
    const filePath = fileURLToPath(value);
    return path.isAbsolute(filePath) ? filePath : null;
  } catch {
    return null;
  }
}

function getAssetExtension(filePath, originalName, kind) {
  const extension = path.extname(originalName || filePath || "").trim();
  if (extension) {
    return extension.toLowerCase();
  }

  if (kind === "video") {
    return ".mp4";
  }

  if (kind === "audio") {
    return ".mp3";
  }

  if (kind === "file") {
    return ".bin";
  }

  return ".png";
}

function normalizeStoredAssetLabel(value, extension = "") {
  let nextValue = String(value ?? "")
    .normalize("NFKC")
    .trim();

  if (extension && nextValue.toLowerCase().endsWith(extension.toLowerCase())) {
    nextValue = nextValue.slice(0, -extension.length).trim();
  }

  return nextValue
    .replace(/[\u0000-\u001f\u007f<>:"/\\|?*]+/g, " ")
    .replace(/\s+/g, " ")
    .replace(/[. ]+$/g, "")
    .trim();
}

function sanitizeStoredAssetBaseName(value, fallback = "asset", extension = "") {
  const normalizedFallback = normalizeStoredAssetLabel(fallback, extension) || "asset";
  const normalizedValue = normalizeStoredAssetLabel(value, extension) || normalizedFallback;
  const maxLength = 80;
  return normalizedValue.slice(0, maxLength).trim() || normalizedFallback;
}

function getStoredAssetIdSuffix(assetId) {
  const normalizedId = String(assetId || "")
    .replace(/[^a-zA-Z0-9]+/g, "")
    .toLowerCase();
  return normalizedId.slice(-8) || "asset";
}

function buildStoredAssetRelativePath(input = {}) {
  const extension = getAssetExtension(input.filePath, input.originalName, input.kind);
  const originalNameStem = path.parse(String(input.originalName || input.filePath || "")).name;
  const fallbackLabel = input.kind === "file" ? "file" : input.kind || "asset";
  const preferredLabel = input.title || originalNameStem || fallbackLabel;
  const baseName = sanitizeStoredAssetBaseName(preferredLabel, fallbackLabel, extension);
  const fileName = `${baseName}-${getStoredAssetIdSuffix(input.assetId)}${extension}`;
  return `assets/${fileName}`;
}

function isPathInsideDirectory(targetPath, directoryPath) {
  if (!targetPath || !directoryPath) {
    return false;
  }

  const relativePath = path.relative(path.resolve(directoryPath), path.resolve(targetPath));
  return Boolean(relativePath) && !relativePath.startsWith("..") && !path.isAbsolute(relativePath);
}

async function removeFileIfExists(filePath) {
  if (!filePath) {
    return;
  }

  try {
    await fs.rm(filePath, { force: true });
  } catch (error) {
    if (error?.code !== "ENOENT") {
      throw error;
    }
  }
}

async function writeRawState(state, storageRoot = null, boardId = null) {
  const filePath = getStatePath(storageRoot, boardId);
  await ensureDirectory(path.dirname(filePath));
  await fs.writeFile(filePath, JSON.stringify(state, null, 2), "utf8");
}

async function importAssetFromPath(filePath, options = {}, storageRoot = null, boardId = null) {
  const {
    kind,
    originalName,
    assetId,
    title
  } = options;
  if (!isStoredAssetKind(kind)) {
    throw new Error(`Unsupported asset kind: ${kind}`);
  }

  const sourcePath = extractLocalPath(filePath);
  if (!sourcePath) {
    throw new Error(`Unsupported asset path: ${filePath}`);
  }

  const finalAssetId = assetId || `asset-${crypto.randomUUID()}`;
  const assetRelativePath = buildStoredAssetRelativePath({
    filePath: sourcePath,
    originalName,
    title,
    kind,
    assetId: finalAssetId
  });
  const absolutePath = getAbsoluteAssetPath(assetRelativePath, storageRoot, boardId);

  await ensureDirectory(getAssetsPath(storageRoot, boardId));

  if (path.resolve(sourcePath) !== path.resolve(absolutePath)) {
    await fs.copyFile(sourcePath, absolutePath);
  }

  const stats = await fs.stat(absolutePath);
  const name = originalName || path.basename(sourcePath);
  return {
    name,
    originalName: name,
    assetId: finalAssetId,
    assetRelativePath,
    path: absolutePath,
    src: pathToFileURL(absolutePath).href,
    sizeBytes: stats.size,
    kind
  };
}

async function readTextPreview(filePath, maxChars = 4000) {
  const sourcePath = extractLocalPath(filePath);
  if (!sourcePath) {
    return "";
  }

  const normalizedMaxChars = Math.max(256, Math.min(Number(maxChars) || 4000, 12000));
  const byteLimit = Math.min(Math.max(normalizedMaxChars * 4, 4096), 65536);
  const fileHandle = await fs.open(sourcePath, "r");

  try {
    const buffer = Buffer.alloc(byteLimit);
    const { bytesRead } = await fileHandle.read(buffer, 0, byteLimit, 0);
    return buffer
      .subarray(0, bytesRead)
      .toString("utf8")
      .replace(/\u0000/g, "")
      .slice(0, normalizedMaxChars);
  } finally {
    await fileHandle.close();
  }
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function decodeXmlText(value = "") {
  return String(value)
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'")
    .replaceAll("&#xA;", "\n")
    .replaceAll("&#10;", "\n")
    .replaceAll("&#13;", "\r");
}

function createPreviewDocument(html) {
  return `
    <div class="office-preview-root">
      <style>
        .office-preview-root {
          color: #171916;
          font: 13px/1.45 "Segoe UI", Arial, sans-serif;
        }
        .office-preview-root * {
          box-sizing: border-box;
        }
        .office-preview-root h1,
        .office-preview-root h2,
        .office-preview-root h3,
        .office-preview-root h4,
        .office-preview-root h5,
        .office-preview-root h6 {
          margin: 0 0 8px;
          font-size: 14px;
          line-height: 1.3;
        }
        .office-preview-root p,
        .office-preview-root ul,
        .office-preview-root ol {
          margin: 0 0 8px;
        }
        .office-preview-root table {
          width: 100%;
          border-collapse: collapse;
          margin: 8px 0 0;
        }
        .office-preview-root th,
        .office-preview-root td {
          border: 1px solid rgba(23, 25, 22, 0.14);
          padding: 6px 8px;
          text-align: left;
          vertical-align: top;
        }
        .office-preview-root th {
          background: rgba(23, 25, 22, 0.06);
          font-weight: 600;
        }
        .office-section {
          display: grid;
          gap: 8px;
        }
        .office-section + .office-section {
          margin-top: 12px;
          padding-top: 12px;
          border-top: 1px solid rgba(23, 25, 22, 0.12);
        }
        .office-section-title {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          color: rgba(23, 25, 22, 0.66);
        }
        .office-slide-list {
          display: grid;
          gap: 10px;
        }
      </style>
      ${html}
    </div>
  `;
}

async function readDocxPreview(filePath) {
  const result = await mammoth.convertToHtml({ path: filePath });
  return {
    format: "html",
    content: createPreviewDocument(result.value || `<p>${escapeHtml(path.basename(filePath))}</p>`)
  };
}

function buildWorkbookTable(rows = []) {
  if (!rows.length) {
    return "<p>No cells to preview.</p>";
  }

  const bodyRows = rows.map((row) => {
    const cells = row.map((cell) => `<td>${escapeHtml(cell ?? "")}</td>`).join("");
    return `<tr>${cells}</tr>`;
  }).join("");

  return `<table><tbody>${bodyRows}</tbody></table>`;
}

async function readWorkbookPreview(filePath) {
  const workbook = XLSX.readFile(filePath, {
    cellDates: true,
    dense: true
  });

  const sections = workbook.SheetNames.slice(0, 3).map((sheetName) => {
    const sheet = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(sheet, {
      header: 1,
      raw: false,
      blankrows: false
    })
      .slice(0, 20)
      .map((row) => (Array.isArray(row) ? row.slice(0, 8) : []));

    return `
      <section class="office-section">
        <div class="office-section-title">${escapeHtml(sheetName)}</div>
        ${buildWorkbookTable(rows)}
      </section>
    `;
  }).join("");

  return {
    format: "html",
    content: createPreviewDocument(sections || "<p>No sheets to preview.</p>")
  };
}

async function readPptxPreview(filePath) {
  const buffer = await fs.readFile(filePath);
  const zip = await JSZip.loadAsync(buffer);
  const slidePaths = Object.keys(zip.files)
    .filter((fileName) => /^ppt\/slides\/slide\d+\.xml$/i.test(fileName))
    .sort((left, right) => {
      const leftIndex = Number(left.match(/slide(\d+)\.xml/i)?.[1] || 0);
      const rightIndex = Number(right.match(/slide(\d+)\.xml/i)?.[1] || 0);
      return leftIndex - rightIndex;
    })
    .slice(0, 6);

  const slides = await Promise.all(slidePaths.map(async (slidePath, index) => {
    const xml = await zip.file(slidePath).async("string");
    const texts = [...xml.matchAll(/<a:t[^>]*>([\s\S]*?)<\/a:t>/g)]
      .map((match) => decodeXmlText(match[1]).trim())
      .filter(Boolean);

    const previewText = texts.length
      ? texts.map((text) => `<p>${escapeHtml(text)}</p>`).join("")
      : "<p>No text on this slide.</p>";

    return `
      <section class="office-section">
        <div class="office-section-title">Slide ${index + 1}</div>
        ${previewText}
      </section>
    `;
  }));

  return {
    format: "html",
    content: createPreviewDocument(`<div class="office-slide-list">${slides.join("")}</div>` || "<p>No slides to preview.</p>")
  };
}

async function readFilePreview(filePath, explicitExtension = "", maxChars = 4000) {
  const sourcePath = extractLocalPath(filePath);
  if (!sourcePath) {
    return {
      format: "text",
      content: ""
    };
  }

  const extension = String(explicitExtension || path.extname(sourcePath).slice(1)).replace(/^\./, "").toLowerCase();

  if (extension === "docx") {
    return readDocxPreview(sourcePath);
  }

  if (["xls", "xlsx", "xlsm", "ods"].includes(extension)) {
    return readWorkbookPreview(sourcePath);
  }

  if (extension === "pptx") {
    return readPptxPreview(sourcePath);
  }

  return {
    format: "text",
    content: await readTextPreview(sourcePath, maxChars)
  };
}

async function hydrateCardAsset(card, storageRoot = null, boardId = null) {
  if (!isStoredAssetKind(card?.kind)) {
    return { card, changed: false };
  }

  if (typeof card.assetRelativePath === "string" && card.assetRelativePath) {
    const absolutePath = getAbsoluteAssetPath(card.assetRelativePath, storageRoot, boardId);
    let sizeBytes = Number.isFinite(Number(card.sizeBytes)) ? Number(card.sizeBytes) : null;
    if (sizeBytes === null) {
      try {
        sizeBytes = (await fs.stat(absolutePath)).size;
      } catch {
        sizeBytes = null;
      }
    }
    return {
      card: {
        ...card,
        path: absolutePath,
        src: pathToFileURL(absolutePath).href,
        originalName: card.originalName || card.title || path.basename(absolutePath),
        sizeBytes
      },
      changed: false
    };
  }

  const legacyPath = extractLocalPath(card.path) || extractLocalPath(card.src);
  if (!legacyPath) {
    return { card, changed: false };
  }

  try {
    const imported = await importAssetFromPath(legacyPath, {
      kind: card.kind,
      originalName: card.originalName || card.title || path.basename(legacyPath),
      assetId: card.assetId,
      title: card.title
    }, storageRoot, boardId);
    return {
      card: {
        ...card,
        ...imported
      },
      changed: true
    };
  } catch (error) {
    console.error("Failed to migrate legacy stored asset:", error);
    await logError("state.hydrateAsset", error, {
      cardId: card?.id || null,
      kind: card?.kind || null
    }, storageRoot);
    return { card, changed: false };
  }
}

async function hydrateStateAssets(state, storageRoot = null, boardId = null) {
  const cards = Array.isArray(state?.cards) ? state.cards : [];
  let changed = Number(state?.schemaVersion) !== stateSchemaVersion;
  const hydratedCards = await Promise.all(cards.map(async (card) => {
    const result = await hydrateCardAsset(card, storageRoot, boardId);
    changed = changed || result.changed;
    return result.card;
  }));

  return {
    state: {
      ...state,
      schemaVersion: stateSchemaVersion,
      cards: hydratedCards
    },
    changed
  };
}

async function prepareCardForStorage(card, storageRoot = null, boardId = null) {
  let next = { ...card };

  if (isStoredAssetKind(next.kind) && !next.assetRelativePath) {
    const legacyPath = extractLocalPath(next.path) || extractLocalPath(next.src);
    if (legacyPath) {
      try {
        next = {
          ...next,
          ...(await importAssetFromPath(legacyPath, {
            kind: next.kind,
            originalName: next.originalName || next.title || path.basename(legacyPath),
            assetId: next.assetId,
            title: next.title
          }, storageRoot, boardId))
        };
      } catch (error) {
        console.error("Failed to import stored asset during save:", error);
        await logError("state.prepareCard", error, {
          cardId: next?.id || null,
          kind: next?.kind || null
        }, storageRoot);
      }
    }
  }

  if (isStoredAssetKind(next.kind) && next.assetRelativePath) {
    const sourcePath = extractLocalPath(next.path) || extractLocalPath(next.src);
    const currentAssetRelativePath = next.assetRelativePath;
    const currentAbsolutePath = getAbsoluteAssetPath(currentAssetRelativePath, storageRoot, boardId);
    const finalAssetId = next.assetId || `asset-${crypto.randomUUID()}`;
    const desiredAssetRelativePath = buildStoredAssetRelativePath({
      filePath: sourcePath || currentAbsolutePath,
      originalName: next.originalName || next.title || path.basename(sourcePath || currentAbsolutePath),
      title: next.title,
      kind: next.kind,
      assetId: finalAssetId
    });
    const desiredAbsolutePath = getAbsoluteAssetPath(desiredAssetRelativePath, storageRoot, boardId);
    const assetsDirectoryPath = getAssetsPath(storageRoot, boardId);
    const effectiveSourcePath = sourcePath || currentAbsolutePath;

    await ensureDirectory(path.dirname(desiredAbsolutePath));

    if (effectiveSourcePath && path.resolve(effectiveSourcePath) !== path.resolve(desiredAbsolutePath)) {
      await fs.copyFile(effectiveSourcePath, desiredAbsolutePath);
    }

    if (path.resolve(currentAbsolutePath) !== path.resolve(desiredAbsolutePath)) {
      await removeFileIfExists(currentAbsolutePath);
    }

    if (
      sourcePath
      && path.resolve(sourcePath) !== path.resolve(desiredAbsolutePath)
      && path.resolve(sourcePath) !== path.resolve(currentAbsolutePath)
      && isPathInsideDirectory(sourcePath, assetsDirectoryPath)
    ) {
      await removeFileIfExists(sourcePath);
    }

    let sizeBytes = Number.isFinite(Number(next.sizeBytes)) ? Number(next.sizeBytes) : null;
    try {
      sizeBytes = (await fs.stat(desiredAbsolutePath)).size;
    } catch {
      sizeBytes = null;
    }

    next.assetId = finalAssetId;
    next.assetRelativePath = desiredAssetRelativePath;
    next.sizeBytes = sizeBytes;
    delete next.src;
    delete next.path;
  }

  return next;
}

async function prepareStateForStorage(state, storageRoot = null, boardId = null) {
  const cards = Array.isArray(state?.cards) ? state.cards : [];
  return {
    ...state,
    boardId: getActiveBoardId(boardId || state?.boardId),
    boardName: normalizeBoardName(state?.boardName, getFallbackBoardName(getActiveBoardId(boardId || state?.boardId))),
    schemaVersion: stateSchemaVersion,
    cards: await Promise.all(cards.map((card) => prepareCardForStorage(card, storageRoot, boardId)))
  };
}

async function readState(storageRoot = null, boardId = null) {
  await ensureBoardStorageLayout(storageRoot);
  try {
    const raw = await fs.readFile(getStatePath(storageRoot, boardId), "utf8");
    const parsed = JSON.parse(raw);
    const hydrated = await hydrateStateAssets(parsed, storageRoot, boardId);
    if (hydrated.changed) {
      await writeRawState(await prepareStateForStorage(hydrated.state, storageRoot, boardId), storageRoot, boardId);
    }
    if (shouldSyncLastKnownState(storageRoot, boardId)) {
      lastKnownState = hydrated.state;
    }
    return hydrated.state;
  } catch (error) {
    if (error.code !== "ENOENT") {
      console.error("Failed to read board state:", error);
      await logError("state.read", error, {}, storageRoot);
    }
    if (shouldSyncLastKnownState(storageRoot, boardId)) {
      lastKnownState = null;
    }
    return null;
  }
}

async function writeState(state, storageRoot = null, boardId = null) {
  await ensureBoardStorageLayout(storageRoot);
  const preparedState = await prepareStateForStorage(state, storageRoot, boardId);
  await writeRawState(preparedState, storageRoot, boardId);
  if (shouldSyncLastKnownState(storageRoot, boardId)) {
    lastKnownState = preparedState;
  }
  return true;
}

function normalizeCatalogId(value) {
  const safe = String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^\w-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
  return safe;
}

function isCardTemplateCreateIdForPack(value, packId) {
  const normalizedPackId = normalizeCatalogId(packId);
  return typeof value === "string" && value.startsWith(`template:${normalizedPackId}:`);
}

async function getBoardStatesForCatalogOperation(currentState = null, currentBoardId = null) {
  const activeBoardId = getActiveBoardId(currentBoardId);
  const boards = await listBoards(null, currentState, activeBoardId);
  const results = [];
  const seen = new Set();

  for (const board of boards) {
    const boardId = getActiveBoardId(board.id);
    if (seen.has(boardId)) {
      continue;
    }
    seen.add(boardId);
    const state = boardId === activeBoardId && currentState
      ? currentState
      : await readState(null, boardId);
    if (!state) {
      continue;
    }
    results.push({
      boardId,
      boardName: normalizeBoardName(state.boardName || board.name, getFallbackBoardName(boardId)),
      state
    });
  }

  return results;
}

async function scanCatalogUsage(payload = {}, options = {}) {
  const themeId = normalizeCatalogId(payload.themeId);
  const cardPackId = normalizeCatalogId(payload.cardPackId);
  const boards = await getBoardStatesForCatalogOperation(payload.currentState || null, options.currentBoardId);
  const themeBoards = [];
  const cardPackBoards = [];
  let cardPackCardCount = 0;

  boards.forEach(({ boardId, boardName, state }) => {
    if (themeId && state.settings?.activeVisualThemeId === themeId) {
      themeBoards.push({ id: boardId, name: boardName });
    }

    if (cardPackId) {
      const count = Array.isArray(state.cards)
        ? state.cards.filter((card) => card?.sourceCardPackId === cardPackId).length
        : 0;
      if (count > 0) {
        cardPackCardCount += count;
        cardPackBoards.push({ id: boardId, name: boardName, cardCount: count });
      }
    }
  });

  return {
    themeBoards,
    cardPackBoards,
    cardPackCardCount
  };
}

function applyCatalogRemovalToState(state = {}, payload = {}) {
  const themeId = normalizeCatalogId(payload.themeId);
  const cardPackId = normalizeCatalogId(payload.cardPackId);
  const defaultThemeSettings = payload.defaultThemeSettings && typeof payload.defaultThemeSettings === "object"
    ? payload.defaultThemeSettings
    : {};
  const nextState = {
    ...state,
    settings: {
      ...(state.settings || {})
    },
    cards: Array.isArray(state.cards) ? [...state.cards] : [],
    connections: Array.isArray(state.connections) ? [...state.connections] : []
  };
  let changed = false;

  if (themeId) {
    const installedThemes = Array.isArray(nextState.settings.installedThemes)
      ? nextState.settings.installedThemes
      : [];
    const nextInstalledThemes = installedThemes.filter((theme) => normalizeCatalogId(theme?.id) !== themeId);
    if (nextInstalledThemes.length !== installedThemes.length) {
      nextState.settings.installedThemes = nextInstalledThemes;
      changed = true;
    }
    if (nextState.settings.activeVisualThemeId === themeId) {
      nextState.settings = {
        ...nextState.settings,
        ...defaultThemeSettings,
        activeVisualThemeId: ""
      };
      changed = true;
    }
  }

  if (cardPackId) {
    const cardPacks = Array.isArray(nextState.settings.cardPacks) ? nextState.settings.cardPacks : [];
    const nextCardPacks = cardPacks.filter((pack) => normalizeCatalogId(pack?.id) !== cardPackId);
    if (nextCardPacks.length !== cardPacks.length) {
      nextState.settings.cardPacks = nextCardPacks;
      changed = true;
    }
    ["quickCreateKinds", "toolbarCreateKinds"].forEach((field) => {
      const source = Array.isArray(nextState.settings[field]) ? nextState.settings[field] : [];
      const filtered = source.filter((kind) => !isCardTemplateCreateIdForPack(kind, cardPackId));
      if (filtered.length !== source.length) {
        nextState.settings[field] = filtered;
        changed = true;
      }
    });

    const removedIds = new Set(nextState.cards
      .filter((card) => card?.sourceCardPackId === cardPackId)
      .map((card) => card.id)
      .filter(Boolean));
    if (removedIds.size > 0) {
      nextState.cards = nextState.cards.filter((card) => !removedIds.has(card.id));
      nextState.connections = nextState.connections.filter((connection) => {
        const anchors = [connection?.from, connection?.to];
        return anchors.every((anchor) => !(anchor?.type === "card" && removedIds.has(anchor.cardId)));
      });
      nextState.cards = nextState.cards.map((card) => {
        const nextCard = { ...card };
        if (Array.isArray(nextCard.references)) {
          nextCard.references = nextCard.references.filter((id) => !removedIds.has(id));
        }
        if (nextCard.commentAttachment && removedIds.has(nextCard.commentAttachment.cardId)) {
          nextCard.commentAttachment = null;
        }
        return nextCard;
      });
      changed = true;
    }
  }

  return { state: nextState, changed };
}

async function applyCatalogRemoval(payload = {}, options = {}) {
  const currentBoardId = getActiveBoardId(options.currentBoardId);
  const boards = await getBoardStatesForCatalogOperation(payload.currentState || null, currentBoardId);
  let currentState = null;
  let changedBoards = 0;

  for (const board of boards) {
    const result = applyCatalogRemovalToState(board.state, payload);
    if (!result.changed) {
      continue;
    }
    changedBoards += 1;
    await writeState(result.state, null, board.boardId);
    sendStateChangedToBoard(result.state, board.boardId, {
      excludedWindow: options.excludedWindow || null
    });
    if (board.boardId === currentBoardId) {
      currentState = result.state;
    }
  }

  return {
    changedBoards,
    state: currentState
  };
}

async function promptInstallDownloadedUpdate(version) {
  const result = await dialog.showMessageBox(mainWindow || undefined, {
    type: "info",
    buttons: [tMain("updateInstallNow"), tMain("updateLater")],
    defaultId: 0,
    cancelId: 1,
    noLink: true,
    title: tMain("updateReadyTitle"),
    message: tMain("updateReadyMessage", { version: version || app.getVersion() }),
    detail: tMain("updateReadyDetail")
  });

  if (result.response === 0) {
    return installDownloadedUpdate();
  }

  return false;
}

async function checkForAppUpdates(source = "manual") {
  if (!autoUpdateState?.supported || autoUpdateState.checking) {
    return getAutoUpdateStateForRenderer();
  }

  setAutoUpdateState({
    checking: true,
    phase: "checking",
    progressPercent: 0,
    error: null
  });
  void logEvent("info", "updates.check", "Checking for updates", { source });

  if (!autoUpdaterInitialized) {
    const didFallback = await applyGitHubReleaseFallback(source);
    if (!didFallback) {
      setAutoUpdateState({
        checking: false,
        phase: "error",
        error: {
          name: "UpdateError",
          message: "Update feed is not available."
        },
        lastCheckedAt: new Date().toISOString()
      });
    }
    return getAutoUpdateStateForRenderer();
  }

  try {
    await autoUpdater.checkForUpdates();
  } catch (error) {
    console.error("Failed to check for updates:", error);
    await logError("updates.check", error, { source });
    const didFallback = await applyGitHubReleaseFallback(source, error);
    if (!didFallback) {
      setAutoUpdateState({
        checking: false,
        phase: "error",
        error: serializeError(error),
        lastCheckedAt: new Date().toISOString()
      });
    }
  }

  return getAutoUpdateStateForRenderer();
}

function scheduleAutoUpdateChecks() {
  if (!autoUpdateState?.supported) {
    return;
  }

  if (autoUpdateTimer) {
    clearInterval(autoUpdateTimer);
  }

  setTimeout(() => {
    void checkForAppUpdates("startup");
  }, autoUpdateInitialDelayMs);

  autoUpdateTimer = setInterval(() => {
    void checkForAppUpdates("scheduled");
  }, autoUpdateIntervalMs);
}

async function initializeAutoUpdater() {
  const support = await resolveAutoUpdateSupport();
  setAutoUpdateState({
    supported: support.supported,
    reason: support.reason,
    phase: support.supported ? "idle" : "disabled",
    checking: false,
    error: null
  });

  if (!support.supported) {
    return;
  }

  scheduleAutoUpdateChecks();

  if (!support.autoUpdaterEnabled || autoUpdaterInitialized) {
    return;
  }

  autoUpdaterInitialized = true;
  autoUpdater.autoDownload = true;
  autoUpdater.autoInstallOnAppQuit = false;

  autoUpdater.on("checking-for-update", () => {
    setAutoUpdateState({
      checking: true,
      phase: "checking",
      progressPercent: 0,
      downloadUrl: null,
      releaseUrl: null,
      downloadAssetName: null,
      downloadSizeBytes: null,
      downloadStrategy: "autoUpdater",
      downloadedFilePath: null,
      error: null
    });
  });

  autoUpdater.on("update-available", (info) => {
    setAutoUpdateState({
      checking: false,
      phase: "downloading",
      availableVersion: info?.version || null,
        downloadedVersion: null,
        progressPercent: 0,
        downloadUrl: null,
        releaseUrl: null,
        downloadAssetName: null,
        downloadSizeBytes: null,
        downloadStrategy: "autoUpdater",
        downloadedFilePath: null,
        error: null,
        lastCheckedAt: new Date().toISOString()
      });
    void logEvent("info", "updates.available", "Update available", {
      version: info?.version || ""
    });
  });

  autoUpdater.on("download-progress", (progress) => {
    setAutoUpdateState({
      checking: false,
      phase: "downloading",
      progressPercent: Number.isFinite(progress?.percent) ? progress.percent : 0
    });
  });

  autoUpdater.on("update-not-available", (info) => {
    setAutoUpdateState({
      checking: false,
      phase: "idle",
        availableVersion: info?.version || null,
        downloadedVersion: null,
        progressPercent: 0,
        downloadUrl: null,
        releaseUrl: null,
        downloadAssetName: null,
        downloadSizeBytes: null,
        downloadStrategy: null,
        downloadedFilePath: null,
        error: null,
        lastCheckedAt: new Date().toISOString()
      });
    void logEvent("info", "updates.none", "No updates available", {
      version: info?.version || ""
    });
  });

  autoUpdater.on("update-downloaded", (info) => {
    setAutoUpdateState({
      checking: false,
      phase: "downloaded",
        downloadedVersion: info?.version || null,
        availableVersion: info?.version || null,
        progressPercent: 100,
        downloadUrl: null,
        releaseUrl: null,
        downloadAssetName: null,
        downloadSizeBytes: null,
        downloadStrategy: "autoUpdater",
        downloadedFilePath: null,
        error: null,
        lastCheckedAt: new Date().toISOString()
      });
    void logEvent("info", "updates.downloaded", "Update downloaded", {
      version: info?.version || ""
    });
    void promptInstallDownloadedUpdate(info?.version || "");
  });

  autoUpdater.on("error", (error) => {
    console.error("Auto update error:", error);
    void (async () => {
      await logError("updates.error", error);
      const didFallback = await applyGitHubReleaseFallback("autoUpdater", error);
      if (!didFallback) {
        setAutoUpdateState({
          checking: false,
          phase: "error",
          error: serializeError(error),
          lastCheckedAt: new Date().toISOString()
        });
      }
    })();
  });
}

async function installDownloadedUpdate() {
  if (autoUpdateState?.phase === "available" && autoUpdateState?.downloadStrategy === "manual" && autoUpdateState?.downloadUrl) {
    return beginManualUpdateDownload({
      version: autoUpdateState.availableVersion,
      downloadUrl: autoUpdateState.downloadUrl,
      releaseUrl: autoUpdateState.releaseUrl,
      assetName: autoUpdateState.downloadAssetName,
      assetSizeBytes: autoUpdateState.downloadSizeBytes
    }, "manualAction");
  }

  if (autoUpdateState?.phase !== "downloaded") {
    const targetUrl = autoUpdateState?.downloadUrl || autoUpdateState?.releaseUrl || "";
    if (autoUpdateState?.phase === "available" && targetUrl) {
      await shell.openExternal(targetUrl);
      await logEvent("info", "updates.openManualDownload", "Opened manual update link", {
        version: autoUpdateState.availableVersion || "",
        url: targetUrl
      });
      return true;
    }
    return false;
  }

  if (autoUpdateState?.downloadStrategy === "manual" && autoUpdateState?.downloadedFilePath) {
    try {
      const installerPath = autoUpdateState.downloadedFilePath;
      const childProcess = spawn(installerPath, [], {
        detached: true,
        stdio: "ignore",
        windowsHide: false
      });
      childProcess.unref();
      await logEvent("info", "updates.installManual", "Launched downloaded installer", {
        version: autoUpdateState.downloadedVersion || autoUpdateState.availableVersion || "",
        filePath: installerPath
      });
      isQuitting = true;
      app.quit();
      return true;
    } catch (error) {
      await logError("updates.installManual", error, {
        version: autoUpdateState.downloadedVersion || autoUpdateState.availableVersion || "",
        filePath: autoUpdateState.downloadedFilePath || ""
      });
      throw error;
    }
  }

  autoUpdater.quitAndInstall(false, true);
  return true;
}

function normalizeAccelerator(value, fallback) {
  const source = (value || fallback || "").trim();
  if (!source) {
    return fallback;
  }

  return source
    .replace(/\s+/g, "")
    .replace(/Ctrl/gi, "CommandOrControl")
    .replace(/Control/gi, "CommandOrControl")
    .replace(/CmdOrCtrl/gi, "CommandOrControl")
    .replace(/CommandOrCommandOrControl/gi, "CommandOrControl");
}

function registerHotkeys(settings = {}) {
  globalShortcut.unregisterAll();

  const toggleHotkey = normalizeAccelerator(settings.toggleHotkey, defaultHotkeys.toggleHotkey);
  const lockHotkey = normalizeAccelerator(settings.lockHotkey, defaultHotkeys.lockHotkey);

  const result = {
    toggleHotkey,
    lockHotkey,
    toggleRegistered: false,
    lockRegistered: false
  };

  try {
    result.toggleRegistered = globalShortcut.register(toggleHotkey, toggleWindow);
  } catch (error) {
    console.error("Failed to register toggle hotkey:", error);
    void logError("hotkeys.toggle", error, { hotkey: toggleHotkey });
  }

  try {
    result.lockRegistered = globalShortcut.register(lockHotkey, () => {
      void sendToggleLockEvent();
    });
  } catch (error) {
    console.error("Failed to register lock hotkey:", error);
    void logError("hotkeys.lock", error, { hotkey: lockHotkey });
  }

  return result;
}

function normalizeAccentColor(value) {
  const clean = String(value || "").replace(/[^0-9a-f]/gi, "");
  if (clean.length >= 8) {
    return `#${clean.slice(0, 6)}`;
  }
  if (clean.length >= 6) {
    return `#${clean.slice(0, 6)}`;
  }
  return "#2f7d57";
}

function getSystemTheme() {
  return {
    accentColor: normalizeAccentColor(systemPreferences.getAccentColor()),
    isDark: nativeTheme.shouldUseDarkColors
  };
}

async function pickMedia(kind, options = {}) {
  const filters = kind === "video"
    ? [{ name: "Video", extensions: ["mp4", "webm", "mov", "mkv", "avi"] }]
    : kind === "audio"
      ? [{ name: "Audio", extensions: ["mp3", "wav", "ogg", "m4a", "flac", "aac"] }]
      : [{ name: "Images", extensions: ["png", "jpg", "jpeg", "webp", "gif", "bmp", "svg"] }];

  const result = await dialog.showOpenDialog(mainWindow, {
    title: kind === "video" ? "Choose video" : kind === "audio" ? "Choose audio" : "Choose image",
    defaultPath: options.defaultPath || undefined,
    properties: ["openFile"],
    filters
  });

  if (result.canceled || result.filePaths.length === 0) {
    return null;
  }

  const filePath = result.filePaths[0];
  return importAssetFromPath(filePath, {
    kind,
    originalName: path.basename(filePath)
  }, options.storageRoot);
}

async function pickFile(options = {}) {
  const result = await dialog.showOpenDialog(mainWindow, {
    title: options.title || "Choose file",
    defaultPath: options.defaultPath || undefined,
    properties: ["openFile"]
  });

  if (result.canceled || result.filePaths.length === 0) {
    return null;
  }

  const filePath = result.filePaths[0];
  return importAssetFromPath(filePath, {
    kind: "file",
    originalName: path.basename(filePath)
  }, options.storageRoot);
}

async function pickStorageDirectory() {
  const result = await dialog.showOpenDialog(mainWindow, {
    title: "Choose storage folder",
    defaultPath: getStorageRoot(),
    properties: ["openDirectory", "createDirectory"]
  });

  if (result.canceled || result.filePaths.length === 0) {
    return null;
  }

  return result.filePaths[0];
}

async function setStorageDirectory(directoryPath, currentState = null) {
  const normalizedDirectoryPath = normalizeStoragePath(directoryPath);
  const targetRoot = getStorageRoot(normalizedDirectoryPath);
  const currentRoot = getStorageRoot();
  const currentBoardId = getActiveBoardId();

  if (targetRoot === currentRoot && normalizedDirectoryPath === appConfig.storagePath) {
    const resolvedBoardId = await resolveBoardIdForStorage(targetRoot, currentBoardId, currentState);
    return {
      appConfig: getAppConfigForRenderer(),
      state: currentState,
      boards: await listBoards(targetRoot, currentState, resolvedBoardId),
      loadedExistingState: await pathExists(getStatePath(targetRoot, resolvedBoardId))
    };
  }

  await ensureBoardStorageLayout(targetRoot);
  const targetBoards = await listBoards(targetRoot, null, currentBoardId);
  const targetHasExistingState = targetBoards.some((board) => board.exists);
  const resolvedTargetBoardId = await resolveBoardIdForStorage(targetRoot, currentBoardId, currentState);

  if (targetHasExistingState) {
    await writeAppConfig({
      ...appConfig,
      storagePath: normalizedDirectoryPath,
      activeBoardId: resolvedTargetBoardId
    });
    const loadedState = await readState(targetRoot, resolvedTargetBoardId);
    await logEvent("info", "storage.switch", "Switched to existing board storage", {
      root: targetRoot,
      boardId: resolvedTargetBoardId
    });
    return {
      appConfig: getAppConfigForRenderer(),
      state: loadedState,
      boards: await listBoards(targetRoot, loadedState, resolvedTargetBoardId),
      loadedExistingState: true
    };
  }

  const stateToPersist = currentState || await readState(currentRoot, currentBoardId);
  if (stateToPersist) {
    await writeRawState(await prepareStateForStorage(stateToPersist, targetRoot, currentBoardId), targetRoot, currentBoardId);
  }

  await writeAppConfig({
    ...appConfig,
    storagePath: normalizedDirectoryPath,
    activeBoardId: currentBoardId
  });
  await logEvent("info", "storage.switch", "Switched storage and migrated current board", {
    root: targetRoot,
    boardId: currentBoardId
  });

  return {
    appConfig: getAppConfigForRenderer(),
    state: stateToPersist,
    boards: await listBoards(targetRoot, stateToPersist, currentBoardId),
    loadedExistingState: false
  };
}

async function listBoardsForRenderer(currentState = null, boardId = null) {
  const activeBoardId = getActiveBoardId(boardId);
  return {
    boards: await listBoards(null, currentState, activeBoardId),
    activeBoardId
  };
}

async function createBoard(name, currentState = null, options = {}) {
  const boardName = normalizeBoardName(name, "New board");
  const currentBoardId = getActiveBoardId(options.currentBoardId);
  const templateState = currentState || lastKnownState || await readState(null, currentBoardId);

  if (currentState) {
    await writeState(currentState, null, currentBoardId);
  }

  const nextBoardId = createBoardId();
  const nextState = buildEmptyBoardState(nextBoardId, boardName, templateState);
  await writeRawState(await prepareStateForStorage(nextState, null, nextBoardId), null, nextBoardId);
  if (options.persistActive !== false) {
    await writeAppConfig({
      ...appConfig,
      activeBoardId: nextBoardId
    });
  }

  if (shouldSyncLastKnownState(null, nextBoardId)) {
    lastKnownState = nextState;
  }
  await logEvent("info", "boards.create", "Created board", {
    boardId: nextBoardId,
    boardName,
    previousBoardId: currentBoardId
  });

  return {
    appConfig: getAppConfigForRenderer(),
    state: nextState,
    boards: await listBoards(null, nextState, nextBoardId)
  };
}

async function renameBoard(boardId, name, currentState = null, options = {}) {
  const targetBoardId = getActiveBoardId(boardId);
  const boardName = normalizeBoardName(name, getFallbackBoardName(targetBoardId));
  const currentBoardId = getActiveBoardId(options.currentBoardId);
  const isActiveBoard = targetBoardId === currentBoardId;

  let nextState = null;
  if (isActiveBoard) {
    nextState = {
      ...(currentState || lastKnownState || await readState(null, targetBoardId) || buildEmptyBoardState(targetBoardId, boardName)),
      boardId: targetBoardId,
      boardName
    };
    await writeState(nextState, null, targetBoardId);
  } else {
    const existingState = await readState(null, targetBoardId) || buildEmptyBoardState(targetBoardId, boardName);
    nextState = {
      ...existingState,
      boardId: targetBoardId,
      boardName
    };
    await writeRawState(await prepareStateForStorage(nextState, null, targetBoardId), null, targetBoardId);
  }

  await logEvent("info", "boards.rename", "Renamed board", {
    boardId: targetBoardId,
    boardName
  });

  return {
    appConfig: getAppConfigForRenderer(),
    state: isActiveBoard ? nextState : null,
    boards: await listBoards(null, isActiveBoard ? nextState : currentState, currentBoardId)
  };
}

async function switchBoard(boardId, currentState = null, options = {}) {
  const currentBoardId = getActiveBoardId(options.currentBoardId);
  const targetBoardId = await resolveBoardIdForStorage(null, boardId, currentState);
  if (targetBoardId === currentBoardId) {
    return {
      appConfig: getAppConfigForRenderer(),
      state: currentState || await readState(null, currentBoardId),
      boards: await listBoards(null, currentState || lastKnownState, currentBoardId)
    };
  }

  if (currentState) {
    await writeState(currentState, null, currentBoardId);
  }

  if (options.persistActive !== false) {
    await writeAppConfig({
      ...appConfig,
      activeBoardId: targetBoardId
    });
  }

  const loadedState = await readState(null, targetBoardId);
  await logEvent("info", "boards.switch", "Switched board", {
    fromBoardId: currentBoardId,
    toBoardId: targetBoardId
  });

  return {
    appConfig: getAppConfigForRenderer(),
    state: loadedState || buildEmptyBoardState(targetBoardId, getFallbackBoardName(targetBoardId), currentState),
    boards: await listBoards(null, loadedState, targetBoardId)
  };
}

async function deleteBoard(boardId, currentState = null, options = {}) {
  const targetBoardId = getActiveBoardId(boardId);
  const currentBoardId = getActiveBoardId(options.currentBoardId);
  const boards = await listBoards(null, currentState, currentBoardId);
  const existingBoards = boards.filter((board) => board.exists || board.id === targetBoardId);

  if (existingBoards.length <= 1) {
    throw new Error("Cannot delete the last board");
  }

  const targetBoard = boards.find((board) => board.id === targetBoardId);
  const isActiveBoard = targetBoardId === currentBoardId;
  const nextBoardId = existingBoards.find((board) => board.id !== targetBoardId)?.id || defaultBoardId;

  if (!targetBoard?.exists && isActiveBoard && currentState) {
    await writeState(currentState, null, currentBoardId);
  }

  await fs.rm(getBoardRoot(null, targetBoardId), { recursive: true, force: true });

  let nextState = null;
  if (isActiveBoard) {
    if (options.persistActive !== false) {
      await writeAppConfig({
        ...appConfig,
        activeBoardId: nextBoardId
      });
    }
    nextState = await readState(null, nextBoardId);
    if (shouldSyncLastKnownState(null, nextBoardId)) {
      lastKnownState = nextState;
    }
  }

  await logEvent("info", "boards.delete", "Deleted board", {
    boardId: targetBoardId,
    boardName: targetBoard?.name || "",
    nextBoardId: isActiveBoard ? nextBoardId : currentBoardId
  });

  return {
    appConfig: getAppConfigForRenderer(),
    state: isActiveBoard ? nextState : null,
    boards: await listBoards(null, isActiveBoard ? nextState : currentState, isActiveBoard ? nextBoardId : currentBoardId)
  };
}

async function openCurrentStorageDirectory() {
  const directoryPath = getStorageRoot();
  await ensureDirectory(directoryPath);
  await shell.openPath(directoryPath);
  return true;
}

async function openLogsDirectory() {
  const directoryPath = getLogsPath();
  await ensureDirectory(directoryPath);
  await shell.openPath(directoryPath);
  return true;
}

async function pickBoardArchiveExportPath() {
  const result = await dialog.showSaveDialog(mainWindow || undefined, {
    title: tMain("archiveExportTitle"),
    defaultPath: getBoardArchiveDefaultPath(),
    filters: [
      { name: "Desktop Board archive", extensions: ["desktopboard"] },
      { name: "Zip archive", extensions: ["zip"] }
    ]
  });

  if (result.canceled || !result.filePath) {
    return null;
  }

  return result.filePath;
}

async function pickBoardArchiveImportPath() {
  const result = await dialog.showOpenDialog(mainWindow || undefined, {
    title: tMain("archiveImportTitle"),
    defaultPath: app.getPath("documents"),
    properties: ["openFile"],
    filters: [
      { name: "Desktop Board archive", extensions: ["desktopboard", "zip"] }
    ]
  });

  if (result.canceled || result.filePaths.length === 0) {
    return null;
  }

  return result.filePaths[0];
}

async function promptImportBoardArchive(filePath) {
  const result = await dialog.showMessageBox(mainWindow || undefined, {
    type: "warning",
    buttons: [tMain("archiveImportNow"), tMain("archiveImportCancel")],
    defaultId: 0,
    cancelId: 1,
    noLink: true,
    title: tMain("archiveImportTitle"),
    message: tMain("archiveImportMessage"),
    detail: tMain("archiveImportDetail", { fileName: path.basename(filePath || "") })
  });

  return result.response === 0;
}

async function exportBoardArchive(currentState = null) {
  const filePath = await pickBoardArchiveExportPath();
  if (!filePath) {
    return null;
  }

  const activeBoardId = getActiveBoardId();
  const sourceState = currentState || lastKnownState || await readState(null, activeBoardId);
  if (!sourceState) {
    throw new Error("No board state to export.");
  }

  const preparedState = await prepareStateForStorage(sourceState, null, activeBoardId);
  const referencedAssetPaths = collectReferencedAssetPaths(preparedState);
  const zip = new JSZip();
  const missingAssets = [];
  let exportedAssetCount = 0;

  zip.file(boardArchiveStateEntry, JSON.stringify(preparedState, null, 2));

  for (const assetRelativePath of referencedAssetPaths) {
    const absolutePath = getAbsoluteAssetPath(assetRelativePath, null, activeBoardId);
    if (!await pathExists(absolutePath)) {
      missingAssets.push(assetRelativePath);
      continue;
    }

    zip.file(assetRelativePath, await fs.readFile(absolutePath));
    exportedAssetCount += 1;
  }

  zip.file(boardArchiveMetaEntry, JSON.stringify({
    archiveVersion: boardArchiveVersion,
    appVersion: app.getVersion(),
    exportedAt: new Date().toISOString(),
    boardId: activeBoardId,
    boardName: preparedState.boardName || "",
    schemaVersion: preparedState.schemaVersion || stateSchemaVersion,
    cardCount: Array.isArray(preparedState.cards) ? preparedState.cards.length : 0,
    referencedAssetCount: referencedAssetPaths.length,
    exportedAssetCount,
    missingAssets
  }, null, 2));

  const archiveBuffer = await zip.generateAsync({
    type: "nodebuffer",
    compression: "DEFLATE",
    compressionOptions: { level: 6 }
  });

  await fs.writeFile(filePath, archiveBuffer);
  await logEvent("info", "archive.export", "Exported board archive", {
    filePath,
    boardId: activeBoardId,
    cardCount: Array.isArray(preparedState.cards) ? preparedState.cards.length : 0,
    referencedAssetCount: referencedAssetPaths.length,
    exportedAssetCount,
    missingAssetCount: missingAssets.length
  });

  return {
    filePath,
    cardCount: Array.isArray(preparedState.cards) ? preparedState.cards.length : 0,
    referencedAssetCount: referencedAssetPaths.length,
    exportedAssetCount,
    missingAssetCount: missingAssets.length
  };
}

async function extractArchiveAssets(zip, boardRoot, allowedAssetPaths) {
  const extractedAssetPaths = [];
  const tasks = [];
  const allowedSet = allowedAssetPaths instanceof Set ? allowedAssetPaths : new Set(allowedAssetPaths || []);

  zip.forEach((relativePath, entry) => {
    if (entry.dir) {
      return;
    }

    const normalizedPath = normalizeAssetRelativePath(relativePath);
    if (!normalizedPath || (allowedSet.size > 0 && !allowedSet.has(normalizedPath))) {
      return;
    }

    const targetPath = resolveBoardRelativePath(boardRoot, normalizedPath);
    extractedAssetPaths.push(normalizedPath);
    tasks.push(
      entry.async("nodebuffer").then(async (content) => {
        await ensureDirectory(path.dirname(targetPath));
        await fs.writeFile(targetPath, content);
      })
    );
  });

  await Promise.all(tasks);
  return extractedAssetPaths;
}

async function importBoardArchive() {
  const filePath = await pickBoardArchiveImportPath();
  if (!filePath) {
    return null;
  }

  if (!await promptImportBoardArchive(filePath)) {
    return null;
  }

  const targetRoot = getStorageRoot();
  const targetBoardId = getActiveBoardId();
  const tempRoot = await fs.mkdtemp(path.join(app.getPath("temp"), "desktop-board-import-"));

  try {
    const archiveBuffer = await fs.readFile(filePath);
    const zip = await JSZip.loadAsync(archiveBuffer);
    const stateEntry = zip.file(boardArchiveStateEntry);

    if (!stateEntry) {
      throw new Error(`Archive is missing ${boardArchiveStateEntry}`);
    }

    const parsedState = JSON.parse(await stateEntry.async("string"));
    const preparedState = await prepareStateForStorage(parsedState, targetRoot, targetBoardId);
    const referencedAssetPaths = collectReferencedAssetPaths(preparedState);
    const referencedAssetSet = new Set(referencedAssetPaths);
    const tempBoardRoot = getBoardRoot(tempRoot, targetBoardId);
    const extractedAssetPaths = await extractArchiveAssets(zip, tempBoardRoot, referencedAssetSet);
    const tempAssetsPath = getAssetsPath(tempRoot, targetBoardId);

    await ensureDirectory(targetRoot);
    await ensureDirectory(getAssetsPath(targetRoot, targetBoardId));

    for (const assetRelativePath of referencedAssetPaths) {
      const targetAssetPath = getAbsoluteAssetPath(assetRelativePath, targetRoot, targetBoardId);
      if (await pathExists(targetAssetPath)) {
        await fs.rm(targetAssetPath, { force: true });
      }
    }

    if (await pathExists(tempAssetsPath)) {
      await fs.cp(tempAssetsPath, getAssetsPath(targetRoot, targetBoardId), { recursive: true, force: true });
    }

    await writeRawState(preparedState, targetRoot, targetBoardId);
    const loadedState = await readState(targetRoot, targetBoardId);

    await logEvent("info", "archive.import", "Imported board archive", {
      filePath,
      targetRoot,
      targetBoardId,
      cardCount: Array.isArray(preparedState.cards) ? preparedState.cards.length : 0,
      referencedAssetCount: referencedAssetPaths.length,
      importedAssetCount: extractedAssetPaths.length,
      missingAssetCount: Math.max(0, referencedAssetPaths.length - extractedAssetPaths.length)
    });

    return {
      appConfig: getAppConfigForRenderer(),
      boards: await listBoards(targetRoot, loadedState, targetBoardId),
      state: loadedState,
      filePath,
      cardCount: Array.isArray(preparedState.cards) ? preparedState.cards.length : 0,
      referencedAssetCount: referencedAssetPaths.length,
      importedAssetCount: extractedAssetPaths.length,
      missingAssetCount: Math.max(0, referencedAssetPaths.length - extractedAssetPaths.length)
    };
  } catch (error) {
    await logError("archive.import", error, { filePath, targetRoot });
    throw error;
  } finally {
    await fs.rm(tempRoot, { recursive: true, force: true }).catch(() => {});
  }
}

async function handleRendererLog(payload = {}) {
  const allowedLevels = new Set(["info", "warn", "error"]);
  const level = allowedLevels.has(payload.level) ? payload.level : "info";
  const scope = typeof payload.scope === "string" && payload.scope ? `renderer.${payload.scope}` : "renderer";
  const message = typeof payload.message === "string" && payload.message ? payload.message : "Renderer event";
  const details = payload.details && typeof payload.details === "object" ? payload.details : {};
  await logEvent(level, scope, message, details);
  return true;
}

function sendWindowModeState() {
  getRendererWindows().forEach((windowRef) => {
    sendWindowEvent(windowRef, "window-mode:state", getWindowModeState(windowRef));
  });
}

function syncLocalWindowBounds(windowRef) {
  if (!windowRef || windowRef.isDestroyed()) {
    return false;
  }

  const session = getWindowSession(windowRef);
  if (session?.role !== "workspace" && session?.role !== "workspace-overlay") {
    return syncWindowBounds(windowRef);
  }

  const display = screen.getAllDisplays().find((candidate) => getDisplayId(candidate) === String(session.displayId))
    || screen.getDisplayMatching(windowRef.getBounds())
    || screen.getPrimaryDisplay();
  const workArea = display.workArea || display.bounds;
  try {
    if (windowRef.isMaximized()) {
      windowRef.unmaximize();
    }
    windowRef.setBounds({
      x: workArea.x,
      y: workArea.y,
      width: workArea.width,
      height: workArea.height
    });
  } catch {
    return false;
  }

  return true;
}

function resetSessionWidgetState(session) {
  if (!session) {
    return;
  }
  session.widgetInteractive = false;
  session.widgetCaptured = false;
}

function destroyLocalWidgetOverlay(session) {
  const baseSession = getBaseSessionForLocalSession(session);
  if (!baseSession) {
    return false;
  }

  const windowRef = workspaceOverlayWindows.get(baseSession.id);
  if (!windowRef) {
    return false;
  }

  workspaceOverlayWindows.delete(baseSession.id);
  if (!windowRef.isDestroyed()) {
    windowRef.destroy();
  }
  return true;
}

function destroyAllLocalWidgetOverlays() {
  Array.from(workspaceOverlayWindows.values()).forEach((windowRef) => {
    if (windowRef && !windowRef.isDestroyed()) {
      windowRef.destroy();
    }
  });
  workspaceOverlayWindows = new Map();
}

function hideLocalWallpaperControl(session) {
  const baseSession = getBaseSessionForLocalSession(session);
  if (!baseSession) {
    return false;
  }

  const windowRef = workspaceWallpaperControlWindows.get(baseSession.id);
  if (!windowRef || windowRef.isDestroyed()) {
    return false;
  }

  windowRef.hide();
  return true;
}

function destroyLocalWallpaperControl(session) {
  const baseSession = getBaseSessionForLocalSession(session);
  if (!baseSession) {
    return false;
  }

  const windowRef = workspaceWallpaperControlWindows.get(baseSession.id);
  if (!windowRef) {
    return false;
  }

  workspaceWallpaperControlWindows.delete(baseSession.id);
  if (!windowRef.isDestroyed()) {
    windowRef.destroy();
  }
  return true;
}

function destroyAllLocalWallpaperControls() {
  Array.from(workspaceWallpaperControlWindows.values()).forEach((windowRef) => {
    if (windowRef && !windowRef.isDestroyed()) {
      windowRef.destroy();
    }
  });
  workspaceWallpaperControlWindows = new Map();
}

function ensureLocalWidgetOverlay(baseWindow) {
  if (!baseWindow || baseWindow.isDestroyed()) {
    return null;
  }

  const baseSession = getWindowSession(baseWindow);
  if (!baseSession || !isWorkspaceWindowSession(baseSession)) {
    return null;
  }

  const existingWindow = workspaceOverlayWindows.get(baseSession.id);
  if (existingWindow && !existingWindow.isDestroyed()) {
    return existingWindow;
  }

  const bounds = baseWindow.getBounds();
  ensureTray();
  const runtimeWindowIcon = loadNativeImage(taskbarIconPath) || loadNativeImage(trayIconPath);
  const windowRef = new BrowserWindow({
    ...createWindowOptions(bounds, runtimeWindowIcon),
    show: false,
    skipTaskbar: false,
    focusable: true,
    title: "Desktop Board"
  });

  registerWindowSession(windowRef, {
    role: "workspace-overlay",
    displayId: baseSession.displayId,
    boardId: baseSession.boardId,
    mode: "widget-mode",
    viewport: baseSession.viewport ? { ...baseSession.viewport } : null,
    overlayForSessionId: baseSession.id
  });

  windowRef.loadFile(path.join(__dirname, "src", "index.html"), {
    query: {
      role: "overlay",
      displayId: baseSession.displayId,
      overlayFor: baseSession.id
    }
  });
  syncLocalWindowBounds(windowRef);
  windowRef.on("show", updateTrayMenu);
  windowRef.on("hide", updateTrayMenu);
  windowRef.on("closed", () => {
    unregisterWindowSession(windowRef);
    workspaceOverlayWindows.delete(baseSession.id);
    sendWindowModeState();
    updateTrayMenu();
  });
  windowRef.webContents.once("did-finish-load", () => {
    sendAutoUpdateState();
    sendWindowEvent(windowRef, "window-mode:state", getWindowModeState(windowRef));
    sendThemeUpdate();
  });

  workspaceOverlayWindows.set(baseSession.id, windowRef);
  return windowRef;
}

function getLocalWallpaperControlBounds(baseWindow) {
  const display = baseWindow && !baseWindow.isDestroyed()
    ? screen.getDisplayMatching(baseWindow.getBounds())
    : screen.getPrimaryDisplay();
  const workArea = display.workArea || display.bounds;
  const width = 52;
  const height = 52;
  const margin = 16;
  return {
    x: workArea.x + workArea.width - width - margin,
    y: workArea.y + margin,
    width,
    height
  };
}

function ensureLocalWallpaperControl(baseWindow) {
  if (!baseWindow || baseWindow.isDestroyed()) {
    return null;
  }

  const baseSession = getWindowSession(baseWindow);
  if (!baseSession || !isWorkspaceWindowSession(baseSession)) {
    return null;
  }

  const existingWindow = workspaceWallpaperControlWindows.get(baseSession.id);
  if (existingWindow && !existingWindow.isDestroyed()) {
    return existingWindow;
  }

  const runtimeWindowIcon = loadNativeImage(taskbarIconPath) || loadNativeImage(trayIconPath);
  const windowRef = new BrowserWindow({
    ...getLocalWallpaperControlBounds(baseWindow),
    frame: false,
    transparent: true,
    resizable: false,
    movable: false,
    minimizable: false,
    maximizable: false,
    fullscreenable: false,
    skipTaskbar: true,
    show: false,
    alwaysOnTop: false,
    focusable: true,
    backgroundColor: "#00000000",
    icon: runtimeWindowIcon || windowIconPath,
    title: "Desktop Board Controls",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      backgroundThrottling: false
    }
  });

  registerWindowSession(windowRef, {
    role: "wallpaper-control",
    displayId: baseSession.displayId,
    boardId: baseSession.boardId,
    mode: "wallpaper-view",
    overlayForSessionId: baseSession.id
  });

  windowRef.loadFile(path.join(__dirname, "src", "wallpaper-control.html"));
  windowRef.on("close", (event) => {
    if (isQuitting) {
      return;
    }
    event.preventDefault();
    hideLocalWallpaperControl(baseSession);
  });
  windowRef.on("closed", () => {
    unregisterWindowSession(windowRef);
    workspaceWallpaperControlWindows.delete(baseSession.id);
    sendWindowModeState();
    updateTrayMenu();
  });

  workspaceWallpaperControlWindows.set(baseSession.id, windowRef);
  return windowRef;
}

function shouldShowLocalWallpaperControl(session) {
  const baseSession = getBaseSessionForLocalSession(session);
  return Boolean(
    multiWindowWorkspaceActive
    && baseSession
    && appConfig.wallpaperModeEnabled === true
    && baseSession.mode === "wallpaper-view"
    && foregroundState.manualHidden !== true
    && foregroundState.externalFullscreenActive !== true
  );
}

function syncLocalWallpaperControlWindowVisibility(baseWindow, session = null) {
  const baseSession = getBaseSessionForLocalSession(session || getWindowSession(baseWindow));
  if (!baseWindow || baseWindow.isDestroyed() || !baseSession || !shouldShowLocalWallpaperControl(baseSession)) {
    hideLocalWallpaperControl(baseSession);
    return false;
  }

  const windowRef = ensureLocalWallpaperControl(baseWindow);
  if (!windowRef || windowRef.isDestroyed()) {
    return false;
  }

  try {
    windowRef.setBounds(getLocalWallpaperControlBounds(baseWindow));
  } catch {
    // Ignore transient bounds failures.
  }

  if (!windowRef.isVisible()) {
    if (typeof windowRef.showInactive === "function") {
      windowRef.showInactive();
    } else {
      windowRef.show();
    }
  }

  if (typeof windowRef.moveTop === "function") {
    try {
      windowRef.moveTop();
    } catch {
      // Ignore z-order failures.
    }
  }

  return true;
}

function syncAllLocalWallpaperControlWindows() {
  if (!multiWindowWorkspaceActive) {
    destroyAllLocalWallpaperControls();
    return false;
  }

  [mainWindow, ...workspaceWindows.values()].forEach((windowRef) => {
    if (!windowRef || windowRef.isDestroyed()) {
      return;
    }
    syncLocalWallpaperControlWindowVisibility(windowRef, getWindowSession(windowRef));
  });

  return true;
}

async function detachLocalWallpaperWindow(windowRef, session) {
  if (!windowRef || windowRef.isDestroyed() || !session?.wallpaperAttached) {
    if (session) {
      session.wallpaperAttached = false;
      session.wallpaperParentClass = "";
      session.wallpaperError = null;
    }
    return true;
  }

  const result = await runWallpaperHelper("detach", windowRef);
  if (result?.ok !== true) {
    const message = String(result?.error || "Wallpaper helper failed during detach.");
    session.wallpaperError = message;
    throw new Error(message);
  }

  session.wallpaperAttached = false;
  session.wallpaperParentClass = "";
  session.wallpaperError = null;
  return true;
}

async function attachLocalWallpaperWindow(windowRef, session) {
  if (!windowRef || windowRef.isDestroyed() || !session) {
    return false;
  }

  const result = await runWallpaperHelper("attach", windowRef);
  if (result?.ok !== true) {
    const message = String(result?.error || "Wallpaper helper failed during attach.");
    session.wallpaperAttached = false;
    session.wallpaperError = message;
    throw new Error(message);
  }

  session.wallpaperAttached = true;
  session.wallpaperParentClass = String(result.parentClass || "");
  session.wallpaperError = null;
  return true;
}

function applyLocalWidgetWindowInteractivity(windowRef, state = {}) {
  const sourceSession = getWindowSession(windowRef);
  const baseSession = getBaseSessionForLocalSession(sourceSession);
  const targetWindow = sourceSession?.role === "workspace-overlay"
    ? windowRef
    : getLocalWidgetOverlayWindow(baseSession);
  const targetSession = getWindowSession(targetWindow);
  if (!targetWindow || targetWindow.isDestroyed() || !baseSession || !targetSession || baseSession.mode !== "widget-mode") {
    return false;
  }

  baseSession.widgetInteractive = state?.interactive === true;
  baseSession.widgetCaptured = state?.captured === true;
  targetSession.widgetInteractive = baseSession.widgetInteractive;
  targetSession.widgetCaptured = baseSession.widgetCaptured;
  const interactive = targetSession.widgetInteractive === true || targetSession.widgetCaptured === true;
  targetWindow.setFocusable(true);
  targetWindow.setSkipTaskbar(false);
  if (interactive) {
    targetWindow.setIgnoreMouseEvents(false);
    if (state?.focus === true) {
      targetWindow.focus();
    }
  } else {
    targetWindow.setIgnoreMouseEvents(true, { forward: true });
    if (targetWindow.isFocused()) {
      try {
        targetWindow.blur();
      } catch {
        // Ignore focus reset failures.
      }
    }
  }

  sendWindowEvent(targetWindow, "window-mode:state", getWindowModeState(targetWindow));
  return interactive;
}

async function applyLocalWindowMode(windowRef, mode, options = {}) {
  if (!windowRef || windowRef.isDestroyed()) {
    return false;
  }

  const session = getWindowSession(windowRef);
  if (!session) {
    return false;
  }

  const nextMode = normalizeWindowMode(mode);
  session.mode = nextMode;
  syncLocalWindowBounds(windowRef);

  if (windowRef.isMinimized()) {
    windowRef.restore();
  }
  if (!windowRef.isVisible()) {
    if (typeof windowRef.showInactive === "function" && (nextMode === "wallpaper-view" || nextMode === "widget-mode")) {
      windowRef.showInactive();
    } else {
      windowRef.show();
    }
  }

  windowRef.setIgnoreMouseEvents(false);
  windowRef.setFocusable(true);
  windowRef.setSkipTaskbar(nextMode === "wallpaper-view");

  try {
    if (nextMode === "wallpaper-view") {
      resetSessionWidgetState(session);
      destroyLocalWidgetOverlay(session);
      if (appConfig.wallpaperModeEnabled === true) {
        await attachLocalWallpaperWindow(windowRef, session);
      }
      windowRef.setFocusable(false);
      windowRef.setIgnoreMouseEvents(true, { forward: true });
      if (windowRef.isFocused()) {
        windowRef.blur();
      }
      syncLocalWallpaperControlWindowVisibility(windowRef, session);
    } else if (nextMode === "widget-mode") {
      hideLocalWallpaperControl(session);
      if (appConfig.wallpaperModeEnabled === true) {
        await attachLocalWallpaperWindow(windowRef, session);
      }
      windowRef.setSkipTaskbar(false);
      windowRef.setFocusable(false);
      windowRef.setIgnoreMouseEvents(true, { forward: true });
      const overlayRef = ensureLocalWidgetOverlay(windowRef);
      if (overlayRef && !overlayRef.isDestroyed()) {
        syncLocalWindowBounds(overlayRef);
        if (!overlayRef.isVisible()) {
          if (typeof overlayRef.showInactive === "function" && options.focus !== true) {
            overlayRef.showInactive();
          } else {
            overlayRef.show();
          }
        }
      }
      applyLocalWidgetWindowInteractivity(overlayRef || windowRef, {
        interactive: session.widgetInteractive === true,
        captured: session.widgetCaptured === true,
        focus: options.focus === true
      });
    } else {
      resetSessionWidgetState(session);
      destroyLocalWidgetOverlay(session);
      hideLocalWallpaperControl(session);
      await detachLocalWallpaperWindow(windowRef, session);
      windowRef.setSkipTaskbar(false);
      windowRef.setFocusable(true);
      windowRef.setIgnoreMouseEvents(false);
      if (options.focus !== false) {
        windowRef.focus();
      }
    }
  } catch (error) {
    session.mode = "normal";
    hideLocalWallpaperControl(session);
    windowRef.setIgnoreMouseEvents(false);
    windowRef.setFocusable(true);
    windowRef.setSkipTaskbar(false);
    await logError("window.localMode", error, {
      mode: nextMode,
      role: session.role,
      displayId: session.displayId
    });
  }

  updateTrayMenu();
  sendWindowEvent(windowRef, "window-mode:state", getWindowModeState(windowRef));
  return true;
}

function applyWindowModeToWindow(mode = currentWindowMode) {
  if (!mainWindow || mainWindow.isDestroyed()) {
    return false;
  }

  const nextMode = normalizeWindowMode(mode);
  syncWindowBounds(mainWindow);
  const session = getWindowSession(mainWindow);
  if (session) {
    session.mode = nextMode;
  }

  mainWindow.setIgnoreMouseEvents(false);
  mainWindow.setFocusable(true);
  mainWindow.setSkipTaskbar(nextMode === "wallpaper-view");

  if (nextMode === "wallpaper-view" || nextMode === "widget-mode") {
    mainWindow.setIgnoreMouseEvents(true);
    mainWindow.setFocusable(false);
  }

  updateTrayMenu();
  sendWindowModeState();
  return true;
}

function syncCurrentWindowModeFromConfig() {
  if (multiWindowWorkspaceActive) {
    currentWindowMode = "normal";
    const mainSession = getWindowSession(mainWindow);
    if (mainSession && !supportedWindowModes.has(mainSession.mode)) {
      mainSession.mode = "normal";
    }
    if (mainWindow && !mainWindow.isDestroyed()) {
      syncLocalWindowBounds(mainWindow);
    }
    sendWindowModeState();
    updateTrayMenu();
    return getWindowModeState();
  } else {
    currentWindowMode = getEffectiveWindowMode(appConfig, currentWindowMode);
  }
  if (currentWindowMode !== "wallpaper-view" || !canUseWallpaperOverlay(currentWindowMode, appConfig)) {
    wallpaperOverlayActive = false;
  }
  if (currentWindowMode !== "widget-mode") {
    widgetOverlayInteractive = false;
    widgetOverlayCaptured = false;
  }
  applyWindowModeToWindow(currentWindowMode);
  void syncOverlayWindowVisibility();
  void syncWallpaperControlWindowVisibility();
  updateForegroundWatcher();
  void pollForegroundWindowState();
  return getWindowModeState();
}

async function setWindowMode(nextMode, options = {}) {
  const hasExplicitSourceWindow = Boolean(options.sourceWindow);
  const sourceWindow = options.sourceWindow || mainWindow;
  const rawMode = typeof nextMode === "string" ? nextMode.trim().toLowerCase() : "";
  if (rawMode === "multi-window") {
    if (options.persist === true && normalizeMultiMonitorMode(appConfig.multiMonitorMode, appConfig.multiMonitorEnabled === true) !== "workspace") {
      await writeAppConfig({
        ...appConfig,
        multiMonitorMode: "workspace",
        multiMonitorEnabled: false
      });
      return getWindowModeState(sourceWindow);
    }
    multiWindowWorkspaceActive = true;
    if (mainWindow && !mainWindow.isDestroyed()) {
      const mainSession = getWindowSession(mainWindow);
      if (mainSession) {
        mainSession.mode = "normal";
      }
    }
    currentWindowMode = "normal";
    applyWindowModeToWindow(currentWindowMode);
    syncWorkspaceWindows({ focus: options.focus === true });
    return getWindowModeState(sourceWindow);
  }

  const persist = options.persist === true;
  const desiredMode = normalizeWindowMode(nextMode);
  const sourceSession = getWindowSession(sourceWindow);
  const persistedMode = (desiredMode === "wallpaper-view" || desiredMode === "widget-mode") ? "normal" : desiredMode;

  if (
    multiWindowWorkspaceActive
    && sourceSession
    && (sourceSession.role === "workspace" || (sourceSession.role === "main" && hasExplicitSourceWindow))
  ) {
    await applyLocalWindowMode(sourceWindow, desiredMode, { focus: options.focus === true });
    return getWindowModeState(sourceWindow);
  }

  if (multiWindowWorkspaceActive && sourceSession?.role === "workspace-overlay") {
    const baseWindow = getWindowBySessionId(sourceSession.overlayForSessionId);
    await applyLocalWindowMode(baseWindow || sourceWindow, desiredMode, { focus: options.focus === true });
    return getWindowModeState(baseWindow || sourceWindow);
  }

  if (sourceSession?.role === "workspace") {
    await applyLocalWindowMode(sourceWindow, desiredMode, { focus: options.focus === true });
    sendWindowEvent(sourceWindow, "window-mode:state", getWindowModeState(sourceWindow));
    return getWindowModeState(sourceWindow);
  }

  if (multiWindowWorkspaceActive && desiredMode !== "multi-window") {
    if (persist && normalizeMultiMonitorMode(appConfig.multiMonitorMode, appConfig.multiMonitorEnabled === true) === "workspace") {
      await writeAppConfig({
        ...appConfig,
        multiMonitorMode: "single",
        multiMonitorEnabled: false,
        windowMode: persistedMode
      });
    } else {
      multiWindowWorkspaceActive = false;
      hideWorkspaceWindows();
    }
  }

  const previousMode = currentWindowMode;

  if (persist && appConfig.windowMode !== persistedMode) {
    await writeAppConfig({
      ...appConfig,
      windowMode: persistedMode
    });
  }

  currentWindowMode = getEffectiveWindowMode(appConfig, desiredMode);
  const mainSession = getWindowSession(mainWindow);
  if (mainSession) {
    mainSession.mode = currentWindowMode;
  }
  if (currentWindowMode !== "wallpaper-view" || !canUseWallpaperOverlay(currentWindowMode, appConfig)) {
    wallpaperOverlayActive = false;
  } else if (options.activateOverlay === true) {
    wallpaperOverlayActive = true;
  } else if (previousMode !== "wallpaper-view") {
    wallpaperOverlayActive = false;
  }
  if (currentWindowMode !== "widget-mode") {
    widgetOverlayInteractive = false;
    widgetOverlayCaptured = false;
  }
  applyWindowModeToWindow(currentWindowMode);
  await queueWallpaperAttachmentSync(currentWindowMode);
  await syncOverlayWindowVisibility({
    activate: options.activateOverlay === true && currentWindowMode === "wallpaper-view",
    focus: options.focusOverlay === true && currentWindowMode === "wallpaper-view"
  });
  syncWallpaperControlWindowVisibility();
  updateForegroundWatcher();
  void pollForegroundWindowState();
  if (options.reveal !== false && currentWindowMode !== "wallpaper-view" && currentWindowMode !== "widget-mode") {
    showWindowForMode(currentWindowMode);
  }
  return getWindowModeState();
}

async function openCardHistoryInNormalMode(cardId, sourceWindow = null) {
  const normalizedCardId = typeof cardId === "string" ? cardId.trim() : "";
  if (!normalizedCardId) {
    return { ok: false };
  }

  const sourceSession = getWindowSession(sourceWindow);
  let targetWindow = sourceWindow && !sourceWindow.isDestroyed() ? sourceWindow : mainWindow;

  if (multiWindowWorkspaceActive) {
    if (sourceSession?.role === "workspace-overlay" || sourceSession?.role === "wallpaper-control") {
      targetWindow = getWindowBySessionId(sourceSession.overlayForSessionId) || mainWindow;
    } else if (sourceSession?.role !== "workspace" && sourceSession?.role !== "main") {
      targetWindow = mainWindow;
    }

    if (targetWindow && !targetWindow.isDestroyed()) {
      await applyLocalWindowMode(targetWindow, "normal", { focus: true });
    }
  } else {
    await setWindowMode("normal", {
      persist: true,
      sourceWindow: sourceWindow || mainWindow,
      reveal: true
    });
    targetWindow = mainWindow;
  }

  if ((!targetWindow || targetWindow.isDestroyed()) && app.isReady()) {
    createWindow();
    targetWindow = mainWindow;
  }

  if (!targetWindow || targetWindow.isDestroyed()) {
    return { ok: false };
  }

  if (targetWindow.isMinimized()) {
    targetWindow.restore();
  }
  if (!targetWindow.isVisible()) {
    targetWindow.show();
  }
  targetWindow.focus();
  sendWindowEvent(targetWindow, "card-history:open", { cardId: normalizedCardId });

  return {
    ok: true,
    state: getWindowModeState(targetWindow)
  };
}

function showWindowForMode(mode = currentWindowMode) {
  if (!mainWindow || mainWindow.isDestroyed()) {
    return false;
  }

  foregroundState.manualHidden = false;
  foregroundState.autoHidden = false;

  if (mainWindow.isMinimized()) {
    mainWindow.restore();
  }

  if (mode === "wallpaper-view" || mode === "widget-mode") {
    if (typeof mainWindow.showInactive === "function") {
      mainWindow.showInactive();
    } else {
      mainWindow.show();
    }
    void queueWallpaperAttachmentSync(mode);
    void syncOverlayWindowVisibility();
    void syncWallpaperControlWindowVisibility();
    updateForegroundWatcher();
    void pollForegroundWindowState();
    return true;
  }

  hideOverlayWindow();
  hideWallpaperControlWindow();
  mainWindow.show();
  mainWindow.focus();
  updateForegroundWatcher();
  void pollForegroundWindowState();
  return true;
}

function reinforceWallpaperView(reason = "") {
  if ((currentWindowMode !== "wallpaper-view" && currentWindowMode !== "widget-mode") || !mainWindow || mainWindow.isDestroyed()) {
    return false;
  }

  mainWindow.setIgnoreMouseEvents(true);
  mainWindow.setFocusable(false);
  mainWindow.setSkipTaskbar(currentWindowMode === "wallpaper-view");

  if (mainWindow.isFocused()) {
    try {
      mainWindow.blur();
    } catch {
      // Ignore focus reset failures and still re-apply wallpaper ordering.
    }
  }

  void queueWallpaperAttachmentSync("wallpaper-view").catch(async (error) => {
    await logError("wallpaper.reinforce", error, { reason });
  });
  return true;
}

function getRendererWindows() {
  return [mainWindow, overlayWindow, ...workspaceWindows.values(), ...workspaceOverlayWindows.values()]
    .filter((windowRef) => windowRef && !windowRef.isDestroyed());
}

function sendWindowEvent(windowRef, channel, payload) {
  if (!windowRef || windowRef.isDestroyed()) {
    return false;
  }

  const send = () => {
    if (!windowRef.isDestroyed()) {
      windowRef.webContents.send(channel, payload);
    }
  };

  if (windowRef.webContents.isLoadingMainFrame()) {
    windowRef.webContents.once("did-finish-load", send);
  } else {
    send();
  }

  return true;
}

function sendRendererEvent(channel, payload, options = {}) {
  const excludedWindow = options.excludedWindow || null;
  const targetWindow = options.targetWindow || null;
  const windows = targetWindow ? [targetWindow] : getRendererWindows();
  let sent = false;

  windows.forEach((windowRef) => {
    if (!windowRef || windowRef === excludedWindow || windowRef.isDestroyed()) {
      return;
    }
    sent = sendWindowEvent(windowRef, channel, payload) || sent;
  });

  return sent;
}

function shouldUseSessionViewport(target) {
  const session = getWindowSession(target);
  return Boolean(multiWindowWorkspaceActive && isWorkspaceWindowSession(session));
}

async function applySessionViewportForLoad(target, state, boardId) {
  const session = getWindowSession(target);
  if (!state || typeof state !== "object") {
    return state;
  }

  if (!session) {
    return state;
  }

  if (!session.viewport && state.viewport) {
    updateWindowSessionViewport(target, state.viewport);
  }

  if (shouldUseSessionViewport(target) && session.viewport) {
    return {
      ...state,
      boardId: getActiveBoardId(boardId || state.boardId),
      viewport: { ...session.viewport }
    };
  }

  return state;
}

async function prepareStateFromWindowForStorage(target, state, boardId) {
  updateWindowSessionViewport(target, state?.viewport);
  if (!shouldUseSessionViewport(target)) {
    return state;
  }

  const storedState = await readState(null, boardId);
  return {
    ...state,
    viewport: storedState?.viewport || state?.viewport
  };
}

function sendStateChangedToBoard(state, boardId, options = {}) {
  const targetBoardId = getActiveBoardId(boardId || state?.boardId);
  const excludedWindow = options.excludedWindow || null;
  let sent = false;

  getRendererWindows().forEach((windowRef) => {
    if (!windowRef || windowRef === excludedWindow || windowRef.isDestroyed()) {
      return;
    }
    if (getRendererBoardId(windowRef) !== targetBoardId) {
      return;
    }
    sent = sendWindowEvent(windowRef, "state:changed", state) || sent;
  });

  return sent;
}

function sendThemeUpdate() {
  return sendRendererEvent("theme:updated", getSystemTheme());
}

function canUseWallpaperOverlay(mode = currentWindowMode, config = appConfig) {
  return (
    isWallpaperModeSupported()
    && config?.wallpaperModeEnabled === true
    && config?.wallpaperInteractionEnabled === true
    && normalizeWindowMode(mode) === "wallpaper-view"
  );
}

function canUseWallpaperControl(mode = currentWindowMode, config = appConfig) {
  return (
    isWallpaperModeSupported()
    && config?.wallpaperModeEnabled === true
    && normalizeWindowMode(mode) === "wallpaper-view"
  );
}

function canUseWidgetOverlay(mode = currentWindowMode, config = appConfig) {
  return (
    isWallpaperModeSupported()
    && config?.wallpaperModeEnabled === true
    && normalizeWindowMode(mode) === "widget-mode"
  );
}

function shouldShowWallpaperOverlay(mode = currentWindowMode, config = appConfig) {
  return foregroundState.manualHidden !== true
    && foregroundState.externalFullscreenActive !== true
    && wallpaperOverlayActive
    && canUseWallpaperOverlay(mode, config);
}

function shouldShowWidgetOverlay(mode = currentWindowMode, config = appConfig) {
  return foregroundState.manualHidden !== true
    && foregroundState.externalFullscreenActive !== true
    && canUseWidgetOverlay(mode, config);
}

function shouldShowAnyOverlay(mode = currentWindowMode, config = appConfig) {
  return shouldShowWallpaperOverlay(mode, config) || shouldShowWidgetOverlay(mode, config);
}

function shouldShowWallpaperControl(mode = currentWindowMode, config = appConfig) {
  return foregroundState.manualHidden !== true
    && foregroundState.externalFullscreenActive !== true
    && canUseWallpaperControl(mode, config)
    && !shouldShowWallpaperOverlay(mode, config);
}

function isOverlayWindowVisible() {
  return Boolean(overlayWindow && !overlayWindow.isDestroyed() && overlayWindow.isVisible());
}

function getWallpaperControlBounds() {
  const { workArea } = screen.getPrimaryDisplay();
  const width = 52;
  const height = 52;
  const margin = 16;
  return {
    x: workArea.x + workArea.width - width - margin,
    y: workArea.y + margin,
    width,
    height
  };
}

function getStartupSplashBounds() {
  const { workArea } = screen.getPrimaryDisplay();
  const size = 240;
  return {
    x: Math.round(workArea.x + ((workArea.width - size) / 2)),
    y: Math.round(workArea.y + ((workArea.height - size) / 2)),
    width: size,
    height: size
  };
}

function createStartupSplashWindow() {
  if (splashWindow && !splashWindow.isDestroyed()) {
    return splashWindow;
  }

  splashWindow = new BrowserWindow({
    ...getStartupSplashBounds(),
    frame: false,
    transparent: true,
    resizable: false,
    movable: false,
    focusable: false,
    skipTaskbar: true,
    alwaysOnTop: true,
    show: false,
    backgroundColor: "#00000000",
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      backgroundThrottling: false
    }
  });

  splashWindow.loadFile(splashHtmlPath);
  splashWindow.once("ready-to-show", () => {
    if (!splashWindow || splashWindow.isDestroyed()) {
      return;
    }
    if (typeof splashWindow.showInactive === "function") {
      splashWindow.showInactive();
    } else {
      splashWindow.show();
    }
  });
  splashWindow.on("closed", () => {
    splashWindow = null;
  });
  setTimeout(() => {
    closeStartupSplashWindow();
  }, 8000);

  return splashWindow;
}

function closeStartupSplashWindow(delayMs = 0) {
  setTimeout(() => {
    if (splashWindow && !splashWindow.isDestroyed()) {
      splashWindow.close();
    }
    splashWindow = null;
  }, delayMs);
}

function getInteractiveWindowVisible() {
  if (shouldShowAnyOverlay()) {
    return isOverlayWindowVisible();
  }

  return Boolean(mainWindow && !mainWindow.isDestroyed() && mainWindow.isVisible())
    || Array.from(workspaceWindows.values()).some((windowRef) => (
      windowRef && !windowRef.isDestroyed() && windowRef.isVisible()
    ))
    || Array.from(workspaceOverlayWindows.values()).some((windowRef) => (
      windowRef && !windowRef.isDestroyed() && windowRef.isVisible()
    ));
}

function createWindowOptions(workArea, runtimeWindowIcon) {
  return {
    x: workArea.x,
    y: workArea.y,
    width: workArea.width,
    height: workArea.height,
    minWidth: 960,
    minHeight: 640,
    frame: false,
    transparent: true,
    resizable: true,
    maximizable: true,
    autoHideMenuBar: true,
    backgroundColor: "#00000000",
    icon: runtimeWindowIcon || windowIconPath,
    title: "Desktop Board",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      webviewTag: true,
      backgroundThrottling: false
    }
  };
}

function syncWindowBounds(windowRef) {
  if (!windowRef || windowRef.isDestroyed()) {
    return false;
  }

  const workArea = getBoardWindowBounds();
  const targetDisplay = getMainBoardDisplay(appConfig);
  const targetDisplayId = getDisplayId(targetDisplay);
  const session = getWindowSession(windowRef);
  const displayChanged = Boolean(session && targetDisplayId && session.displayId !== targetDisplayId);
  const useManualBounds = isMultiMonitorBoardEnabled()
    || normalizeMultiMonitorMode(appConfig.multiMonitorMode, appConfig.multiMonitorEnabled === true) === "workspace";
  try {
    if ((useManualBounds || displayChanged) && windowRef.isMaximized()) {
      windowRef.unmaximize();
    }
    windowRef.setBounds({
      x: workArea.x,
      y: workArea.y,
      width: workArea.width,
      height: workArea.height
    });
    if (!useManualBounds && !windowRef.isMaximized()) {
      windowRef.maximize();
    }
    if (session && targetDisplayId) {
      session.displayId = targetDisplayId;
    }
  } catch {
    return false;
  }

  return true;
}

function hideOverlayWindow() {
  if (!overlayWindow || overlayWindow.isDestroyed()) {
    wallpaperOverlayActive = false;
    widgetOverlayInteractive = false;
    widgetOverlayCaptured = false;
    syncWallpaperControlWindowVisibility();
    return false;
  }

  wallpaperOverlayActive = false;
  widgetOverlayInteractive = false;
  widgetOverlayCaptured = false;
  overlayWindow.setSkipTaskbar(true);
  overlayWindow.hide();
  if (currentWindowMode === "wallpaper-view" || currentWindowMode === "widget-mode") {
    void queueWallpaperAttachmentSync(currentWindowMode);
  }
  syncWallpaperControlWindowVisibility();
  updateTrayMenu();
  sendWindowModeState();
  return true;
}

function ensureOverlayWindow() {
  if (overlayWindow && !overlayWindow.isDestroyed()) {
    return overlayWindow;
  }

  const workArea = getBoardWindowBounds();
  ensureTray();
  const runtimeWindowIcon = loadNativeImage(taskbarIconPath) || loadNativeImage(trayIconPath);
  overlayWindow = new BrowserWindow({
    ...createWindowOptions(workArea, runtimeWindowIcon),
    show: false,
    skipTaskbar: true,
    focusable: true
  });

  overlayWindow.loadFile(path.join(__dirname, "src", "index.html"), {
    query: { role: "overlay" }
  });
  syncWindowBounds(overlayWindow);
  overlayWindow.on("close", (event) => {
    if (isQuitting) {
      return;
    }
    event.preventDefault();
    hideOverlayWindow();
  });
  overlayWindow.on("show", updateTrayMenu);
  overlayWindow.on("hide", updateTrayMenu);
  overlayWindow.on("closed", () => {
    overlayWindow = null;
    updateTrayMenu();
    sendWindowModeState();
  });
  overlayWindow.webContents.once("did-finish-load", () => {
    sendAutoUpdateState();
    sendWindowModeState();
    sendThemeUpdate();
  });

  return overlayWindow;
}

function hideWallpaperControlWindow() {
  if (!wallpaperControlWindow || wallpaperControlWindow.isDestroyed()) {
    return false;
  }

  wallpaperControlWindow.hide();
  return true;
}

function ensureWallpaperControlWindow() {
  if (wallpaperControlWindow && !wallpaperControlWindow.isDestroyed()) {
    return wallpaperControlWindow;
  }

  const runtimeWindowIcon = loadNativeImage(taskbarIconPath) || loadNativeImage(trayIconPath);
  wallpaperControlWindow = new BrowserWindow({
    ...getWallpaperControlBounds(),
    frame: false,
    transparent: true,
    resizable: false,
    movable: false,
    minimizable: false,
    maximizable: false,
    fullscreenable: false,
    skipTaskbar: true,
    show: false,
    alwaysOnTop: false,
    focusable: true,
    backgroundColor: "#00000000",
    icon: runtimeWindowIcon || windowIconPath,
    title: "Desktop Board Controls",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      backgroundThrottling: false
    }
  });

  wallpaperControlWindow.loadFile(path.join(__dirname, "src", "wallpaper-control.html"));
  wallpaperControlWindow.on("close", (event) => {
    if (isQuitting) {
      return;
    }
    event.preventDefault();
    hideWallpaperControlWindow();
  });
  wallpaperControlWindow.on("closed", () => {
    wallpaperControlWindow = null;
  });

  return wallpaperControlWindow;
}

function syncWallpaperControlWindowVisibility() {
  const shouldShow = shouldShowWallpaperControl();
  if (!shouldShow) {
    hideWallpaperControlWindow();
    return false;
  }

  const windowRef = ensureWallpaperControlWindow();
  if (!windowRef || windowRef.isDestroyed()) {
    return false;
  }

  try {
    windowRef.setBounds(getWallpaperControlBounds());
  } catch {
    // Ignore transient bounds failures.
  }

  if (!windowRef.isVisible()) {
    if (typeof windowRef.showInactive === "function") {
      windowRef.showInactive();
    } else {
      windowRef.show();
    }
  }

  if (typeof windowRef.moveTop === "function") {
    try {
      windowRef.moveTop();
    } catch {
      // Ignore z-order failures.
    }
  }

  return true;
}

function applyOverlayWindowInteractivity(options = {}) {
  if (!overlayWindow || overlayWindow.isDestroyed()) {
    return false;
  }

  const interactive = currentWindowMode === "widget-mode"
    ? (widgetOverlayInteractive === true || widgetOverlayCaptured === true)
    : true;

  if (currentWindowMode === "widget-mode") {
    overlayWindow.setAlwaysOnTop(false);
    overlayWindow.setSkipTaskbar(false);
    overlayWindow.setFocusable(true);
    if (interactive) {
      overlayWindow.setIgnoreMouseEvents(false);
    } else {
      overlayWindow.setIgnoreMouseEvents(true, { forward: true });
      if (overlayWindow.isFocused()) {
        try {
          overlayWindow.blur();
        } catch {
          // Ignore focus reset failures.
        }
      }
    }
    return interactive;
  }

  overlayWindow.setSkipTaskbar(true);

  if (interactive) {
    overlayWindow.setIgnoreMouseEvents(false);
    overlayWindow.setFocusable(true);
    if (options.focus === true) {
      overlayWindow.focus();
    }
  } else {
    overlayWindow.setIgnoreMouseEvents(true, { forward: true });
    overlayWindow.setFocusable(false);
    if (overlayWindow.isFocused()) {
      try {
        overlayWindow.blur();
      } catch {
        // Ignore focus reset failures.
      }
    }
  }

  return interactive;
}

function syncOverlayWindowVisibility(options = {}) {
  if (options.activate === true || options.focus === true) {
    wallpaperOverlayActive = true;
  }
  if (options.deactivate === true) {
    wallpaperOverlayActive = false;
  }

  const shouldShow = shouldShowAnyOverlay();
  if (!shouldShow) {
    if (!canUseWallpaperOverlay()) {
      wallpaperOverlayActive = false;
    }
    if (!canUseWidgetOverlay()) {
      widgetOverlayInteractive = false;
      widgetOverlayCaptured = false;
    }
    if (overlayWindow && !overlayWindow.isDestroyed()) {
      overlayWindow.setSkipTaskbar(true);
      overlayWindow.hide();
    }
    syncWallpaperControlWindowVisibility();
    updateTrayMenu();
    sendWindowModeState();
    return false;
  }

  const windowRef = ensureOverlayWindow();
  if (!windowRef || windowRef.isDestroyed()) {
    return false;
  }

  windowRef.setSkipTaskbar(currentWindowMode !== "widget-mode");
  syncWindowBounds(windowRef);
  if (windowRef.isMinimized()) {
    windowRef.restore();
  }
  if (!windowRef.isVisible()) {
    if (currentWindowMode === "widget-mode" && typeof windowRef.showInactive === "function") {
      windowRef.showInactive();
    } else {
      windowRef.show();
    }
  }
  applyOverlayWindowInteractivity({ focus: options.focus === true });
  hideWallpaperControlWindow();
  updateTrayMenu();
  sendWindowModeState();
  return true;
}

function hideWorkspaceWindows() {
  destroyAllLocalWidgetOverlays();
  destroyAllLocalWallpaperControls();
  Array.from(workspaceWindows.values()).forEach((windowRef) => {
    if (windowRef && !windowRef.isDestroyed()) {
      windowRef.destroy();
    }
  });
  workspaceWindows = new Map();
}

function ensureWorkspaceWindow(display) {
  const displayId = String(display?.id || "");
  if (!displayId) {
    return null;
  }

  const existingWindow = workspaceWindows.get(displayId);
  if (existingWindow && !existingWindow.isDestroyed()) {
    return existingWindow;
  }

  ensureTray();
  const workArea = display.workArea || display.bounds;
  const runtimeWindowIcon = loadNativeImage(taskbarIconPath) || loadNativeImage(trayIconPath);
  const windowRef = new BrowserWindow({
    ...createWindowOptions(workArea, runtimeWindowIcon),
    show: false,
    skipTaskbar: false,
    focusable: true,
    title: "Desktop Board"
  });

  registerWindowSession(windowRef, {
    role: "workspace",
    displayId,
    boardId: getActiveBoardId(),
    mode: "normal"
  });

  windowRef.loadFile(path.join(__dirname, "src", "index.html"), {
    query: {
      role: "workspace",
      displayId
    }
  });
  windowRef.setBounds({
    x: workArea.x,
    y: workArea.y,
    width: workArea.width,
    height: workArea.height
  });
  if (!windowRef.isMaximized()) {
    windowRef.maximize();
  }
  windowRef.on("show", updateTrayMenu);
  windowRef.on("hide", updateTrayMenu);
  windowRef.on("closed", () => {
    unregisterWindowSession(windowRef);
    workspaceWindows.delete(displayId);
    sendWindowModeState();
    updateTrayMenu();
  });
  windowRef.webContents.once("did-finish-load", () => {
    sendAutoUpdateState();
    sendWindowEvent(windowRef, "window-mode:state", getWindowModeState(windowRef));
    sendThemeUpdate();
  });

  workspaceWindows.set(displayId, windowRef);
  return windowRef;
}

function syncWorkspaceWindows(options = {}) {
  multiWindowWorkspaceActive = isMultiWindowWorkspaceEnabled(appConfig);
  if (!multiWindowWorkspaceActive) {
    hideWorkspaceWindows();
    sendWindowModeState();
    return false;
  }

  const selectedDisplays = getSelectedBoardDisplays(appConfig);
  const mainDisplay = getMainBoardDisplay(appConfig);
  const mainDisplayId = getDisplayId(mainDisplay);
  const activeDisplayIds = new Set(selectedDisplays.map(getDisplayId));

  Array.from(workspaceWindows.entries()).forEach(([displayId, windowRef]) => {
    if (!activeDisplayIds.has(displayId) || displayId === mainDisplayId) {
      destroyLocalWidgetOverlay(getWindowSession(windowRef));
      destroyLocalWallpaperControl(getWindowSession(windowRef));
      if (windowRef && !windowRef.isDestroyed()) {
        windowRef.destroy();
      }
      workspaceWindows.delete(displayId);
    }
  });

  if (mainWindow && !mainWindow.isDestroyed()) {
    const mainSession = getWindowSession(mainWindow);
    if (mainSession) {
      mainSession.displayId = mainDisplayId;
      mainSession.mode = "normal";
    }
    syncWindowBounds(mainWindow);
    if (!mainWindow.isVisible()) {
      mainWindow.show();
    }
  }

  selectedDisplays.forEach((display) => {
    if (getDisplayId(display) === mainDisplayId) {
      return;
    }

    const windowRef = ensureWorkspaceWindow(display);
    if (!windowRef || windowRef.isDestroyed()) {
      return;
    }

    const workArea = display.workArea || display.bounds;
    windowRef.setBounds({
      x: workArea.x,
      y: workArea.y,
      width: workArea.width,
      height: workArea.height
    });
    if (!windowRef.isMaximized()) {
      windowRef.maximize();
    }
    if (!windowRef.isVisible()) {
      if (typeof windowRef.showInactive === "function" && options.focus !== true) {
        windowRef.showInactive();
      } else {
        windowRef.show();
      }
    }
    const session = getWindowSession(windowRef);
    if (session?.mode === "widget-mode") {
      void applyLocalWindowMode(windowRef, "widget-mode", { focus: false });
    } else if (session?.mode === "wallpaper-view") {
      void applyLocalWindowMode(windowRef, "wallpaper-view", { focus: false });
    } else if (session) {
      destroyLocalWidgetOverlay(session);
      destroyLocalWallpaperControl(session);
    }
  });

  sendWindowModeState();
  updateTrayMenu();
  return workspaceWindows.size > 0;
}

function createWindow() {
  const workArea = getBoardWindowBounds();
  ensureTray();
  const runtimeWindowIcon = loadNativeImage(taskbarIconPath) || loadNativeImage(trayIconPath);

  mainWindow = new BrowserWindow(createWindowOptions(workArea, runtimeWindowIcon));
  const mainDisplay = getMainBoardDisplay(appConfig);
  registerWindowSession(mainWindow, {
    role: "main",
    displayId: getDisplayId(mainDisplay),
    boardId: getActiveBoardId(),
    mode: currentWindowMode
  });

  applyWindowModeToWindow(currentWindowMode);
  mainWindow.loadFile(path.join(__dirname, "src", "index.html"));
  mainWindow.on("close", (event) => {
    if (isQuitting) {
      return;
    }
    event.preventDefault();
    hideWindowToTray();
  });
  mainWindow.on("show", () => {
    updateTrayMenu();
    reinforceWallpaperView("show");
  });
  mainWindow.on("hide", updateTrayMenu);
  mainWindow.on("focus", () => {
    reinforceWallpaperView("focus");
  });
  mainWindow.on("restore", () => {
    reinforceWallpaperView("restore");
  });
  mainWindow.on("maximize", () => {
    reinforceWallpaperView("maximize");
  });
  mainWindow.on("closed", () => {
    unregisterWindowSession(mainWindow);
    if (mainWindow && mainWindow.isDestroyed()) {
      mainWindow = null;
    }
    if (overlayWindow && !overlayWindow.isDestroyed()) {
      overlayWindow.destroy();
      overlayWindow = null;
    }
    hideWorkspaceWindows();
    wallpaperAttachmentState = {
      attached: false,
      parentClass: "",
      error: null
    };
    updateTrayMenu();
  });
  mainWindow.webContents.once("did-finish-load", () => {
    sendAutoUpdateState();
    sendWindowModeState();
    sendThemeUpdate();
    updateTrayMenu();
    closeStartupSplashWindow(900);
  });
}

function sendNotificationEvent(payload) {
  return sendRendererEvent("notifications:event", payload);
}

async function sendToggleLockEvent() {
  if ((currentWindowMode === "wallpaper-view" && canUseWallpaperOverlay()) || (currentWindowMode === "widget-mode" && canUseWidgetOverlay())) {
    if (!shouldShowAnyOverlay() || !isOverlayWindowVisible()) {
      await syncOverlayWindowVisibility({
        activate: currentWindowMode === "wallpaper-view",
        focus: true
      });
    }

    if (overlayWindow && !overlayWindow.isDestroyed() && overlayWindow.isVisible()) {
      overlayWindow.webContents.send("board:toggle-lock");
      return true;
    }
  }

  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send("board:toggle-lock");
    return true;
  }

  return false;
}

async function updateWidgetOverlayInteractivity(state = {}, sourceWindow = null) {
  const sourceSession = getWindowSession(sourceWindow);
  if (multiWindowWorkspaceActive && sourceWindow && isWorkspaceWindowSession(sourceSession)) {
    return applyLocalWidgetWindowInteractivity(sourceWindow, state);
  }

  widgetOverlayInteractive = state?.interactive === true;
  widgetOverlayCaptured = state?.captured === true;

  if (currentWindowMode !== "widget-mode") {
    return false;
  }

  if (shouldShowWidgetOverlay()) {
    return syncOverlayWindowVisibility({ focus: state?.focus === true });
  }

  return false;
}

async function activateWallpaperInteraction(sourceWindow = null) {
  const sourceSession = getWindowSession(sourceWindow);
  if (sourceSession?.role === "wallpaper-control") {
    const baseWindow = getWindowBySessionId(sourceSession.overlayForSessionId);
    const baseSession = getWindowSession(baseWindow);
    if (baseWindow && !baseWindow.isDestroyed() && baseSession) {
      hideLocalWallpaperControl(baseSession);
      await applyLocalWindowMode(baseWindow, "normal", { focus: true });
      return true;
    }
  }

  if (currentWindowMode === "wallpaper-view" && canUseWallpaperOverlay()) {
    wallpaperOverlayActive = true;
    return syncOverlayWindowVisibility({ activate: true, focus: true });
  }

  return revealMainWindow({ preferEditable: true });
}

function revealMainWindow(options = {}) {
  if ((!mainWindow || mainWindow.isDestroyed()) && app.isReady()) {
    createWindow();
  }

  if (!mainWindow || mainWindow.isDestroyed()) {
    return false;
  }

  foregroundState.manualHidden = false;
  foregroundState.autoHidden = false;

  if (options.preferEditable === true && currentWindowMode === "wallpaper-view") {
    currentWindowMode = getEffectiveWindowMode(appConfig, "normal");
    wallpaperOverlayActive = false;
    applyWindowModeToWindow(currentWindowMode);
    void queueWallpaperAttachmentSync(currentWindowMode);
    hideOverlayWindow();
    return showWindowForMode(currentWindowMode);
  }

  if (currentWindowMode === "wallpaper-view" && canUseWallpaperOverlay()) {
    return syncOverlayWindowVisibility({ activate: true, focus: true });
  }

  if (currentWindowMode === "widget-mode" && canUseWidgetOverlay()) {
    return syncOverlayWindowVisibility({ focus: true });
  }

  const shown = showWindowForMode(currentWindowMode);
  if (multiWindowWorkspaceActive) {
    syncWorkspaceWindows();
  }
  return shown;
}

function dismissNotificationsForCard(cardId) {
  const targetCardId = typeof cardId === "string" ? cardId : String(cardId || "");
  if (!targetCardId) {
    return false;
  }

  for (const [notificationId, entry] of activeNotifications.entries()) {
    if (entry.cardId !== targetCardId) {
      continue;
    }

    try {
      entry.notification.close();
    } catch {
      // Ignore close failures and still clear the tracking entry.
    }
    activeNotifications.delete(notificationId);
  }

  return true;
}

async function showDesktopNotification(payload = {}) {
  const notificationId = typeof payload.notificationId === "string" && payload.notificationId.trim()
    ? payload.notificationId.trim()
    : `notification-${Date.now()}`;
  const cardId = typeof payload.cardId === "string" ? payload.cardId : "";
  const title = typeof payload.title === "string" && payload.title.trim()
    ? payload.title.trim()
    : "Desktop Board";
  const body = typeof payload.body === "string" ? payload.body : "";
  const playSound = payload.playSound === true;
  const persistent = payload.persistent === true;
  const allowAcknowledge = payload.allowAcknowledge === true && Boolean(cardId);
  const acknowledgeLabel = typeof payload.acknowledgeLabel === "string" && payload.acknowledgeLabel.trim()
    ? payload.acknowledgeLabel.trim()
    : "Acknowledge";
  const openLabel = typeof payload.openLabel === "string" && payload.openLabel.trim()
    ? payload.openLabel.trim()
    : "Open";

  if (playSound) {
    try {
      shell.beep();
    } catch (error) {
      await logError("notifications.beep", error, { notificationId, cardId });
    }
  }

  const notificationsSupported = typeof Notification?.isSupported === "function"
    ? Notification.isSupported()
    : true;
  if (!notificationsSupported) {
    return {
      notificationId,
      shown: false,
      supported: false
    };
  }

  const previousEntry = activeNotifications.get(notificationId);
  if (previousEntry) {
    try {
      previousEntry.notification.close();
    } catch {
      // Ignore stale native notification handles.
    }
    activeNotifications.delete(notificationId);
  }

  const actions = [];
  if (allowAcknowledge) {
    actions.push({ type: "button", text: acknowledgeLabel });
  }
  actions.push({ type: "button", text: openLabel });

  try {
    const notification = new Notification({
      title,
      body,
      icon: notificationIconPath,
      silent: true,
      timeoutType: persistent ? "never" : "default",
      actions
    });

    const openCard = () => {
      revealMainWindow({ preferEditable: true });
      if (cardId) {
        sendNotificationEvent({
          type: "focus-card",
          cardId,
          notificationId
        });
      }
    };

    const acknowledgeCard = () => {
      if (!cardId) {
        return;
      }

      dismissNotificationsForCard(cardId);
      sendNotificationEvent({
        type: "acknowledge-card",
        cardId,
        notificationId
      });
    };

    notification.on("click", openCard);
    notification.on("action", (_event, index) => {
      if (allowAcknowledge && index === 0) {
        acknowledgeCard();
        return;
      }
      openCard();
    });
    notification.on("close", () => {
      if (activeNotifications.get(notificationId)?.notification === notification) {
        activeNotifications.delete(notificationId);
      }
    });
    notification.on("failed", (_event, errorMessage) => {
      if (activeNotifications.get(notificationId)?.notification === notification) {
        activeNotifications.delete(notificationId);
      }
      const error = errorMessage instanceof Error
        ? errorMessage
        : new Error(String(errorMessage || "Notification failed"));
      void logError("notifications.show", error, { notificationId, cardId });
    });

    activeNotifications.set(notificationId, { notification, cardId });
    notification.show();

    return {
      notificationId,
      shown: true,
      supported: true
    };
  } catch (error) {
    await logError("notifications.show", error, { notificationId, cardId });
    return {
      notificationId,
      shown: false,
      supported: notificationsSupported
    };
  }
}

function isMainWindowVisible() {
  return Boolean(mainWindow && !mainWindow.isDestroyed() && mainWindow.isVisible());
}

function getTrayLabels() {
  const locale = String(app.getLocale?.() || "en").toLowerCase();
  const isRussian = locale.startsWith("ru");
  return {
    tooltip: "Desktop Board",
    show: isRussian ? "Показать доску" : "Show board",
    hide: isRussian ? "Скрыть в трей" : "Hide to tray",
    quit: isRussian ? "Выход" : "Quit",
    backgroundHintTitle: "Desktop Board",
    backgroundHintBody: isRussian
      ? "Приложение продолжает работать в фоне. Откройте его через иконку в системном трее."
      : "The app is still running in the background. Reopen it from the system tray.",
    windowModeSection: isRussian ? "Режим работы" : "Work mode",
    windowModeNormal: isRussian ? "\u041e\u0431\u044b\u0447\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c" : "Normal",
    windowModeWallpaperView: isRussian ? "Wallpaper view" : "Wallpaper view",
    windowModeWidgetMode: isRussian ? "Widget mode" : "Widget mode"
  };
}

function updateTrayMenu() {
  if (!tray) {
    return;
  }

  const labels = getTrayLabels();
  const windowVisible = getInteractiveWindowVisible();
  const trayWindowMode = multiWindowWorkspaceActive ? getWindowSessionMode(mainWindow) : currentWindowMode;
  const switchTrayWindowMode = (mode) => {
    const nextMode = normalizeWindowMode(mode);
    if (multiWindowWorkspaceActive && mainWindow && !mainWindow.isDestroyed()) {
      void applyLocalWindowMode(mainWindow, nextMode, { focus: true });
      return;
    }
    void setWindowMode(nextMode, { persist: true }).then(() => showWindowForMode(nextMode));
  };
  const trayMenuItems = [
    {
      label: windowVisible ? labels.hide : labels.show,
      click: () => {
        if (windowVisible) {
          hideWindowToTray({ showHint: false });
        } else {
          revealMainWindow({ preferEditable: true });
        }
      }
    }
  ];

  if (isWallpaperModeSupported() && appConfig.wallpaperModeEnabled === true) {
    trayMenuItems.push(
      { type: "separator" },
      { label: labels.windowModeSection, enabled: false },
      {
        label: labels.windowModeNormal,
        type: "radio",
        checked: trayWindowMode === "normal",
        click: () => {
          if (trayWindowMode === "normal") {
            return;
          }
          switchTrayWindowMode("normal");
        }
      },
      {
        label: labels.windowModeWallpaperView,
        type: "radio",
        checked: trayWindowMode === "wallpaper-view",
        click: () => {
          if (trayWindowMode === "wallpaper-view") {
            return;
          }
          switchTrayWindowMode("wallpaper-view");
        }
      },
      {
        label: labels.windowModeWidgetMode,
        type: "radio",
        checked: trayWindowMode === "widget-mode",
        click: () => {
          if (trayWindowMode === "widget-mode") {
            return;
          }
          switchTrayWindowMode("widget-mode");
        }
      }
    );
  }

  trayMenuItems.push(
    { type: "separator" },
    {
      label: labels.quit,
      click: () => {
        isQuitting = true;
        app.quit();
      }
    }
  );

  tray.setToolTip(labels.tooltip);
  tray.setContextMenu(Menu.buildFromTemplate(trayMenuItems));
}

function ensureTray() {
  if (tray || !app.isReady()) {
    updateTrayMenu();
    return tray;
  }

  const trayIcon = nativeImage.createFromPath(trayIconPath);
  tray = new Tray(trayIcon.isEmpty() ? windowIconPath : trayIcon);
  tray.on("click", () => {
    if (getInteractiveWindowVisible()) {
      hideWindowToTray({ showHint: false });
    } else {
      revealMainWindow({ preferEditable: true });
    }
  });
  tray.on("double-click", () => {
    revealMainWindow({ preferEditable: true });
  });
  updateTrayMenu();
  return tray;
}

function hideWindowToTray(options = {}) {
  if (!mainWindow || mainWindow.isDestroyed()) {
    return false;
  }

  ensureTray();
  if (isWallpaperManagedMode(currentWindowMode)) {
    hideBoardWindows({ manual: options.manual !== false });
  } else {
    if (shouldShowAnyOverlay() && isOverlayWindowVisible()) {
      hideOverlayWindow();
      return true;
    }

    mainWindow.hide();
    Array.from(workspaceWindows.values()).forEach((windowRef) => {
      if (windowRef && !windowRef.isDestroyed()) {
        windowRef.hide();
      }
    });
    Array.from(workspaceOverlayWindows.values()).forEach((windowRef) => {
      if (windowRef && !windowRef.isDestroyed()) {
        windowRef.hide();
      }
    });
    Array.from(workspaceWallpaperControlWindows.values()).forEach((windowRef) => {
      if (windowRef && !windowRef.isDestroyed()) {
        windowRef.hide();
      }
    });
  }
  updateTrayMenu();

  if (process.platform === "win32" && options.showHint !== false && tray && !trayBalloonShown) {
    trayBalloonShown = true;
    const labels = getTrayLabels();
    try {
      tray.displayBalloon({
        iconType: "info",
        title: labels.backgroundHintTitle,
        content: labels.backgroundHintBody
      });
    } catch {
      // Ignore tray balloon failures.
    }
  }

  return true;
}

function toggleWindow() {
  if (currentWindowMode === "wallpaper-view" || currentWindowMode === "widget-mode") {
    if (isAnyBoardWindowVisible()) {
      hideWindowToTray({ showHint: false, manual: true });
      return;
    }

    showWindowForMode(currentWindowMode);
    return;
  }

  if (getInteractiveWindowVisible()) {
    hideWindowToTray({ showHint: false });
    return;
  }

  revealMainWindow({ preferEditable: true });
}

process.on("uncaughtException", (error) => {
  console.error("Uncaught exception:", error);
  void logError("process.uncaughtException", error, { fatal: true });
});

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled rejection:", reason);
  void logError("process.unhandledRejection", reason instanceof Error ? reason : new Error(String(reason)), { fatal: true });
});

app.on("before-quit", () => {
  isQuitting = true;
});

app.whenReady().then(async () => {
  if (process.platform === "win32") {
    app.setAppUserModelId(appId);
  }
  nativeTheme.themeSource = "system";
  await readAppConfig();
  multiWindowWorkspaceActive = isMultiWindowWorkspaceEnabled(appConfig);
  currentWindowMode = getEffectiveWindowMode(appConfig);
  try {
    applyAutoStartPreference();
  } catch (error) {
    await logError("startup.autostart", error, {
      enabled: appConfig.autoStartEnabled,
      packaged: app.isPackaged
    });
  }

  ipcMain.handle("state:load", async (event) => {
    const boardId = getRendererBoardId(event.sender);
    const state = await readState(null, boardId);
    return applySessionViewportForLoad(event.sender, state, boardId);
  });
  ipcMain.handle("state:save", async (event, state) => {
    const sourceWindow = BrowserWindow.fromWebContents(event.sender);
    const boardId = setRendererBoardId(event.sender, state?.boardId || getRendererBoardId(event.sender));
    const stateToWrite = await prepareStateFromWindowForStorage(event.sender, state, boardId);
    await writeState(stateToWrite, null, boardId);
    sendStateChangedToBoard(stateToWrite, boardId, { excludedWindow: sourceWindow });
    return true;
  });
  ipcMain.handle("app-config:get", (event) => getAppConfigForRenderer(event.sender));
  ipcMain.handle("app-config:update", (event, partial) => updateAppConfig(partial || {}, event.sender));
  ipcMain.handle("boards:list", (event, currentState) => listBoardsForRenderer(currentState || null, getRendererBoardId(event.sender)));
  ipcMain.handle("boards:create", async (event, name, currentState) => {
    const sourceWindow = BrowserWindow.fromWebContents(event.sender);
    const currentBoardId = getRendererBoardId(event.sender);
    const stateForOperation = currentState
      ? await prepareStateFromWindowForStorage(event.sender, currentState, currentBoardId)
      : null;
    const result = await createBoard(String(name || ""), stateForOperation, {
      currentBoardId,
      persistActive: sourceWindow === mainWindow
    });
    if (result?.state?.boardId) {
      setRendererBoardId(event.sender, result.state.boardId);
    }
    return result;
  });
  ipcMain.handle("boards:rename", async (event, boardId, name, currentState) => {
    const currentBoardId = getRendererBoardId(event.sender);
    const stateForOperation = currentState
      ? await prepareStateFromWindowForStorage(event.sender, currentState, currentBoardId)
      : null;
    return renameBoard(
      String(boardId || ""),
      String(name || ""),
      stateForOperation,
      { currentBoardId }
    );
  });
  ipcMain.handle("boards:switch", async (event, boardId, currentState) => {
    const sourceWindow = BrowserWindow.fromWebContents(event.sender);
    const currentBoardId = getRendererBoardId(event.sender);
    const stateForOperation = currentState
      ? await prepareStateFromWindowForStorage(event.sender, currentState, currentBoardId)
      : null;
    const targetBoardId = await resolveBoardIdForStorage(null, String(boardId || ""), stateForOperation);
    const result = await switchBoard(String(boardId || ""), stateForOperation, {
      currentBoardId,
      persistActive: sourceWindow === mainWindow
    });
    setRendererBoardId(event.sender, targetBoardId);
    if (result?.state) {
      result.state = await applySessionViewportForLoad(event.sender, result.state, targetBoardId);
    }
    return result;
  });
  ipcMain.handle("boards:delete", async (event, boardId, currentState) => {
    const sourceWindow = BrowserWindow.fromWebContents(event.sender);
    const currentBoardId = getRendererBoardId(event.sender);
    const stateForOperation = currentState
      ? await prepareStateFromWindowForStorage(event.sender, currentState, currentBoardId)
      : null;
    const result = await deleteBoard(String(boardId || ""), stateForOperation, {
      currentBoardId,
      persistActive: sourceWindow === mainWindow
    });
    if (result?.state?.boardId) {
      setRendererBoardId(event.sender, result.state.boardId);
      result.state = await applySessionViewportForLoad(event.sender, result.state, result.state.boardId);
    }
    return result;
  });
  ipcMain.handle("storage:pick-directory", () => pickStorageDirectory());
  ipcMain.handle("storage:set-directory", (_event, directoryPath, state) => setStorageDirectory(String(directoryPath || ""), state || null));
  ipcMain.handle("storage:open-directory", () => openCurrentStorageDirectory());
  ipcMain.handle("archive:export", (_event, state) => exportBoardArchive(state || null));
  ipcMain.handle("archive:import", () => importBoardArchive());
  ipcMain.handle("assets:analyze", (_event, state) => analyzeStoredAssets(state || null));
  ipcMain.handle("assets:cleanup", (_event, state) => cleanupUnusedStoredAssets(state || null));
  ipcMain.handle("logs:open-directory", () => openLogsDirectory());
  ipcMain.handle("log:event", (_event, payload) => handleRendererLog(payload || {}));
  ipcMain.handle("hotkeys:update", (_event, settings) => registerHotkeys(settings));
  ipcMain.handle("media:pick", (_event, kind, options) => pickMedia(kind, options || {}));
  ipcMain.handle("file:pick", (_event, options) => pickFile(options || {}));
  ipcMain.handle("asset:import", (_event, input) => importAssetFromPath(input?.path, input || {}));
  ipcMain.handle("external:open", (_event, url) => shell.openExternal(String(url || "")));
  ipcMain.handle("file:open", (_event, filePath) => shell.openPath(String(filePath || "")));
  ipcMain.handle("file:reveal", (_event, filePath) => {
    shell.showItemInFolder(String(filePath || ""));
    return true;
  });
  ipcMain.handle("file:preview", (_event, filePath, extension, maxChars) => readFilePreview(String(filePath || ""), String(extension || ""), maxChars));
  ipcMain.handle("notifications:show", (_event, payload) => showDesktopNotification(payload || {}));
  ipcMain.handle("notifications:dismiss-for-card", (_event, cardId) => dismissNotificationsForCard(String(cardId || "")));
  ipcMain.handle("theme:get", getSystemTheme);
  ipcMain.handle("theme-package:import", () => importThemePackage());
  ipcMain.handle("catalog:scan-usage", async (event, payload) => {
    const currentBoardId = getRendererBoardId(event.sender);
    const stateForOperation = payload?.currentState
      ? await prepareStateFromWindowForStorage(event.sender, payload.currentState, currentBoardId)
      : null;
    return scanCatalogUsage({
      ...(payload || {}),
      currentState: stateForOperation
    }, { currentBoardId });
  });
  ipcMain.handle("catalog:apply-removal", async (event, payload) => {
    const sourceWindow = BrowserWindow.fromWebContents(event.sender);
    const currentBoardId = getRendererBoardId(event.sender);
    const stateForOperation = payload?.currentState
      ? await prepareStateFromWindowForStorage(event.sender, payload.currentState, currentBoardId)
      : null;
    const result = await applyCatalogRemoval({
      ...(payload || {}),
      currentState: stateForOperation
    }, {
      currentBoardId,
      excludedWindow: sourceWindow
    });
    if (result?.state) {
      result.state = await applySessionViewportForLoad(event.sender, result.state, currentBoardId);
    }
    return result;
  });
  ipcMain.handle("updates:get-state", () => getAutoUpdateStateForRenderer());
  ipcMain.handle("updates:check", () => checkForAppUpdates("manual"));
  ipcMain.handle("updates:install", () => installDownloadedUpdate());
  ipcMain.handle("window-mode:get-state", (event) => getWindowModeState(event.sender));
  ipcMain.handle("window-mode:set", (event, mode) => setWindowMode(String(mode || ""), {
    persist: true,
    sourceWindow: BrowserWindow.fromWebContents(event.sender)
  }));
  ipcMain.handle("window-mode:activate-overlay", (event) => activateWallpaperInteraction(
    BrowserWindow.fromWebContents(event.sender)
  ));
  ipcMain.handle("widget-mode:set-interactivity", (event, state) => updateWidgetOverlayInteractivity(
    state || {},
    BrowserWindow.fromWebContents(event.sender)
  ));
  ipcMain.handle("card-history:open-in-normal-mode", (event, cardId) => openCardHistoryInNormalMode(
    cardId,
    BrowserWindow.fromWebContents(event.sender)
  ));
  ipcMain.handle("web-card:sync", (event, cards) => syncNativeWebCards(event.sender, cards || []));
  ipcMain.handle("web-card:reload", (event, cardId) => reloadNativeWebCard(event.sender, cardId));
  ipcMain.handle("window:hide", () => {
    return hideWindowToTray({ showHint: false });
  });

  createStartupSplashWindow();
  createWindow();
  syncWorkspaceWindows();

  const state = await readState();
  registerHotkeys(state?.settings);
  await initializeAutoUpdater();

  nativeTheme.on("updated", () => {
    sendThemeUpdate();
  });

  const syncWindowLayout = () => {
    syncWindowBounds(mainWindow);
    syncWindowBounds(overlayWindow);
    syncWorkspaceWindows();
    syncWallpaperControlWindowVisibility();
    syncAllLocalWallpaperControlWindows();
    sendWindowModeState();
  };
  screen.on("display-metrics-changed", syncWindowLayout);
  screen.on("display-added", syncWindowLayout);
  screen.on("display-removed", syncWindowLayout);

  app.on("activate", () => {
    if (!mainWindow || mainWindow.isDestroyed() || BrowserWindow.getAllWindows().length === 0) {
      createWindow();
      return;
    }
    revealMainWindow({ preferEditable: true });
  });
}).catch((error) => {
  console.error("Failed during app startup:", error);
  void logError("app.startup", error, { fatal: true });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin" && isQuitting) {
    app.quit();
  }
});

app.on("will-quit", () => {
  if (splashWindow && !splashWindow.isDestroyed()) {
    splashWindow.destroy();
    splashWindow = null;
  }
  if (tray) {
    tray.destroy();
    tray = null;
  }
  if (foregroundWatchTimer) {
    clearInterval(foregroundWatchTimer);
    foregroundWatchTimer = null;
  }
  if (autoUpdateTimer) {
    clearInterval(autoUpdateTimer);
    autoUpdateTimer = null;
  }
  globalShortcut.unregisterAll();
});
