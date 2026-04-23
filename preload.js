const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("desktopBoard", {
  loadState: () => ipcRenderer.invoke("state:load"),
  saveState: (state) => ipcRenderer.invoke("state:save", state),
  getAppConfig: () => ipcRenderer.invoke("app-config:get"),
  updateAppConfig: (partial) => ipcRenderer.invoke("app-config:update", partial),
  listBoards: (currentState) => ipcRenderer.invoke("boards:list", currentState),
  createBoard: (name, currentState) => ipcRenderer.invoke("boards:create", name, currentState),
  renameBoard: (boardId, name, currentState) => ipcRenderer.invoke("boards:rename", boardId, name, currentState),
  switchBoard: (boardId, currentState) => ipcRenderer.invoke("boards:switch", boardId, currentState),
  deleteBoard: (boardId, currentState) => ipcRenderer.invoke("boards:delete", boardId, currentState),
  pickStorageDirectory: () => ipcRenderer.invoke("storage:pick-directory"),
  setStorageDirectory: (directoryPath, state) => ipcRenderer.invoke("storage:set-directory", directoryPath, state),
  openStorageDirectory: () => ipcRenderer.invoke("storage:open-directory"),
  exportBoardArchive: (state) => ipcRenderer.invoke("archive:export", state),
  importBoardArchive: () => ipcRenderer.invoke("archive:import"),
  analyzeAssets: (state) => ipcRenderer.invoke("assets:analyze", state),
  cleanupAssets: (state) => ipcRenderer.invoke("assets:cleanup", state),
  openLogsDirectory: () => ipcRenderer.invoke("logs:open-directory"),
  logEvent: (payload) => ipcRenderer.invoke("log:event", payload),
  pickMedia: (kind, options) => ipcRenderer.invoke("media:pick", kind, options),
  pickFile: (options) => ipcRenderer.invoke("file:pick", options),
  importAsset: (input) => ipcRenderer.invoke("asset:import", input),
  openExternal: (url) => ipcRenderer.invoke("external:open", url),
  openFilePath: (filePath) => ipcRenderer.invoke("file:open", filePath),
  revealFilePath: (filePath) => ipcRenderer.invoke("file:reveal", filePath),
  readFilePreview: (filePath, extension, maxChars) => ipcRenderer.invoke("file:preview", filePath, extension, maxChars),
  showNotification: (payload) => ipcRenderer.invoke("notifications:show", payload),
  dismissNotificationsForCard: (cardId) => ipcRenderer.invoke("notifications:dismiss-for-card", cardId),
  updateHotkeys: (settings) => ipcRenderer.invoke("hotkeys:update", settings),
  getSystemTheme: () => ipcRenderer.invoke("theme:get"),
  getUpdateState: () => ipcRenderer.invoke("updates:get-state"),
  checkForUpdates: () => ipcRenderer.invoke("updates:check"),
  installAppUpdate: () => ipcRenderer.invoke("updates:install"),
  getWindowModeState: () => ipcRenderer.invoke("window-mode:get-state"),
  setWindowMode: (mode) => ipcRenderer.invoke("window-mode:set", mode),
  hideWindow: () => ipcRenderer.invoke("window:hide"),
  onStateChanged: (callback) => {
    const listener = (_event, nextState) => callback(nextState);
    ipcRenderer.on("state:changed", listener);
    return () => ipcRenderer.removeListener("state:changed", listener);
  },
  onToggleLock: (callback) => {
    ipcRenderer.on("board:toggle-lock", callback);
  },
  onSystemThemeUpdate: (callback) => {
    ipcRenderer.on("theme:updated", (_event, theme) => callback(theme));
  },
  onUpdateState: (callback) => {
    const listener = (_event, nextState) => callback(nextState);
    ipcRenderer.on("updates:state", listener);
    return () => ipcRenderer.removeListener("updates:state", listener);
  },
  onWindowModeState: (callback) => {
    const listener = (_event, nextState) => callback(nextState);
    ipcRenderer.on("window-mode:state", listener);
    return () => ipcRenderer.removeListener("window-mode:state", listener);
  },
  onNotificationEvent: (callback) => {
    const listener = (_event, payload) => callback(payload);
    ipcRenderer.on("notifications:event", listener);
    return () => ipcRenderer.removeListener("notifications:event", listener);
  },
  platform: process.platform
});
