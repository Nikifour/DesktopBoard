const { app, BrowserWindow, globalShortcut, ipcMain, screen, dialog, nativeTheme, systemPreferences, shell } = require("electron");
const crypto = require("crypto");
const fs = require("fs/promises");
const path = require("path");
const { autoUpdater } = require("electron-updater");
const mammoth = require("mammoth");
const XLSX = require("xlsx");
const JSZip = require("jszip");
const { pathToFileURL, fileURLToPath } = require("url");

let mainWindow;
let appConfig = {
  storagePath: "",
  diagnosticsEnabled: true
};
let logWriteQueue = Promise.resolve();
let lastKnownState = null;
let autoUpdateTimer = null;
let autoUpdaterInitialized = false;
let autoUpdateState = null;

const appId = "com.desktopboard.app";
const stateSchemaVersion = 4;
const boardArchiveVersion = 1;
const boardArchiveStateEntry = "board-state.json";
const boardArchiveMetaEntry = "desktop-board-export.json";
const mediaKinds = new Set(["image", "video", "audio"]);
const storedAssetKinds = new Set(["image", "video", "audio", "file"]);
const sessionId = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
const autoUpdateInitialDelayMs = 15000;
const autoUpdateIntervalMs = 6 * 60 * 60 * 1000;

const defaultHotkeys = {
  toggleHotkey: "CommandOrControl+Alt+B",
  lockHotkey: "CommandOrControl+Alt+L"
};

const defaultAppConfig = {
  storagePath: "",
  diagnosticsEnabled: true
};

function normalizeStoragePath(value) {
  if (typeof value !== "string" || !value.trim()) {
    return "";
  }
  return path.resolve(value.trim());
}

