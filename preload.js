const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("desktopBoard", {
  loadState: () => ipcRenderer.invoke("state:load"),
  saveState: (state) => ipcRenderer.invoke("state:save", state),
  getAppConfig: () => ipcRenderer.invoke("app-config:get"),
  updateAppConfig: (partial) => ipcRenderer.invoke("app-config:update", partial),
  pickStorageDirectory: () => ipcRenderer.invoke("storage:pick-directory"),
  setStorageDirectory: (directoryPath, state) => ipcRenderer.invoke("storage:set-directory", directoryPath, state),
  openStorageDirectory: () => ipcRenderer.invoke("storage:open-directory"),
  exportBoardArchive: (state) => ipcRenderer.invoke("archive:export", state),
  importBoardArchive: () => ipcRenderer.invoke("archive:import"),
  openLogsDirectory: () => ipcRenderer.invoke("logs:open-directory"),
  logEvent: (payload) => ipcRenderer.invoke("log:event", payload),
  pickMedia: (kind, options) => ipcRenderer.invoke("media:pick", kind, options),
  pickFile: (options) => ipcRenderer.invoke("file:pick", options),
  importAsset: (input) => ipcRenderer.invoke("asset:import", input),
  openExternal: (url) => ipcRenderer.invoke("external:open", url),
  openFilePath: (filePath) => ipcRenderer.invoke("file:open", filePath),
  revealFilePath: (filePath) => ipcRenderer.invoke("file:reveal", filePath),
  readFilePreview: (filePath, extension, maxChars) => ipcRenderer.invoke("file:preview", filePath, extension, maxChars),
  updateHotkeys: (settings) => ipcRenderer.invoke("hotkeys:update", settings),
  getSystemTheme: () => ipcRenderer.invoke("theme:get"),
  getUpdateState: () => ipcRenderer.invoke("updates:get-state"),
  checkForUpdates: () => ipcRenderer.invoke("updates:check"),
  installAppUpdate: () => ipcRenderer.invoke("updates:install"),
  hideWindow: () => ipcRenderer.invoke("window:hide"),
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
  platform: process.platform
});