function normalizeAppConfig(config = {}) {
  return {
    ...defaultAppConfig,
    ...config,
    storagePath: normalizeStoragePath(config.storagePath),
    diagnosticsEnabled: config.diagnosticsEnabled !== false
  };
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

function getStatePath(storageRoot = null) {
  return path.join(getStorageRoot(storageRoot), "board-state.json");
}

function getAssetsPath(storageRoot = null) {
  return path.join(getStorageRoot(storageRoot), "assets");
}

function getLogsPath(storageRoot = null) {
  return path.join(getStorageRoot(storageRoot), "logs");
}

function getAbsoluteAssetPath(assetRelativePath, storageRoot = null) {
  return path.join(getStorageRoot(storageRoot), assetRelativePath);
}

function getStorageInfo(storageRoot = null) {
  const root = getStorageRoot(storageRoot);
  return {
    root,
    statePath: getStatePath(root),
    assetsPath: getAssetsPath(root),
    logsPath: getLogsPath(root),
    isDefault: !normalizeStoragePath(storageRoot ?? appConfig.storagePath)
  };
}

function getAppConfigForRenderer() {
  return {
    ...appConfig,
    storageInfo: getStorageInfo()
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

async function resolveAutoUpdateSupport() {
  if (process.platform !== "win32") {
    return { supported: false, reason: "platform" };
  }

  if (!app.isPackaged) {
    return { supported: false, reason: "unpacked" };
  }

  if (isPortableBuild()) {
    return { supported: false, reason: "portable" };
  }

  const configPath = path.join(process.resourcesPath, "app-update.yml");
  if (!await pathExists(configPath)) {
    return { supported: false, reason: "missing-config" };
  }

  return { supported: true, reason: null };
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
    error: null,
    ...overrides
  };
}

function sendAutoUpdateState() {
  if (mainWindow && !mainWindow.isDestroyed()) {
    mainWindow.webContents.send("updates:state", getAutoUpdateStateForRenderer());
  }
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
  const filePath = getAppConfigPath();
  await ensureDirectory(path.dirname(filePath));
  await fs.writeFile(filePath, JSON.stringify(appConfig, null, 2), "utf8");
  return getAppConfigForRenderer();
}

async function updateAppConfig(partial = {}) {
  const nextConfig = await writeAppConfig({
    ...appConfig,
    ...partial
  });
  await logEvent("info", "config", "Updated app config", {
    storagePath: nextConfig.storagePath || "",
    diagnosticsEnabled: nextConfig.diagnosticsEnabled
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

async function writeRawState(state, storageRoot = null) {
  const filePath = getStatePath(storageRoot);
  await ensureDirectory(path.dirname(filePath));
  await fs.writeFile(filePath, JSON.stringify(state, null, 2), "utf8");
}

async function importAssetFromPath(filePath, options = {}, storageRoot = null) {
  const { kind, originalName, assetId } = options;
  if (!isStoredAssetKind(kind)) {
    throw new Error(`Unsupported asset kind: ${kind}`);
  }

  const sourcePath = extractLocalPath(filePath);
  if (!sourcePath) {
    throw new Error(`Unsupported asset path: ${filePath}`);
  }

  const finalAssetId = assetId || `asset-${crypto.randomUUID()}`;
  const extension = getAssetExtension(sourcePath, originalName, kind);
  const fileName = `${finalAssetId}${extension}`;
  const assetRelativePath = `assets/${fileName}`;
  const absolutePath = getAbsoluteAssetPath(assetRelativePath, storageRoot);

  await ensureDirectory(getAssetsPath(storageRoot));

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

async function hydrateCardAsset(card, storageRoot = null) {
  if (!isStoredAssetKind(card?.kind)) {
    return { card, changed: false };
  }

  if (typeof card.assetRelativePath === "string" && card.assetRelativePath) {
    const absolutePath = getAbsoluteAssetPath(card.assetRelativePath, storageRoot);
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
      assetId: card.assetId
    }, storageRoot);
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

async function hydrateStateAssets(state, storageRoot = null) {
  const cards = Array.isArray(state?.cards) ? state.cards : [];
  let changed = Number(state?.schemaVersion) !== stateSchemaVersion;
  const hydratedCards = await Promise.all(cards.map(async (card) => {
    const result = await hydrateCardAsset(card, storageRoot);
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

async function prepareCardForStorage(card, storageRoot = null) {
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
            assetId: next.assetId
          }, storageRoot))
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
    const targetAbsolutePath = getAbsoluteAssetPath(next.assetRelativePath, storageRoot);

    if (sourcePath && path.resolve(sourcePath) !== path.resolve(targetAbsolutePath)) {
      await ensureDirectory(path.dirname(targetAbsolutePath));
      await fs.copyFile(sourcePath, targetAbsolutePath);
    }

    delete next.src;
    delete next.path;
  }

  return next;
}

async function prepareStateForStorage(state, storageRoot = null) {
  const cards = Array.isArray(state?.cards) ? state.cards : [];
  return {
    ...state,
    schemaVersion: stateSchemaVersion,
    cards: await Promise.all(cards.map((card) => prepareCardForStorage(card, storageRoot)))
  };
}

async function readState(storageRoot = null) {
  try {
    const raw = await fs.readFile(getStatePath(storageRoot), "utf8");
    const parsed = JSON.parse(raw);
    const hydrated = await hydrateStateAssets(parsed, storageRoot);
    if (hydrated.changed) {
      await writeRawState(await prepareStateForStorage(hydrated.state, storageRoot), storageRoot);
    }
    lastKnownState = hydrated.state;
    return hydrated.state;
  } catch (error) {
    if (error.code !== "ENOENT") {
      console.error("Failed to read board state:", error);
      await logError("state.read", error, {}, storageRoot);
    }
    lastKnownState = null;
    return null;
  }
}

async function writeState(state, storageRoot = null) {
  await writeRawState(await prepareStateForStorage(state, storageRoot), storageRoot);
  lastKnownState = state;
  return true;
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
    autoUpdater.quitAndInstall(false, true);
    return true;
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
    error: null
  });
  void logEvent("info", "updates.check", "Checking for updates", { source });

  try {
    await autoUpdater.checkForUpdates();
  } catch (error) {
    console.error("Failed to check for updates:", error);
    await logError("updates.check", error, { source });
    setAutoUpdateState({
      checking: false,
      phase: "error",
      error: serializeError(error),
      lastCheckedAt: new Date().toISOString()
    });
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

  if (!support.supported || autoUpdaterInitialized) {
    return;
  }

  autoUpdaterInitialized = true;
  autoUpdater.autoDownload = true;
  autoUpdater.autoInstallOnAppQuit = false;

  autoUpdater.on("checking-for-update", () => {
    setAutoUpdateState({
      checking: true,
      phase: "checking",
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
    void logError("updates.error", error);
    setAutoUpdateState({
      checking: false,
      phase: "error",
      error: serializeError(error),
      lastCheckedAt: new Date().toISOString()
    });
  });

  scheduleAutoUpdateChecks();
}

function installDownloadedUpdate() {
  if (autoUpdateState?.phase !== "downloaded") {
    return false;
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
      if (mainWindow) {
        mainWindow.webContents.send("board:toggle-lock");
      }
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

  if (targetRoot === currentRoot && normalizedDirectoryPath === appConfig.storagePath) {
    return {
      appConfig: getAppConfigForRenderer(),
      state: currentState,
      loadedExistingState: await pathExists(getStatePath(targetRoot))
    };
  }

  await ensureDirectory(targetRoot);

  const targetStatePath = getStatePath(targetRoot);
  const targetHasExistingState = await pathExists(targetStatePath);

  if (targetHasExistingState) {
    await writeAppConfig({
      ...appConfig,
      storagePath: normalizedDirectoryPath
    });
    const loadedState = await readState(targetRoot);
    await logEvent("info", "storage.switch", "Switched to existing board storage", {
      root: targetRoot
    });
    return {
      appConfig: getAppConfigForRenderer(),
      state: loadedState,
      loadedExistingState: true
    };
  }

  const stateToPersist = currentState || await readState(currentRoot);
  if (stateToPersist) {
    await writeRawState(await prepareStateForStorage(stateToPersist, targetRoot), targetRoot);
  }

  await writeAppConfig({
    ...appConfig,
    storagePath: normalizedDirectoryPath
  });
  await logEvent("info", "storage.switch", "Switched storage and migrated current board", {
    root: targetRoot
  });

  return {
    appConfig: getAppConfigForRenderer(),
    state: stateToPersist,
    loadedExistingState: false
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

  const sourceState = currentState || lastKnownState || await readState();
  if (!sourceState) {
    throw new Error("No board state to export.");
  }

  const preparedState = await prepareStateForStorage(sourceState);
  const referencedAssetPaths = collectReferencedAssetPaths(preparedState);
  const zip = new JSZip();
  const missingAssets = [];
  let exportedAssetCount = 0;

  zip.file(boardArchiveStateEntry, JSON.stringify(preparedState, null, 2));

  for (const assetRelativePath of referencedAssetPaths) {
    const absolutePath = getAbsoluteAssetPath(assetRelativePath);
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

async function extractArchiveAssets(zip, tempRoot, allowedAssetPaths) {
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

    const targetPath = resolveBoardRelativePath(tempRoot, normalizedPath);
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
  const tempRoot = await fs.mkdtemp(path.join(app.getPath("temp"), "desktop-board-import-"));

  try {
    const archiveBuffer = await fs.readFile(filePath);
    const zip = await JSZip.loadAsync(archiveBuffer);
    const stateEntry = zip.file(boardArchiveStateEntry);

    if (!stateEntry) {
      throw new Error(`Archive is missing ${boardArchiveStateEntry}`);
    }

    const parsedState = JSON.parse(await stateEntry.async("string"));
    const preparedState = await prepareStateForStorage(parsedState);
    const referencedAssetPaths = collectReferencedAssetPaths(preparedState);
    const referencedAssetSet = new Set(referencedAssetPaths);
    const extractedAssetPaths = await extractArchiveAssets(zip, tempRoot, referencedAssetSet);
    const tempAssetsPath = getAssetsPath(tempRoot);

    await ensureDirectory(targetRoot);
    await ensureDirectory(getAssetsPath(targetRoot));

    for (const assetRelativePath of referencedAssetPaths) {
      const targetAssetPath = getAbsoluteAssetPath(assetRelativePath, targetRoot);
      if (await pathExists(targetAssetPath)) {
        await fs.rm(targetAssetPath, { force: true });
      }
    }

    if (await pathExists(tempAssetsPath)) {
      await fs.cp(tempAssetsPath, getAssetsPath(targetRoot), { recursive: true, force: true });
    }

    await writeRawState(preparedState, targetRoot);
    const loadedState = await readState(targetRoot);

    await logEvent("info", "archive.import", "Imported board archive", {
      filePath,
      targetRoot,
      cardCount: Array.isArray(preparedState.cards) ? preparedState.cards.length : 0,
      referencedAssetCount: referencedAssetPaths.length,
      importedAssetCount: extractedAssetPaths.length,
      missingAssetCount: Math.max(0, referencedAssetPaths.length - extractedAssetPaths.length)
    });

    return {
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

function createWindow() {
  const { workArea } = screen.getPrimaryDisplay();

  mainWindow = new BrowserWindow({
    x: workArea.x,
    y: workArea.y,
    width: workArea.width,
    height: workArea.height,
    minWidth: 960,
    minHeight: 640,
    frame: false,
    transparent: false,
    resizable: true,
    maximizable: true,
    autoHideMenuBar: true,
    backgroundColor: "#f4f5f0",
    icon: path.join(__dirname, "src", "assets", "app-icon.ico"),
    title: "Desktop Board",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      webviewTag: true
    }
  });

  mainWindow.loadFile(path.join(__dirname, "src", "index.html"));
  mainWindow.maximize();
  mainWindow.on("closed", () => {
    if (mainWindow && mainWindow.isDestroyed()) {
      mainWindow = null;
    }
  });
  mainWindow.webContents.once("did-finish-load", () => {
    sendAutoUpdateState();
    if (mainWindow && !mainWindow.isDestroyed()) {
      mainWindow.webContents.send("theme:updated", getSystemTheme());
    }
  });
}

function toggleWindow() {
  if (!mainWindow) {
    return;
  }

  if (mainWindow.isVisible()) {
    mainWindow.hide();
    return;
  }

  mainWindow.show();
  mainWindow.focus();
}

process.on("uncaughtException", (error) => {
  console.error("Uncaught exception:", error);
  void logError("process.uncaughtException", error, { fatal: true });
});

process.on("unhandledRejection", (reason) => {
  console.error("Unhandled rejection:", reason);
  void logError("process.unhandledRejection", reason instanceof Error ? reason : new Error(String(reason)), { fatal: true });
});

app.whenReady().then(async () => {
  if (process.platform === "win32") {
    app.setAppUserModelId(appId);
  }
  nativeTheme.themeSource = "system";
  await readAppConfig();

  ipcMain.handle("state:load", () => readState());
  ipcMain.handle("state:save", (_event, state) => writeState(state));
  ipcMain.handle("app-config:get", () => getAppConfigForRenderer());
  ipcMain.handle("app-config:update", (_event, partial) => updateAppConfig(partial || {}));
  ipcMain.handle("storage:pick-directory", () => pickStorageDirectory());
  ipcMain.handle("storage:set-directory", (_event, directoryPath, state) => setStorageDirectory(String(directoryPath || ""), state || null));
  ipcMain.handle("storage:open-directory", () => openCurrentStorageDirectory());
  ipcMain.handle("archive:export", (_event, state) => exportBoardArchive(state || null));
  ipcMain.handle("archive:import", () => importBoardArchive());
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
  ipcMain.handle("theme:get", getSystemTheme);
  ipcMain.handle("updates:get-state", () => getAutoUpdateStateForRenderer());
  ipcMain.handle("updates:check", () => checkForAppUpdates("manual"));
  ipcMain.handle("updates:install", () => installDownloadedUpdate());
  ipcMain.handle("window:hide", () => {
    if (mainWindow) {
      mainWindow.hide();
    }
  });

  createWindow();

  const state = await readState();
  registerHotkeys(state?.settings);
  await initializeAutoUpdater();

  nativeTheme.on("updated", () => {
    if (mainWindow) {
      mainWindow.webContents.send("theme:updated", getSystemTheme());
    }
  });

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
}).catch((error) => {
  console.error("Failed during app startup:", error);
  void logError("app.startup", error, { fatal: true });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("will-quit", () => {
  if (autoUpdateTimer) {
    clearInterval(autoUpdateTimer);
    autoUpdateTimer = null;
  }
  globalShortcut.unregisterAll();
});
