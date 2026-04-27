const board = document.getElementById("board");
const workspace = document.getElementById("workspace");
const urlParams = new URLSearchParams(window.location.search);
const isOverlayWindow = urlParams.get("role") === "overlay";
const brandMark = document.querySelector(".brand-mark");
const toolbarBoardSelect = document.getElementById("toolbarBoardSelect");
const toolbarWindowModeSelect = document.getElementById("toolbarWindowModeSelect");
const modeLabel = document.getElementById("modeLabel");
const lockButton = document.getElementById("lockButton");
const hideButton = document.getElementById("hideButton");
const addNoteButton = document.getElementById("addNoteButton");
const addCommentButton = document.getElementById("addCommentButton");
const addCodeButton = document.getElementById("addCodeButton");
const addTableButton = document.getElementById("addTableButton");
const addCalculatorButton = document.getElementById("addCalculatorButton");
const addTasksButton = document.getElementById("addTasksButton");
const addScheduleButton = document.getElementById("addScheduleButton");
const addBookmarkButton = document.getElementById("addBookmarkButton");
const addProgressButton = document.getElementById("addProgressButton");
const addTimerButton = document.getElementById("addTimerButton");
const addReminderButton = document.getElementById("addReminderButton");
const addImageButton = document.getElementById("addImageButton");
const addVideoButton = document.getElementById("addVideoButton");
const addAudioButton = document.getElementById("addAudioButton");
const addFileButton = document.getElementById("addFileButton");
const addWebButton = document.getElementById("addWebButton");
const addConnectionButton = document.getElementById("addConnectionButton");
const addGroupButton = document.getElementById("addGroupButton");
const searchButton = document.getElementById("searchButton");
const settingsButton = document.getElementById("settingsButton");
const zoomLabel = document.getElementById("zoomLabel");
const contextMenu = document.getElementById("contextMenu");
const selectionBox = document.getElementById("selectionBox");
const modeEditButton = document.getElementById("modeEditButton");
const settingsModal = document.getElementById("settingsModal");
const closeSettingsButton = document.getElementById("closeSettingsButton");
const saveSettingsButton = document.getElementById("saveSettingsButton");
const urlModal = document.getElementById("urlModal");
const urlModalTitle = document.getElementById("urlModalTitle");
const closeUrlButton = document.getElementById("closeUrlButton");
const cancelUrlButton = document.getElementById("cancelUrlButton");
const saveUrlButton = document.getElementById("saveUrlButton");
const urlInput = document.getElementById("urlInput");
const urlStatus = document.getElementById("urlStatus");
const searchModal = document.getElementById("searchModal");
const searchTitle = document.getElementById("searchTitle");
const closeSearchButton = document.getElementById("closeSearchButton");
const cancelSearchButton = document.getElementById("cancelSearchButton");
const searchQueryLabel = document.getElementById("searchQueryLabel");
const searchQueryRow = searchQueryLabel?.closest(".settings-row") || null;
const searchInput = document.getElementById("searchInput");
const searchHelp = document.getElementById("searchHelp");
const searchResults = document.getElementById("searchResults");
const searchStatus = document.getElementById("searchStatus");
const metaModal = document.getElementById("metaModal");
const metaModalTitle = document.getElementById("metaModalTitle");
const closeMetaButton = document.getElementById("closeMetaButton");
const cancelMetaButton = document.getElementById("cancelMetaButton");
const saveMetaButton = document.getElementById("saveMetaButton");
const metaTagsLabel = document.getElementById("metaTagsLabel");
const metaTagsHelp = document.getElementById("metaTagsHelp");
const metaTagsRow = metaTagsLabel?.closest(".settings-row") || null;
const metaReferencesLabel = document.getElementById("metaReferencesLabel");
const addReferenceButton = document.getElementById("addReferenceButton");
const metaReferencesList = document.getElementById("metaReferencesList");
const metaBacklinksLabel = document.getElementById("metaBacklinksLabel");
const metaBacklinksList = document.getElementById("metaBacklinksList");
const metaLinkLabel = document.getElementById("metaLinkLabel");
const metaLinkInput = document.getElementById("metaLinkInput");
const copyMetaLinkButton = document.getElementById("copyMetaLinkButton");
const commentHistoryModal = document.getElementById("commentHistoryModal");
const commentHistoryTitle = document.getElementById("commentHistoryTitle");
const closeCommentHistoryButton = document.getElementById("closeCommentHistoryButton");
const closeCommentHistoryFooterButton = document.getElementById("closeCommentHistoryFooterButton");
const commentHistoryMeta = document.getElementById("commentHistoryMeta");
const commentHistoryList = document.getElementById("commentHistoryList");
const themeModeInput = document.getElementById("themeModeInput");
const backgroundColorInput = document.getElementById("backgroundColorInput");
const backgroundOpacityInput = document.getElementById("backgroundOpacityInput");
const backgroundOpacityValue = document.getElementById("backgroundOpacityValue");
const noteHeaderColorInput = document.getElementById("noteHeaderColorInput");
const noteBodyColorInput = document.getElementById("noteBodyColorInput");
const commentHeaderColorInput = document.getElementById("commentHeaderColorInput");
const commentBodyColorInput = document.getElementById("commentBodyColorInput");
const codeHeaderColorInput = document.getElementById("codeHeaderColorInput");
const codeBodyColorInput = document.getElementById("codeBodyColorInput");
const tableHeaderColorInput = document.getElementById("tableHeaderColorInput");
const tableBodyColorInput = document.getElementById("tableBodyColorInput");
const calculatorHeaderColorInput = document.getElementById("calculatorHeaderColorInput");
const calculatorBodyColorInput = document.getElementById("calculatorBodyColorInput");
const tasksHeaderColorInput = document.getElementById("tasksHeaderColorInput");
const tasksBodyColorInput = document.getElementById("tasksBodyColorInput");
const scheduleHeaderColorInput = document.getElementById("scheduleHeaderColorInput");
const scheduleBodyColorInput = document.getElementById("scheduleBodyColorInput");
const bookmarkHeaderColorInput = document.getElementById("bookmarkHeaderColorInput");
const bookmarkBodyColorInput = document.getElementById("bookmarkBodyColorInput");
const progressHeaderColorInput = document.getElementById("progressHeaderColorInput");
const progressBodyColorInput = document.getElementById("progressBodyColorInput");
const timerHeaderColorInput = document.getElementById("timerHeaderColorInput");
const timerBodyColorInput = document.getElementById("timerBodyColorInput");
const reminderHeaderColorInput = document.getElementById("reminderHeaderColorInput");
const reminderBodyColorInput = document.getElementById("reminderBodyColorInput");
const imageHeaderColorInput = document.getElementById("imageHeaderColorInput");
const imageBodyColorInput = document.getElementById("imageBodyColorInput");
const videoHeaderColorInput = document.getElementById("videoHeaderColorInput");
const videoBodyColorInput = document.getElementById("videoBodyColorInput");
const audioHeaderColorInput = document.getElementById("audioHeaderColorInput");
const audioBodyColorInput = document.getElementById("audioBodyColorInput");
const fileHeaderColorInput = document.getElementById("fileHeaderColorInput");
const fileBodyColorInput = document.getElementById("fileBodyColorInput");
const webHeaderColorInput = document.getElementById("webHeaderColorInput");
const webBodyColorInput = document.getElementById("webBodyColorInput");
const groupHeaderColorInput = document.getElementById("groupHeaderColorInput");
const groupBodyColorInput = document.getElementById("groupBodyColorInput");
const colorInputRefs = {
  note: { header: noteHeaderColorInput, body: noteBodyColorInput },
  comment: { header: commentHeaderColorInput, body: commentBodyColorInput },
  code: { header: codeHeaderColorInput, body: codeBodyColorInput },
  table: { header: tableHeaderColorInput, body: tableBodyColorInput },
  calculator: { header: calculatorHeaderColorInput, body: calculatorBodyColorInput },
  tasks: { header: tasksHeaderColorInput, body: tasksBodyColorInput },
  schedule: { header: scheduleHeaderColorInput, body: scheduleBodyColorInput },
  bookmark: { header: bookmarkHeaderColorInput, body: bookmarkBodyColorInput },
  progress: { header: progressHeaderColorInput, body: progressBodyColorInput },
  timer: { header: timerHeaderColorInput, body: timerBodyColorInput },
  reminder: { header: reminderHeaderColorInput, body: reminderBodyColorInput },
  image: { header: imageHeaderColorInput, body: imageBodyColorInput },
  video: { header: videoHeaderColorInput, body: videoBodyColorInput },
  audio: { header: audioHeaderColorInput, body: audioBodyColorInput },
  file: { header: fileHeaderColorInput, body: fileBodyColorInput },
  web: { header: webHeaderColorInput, body: webBodyColorInput },
  group: { header: groupHeaderColorInput, body: groupBodyColorInput }
};
const quickCreateDetails = document.getElementById("quickCreateDetails");
const quickCreateTitle = document.getElementById("quickCreateTitle");
const quickCreateKindsGrid = document.getElementById("quickCreateKindsGrid");
const quickCreateHelp = document.getElementById("quickCreateHelp");
const toolbarCreateDetails = document.getElementById("toolbarCreateDetails");
const toolbarCreateTitle = document.getElementById("toolbarCreateTitle");
const toolbarCreateKindsGrid = document.getElementById("toolbarCreateKindsGrid");
const toolbarCreateHelp = document.getElementById("toolbarCreateHelp");
const richTextFontFamilyInput = document.getElementById("richTextFontFamilyInput");
const richTextFontSizeInput = document.getElementById("richTextFontSizeInput");
const colorSchemePresetGrid = document.getElementById("colorSchemePresetGrid");
const colorSchemePresetsLabel = document.getElementById("colorSchemePresetsLabel");
const colorSchemeHelp = document.getElementById("colorSchemeHelp");
const saveColorSchemeButton = document.getElementById("saveColorSchemeButton");
const exportColorSchemeButton = document.getElementById("exportColorSchemeButton");
const importThemeButton = document.getElementById("importThemeButton");
const importThemePackageButton = document.getElementById("importThemePackageButton");
const snapToGridInput = document.getElementById("snapToGridInput");
const toggleHotkeyInput = document.getElementById("toggleHotkeyInput");
const lockHotkeyInput = document.getElementById("lockHotkeyInput");
const settingsStatus = document.getElementById("settingsStatus");
const languageModeInput = document.getElementById("languageModeInput");
const timeFormatInput = document.getElementById("timeFormatInput");
const connectionColorInput = document.getElementById("connectionColorInput");
const storagePathInput = document.getElementById("storagePathInput");
const pickStoragePathButton = document.getElementById("pickStoragePathButton");
const openStoragePathButton = document.getElementById("openStoragePathButton");
const boardsLabel = document.getElementById("boardsLabel");
const boardNameFieldLabel = document.getElementById("boardNameFieldLabel");
const boardNameInput = document.getElementById("boardNameInput");
const boardsList = document.getElementById("boardsList");
const boardsHelp = document.getElementById("boardsHelp");
const boardsStatus = document.getElementById("boardsStatus");
const createBoardButton = document.getElementById("createBoardButton");
const switchBoardButton = document.getElementById("switchBoardButton");
const renameBoardButton = document.getElementById("renameBoardButton");
const deleteBoardButton = document.getElementById("deleteBoardButton");
const autoStartWithWindowsInput = document.getElementById("autoStartWithWindowsInput");
const autoStartHelp = document.getElementById("autoStartHelp");
const multiMonitorModeInput = document.getElementById("multiMonitorModeInput");
const multiMonitorDisplays = document.getElementById("multiMonitorDisplays");
const windowModeInput = document.getElementById("windowModeInput");
const wallpaperModeHelp = document.getElementById("wallpaperModeHelp");
const multiMonitorHelp = document.getElementById("multiMonitorHelp");
const diagnosticsEnabledInput = document.getElementById("diagnosticsEnabledInput");
const historyEnabledInput = document.getElementById("historyEnabledInput");
const openLogsButton = document.getElementById("openLogsButton");
const exportBoardButton = document.getElementById("exportBoardButton");
const importBoardButton = document.getElementById("importBoardButton");
const assetManagerLabel = document.getElementById("assetManagerLabel");
const assetManagerHelp = document.getElementById("assetManagerHelp");
const autoManageAssetsOnLaunchInput = document.getElementById("autoManageAssetsOnLaunchInput");
const autoManageAssetsOnLaunchHelp = document.getElementById("autoManageAssetsOnLaunchHelp");
const assetManagerSummary = document.getElementById("assetManagerSummary");
const assetManagerIssues = document.getElementById("assetManagerIssues");
const assetManagerStatus = document.getElementById("assetManagerStatus");
const analyzeAssetsButton = document.getElementById("analyzeAssetsButton");
const cleanupAssetsButton = document.getElementById("cleanupAssetsButton");
const updatesLabel = document.getElementById("updatesLabel");
const updatesHelp = document.getElementById("updatesHelp");
const updatesVersion = document.getElementById("updatesVersion");
const updatesStatus = document.getElementById("updatesStatus");
const checkUpdatesButton = document.getElementById("checkUpdatesButton");
const installUpdateButton = document.getElementById("installUpdateButton");
const searchScopeRow = document.createElement("label");
searchScopeRow.className = "settings-row search-scope-row";
const searchScopeLabel = document.createElement("span");
searchScopeLabel.id = "searchScopeLabel";
const searchScopeInput = document.createElement("select");
searchScopeInput.id = "searchScopeInput";
[
  { value: "all", text: "Everywhere" },
  { value: "title", text: "Title" },
  { value: "tag", text: "Tag" }
].forEach(({ value, text }) => {
  const option = document.createElement("option");
  option.value = value;
  option.textContent = text;
  searchScopeInput.appendChild(option);
});
searchScopeRow.append(searchScopeLabel, searchScopeInput);
searchQueryRow?.after(searchScopeRow);

const minCardWidth = 220;
const minCardHeight = 150;
const minZoom = 0.25;
const maxZoom = 3;
const gridSize = 24;
const groupHeaderHeight = 42;
const commentAttachGap = 10;
const commentAttachThreshold = 42;
const commentHistoryLimit = 80;
const cardHistoryLimit = 120;
const groupHistoryLimit = 240;
const stateSchemaVersion = 9;
const defaultBoardId = "main";
const defaultBoardName = navigator.language?.toLowerCase().startsWith("ru") ? "Основная доска" : "Main board";
const minTimerDurationMinutes = 1;
const defaultTimerDurationMinutes = 25;
const maxTimerDurationMinutes = 10080;
const defaultReminderRepeatIntervalMinutes = 5;
const minReminderRepeatIntervalMinutes = 1;
const maxReminderRepeatIntervalMinutes = 1440;
const timerTickIntervalMs = 1000;
const brandLogoSrc = "./assets/app-logo.png";
const brandLogoAnimationIntervalMs = 30000;
const brandLogoAnimationLoops = 3;
const brandLogoAnimations = [
  { src: "./assets/logo-animations/01_pulse_transparent.gif", loopMs: 1920 },
  { src: "./assets/logo-animations/02_spin_transparent.gif", loopMs: 1200 },
  { src: "./assets/logo-animations/03_float_transparent.gif", loopMs: 1920 },
  { src: "./assets/logo-animations/04_shine_transparent.gif", loopMs: 2110 }
];
const richTextFontFamilies = [
  "Segoe UI",
  "Arial",
  "Calibri",
  "Verdana",
  "Tahoma",
  "Georgia",
  "Times New Roman",
  "Consolas",
  "Cascadia Code",
  "Courier New"
];
const richTextFontSizes = [12, 14, 16, 18, 20, 24, 28, 32, 40, 48];
const defaultRichTextFontFamily = "Segoe UI";
const defaultRichTextFontSize = 14;
const historyLimit = 100;
const svgNamespace = "http://www.w3.org/2000/svg";
const connectionCanvasOffset = 100000;
const connectionCanvasSize = 200000;
const connectionRouteObstaclePadding = 12;
const connectionRouteLaneOffset = 12;
const connectionRouteSearchPadding = gridSize * 8;
const connectionRouteBoundsPadding = gridSize * 3;
const connectionRouteTurnPenalty = gridSize * 1.5;
const cardTypeRegistry = [
  {
    kind: "note",
    labelKey: "note",
    createLabelKey: "addNote",
    colorKind: "note",
    quickCreateGroup: "text",
    createMode: "card",
    defaultSize: { width: 300, height: 220 },
    toolbarButton: addNoteButton,
    icon: '<svg viewBox="0 0 24 24"><path d="M6 4h9l3 3v13H6z"/><path d="M15 4v4h4"/><path d="M9 12h6M9 16h5"/></svg>'
  },
  {
    kind: "comment",
    labelKey: "comment",
    createLabelKey: "addComment",
    colorKind: "comment",
    quickCreateGroup: "text",
    createMode: "card",
    defaultSize: { width: 260, height: 150 },
    toolbarButton: addCommentButton,
    icon: '<svg viewBox="0 0 24 24"><path d="M5 6h14v10H9l-4 4z"/><path d="M8 10h8M8 13h5"/></svg>'
  },
  {
    kind: "code",
    labelKey: "code",
    createLabelKey: "addCode",
    colorKind: "code",
    quickCreateGroup: "text",
    createMode: "card",
    defaultSize: { width: 420, height: 280 },
    toolbarButton: addCodeButton,
    icon: '<svg viewBox="0 0 24 24"><path d="M9 7l-4 5 4 5"/><path d="M15 7l4 5-4 5"/><path d="M13 5l-2 14"/></svg>'
  },
  {
    kind: "table",
    labelKey: "table",
    createLabelKey: "addTable",
    colorKind: "table",
    quickCreateGroup: "text",
    createMode: "card",
    defaultSize: { width: 440, height: 300 },
    toolbarButton: addTableButton,
    icon: '<svg viewBox="0 0 24 24"><path d="M4 5h16v14H4z"/><path d="M4 10h16M9 5v14M15 5v14"/></svg>'
  },
  {
    kind: "calculator",
    labelKey: "calculator",
    createLabelKey: "addCalculator",
    colorKind: "calculator",
    quickCreateGroup: "text",
    createMode: "card",
    defaultSize: { width: 320, height: 420 },
    toolbarButton: addCalculatorButton,
    icon: '<svg viewBox="0 0 24 24"><path d="M7 4h10v16H7z"/><path d="M9 8h6"/><path d="M9 12h2M13 12h2"/><path d="M9 16h2M13 16h2"/></svg>'
  },
  {
    kind: "tasks",
    labelKey: "tasks",
    createLabelKey: "addTasks",
    colorKind: "tasks",
    quickCreateGroup: "text",
    createMode: "card",
    defaultSize: { width: 300, height: 240 },
    toolbarButton: addTasksButton,
    icon: '<svg viewBox="0 0 24 24"><path d="M5 7l2 2 4-4"/><path d="M13 7h6"/><path d="M5 15l2 2 4-4"/><path d="M13 15h6"/></svg>'
  },
  {
    kind: "schedule",
    labelKey: "schedule",
    createLabelKey: "addSchedule",
    colorKind: "schedule",
    quickCreateGroup: "text",
    createMode: "card",
    defaultSize: { width: 330, height: 220 },
    toolbarButton: addScheduleButton,
    icon: '<svg viewBox="0 0 24 24"><path d="M5 5h14v15H5z"/><path d="M8 3v4M16 3v4M5 9h14"/><path d="M8 13h2M12 13h2M16 13h2"/></svg>'
  },
  {
    kind: "bookmark",
    labelKey: "bookmark",
    createLabelKey: "addBookmark",
    colorKind: "bookmark",
    quickCreateGroup: "text",
    createMode: "card",
    defaultSize: { width: 360, height: 260 },
    toolbarButton: addBookmarkButton,
    icon: '<svg viewBox="0 0 24 24"><path d="M8 7h8"/><path d="M8 12h8"/><path d="M8 17h5"/><path d="M6 4h12v16l-3-2-3 2-3-2-3 2z"/></svg>'
  },
  {
    kind: "progress",
    labelKey: "progress",
    createLabelKey: "addProgress",
    colorKind: "progress",
    quickCreateGroup: "text",
    createMode: "card",
    defaultSize: { width: 320, height: 240 },
    toolbarButton: addProgressButton,
    icon: '<svg viewBox="0 0 24 24"><path d="M5 19h14"/><path d="M7 16V9"/><path d="M12 16V5"/><path d="M17 16v-3"/></svg>'
  },
  {
    kind: "timer",
    labelKey: "timer",
    createLabelKey: "addTimer",
    colorKind: "timer",
    quickCreateGroup: "text",
    createMode: "card",
    defaultSize: { width: 320, height: 220 },
    toolbarButton: addTimerButton,
    icon: '<svg viewBox="0 0 24 24"><circle cx="12" cy="13" r="7"/><path d="M12 13l3-2"/><path d="M9 3h6"/><path d="M12 6V4"/></svg>'
  },
  {
    kind: "reminder",
    labelKey: "reminder",
    createLabelKey: "addReminder",
    colorKind: "reminder",
    quickCreateGroup: "text",
    createMode: "card",
    defaultSize: { width: 360, height: 280 },
    toolbarButton: addReminderButton,
    icon: '<svg viewBox="0 0 24 24"><path d="M12 3a4 4 0 0 1 4 4v2.2c0 1.3.4 2.6 1.2 3.7l1.1 1.6H5.7l1.1-1.6A6.4 6.4 0 0 0 8 9.2V7a4 4 0 0 1 4-4"/><path d="M10 18a2 2 0 0 0 4 0"/></svg>'
  },
  {
    kind: "image",
    labelKey: "image",
    createLabelKey: "addImage",
    colorKind: "image",
    quickCreateGroup: "media",
    createMode: "media",
    defaultSize: { width: 360, height: 260 },
    toolbarButton: addImageButton,
    icon: '<svg viewBox="0 0 24 24"><path d="M5 5h14v14H5z"/><path d="M8 15l3-3 3 3 2-2 3 4"/><circle cx="9" cy="9" r="1.5"/></svg>'
  },
  {
    kind: "video",
    labelKey: "video",
    createLabelKey: "addVideo",
    colorKind: "video",
    quickCreateGroup: "media",
    createMode: "media",
    defaultSize: { width: 520, height: 300 },
    toolbarButton: addVideoButton,
    icon: '<svg viewBox="0 0 24 24"><path d="M5 7h11v10H5z"/><path d="M16 10l4-2v8l-4-2z"/></svg>'
  },
  {
    kind: "audio",
    labelKey: "audio",
    createLabelKey: "addAudio",
    colorKind: "audio",
    quickCreateGroup: "media",
    createMode: "media",
    defaultSize: { width: 420, height: 220 },
    toolbarButton: addAudioButton,
    icon: '<svg viewBox="0 0 24 24"><path d="M6 14a3 3 0 0 0 6 0V6a2 2 0 1 1 4 0v6"/><circle cx="12" cy="14" r="3"/><path d="M18 10v6"/><path d="M20 11.5v3"/><path d="M16 11.5v3"/></svg>'
  },
  {
    kind: "file",
    labelKey: "file",
    createLabelKey: "addFile",
    colorKind: "file",
    quickCreateGroup: "media",
    createMode: "file",
    defaultSize: { width: 380, height: 280 },
    toolbarButton: addFileButton,
    icon: '<svg viewBox="0 0 24 24"><path d="M6 4h9l3 3v13H6z"/><path d="M15 4v4h4"/><path d="M9 13h6M9 17h5"/></svg>'
  },
  {
    kind: "web",
    labelKey: "web",
    createLabelKey: "addWeb",
    colorKind: "web",
    quickCreateGroup: "media",
    createMode: "web",
    defaultSize: { width: 560, height: 360 },
    toolbarButton: addWebButton,
    icon: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M4 12h16"/><path d="M12 4c2 2.2 3 4.8 3 8s-1 5.8-3 8"/><path d="M12 4c-2 2.2-3 4.8-3 8s1 5.8 3 8"/></svg>'
  },
  {
    kind: "group",
    labelKey: "group",
    createLabelKey: "addGroup",
    colorKind: "group",
    quickCreateGroup: "board",
    createMode: "group",
    defaultSize: { width: 620, height: 360 },
    toolbarButton: addGroupButton,
    icon: '<svg viewBox="0 0 24 24"><path d="M5 6h14v12H5z" stroke-dasharray="3 2"/><path d="M8 9h4v3H8zM12 12h4v3h-4z"/></svg>'
  }
];
const cardTypeMap = new Map(cardTypeRegistry.map((definition) => [definition.kind, definition]));
const quickCreateGroupOrder = ["text", "media", "board"];
const defaultQuickCreateKinds = cardTypeRegistry.map((definition) => definition.kind);
const defaultToolbarCreateKinds = cardTypeRegistry
  .filter((definition) => Boolean(definition.toolbarButton))
  .map((definition) => definition.kind);

const builtInColorSchemes = [
  {
    id: "classic",
    nameKey: "colorSchemeClassic",
    backgroundColor: "#f4f5f0",
    backgroundOpacity: 0,
    connectionColor: "#171916",
    colors: {
      note: { header: "#f2c94c", body: "#fff8d7" },
      comment: { header: "#8a6f2a", body: "#fff1c2" },
      code: { header: "#4c6ef5", body: "#e9efff" },
      table: { header: "#5b7bd5", body: "#eef3ff" },
      calculator: { header: "#d66f45", body: "#fde8de" },
      tasks: { header: "#2f7d57", body: "#e7f3ec" },
      schedule: { header: "#3a8f9f", body: "#e6f6f8" },
      bookmark: { header: "#f2c94c", body: "#fff8d7" },
      progress: { header: "#2f7d57", body: "#e7f3ec" },
      timer: { header: "#3a8f9f", body: "#e6f6f8" },
      reminder: { header: "#d96b5f", body: "#fdebe7" },
      image: { header: "#7453a6", body: "#f0ebf8" },
      video: { header: "#7453a6", body: "#f0ebf8" },
      audio: { header: "#7453a6", body: "#f0ebf8" },
      file: { header: "#7453a6", body: "#f0ebf8" },
      web: { header: "#7453a6", body: "#f0ebf8" },
      group: { header: "#7aa884", body: "#d4e6da" }
    }
  },
  {
    id: "graphite",
    nameKey: "colorSchemeGraphite",
    backgroundColor: "#2f3331",
    backgroundOpacity: 0,
    connectionColor: "#f4f7f2",
    colors: {
      note: { header: "#d6b23c", body: "#f7efc9" },
      comment: { header: "#7a6730", body: "#f3e9bf" },
      code: { header: "#6072d6", body: "#e5e9fb" },
      table: { header: "#536fb5", body: "#e7edf9" },
      calculator: { header: "#c56f4d", body: "#f7e2d7" },
      tasks: { header: "#31805f", body: "#dcefe6" },
      schedule: { header: "#428f9b", body: "#dff1f3" },
      bookmark: { header: "#d6b23c", body: "#f7efc9" },
      progress: { header: "#31805f", body: "#dcefe6" },
      timer: { header: "#428f9b", body: "#dff1f3" },
      reminder: { header: "#bd655b", body: "#f5dfdb" },
      image: { header: "#7555a5", body: "#ebe5f4" },
      video: { header: "#7555a5", body: "#ebe5f4" },
      audio: { header: "#7555a5", body: "#ebe5f4" },
      file: { header: "#7555a5", body: "#ebe5f4" },
      web: { header: "#7555a5", body: "#ebe5f4" },
      group: { header: "#6d9a79", body: "#ccded1" }
    }
  },
  {
    id: "studio",
    nameKey: "colorSchemeStudio",
    backgroundColor: "#e8edf1",
    backgroundOpacity: 0,
    connectionColor: "#263133",
    colors: {
      note: { header: "#e2b94b", body: "#fff4ce" },
      comment: { header: "#8c7240", body: "#fff0c8" },
      code: { header: "#3e70b8", body: "#e3edf8" },
      table: { header: "#4f85a6", body: "#e4f0f4" },
      calculator: { header: "#b9674c", body: "#f5e1d7" },
      tasks: { header: "#3f8b66", body: "#e2f1e8" },
      schedule: { header: "#2894a3", body: "#ddf3f5" },
      bookmark: { header: "#e2b94b", body: "#fff4ce" },
      progress: { header: "#3f8b66", body: "#e2f1e8" },
      timer: { header: "#2894a3", body: "#ddf3f5" },
      reminder: { header: "#c25c65", body: "#f7e0e3" },
      image: { header: "#6b62a8", body: "#eceafd" },
      video: { header: "#6b62a8", body: "#eceafd" },
      audio: { header: "#6b62a8", body: "#eceafd" },
      file: { header: "#6b62a8", body: "#eceafd" },
      web: { header: "#6b62a8", body: "#eceafd" },
      group: { header: "#6ba17d", body: "#d6e8dd" }
    }
  }
];

const defaultVisualTheme = {
  version: 1,
  name: "Default",
  tokens: {
    cardRadius: 8,
    panelRadius: 8,
    buttonRadius: 6,
    cardBorderWidth: 1,
    cardHeaderHeight: 28,
    groupHeaderHeight: 42,
    iconScale: 1,
    shadow: "medium"
  },
  connections: {
    strokeWidth: 3,
    selectedStrokeWidth: 3.5,
    draftStrokeWidth: 2,
    outlineWidth: 6,
    waypointRadius: 5,
    markerScale: 1,
    lineStyle: "solid"
  },
  assets: {
    icons: {},
    connection: null
  }
};

const defaultSettings = {
  themeMode: "system",
  languageMode: "system",
  timeFormat: "24h",
  backgroundColor: "#f4f5f0",
  backgroundOpacity: 0,
  connectionColor: "#171916",
  richTextFontFamily: defaultRichTextFontFamily,
  richTextFontSize: defaultRichTextFontSize,
  visualTheme: clone(defaultVisualTheme),
  snapToGrid: true,
  historyEnabled: true,
  quickCreateKinds: [...defaultQuickCreateKinds],
  toolbarCreateKinds: [...defaultToolbarCreateKinds],
  colorSchemes: [],
  colors: {
    note: { header: "#f2c94c", body: "#fff8d7" },
    comment: { header: "#8a6f2a", body: "#fff1c2" },
    code: { header: "#4c6ef5", body: "#e9efff" },
    table: { header: "#5b7bd5", body: "#eef3ff" },
    calculator: { header: "#d66f45", body: "#fde8de" },
    tasks: { header: "#2f7d57", body: "#e7f3ec" },
    schedule: { header: "#3a8f9f", body: "#e6f6f8" },
    bookmark: { header: "#f2c94c", body: "#fff8d7" },
    progress: { header: "#2f7d57", body: "#e7f3ec" },
    timer: { header: "#3a8f9f", body: "#e6f6f8" },
    reminder: { header: "#d96b5f", body: "#fdebe7" },
    image: { header: "#7453a6", body: "#f0ebf8" },
    video: { header: "#7453a6", body: "#f0ebf8" },
    audio: { header: "#7453a6", body: "#f0ebf8" },
    file: { header: "#7453a6", body: "#f0ebf8" },
    web: { header: "#7453a6", body: "#f0ebf8" },
    group: { header: "#7aa884", body: "#d4e6da" }
  },
  toggleHotkey: "Ctrl+Alt+B",
  lockHotkey: "Ctrl+Alt+L"
};

const defaultViewport = {
  x: 0,
  y: 0,
  zoom: 1
};

const defaultState = {
  schemaVersion: stateSchemaVersion,
  boardId: defaultBoardId,
  boardName: defaultBoardName,
  locked: false,
  viewport: { ...defaultViewport },
  settings: clone(defaultSettings),
  audit: {
    localActor: createDefaultAuditActor()
  },
  groupHistory: [],
  connections: [],
  cards: [
    {
      id: "note-inbox",
      kind: "note",
      title: "Входящие",
      x: 34,
      y: 112,
      width: 310,
      height: 220,
      headerColor: defaultSettings.colors.note.header,
      bodyColor: defaultSettings.colors.note.body,
      text: "Быстрые мысли, ссылки, идеи. Потом разберу."
    },
    {
      id: "schedule-today",
      kind: "schedule",
      title: "Сегодня",
      x: 372,
      y: 112,
      width: 330,
      height: 260,
      headerColor: defaultSettings.colors.schedule.header,
      bodyColor: defaultSettings.colors.schedule.body,
      scheduleEntries: [
        { id: "schedule-1", time: "09:30", note: "Разобрать главное" },
        { id: "schedule-2", time: "11:00", note: "Рабочий блок" },
        { id: "schedule-3", time: "15:00", note: "Проверить прогресс" },
        { id: "schedule-4", time: "18:30", note: "Закрыть день" }
      ],
      text: "09:30 - Разобрать главное\n11:00 - Рабочий блок\n15:00 - Проверить прогресс\n18:30 - Закрыть день"
    },
    {
      id: "tasks-focus",
      kind: "tasks",
      title: "Фокус",
      x: 730,
      y: 112,
      width: 300,
      height: 245,
      headerColor: defaultSettings.colors.tasks.header,
      bodyColor: defaultSettings.colors.tasks.body,
      tasks: [
        { id: "task-1", text: "Собрать первый MVP", done: false },
        { id: "task-2", text: "Проверить поведение окна", done: false },
        { id: "task-3", text: "Выбрать режим desktop/wallpaper", done: false }
      ]
    },
    {
      id: "group-project",
      kind: "group",
      title: "Подложка проекта",
      x: 24,
      y: 92,
      width: 1040,
      height: 330,
      headerColor: defaultSettings.colors.group.header,
      bodyColor: defaultSettings.colors.group.body
    }
  ]
};

let state = clone(defaultState);
let activeAction = null;
let widgetHoverTarget = null;
let widgetInteractionState = {
  interactive: false,
  captured: false
};
let liveWebContentModeKey = "";
let nativeWebCardSyncFrame = 0;
let saveTimer = null;
let selectedIds = new Set();
let selectedConnectionId = null;
let undoStack = [];
let redoStack = [];
let lastCommittedHistorySnapshot = null;
let auditCardBaseline = new Map();
let auditGroupBaseline = new Map();
let richTextToolbar = null;
let activeRichTextEditor = null;
let activeRichTextCard = null;
let activeRichTextTarget = null;
let activeRichTextSelectionRange = null;
let pendingUrlResolver = null;
let pendingSearchResolver = null;
let connectionMode = false;
let connectionDraft = null;
let searchState = {
  mode: "navigate",
  query: "",
  scope: "all",
  titleKey: "searchTitle",
  statusKey: "searchStatus",
  helpKey: "searchHelp",
  onlyIds: null,
  excludeIds: new Set(),
  resultIds: [],
  activeIndex: 0
};
let metaEditor = {
  cardId: null,
  references: []
};
let lastConnectionClick = {
  id: null,
  time: 0
};
let currentSystemTheme = {
  accentColor: "#2f7d57",
  isDark: false
};
let appRuntimeConfigRequestVersion = 0;
let appRuntimeConfig = {
  appVersion: "",
  storagePath: "",
  diagnosticsEnabled: true,
  activeBoardId: defaultBoardId,
  autoStartEnabled: false,
  autoManageAssetsOnLaunch: true,
  wallpaperModeEnabled: true,
  wallpaperInteractionEnabled: false,
  multiMonitorEnabled: false,
  multiMonitorMode: "single",
  multiMonitorDisplayIds: [],
  windowMode: "normal",
  windowModeSupported: false,
  displayLayout: null,
  autoStart: {
    supported: false,
    reason: "unknown",
    enabled: false,
    effective: false
  },
  storageInfo: null
};
let windowModeState = {
  supported: false,
  enabled: false,
  interactionEnabled: false,
  windowRole: "window",
  configuredMode: "normal",
  currentMode: "normal",
  effectiveMode: "normal",
  multiMonitorMode: "single",
  multiWindowWorkspaceActive: false,
  attachedToWallpaper: false,
  wallpaperParentClass: "",
  wallpaperError: null,
  overlayVisible: false,
  widgetInteractive: false,
  displayLayout: null
};
const defaultAppUpdateState = {
  supported: false,
  reason: "unknown",
  phase: "disabled",
  checking: false,
  currentVersion: "",
  availableVersion: null,
  downloadedVersion: null,
  progressPercent: 0,
  lastCheckedAt: null,
  downloadUrl: null,
  releaseUrl: null,
  error: null
};
let appUpdateState = { ...defaultAppUpdateState };
let boardManagerState = {
  boards: [],
  selectedBoardId: defaultBoardId,
  loading: false
};
let assetManagerState = {
  analysis: null,
  analyzing: false,
  cleaning: false,
  statusMessage: "",
  statusTone: ""
};
let startupAssetMaintenanceStarted = false;
const imagePreviewExtensions = new Set(["png", "jpg", "jpeg", "webp", "gif", "bmp", "svg", "avif", "ico"]);
const videoPreviewExtensions = new Set(["mp4", "webm", "mov", "m4v", "ogv"]);
const audioPreviewExtensions = new Set(["mp3", "wav", "ogg", "m4a", "aac", "flac"]);
const officePreviewExtensions = new Set(["docx", "xlsx", "xls", "xlsm", "ods", "pptx"]);
const textPreviewExtensions = new Set([
  "txt", "md", "markdown", "json", "csv", "tsv", "log", "xml", "html", "htm", "css",
  "js", "cjs", "mjs", "ts", "jsx", "tsx", "yaml", "yml", "ini", "cfg", "conf",
  "ps1", "cmd", "bat", "py", "java", "c", "cpp", "h", "hpp", "rs", "go", "sql", "sh"
]);
const filePreviewCache = new Map();
const nativeWebResizeReserve = 14;
const webResizeObserver = typeof ResizeObserver === "function"
  ? new ResizeObserver((entries) => {
    entries.forEach((entry) => syncWebCardElement(entry.target.closest(".card")));
  })
  : null;
let cardIndex = new Map();
let backlinkIndex = new Map();
const quickCreateInputMap = new Map();
const toolbarCreateInputMap = new Map();
let timerTickHandle = null;
let brandLogoAnimationTimer = null;
let brandLogoResetTimer = null;
let brandLogoAnimationActive = false;
let lastBrandLogoAnimationSrc = "";
let settingsLayoutInitialized = false;
let activeSettingsSectionId = "general";

const settingsSectionDefinitions = [
  {
    id: "general",
    labelKey: "settingsSectionGeneral",
    selectors: [
      "#themeModeLabel",
      "#languageModeLabel",
      "#timeFormatLabel",
      "#boardsLabel"
    ]
  },
  {
    id: "appearance",
    labelKey: "settingsSectionAppearance",
    selectors: [
      "#backgroundColorLabel",
      "#backgroundOpacityLabel",
      "#connectionColorLabel",
      "#colorSchemeSettingsBlock",
      "#colorRulesDetails"
    ]
  },
  {
    id: "desktop",
    labelKey: "settingsSectionDesktop",
    selectors: [
      "#autoStartWithWindowsLabel",
      "#autoStartHelp",
      "#windowModeLabel",
      "#wallpaperModeHelp",
      "#multiMonitorModeLabel",
      "#multiMonitorDisplaysLabel",
      "#multiMonitorDisplaysRow",
      "#multiMonitorHelp"
    ]
  },
  {
    id: "cards",
    labelKey: "settingsSectionCards",
    selectors: [
      "#quickCreateDetails",
      "#toolbarCreateDetails",
      "#richTextFontFamilyLabel",
      "#richTextFontSizeLabel",
      "#snapToGridLabel"
    ]
  },
  {
    id: "storage",
    labelKey: "settingsSectionStorage",
    selectors: [
      "#storagePathLabel",
      "#storagePathHelp",
      "#boardArchiveLabel",
      "#assetManagerLabel"
    ]
  },
  {
    id: "diagnostics",
    labelKey: "settingsSectionDiagnostics",
    selectors: [
      "#diagnosticsEnabledLabel",
      "#historyEnabledLabel",
      "#historyEnabledHelp",
      "#logsFolderLabel"
    ]
  },
  {
    id: "hotkeys",
    labelKey: "settingsSectionHotkeys",
    selectors: [
      "#toggleHotkeyLabel",
      "#lockHotkeyLabel",
      "#settingsHelp"
    ]
  },
  {
    id: "updates",
    labelKey: "settingsSectionUpdates",
    selectors: [
      "#updatesLabel"
    ]
  }
];

const translations = {
  ru: {
    modeEdit: "Режим редактирования",
    modeView: "Режим просмотра",
    modeConnectionStart: "Выберите начало соединения",
    modeConnectionEnd: "Выберите конец соединения",
    note: "Заметка",
    code: "Code / snippet",
    table: "Таблица",
    tasks: "Задачи",
    schedule: "Расписание",
    image: "Картинка",
    video: "Видео",
    web: "URL / сайт",
    group: "Группа",
    connection: "Соединение",
    settings: "Настройки",
    lock: "Закрепить",
    edit: "Редактировать",
    hide: "Скрыть",
    addNote: "Добавить заметку",
    addCode: "Добавить код",
    addTable: "Добавить таблицу",
    addTasks: "Добавить список задач",
    addSchedule: "Добавить расписание",
    addImage: "Добавить картинку",
    addVideo: "Добавить видео",
    addWeb: "Добавить URL",
    addConnection: "Добавить соединение",
    cancelConnection: "Отменить соединение",
    addGroup: "Добавить группу",
    openSettings: "Открыть настройки",
    settingsTitle: "Настройки",
    themeMode: "Тема интерфейса",
    languageMode: "Язык интерфейса",
    backgroundColor: "Цвет фона",
    connectionColor: "Цвет соединений",
    newElementColors: "Цвета новых элементов",
    quickCreateMenu: "Быстрое создание",
    quickCreateHelp: "Выберите типы карточек, которые будут показаны в контекстном меню по правой кнопке мыши.",
    headerColor: "Хедер",
    bodyColor: "Фон",
    media: "Медиа",
    groups: "Группы",
    snapToGrid: "Притягивать к сетке",
    toggleHotkey: "Показать/скрыть",
    lockHotkey: "Закрепить/редактировать",
    hotkeyFormat: "Формат: Ctrl+Alt+B, Ctrl+Shift+Space, Alt+Q.",
    save: "Сохранить",
    cancel: "Отмена",
    add: "Добавить",
    address: "Адрес",
    closeSettings: "Закрыть настройки",
    closeUrl: "Закрыть окно URL",
    systemTheme: "Системная",
    lightTheme: "Светлая",
    darkTheme: "Темная",
    systemLanguage: "Системный",
    russian: "Русский",
    english: "English",
    createElement: "Создать элемент",
    connectFromHere: "Соединение отсюда",
    selected: "Выбрано: {count}",
    connect: "Соединить",
    connectChain: "Соединить цепочкой",
    groupSelected: "Сгруппировать",
    clearSelection: "Снять выделение",
    deleteSelected: "Удалить выбранные",
    rename: "Переименовать",
    duplicate: "Дублировать",
    editUrl: "Изменить URL",
    enableWebInteraction: "Взаимодействовать с сайтом",
    disableWebInteraction: "Вернуть управление элементом",
    resetColors: "Сбросить цвета",
    delete: "Удалить",
    genericElement: "Элемент",
    newCode: "Новый код",
    codeLanguage: "Язык",
    codeLanguagePlaceholder: "js / ts / py",
    codePlaceholder: "Вставьте код или фрагмент...",
    newTable: "Новая таблица",
    addTableRow: "Добавить строку",
    addTableColumn: "Добавить столбец",
    removeTableRow: "Удалить строку",
    removeTableColumn: "Удалить столбец",
    tableEmpty: "Добавьте первую строку в таблицу.",
    tableColumnPlaceholder: "Столбец",
    tableCellPlaceholder: "Значение",
    newList: "Новый список",
    firstTask: "Первый пункт",
    newSchedule: "Новое расписание",
    newNote: "Новая заметка",
    newGroup: "Новая группа",
    copySuffix: "копия",
    arrowKind: "Вид",
    arrowEnd: "Стрелка",
    arrowBoth: "Две стрелки",
    arrowStart: "Обратная",
    line: "Линия",
    color: "Цвет",
    addTask: "Добавить пункт",
    newTask: "Новый пункт",
    groupHint: "Элементы внутри двигаются вместе с подложкой",
    mediaAlt: "Медиа",
    urlMissing: "URL не задан",
    webShield: "Двойной щелчок: взаимодействовать с сайтом. Хедер останется доступен для перемещения.",
    urlTitle: "URL / сайт",
    editUrlTitle: "Изменить URL",
    reloadWebPage: "Обновить страницу",
    invalidUrl: "Введите корректный http/https URL.",
    settingsSaved: "Настройки сохранены.",
    settingsSavedPreview: "Настройки сохранены для preview.",
    hotkeyWarning: "Один из хоткеев не зарегистрирован. Проверь сочетание.",
    hotkeyError: "Не удалось обновить хоткеи. Проверь формат."
  },
  en: {
    modeEdit: "Edit mode",
    modeView: "View mode",
    modeConnectionStart: "Choose connection start",
    modeConnectionEnd: "Choose connection end",
    note: "Note",
    code: "Code / snippet",
    table: "Simple table",
    tasks: "Tasks",
    schedule: "Schedule",
    image: "Image",
    video: "Video",
    web: "URL / site",
    group: "Group",
    connection: "Connection",
    settings: "Settings",
    lock: "Lock",
    edit: "Edit",
    hide: "Hide",
    addNote: "Add note",
    addCode: "Add code",
    addTable: "Add table",
    addTasks: "Add task list",
    addSchedule: "Add schedule",
    addImage: "Add image",
    addVideo: "Add video",
    addWeb: "Add URL",
    addConnection: "Add connection",
    cancelConnection: "Cancel connection",
    addGroup: "Add group",
    openSettings: "Open settings",
    settingsTitle: "Settings",
    themeMode: "Interface theme",
    languageMode: "Interface language",
    backgroundColor: "Background color",
    connectionColor: "Connection color",
    newElementColors: "New element colors",
    quickCreateMenu: "Quick create",
    quickCreateHelp: "Choose which card types are shown in the right-click quick create menu.",
    headerColor: "Header",
    bodyColor: "Body",
    media: "Media",
    groups: "Groups",
    snapToGrid: "Snap to grid",
    toggleHotkey: "Show/hide",
    lockHotkey: "Lock/edit",
    hotkeyFormat: "Format: Ctrl+Alt+B, Ctrl+Shift+Space, Alt+Q.",
    save: "Save",
    cancel: "Cancel",
    add: "Add",
    address: "Address",
    closeSettings: "Close settings",
    closeUrl: "Close URL dialog",
    systemTheme: "System",
    lightTheme: "Light",
    darkTheme: "Dark",
    systemLanguage: "System",
    russian: "Russian",
    english: "English",
    createElement: "Create element",
    connectFromHere: "Connection from here",
    selected: "Selected: {count}",
    connect: "Connect",
    connectChain: "Connect chain",
    groupSelected: "Group",
    clearSelection: "Clear selection",
    deleteSelected: "Delete selected",
    rename: "Rename",
    duplicate: "Duplicate",
    editUrl: "Edit URL",
    enableWebInteraction: "Interact with site",
    disableWebInteraction: "Return element controls",
    resetColors: "Reset colors",
    delete: "Delete",
    genericElement: "Element",
    newCode: "New snippet",
    codeLanguage: "Language",
    codeLanguagePlaceholder: "js / ts / py",
    codePlaceholder: "Paste code or a snippet...",
    newTable: "New table",
    addTableRow: "Add row",
    addTableColumn: "Add column",
    removeTableRow: "Remove row",
    removeTableColumn: "Remove column",
    tableEmpty: "Add the first row to the table.",
    tableColumnPlaceholder: "Column",
    tableCellPlaceholder: "Value",
    newList: "New list",
    firstTask: "First item",
    newSchedule: "New schedule",
    newNote: "New note",
    newGroup: "New group",
    copySuffix: "copy",
    arrowKind: "Style",
    arrowEnd: "Arrow",
    arrowBoth: "Two arrows",
    arrowStart: "Reverse",
    line: "Line",
    color: "Color",
    addTask: "Add item",
    newTask: "New item",
    groupHint: "Items inside move together with the backdrop",
    mediaAlt: "Media",
    urlMissing: "URL is missing",
    webShield: "Double-click to interact with the site. The header stays available for moving.",
    urlTitle: "URL / site",
    editUrlTitle: "Edit URL",
    reloadWebPage: "Reload page",
    invalidUrl: "Enter a valid http/https URL.",
    settingsSaved: "Settings saved.",
    settingsSavedPreview: "Settings saved for preview.",
    hotkeyWarning: "One hotkey was not registered. Check the shortcut.",
    hotkeyError: "Could not update hotkeys. Check the format."
  }
};

Object.assign(translations.ru, {
  formatBold: "\u0416\u0438\u0440\u043d\u044b\u0439",
  formatItalic: "\u041a\u0443\u0440\u0441\u0438\u0432",
  formatUnderline: "\u041f\u043e\u0434\u0447\u0435\u0440\u043a\u043d\u0443\u0442\u044b\u0439",
  formatFontFamily: "\u0428\u0440\u0438\u0444\u0442",
  formatFontSize: "\u0420\u0430\u0437\u043c\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430",
  richTextFontFamily: "\u0428\u0440\u0438\u0444\u0442 \u0442\u0435\u043a\u0441\u0442\u0430",
  richTextFontSize: "\u0420\u0430\u0437\u043c\u0435\u0440 \u0442\u0435\u043a\u0441\u0442\u0430",
  formatTextColor: "\u0426\u0432\u0435\u0442 \u0442\u0435\u043a\u0441\u0442\u0430",
  formatClear: "\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c \u0444\u043e\u0440\u043c\u0430\u0442",
  richTextContent: "\u0422\u0435\u043a\u0441\u0442 \u0438 \u0444\u043e\u0440\u043c\u0430\u0442"
});

Object.assign(translations.en, {
  formatBold: "Bold",
  formatItalic: "Italic",
  formatUnderline: "Underline",
  formatFontFamily: "Font",
  formatFontSize: "Font size",
  richTextFontFamily: "Text font",
  richTextFontSize: "Text size",
  formatTextColor: "Text color",
  formatClear: "Clear formatting",
  richTextContent: "Text and formatting"
});

Object.assign(translations.ru, {
  autoStartWithWindows: "\u0410\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a \u0441 Windows",
  autoManageAssetsOnLaunch: "\u0410\u0432\u0442\u043e\u0430\u043d\u0430\u043b\u0438\u0437 \u0438 \u043e\u0447\u0438\u0441\u0442\u043a\u0430 \u0444\u0430\u0439\u043b\u043e\u0432 \u043f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435",
  autoManageAssetsOnLaunchHelp: "\u041f\u0440\u0438 \u0441\u0442\u0430\u0440\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442 \u0444\u0430\u0439\u043b\u044b \u0434\u043e\u0441\u043a\u0438, \u043f\u043e\u043c\u0435\u0442\u0438\u0442 \u0431\u0438\u0442\u044b\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u0438 \u0443\u0434\u0430\u043b\u0438\u0442 \u043d\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b.",
  autoStartHelpSupported: "\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u043e\u0441\u043b\u0435 \u0432\u0445\u043e\u0434\u0430 \u0432 Windows.",
  autoStartHelpUnpacked: "\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0432 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u043e\u0439 \u0438\u043b\u0438 portable-\u0441\u0431\u043e\u0440\u043a\u0435 \u043d\u0430 Windows. Dev-\u0440\u0435\u0436\u0438\u043c \u0432 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f.",
  autoStartHelpUnsupported: "\u0410\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 Windows.",
  appConfigSaveError: "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f.",
  wallpaperModeHelp: "Wallpaper view \u0434\u0435\u043b\u0430\u0435\u0442 \u043e\u043a\u043d\u043e click-through. \u0414\u043b\u044f \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0432\u0435\u0440\u043d\u0438\u0442\u0435\u0441\u044c \u0432 \u043e\u0431\u044b\u0447\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c \u0447\u0435\u0440\u0435\u0437 \u0442\u0440\u0435\u0439 \u0438\u043b\u0438 \u0445\u043e\u0442\u043a\u0435\u0439.",
  wallpaperModeUnsupported: "Wallpaper mode \u043f\u043e\u043a\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 Windows.",
  windowModeLabel: "\u0420\u0435\u0436\u0438\u043c \u043e\u043a\u043d\u0430",
  windowModeNormal: "\u041e\u0431\u044b\u0447\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c",
  windowModeMultiWindow: "\u041e\u043a\u043d\u043e \u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u043c \u044d\u043a\u0440\u0430\u043d\u0435",
  windowModeWallpaperView: "Wallpaper view",
  windowModeWidgetMode: "Widget mode",
  wallpaperModeAttachedStatus: "\u041f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u043e \u043a \u0441\u043b\u043e\u044e рабочего \u0441\u0442\u043e\u043b\u0430: {parent}.",
  wallpaperModePendingStatus: "\u041e\u0436\u0438\u0434\u0430\u043d\u0438\u0435 \u043f\u0440\u0438\u0432\u044f\u0437\u043a\u0438 \u043a desktop layer.",
  wallpaperModeErrorStatus: "\u041e\u0448\u0438\u0431\u043a\u0430 wallpaper mode: {message}"
});

Object.assign(translations.en, {
  autoStartWithWindows: "Start with Windows",
  autoManageAssetsOnLaunch: "Auto-analyze and clean files on launch",
  autoManageAssetsOnLaunchHelp: "When the app starts it will inspect board files, flag broken references, and remove unused stored files.",
  autoStartHelpSupported: "The app will start automatically after you sign in to Windows.",
  autoStartHelpUnpacked: "Available in installed or portable Windows builds. Dev mode is not added to startup.",
  autoStartHelpUnsupported: "Auto-start is available only on Windows.",
  appConfigSaveError: "Could not save app settings.",
  wallpaperModeHelp: "Wallpaper view makes the window click-through. Return to Normal mode through the tray menu or hotkey when you need to edit the board.",
  wallpaperModeUnsupported: "Wallpaper mode is currently available only on Windows.",
  windowModeLabel: "Window mode",
  windowModeNormal: "Normal",
  windowModeMultiWindow: "Window on each screen",
  windowModeWallpaperView: "Wallpaper view",
  windowModeWidgetMode: "Widget mode",
  wallpaperModeAttachedStatus: "Attached to desktop layer: {parent}.",
  wallpaperModePendingStatus: "Waiting for wallpaper attach.",
  wallpaperModeErrorStatus: "Wallpaper mode error: {message}"
});

Object.assign(translations.ru, {
  backgroundOpacity: "Прозрачность доски"
});

Object.assign(translations.en, {
  backgroundOpacity: "Board transparency"
});

Object.assign(translations.ru, {
  multiMonitorEnabled: "Бесшовная доска на всех экранах",
  multiMonitorMode: "Режим нескольких экранов",
  multiMonitorModeSingle: "Одно окно",
  multiMonitorModeSeamless: "Бесшовная доска",
  multiMonitorModeWorkspace: "Окно на каждом экране",
  multiMonitorDisplays: "Экраны",
  multiMonitorDisplayPrimary: "основной",
  multiMonitorDisplaySize: "{width} x {height}",
  multiMonitorHelp: "Выбрано экранов: {selected} из {count}.",
  multiMonitorSingleHelp: "Используется одно обычное окно на основном экране.",
  multiMonitorSingleDisplayHelp: "Сейчас подключен один экран. Дополнительные режимы станут полезны после подключения второго.",
  multiMonitorNoDisplays: "Экраны не найдены.",
  settingsSections: "Разделы настроек",
  settingsSectionGeneral: "Основное",
  settingsSectionAppearance: "Внешний вид",
  settingsSectionDesktop: "Рабочий стол",
  settingsSectionCards: "Карточки",
  settingsSectionStorage: "Файлы и хранение",
  settingsSectionDiagnostics: "Логи",
  settingsSectionHotkeys: "Горячие клавиши",
  settingsSectionUpdates: "Обновления",
  toolbarCreateMenu: "Верхняя панель",
  toolbarCreateHelp: "Выберите типы карточек, которые будут видны в верхней панели быстрого создания.",
  colorSchemePresets: "Цветовые схемы",
  colorSchemeHelp: "Пресеты меняют фон, цвет соединений и цвета новых элементов.",
  saveColorScheme: "Сохранить тему",
  exportColorScheme: "Экспортировать тему",
  importTheme: "Импортировать тему",
  importThemePackage: "Импорт пакета",
  colorSchemeClassic: "Классическая",
  colorSchemeGraphite: "Графит",
  colorSchemeStudio: "Студия",
  colorSchemeApplied: "Цветовая схема применена. Нажмите «Сохранить», чтобы закрепить изменения.",
  colorSchemeSaved: "Тема сохранена.",
  colorSchemeExported: "Тема экспортирована.",
  themeImported: "Тема импортирована.",
  themePackageImported: "Пакет темы импортирован. Ассетов: {count}.",
  themeImportFailed: "Не удалось импортировать тему. Применена стандартная тема.",
  colorSchemeNamePrompt: "Название цветовой схемы",
  customColorSchemeName: "Моя схема",
  exportedColorSchemeName: "Экспортированная схема"
});

Object.assign(translations.en, {
  multiMonitorEnabled: "Seamless board across all screens",
  multiMonitorMode: "Multi-screen mode",
  multiMonitorModeSingle: "Single window",
  multiMonitorModeSeamless: "Seamless board",
  multiMonitorModeWorkspace: "Window on each screen",
  multiMonitorDisplays: "Screens",
  multiMonitorDisplayPrimary: "primary",
  multiMonitorDisplaySize: "{width} x {height}",
  multiMonitorHelp: "Selected screens: {selected} of {count}.",
  multiMonitorSingleHelp: "Using one regular window on the primary screen.",
  multiMonitorSingleDisplayHelp: "One screen is connected now. Additional modes become useful after connecting another screen.",
  multiMonitorNoDisplays: "No screens found.",
  settingsSections: "Settings sections",
  settingsSectionGeneral: "General",
  settingsSectionAppearance: "Appearance",
  settingsSectionDesktop: "Desktop",
  settingsSectionCards: "Cards",
  settingsSectionStorage: "Files and storage",
  settingsSectionDiagnostics: "Logs",
  settingsSectionHotkeys: "Hotkeys",
  settingsSectionUpdates: "Updates",
  toolbarCreateMenu: "Top toolbar",
  toolbarCreateHelp: "Choose which card types are visible in the top quick-create toolbar.",
  colorSchemePresets: "Color schemes",
  colorSchemeHelp: "Presets change the board background, connection color, and new element colors.",
  saveColorScheme: "Save theme",
  exportColorScheme: "Export theme",
  importTheme: "Import theme",
  importThemePackage: "Import package",
  colorSchemeClassic: "Classic",
  colorSchemeGraphite: "Graphite",
  colorSchemeStudio: "Studio",
  colorSchemeApplied: "Color scheme applied. Click Save to keep the changes.",
  colorSchemeSaved: "Theme saved.",
  colorSchemeExported: "Theme exported.",
  themeImported: "Theme imported.",
  themePackageImported: "Theme package imported. Assets: {count}.",
  themeImportFailed: "Could not import the theme. Default theme was applied.",
  colorSchemeNamePrompt: "Color scheme name",
  customColorSchemeName: "My scheme",
  exportedColorSchemeName: "Exported scheme"
});

Object.assign(translations.ru, {
  calculator: "\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440",
  addCalculator: "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440",
  newCalculator: "\u041d\u043e\u0432\u044b\u0439 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440",
  calculatorOperation: "\u041e\u043f\u0435\u0440\u0430\u0446\u0438\u044f",
  calculatorOperationAdd: "\u0421\u043b\u043e\u0436\u0435\u043d\u0438\u0435",
  calculatorOperationSubtract: "\u0412\u044b\u0447\u0438\u0442\u0430\u043d\u0438\u0435",
  calculatorOperationMultiply: "\u0423\u043c\u043d\u043e\u0436\u0435\u043d\u0438\u0435",
  calculatorOperationDivide: "\u0414\u0435\u043b\u0435\u043d\u0438\u0435",
  calculatorInputPlaceholder: "\u0427\u0438\u0441\u043b\u043e",
  addCalculatorInput: "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432\u0445\u043e\u0434",
  removeCalculatorInput: "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u0445\u043e\u0434",
  calculatorResult: "\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442",
  calculatorResultEmpty: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043c\u0438\u043d\u0438\u043c\u0443\u043c \u0434\u0432\u0430 \u0447\u0438\u0441\u043b\u0430",
  calculatorDivisionByZero: "\u0414\u0435\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u043d\u043e\u043b\u044c",
  calculatorHistory: "\u0418\u0441\u0442\u043e\u0440\u0438\u044f",
  calculatorHistoryEmpty: "\u0412\u044b\u0447\u0438\u0441\u043b\u0435\u043d\u0438\u0439 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442.",
  clearCalculatorHistory: "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c",
  calculatorClear: "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c",
  calculatorClearEntry: "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0432\u0432\u043e\u0434",
  calculatorBackspace: "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0441\u0438\u043c\u0432\u043e\u043b",
  calculatorEquals: "\u0420\u0430\u0432\u043d\u043e",
  calculatorInvalidInput: "\u041d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0439 \u0432\u0432\u043e\u0434"
});

Object.assign(translations.en, {
  calculator: "Calculator",
  addCalculator: "Add calculator",
  newCalculator: "New calculator",
  calculatorOperation: "Operation",
  calculatorOperationAdd: "Add",
  calculatorOperationSubtract: "Subtract",
  calculatorOperationMultiply: "Multiply",
  calculatorOperationDivide: "Divide",
  calculatorInputPlaceholder: "Number",
  addCalculatorInput: "Add input",
  removeCalculatorInput: "Remove input",
  calculatorResult: "Result",
  calculatorResultEmpty: "Enter at least two numbers",
  calculatorDivisionByZero: "Division by zero",
  calculatorHistory: "History",
  calculatorHistoryEmpty: "No calculations yet.",
  clearCalculatorHistory: "Clear",
  calculatorClear: "Clear",
  calculatorClearEntry: "Clear entry",
  calculatorBackspace: "Backspace",
  calculatorEquals: "Equals",
  calculatorInvalidInput: "Invalid input"
});

Object.assign(translations.ru, {
  connectionPathStyle: "\u0422\u0440\u0430\u0435\u043a\u0442\u043e\u0440\u0438\u044f",
  connectionPathSegmented: "\u041b\u043e\u043c\u0430\u043d\u0430\u044f",
  connectionPathSmooth: "\u041f\u043b\u0430\u0432\u043d\u0430\u044f",
  connectionStartCap: "\u041d\u0430\u0447\u0430\u043b\u043e",
  connectionEndCap: "\u041a\u043e\u043d\u0435\u0446",
  connectionCapNone: "\u0411\u0435\u0437 \u043c\u0430\u0440\u043a\u0435\u0440\u0430",
  connectionCapArrow: "\u0421\u0442\u0440\u0435\u043b\u043a\u0430",
  connectionCapDot: "\u0422\u043e\u0447\u043a\u0430",
  connectionAutoPath: "Автомаршрут"
});

Object.assign(translations.en, {
  connectionPathStyle: "Path",
  connectionPathSegmented: "Segmented",
  connectionPathSmooth: "Smooth",
  connectionStartCap: "Start",
  connectionEndCap: "End",
  connectionCapNone: "No cap",
  connectionCapArrow: "Arrow",
  connectionCapDot: "Dot",
  connectionAutoPath: "Auto route"
});

Object.assign(translations.ru, {
  search: "Поиск",
  searchTitle: "Поиск",
  searchQuery: "Запрос",
  searchHelp: "Ctrl+K, введите название, тег или ID элемента.",
  searchPickTitle: "Выбрать элемент",
  searchPickHelp: "Выберите элемент для прямой ссылки.",
  searchPlaceholder: "Название, тег или ID",
  searchResults: "Найдено: {count}",
  searchNoResults: "Ничего не найдено.",
  tagsAndLinks: "Теги и ссылки",
  tags: "Теги",
  tagsHelp: "Через запятую: идеи, work, важное",
  directLinks: "Прямые ссылки",
  backlinks: "Обратные ссылки",
  addReference: "Добавить ссылку",
  noReferences: "Прямых ссылок пока нет.",
  noBacklinks: "На этот элемент пока никто не ссылается.",
  elementLink: "Ссылка на элемент",
  copyLink: "Копировать ссылку",
  copyLinkDone: "Ссылка скопирована.",
  editMeta: "Теги и ссылки...",
  showBacklinks: "Показать обратные ссылки",
  goTo: "Перейти",
  remove: "Убрать"
});

Object.assign(translations.en, {
  search: "Search",
  searchTitle: "Search",
  searchQuery: "Query",
  searchHelp: "Ctrl+K, type a title, tag, or element ID.",
  searchPickTitle: "Choose element",
  searchPickHelp: "Choose an element for a direct link.",
  searchPlaceholder: "Title, tag, or ID",
  searchResults: "Found: {count}",
  searchNoResults: "Nothing found.",
  tagsAndLinks: "Tags and links",
  tags: "Tags",
  tagsHelp: "Comma-separated: ideas, work, important",
  directLinks: "Direct links",
  backlinks: "Backlinks",
  addReference: "Add link",
  noReferences: "No direct links yet.",
  noBacklinks: "Nothing links to this element yet.",
  elementLink: "Element link",
  copyLink: "Copy link",
  copyLinkDone: "Link copied.",
  editMeta: "Tags and links...",
  showBacklinks: "Show backlinks",
  goTo: "Go to",
  remove: "Remove"
});

Object.assign(translations.ru, {
  linksPanelTitle: "\u0421\u0441\u044b\u043b\u043a\u0438",
  tagInputPlaceholder: "\u041d\u043e\u0432\u044b\u0439 \u0442\u0435\u0433",
  tagInputHelp: "Enter - \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u0435\u0433",
  noTags: "\u0422\u0435\u0433\u043e\u0432 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442.",
  editLinks: "\u0421\u0441\u044b\u043b\u043a\u0438...",
  bringForward: "\u041f\u043e\u0434\u043d\u044f\u0442\u044c \u0432\u044b\u0448\u0435",
  sendBackward: "\u041e\u043f\u0443\u0441\u0442\u0438\u0442\u044c \u043d\u0438\u0436\u0435",
  removeTagLabel: "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u0435\u0433 {tag}"
});

Object.assign(translations.en, {
  linksPanelTitle: "Links",
  tagInputPlaceholder: "New tag",
  tagInputHelp: "Press Enter to add a tag",
  noTags: "No tags yet.",
  editLinks: "Links...",
  bringForward: "Bring forward",
  sendBackward: "Send backward",
  removeTagLabel: "Remove tag {tag}"
});

Object.assign(translations.ru, {
  comment: "\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",
  addComment: "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",
  newComment: "\u041d\u043e\u0432\u044b\u0439 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0439",
  commentPlaceholder: "\u0422\u0435\u043a\u0441\u0442 \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f...",
  attachCommentNearest: "\u041f\u0440\u0438\u043a\u0440\u0435\u043f\u0438\u0442\u044c \u043a \u0431\u043b\u0438\u0436\u0430\u0439\u0448\u0435\u043c\u0443",
  detachComment: "\u041e\u0442\u043a\u0440\u0435\u043f\u0438\u0442\u044c",
  commentHistory: "\u0418\u0441\u0442\u043e\u0440\u0438\u044f",
  commentHistoryTitle: "\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u044f",
  commentCreatedAt: "\u0421\u043e\u0437\u0434\u0430\u043d",
  commentUpdatedAt: "\u0418\u0437\u043c\u0435\u043d\u0435\u043d",
  commentHistoryBefore: "\u0411\u044b\u043b\u043e",
  commentHistoryAfter: "\u0421\u0442\u0430\u043b\u043e",
  commentHistoryEmpty: "\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442.",
  commentEmptyText: "\u041f\u0443\u0441\u0442\u043e",
  close: "\u0417\u0430\u043a\u0440\u044b\u0442\u044c",
  closeCommentHistory: "\u0417\u0430\u043a\u0440\u044b\u0442\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u044e",
  unknown: "\u041d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u043e"
});

Object.assign(translations.en, {
  comment: "Comment",
  addComment: "Add comment",
  newComment: "New comment",
  commentPlaceholder: "Comment text...",
  attachCommentNearest: "Attach to nearest",
  detachComment: "Detach",
  commentHistory: "History",
  commentHistoryTitle: "Comment history",
  commentCreatedAt: "Created",
  commentUpdatedAt: "Updated",
  commentHistoryBefore: "Before",
  commentHistoryAfter: "After",
  commentHistoryEmpty: "No edits yet.",
  commentEmptyText: "Empty",
  close: "Close",
  closeCommentHistory: "Close history",
  unknown: "Unknown"
});

Object.assign(translations.ru, {
  historyEnabled: "\u0417\u0430\u043f\u0438\u0441\u044c \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439",
  historyEnabledHelp: "\u0414\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u0432 JSON \u0438\u0441\u0442\u043e\u0440\u0438\u044e \u043a\u0430\u0440\u0442\u043e\u0447\u0435\u043a, \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438 \u0441\u043e\u0441\u0442\u0430\u0432\u0430 \u0433\u0440\u0443\u043f\u043f. \u0415\u0441\u043b\u0438 \u0432\u044b\u043a\u043b\u044e\u0447\u0438\u0442\u044c, \u043d\u043e\u0432\u044b\u0435 \u0437\u0430\u043f\u0438\u0441\u0438 \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u043d\u0435 \u0441\u043e\u0437\u0434\u0430\u044e\u0442\u0441\u044f.",
  cardHistory: "\u0418\u0441\u0442\u043e\u0440\u0438\u044f",
  cardHistoryTitle: "\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430",
  cardCreatedAt: "\u0421\u043e\u0437\u0434\u0430\u043d",
  cardUpdatedAt: "\u0418\u0437\u043c\u0435\u043d\u0435\u043d",
  cardCreatedBy: "\u0421\u043e\u0437\u0434\u0430\u043b",
  cardUpdatedBy: "\u0418\u0437\u043c\u0435\u043d\u0438\u043b",
  historyEventCreated: "\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430",
  historyEventUpdated: "\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0435 \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430",
  historyEventGroupAdd: "\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u0433\u0440\u0443\u043f\u043f\u0443",
  historyEventGroupRemove: "\u0423\u0434\u0430\u043b\u0435\u043d \u0438\u0437 \u0433\u0440\u0443\u043f\u043f\u044b",
  historyEmpty: "\u0418\u0441\u0442\u043e\u0440\u0438\u0438 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442.",
  historyField: "\u041f\u043e\u043b\u0435",
  localUser: "\u041b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"
});

Object.assign(translations.en, {
  historyEnabled: "Change history",
  historyEnabledHelp: "Stores card, user, and group membership history in JSON. When disabled, new history entries are not created.",
  cardHistory: "History",
  cardHistoryTitle: "Element history",
  cardCreatedAt: "Created",
  cardUpdatedAt: "Updated",
  cardCreatedBy: "Created by",
  cardUpdatedBy: "Updated by",
  historyEventCreated: "Element created",
  historyEventUpdated: "Element updated",
  historyEventGroupAdd: "Added to group",
  historyEventGroupRemove: "Removed from group",
  historyEmpty: "No history yet.",
  historyField: "Field",
  localUser: "Local user"
});

Object.assign(translations.ru, {
  searchScope: "\u0418\u0441\u043a\u0430\u0442\u044c",
  searchScopeAll: "\u0412\u0435\u0437\u0434\u0435",
  searchScopeTitle: "\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",
  searchScopeTag: "\u0422\u0435\u0433"
});

Object.assign(translations.en, {
  searchScope: "Search in",
  searchScopeAll: "Everywhere",
  searchScopeTitle: "Title",
  searchScopeTag: "Tag"
});

Object.assign(translations.ru, {
  assetManager: "\u041c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0430\u0441\u0441\u0435\u0442\u043e\u0432",
  assetManagerHelp: "\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0430 \u0444\u0430\u0439\u043b\u043e\u0432 \u0432 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0435: \u0431\u0438\u0442\u044b\u0435 \u0441\u0441\u044b\u043b\u043a\u0438, \u043d\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b \u0438 \u0438\u0445 \u043e\u0447\u0438\u0441\u0442\u043a\u0430.",
  analyzeAssets: "\u0410\u043d\u0430\u043b\u0438\u0437",
  cleanupAssets: "\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043d\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u043e\u0435",
  assetScanIdle: "\u0410\u043d\u0430\u043b\u0438\u0437 \u0435\u0449\u0435 \u043d\u0435 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u043b\u0441\u044f.",
  assetScanRunning: "\u0410\u043d\u0430\u043b\u0438\u0437 \u0444\u0430\u0439\u043b\u043e\u0432...",
  assetCleanupRunning: "\u0423\u0434\u0430\u043b\u044f\u044e \u043d\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b...",
  assetCleanupDone: "\u0423\u0434\u0430\u043b\u0435\u043d\u043e {count} \u0444\u0430\u0439\u043b. \u041e\u0441\u0432\u043e\u0431\u043e\u0436\u0434\u0435\u043d\u043e {size}.",
  assetScanFailed: "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u0440\u043e\u0430\u043d\u0430\u043b\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0430\u0441\u0441\u0435\u0442\u044b.",
  assetCleanupFailed: "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043d\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b.",
  assetNoIssues: "\u0411\u0438\u0442\u044b\u0445 \u0438 \u043b\u0438\u0448\u043d\u0438\u0445 \u0444\u0430\u0439\u043b\u043e\u0432 \u043d\u0435\u0442.",
  assetBrokenGroup: "\u0411\u0438\u0442\u044b\u0435 \u0441\u0441\u044b\u043b\u043a\u0438",
  assetUnusedGroup: "\u041d\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b",
  assetSummaryStored: "\u0424\u0430\u0439\u043b\u043e\u0432",
  assetSummaryReferenced: "\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f",
  assetSummaryBroken: "\u0411\u0438\u0442\u044b\u0435",
  assetSummaryUnused: "\u041b\u0438\u0448\u043d\u0438\u0435",
  assetSummarySize: "\u041e\u0431\u044a\u0435\u043c",
  assetUsedByCards: "\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u044e\u0442 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438: {count}",
  assetPath: "\u041f\u0443\u0442\u044c",
  assetMissingPreview: "\u0424\u0430\u0439\u043b \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442",
  assetScannedAt: "\u041f\u0440\u043e\u0432\u0435\u0440\u0435\u043d\u043e: {time}"
});

Object.assign(translations.en, {
  assetManager: "Asset manager",
  assetManagerHelp: "Inspect files in the board storage, detect broken references, and remove unused assets.",
  analyzeAssets: "Analyze",
  cleanupAssets: "Clean unused",
  assetScanIdle: "Analysis has not been run yet.",
  assetScanRunning: "Analyzing files...",
  assetCleanupRunning: "Removing unused files...",
  assetCleanupDone: "Removed {count} files and freed {size}.",
  assetScanFailed: "Could not analyze assets.",
  assetCleanupFailed: "Could not clean unused files.",
  assetNoIssues: "No broken or unused files found.",
  assetBrokenGroup: "Broken references",
  assetUnusedGroup: "Unused files",
  assetSummaryStored: "Files",
  assetSummaryReferenced: "Used",
  assetSummaryBroken: "Broken",
  assetSummaryUnused: "Unused",
  assetSummarySize: "Size",
  assetUsedByCards: "Used by cards: {count}",
  assetPath: "Path",
  assetMissingPreview: "File is missing",
  assetScannedAt: "Scanned: {time}"
});

Object.assign(translations.ru, {
  bookmark: "Ссылки",
  progress: "Прогресс",
  timer: "Таймер",
  audio: "Аудио",
  file: "Файл",
  addBookmark: "Добавить список ссылок",
  addProgress: "Добавить прогресс",
  addTimer: "Добавить таймер",
  addAudio: "Добавить аудио",
  addFile: "Добавить файл",
  newBookmark: "Новые ссылки",
  newProgress: "Новый прогресс",
  newTimer: "Новый таймер",
  newFile: "Новый файл",
  addLink: "Добавить ссылку",
  bookmarkEmpty: "Добавьте одну или несколько ссылок.",
  bookmarkTitlePlaceholder: "Название",
  bookmarkUrlPlaceholder: "https://example.com",
  openExternally: "Открыть",
  progressPercent: "Готово",
  progressNotePlaceholder: "Что уже сделано, что осталось, следующий шаг...",
  timerMinutes: "Минуты",
  timerStart: "Старт",
  timerPause: "Пауза",
  timerReset: "Сброс",
  timerRunning: "Идет отсчет",
  timerPaused: "На паузе",
  timerDone: "Готово",
  openFile: "Открыть файл",
  revealFile: "Показать в папке",
  fileMissing: "Файл не найден",
  fileSize: "Размер",
  fileStoredAt: "Хранение"
});

Object.assign(translations.en, {
  bookmark: "Bookmarks",
  progress: "Progress",
  timer: "Timer",
  reminder: "Reminder",
  audio: "Audio",
  file: "File",
  addBookmark: "Add bookmark list",
  addProgress: "Add progress",
  addTimer: "Add timer",
  addReminder: "Add reminder",
  addAudio: "Add audio",
  addFile: "Add file",
  newBookmark: "New bookmarks",
  newProgress: "New progress",
  newTimer: "New timer",
  newReminder: "New reminder",
  newFile: "New file",
  addLink: "Add link",
  bookmarkEmpty: "Add one or more links.",
  bookmarkTitlePlaceholder: "Title",
  bookmarkUrlPlaceholder: "https://example.com",
  openExternally: "Open",
  progressPercent: "Complete",
  progressNotePlaceholder: "What is done, what is left, next step...",
  timerMinutes: "Minutes",
  timerStart: "Start",
  timerPause: "Pause",
  timerReset: "Reset",
  timerRunning: "Counting down",
  timerPaused: "Paused",
  timerDone: "Done",
  openFile: "Open file",
  revealFile: "Show in folder",
  fileMissing: "File not found",
  fileSize: "Size",
  fileStoredAt: "Storage"
});

Object.assign(translations.ru, {
  reminder: "Напоминание",
  addReminder: "Добавить напоминание",
  newReminder: "Новое напоминание",
  reminderDateTime: "Дата и время",
  reminderMessage: "Сообщение",
  reminderMessagePlaceholder: "Что нужно напомнить...",
  reminderNotifyToast: "Windows-уведомление",
  timerNotifyToast: "Windows-уведомление",
  reminderPlaySound: "Звуковой сигнал",
  timerPlaySound: "Звуковой сигнал",
  reminderRepeatUntilAcknowledged: "Повторять до подтверждения",
  reminderRepeatInterval: "Интервал повтора, мин",
  reminderDateMissing: "Выберите дату и время напоминания.",
  reminderScheduled: "Запланировано на {time}",
  reminderDue: "Время наступило.",
  reminderTriggered: "Уведомление отправлено: {time}",
  reminderTriggeredRepeating: "Последнее уведомление: {time}. Повтор каждые {minutes} мин.",
  reminderAcknowledged: "Подтверждено: {time}",
  reminderAcknowledge: "Получено",
  reminderResetAcknowledge: "Сбросить подтверждение",
  reminderNotificationBody: "Напоминание на {time}",
  timerFinishedNotificationBody: "Таймер \"{title}\" завершен.",
  notificationActionOpen: "Открыть",
  notificationActionAcknowledge: "Получено"
});

Object.assign(translations.en, {
  reminder: "Reminder",
  addReminder: "Add reminder",
  newReminder: "New reminder",
  reminderDateTime: "Date and time",
  reminderMessage: "Message",
  reminderMessagePlaceholder: "What should this remind you about?",
  reminderNotifyToast: "Windows notification",
  timerNotifyToast: "Windows notification",
  reminderPlaySound: "Sound",
  timerPlaySound: "Sound",
  reminderRepeatUntilAcknowledged: "Repeat until acknowledged",
  reminderRepeatInterval: "Repeat every, min",
  reminderDateMissing: "Choose a reminder date and time.",
  reminderScheduled: "Scheduled for {time}",
  reminderDue: "Due now.",
  reminderTriggered: "Notification sent: {time}",
  reminderTriggeredRepeating: "Last notification: {time}. Repeats every {minutes} min.",
  reminderAcknowledged: "Acknowledged: {time}",
  reminderAcknowledge: "Acknowledge",
  reminderResetAcknowledge: "Reset acknowledgement",
  reminderNotificationBody: "Reminder for {time}",
  timerFinishedNotificationBody: "Timer \"{title}\" is complete.",
  notificationActionOpen: "Open",
  notificationActionAcknowledge: "Acknowledge"
});

Object.assign(translations.ru, {
  fileType: "\u0422\u0438\u043f",
  showPreview: "\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043f\u0440\u0435\u0432\u044c\u044e",
  previewUnavailable: "\u041f\u0440\u0435\u0432\u044c\u044e \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e.",
  previewUnavailableHint: "\u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0442\u0438\u043f\u0430 \u0444\u0430\u0439\u043b\u0430 \u043f\u0440\u0435\u0432\u044c\u044e \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e.",
  previewLoading: "\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u043f\u0440\u0435\u0432\u044c\u044e...",
  previewReadError: "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u043f\u0440\u043e\u0447\u0438\u0442\u0430\u0442\u044c \u043f\u0440\u0435\u0432\u044c\u044e."
});

Object.assign(translations.en, {
  fileType: "Type",
  showPreview: "Show preview",
  previewUnavailable: "Preview is not available for this file.",
  previewUnavailableHint: "Preview is not available for this file type.",
  previewLoading: "Loading preview...",
  previewReadError: "Could not read preview."
});

Object.assign(translations.ru, {
  replaceFile: "Заменить файл",
  storagePath: "Путь хранения",
  storagePick: "Указать путь",
  storageOpen: "Открыть папку",
  storagePathHelp: "Смена папки переключает источник доски и файлов.",
  storageSwitchedSaved: "Путь хранения обновлен. Текущая доска перенесена.",
  storageSwitchedLoaded: "Путь хранения обновлен. Загружена доска из выбранной папки.",
  storageSwitchFailed: "Не удалось переключить путь хранения.",
  diagnosticsEnabled: "Локальный диагностический лог",
  diagnosticsSaveError: "Не удалось сохранить настройки диагностики.",
  logsFolder: "Логи",
  openLogsFolder: "Открыть папку логов",
  boardArchive: "Архив доски",
  boardArchiveHelp: "Экспорт сохраняет текущую доску и связанные файлы в один архив. Импорт заменяет текущую доску в выбранной папке хранения.",
  exportBoard: "Экспортировать",
  importBoard: "Импортировать",
  boardArchiveExported: "Архив сохранен: {name}. Карточек: {cards}, файлов: {assets}.",
  boardArchiveImported: "Архив импортирован: {name}. Карточек: {cards}, файлов: {assets}.",
  boardArchiveMissingAssets: "Отсутствующих файлов: {count}.",
  boardArchiveFailed: "Не удалось выполнить операцию с архивом доски.",
  timeFormat: "Формат времени",
  timeFormat24: "24 часа",
  timeFormat12: "12 часов",
  scheduleTime: "Время",
  scheduleComment: "Комментарий",
  scheduleCommentPlaceholder: "Что запланировано?",
  addScheduleEntry: "Добавить время",
  scheduleRemove: "Удалить строку",
  scheduleEmpty: "Добавьте первое время в расписание."
});

Object.assign(translations.en, {
  replaceFile: "Replace file",
  storagePath: "Storage path",
  storagePick: "Choose folder",
  storageOpen: "Open folder",
  storagePathHelp: "Switching the folder changes where the board and files are loaded from.",
  storageSwitchedSaved: "Storage path updated. The current board was moved.",
  storageSwitchedLoaded: "Storage path updated. Loaded the board from the selected folder.",
  storageSwitchFailed: "Could not switch the storage path.",
  diagnosticsEnabled: "Local diagnostics log",
  diagnosticsSaveError: "Could not save diagnostics settings.",
  logsFolder: "Logs",
  openLogsFolder: "Open logs folder",
  boardArchive: "Board archive",
  boardArchiveHelp: "Export saves the current board and linked files into one archive. Import replaces the current board in the selected storage folder.",
  exportBoard: "Export",
  importBoard: "Import",
  boardArchiveExported: "Archive saved: {name}. Cards: {cards}, files: {assets}.",
  boardArchiveImported: "Archive imported: {name}. Cards: {cards}, files: {assets}.",
  boardArchiveMissingAssets: "Missing files: {count}.",
  boardArchiveFailed: "Could not complete the board archive operation.",
  boards: "Boards",
  boardName: "Board name",
  boardsHelp: "Create separate spaces and switch between them inside one storage folder.",
  createBoard: "Create",
  openBoard: "Open",
  currentBoardBadge: "Current",
  unsavedBoardBadge: "Unsaved",
  boardCardsMeta: "Cards: {count}",
  boardUpdatedMeta: "Updated: {time}",
  boardNameRequired: "Enter a board name.",
  boardsLoadFailed: "Could not load boards.",
  boardActionFailed: "Could not complete the board action.",
  boardCreatedStatus: "Board created.",
  boardSwitchedStatus: "Board switched.",
  boardRenamedStatus: "Board renamed.",
  boardDeletedStatus: "Board deleted.",
  boardDeleteLastError: "Cannot delete the last board.",
  timeFormat: "Time format",
  timeFormat24: "24-hour",
  timeFormat12: "12-hour",
  scheduleTime: "Time",
  scheduleComment: "Comment",
  scheduleCommentPlaceholder: "What is planned?",
  addScheduleEntry: "Add time",
  scheduleRemove: "Remove row",
  scheduleEmpty: "Add the first time slot."
});

Object.assign(translations.ru, {
  boards: "\u0414\u043e\u0441\u043a\u0438",
  boardName: "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043e\u0441\u043a\u0438",
  boardsHelp: "\u0421\u043e\u0437\u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0430 \u0438 \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0439\u0442\u0435\u0441\u044c \u043c\u0435\u0436\u0434\u0443 \u043d\u0438\u043c\u0438 \u0432\u043d\u0443\u0442\u0440\u0438 \u043e\u0434\u043d\u043e\u0439 \u043f\u0430\u043f\u043a\u0438 \u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f.",
  createBoard: "\u0421\u043e\u0437\u0434\u0430\u0442\u044c",
  openBoard: "\u041e\u0442\u043a\u0440\u044b\u0442\u044c",
  currentBoardBadge: "\u0422\u0435\u043a\u0443\u0449\u0430\u044f",
  unsavedBoardBadge: "\u0411\u0435\u0437 \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f",
  boardCardsMeta: "\u041a\u0430\u0440\u0442\u043e\u0447\u0435\u043a: {count}",
  boardUpdatedMeta: "\u0418\u0437\u043c\u0435\u043d\u0435\u043d\u043e: {time}",
  boardNameRequired: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043e\u0441\u043a\u0438.",
  boardsLoadFailed: "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0437\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0441\u043f\u0438\u0441\u043e\u043a \u0434\u043e\u0441\u043e\u043a.",
  boardActionFailed: "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 \u0434\u043e\u0441\u043a\u043e\u0439.",
  boardCreatedStatus: "\u0414\u043e\u0441\u043a\u0430 \u0441\u043e\u0437\u0434\u0430\u043d\u0430.",
  boardSwitchedStatus: "\u0414\u043e\u0441\u043a\u0430 \u043e\u0442\u043a\u0440\u044b\u0442\u0430.",
  boardRenamedStatus: "\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0434\u043e\u0441\u043a\u0438 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u043e.",
  boardDeletedStatus: "\u0414\u043e\u0441\u043a\u0430 \u0443\u0434\u0430\u043b\u0435\u043d\u0430.",
  boardDeleteLastError: "\u041d\u0435\u043b\u044c\u0437\u044f \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u044e\u044e \u0434\u043e\u0441\u043a\u0443."
});

Object.assign(translations.ru, {
  updatesLabel: "Обновления приложения",
  updatesHelp: "Автопроверка работает только в установленной версии приложения. Portable и dev-сборка обновления не проверяют.",
  checkUpdates: "Проверить обновления",
  installUpdate: "Установить обновление",
  updatesStatusIdle: "Текущая версия: {version}. Автопроверка включена.",
  updatesStatusChecking: "Проверяем обновления...",
  updatesStatusDownloading: "Скачивается версия {version}: {percent}%.",
  updatesStatusDownloaded: "Версия {version} скачана и готова к установке.",
  updatesStatusUpToDate: "Новых обновлений нет. Текущая версия: {version}.",
  updatesStatusPortable: "Portable-версия не проверяет обновления.",
  updatesStatusUnpacked: "В режиме разработки автообновления отключены.",
  updatesStatusPlatform: "Автообновления поддерживаются только на Windows.",
  updatesStatusMissingConfig: "Для этой сборки не настроен канал обновлений.",
  updatesStatusUnknown: "Проверка обновлений сейчас недоступна.",
  updatesStatusError: "Не удалось проверить обновления: {message}"
});

Object.assign(translations.en, {
  updatesLabel: "App updates",
  updatesHelp: "Automatic checks work only in the installed app build. Portable and dev builds do not check for updates.",
  checkUpdates: "Check for updates",
  installUpdate: "Install update",
  updatesStatusIdle: "Current version: {version}. Automatic checks are enabled.",
  updatesStatusChecking: "Checking for updates...",
  updatesStatusDownloading: "Downloading version {version}: {percent}%.",
  updatesStatusDownloaded: "Version {version} has been downloaded and is ready to install.",
  updatesStatusUpToDate: "No updates found. Current version: {version}.",
  updatesStatusPortable: "Portable builds do not check for updates.",
  updatesStatusUnpacked: "Auto-updates are disabled in development preview.",
  updatesStatusPlatform: "Auto-updates are currently supported only on Windows.",
  updatesStatusMissingConfig: "This build does not have an update feed configured.",
  updatesStatusUnknown: "Update checks are not available right now.",
  updatesStatusError: "Could not check for updates: {message}"
});

Object.assign(translations.ru, {
  downloadUpdate: "\u0421\u043a\u0430\u0447\u0430\u0442\u044c \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435",
  updatesVersion: "\u0412\u0435\u0440\u0441\u0438\u044f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f: {version}",
  updatesStatusAvailable: "\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u0430 \u0432\u0435\u0440\u0441\u0438\u044f {version}. \u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443, \u0447\u0442\u043e\u0431\u044b \u0441\u043a\u0430\u0447\u0430\u0442\u044c \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u0449\u0438\u043a."
});

Object.assign(translations.en, {
  downloadUpdate: "Download update",
  updatesVersion: "App version: {version}",
  updatesStatusAvailable: "Version {version} is available. Use the button to download the installer."
});

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function createId(prefix) {
  if (crypto.randomUUID) {
    return `${prefix}-${crypto.randomUUID()}`;
  }

  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function getPersistentLocalActorId() {
  const storageKey = "desktop-board-local-actor-id";
  try {
    const existingId = localStorage.getItem(storageKey);
    if (existingId) {
      return existingId;
    }
    const nextId = createId("actor");
    localStorage.setItem(storageKey, nextId);
    return nextId;
  } catch {
    return createId("actor");
  }
}

function getDefaultAuditActorName() {
  return navigator.language?.toLowerCase().startsWith("ru") ? "Локальный пользователь" : "Local user";
}

function createDefaultAuditActor() {
  return {
    id: getPersistentLocalActorId(),
    name: getDefaultAuditActorName(),
    source: "local"
  };
}

function normalizeAuditActor(actor = null, fallback = null) {
  const source = actor && typeof actor === "object" ? actor : {};
  const fallbackActor = fallback && typeof fallback === "object" ? fallback : createDefaultAuditActor();
  const id = typeof source.id === "string" && source.id.trim()
    ? source.id.trim().slice(0, 120)
    : fallbackActor.id;
  const name = typeof source.name === "string" && source.name.trim()
    ? source.name.trim().slice(0, 120)
    : fallbackActor.name;

  return {
    id,
    name,
    source: typeof source.source === "string" && source.source.trim()
      ? source.source.trim().slice(0, 60)
      : fallbackActor.source || "local"
  };
}

function normalizeAuditState(audit = {}) {
  return {
    localActor: normalizeAuditActor(audit?.localActor, createDefaultAuditActor())
  };
}

function getCurrentAuditActor() {
  if (!state?.audit?.localActor) {
    return createDefaultAuditActor();
  }

  return normalizeAuditActor(state.audit.localActor);
}

function createBookmarkLink(link = {}) {
  return {
    id: typeof link.id === "string" && link.id ? link.id : createId("link"),
    title: typeof link.title === "string" ? link.title : "",
    url: typeof link.url === "string" ? link.url.trim() : ""
  };
}

function normalizeBookmarkLinks(links) {
  const source = Array.isArray(links) ? links : [];
  return source.map((link) => createBookmarkLink(link));
}

function normalizeChecklistTasks(tasks) {
  const source = Array.isArray(tasks) ? tasks : [];
  return source.map((task) => {
    const fallbackText = typeof task?.text === "string" ? task.text : "";
    const textHtml = normalizeRichTextHtml(task?.textHtml, fallbackText);
    return {
      id: typeof task?.id === "string" && task.id ? task.id : createId("task"),
      text: richTextHtmlToPlainText(textHtml),
      textHtml,
      done: Boolean(task?.done)
    };
  });
}

function getDefaultTableColumnTitle(index = 0) {
  let value = Math.max(0, Number(index) || 0);
  let title = "";
  do {
    title = String.fromCharCode(65 + (value % 26)) + title;
    value = Math.floor(value / 26) - 1;
  } while (value >= 0);
  return title;
}

function createTableColumn(column = {}, fallbackIndex = 0) {
  return {
    id: typeof column?.id === "string" && column.id ? column.id : createId("table-column"),
    title: typeof column === "string"
      ? column
      : typeof column?.title === "string"
        ? column.title
        : getDefaultTableColumnTitle(fallbackIndex)
  };
}

function normalizeTableColumns(columns, minimumCount = 1) {
  const source = Array.isArray(columns) ? columns : [];
  const count = Math.max(source.length, minimumCount, 1);
  return Array.from({ length: count }, (_, index) => createTableColumn(source[index], index));
}

function createTableRow(row = {}, columnCount = 1) {
  const sourceCells = Array.isArray(row?.cells) ? row.cells : Array.isArray(row) ? row : [];
  return {
    id: typeof row?.id === "string" && row.id ? row.id : createId("table-row"),
    cells: Array.from({ length: Math.max(1, columnCount) }, (_, index) => {
      const value = sourceCells[index];
      return typeof value === "string" ? value : "";
    })
  };
}

function normalizeTableRows(rows, columnCount = 1) {
  const source = Array.isArray(rows) ? rows : [];
  return source.map((row) => createTableRow(row, columnCount));
}

function createCalculatorInput(input = {}) {
  return {
    id: typeof input?.id === "string" && input.id ? input.id : createId("calculator-input"),
    value: typeof input?.value === "string" ? input.value : ""
  };
}

function normalizeCalculatorInputs(inputs, minimumCount = 2) {
  const source = Array.isArray(inputs) ? inputs : [];
  const normalized = source.map((input) => createCalculatorInput(input));
  while (normalized.length < minimumCount) {
    normalized.push(createCalculatorInput());
  }
  return normalized;
}

function normalizeCalculatorOperation(value) {
  switch (value) {
    case "subtract":
    case "multiply":
    case "divide":
      return value;
    default:
      return "add";
  }
}

function parseCalculatorNumber(value) {
  const normalized = String(value ?? "").trim().replace(",", ".");
  if (!normalized) {
    return null;
  }

  const result = Number(normalized);
  return Number.isFinite(result) ? result : null;
}

function formatCalculatorNumber(value) {
  if (!Number.isFinite(value)) {
    return "";
  }

  const rounded = Number(value.toPrecision(12));
  return Number.isInteger(rounded) ? String(rounded) : String(rounded);
}

function computeCalculatorResult(card) {
  const values = (Array.isArray(card.calculatorInputs) ? card.calculatorInputs : [])
    .map((input) => parseCalculatorNumber(input.value))
    .filter((value) => value !== null);

  if (values.length < 2) {
    return { empty: true, messageOnly: true, value: "", text: t("calculatorResultEmpty") };
  }

  const operation = normalizeCalculatorOperation(card.calculatorOperation);
  let result = values[0];

  for (let index = 1; index < values.length; index += 1) {
    const nextValue = values[index];
    if (operation === "add") {
      result += nextValue;
    } else if (operation === "subtract") {
      result -= nextValue;
    } else if (operation === "multiply") {
      result *= nextValue;
    } else if (nextValue === 0) {
      return { empty: false, messageOnly: true, value: "", text: t("calculatorDivisionByZero") };
    } else {
      result /= nextValue;
    }
  }

  return { empty: false, messageOnly: false, value: result, text: formatCalculatorNumber(result) };
}

function normalizeStandardCalculatorOperation(value) {
  switch (value) {
    case "add":
    case "subtract":
    case "multiply":
    case "divide":
      return value;
    default:
      return null;
  }
}

function getCalculatorOperatorSymbol(operation) {
  return {
    add: "+",
    subtract: "-",
    multiply: "\u00d7",
    divide: "\u00f7"
  }[operation] || "";
}

function normalizeCalculatorDisplay(value) {
  const text = String(value ?? "0").trim();
  if (!text) {
    return "0";
  }
  if (text === t("calculatorDivisionByZero")) {
    return text;
  }
  return text.slice(0, 32);
}

function parseCalculatorDisplay(value) {
  const normalized = String(value ?? "0").replace(",", ".");
  const number = Number(normalized);
  return Number.isFinite(number) ? number : null;
}

function normalizeCalculatorHistory(history = []) {
  if (!Array.isArray(history)) {
    return [];
  }

  return history
    .map((entry) => ({
      id: typeof entry?.id === "string" && entry.id ? entry.id : createId("calc-history"),
      at: Number.isFinite(Number(entry?.at)) ? Number(entry.at) : Date.now(),
      expression: typeof entry?.expression === "string" ? entry.expression.slice(0, 160) : "",
      result: typeof entry?.result === "string" ? entry.result.slice(0, 80) : ""
    }))
    .filter((entry) => entry.expression || entry.result)
    .slice(-50);
}

function normalizeCalculatorError(value) {
  return ["divisionByZero", "invalid"].includes(value) ? value : "";
}

function getCalculatorErrorText(error) {
  if (error === "divisionByZero") {
    return t("calculatorDivisionByZero");
  }
  if (error === "invalid") {
    return t("calculatorInvalidInput");
  }
  return "";
}

function applyCalculatorOperation(left, right, operation) {
  if (!Number.isFinite(left) || !Number.isFinite(right)) {
    return { error: true, text: "0", value: 0 };
  }

  if (operation === "add") {
    return { error: false, value: left + right, text: formatCalculatorNumber(left + right) };
  }
  if (operation === "subtract") {
    return { error: false, value: left - right, text: formatCalculatorNumber(left - right) };
  }
  if (operation === "multiply") {
    return { error: false, value: left * right, text: formatCalculatorNumber(left * right) };
  }
  if (operation === "divide") {
    if (right === 0) {
      return { error: true, text: t("calculatorDivisionByZero"), value: null };
    }
    return { error: false, value: left / right, text: formatCalculatorNumber(left / right) };
  }

  return { error: false, value: right, text: formatCalculatorNumber(right) };
}

function normalizeScheduleTime(value) {
  const match = String(value || "").trim().match(/^(\d{1,2}):(\d{2})$/);
  if (!match) {
    return "";
  }

  const hours = clamp(Number(match[1]), 0, 23).toString().padStart(2, "0");
  const minutes = clamp(Number(match[2]), 0, 59).toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}

function createScheduleEntry(entry = {}) {
  const fallbackNote = typeof entry?.note === "string"
    ? entry.note
    : typeof entry?.text === "string"
      ? entry.text
      : "";
  const noteHtml = normalizeRichTextHtml(entry?.noteHtml, fallbackNote);
  return {
    id: typeof entry?.id === "string" && entry.id ? entry.id : createId("schedule-item"),
    time: normalizeScheduleTime(entry?.time),
    note: richTextHtmlToPlainText(noteHtml),
    noteHtml
  };
}

function parseLegacyScheduleText(text = "") {
  return String(text || "")
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .map((line) => {
      const match = line.match(/^(\d{1,2}:\d{2})\s*[-–—]\s*(.+)$/);
      return createScheduleEntry({
        time: match ? match[1] : "",
        note: match ? match[2] : line
      });
    });
}

function normalizeScheduleEntries(entries, legacyText = "") {
  const source = Array.isArray(entries) && entries.length ? entries : parseLegacyScheduleText(legacyText);
  return source.map((entry) => createScheduleEntry(entry));
}

function scheduleEntryToSearchText(entry = {}) {
  return [normalizeScheduleTime(entry.time), String(entry.note || "").trim()].filter(Boolean).join(" ");
}

function formatScheduleTime(value, timeFormat = state.settings?.timeFormat || defaultSettings.timeFormat) {
  const normalized = normalizeScheduleTime(value);
  if (!normalized) {
    return "";
  }

  if (timeFormat !== "12h") {
    return normalized;
  }

  const [hoursText, minutes] = normalized.split(":");
  const hours = Number(hoursText);
  const suffix = hours >= 12 ? "PM" : "AM";
  const displayHours = hours % 12 || 12;
  return `${displayHours}:${minutes} ${suffix}`;
}

function getScheduleTimeParts(value) {
  const normalized = normalizeScheduleTime(value) || "09:00";
  const [hoursText, minutes] = normalized.split(":");
  const hours = Number(hoursText);
  return {
    hour: String(hours % 12 || 12),
    minute: minutes,
    period: hours >= 12 ? "PM" : "AM"
  };
}

function scheduleTimeFrom12Hour(hourValue, minuteValue, periodValue) {
  const hour = clamp(Number(hourValue) || 12, 1, 12);
  const minute = clamp(Number(minuteValue) || 0, 0, 59);
  let hours24 = hour % 12;
  if (String(periodValue || "AM").toUpperCase() === "PM") {
    hours24 += 12;
  }
  return `${String(hours24).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
}

function getProgressStats(card) {
  const tasks = Array.isArray(card?.tasks) ? card.tasks : [];
  if (!tasks.length) {
    return {
      done: 0,
      total: 0,
      percent: clamp(Number(card?.progressValue) || 0, 0, 100)
    };
  }

  const done = tasks.filter((task) => task.done).length;
  return {
    done,
    total: tasks.length,
    percent: Math.round((done / tasks.length) * 100)
  };
}

function normalizeTimerDurationMinutes(value) {
  return clamp(Math.round(Number(value) || defaultTimerDurationMinutes), minTimerDurationMinutes, maxTimerDurationMinutes);
}

function getTimerDurationMs(card) {
  return normalizeTimerDurationMinutes(card?.timerDurationMinutes) * 60 * 1000;
}

function normalizeTimerFields(card = {}) {
  const timerDurationMinutes = normalizeTimerDurationMinutes(card.timerDurationMinutes);
  const durationMs = timerDurationMinutes * 60 * 1000;
  let timerEndsAt = Number(card.timerEndsAt);
  timerEndsAt = Number.isFinite(timerEndsAt) ? timerEndsAt : null;
  const rawRemainingMs = Number(card.timerRemainingMs);
  let timerRemainingMs = clamp(Number.isFinite(rawRemainingMs) ? rawRemainingMs : durationMs, 0, durationMs);

  if (timerEndsAt !== null) {
    timerRemainingMs = clamp(timerEndsAt - Date.now(), 0, durationMs);
    if (timerRemainingMs <= 0) {
      timerEndsAt = null;
    }
  }

  return {
    timerDurationMinutes,
    timerRemainingMs,
    timerEndsAt,
    timerNotifyToast: card.timerNotifyToast !== false,
    timerPlaySound: card.timerPlaySound === true,
    timerCompletionNotifiedAt: Number.isFinite(Number(card.timerCompletionNotifiedAt))
      ? Number(card.timerCompletionNotifiedAt)
      : null
  };
}

function normalizeReminderRepeatIntervalMinutes(value) {
  return clamp(
    Math.round(Number(value) || defaultReminderRepeatIntervalMinutes),
    minReminderRepeatIntervalMinutes,
    maxReminderRepeatIntervalMinutes
  );
}

function parseReminderTimestamp(value) {
  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value !== "string" || !value.trim()) {
    return null;
  }

  const timestamp = new Date(value).getTime();
  return Number.isFinite(timestamp) ? timestamp : null;
}

function formatDateTimeInputValue(timestamp) {
  if (!Number.isFinite(timestamp)) {
    return "";
  }

  const date = new Date(timestamp);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

function normalizeReminderDateTime(value) {
  const timestamp = parseReminderTimestamp(value);
  return timestamp === null ? "" : formatDateTimeInputValue(timestamp);
}

function normalizeReminderFields(card = {}) {
  return {
    reminderAt: normalizeReminderDateTime(card.reminderAt),
    reminderShowToast: card.reminderShowToast !== false,
    reminderPlaySound: card.reminderPlaySound === true,
    reminderRepeatUntilAcknowledged: card.reminderRepeatUntilAcknowledged !== false,
    reminderRepeatIntervalMinutes: normalizeReminderRepeatIntervalMinutes(card.reminderRepeatIntervalMinutes),
    reminderAcknowledgedAt: Number.isFinite(Number(card.reminderAcknowledgedAt))
      ? Number(card.reminderAcknowledgedAt)
      : null,
    reminderLastTriggeredAt: Number.isFinite(Number(card.reminderLastTriggeredAt))
      ? Number(card.reminderLastTriggeredAt)
      : null
  };
}

function normalizeTagList(tags) {
  const values = Array.isArray(tags)
    ? tags
    : typeof tags === "string"
      ? tags.split(",")
      : [];
  const seen = new Set();

  return values
    .map((value) => String(value || "").trim())
    .filter((value) => {
      if (!value) {
        return false;
      }
      const key = value.toLowerCase();
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
}

function normalizeReferenceIds(references, cardId, cardIds = null) {
  const values = Array.isArray(references) ? references : [];
  const seen = new Set();

  return values
    .map((value) => String(value || "").trim())
    .filter((value) => {
      if (!value || value === cardId || seen.has(value)) {
        return false;
      }
      if (cardIds && !cardIds.has(value)) {
        return false;
      }
      seen.add(value);
      return true;
    });
}

function createCardLink(cardId) {
  return `desktop-board://card/${cardId}`;
}

function parseCardLink(value) {
  const source = String(value || "").trim();
  const match = source.match(/^desktop-board:\/\/card\/(.+)$/i);
  return match?.[1] ? match[1].trim() : "";
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getSystemLanguage() {
  return navigator.language?.toLowerCase().startsWith("ru") ? "ru" : "en";
}

function getActiveLanguage() {
  const mode = state.settings?.languageMode || defaultSettings.languageMode;
  return mode === "system" ? getSystemLanguage() : mode;
}

function t(key, replacements = {}) {
  const language = translations[getActiveLanguage()] ? getActiveLanguage() : "en";
  const template = translations[language][key] || translations.ru[key] || key;
  return Object.entries(replacements).reduce(
    (text, [name, value]) => text.replaceAll(`{${name}}`, String(value)),
    template
  );
}

function setText(id, key, replacements = {}) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = t(key, replacements);
  }
}

function getSettingsGroupElement(selector) {
  const element = document.querySelector(selector);
  if (!element) {
    return null;
  }

  return element.closest(".settings-block")
    || element.closest(".settings-row, .settings-help, .settings-status")
    || element;
}

function setSettingsSection(sectionId) {
  const normalizedSectionId = settingsSectionDefinitions.some((section) => section.id === sectionId)
    ? sectionId
    : settingsSectionDefinitions[0].id;

  activeSettingsSectionId = normalizedSectionId;

  document.querySelectorAll(".settings-nav-button").forEach((button) => {
    const active = button.dataset.settingsSection === activeSettingsSectionId;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", active ? "true" : "false");
    button.tabIndex = 0;
  });

  document.querySelectorAll(".settings-section-panel").forEach((panel) => {
    panel.hidden = panel.dataset.settingsSection !== activeSettingsSectionId;
  });
}

function updateSettingsSectionLabels() {
  if (!settingsLayoutInitialized) {
    return;
  }

  document.querySelectorAll(".settings-nav-button").forEach((button) => {
    const section = settingsSectionDefinitions.find((entry) => entry.id === button.dataset.settingsSection);
    if (!section) {
      return;
    }

    button.textContent = t(section.labelKey);
  });
}

function ensureSettingsLayout() {
  if (settingsLayoutInitialized || !settingsModal) {
    return;
  }

  const panel = settingsModal.querySelector(".settings-panel");
  const header = settingsModal.querySelector(".settings-header");
  if (!panel || !header) {
    return;
  }

  const layout = document.createElement("div");
  layout.className = "settings-layout";

  const nav = document.createElement("nav");
  nav.className = "settings-nav";
  nav.setAttribute("aria-label", t("settingsSections"));
  nav.setAttribute("role", "tablist");

  const sections = document.createElement("div");
  sections.className = "settings-sections";

  settingsSectionDefinitions.forEach((section) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "settings-nav-button";
    button.dataset.settingsSection = section.id;
    button.setAttribute("role", "tab");
    button.addEventListener("click", () => setSettingsSection(section.id));
    nav.appendChild(button);

    const sectionPanel = document.createElement("section");
    sectionPanel.className = "settings-section-panel";
    sectionPanel.dataset.settingsSection = section.id;
    sectionPanel.setAttribute("role", "tabpanel");
    sections.appendChild(sectionPanel);

    const movedElements = new Set();
    section.selectors.forEach((selector) => {
      const target = getSettingsGroupElement(selector);
      if (!target || movedElements.has(target)) {
        return;
      }
      movedElements.add(target);
      sectionPanel.appendChild(target);
    });
  });

  layout.append(nav, sections);
  header.after(layout);
  settingsLayoutInitialized = true;
  updateSettingsSectionLabels();
  setSettingsSection(activeSettingsSectionId);
}

function setSelectOptionText(select, value, key) {
  const option = select?.querySelector(`option[value="${value}"]`);
  if (option) {
    option.textContent = t(key);
  }
}

function setButtonLocale(button, tooltipKey, ariaKey = tooltipKey) {
  if (!button) {
    return;
  }
  button.dataset.tooltip = t(tooltipKey);
  button.setAttribute("aria-label", t(ariaKey));
}

function renderRichTextSettingsOptions() {
  if (richTextFontFamilyInput && richTextFontFamilyInput.options.length !== richTextFontFamilies.length) {
    richTextFontFamilyInput.replaceChildren();
    richTextFontFamilies.forEach((font) => {
      const option = document.createElement("option");
      option.value = font;
      option.textContent = font;
      richTextFontFamilyInput.appendChild(option);
    });
  }

  if (richTextFontSizeInput && richTextFontSizeInput.options.length !== richTextFontSizes.length) {
    richTextFontSizeInput.replaceChildren();
    richTextFontSizes.forEach((size) => {
      const option = document.createElement("option");
      option.value = String(size);
      option.textContent = `${size}px`;
      richTextFontSizeInput.appendChild(option);
    });
  }
}

function formatDateTimeDisplay(timestamp) {
  if (!Number.isFinite(timestamp)) {
    return "";
  }

  const locale = getActiveLanguage() === "ru" ? "ru-RU" : "en-US";
  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: state.settings?.timeFormat === "12h"
  }).format(timestamp);
}

function buildBoardNotificationId(scope, cardId) {
  return `${getCurrentBoardId()}:${scope}:${cardId}`;
}

async function requestDesktopNotification(payload) {
  if (!window.desktopBoard?.showNotification) {
    return null;
  }

  try {
    return await window.desktopBoard.showNotification(payload);
  } catch (error) {
    reportError("notifications.show", error, {
      cardId: payload?.cardId || null,
      notificationId: payload?.notificationId || null
    });
    return null;
  }
}

async function dismissNotificationsForCard(cardId) {
  if (!window.desktopBoard?.dismissNotificationsForCard || !cardId) {
    return false;
  }

  try {
    await window.desktopBoard.dismissNotificationsForCard(cardId);
    return true;
  } catch (error) {
    reportError("notifications.dismiss", error, { cardId });
    return false;
  }
}

function logClientEvent(level, scope, message, details = {}) {
  if (!window.desktopBoard?.logEvent) {
    return Promise.resolve(false);
  }

  return window.desktopBoard.logEvent({
    level,
    scope,
    message,
    details
  }).catch(() => false);
}

function reportError(scope, error, details = {}) {
  console.error(scope, error);
  void logClientEvent("error", scope, error?.message || String(error), {
    ...details,
    stack: error?.stack || null
  });
}

function getCurrentStoragePath() {
  return appRuntimeConfig.storageInfo?.root || appRuntimeConfig.storagePath || "";
}

function getCurrentBoardId() {
  return state.boardId || appRuntimeConfig.activeBoardId || defaultBoardId;
}

function getCurrentBoardName() {
  return typeof state.boardName === "string" && state.boardName.trim() ? state.boardName.trim() : defaultBoardName;
}

function getAutoStartHelpKey() {
  const autoStart = appRuntimeConfig.autoStart || {};
  if (autoStart.supported) {
    return "autoStartHelpSupported";
  }
  if (autoStart.reason === "unpacked") {
    return "autoStartHelpUnpacked";
  }
  return "autoStartHelpUnsupported";
}

function normalizeRectLike(rect = {}) {
  return {
    x: Number(rect.x) || 0,
    y: Number(rect.y) || 0,
    width: Math.max(0, Number(rect.width) || 0),
    height: Math.max(0, Number(rect.height) || 0)
  };
}

function normalizeMultiMonitorMode(value, legacyEnabled = false) {
  const normalized = typeof value === "string" ? value.trim().toLowerCase() : "";
  if (normalized === "single" || normalized === "seamless" || normalized === "workspace") {
    return normalized;
  }
  return legacyEnabled ? "seamless" : "single";
}

function normalizeDisplayIds(value) {
  if (!Array.isArray(value)) {
    return [];
  }
  return [...new Set(value.map((id) => String(id || "").trim()).filter(Boolean))];
}

function normalizeDisplayInfo(display = {}, index = 0) {
  return {
    id: String(display.id ?? ""),
    name: typeof display.name === "string" && display.name.trim() ? display.name.trim() : `Display ${index + 1}`,
    primary: display.primary === true,
    selected: display.selected === true,
    scaleFactor: Number(display.scaleFactor) || 1,
    x: Number(display.x) || 0,
    y: Number(display.y) || 0,
    width: Math.max(0, Number(display.width) || 0),
    height: Math.max(0, Number(display.height) || 0)
  };
}

function normalizeDisplayLayout(layout = {}) {
  const bounds = normalizeRectLike(layout.bounds);
  const primaryBounds = normalizeRectLike(layout.primaryBounds);
  const multiMonitorMode = normalizeMultiMonitorMode(layout.multiMonitorMode, layout.multiMonitorEnabled === true);
  const selectedDisplayIds = normalizeDisplayIds(layout.selectedDisplayIds);
  const displays = Array.isArray(layout.displays)
    ? layout.displays.map(normalizeDisplayInfo).filter((display) => display.id)
    : [];
  const availableDisplays = Array.isArray(layout.availableDisplays)
    ? layout.availableDisplays.map(normalizeDisplayInfo).filter((display) => display.id)
    : displays;
  return {
    multiMonitorMode,
    multiMonitorEnabled: layout.multiMonitorEnabled === true,
    displayCount: Math.max(1, Number(layout.displayCount) || 1),
    selectedDisplayCount: Math.max(0, Number(layout.selectedDisplayCount) || selectedDisplayIds.length || displays.length),
    selectedDisplayIds,
    displays,
    availableDisplays,
    bounds,
    primaryBounds: {
      x: primaryBounds.x,
      y: primaryBounds.y,
      width: primaryBounds.width || window.innerWidth,
      height: primaryBounds.height || window.innerHeight
    }
  };
}

function getActiveDisplayLayout() {
  return normalizeDisplayLayout(windowModeState.displayLayout || appRuntimeConfig.displayLayout || {});
}

function getPrimaryDisplayClientCenter() {
  const layout = getActiveDisplayLayout();
  return {
    x: layout.primaryBounds.x + layout.primaryBounds.width / 2,
    y: layout.primaryBounds.y + layout.primaryBounds.height / 2
  };
}

function normalizeWindowModeState(nextState = {}) {
  const supported = nextState.supported === true;
  const enabled = nextState.enabled === true;
  const configuredMode = typeof nextState.configuredMode === "string" ? nextState.configuredMode : "normal";
  const currentMode = typeof nextState.currentMode === "string" ? nextState.currentMode : "normal";
  return {
    supported,
    enabled,
    interactionEnabled: nextState.interactionEnabled === true,
    windowRole: typeof nextState.windowRole === "string" ? nextState.windowRole : "window",
    configuredMode,
    currentMode,
    effectiveMode: typeof nextState.effectiveMode === "string" ? nextState.effectiveMode : currentMode,
    multiMonitorMode: normalizeMultiMonitorMode(nextState.multiMonitorMode),
    multiWindowWorkspaceActive: nextState.multiWindowWorkspaceActive === true,
    attachedToWallpaper: nextState.attachedToWallpaper === true,
    wallpaperParentClass: typeof nextState.wallpaperParentClass === "string" ? nextState.wallpaperParentClass : "",
    wallpaperError: typeof nextState.wallpaperError === "string" && nextState.wallpaperError ? nextState.wallpaperError : null,
    overlayVisible: nextState.overlayVisible === true,
    widgetInteractive: nextState.widgetInteractive === true,
    displayLayout: normalizeDisplayLayout(nextState.displayLayout || {})
  };
}

function getCurrentWindowModeLabelKey() {
  switch (windowModeState.currentMode) {
    case "wallpaper-view":
      return "windowModeWallpaperView";
    case "widget-mode":
      return "windowModeWidgetMode";
    default:
      return "windowModeNormal";
  }
}

function canUseWallpaperModesFromUi() {
  return appRuntimeConfig.windowModeSupported === true;
}

function refreshToolbarWindowModeUi() {
  if (!toolbarWindowModeSelect) {
    return;
  }

  toolbarWindowModeSelect.value = windowModeState.currentMode || "normal";
  toolbarWindowModeSelect.disabled = !window.desktopBoard?.setWindowMode;

  [...toolbarWindowModeSelect.options].forEach((option) => {
    const optionValue = option.value;
    if (optionValue === "wallpaper-view" || optionValue === "widget-mode") {
      option.disabled = !canUseWallpaperModesFromUi();
    } else {
      option.disabled = false;
    }
  });
}

function refreshWallpaperModeUi(options = {}) {
  const preserveOpenFormInputs = options.force !== true && isSettingsModalOpen();
  const supported = appRuntimeConfig.windowModeSupported === true;
  const enabled = supported;

  if (windowModeInput) {
    if (!preserveOpenFormInputs) {
      windowModeInput.value = windowModeState.currentMode || appRuntimeConfig.windowMode || "normal";
    }
    windowModeInput.disabled = !supported || !enabled;
  }

  if (wallpaperModeHelp) {
    let helpText = supported ? t("wallpaperModeHelp") : t("wallpaperModeUnsupported");
    if (supported && enabled && windowModeState.currentMode === "wallpaper-view") {
      if (windowModeState.attachedToWallpaper) {
        helpText += ` ${t("wallpaperModeAttachedStatus", {
          parent: windowModeState.wallpaperParentClass || "desktop"
        })}`;
      } else if (windowModeState.wallpaperError) {
        helpText += ` ${t("wallpaperModeErrorStatus", {
          message: windowModeState.wallpaperError
        })}`;
      } else {
        helpText += ` ${t("wallpaperModePendingStatus")}`;
      }
    } else if (windowModeState.wallpaperError) {
      helpText += ` ${t("wallpaperModeErrorStatus", {
        message: windowModeState.wallpaperError
      })}`;
    }
    wallpaperModeHelp.textContent = helpText;
  }

  refreshToolbarWindowModeUi();
}

function isSettingsModalOpen() {
  return Boolean(settingsModal && settingsModal.hidden === false);
}

function getAppMultiMonitorMode() {
  return normalizeMultiMonitorMode(appRuntimeConfig.multiMonitorMode, appRuntimeConfig.multiMonitorEnabled === true);
}

function getMultiMonitorModeFromUi() {
  return normalizeMultiMonitorMode(multiMonitorModeInput?.value || getAppMultiMonitorMode());
}

function getAvailableDisplaysForSettings() {
  const layout = getActiveDisplayLayout();
  const displays = layout.availableDisplays?.length ? layout.availableDisplays : layout.displays;
  return displays.length ? displays : [];
}

function getSelectedMultiMonitorDisplayIdsFromUi(options = {}) {
  const checkedIds = multiMonitorDisplays
    ? [...multiMonitorDisplays.querySelectorAll('input[type="checkbox"]:checked')]
      .map((input) => input.value)
      .filter(Boolean)
    : [];
  if (checkedIds.length || options.fallback === false) {
    return checkedIds;
  }

  const displays = getAvailableDisplaysForSettings();
  const primaryDisplay = displays.find((display) => display.primary) || displays[0];
  return primaryDisplay?.id ? [primaryDisplay.id] : [];
}

function renderMultiMonitorDisplayPicker(options = {}) {
  if (!multiMonitorDisplays) {
    return;
  }

  const preserveOpenFormInputs = options.preserveOpenFormInputs === true;
  const mode = getMultiMonitorModeFromUi();
  const displays = getAvailableDisplaysForSettings();
  const existingSelection = preserveOpenFormInputs
    ? getSelectedMultiMonitorDisplayIdsFromUi({ fallback: false })
    : [];
  const configuredSelection = normalizeDisplayIds(appRuntimeConfig.multiMonitorDisplayIds);
  const selectedFromLayout = normalizeDisplayIds(getActiveDisplayLayout().selectedDisplayIds);
  const selectedIds = new Set(
    existingSelection.length ? existingSelection
      : configuredSelection.length ? configuredSelection
        : selectedFromLayout.length ? selectedFromLayout
          : displays.map((display) => display.id)
  );
  const pickerDisabled = mode === "single";

  multiMonitorDisplays.innerHTML = "";
  if (!displays.length) {
    const empty = document.createElement("p");
    empty.className = "settings-help";
    empty.textContent = t("multiMonitorNoDisplays");
    multiMonitorDisplays.append(empty);
    return;
  }

  displays.forEach((display, index) => {
    const id = display.id || `display-${index}`;
    const label = document.createElement("label");
    label.className = "settings-display-item";
    label.classList.toggle("is-disabled", pickerDisabled);

    const input = document.createElement("input");
    input.type = "checkbox";
    input.value = id;
    input.checked = pickerDisabled ? false : selectedIds.has(id);
    input.disabled = pickerDisabled;
    input.addEventListener("change", () => {
      if (getMultiMonitorModeFromUi() !== "single" && !getSelectedMultiMonitorDisplayIdsFromUi({ fallback: false }).length) {
        input.checked = true;
      }
      refreshAppConfigUi();
    });

    const textWrap = document.createElement("span");
    const title = document.createElement("span");
    title.textContent = display.primary
      ? `${display.name} (${t("multiMonitorDisplayPrimary")})`
      : display.name;
    const meta = document.createElement("span");
    meta.className = "settings-display-meta";
    meta.textContent = t("multiMonitorDisplaySize", {
      width: Math.round(display.width || 0),
      height: Math.round(display.height || 0)
    });

    textWrap.append(title, meta);
    label.append(input, textWrap);
    multiMonitorDisplays.append(label);
  });
}

function refreshAppConfigUi(options = {}) {
  const force = options.force === true;
  const preserveOpenFormInputs = !force && isSettingsModalOpen();
  if (storagePathInput) {
    if (!preserveOpenFormInputs || document.activeElement !== storagePathInput) {
      storagePathInput.value = getCurrentStoragePath();
    }
  }
  if (autoManageAssetsOnLaunchInput) {
    if (!preserveOpenFormInputs) {
      autoManageAssetsOnLaunchInput.checked = appRuntimeConfig.autoManageAssetsOnLaunch === true;
    }
  }
  if (autoStartWithWindowsInput) {
    if (!preserveOpenFormInputs) {
      autoStartWithWindowsInput.checked = appRuntimeConfig.autoStartEnabled === true;
    }
    autoStartWithWindowsInput.disabled = !appRuntimeConfig.autoStart?.supported;
  }
  if (autoStartHelp) {
    autoStartHelp.textContent = t(getAutoStartHelpKey());
  }
  if (multiMonitorModeInput && !preserveOpenFormInputs) {
    multiMonitorModeInput.value = getAppMultiMonitorMode();
  }
  renderMultiMonitorDisplayPicker({ preserveOpenFormInputs });
  if (multiMonitorHelp) {
    const layout = getActiveDisplayLayout();
    const displayCount = Number(layout.displayCount || 1);
    const selectedCount = getMultiMonitorModeFromUi() === "single"
      ? 1
      : getSelectedMultiMonitorDisplayIdsFromUi().length || Number(layout.selectedDisplayCount || 1);
    multiMonitorHelp.textContent = displayCount > 1
      ? (getMultiMonitorModeFromUi() === "single"
        ? t("multiMonitorSingleHelp")
        : t("multiMonitorHelp", { selected: selectedCount, count: displayCount }))
      : t("multiMonitorSingleDisplayHelp");
  }
  refreshWallpaperModeUi(options);
  if (diagnosticsEnabledInput) {
    if (!preserveOpenFormInputs) {
      diagnosticsEnabledInput.checked = appRuntimeConfig.diagnosticsEnabled !== false;
    }
  }
  if (pickStoragePathButton) {
    pickStoragePathButton.disabled = !window.desktopBoard?.pickStorageDirectory;
  }
  if (openStoragePathButton) {
    openStoragePathButton.disabled = !window.desktopBoard?.openStorageDirectory;
  }
  if (createBoardButton) {
    createBoardButton.disabled = !window.desktopBoard?.createBoard || boardManagerState.loading;
  }
  if (boardNameInput) {
    boardNameInput.disabled = boardManagerState.loading;
  }
  if (toolbarBoardSelect) {
    toolbarBoardSelect.disabled = !window.desktopBoard?.switchBoard
      || boardManagerState.loading
      || boardManagerState.boards.length <= 1;
  }
  if (switchBoardButton) {
    const selectedBoard = boardManagerState.boards.find((board) => board.id === boardManagerState.selectedBoardId) || null;
    switchBoardButton.disabled = !window.desktopBoard?.switchBoard || boardManagerState.loading || !selectedBoard || selectedBoard.isActive;
  }
  if (renameBoardButton) {
    renameBoardButton.disabled = !window.desktopBoard?.renameBoard || boardManagerState.loading || !boardManagerState.selectedBoardId;
  }
  if (deleteBoardButton) {
    deleteBoardButton.disabled = !window.desktopBoard?.deleteBoard
      || boardManagerState.loading
      || boardManagerState.boards.length <= 1
      || !boardManagerState.selectedBoardId;
  }
  if (openLogsButton) {
    openLogsButton.disabled = !window.desktopBoard?.openLogsDirectory;
  }
  if (exportBoardButton) {
    exportBoardButton.disabled = !window.desktopBoard?.exportBoardArchive;
  }
  if (importBoardButton) {
    importBoardButton.disabled = !window.desktopBoard?.importBoardArchive;
  }
  if (analyzeAssetsButton) {
    analyzeAssetsButton.disabled = !window.desktopBoard?.analyzeAssets || assetManagerState.analyzing || assetManagerState.cleaning;
  }
  if (cleanupAssetsButton) {
    cleanupAssetsButton.disabled = !window.desktopBoard?.cleanupAssets
      || assetManagerState.analyzing
      || assetManagerState.cleaning
      || Number(assetManagerState.analysis?.unusedAssetCount || 0) === 0;
  }
}

function setStatusText(element, message = "", tone = "") {
  if (!element) {
    return;
  }

  element.textContent = message || "";
  if (!message || !tone || tone === "success") {
    element.removeAttribute("data-tone");
    return;
  }
  element.dataset.tone = tone;
}

function clearAssetManagerAnalysis() {
  assetManagerState = {
    analysis: null,
    analyzing: false,
    cleaning: false,
    statusMessage: "",
    statusTone: ""
  };
}

function formatAssetScanTimestamp(value) {
  if (!value) {
    return "";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }

  const locale = getActiveLanguage() === "ru" ? "ru-RU" : "en-US";
  return new Intl.DateTimeFormat(locale, {
    dateStyle: "short",
    timeStyle: "short"
  }).format(date);
}

function appendAssetSummaryChip(container, label, value) {
  const chip = document.createElement("div");
  chip.className = "asset-summary-chip";

  const title = document.createElement("span");
  title.className = "asset-summary-chip-label";
  title.textContent = label;

  const content = document.createElement("strong");
  content.className = "asset-summary-chip-value";
  content.textContent = value;

  chip.append(title, content);
  container.appendChild(chip);
}

function appendAssetIssueItem(container, item, options = {}) {
  const row = document.createElement("div");
  row.className = "asset-issue-item";

  const title = document.createElement("div");
  title.className = "asset-issue-title";
  title.textContent = item.fileName || item.assetRelativePath || t("file");

  const pathRow = document.createElement("div");
  pathRow.className = "asset-issue-meta";
  pathRow.textContent = `${t("assetPath")}: ${item.assetRelativePath || "-"}`;

  row.append(title, pathRow);

  if (options.kind === "broken") {
    const cardsRow = document.createElement("div");
    cardsRow.className = "asset-issue-meta";
    cardsRow.textContent = t("assetUsedByCards", { count: Number(item.cardCount || 0) });
    row.appendChild(cardsRow);

    if (Array.isArray(item.cardTitles) && item.cardTitles.length) {
      const titlesRow = document.createElement("div");
      titlesRow.className = "asset-issue-meta";
      titlesRow.textContent = item.cardTitles.join(", ");
      row.appendChild(titlesRow);
    } else {
      const missingRow = document.createElement("div");
      missingRow.className = "asset-issue-meta";
      missingRow.textContent = t("assetMissingPreview");
      row.appendChild(missingRow);
    }
  } else {
    const sizeRow = document.createElement("div");
    sizeRow.className = "asset-issue-meta";
    sizeRow.textContent = formatFileSize(item.sizeBytes);
    row.appendChild(sizeRow);
  }

  container.appendChild(row);
}

function renderAssetIssueGroup(container, title, items, kind) {
  if (!Array.isArray(items) || !items.length) {
    return;
  }

  const section = document.createElement("section");
  section.className = "asset-issue-group";

  const header = document.createElement("div");
  header.className = "asset-issue-group-title";
  header.textContent = `${title} (${items.length})`;
  section.appendChild(header);

  const list = document.createElement("div");
  list.className = "asset-issue-list";
  items.forEach((item) => appendAssetIssueItem(list, item, { kind }));
  section.appendChild(list);

  container.appendChild(section);
}

function refreshAssetManagerUi() {
  if (assetManagerLabel) {
    assetManagerLabel.textContent = t("assetManager");
  }
  if (assetManagerHelp) {
    assetManagerHelp.textContent = t("assetManagerHelp");
  }
  if (analyzeAssetsButton) {
    analyzeAssetsButton.textContent = t("analyzeAssets");
  }
  if (cleanupAssetsButton) {
    cleanupAssetsButton.textContent = t("cleanupAssets");
  }

  if (assetManagerSummary) {
    assetManagerSummary.replaceChildren();
  }
  if (assetManagerIssues) {
    assetManagerIssues.replaceChildren();
  }

  const analysis = assetManagerState.analysis;
  if (!analysis) {
    setStatusText(assetManagerStatus, assetManagerState.statusMessage || t("assetScanIdle"), assetManagerState.statusTone || "muted");
    return;
  }

  if (assetManagerSummary) {
    appendAssetSummaryChip(assetManagerSummary, t("assetSummaryStored"), String(Number(analysis.storedAssetCount || 0)));
    appendAssetSummaryChip(assetManagerSummary, t("assetSummaryReferenced"), String(Number(analysis.referencedAssetCount || 0)));
    appendAssetSummaryChip(assetManagerSummary, t("assetSummaryBroken"), String(Number(analysis.brokenAssetCount || 0)));
    appendAssetSummaryChip(assetManagerSummary, t("assetSummaryUnused"), String(Number(analysis.unusedAssetCount || 0)));
    appendAssetSummaryChip(assetManagerSummary, t("assetSummarySize"), formatFileSize(analysis.storedSizeBytes));
  }

  if (assetManagerIssues) {
    renderAssetIssueGroup(assetManagerIssues, t("assetBrokenGroup"), analysis.brokenAssets, "broken");
    renderAssetIssueGroup(assetManagerIssues, t("assetUnusedGroup"), analysis.unusedAssets, "unused");
  }

  const scannedAt = formatAssetScanTimestamp(analysis.lastScannedAt);
  const statusParts = [];
  if (Number(analysis.brokenAssetCount || 0) === 0 && Number(analysis.unusedAssetCount || 0) === 0) {
    statusParts.push(t("assetNoIssues"));
  }
  if (scannedAt) {
    statusParts.push(t("assetScannedAt", { time: scannedAt }));
  }
  const defaultTone = statusParts.length && Number(analysis.brokenAssetCount || 0) === 0 && Number(analysis.unusedAssetCount || 0) === 0 ? "muted" : "";
  setStatusText(assetManagerStatus, assetManagerState.statusMessage || statusParts.join(" "), assetManagerState.statusTone || defaultTone);
}

function formatBoardTimestamp(value) {
  if (!value) {
    return "";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "";
  }

  const locale = getActiveLanguage() === "ru" ? "ru-RU" : "en-US";
  return new Intl.DateTimeFormat(locale, {
    dateStyle: "short",
    timeStyle: "short"
  }).format(date);
}

function getSelectedBoardEntry() {
  return boardManagerState.boards.find((board) => board.id === boardManagerState.selectedBoardId) || null;
}

function syncBoardNameInput() {
  if (!boardNameInput) {
    return;
  }

  const selectedBoard = getSelectedBoardEntry();
  boardNameInput.value = selectedBoard?.name || "";
}

function renderToolbarBoardSelect() {
  if (!toolbarBoardSelect) {
    return;
  }

  const currentBoardId = getCurrentBoardId();
  const toolbarBoards = boardManagerState.boards.length
    ? boardManagerState.boards
    : [{
        id: currentBoardId,
        name: getCurrentBoardName(),
        isActive: true
      }];

  toolbarBoardSelect.replaceChildren();
  toolbarBoards.forEach((boardEntry) => {
    const option = document.createElement("option");
    option.value = boardEntry.id;
    option.textContent = boardEntry.name || defaultBoardName;
    toolbarBoardSelect.appendChild(option);
  });

  if (toolbarBoards.some((boardEntry) => boardEntry.id === currentBoardId)) {
    toolbarBoardSelect.value = currentBoardId;
  } else {
    toolbarBoardSelect.selectedIndex = 0;
  }

  toolbarBoardSelect.title = `${t("boards")}: ${getCurrentBoardName()}`;
  toolbarBoardSelect.setAttribute("aria-label", t("boards"));
}

function renderBoardsList() {
  if (!boardsList) {
    return;
  }

  boardsList.replaceChildren();

  boardManagerState.boards.forEach((boardEntry) => {
    const row = document.createElement("button");
    row.type = "button";
    row.className = "boards-list-item";
    row.classList.toggle("is-selected", boardEntry.id === boardManagerState.selectedBoardId);
    row.addEventListener("click", () => {
      boardManagerState.selectedBoardId = boardEntry.id;
      syncBoardNameInput();
      refreshBoardsManagerUi();
    });

    const main = document.createElement("div");
    main.className = "boards-list-item-main";

    const title = document.createElement("div");
    title.className = "boards-list-item-title";
    title.textContent = boardEntry.name || defaultBoardName;

    const meta = document.createElement("div");
    meta.className = "boards-list-item-meta";
    const metaParts = [t("boardCardsMeta", { count: Number(boardEntry.cardCount || 0) })];
    if (boardEntry.updatedAt) {
      metaParts.push(t("boardUpdatedMeta", { time: formatBoardTimestamp(boardEntry.updatedAt) }));
    } else {
      metaParts.push(t("unsavedBoardBadge"));
    }
    meta.textContent = metaParts.join(" • ");

    main.append(title, meta);

    const badge = document.createElement("span");
    badge.className = "boards-list-item-badge";
    badge.textContent = boardEntry.isActive ? t("currentBoardBadge") : t("openBoard");

    row.append(main, badge);
    boardsList.appendChild(row);
  });
}

function refreshBoardsManagerUi() {
  refreshAppConfigUi();

  if (boardsLabel) {
    boardsLabel.textContent = t("boards");
  }
  if (boardNameFieldLabel) {
    boardNameFieldLabel.textContent = t("boardName");
  }
  if (boardsHelp) {
    boardsHelp.textContent = t("boardsHelp");
  }
  if (createBoardButton) {
    createBoardButton.textContent = t("createBoard");
  }
  if (switchBoardButton) {
    switchBoardButton.textContent = t("openBoard");
  }
  if (renameBoardButton) {
    renameBoardButton.textContent = t("rename");
  }
  if (deleteBoardButton) {
    deleteBoardButton.textContent = t("delete");
  }

  renderToolbarBoardSelect();
  renderBoardsList();
}

async function loadBoardsList() {
  if (!window.desktopBoard?.listBoards) {
    return;
  }

  boardManagerState.loading = true;
  refreshBoardsManagerUi();

  try {
    const result = await window.desktopBoard.listBoards(state);
    boardManagerState.boards = Array.isArray(result?.boards) ? result.boards : [];
    boardManagerState.selectedBoardId = getCurrentBoardId();
    syncBoardNameInput();
    setStatusText(boardsStatus, "", "");
  } catch (error) {
    reportError("boards.list", error);
    setStatusText(boardsStatus, t("boardsLoadFailed"), "error");
  } finally {
    boardManagerState.loading = false;
    refreshBoardsManagerUi();
  }
}

function applyLoadedBoardState(nextState, options = {}) {
  if (saveTimer) {
    clearTimeout(saveTimer);
    saveTimer = null;
  }

  const preservedViewport = options.preserveViewport === true ? clone(state.viewport) : null;
  const preservedLocked = options.preserveLocked === true ? state.locked : null;
  state = normalizeState(nextState);
  if (preservedViewport) {
    state.viewport = preservedViewport;
  }
  if (preservedLocked !== null) {
    state.locked = preservedLocked;
  }
  resetHistoryTracking(state);
  boardManagerState.selectedBoardId = getCurrentBoardId();
  syncBoardNameInput();
  clearSelection();
  closeContextMenu();
  selectedConnectionId = null;
  connectionDraft = null;
  connectionMode = false;
  activeAction = null;
  selectionBox.hidden = true;
  board.classList.remove("is-panning", "is-selecting");
  clearAssetManagerAnalysis();
  applySystemTheme(currentSystemTheme);
  render();
  applySettings();
  if (options.persist !== false) {
    void saveState({ skipHistory: true });
  }
}

function applyBoardManagerResult(result, statusMessage = "") {
  if (result?.appConfig) {
    appRuntimeConfig = result.appConfig;
  }
  if (result?.state) {
    applyLoadedBoardState(result.state, { persist: false });
  } else {
    refreshAppConfigUi();
    refreshBoardsManagerUi();
  }
  if (Array.isArray(result?.boards)) {
    boardManagerState.boards = result.boards;
  }
  boardManagerState.selectedBoardId = getCurrentBoardId();
  syncBoardNameInput();
  refreshBoardsManagerUi();
  if (statusMessage) {
    setStatusText(boardsStatus, statusMessage, "");
  }
}

async function createBoardFromSettings() {
  const name = boardNameInput?.value.trim() || "";
  if (!name) {
    setStatusText(boardsStatus, t("boardNameRequired"), "error");
    return;
  }
  if (!window.desktopBoard?.createBoard) {
    return;
  }

  boardManagerState.loading = true;
  refreshBoardsManagerUi();

  try {
    const result = await window.desktopBoard.createBoard(name, state);
    applyBoardManagerResult(result, t("boardCreatedStatus"));
  } catch (error) {
    reportError("boards.create", error);
    setStatusText(boardsStatus, t("boardActionFailed"), "error");
  } finally {
    boardManagerState.loading = false;
    refreshBoardsManagerUi();
  }
}

async function switchBoardById(boardId, statusElement = boardsStatus) {
  const normalizedBoardId = typeof boardId === "string" ? boardId.trim() : "";
  if (!normalizedBoardId || normalizedBoardId === getCurrentBoardId() || !window.desktopBoard?.switchBoard) {
    return;
  }

  boardManagerState.loading = true;
  refreshBoardsManagerUi();

  try {
    const result = await window.desktopBoard.switchBoard(normalizedBoardId, state);
    applyBoardManagerResult(result, statusElement ? t("boardSwitchedStatus") : "");
  } catch (error) {
    reportError("boards.switch", error);
    if (statusElement) {
      setStatusText(statusElement, t("boardActionFailed"), "error");
    }
  } finally {
    boardManagerState.loading = false;
    refreshBoardsManagerUi();
  }
}

async function switchBoardFromSettings() {
  const selectedBoard = getSelectedBoardEntry();
  if (!selectedBoard || selectedBoard.isActive) {
    return;
  }

  await switchBoardById(selectedBoard.id, boardsStatus);
}

async function renameBoardFromSettings() {
  const selectedBoard = getSelectedBoardEntry();
  const name = boardNameInput?.value.trim() || "";
  if (!selectedBoard) {
    return;
  }
  if (!name) {
    setStatusText(boardsStatus, t("boardNameRequired"), "error");
    return;
  }
  if (!window.desktopBoard?.renameBoard) {
    return;
  }

  boardManagerState.loading = true;
  refreshBoardsManagerUi();

  try {
    const result = await window.desktopBoard.renameBoard(selectedBoard.id, name, state);
    applyBoardManagerResult(result, t("boardRenamedStatus"));
  } catch (error) {
    reportError("boards.rename", error);
    setStatusText(boardsStatus, t("boardActionFailed"), "error");
  } finally {
    boardManagerState.loading = false;
    refreshBoardsManagerUi();
  }
}

async function deleteBoardFromSettings() {
  const selectedBoard = getSelectedBoardEntry();
  if (!selectedBoard || !window.desktopBoard?.deleteBoard) {
    return;
  }

  boardManagerState.loading = true;
  refreshBoardsManagerUi();

  try {
    const result = await window.desktopBoard.deleteBoard(selectedBoard.id, state);
    applyBoardManagerResult(result, t("boardDeletedStatus"));
  } catch (error) {
    reportError("boards.delete", error);
    setStatusText(boardsStatus, error?.message === "Cannot delete the last board" ? t("boardDeleteLastError") : t("boardActionFailed"), "error");
  } finally {
    boardManagerState.loading = false;
    refreshBoardsManagerUi();
  }
}

async function loadAppRuntimeConfig() {
  const requestVersion = ++appRuntimeConfigRequestVersion;
  if (!window.desktopBoard?.getAppConfig) {
    refreshAppConfigUi({ force: true });
    return;
  }

  try {
    const nextConfig = await window.desktopBoard.getAppConfig();
    if (requestVersion !== appRuntimeConfigRequestVersion) {
      return;
    }
    appRuntimeConfig = nextConfig;
    applyViewport();
  } catch (error) {
    reportError("config.load", error);
  }

  refreshAppConfigUi({ force: true });
}

async function loadWindowModeState() {
  if (!window.desktopBoard?.getWindowModeState) {
    windowModeState = normalizeWindowModeState();
    updateModeUi();
    return;
  }

  try {
    windowModeState = normalizeWindowModeState(await window.desktopBoard.getWindowModeState());
    applyViewport();
  } catch (error) {
    reportError("windowMode.load", error);
  }

  if (windowModeState.currentMode === "widget-mode") {
    if (state.locked) {
      setLocked(false, { persist: false });
    }
    void syncWidgetModeInteractivity(widgetHoverTarget);
  } else if (windowModeState.currentMode === "wallpaper-view") {
    if (canEditInWallpaperView()) {
      if (state.locked) {
        setLocked(false, { persist: false });
      }
    } else if (!state.locked) {
      setLocked(true, { persist: false });
    }
  } else {
    void syncWidgetModeInteractivity(null, { force: true });
  }
  refreshWallpaperModeUi({ force: true });
  updateModeUi();
  refreshWebContentRenderForWindowMode();
}

async function switchWindowMode(mode) {
  if (!window.desktopBoard?.setWindowMode) {
    return false;
  }

  try {
    windowModeState = normalizeWindowModeState(await window.desktopBoard.setWindowMode(mode));
    refreshWallpaperModeUi({ force: true });
    updateModeUi();
    refreshWebContentRenderForWindowMode();
    return true;
  } catch (error) {
    reportError("windowMode.switch", error);
    return false;
  }
}

function normalizeAppUpdateState(nextState = {}) {
  const source = nextState && typeof nextState === "object" ? nextState : {};
  return {
    ...defaultAppUpdateState,
    ...source,
    supported: Boolean(source.supported),
    reason: typeof source.reason === "string" && source.reason ? source.reason : "unknown",
    phase: typeof source.phase === "string" && source.phase ? source.phase : "disabled",
    checking: Boolean(source.checking),
    currentVersion: typeof source.currentVersion === "string" ? source.currentVersion : "",
    availableVersion: typeof source.availableVersion === "string" && source.availableVersion ? source.availableVersion : null,
    downloadedVersion: typeof source.downloadedVersion === "string" && source.downloadedVersion ? source.downloadedVersion : null,
    downloadUrl: typeof source.downloadUrl === "string" && source.downloadUrl ? source.downloadUrl : null,
    releaseUrl: typeof source.releaseUrl === "string" && source.releaseUrl ? source.releaseUrl : null,
    progressPercent: Number.isFinite(Number(source.progressPercent)) ? Math.max(0, Math.min(100, Math.round(Number(source.progressPercent)))) : 0,
    lastCheckedAt: typeof source.lastCheckedAt === "string" && source.lastCheckedAt ? source.lastCheckedAt : null,
    error: source.error && typeof source.error === "object" ? source.error : null
  };
}

function getUpdateStatusKey(nextState = appUpdateState) {
  if (!nextState.supported) {
    switch (nextState.reason) {
      case "portable":
        return "updatesStatusPortable";
      case "unpacked":
        return "updatesStatusUnpacked";
      case "platform":
        return "updatesStatusPlatform";
      case "missing-config":
        return "updatesStatusMissingConfig";
      default:
        return "updatesStatusUnknown";
    }
  }

  if (nextState.phase === "error") {
    return "updatesStatusError";
  }

  if (nextState.phase === "checking" || nextState.checking) {
    return "updatesStatusChecking";
  }

  if (nextState.phase === "available") {
    return "updatesStatusAvailable";
  }

  if (nextState.phase === "downloading") {
    return "updatesStatusDownloading";
  }

  if (nextState.phase === "downloaded") {
    return "updatesStatusDownloaded";
  }

  if (nextState.lastCheckedAt) {
    return "updatesStatusUpToDate";
  }

  return "updatesStatusIdle";
}

function getUpdateStatusTone(nextState = appUpdateState) {
  if (!nextState.supported) {
    return "muted";
  }

  if (nextState.phase === "error") {
    return "error";
  }

  if (nextState.phase === "checking" || nextState.phase === "downloading") {
    return "muted";
  }

  return "default";
}

function getUpdateStatusText(nextState = appUpdateState) {
  const key = getUpdateStatusKey(nextState);
  const currentVersion = nextState.currentVersion || appRuntimeConfig.appVersion || "?";
  const availableVersion = nextState.downloadedVersion || nextState.availableVersion || currentVersion;
  const version = key === "updatesStatusAvailable"
    || key === "updatesStatusDownloading"
    || key === "updatesStatusDownloaded"
    ? availableVersion
    : currentVersion;
  const message = nextState.error?.message || nextState.error?.name || "Unknown error";
  return t(key, {
    version,
    percent: nextState.progressPercent,
    message
  });
}

function refreshAppUpdateUi() {
  if (!updatesStatus || !updatesHelp || !checkUpdatesButton || !installUpdateButton) {
    return;
  }

  const nextState = normalizeAppUpdateState(appUpdateState);
  appUpdateState = nextState;
  const currentVersion = nextState.currentVersion || appRuntimeConfig.appVersion || "?";
  const showUpdateAction = nextState.phase === "available" || nextState.phase === "downloaded";

  if (updatesLabel) {
    updatesLabel.textContent = t("updatesLabel");
  }
  updatesHelp.textContent = t("updatesHelp");
  if (updatesVersion) {
    updatesVersion.textContent = t("updatesVersion", { version: currentVersion });
  }
  updatesStatus.textContent = getUpdateStatusText(nextState);
  updatesStatus.dataset.tone = getUpdateStatusTone(nextState);
  checkUpdatesButton.textContent = t("checkUpdates");
  installUpdateButton.textContent = nextState.phase === "available" ? t("downloadUpdate") : t("installUpdate");
  checkUpdatesButton.disabled = !nextState.supported || nextState.checking || nextState.phase === "downloading";
  installUpdateButton.hidden = !showUpdateAction;
  installUpdateButton.disabled = !showUpdateAction;
}

async function loadAppUpdateState() {
  if (!window.desktopBoard?.getUpdateState) {
    appUpdateState = normalizeAppUpdateState();
    refreshAppUpdateUi();
    return appUpdateState;
  }

  try {
    appUpdateState = normalizeAppUpdateState(await window.desktopBoard.getUpdateState());
  } catch (error) {
    reportError("updates.load", error);
    appUpdateState = normalizeAppUpdateState({
      ...appUpdateState,
      supported: true,
      phase: "error",
      error: {
        message: error?.message || String(error)
      }
    });
  }

  refreshAppUpdateUi();
  return appUpdateState;
}

async function checkForUpdatesFromSettings() {
  if (!window.desktopBoard?.checkForUpdates) {
    return;
  }

  try {
    appUpdateState = normalizeAppUpdateState(await window.desktopBoard.checkForUpdates());
    refreshAppUpdateUi();
  } catch (error) {
    reportError("updates.check", error);
    appUpdateState = normalizeAppUpdateState({
      ...appUpdateState,
      supported: true,
      phase: "error",
      error: {
        message: error?.message || String(error)
      }
    });
    refreshAppUpdateUi();
  }
}

async function installDownloadedUpdateFromSettings() {
  if (!window.desktopBoard?.installAppUpdate) {
    return;
  }

  try {
    const didStart = await window.desktopBoard.installAppUpdate();
    if (!didStart) {
      refreshAppUpdateUi();
    }
  } catch (error) {
    reportError("updates.install", error);
    appUpdateState = normalizeAppUpdateState({
      ...appUpdateState,
      supported: true,
      phase: "error",
      error: {
        message: error?.message || String(error)
      }
    });
    refreshAppUpdateUi();
  }
}

function getCardTypeDefinition(kind) {
  return cardTypeMap.get(kind) || cardTypeMap.get("note");
}

function getToolbarCardTypes() {
  return cardTypeRegistry.filter((definition) => Boolean(definition.toolbarButton));
}

function normalizeCardKindList(kinds, allowedDefinitions = cardTypeRegistry, fallbackKinds = defaultQuickCreateKinds) {
  const allowedKinds = new Set(allowedDefinitions.map((definition) => definition.kind));
  const source = Array.isArray(kinds) ? kinds : fallbackKinds;
  const normalized = [];

  source.forEach((kind) => {
    if (!allowedKinds.has(kind) || normalized.includes(kind)) {
      return;
    }
    normalized.push(kind);
  });

  return normalized;
}

function normalizeQuickCreateKinds(kinds) {
  return normalizeCardKindList(kinds, cardTypeRegistry, defaultQuickCreateKinds);
}

function normalizeToolbarCreateKinds(kinds) {
  return normalizeCardKindList(kinds, getToolbarCardTypes(), defaultToolbarCreateKinds);
}

function ensureCardKindInList(kinds, kind, allowedDefinitions = cardTypeRegistry) {
  const normalized = normalizeCardKindList(kinds, allowedDefinitions, []);
  const allowedKinds = new Set(allowedDefinitions.map((definition) => definition.kind));
  if (allowedKinds.has(kind) && !normalized.includes(kind)) {
    normalized.push(kind);
  }
  return normalized;
}

function getVisibleQuickCreateDefinitions(kinds = state.settings?.quickCreateKinds) {
  const visibleKinds = new Set(normalizeQuickCreateKinds(kinds));
  return cardTypeRegistry.filter((definition) => visibleKinds.has(definition.kind));
}

function getVisibleToolbarCreateDefinitions(kinds = state.settings?.toolbarCreateKinds) {
  const visibleKinds = new Set(normalizeToolbarCreateKinds(kinds));
  return getToolbarCardTypes().filter((definition) => visibleKinds.has(definition.kind));
}

function renderQuickCreateSettings() {
  if (!quickCreateKindsGrid) {
    return;
  }

  if (quickCreateInputMap.size === 0) {
    cardTypeRegistry.forEach((definition) => {
      const label = document.createElement("label");
      label.className = "settings-toggle-item";

      const input = document.createElement("input");
      input.type = "checkbox";
      input.value = definition.kind;

      const text = document.createElement("span");
      text.className = "settings-toggle-item-label";

      label.append(input, text);
      quickCreateKindsGrid.appendChild(label);
      quickCreateInputMap.set(definition.kind, { input, text });
    });
  }

  const selectedKinds = new Set(normalizeQuickCreateKinds(state.settings.quickCreateKinds));
  cardTypeRegistry.forEach((definition) => {
    const item = quickCreateInputMap.get(definition.kind);
    if (!item) {
      return;
    }
    item.input.checked = selectedKinds.has(definition.kind);
    item.input.setAttribute("aria-label", t(definition.labelKey));
    item.text.textContent = t(definition.labelKey);
  });
}

function getSelectedQuickCreateKinds() {
  if (!quickCreateInputMap.size) {
    return normalizeQuickCreateKinds(state.settings?.quickCreateKinds);
  }

  return cardTypeRegistry
    .filter((definition) => quickCreateInputMap.get(definition.kind)?.input.checked)
    .map((definition) => definition.kind);
}

function renderToolbarCreateSettings() {
  if (!toolbarCreateKindsGrid) {
    return;
  }

  const toolbarDefinitions = getToolbarCardTypes();
  if (toolbarCreateInputMap.size === 0) {
    toolbarDefinitions.forEach((definition) => {
      const label = document.createElement("label");
      label.className = "settings-toggle-item";

      const input = document.createElement("input");
      input.type = "checkbox";
      input.value = definition.kind;

      const text = document.createElement("span");
      text.className = "settings-toggle-item-label";

      label.append(input, text);
      toolbarCreateKindsGrid.appendChild(label);
      toolbarCreateInputMap.set(definition.kind, { input, text });
    });
  }

  const selectedKinds = new Set(normalizeToolbarCreateKinds(state.settings.toolbarCreateKinds));
  toolbarDefinitions.forEach((definition) => {
    const item = toolbarCreateInputMap.get(definition.kind);
    if (!item) {
      return;
    }
    item.input.checked = selectedKinds.has(definition.kind);
    item.input.setAttribute("aria-label", t(definition.labelKey));
    item.text.textContent = t(definition.labelKey);
  });
}

function getSelectedToolbarCreateKinds() {
  if (!toolbarCreateInputMap.size) {
    return normalizeToolbarCreateKinds(state.settings?.toolbarCreateKinds);
  }

  return getToolbarCardTypes()
    .filter((definition) => toolbarCreateInputMap.get(definition.kind)?.input.checked)
    .map((definition) => definition.kind);
}

function applyToolbarCreateVisibility() {
  const visibleKinds = new Set(normalizeToolbarCreateKinds(state.settings?.toolbarCreateKinds));
  getToolbarCardTypes().forEach((definition) => {
    if (definition.toolbarButton) {
      definition.toolbarButton.hidden = !visibleKinds.has(definition.kind);
    }
  });

  document.querySelectorAll(".tool-group").forEach((group) => {
    const hasVisibleButton = Array.from(group.querySelectorAll("button")).some((button) => !button.hidden);
    group.hidden = !hasVisibleButton;
  });
}

function getColorSchemeFromInputs(name = "") {
  const colors = Object.fromEntries(
    Object.entries(colorInputRefs).map(([kind, inputs]) => [
      kind,
      {
        header: inputs.header.value || defaultSettings.colors[kind].header,
        body: inputs.body.value || defaultSettings.colors[kind].body
      }
    ])
  );

  const backgroundColor = backgroundColorInput.value || defaultSettings.backgroundColor;
  return normalizeColorScheme({
    id: createId("scheme"),
    name: name || t("customColorSchemeName"),
    backgroundColor,
    backgroundOpacity: Number(backgroundOpacityInput?.value ?? defaultSettings.backgroundOpacity),
    connectionColor: connectionColorInput.value || getDefaultConnectionColor(backgroundColor),
    colors,
    visualTheme: getVisualTheme()
  });
}

function applyColorSchemeToInputs(scheme) {
  const normalizedScheme = normalizeColorScheme(scheme);
  backgroundColorInput.value = normalizedScheme.backgroundColor;
  if (backgroundOpacityInput) {
    backgroundOpacityInput.value = String(normalizedScheme.backgroundOpacity);
  }
  if (backgroundOpacityValue) {
    backgroundOpacityValue.textContent = `${normalizedScheme.backgroundOpacity}%`;
  }
  connectionColorInput.value = normalizedScheme.connectionColor;

  Object.entries(colorInputRefs).forEach(([kind, inputs]) => {
    if (!inputs?.header || !inputs?.body) {
      return;
    }
    inputs.header.value = normalizedScheme.colors[kind].header;
    inputs.body.value = normalizedScheme.colors[kind].body;
  });

  state.settings = normalizeSettings({
    ...state.settings,
    backgroundColor: normalizedScheme.backgroundColor,
    backgroundOpacity: normalizedScheme.backgroundOpacity,
    connectionColor: normalizedScheme.connectionColor,
    colors: normalizedScheme.colors,
    visualTheme: normalizedScheme.visualTheme || state.settings.visualTheme
  });
  applyDefaultColorsToInheritedCards();
  applyDefaultColorsToInheritedConnections();
  applySettings();
  applySystemTheme(currentSystemTheme);
  render();
  setStatusText(settingsStatus, t("colorSchemeApplied"), "muted");
}

function getAllColorSchemes() {
  return [
    ...builtInColorSchemes,
    ...normalizeColorSchemes(state.settings?.colorSchemes).map((scheme) => ({
      ...scheme,
      custom: true
    }))
  ];
}

function renderColorSchemePresets() {
  if (!colorSchemePresetGrid) {
    return;
  }

  colorSchemePresetGrid.replaceChildren();
  getAllColorSchemes().forEach((scheme) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "settings-preset-button";
    button.textContent = scheme.nameKey ? t(scheme.nameKey) : scheme.name;
    button.addEventListener("click", () => applyColorSchemeToInputs(scheme));
    colorSchemePresetGrid.appendChild(button);
  });
}

async function saveCurrentColorScheme() {
  const savedSchemes = normalizeColorSchemes(state.settings.colorSchemes);
  const fallbackName = `${t("customColorSchemeName")} ${savedSchemes.length + 1}`;
  const name = window.prompt(t("colorSchemeNamePrompt"), fallbackName);
  if (name === null) {
    return;
  }

  const scheme = getColorSchemeFromInputs(name.trim() || fallbackName);
  state.settings = normalizeSettings({
    ...state.settings,
    colorSchemes: [
      ...savedSchemes,
      scheme
    ]
  });
  renderColorSchemePresets();
  await saveState({ skipHistory: true });
  setStatusText(settingsStatus, t("colorSchemeSaved"), "success");
}

function exportCurrentColorScheme() {
  const scheme = getColorSchemeFromInputs(t("exportedColorSchemeName"));
  const payload = {
    type: "desktop-board-theme",
    version: 1,
    theme: {
      name: scheme.name,
      colorScheme: scheme,
      visual: getVisualTheme()
    }
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const safeName = scheme.name.replace(/[^\wа-яё-]+/gi, "-").replace(/^-+|-+$/g, "") || "desktop-board-color-scheme";
  link.href = url;
  link.download = `${safeName}.dbtheme.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  setStatusText(settingsStatus, t("colorSchemeExported"), "success");
}

async function applyImportedThemePayload(payload, statusMessage = t("themeImported")) {
  const imported = normalizeThemePackage(payload);
  if (!imported.colorScheme && !imported.visualTheme) {
    throw new Error("Theme payload is empty");
  }

  const nextSettings = {
    ...state.settings
  };
  if (imported.colorScheme) {
    nextSettings.backgroundColor = imported.colorScheme.backgroundColor;
    nextSettings.backgroundOpacity = imported.colorScheme.backgroundOpacity;
    nextSettings.connectionColor = imported.colorScheme.connectionColor;
    nextSettings.colors = imported.colorScheme.colors;
  }
  if (imported.visualTheme) {
    nextSettings.visualTheme = imported.visualTheme;
  }

  state.settings = normalizeSettings(nextSettings);
  applyDefaultColorsToInheritedCards();
  applyDefaultColorsToInheritedConnections();
  applySettings();
  applySystemTheme(currentSystemTheme);
  render();
  await saveState({ skipHistory: true });
  setStatusText(settingsStatus, statusMessage, "success");
}

async function importThemeFromFile() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json,.dbtheme,application/json";

  const file = await new Promise((resolve) => {
    input.addEventListener("change", () => resolve(input.files?.[0] || null), { once: true });
    input.click();
  });

  if (!file) {
    return;
  }

  try {
    const text = await file.text();
    const payload = JSON.parse(text);
    await applyImportedThemePayload(payload);
  } catch (error) {
    console.error("Failed to import theme:", error);
    state.settings = normalizeSettings({
      ...state.settings,
      visualTheme: clone(defaultVisualTheme)
    });
    applySettings();
    render();
    setStatusText(settingsStatus, t("themeImportFailed"), "error");
  }
}

async function importThemePackageFromDirectory() {
  if (!window.desktopBoard?.importThemePackage) {
    setStatusText(settingsStatus, t("themeImportFailed"), "error");
    return;
  }

  try {
    const result = await window.desktopBoard.importThemePackage();
    if (!result?.payload) {
      return;
    }

    await applyImportedThemePayload(
      result.payload,
      t("themePackageImported", { count: Number(result.importedAssetCount) || 0 })
    );
  } catch (error) {
    console.error("Failed to import theme package:", error);
    state.settings = normalizeSettings({
      ...state.settings,
      visualTheme: clone(defaultVisualTheme)
    });
    applySettings();
    render();
    setStatusText(settingsStatus, t("themeImportFailed"), "error");
  }
}

function normalizeState(input) {
  const source = input && Array.isArray(input.cards) ? input : defaultState;
  const parsedSchemaVersion = Number(source.schemaVersion);
  const sourceSchemaVersion = Number.isFinite(parsedSchemaVersion) && parsedSchemaVersion > 0
    ? parsedSchemaVersion
    : 0;
  const settings = normalizeSettings(source.settings);
  if (sourceSchemaVersion < 8) {
    settings.quickCreateKinds = ensureCardKindInList(settings.quickCreateKinds, "comment", cardTypeRegistry);
    settings.toolbarCreateKinds = ensureCardKindInList(settings.toolbarCreateKinds, "comment", getToolbarCardTypes());
  }
  const normalized = {
    schemaVersion: stateSchemaVersion,
    boardId: typeof source.boardId === "string" && source.boardId.trim() ? source.boardId.trim() : defaultBoardId,
    boardName: typeof source.boardName === "string" && source.boardName.trim() ? source.boardName.trim().slice(0, 120) : defaultBoardName,
    locked: Boolean(source.locked),
    viewport: {
      ...defaultViewport,
      ...(source.viewport || {})
    },
    settings,
    audit: normalizeAuditState(source.audit),
    groupHistory: normalizeGroupHistory(source.groupHistory),
    cards: normalizeCardStackOrders(source.cards.map((card) => normalizeCard(card, settings))),
    connections: []
  };

  const cardIds = new Set(normalized.cards.map((card) => card.id));
  normalized.cards = normalized.cards.map((card) => ({
    ...card,
    references: normalizeReferenceIds(card.references, card.id, cardIds),
    commentAttachment: card.kind === "comment" && card.commentAttachment && cardIds.has(card.commentAttachment.cardId)
      ? card.commentAttachment
      : null
  }));
  normalized.connections = Array.isArray(source.connections)
    ? source.connections
      .map((connection) => normalizeConnection(connection, settings))
      .filter((connection) => isConnectionUsable(connection, cardIds))
    : [];

  if (sourceSchemaVersion < stateSchemaVersion) {
    migrateGroupBoundConnectionPoints(normalized);
  }

  normalized.viewport.zoom = clamp(Number(normalized.viewport.zoom) || 1, minZoom, maxZoom);
  normalized.viewport.x = Number(normalized.viewport.x) || 0;
  normalized.viewport.y = Number(normalized.viewport.y) || 0;

  return normalized;
}

function normalizeSettings(settings = {}) {
  const sourceColors = settings.colors || {};
  const allowedThemeModes = ["system", "light", "dark"];
  const allowedLanguageModes = ["system", "ru", "en"];
  const allowedTimeFormats = ["24h", "12h"];
  const themeMode = allowedThemeModes.includes(settings.themeMode) ? settings.themeMode : defaultSettings.themeMode;
  const languageMode = allowedLanguageModes.includes(settings.languageMode) ? settings.languageMode : defaultSettings.languageMode;
  const timeFormat = allowedTimeFormats.includes(settings.timeFormat) ? settings.timeFormat : defaultSettings.timeFormat;
  const backgroundColor = isHexColor(settings.backgroundColor) ? settings.backgroundColor : defaultSettings.backgroundColor;
  const parsedBackgroundOpacity = Number(settings.backgroundOpacity);
  const backgroundOpacity = Number.isFinite(parsedBackgroundOpacity)
    ? clamp(Math.round(parsedBackgroundOpacity), 0, 100)
    : defaultSettings.backgroundOpacity;
  const richTextFontFamily = normalizeRichTextDefaultFontFamily(settings.richTextFontFamily);
  const richTextFontSize = normalizeRichTextDefaultFontSize(settings.richTextFontSize);
  const legacyColorSources = {
    bookmark: sourceColors.bookmark || sourceColors.note,
    progress: sourceColors.progress || sourceColors.tasks,
    timer: sourceColors.timer || sourceColors.schedule,
    reminder: sourceColors.reminder || sourceColors.timer || sourceColors.schedule,
    image: sourceColors.image || sourceColors.media,
    video: sourceColors.video || sourceColors.media,
    audio: sourceColors.audio || sourceColors.media,
    file: sourceColors.file || sourceColors.media,
    web: sourceColors.web || sourceColors.media
  };
  const colors = Object.fromEntries(
    Object.entries(defaultSettings.colors).map(([kind, fallback]) => {
      const sourceRule = Object.hasOwn(sourceColors, kind) ? sourceColors[kind] : legacyColorSources[kind];
      return [kind, normalizeColorRule(sourceRule, fallback)];
    })
  );

  return {
    ...defaultSettings,
    ...settings,
    themeMode,
    languageMode,
    timeFormat,
    backgroundColor,
    backgroundOpacity,
    connectionColor: isHexColor(settings.connectionColor) ? settings.connectionColor : getDefaultConnectionColor(backgroundColor),
    richTextFontFamily,
    richTextFontSize,
    visualTheme: normalizeVisualTheme(settings.visualTheme),
    snapToGrid: settings.snapToGrid !== false,
    historyEnabled: settings.historyEnabled !== false,
    quickCreateKinds: normalizeQuickCreateKinds(settings.quickCreateKinds),
    toolbarCreateKinds: normalizeToolbarCreateKinds(settings.toolbarCreateKinds),
    colorSchemes: normalizeColorSchemes(settings.colorSchemes),
    colors
  };
}

function normalizeColorScheme(scheme = {}, fallbackName = "") {
  const sourceColors = scheme.colors || {};
  const backgroundColor = isHexColor(scheme.backgroundColor) ? scheme.backgroundColor : defaultSettings.backgroundColor;
  const parsedBackgroundOpacity = Number(scheme.backgroundOpacity);
  const colors = Object.fromEntries(
    Object.entries(defaultSettings.colors).map(([kind, fallback]) => [
      kind,
      normalizeColorRule(Object.hasOwn(sourceColors, kind) ? sourceColors[kind] : null, fallback)
    ])
  );

  return {
    id: typeof scheme.id === "string" && scheme.id.trim() ? scheme.id.trim().slice(0, 80) : createId("scheme"),
    name: typeof scheme.name === "string" && scheme.name.trim()
      ? scheme.name.trim().slice(0, 80)
      : fallbackName || "Custom scheme",
    backgroundColor,
    backgroundOpacity: Number.isFinite(parsedBackgroundOpacity)
      ? clamp(Math.round(parsedBackgroundOpacity), 0, 100)
      : defaultSettings.backgroundOpacity,
    connectionColor: isHexColor(scheme.connectionColor) ? scheme.connectionColor : getDefaultConnectionColor(backgroundColor),
    colors,
    visualTheme: scheme.visualTheme || scheme.visual
      ? normalizeVisualTheme(scheme.visualTheme || scheme.visual)
      : null
  };
}

function normalizeColorSchemes(schemes = []) {
  if (!Array.isArray(schemes)) {
    return [];
  }

  return schemes
    .slice(0, 20)
    .map((scheme, index) => normalizeColorScheme(scheme, `Custom ${index + 1}`));
}

function normalizeThemeNumber(value, fallback, min, max, decimals = 0) {
  const number = Number(value);
  if (!Number.isFinite(number)) {
    return fallback;
  }

  const multiplier = 10 ** decimals;
  return Math.round(clamp(number, min, max) * multiplier) / multiplier;
}

function normalizeThemeEnum(value, allowed, fallback) {
  return allowed.includes(value) ? value : fallback;
}

function normalizeThemeAssetPath(value) {
  if (typeof value !== "string") {
    return "";
  }

  const path = value.trim().replaceAll("\\", "/");
  if (/^data:image\/(png|webp|gif|svg\+xml);base64,/i.test(path)) {
    return path.length <= 700000 ? path : "";
  }
  if (!path || path.includes("..") || /^[a-z][a-z0-9+.-]*:/i.test(path) || path.startsWith("/")) {
    return "";
  }

  return path.slice(0, 240);
}

function normalizeThemeAssets(assets = {}) {
  const sourceIcons = assets && typeof assets === "object" && assets.icons && typeof assets.icons === "object"
    ? assets.icons
    : {};
  const icons = {};
  Object.entries(sourceIcons).forEach(([kind, path]) => {
    if (!cardTypeMap.has(kind)) {
      return;
    }
    const safePath = normalizeThemeAssetPath(path);
    if (safePath) {
      icons[kind] = safePath;
    }
  });

  const connection = assets && typeof assets === "object" ? assets.connection : null;
  return {
    icons,
    connection: connection && typeof connection === "object"
      ? {
        straight: normalizeThemeAssetPath(connection.straight),
        corner: normalizeThemeAssetPath(connection.corner),
        start: normalizeThemeAssetPath(connection.start),
        end: normalizeThemeAssetPath(connection.end)
      }
      : null
  };
}

function normalizeVisualTheme(theme = {}) {
  const source = theme && typeof theme === "object" ? theme : {};
  const sourceTokens = source.tokens && typeof source.tokens === "object" ? source.tokens : {};
  const sourceConnections = source.connections && typeof source.connections === "object" ? source.connections : {};
  const fallbackTokens = defaultVisualTheme.tokens;
  const fallbackConnections = defaultVisualTheme.connections;

  return {
    version: 1,
    name: typeof source.name === "string" && source.name.trim()
      ? source.name.trim().slice(0, 80)
      : defaultVisualTheme.name,
    tokens: {
      cardRadius: normalizeThemeNumber(sourceTokens.cardRadius, fallbackTokens.cardRadius, 0, 24),
      panelRadius: normalizeThemeNumber(sourceTokens.panelRadius, fallbackTokens.panelRadius, 0, 24),
      buttonRadius: normalizeThemeNumber(sourceTokens.buttonRadius, fallbackTokens.buttonRadius, 0, 24),
      cardBorderWidth: normalizeThemeNumber(sourceTokens.cardBorderWidth, fallbackTokens.cardBorderWidth, 0, 4),
      cardHeaderHeight: normalizeThemeNumber(sourceTokens.cardHeaderHeight, fallbackTokens.cardHeaderHeight, 24, 48),
      groupHeaderHeight: normalizeThemeNumber(sourceTokens.groupHeaderHeight, fallbackTokens.groupHeaderHeight, 32, 64),
      iconScale: normalizeThemeNumber(sourceTokens.iconScale, fallbackTokens.iconScale, 0.7, 1.6, 2),
      shadow: normalizeThemeEnum(sourceTokens.shadow, ["none", "light", "medium", "strong"], fallbackTokens.shadow)
    },
    connections: {
      strokeWidth: normalizeThemeNumber(sourceConnections.strokeWidth, fallbackConnections.strokeWidth, 1, 10, 1),
      selectedStrokeWidth: normalizeThemeNumber(sourceConnections.selectedStrokeWidth, fallbackConnections.selectedStrokeWidth, 1, 12, 1),
      draftStrokeWidth: normalizeThemeNumber(sourceConnections.draftStrokeWidth, fallbackConnections.draftStrokeWidth, 1, 8, 1),
      outlineWidth: normalizeThemeNumber(sourceConnections.outlineWidth, fallbackConnections.outlineWidth, 0, 14, 1),
      waypointRadius: normalizeThemeNumber(sourceConnections.waypointRadius, fallbackConnections.waypointRadius, 2, 12, 1),
      markerScale: normalizeThemeNumber(sourceConnections.markerScale, fallbackConnections.markerScale, 0.5, 2.5, 2),
      lineStyle: normalizeThemeEnum(sourceConnections.lineStyle, ["solid", "dashed", "dotted"], fallbackConnections.lineStyle)
    },
    assets: normalizeThemeAssets(source.assets)
  };
}

function normalizeThemePackage(payload = {}) {
  const source = payload && typeof payload === "object" ? payload : {};
  if (source.type === "desktop-board-color-scheme" && source.scheme) {
    return {
      colorScheme: normalizeColorScheme(source.scheme),
      visualTheme: source.scheme.visualTheme ? normalizeVisualTheme(source.scheme.visualTheme) : null
    };
  }

  const hasKnownThemeShape = source.type === "desktop-board-theme"
    || source.theme
    || source.colorScheme
    || source.visual
    || source.visualTheme
    || source.tokens
    || source.connections
    || source.assets
    || source.colors
    || source.backgroundColor;
  if (!hasKnownThemeShape) {
    return {
      colorScheme: null,
      visualTheme: null
    };
  }

  const theme = source.type === "desktop-board-theme" && source.theme && typeof source.theme === "object"
    ? source.theme
    : source;
  const colorSource = theme.colorScheme || theme.colors && theme;
  const colorScheme = colorSource ? normalizeColorScheme(colorSource) : null;
  const visualSource = theme.visual || theme.visualTheme || theme;
  return {
    colorScheme,
    visualTheme: normalizeVisualTheme(visualSource)
  };
}

function getVisualTheme() {
  try {
    return normalizeVisualTheme(state.settings?.visualTheme);
  } catch {
    return clone(defaultVisualTheme);
  }
}

function normalizeColorRule(rule, fallback) {
  if (typeof rule === "string") {
    return {
      header: rule,
      body: fallback.body
    };
  }

  return {
    header: rule?.header || fallback.header,
    body: rule?.body || fallback.body
  };
}

function isHexColor(value) {
  return /^#[0-9a-f]{6}$/i.test(value || "");
}

function getDefaultConnectionColor(backgroundColor = defaultSettings.backgroundColor) {
  return getReadableTextColor(backgroundColor);
}

function getConnectionColor() {
  return state.settings.connectionColor || getDefaultConnectionColor(state.settings.backgroundColor);
}

function getColorKind(kind) {
  return getCardTypeDefinition(kind)?.colorKind || kind || "note";
}

function getDefaultCardColors(kind, settings = state.settings) {
  return settings.colors[getColorKind(kind)] || settings.colors.note;
}

function normalizeUrl(rawValue) {
  const value = String(rawValue || "").trim();
  if (!value) {
    return "";
  }

  const withProtocol = /^[a-z][a-z0-9+.-]*:\/\//i.test(value) ? value : `https://${value}`;

  try {
    const url = new URL(withProtocol);
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return "";
    }

    return url.href;
  } catch {
    return "";
  }
}

function getUrlTitle(urlValue) {
  try {
    return new URL(urlValue).hostname.replace(/^www\./, "") || "URL";
  } catch {
    return "URL";
  }
}

function normalizeCard(card, settings) {
  const kind = card.kind || "note";
  const defaultColors = getDefaultCardColors(kind, settings);
  const legacyColor = typeof card.color === "string" ? card.color : null;
  const normalized = {
    ...card,
    id: card.id || createId(kind),
    kind,
    title: card.title || (kind === "group" ? t("group") : t("genericElement")),
    x: Number(card.x) || 0,
    y: Number(card.y) || 0,
    width: Math.max(Number(card.width) || 300, minCardWidth),
    height: Math.max(Number(card.height) || 220, minCardHeight),
    headerColor: card.headerColor || legacyColor || defaultColors.header,
    bodyColor: card.bodyColor || (kind === "group" && legacyColor ? legacyColor : defaultColors.body),
    customHeaderColor: Boolean(card.customHeaderColor ?? card.customColor),
    customBodyColor: Boolean(card.customBodyColor),
    stackOrder: Number.isFinite(Number(card.stackOrder)) ? Number(card.stackOrder) : null,
    tags: normalizeTagList(card.tags),
    references: normalizeReferenceIds(card.references, card.id || "")
  };
  const fallbackCreatedAt = Number.isFinite(Number(card.commentCreatedAt)) ? Number(card.commentCreatedAt) : Date.now();
  const createdAt = Number.isFinite(Number(card.createdAt)) ? Number(card.createdAt) : fallbackCreatedAt;
  const updatedAt = Number.isFinite(Number(card.updatedAt))
    ? Number(card.updatedAt)
    : Number.isFinite(Number(card.commentUpdatedAt))
      ? Number(card.commentUpdatedAt)
      : createdAt;
  normalized.createdAt = createdAt;
  normalized.updatedAt = updatedAt;
  normalized.createdBy = normalizeAuditActor(card.createdBy, createDefaultAuditActor());
  normalized.updatedBy = normalizeAuditActor(card.updatedBy, normalized.createdBy);
  normalized.cardHistory = normalizeCardHistory(card.cardHistory);

  if (normalized.kind === "tasks" || normalized.kind === "progress") {
    normalized.tasks = normalizeChecklistTasks(normalized.tasks);
  }

  if (normalized.kind === "bookmark") {
    normalized.links = normalizeBookmarkLinks(normalized.links);
  }

  if (normalized.kind === "schedule") {
    normalized.scheduleEntries = normalizeScheduleEntries(normalized.scheduleEntries, normalized.text);
    normalized.text = typeof normalized.text === "string" ? normalized.text : "";
  }

  if (normalized.kind === "code") {
    normalized.text = typeof normalized.text === "string" ? normalized.text : "";
    normalized.codeLanguage = typeof normalized.codeLanguage === "string" ? normalized.codeLanguage : "";
  }

  if (normalized.kind === "note" || normalized.kind === "comment") {
    const fallbackText = typeof normalized.text === "string" ? normalized.text : "";
    normalized.textHtml = normalizeRichTextHtml(normalized.textHtml, fallbackText);
    normalized.text = richTextHtmlToPlainText(normalized.textHtml);
  }

  if (normalized.kind === "comment") {
    const createdAt = Number.isFinite(Number(normalized.commentCreatedAt))
      ? Number(normalized.commentCreatedAt)
      : Date.now();
    normalized.commentAttachment = normalizeCommentAttachment(normalized.commentAttachment);
    normalized.commentCreatedAt = createdAt;
    normalized.commentUpdatedAt = Number.isFinite(Number(normalized.commentUpdatedAt))
      ? Number(normalized.commentUpdatedAt)
      : createdAt;
    normalized.commentHistory = normalizeCommentHistory(normalized.commentHistory);
  }

  if (normalized.kind === "calculator") {
    const hasStandardDisplay = Object.hasOwn(normalized, "calculatorDisplay");
    const legacyResult = hasStandardDisplay ? null : computeCalculatorResult(normalized);
    normalized.calculatorDisplay = normalizeCalculatorDisplay(
      hasStandardDisplay
        ? normalized.calculatorDisplay
        : legacyResult?.messageOnly
          ? "0"
          : legacyResult?.text || "0"
    );
    normalized.calculatorExpression = hasStandardDisplay && typeof normalized.calculatorExpression === "string"
      ? normalized.calculatorExpression.slice(0, 160)
      : "";
    normalized.calculatorOperand = hasStandardDisplay && Number.isFinite(Number(normalized.calculatorOperand))
      ? Number(normalized.calculatorOperand)
      : null;
    normalized.calculatorOperation = hasStandardDisplay
      ? normalizeStandardCalculatorOperation(normalized.calculatorOperation)
      : null;
    normalized.calculatorWaitingForOperand = hasStandardDisplay
      ? Boolean(normalized.calculatorWaitingForOperand)
      : false;
    normalized.calculatorHistory = normalizeCalculatorHistory(normalized.calculatorHistory);
    normalized.calculatorError = normalizeCalculatorError(normalized.calculatorError);
  }

  if (normalized.kind === "table") {
    const legacyColumns = Array.isArray(card.columns) ? card.columns : [];
    const legacyRows = Array.isArray(card.rows) ? card.rows : [];
    const rowSource = Array.isArray(normalized.tableRows) ? normalized.tableRows : legacyRows;
    const explicitColumns = Array.isArray(normalized.tableColumns) && normalized.tableColumns.length
      ? normalized.tableColumns
      : legacyColumns;
    const maxRowLength = rowSource.reduce((maxLength, row) => {
      const cells = Array.isArray(row?.cells) ? row.cells : Array.isArray(row) ? row : [];
      return Math.max(maxLength, cells.length);
    }, 0);
    const columnCount = Math.max(explicitColumns.length || 0, maxRowLength, 1);
    normalized.tableColumns = normalizeTableColumns(explicitColumns, columnCount);
    normalized.tableRows = normalizeTableRows(rowSource, normalized.tableColumns.length);
  }

  if (normalized.kind === "progress") {
    normalized.tasks = normalizeChecklistTasks(normalized.tasks);
    normalized.progressValue = getProgressStats(normalized).percent;
    normalized.text = typeof normalized.text === "string" ? normalized.text : "";
  }

  if (normalized.kind === "timer") {
    Object.assign(normalized, normalizeTimerFields(normalized));
  }

  if (normalized.kind === "reminder") {
    const fallbackText = typeof normalized.text === "string" ? normalized.text : "";
    normalized.textHtml = normalizeRichTextHtml(normalized.textHtml, fallbackText);
    normalized.text = richTextHtmlToPlainText(normalized.textHtml);
    Object.assign(normalized, normalizeReminderFields(normalized));
  }

  if (normalized.kind === "image" || normalized.kind === "video" || normalized.kind === "audio" || normalized.kind === "file") {
    normalized.src = typeof normalized.src === "string" ? normalized.src : "";
    normalized.path = typeof normalized.path === "string" ? normalized.path : null;
    normalized.assetId = typeof normalized.assetId === "string" ? normalized.assetId : null;
    normalized.assetRelativePath = typeof normalized.assetRelativePath === "string" ? normalized.assetRelativePath : null;
    normalized.originalName = normalized.originalName || normalized.title || "";
    normalized.sizeBytes = Number.isFinite(Number(normalized.sizeBytes)) ? Number(normalized.sizeBytes) : null;
    if (normalized.kind === "file") {
      normalized.showPreview = Object.hasOwn(card, "showPreview") ? Boolean(card.showPreview) : true;
    }
  }

  if (normalized.kind === "web") {
    normalized.url = normalizeUrl(normalized.url || normalized.src);
    normalized.src = normalized.url;
    normalized.webInteractive = Boolean(normalized.webInteractive);
  }

  return normalized;
}

function normalizeCommentAttachment(attachment = null) {
  if (!attachment || typeof attachment !== "object") {
    return null;
  }

  const cardId = typeof attachment.cardId === "string" ? attachment.cardId : "";
  const side = ["top", "right", "bottom", "left"].includes(attachment.side) ? attachment.side : "";
  if (!cardId || !side) {
    return null;
  }

  return {
    cardId,
    side,
    offset: Number.isFinite(Number(attachment.offset)) ? Number(attachment.offset) : 0
  };
}

function normalizeCommentHistory(history = []) {
  if (!Array.isArray(history)) {
    return [];
  }

  return history
    .map((entry) => ({
      id: typeof entry?.id === "string" && entry.id ? entry.id : createId("comment-history"),
      at: Number.isFinite(Number(entry?.at)) ? Number(entry.at) : null,
      before: typeof entry?.before === "string" ? entry.before : "",
      after: typeof entry?.after === "string" ? entry.after : ""
    }))
    .filter((entry) => Number.isFinite(entry.at) && entry.before !== entry.after)
    .slice(-commentHistoryLimit);
}

function normalizeAuditChange(change = {}) {
  const field = typeof change.field === "string" && change.field.trim()
    ? change.field.trim().slice(0, 120)
    : "value";

  return {
    field,
    before: Object.hasOwn(change, "before") ? change.before : null,
    after: Object.hasOwn(change, "after") ? change.after : null
  };
}

function normalizeCardHistory(history = []) {
  if (!Array.isArray(history)) {
    return [];
  }

  return history
    .map((entry) => {
      const changes = Array.isArray(entry?.changes)
        ? entry.changes.map(normalizeAuditChange).slice(0, 24)
        : [];
      return {
        id: typeof entry?.id === "string" && entry.id ? entry.id : createId("card-history"),
        at: Number.isFinite(Number(entry?.at)) ? Number(entry.at) : null,
        actor: normalizeAuditActor(entry?.actor, createDefaultAuditActor()),
        kind: typeof entry?.kind === "string" && entry.kind.trim() ? entry.kind.trim().slice(0, 80) : "updated",
        changes,
        before: typeof entry?.before === "string" ? entry.before : "",
        after: typeof entry?.after === "string" ? entry.after : ""
      };
    })
    .filter((entry) => Number.isFinite(entry.at) && (entry.changes.length > 0 || entry.before !== entry.after || entry.kind === "created"))
    .slice(-cardHistoryLimit);
}

function normalizeGroupHistory(history = []) {
  if (!Array.isArray(history)) {
    return [];
  }

  return history
    .map((entry) => ({
      id: typeof entry?.id === "string" && entry.id ? entry.id : createId("group-history"),
      at: Number.isFinite(Number(entry?.at)) ? Number(entry.at) : null,
      actor: normalizeAuditActor(entry?.actor, createDefaultAuditActor()),
      action: entry?.action === "remove" ? "remove" : "add",
      groupId: typeof entry?.groupId === "string" ? entry.groupId : "",
      groupTitle: typeof entry?.groupTitle === "string" ? entry.groupTitle : "",
      cardId: typeof entry?.cardId === "string" ? entry.cardId : "",
      cardTitle: typeof entry?.cardTitle === "string" ? entry.cardTitle : ""
    }))
    .filter((entry) => Number.isFinite(entry.at) && entry.groupId && entry.cardId)
    .slice(-groupHistoryLimit);
}

function isHistoryRecordingEnabled() {
  return state?.settings?.historyEnabled !== false;
}

function getAuditText(value) {
  return typeof value === "string" ? value : "";
}

function getAuditNumber(value, fallback = null) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function getAuditTags(tags = []) {
  return normalizeTagList(tags).sort((left, right) => left.localeCompare(right));
}

function getAuditReferences(references = []) {
  return normalizeReferenceIds(references).sort();
}

function getAuditTasks(tasks = []) {
  return normalizeChecklistTasks(tasks).map((task) => ({
    text: task.text,
    done: task.done
  }));
}

function getAuditBookmarkLinks(links = []) {
  return normalizeBookmarkLinks(links).map((link) => ({
    title: link.title,
    url: link.url
  }));
}

function getAuditScheduleEntries(entries = [], legacyText = "") {
  return normalizeScheduleEntries(entries, legacyText).map((entry) => ({
    time: entry.time,
    note: entry.note
  }));
}

function getAuditCalculatorInputs(inputs = []) {
  return normalizeCalculatorInputs(inputs).map((input) => ({
    value: input.value
  }));
}

function getAuditCalculatorHistory(history = []) {
  return normalizeCalculatorHistory(history).map((entry) => ({
    expression: entry.expression,
    result: entry.result
  }));
}

function getAuditTableColumns(columns = []) {
  return normalizeTableColumns(columns, 1).map((column) => ({
    title: column.title
  }));
}

function getAuditTableRows(rows = [], columnCount = 1) {
  return normalizeTableRows(rows, columnCount).map((row) => ({
    cells: row.cells
  }));
}

function getAuditCardBase(card = {}) {
  return {
    title: getAuditText(card.title),
    tags: getAuditTags(card.tags),
    references: getAuditReferences(card.references)
  };
}

function getAuditComparableCard(card = {}) {
  const base = getAuditCardBase(card);

  switch (card.kind) {
    case "tasks":
    case "progress":
      return {
        ...base,
        tasks: getAuditTasks(card.tasks)
      };
    case "schedule":
      return {
        ...base,
        scheduleEntries: getAuditScheduleEntries(card.scheduleEntries, card.text)
      };
    case "bookmark":
      return {
        ...base,
        links: getAuditBookmarkLinks(card.links)
      };
    case "code":
      return {
        ...base,
        codeLanguage: getAuditText(card.codeLanguage),
        text: getAuditText(card.text)
      };
    case "comment":
      return {
        ...base,
        text: getAuditText(card.text),
        textHtml: normalizeRichTextHtml(card.textHtml, card.text)
      };
    case "calculator":
      return {
        ...base,
        calculatorDisplay: normalizeCalculatorDisplay(card.calculatorDisplay),
        calculatorExpression: getAuditText(card.calculatorExpression),
        calculatorError: normalizeCalculatorError(card.calculatorError),
        calculatorHistory: getAuditCalculatorHistory(card.calculatorHistory)
      };
    case "table": {
      const columns = getAuditTableColumns(card.tableColumns);
      return {
        ...base,
        tableColumns: columns,
        tableRows: getAuditTableRows(card.tableRows, columns.length)
      };
    }
    case "timer":
      return {
        ...base,
        timerDurationMinutes: normalizeTimerDurationMinutes(card.timerDurationMinutes),
        timerNotifyToast: card.timerNotifyToast !== false,
        timerPlaySound: card.timerPlaySound === true
      };
    case "reminder":
      return {
        ...base,
        text: getAuditText(card.text),
        reminderAt: normalizeReminderDateTime(card.reminderAt),
        reminderShowToast: card.reminderShowToast !== false,
        reminderPlaySound: card.reminderPlaySound === true,
        reminderRepeatUntilAcknowledged: card.reminderRepeatUntilAcknowledged !== false,
        reminderRepeatIntervalMinutes: normalizeReminderRepeatIntervalMinutes(card.reminderRepeatIntervalMinutes)
      };
    case "image":
    case "video":
    case "audio":
    case "file":
      return {
        ...base,
        originalName: getAuditText(card.originalName),
        assetRelativePath: getAuditText(card.assetRelativePath),
        sizeBytes: getAuditNumber(card.sizeBytes)
      };
    case "web":
      return {
        ...base,
        url: normalizeUrl(card.url || card.src)
      };
    case "group":
      return base;
    case "note":
    default:
      return {
        ...base,
        text: getAuditText(card.text),
        textHtml: normalizeRichTextHtml(card.textHtml, card.text)
      };
  }
}

function serializeAuditValue(value) {
  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}

function compactAuditValue(value) {
  if (typeof value === "string") {
    return value.length > 2000 ? `${value.slice(0, 2000)}...` : value;
  }

  const serialized = serializeAuditValue(value);
  if (serialized.length > 4000) {
    return `${serialized.slice(0, 4000)}...`;
  }

  return value;
}

function getAuditFieldChanges(previous = {}, next = {}) {
  const fields = new Set([...Object.keys(previous), ...Object.keys(next)]);
  return [...fields]
    .sort()
    .filter((field) => serializeAuditValue(previous[field]) !== serializeAuditValue(next[field]))
    .slice(0, 24)
    .map((field) => ({
      field,
      before: compactAuditValue(previous[field]),
      after: compactAuditValue(next[field])
    }));
}

function appendCardHistoryEntry(card, entry) {
  if (!card) {
    return;
  }

  card.cardHistory = normalizeCardHistory([
    ...(Array.isArray(card.cardHistory) ? card.cardHistory : []),
    {
      id: createId("card-history"),
      ...entry
    }
  ]);
}

function createGroupMembershipSnapshot() {
  const snapshot = new Map();
  state.cards
    .filter((card) => card.kind === "group")
    .forEach((group) => {
      const memberIds = getContainedCards(group, { includeGroups: true, recursive: false })
        .map((card) => card.id)
        .filter((id) => id && id !== group.id)
        .sort();
      snapshot.set(group.id, memberIds);
    });
  return snapshot;
}

function resetAuditTracking(source = state) {
  auditCardBaseline = new Map(
    (Array.isArray(source.cards) ? source.cards : []).map((card) => [
      card.id,
      getAuditComparableCard(card)
    ])
  );
  auditGroupBaseline = createGroupMembershipSnapshot();
}

function recordGroupMembershipAudit(actor, at) {
  const nextSnapshot = createGroupMembershipSnapshot();
  const entries = [];
  const cardById = new Map(state.cards.map((card) => [card.id, card]));

  nextSnapshot.forEach((memberIds, groupId) => {
    const previousIds = new Set(auditGroupBaseline.get(groupId) || []);
    const group = cardById.get(groupId);
    memberIds.forEach((cardId) => {
      if (previousIds.has(cardId)) {
        return;
      }
      const card = cardById.get(cardId);
      entries.push({
        id: createId("group-history"),
        at,
        actor,
        action: "add",
        groupId,
        groupTitle: group?.title || t("group"),
        cardId,
        cardTitle: card?.title || t("genericElement")
      });
    });
  });

  auditGroupBaseline.forEach((memberIds, groupId) => {
    const nextIds = new Set(nextSnapshot.get(groupId) || []);
    const group = cardById.get(groupId);
    memberIds.forEach((cardId) => {
      if (nextIds.has(cardId)) {
        return;
      }
      const card = cardById.get(cardId);
      entries.push({
        id: createId("group-history"),
        at,
        actor,
        action: "remove",
        groupId,
        groupTitle: group?.title || "",
        cardId,
        cardTitle: card?.title || ""
      });
    });
  });

  if (entries.length) {
    state.groupHistory = normalizeGroupHistory([
      ...(Array.isArray(state.groupHistory) ? state.groupHistory : []),
      ...entries
    ]);
  }
}

function recordAuditChanges() {
  if (!isHistoryRecordingEnabled()) {
    resetAuditTracking(state);
    return;
  }

  const actor = getCurrentAuditActor();
  const now = Date.now();
  state.cards.forEach((card) => {
    if (!card) {
      return;
    }

    card.createdAt = Number.isFinite(Number(card.createdAt)) ? Number(card.createdAt) : now;
    card.updatedAt = Number.isFinite(Number(card.updatedAt)) ? Number(card.updatedAt) : card.createdAt;
    card.createdBy = normalizeAuditActor(card.createdBy, actor);
    card.updatedBy = normalizeAuditActor(card.updatedBy, card.createdBy);

    const previous = auditCardBaseline.get(card.id);
    const current = getAuditComparableCard(card);
    if (!previous) {
      card.createdAt = now;
      card.updatedAt = now;
      card.createdBy = actor;
      card.updatedBy = actor;
      appendCardHistoryEntry(card, {
        at: now,
        actor,
        kind: "created",
        changes: []
      });
      return;
    }

    const changes = getAuditFieldChanges(previous, current);
    if (!changes.length) {
      return;
    }

    card.updatedAt = now;
    card.updatedBy = actor;
    appendCardHistoryEntry(card, {
      at: now,
      actor,
      kind: "updated",
      changes
    });
  });

  recordGroupMembershipAudit(actor, now);
  resetAuditTracking(state);
}

function normalizeConnectionAnchor(anchor = {}) {
  if (anchor.type === "card" && anchor.cardId) {
    return {
      type: "card",
      cardId: String(anchor.cardId)
    };
  }

  return {
    type: "point",
    ...normalizeConnectionPoint(anchor)
  };
}

function normalizeGroupPointBinding(binding = {}) {
  if (binding?.type !== "group-body" || !binding.cardId) {
    return null;
  }

  return {
    type: "group-body",
    cardId: String(binding.cardId),
    offsetX: Number(binding.offsetX) || 0,
    offsetY: Number(binding.offsetY) || 0
  };
}

function normalizeConnectionPoint(point = {}) {
  const normalized = {
    x: Number(point.x) || 0,
    y: Number(point.y) || 0
  };
  const binding = normalizeGroupPointBinding(point.binding);
  if (binding) {
    normalized.binding = binding;
  }

  return normalized;
}

function normalizeConnectionCap(value) {
  switch (value) {
    case "arrow":
    case "dot":
      return value;
    default:
      return "none";
  }
}

function getLegacyConnectionCaps(arrowMode) {
  switch (arrowMode) {
    case "both":
      return { startCap: "arrow", endCap: "arrow" };
    case "start":
      return { startCap: "arrow", endCap: "none" };
    case "none":
      return { startCap: "none", endCap: "none" };
    default:
      return { startCap: "none", endCap: "arrow" };
  }
}

function normalizeConnectionPathStyle(value) {
  return value === "smooth" ? "smooth" : "segmented";
}

function normalizeConnection(connection = {}, settings = state.settings) {
  const fallbackColor = settings.connectionColor || getDefaultConnectionColor(settings.backgroundColor);
  const legacyDefaultColor = "#2f7d57";
  const hasConnectionColor = isHexColor(connection.color);
  const color = hasConnectionColor ? connection.color : fallbackColor;
  const customColor = Object.hasOwn(connection, "customColor")
    ? Boolean(connection.customColor)
    : hasConnectionColor
      && color.toLowerCase() !== fallbackColor.toLowerCase()
      && color.toLowerCase() !== legacyDefaultColor;
  const legacyCaps = getLegacyConnectionCaps(connection.arrowMode);

  return {
    id: connection.id || createId("connection"),
    from: normalizeConnectionAnchor(connection.from),
    to: normalizeConnectionAnchor(connection.to),
    points: Array.isArray(connection.points)
      ? connection.points.map((point) => normalizeConnectionPoint(point))
      : [],
    color: customColor ? color : fallbackColor,
    customColor,
    startCap: normalizeConnectionCap(Object.hasOwn(connection, "startCap") ? connection.startCap : legacyCaps.startCap),
    endCap: normalizeConnectionCap(Object.hasOwn(connection, "endCap") ? connection.endCap : legacyCaps.endCap),
    pathStyle: normalizeConnectionPathStyle(connection.pathStyle)
  };
}

function getGroupBodyRect(group) {
  if (!group || group.kind !== "group") {
    return null;
  }

  const top = group.y + Math.min(group.height, groupHeaderHeight);
  return {
    left: group.x,
    top,
    right: group.x + group.width,
    bottom: group.y + group.height
  };
}

function isPointInsideRect(point, rect) {
  return Boolean(
    rect
    && point.x >= rect.left
    && point.x <= rect.right
    && point.y >= rect.top
    && point.y <= rect.bottom
  );
}

function getRectArea(rect) {
  if (!rect) {
    return Number.POSITIVE_INFINITY;
  }

  return Math.max(0, rect.right - rect.left) * Math.max(0, rect.bottom - rect.top);
}

function findGroupBodyForPoint(point, cards = state.cards, preferredGroupId = null) {
  if (preferredGroupId) {
    const preferredGroup = cards.find((card) => card.kind === "group" && card.id === preferredGroupId);
    if (preferredGroup && isPointInsideRect(point, getGroupBodyRect(preferredGroup))) {
      return preferredGroup;
    }
  }

  let bestMatch = null;
  let bestArea = Number.POSITIVE_INFINITY;
  for (let index = cards.length - 1; index >= 0; index -= 1) {
    const card = cards[index];
    if (card.kind !== "group" || card.id === preferredGroupId) {
      continue;
    }

    const rect = getGroupBodyRect(card);
    if (!isPointInsideRect(point, rect)) {
      continue;
    }

    const area = getRectArea(rect);
    if (!bestMatch || area <= bestArea) {
      bestMatch = card;
      bestArea = area;
    }
  }

  return bestMatch;
}

function bindConnectionPointToGroup(point, cards = state.cards, preferredGroupId = null) {
  const normalized = normalizeConnectionPoint(point);
  const unboundPoint = {
    x: normalized.x,
    y: normalized.y
  };
  const group = findGroupBodyForPoint(normalized, cards, preferredGroupId);
  if (!group) {
    return unboundPoint;
  }

  const bodyRect = getGroupBodyRect(group);
  const x = clamp(normalized.x, bodyRect.left, bodyRect.right);
  const y = clamp(normalized.y, bodyRect.top, bodyRect.bottom);
  return {
    x,
    y,
    binding: {
      type: "group-body",
      cardId: group.id,
      offsetX: clamp(x - group.x, 0, Math.max(0, bodyRect.right - bodyRect.left)),
      offsetY: clamp(y - bodyRect.top, 0, Math.max(0, bodyRect.bottom - bodyRect.top))
    }
  };
}

function createConnectionPoint(point, preferredGroupId = null) {
  return bindConnectionPointToGroup(maybeSnapPoint(point), state.cards, preferredGroupId);
}

function createConnectionPointAnchor(point, preferredGroupId = null) {
  return {
    type: "point",
    ...createConnectionPoint(point, preferredGroupId)
  };
}

function resolveConnectionPoint(point, cards = state.cards, sync = false) {
  const normalized = normalizeConnectionPoint(point);
  const binding = normalizeGroupPointBinding(point?.binding);
  if (!binding) {
    return normalized;
  }

  const group = cards.find((card) => card.kind === "group" && card.id === binding.cardId);
  if (!group) {
    if (sync && point?.binding) {
      delete point.binding;
    }
    return normalized;
  }

  const bodyRect = getGroupBodyRect(group);
  const offsetX = clamp(binding.offsetX, 0, Math.max(0, bodyRect.right - bodyRect.left));
  const offsetY = clamp(binding.offsetY, 0, Math.max(0, bodyRect.bottom - bodyRect.top));
  const resolved = {
    x: clamp(group.x + offsetX, bodyRect.left, bodyRect.right),
    y: clamp(bodyRect.top + offsetY, bodyRect.top, bodyRect.bottom)
  };

  if (sync && point) {
    point.x = resolved.x;
    point.y = resolved.y;
    point.binding = {
      type: "group-body",
      cardId: group.id,
      offsetX,
      offsetY
    };
  }

  return resolved;
}

function isCardInsideGroup(card, group) {
  if (!card || !group || group.kind !== "group" || card.id === group.id) {
    return false;
  }

  const bodyRect = getGroupBodyRect(group);
  if (!bodyRect) {
    return false;
  }

  if (card.kind === "group") {
    return (
      card.x >= bodyRect.left &&
      card.x + card.width <= bodyRect.right &&
      card.y >= bodyRect.top &&
      card.y + card.height <= bodyRect.bottom
    );
  }

  const centerX = card.x + card.width / 2;
  const centerY = card.y + card.height / 2;
  return (
    centerX >= bodyRect.left &&
    centerX <= bodyRect.right &&
    centerY >= bodyRect.top &&
    centerY <= bodyRect.bottom
  );
}

function getContainedCards(group, options = {}) {
  const includeGroups = options.includeGroups === true;
  const recursive = options.recursive === true;
  const visitedGroupIds = options.visitedGroupIds instanceof Set ? options.visitedGroupIds : new Set();
  if (!group || group.kind !== "group" || visitedGroupIds.has(group.id)) {
    return [];
  }

  const nextVisitedGroupIds = new Set(visitedGroupIds);
  nextVisitedGroupIds.add(group.id);
  const matches = [];
  const seenIds = new Set();

  state.cards.forEach((card) => {
    if (card.id === group.id) {
      return;
    }

    if (card.kind === "group" && !includeGroups) {
      return;
    }

    if (card.kind === "group" && nextVisitedGroupIds.has(card.id)) {
      return;
    }

    if (!isCardInsideGroup(card, group)) {
      return;
    }

    if (!seenIds.has(card.id)) {
      seenIds.add(card.id);
      matches.push(card);
    }

    if (recursive && card.kind === "group") {
      getContainedCards(card, {
        includeGroups,
        recursive: true,
        visitedGroupIds: nextVisitedGroupIds
      }).forEach((nestedCard) => {
        if (seenIds.has(nestedCard.id)) {
          return;
        }
        seenIds.add(nestedCard.id);
        matches.push(nestedCard);
      });
    }
  });

  return matches;
}

function getCardsForMove(baseCards = []) {
  const moveCards = new Map();

  baseCards.forEach((card) => {
    if (!card) {
      return;
    }

    moveCards.set(card.id, card);
    if (card.kind === "group") {
      getContainedCards(card, {
        includeGroups: true,
        recursive: true
      }).forEach((containedCard) => {
        moveCards.set(containedCard.id, containedCard);
      });
    }
  });

  return [...moveCards.values()];
}

function getAttachedComments(targetCardId) {
  return state.cards.filter((card) => (
    card.kind === "comment"
    && card.commentAttachment?.cardId === targetCardId
  ));
}

function detachCommentsFromCardIds(cardIds) {
  const ids = new Set(cardIds);
  state.cards.forEach((card) => {
    if (card.kind === "comment" && card.commentAttachment && ids.has(card.commentAttachment.cardId)) {
      card.commentAttachment = null;
    }
  });
}

function getRectOverlapLength(first, second, axis) {
  if (!first || !second) {
    return 0;
  }

  if (axis === "x") {
    return Math.max(0, Math.min(first.right, second.right) - Math.max(first.left, second.left));
  }

  return Math.max(0, Math.min(first.bottom, second.bottom) - Math.max(first.top, second.top));
}

function getCommentAttachOffset(comment, target, side) {
  if (side === "top" || side === "bottom") {
    return clamp(comment.x - target.x, 0, Math.max(0, target.width - comment.width));
  }

  return clamp(comment.y - target.y, 0, Math.max(0, target.height - comment.height));
}

function syncAttachedCommentPosition(comment) {
  const attachment = normalizeCommentAttachment(comment?.commentAttachment);
  if (!comment || comment.kind !== "comment" || !attachment) {
    return false;
  }

  const target = getCardById(attachment.cardId);
  if (!target || target.id === comment.id) {
    comment.commentAttachment = null;
    return false;
  }

  const offset = Number.isFinite(Number(attachment.offset)) ? Number(attachment.offset) : 0;
  const side = attachment.side;
  if (side === "top" || side === "bottom") {
    const nextOffset = clamp(offset, 0, Math.max(0, target.width - comment.width));
    comment.x = target.x + nextOffset;
    comment.y = side === "top"
      ? target.y - comment.height - commentAttachGap
      : target.y + target.height + commentAttachGap;
    comment.commentAttachment = { ...attachment, offset: nextOffset };
    return true;
  }

  const nextOffset = clamp(offset, 0, Math.max(0, target.height - comment.height));
  comment.x = side === "left"
    ? target.x - comment.width - commentAttachGap
    : target.x + target.width + commentAttachGap;
  comment.y = target.y + nextOffset;
  comment.commentAttachment = { ...attachment, offset: nextOffset };
  return true;
}

function syncAttachedCommentElement(comment) {
  syncAttachedCommentPosition(comment);
  const element = getCardElement(comment);
  if (!element) {
    return;
  }

  element.style.left = `${comment.x}px`;
  element.style.top = `${comment.y}px`;
}

function syncAttachedCommentsForTargets(targetIds) {
  const ids = new Set(targetIds);
  if (!ids.size) {
    return;
  }

  state.cards.forEach((card) => {
    if (card.kind === "comment" && card.commentAttachment && ids.has(card.commentAttachment.cardId)) {
      syncAttachedCommentElement(card);
    }
  });
}

function syncAllAttachedComments() {
  state.cards.forEach((card) => {
    if (card.kind === "comment" && card.commentAttachment) {
      syncAttachedCommentPosition(card);
    }
  });
}

function getNearestCommentAttachment(comment) {
  if (!comment || comment.kind !== "comment") {
    return null;
  }

  const commentRect = getCardRect(comment);
  const candidates = [];
  state.cards.forEach((target) => {
    if (!target || target.id === comment.id || target.kind === "comment") {
      return;
    }

    const targetRect = getCardRect(target);
    const horizontalOverlap = getRectOverlapLength(commentRect, targetRect, "x");
    const verticalOverlap = getRectOverlapLength(commentRect, targetRect, "y");
    const verticalMinimum = Math.min(comment.height, target.height) * 0.25;
    const horizontalMinimum = Math.min(comment.width, target.width) * 0.25;

    [
      { side: "top", distance: Math.abs(commentRect.bottom - targetRect.top), overlap: horizontalOverlap, minimum: horizontalMinimum },
      { side: "bottom", distance: Math.abs(commentRect.top - targetRect.bottom), overlap: horizontalOverlap, minimum: horizontalMinimum },
      { side: "left", distance: Math.abs(commentRect.right - targetRect.left), overlap: verticalOverlap, minimum: verticalMinimum },
      { side: "right", distance: Math.abs(commentRect.left - targetRect.right), overlap: verticalOverlap, minimum: verticalMinimum }
    ].forEach((candidate) => {
      if (candidate.distance <= commentAttachThreshold && candidate.overlap >= Math.max(12, candidate.minimum)) {
        candidates.push({
          cardId: target.id,
          target,
          side: candidate.side,
          distance: candidate.distance,
          overlap: candidate.overlap
        });
      }
    });
  });

  candidates.sort((a, b) => a.distance - b.distance || b.overlap - a.overlap);
  return candidates[0] || null;
}

function attachCommentToTarget(comment, target, side) {
  if (!comment || comment.kind !== "comment" || !target || target.id === comment.id || target.kind === "comment") {
    return false;
  }

  comment.commentAttachment = {
    cardId: target.id,
    side,
    offset: getCommentAttachOffset(comment, target, side)
  };
  syncAttachedCommentPosition(comment);
  return true;
}

function attachCommentToNearestTarget(comment, options = {}) {
  ensureEditMode();
  const candidate = getNearestCommentAttachment(comment);
  if (!candidate) {
    if (comment?.kind === "comment") {
      comment.commentAttachment = null;
    }
    if (options.closeMenu !== false) {
      closeContextMenu();
    }
    if (options.render) {
      render();
    }
    scheduleSave();
    return false;
  }

  attachCommentToTarget(comment, candidate.target, candidate.side);
  if (options.closeMenu !== false) {
    closeContextMenu();
  }
  if (options.render) {
    render();
  }
  scheduleSave();
  return true;
}

function detachComment(comment, options = {}) {
  if (!comment || comment.kind !== "comment") {
    return;
  }

  comment.commentAttachment = null;
  if (options.render) {
    render();
  }
  if (options.closeMenu !== false) {
    closeContextMenu();
  }
  scheduleSave();
}

function recordCommentTextEdit(card, before, after) {
  if (!card || card.kind !== "comment" || before === after || !isHistoryRecordingEnabled()) {
    return false;
  }

  const now = Date.now();
  card.commentHistory = normalizeCommentHistory([
    ...(Array.isArray(card.commentHistory) ? card.commentHistory : []),
    {
      id: createId("comment-history"),
      at: now,
      before,
      after
    }
  ]);
  card.commentUpdatedAt = now;
  return true;
}

function settleMovedCommentAttachments(items = []) {
  let changed = false;
  items.forEach((item) => {
    const comment = item?.card;
    if (!comment || comment.kind !== "comment") {
      return;
    }

    const previousAttachment = comment.commentAttachment ? JSON.stringify(comment.commentAttachment) : "";
    const candidate = getNearestCommentAttachment(comment);
    if (candidate) {
      attachCommentToTarget(comment, candidate.target, candidate.side);
      syncAttachedCommentElement(comment);
    } else {
      comment.commentAttachment = null;
    }

    const nextAttachment = comment.commentAttachment ? JSON.stringify(comment.commentAttachment) : "";
    if (previousAttachment !== nextAttachment) {
      changed = true;
    }
  });

  return changed;
}

function migrateGroupBoundConnectionPoints(boardState) {
  if (!Array.isArray(boardState?.connections) || !Array.isArray(boardState?.cards) || boardState.connections.length === 0) {
    return;
  }

  boardState.connections = boardState.connections.map((connection) => ({
    ...connection,
    from: connection.from?.type === "point"
      ? { type: "point", ...bindConnectionPointToGroup(connection.from, boardState.cards, connection.from.binding?.cardId) }
      : connection.from,
    to: connection.to?.type === "point"
      ? { type: "point", ...bindConnectionPointToGroup(connection.to, boardState.cards, connection.to.binding?.cardId) }
      : connection.to,
    points: Array.isArray(connection.points)
      ? connection.points.map((point) => bindConnectionPointToGroup(point, boardState.cards, point.binding?.cardId))
      : []
  }));
}

function isConnectionUsable(connection, cardIds = new Set(state.cards.map((card) => card.id))) {
  const anchors = [connection.from, connection.to];
  return anchors.every((anchor) => anchor.type !== "card" || cardIds.has(anchor.cardId));
}

function createHistoryState(source = state) {
  return {
    schemaVersion: source.schemaVersion,
    settings: clone(source.settings),
    cards: clone(source.cards),
    connections: clone(source.connections)
  };
}

function snapshotHistoryState(source = state) {
  return JSON.stringify(createHistoryState(source));
}

function trimHistoryStack(stack) {
  if (stack.length > historyLimit) {
    stack.splice(0, stack.length - historyLimit);
  }
}

function resetHistoryTracking(source = state) {
  undoStack = [];
  redoStack = [];
  lastCommittedHistorySnapshot = snapshotHistoryState(source);
  resetAuditTracking(source);
}

function commitHistorySnapshot() {
  const currentSnapshot = snapshotHistoryState(state);
  if (lastCommittedHistorySnapshot === null) {
    lastCommittedHistorySnapshot = currentSnapshot;
    return;
  }

  if (currentSnapshot === lastCommittedHistorySnapshot) {
    return;
  }

  undoStack.push(lastCommittedHistorySnapshot);
  trimHistoryStack(undoStack);
  redoStack = [];
  lastCommittedHistorySnapshot = currentSnapshot;
}

function normalizeHistorySnapshot(snapshot) {
  if (!snapshot) {
    return null;
  }

  try {
    const parsed = JSON.parse(snapshot);
    if (!parsed || typeof parsed !== "object") {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

function applyHistorySnapshot(snapshot) {
  const nextState = normalizeHistorySnapshot(snapshot);
  if (!nextState) {
    return false;
  }

  clearTimeout(saveTimer);
  closeContextMenu();
  if (!searchModal.hidden) {
    closeSearchModal(null);
  }
  if (!urlModal.hidden) {
    closeUrlModal("");
  }
  if (!metaModal.hidden) {
    closeMetaModal();
  }
  if (commentHistoryModal && !commentHistoryModal.hidden) {
    closeCommentHistoryModal();
  }

  const preservedViewport = clone(state.viewport);
  const preservedLocked = state.locked;
  activeAction = null;
  connectionDraft = null;
  connectionMode = false;
  selectedIds.clear();
  selectedConnectionId = null;
  board.classList.remove("is-panning", "is-selecting");
  selectionBox.hidden = true;

  state = normalizeState({
    ...state,
    ...nextState,
    viewport: preservedViewport,
    locked: preservedLocked
  });
  lastCommittedHistorySnapshot = snapshotHistoryState(state);
  resetAuditTracking(state);
  applySystemTheme(currentSystemTheme);
  render();
  applySettings();
  void saveState({ skipHistory: true });
  return true;
}

function undoStateChange() {
  const currentSnapshot = snapshotHistoryState(state);

  if (lastCommittedHistorySnapshot && currentSnapshot !== lastCommittedHistorySnapshot) {
    redoStack.push(currentSnapshot);
    trimHistoryStack(redoStack);
    return applyHistorySnapshot(lastCommittedHistorySnapshot);
  }

  const targetSnapshot = undoStack.pop();
  if (!targetSnapshot) {
    return false;
  }

  redoStack.push(currentSnapshot);
  trimHistoryStack(redoStack);
  return applyHistorySnapshot(targetSnapshot);
}

function redoStateChange() {
  const currentSnapshot = snapshotHistoryState(state);
  if (lastCommittedHistorySnapshot && currentSnapshot !== lastCommittedHistorySnapshot) {
    redoStack = [];
    return false;
  }

  const targetSnapshot = redoStack.pop();
  if (!targetSnapshot) {
    return false;
  }

  undoStack.push(currentSnapshot);
  trimHistoryStack(undoStack);
  return applyHistorySnapshot(targetSnapshot);
}

function scheduleSave() {
  clearTimeout(saveTimer);
  if (redoStack.length && lastCommittedHistorySnapshot !== null) {
    const currentSnapshot = snapshotHistoryState(state);
    if (currentSnapshot !== lastCommittedHistorySnapshot) {
      redoStack = [];
    }
  }
  saveTimer = setTimeout(() => {
    void saveState();
  }, 180);
}

async function saveState(options = {}) {
  if (!options.skipHistory) {
    recordAuditChanges();
    commitHistorySnapshot();
  }

  if (!window.desktopBoard) {
    localStorage.setItem("desktop-board-state", JSON.stringify(state));
    return;
  }

  await window.desktopBoard.saveState(state);
}

async function loadState() {
  if (window.desktopBoard) {
    const persisted = await window.desktopBoard.loadState();
    state = normalizeState(persisted);
    resetHistoryTracking(state);
    boardManagerState.selectedBoardId = getCurrentBoardId();
    syncBoardNameInput();
    return;
  }

  const local = localStorage.getItem("desktop-board-state");
  state = normalizeState(local ? JSON.parse(local) : null);
  resetHistoryTracking(state);
  boardManagerState.selectedBoardId = getCurrentBoardId();
  syncBoardNameInput();
}

function getThemeShadowValue(shadow) {
  if (shadow === "none") {
    return "none";
  }
  if (shadow === "light") {
    return "0 8px 20px rgba(23, 25, 22, 0.10)";
  }
  if (shadow === "strong") {
    return "0 18px 46px rgba(23, 25, 22, 0.24)";
  }

  return "0 14px 34px rgba(23, 25, 22, 0.14)";
}

function applyVisualTheme() {
  const theme = getVisualTheme();
  const { tokens } = theme;
  const root = document.documentElement;
  root.style.setProperty("--theme-card-radius", `${tokens.cardRadius}px`);
  root.style.setProperty("--theme-panel-radius", `${tokens.panelRadius}px`);
  root.style.setProperty("--theme-button-radius", `${tokens.buttonRadius}px`);
  root.style.setProperty("--theme-card-border-width", `${tokens.cardBorderWidth}px`);
  root.style.setProperty("--theme-card-header-height", `${tokens.cardHeaderHeight}px`);
  root.style.setProperty("--theme-group-header-height", `${tokens.groupHeaderHeight}px`);
  root.style.setProperty("--theme-card-icon-scale", String(tokens.iconScale));
  root.style.setProperty("--shadow", getThemeShadowValue(tokens.shadow));
}

function applyViewport() {
  const { x, y, zoom } = state.viewport;
  const layout = getActiveDisplayLayout();
  board.style.setProperty("--pan-x", `${x}px`);
  board.style.setProperty("--pan-y", `${y}px`);
  board.style.setProperty("--zoom", zoom);
  document.documentElement.style.setProperty("--display-origin-x", `${layout.primaryBounds.x}px`);
  document.documentElement.style.setProperty("--display-origin-y", `${layout.primaryBounds.y}px`);
  document.documentElement.style.setProperty("--display-primary-x", `${layout.primaryBounds.x}px`);
  document.documentElement.style.setProperty("--display-primary-y", `${layout.primaryBounds.y}px`);
  document.documentElement.style.setProperty("--display-primary-width", `${layout.primaryBounds.width || window.innerWidth}px`);
  document.documentElement.style.setProperty("--display-primary-height", `${layout.primaryBounds.height || window.innerHeight}px`);
  board.style.backgroundSize = `${gridSize * zoom}px ${gridSize * zoom}px`;
  zoomLabel.textContent = `${Math.round(zoom * 100)}%`;
  requestAnimationFrame(syncAllWebCardElements);
}

function applySettings() {
  const parsedTransparency = Number(state.settings.backgroundOpacity);
  const backgroundTransparency = Number.isFinite(parsedTransparency)
    ? clamp(parsedTransparency, 0, 100)
    : defaultSettings.backgroundOpacity;
  const surfaceOpacity = 1 - (backgroundTransparency / 100);
  const pageColor = hexToRgb(state.settings.backgroundColor);
  document.documentElement.style.setProperty("--page", state.settings.backgroundColor);
  document.documentElement.style.setProperty("--board-surface", rgba(pageColor, surfaceOpacity));
  document.documentElement.style.setProperty("--board-grid-horizontal", rgba(hexToRgb("#2f7d57"), 0.1 * surfaceOpacity));
  document.documentElement.style.setProperty("--board-grid-vertical", rgba(hexToRgb("#3a8f9f"), 0.1 * surfaceOpacity));
  document.documentElement.style.setProperty("--connection-outline", getReadableTextColor(state.settings.backgroundColor));
  document.documentElement.style.setProperty("--rich-text-font-family", getRichTextFontFamilyCssValue(state.settings.richTextFontFamily));
  document.documentElement.style.setProperty("--rich-text-font-size", `${normalizeRichTextDefaultFontSize(state.settings.richTextFontSize)}px`);
  applyVisualTheme();
  renderRichTextSettingsOptions();
  themeModeInput.value = state.settings.themeMode;
  languageModeInput.value = state.settings.languageMode;
  timeFormatInput.value = state.settings.timeFormat;
  backgroundColorInput.value = state.settings.backgroundColor;
  if (backgroundOpacityInput) {
    backgroundOpacityInput.value = String(backgroundTransparency);
  }
  if (backgroundOpacityValue) {
    backgroundOpacityValue.textContent = `${backgroundTransparency}%`;
  }
  connectionColorInput.value = state.settings.connectionColor;
  if (richTextFontFamilyInput) {
    richTextFontFamilyInput.value = normalizeRichTextDefaultFontFamily(state.settings.richTextFontFamily);
  }
  if (richTextFontSizeInput) {
    richTextFontSizeInput.value = String(normalizeRichTextDefaultFontSize(state.settings.richTextFontSize));
  }
  if (richTextToolbar) {
    const toolbarFontSelect = richTextToolbar.querySelector(".rich-text-toolbar-select");
    const toolbarSizeSelect = richTextToolbar.querySelector(".rich-text-toolbar-size");
    if (toolbarFontSelect) {
      toolbarFontSelect.value = normalizeRichTextDefaultFontFamily(state.settings.richTextFontFamily);
    }
    if (toolbarSizeSelect) {
      toolbarSizeSelect.value = String(normalizeRichTextDefaultFontSize(state.settings.richTextFontSize));
    }
  }
  Object.entries(colorInputRefs).forEach(([kind, inputs]) => {
    if (!inputs?.header || !inputs?.body) {
      return;
    }
    inputs.header.value = state.settings.colors[kind].header;
    inputs.body.value = state.settings.colors[kind].body;
  });
  snapToGridInput.checked = state.settings.snapToGrid;
  if (historyEnabledInput) {
    historyEnabledInput.checked = state.settings.historyEnabled !== false;
  }
  toggleHotkeyInput.value = state.settings.toggleHotkey;
  lockHotkeyInput.value = state.settings.lockHotkey;
  applyToolbarCreateVisibility();
  refreshAppConfigUi();
  renderQuickCreateSettings();
  renderToolbarCreateSettings();
  renderColorSchemePresets();
  applyTranslations();
}

function applyTranslations() {
  document.documentElement.lang = getActiveLanguage();
  ensureSettingsLayout();
  updateSettingsSectionLabels();
  getToolbarCardTypes().forEach((definition) => {
    setButtonLocale(definition.toolbarButton, definition.labelKey, definition.createLabelKey);
  });
  setButtonLocale(searchButton, "search", "search");
  setButtonLocale(settingsButton, "settings", "openSettings");
  setButtonLocale(hideButton, "hide");

  setText("settingsTitle", "settingsTitle");
  setText("themeModeLabel", "themeMode");
  setText("languageModeLabel", "languageMode");
  setText("autoStartWithWindowsLabel", "autoStartWithWindows");
  setText("multiMonitorModeLabel", "multiMonitorMode");
  setText("multiMonitorDisplaysLabel", "multiMonitorDisplays");
  setText("windowModeLabel", "windowModeLabel");
  setText("timeFormatLabel", "timeFormat");
  setText("backgroundColorLabel", "backgroundColor");
  setText("backgroundOpacityLabel", "backgroundOpacity");
  setText("connectionColorLabel", "connectionColor");
  setText("storagePathLabel", "storagePath");
  setText("storagePathHelp", "storagePathHelp");
  setText("diagnosticsEnabledLabel", "diagnosticsEnabled");
  setText("historyEnabledLabel", "historyEnabled");
  setText("historyEnabledHelp", "historyEnabledHelp");
  setText("logsFolderLabel", "logsFolder");
  setText("boardArchiveLabel", "boardArchive");
  setText("boardArchiveHelp", "boardArchiveHelp");
  setText("assetManagerLabel", "assetManager");
  setText("assetManagerHelp", "assetManagerHelp");
  setText("autoManageAssetsOnLaunchLabel", "autoManageAssetsOnLaunch");
  setText("autoManageAssetsOnLaunchHelp", "autoManageAssetsOnLaunchHelp");
  setText("wallpaperModeHelp", appRuntimeConfig.windowModeSupported ? "wallpaperModeHelp" : "wallpaperModeUnsupported");
  setText("updatesLabel", "updatesLabel");
  setText("newElementColorsTitle", "newElementColors");
  setText("quickCreateTitle", "quickCreateMenu");
  setText("quickCreateHelp", "quickCreateHelp");
  setText("toolbarCreateTitle", "toolbarCreateMenu");
  setText("toolbarCreateHelp", "toolbarCreateHelp");
  setText("richTextFontFamilyLabel", "richTextFontFamily");
  setText("richTextFontSizeLabel", "richTextFontSize");
  setText("colorSchemePresetsLabel", "colorSchemePresets");
  setText("colorSchemeHelp", "colorSchemeHelp");
  setText("headerColorColumnLabel", "headerColor");
  setText("bodyColorColumnLabel", "bodyColor");
  [
    ["noteColorRuleLabel", "note"],
    ["commentColorRuleLabel", "comment"],
    ["codeColorRuleLabel", "code"],
    ["tableColorRuleLabel", "table"],
    ["calculatorColorRuleLabel", "calculator"],
    ["tasksColorRuleLabel", "tasks"],
    ["scheduleColorRuleLabel", "schedule"],
    ["bookmarkColorRuleLabel", "bookmark"],
    ["progressColorRuleLabel", "progress"],
    ["timerColorRuleLabel", "timer"],
    ["reminderColorRuleLabel", "reminder"],
    ["imageColorRuleLabel", "image"],
    ["videoColorRuleLabel", "video"],
    ["audioColorRuleLabel", "audio"],
    ["fileColorRuleLabel", "file"],
    ["webColorRuleLabel", "web"],
    ["groupColorRuleLabel", "groups"]
  ].forEach(([id, key]) => setText(id, key));
  setText("snapToGridLabel", "snapToGrid");
  setText("toggleHotkeyLabel", "toggleHotkey");
  setText("lockHotkeyLabel", "lockHotkey");
  setText("settingsHelp", "hotkeyFormat");
  saveSettingsButton.textContent = t("save");
  closeSettingsButton.setAttribute("aria-label", t("closeSettings"));

  setSelectOptionText(themeModeInput, "system", "systemTheme");
  setSelectOptionText(themeModeInput, "light", "lightTheme");
  setSelectOptionText(themeModeInput, "dark", "darkTheme");
  setSelectOptionText(languageModeInput, "system", "systemLanguage");
  setSelectOptionText(languageModeInput, "ru", "russian");
  setSelectOptionText(languageModeInput, "en", "english");
  setSelectOptionText(timeFormatInput, "24h", "timeFormat24");
  setSelectOptionText(timeFormatInput, "12h", "timeFormat12");
  setSelectOptionText(windowModeInput, "normal", "windowModeNormal");
  setSelectOptionText(windowModeInput, "wallpaper-view", "windowModeWallpaperView");
  setSelectOptionText(windowModeInput, "widget-mode", "windowModeWidgetMode");
  setSelectOptionText(multiMonitorModeInput, "single", "multiMonitorModeSingle");
  setSelectOptionText(multiMonitorModeInput, "seamless", "multiMonitorModeSeamless");
  setSelectOptionText(multiMonitorModeInput, "workspace", "multiMonitorModeWorkspace");
  setSelectOptionText(toolbarWindowModeSelect, "normal", "windowModeNormal");
  setSelectOptionText(toolbarWindowModeSelect, "wallpaper-view", "windowModeWallpaperView");
  setSelectOptionText(toolbarWindowModeSelect, "widget-mode", "windowModeWidgetMode");
  renderMultiMonitorDisplayPicker({ preserveOpenFormInputs: isSettingsModalOpen() });
  if (modeEditButton) {
    modeEditButton.dataset.tooltip = t("windowModeNormal");
    modeEditButton.setAttribute("aria-label", t("windowModeNormal"));
    modeEditButton.title = t("windowModeNormal");
  }
  if (pickStoragePathButton) {
    pickStoragePathButton.textContent = t("storagePick");
  }
  if (openStoragePathButton) {
    openStoragePathButton.textContent = t("storageOpen");
  }
  if (openLogsButton) {
    openLogsButton.textContent = t("openLogsFolder");
  }
  if (exportBoardButton) {
    exportBoardButton.textContent = t("exportBoard");
  }
  if (importBoardButton) {
    importBoardButton.textContent = t("importBoard");
  }
  if (analyzeAssetsButton) {
    analyzeAssetsButton.textContent = t("analyzeAssets");
  }
  if (cleanupAssetsButton) {
    cleanupAssetsButton.textContent = t("cleanupAssets");
  }
  if (saveColorSchemeButton) {
    saveColorSchemeButton.textContent = t("saveColorScheme");
  }
  if (exportColorSchemeButton) {
    exportColorSchemeButton.textContent = t("exportColorScheme");
  }
  if (importThemeButton) {
    importThemeButton.textContent = t("importTheme");
  }
  if (importThemePackageButton) {
    importThemePackageButton.textContent = t("importThemePackage");
  }
  if (checkUpdatesButton) {
    checkUpdatesButton.textContent = t("checkUpdates");
  }
  if (installUpdateButton) {
    installUpdateButton.textContent = t("installUpdate");
  }
  if (updatesHelp) {
    updatesHelp.textContent = t("updatesHelp");
  }
  if (updatesVersion) {
    updatesVersion.textContent = t("updatesVersion", { version: appRuntimeConfig.appVersion || appUpdateState.currentVersion || "?" });
  }
  refreshBoardsManagerUi();
  renderQuickCreateSettings();
  renderToolbarCreateSettings();
  renderColorSchemePresets();
  refreshAssetManagerUi();
  refreshAppUpdateUi();
  refreshWallpaperModeUi();

  urlModalTitle.textContent = t(urlInput.dataset.mode === "edit" ? "editUrlTitle" : "urlTitle");
  closeUrlButton.setAttribute("aria-label", t("closeUrl"));
  cancelUrlButton.textContent = t("cancel");
  saveUrlButton.textContent = t(urlInput.dataset.mode === "edit" ? "save" : "add");
  const urlLabel = urlModal.querySelector(".settings-row span");
  if (urlLabel) {
    urlLabel.textContent = t("address");
  }

  searchTitle.textContent = t(searchState.mode === "pick" ? "searchPickTitle" : "searchTitle");
  searchQueryLabel.textContent = t("searchQuery");
  setText("searchScopeLabel", "searchScope");
  setSelectOptionText(searchScopeInput, "all", "searchScopeAll");
  setSelectOptionText(searchScopeInput, "title", "searchScopeTitle");
  setSelectOptionText(searchScopeInput, "tag", "searchScopeTag");
  searchHelp.textContent = t(searchState.mode === "pick" ? "searchPickHelp" : "searchHelp");
  searchInput.placeholder = t("searchPlaceholder");
  closeSearchButton.setAttribute("aria-label", t("cancel"));
  cancelSearchButton.textContent = t("cancel");

  if (metaTagsRow) {
    metaTagsRow.hidden = true;
  }
  if (metaTagsHelp) {
    metaTagsHelp.hidden = true;
  }
  metaModalTitle.textContent = t("linksPanelTitle");
  closeMetaButton.setAttribute("aria-label", t("cancel"));
  metaReferencesLabel.textContent = t("directLinks");
  addReferenceButton.textContent = t("addReference");
  metaBacklinksLabel.textContent = t("backlinks");
  metaLinkLabel.textContent = t("elementLink");
  copyMetaLinkButton.textContent = t("copyLink");
  cancelMetaButton.textContent = t("cancel");
  saveMetaButton.textContent = t("save");

  updateModeUi();
}

themeModeInput.addEventListener("change", () => {
  state.settings.themeMode = themeModeInput.value;
  applySystemTheme(currentSystemTheme);
  scheduleSave();
});

languageModeInput.addEventListener("change", () => {
  state.settings.languageMode = languageModeInput.value;
  applyTranslations();
  render();
  scheduleSave();
});

function hexToRgb(hex) {
  const normalized = /^#[0-9a-f]{6}$/i.test(hex) ? hex : "#2f7d57";
  const value = Number.parseInt(normalized.slice(1), 16);
  return {
    r: (value >> 16) & 255,
    g: (value >> 8) & 255,
    b: value & 255
  };
}

function mixRgb(base, accent, accentWeight) {
  const baseWeight = 1 - accentWeight;
  return {
    r: Math.round(base.r * baseWeight + accent.r * accentWeight),
    g: Math.round(base.g * baseWeight + accent.g * accentWeight),
    b: Math.round(base.b * baseWeight + accent.b * accentWeight)
  };
}

function rgbToHex(color) {
  const toHex = (value) => value.toString(16).padStart(2, "0");
  return `#${toHex(color.r)}${toHex(color.g)}${toHex(color.b)}`;
}

function getRelativeLuminance(color) {
  const toLinear = (channel) => {
    const value = channel / 255;
    return value <= 0.03928 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  };

  return 0.2126 * toLinear(color.r) + 0.7152 * toLinear(color.g) + 0.0722 * toLinear(color.b);
}

function getReadableTextColor(hex) {
  return getRelativeLuminance(hexToRgb(hex)) > 0.45 ? "#171916" : "#f6f8f3";
}

function getCardButtonPalette(bodyColor) {
  const body = hexToRgb(bodyColor);
  const isDark = getRelativeLuminance(body) <= 0.45;
  const mixTarget = hexToRgb(isDark ? "#ffffff" : "#000000");

  return {
    background: rgbToHex(mixRgb(body, mixTarget, isDark ? 0.18 : 0.06)),
    hoverBackground: rgbToHex(mixRgb(body, mixTarget, isDark ? 0.26 : 0.1)),
    border: rgba(mixRgb(body, mixTarget, isDark ? 0.34 : 0.2), isDark ? 0.72 : 0.32)
  };
}

function rgba(color, alpha) {
  return `rgba(${color.r}, ${color.g}, ${color.b}, ${alpha})`;
}

function applySystemTheme(theme = {}) {
  const accentColor = /^#[0-9a-f]{6}$/i.test(theme.accentColor || "") ? theme.accentColor : "#2f7d57";
  currentSystemTheme = {
    accentColor,
    isDark: Boolean(theme.isDark)
  };
  const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
  const themeMode = state.settings?.themeMode || defaultSettings.themeMode;
  const isDark = themeMode === "dark" || (themeMode === "system" && Boolean(theme.isDark || prefersDark));
  const accent = hexToRgb(accentColor);
  const root = document.documentElement;

  const palette = isDark
    ? {
      panel: rgba(mixRgb(hexToRgb("#171a1d"), accent, 0.16), 0.94),
      strong: rgbToHex(mixRgb(hexToRgb("#202326"), accent, 0.1)),
      border: rgba(mixRgb(hexToRgb("#5a6268"), accent, 0.42), 0.62),
      text: "#f3f5f2",
      muted: "#b9c0ba",
      line: "rgba(255, 255, 255, 0.16)"
    }
    : {
      panel: rgba(mixRgb(hexToRgb("#ffffff"), accent, 0.1), 0.9),
      strong: rgbToHex(mixRgb(hexToRgb("#ffffff"), accent, 0.04)),
      border: rgba(mixRgb(hexToRgb("#cfd4c7"), accent, 0.35), 0.9),
      text: "#171916",
      muted: "#62675d",
      line: "#cfd4c7"
    };

  document.documentElement.style.setProperty("--system-accent", accentColor);
  root.style.setProperty("--system-panel", palette.panel);
  root.style.setProperty("--system-panel-strong", palette.strong);
  root.style.setProperty("--system-panel-border", palette.border);
  root.style.setProperty("--system-text", palette.text);
  root.style.setProperty("--muted", palette.muted);
  root.style.setProperty("--line", palette.line);
  root.classList.toggle("system-dark", isDark);
}

async function loadSystemTheme() {
  if (!window.desktopBoard?.getSystemTheme) {
    return;
  }

  try {
    applySystemTheme(await window.desktopBoard.getSystemTheme());
  } catch (error) {
    console.error("Failed to load system theme:", error);
  }
}

window.matchMedia?.("(prefers-color-scheme: dark)").addEventListener("change", () => loadSystemTheme());

function applyDefaultColorsToInheritedCards() {
  state.cards.forEach((card) => {
    const colors = getDefaultCardColors(card.kind);
    if (!card.customHeaderColor) {
      card.headerColor = colors.header;
    }
    if (!card.customBodyColor) {
      card.bodyColor = colors.body;
    }
  });
}

function applyDefaultColorsToInheritedConnections() {
  const color = getConnectionColor();
  state.connections.forEach((connection) => {
    if (!connection.customColor) {
      connection.color = color;
    }
  });
}

function rebuildCardIndexes() {
  cardIndex = new Map(state.cards.map((card) => [card.id, card]));
  backlinkIndex = new Map();

  state.cards.forEach((card) => {
    normalizeReferenceIds(card.references, card.id)
      .forEach((referenceId) => {
        if (!cardIndex.has(referenceId)) {
          return;
        }
        const backlinks = backlinkIndex.get(referenceId) || [];
        backlinks.push(card.id);
        backlinkIndex.set(referenceId, backlinks);
      });
  });
}

function getCardById(cardId) {
  return cardIndex.get(cardId) || null;
}

function getReferencedCards(card) {
  return normalizeReferenceIds(card.references, card.id)
    .map((referenceId) => getCardById(referenceId))
    .filter(Boolean);
}

function getBacklinkIds(cardId) {
  return backlinkIndex.get(cardId) || [];
}

function getBacklinkCards(card) {
  return getBacklinkIds(card.id)
    .map((referenceId) => getCardById(referenceId))
    .filter(Boolean);
}

function getCardTextParts(card) {
  const parts = [card.title || ""];

  if (Array.isArray(card.tags)) {
    parts.push(...card.tags);
  }

  if ((card.kind === "tasks" || card.kind === "progress") && Array.isArray(card.tasks) && card.tasks.length) {
    parts.push(...card.tasks.map((task) => task.text || ""));
  } else if (card.kind === "schedule" && Array.isArray(card.scheduleEntries) && card.scheduleEntries.length) {
    parts.push(...card.scheduleEntries.map((entry) => scheduleEntryToSearchText(entry)));
  } else if (typeof card.text === "string") {
    parts.push(card.text);
  }

  if (card.kind === "bookmark" && Array.isArray(card.links)) {
    card.links.forEach((link) => {
      parts.push(link.title || "", link.url || "");
    });
  }

  if (card.kind === "web") {
    parts.push(card.url || card.src || "");
  }

  if (card.kind === "timer") {
    parts.push(String(card.timerDurationMinutes || defaultTimerDurationMinutes));
  }

  if (card.kind === "code") {
    parts.push(card.codeLanguage || "");
  }

  if (card.kind === "calculator") {
    parts.push(card.calculatorDisplay || "", card.calculatorExpression || "");
    normalizeCalculatorHistory(card.calculatorHistory).forEach((entry) => {
      parts.push(entry.expression, entry.result);
    });
  }

  if (card.kind === "table") {
    if (Array.isArray(card.tableColumns)) {
      parts.push(...card.tableColumns.map((column) => column.title || ""));
    }
    if (Array.isArray(card.tableRows)) {
      card.tableRows.forEach((row) => {
        if (Array.isArray(row.cells)) {
          parts.push(...row.cells);
        }
      });
    }
  }

  if (card.kind === "file") {
    parts.push(card.originalName || "", card.assetRelativePath || "");
  }

  return parts.filter(Boolean);
}

function getCardSearchText(card) {
  return getCardTextParts(card).join(" ").toLowerCase();
}

function getCardSearchSnippet(card) {
  const body = getCardTextParts(card).slice(1).join(" ").trim();
  if (!body) {
    return "";
  }

  return body.length > 96 ? `${body.slice(0, 96)}...` : body;
}

function searchCards(query = "", options = {}) {
  const normalizedQuery = String(query || "").trim().replace(/^#/, "").toLowerCase();
  const linkTargetId = parseCardLink(query).toLowerCase();
  const onlyIds = options.onlyIds ? new Set(options.onlyIds) : null;
  const excludeIds = options.excludeIds ? new Set(options.excludeIds) : new Set();
  const scope = ["all", "title", "tag"].includes(options.scope) ? options.scope : "all";

  const cards = state.cards.filter((card) => {
    if (onlyIds && !onlyIds.has(card.id)) {
      return false;
    }
    return !excludeIds.has(card.id);
  });

  const results = cards
    .map((card) => {
      if (!normalizedQuery && !linkTargetId) {
        return { card, score: 1 };
      }

      const title = String(card.title || "").toLowerCase();
      const tags = Array.isArray(card.tags) ? card.tags.map((tag) => tag.toLowerCase()) : [];
      const text = getCardSearchText(card);
      let score = 0;

      if (linkTargetId && card.id.toLowerCase() === linkTargetId) {
        score += 900;
      }
      if (scope === "all") {
        if (normalizedQuery && card.id.toLowerCase() === normalizedQuery) {
          score += 700;
        }
        if (normalizedQuery && card.id.toLowerCase().includes(normalizedQuery)) {
          score += 280;
        }
        if (normalizedQuery && title === normalizedQuery) {
          score += 240;
        }
        if (normalizedQuery && title.includes(normalizedQuery)) {
          score += 180;
        }
        if (normalizedQuery && tags.some((tag) => tag === normalizedQuery)) {
          score += 160;
        }
        if (normalizedQuery && tags.some((tag) => tag.includes(normalizedQuery))) {
          score += 120;
        }
        if (normalizedQuery && text.includes(normalizedQuery)) {
          score += 80;
        }
      } else if (scope === "title") {
        if (normalizedQuery && title === normalizedQuery) {
          score += 240;
        }
        if (normalizedQuery && title.includes(normalizedQuery)) {
          score += 180;
        }
      } else if (scope === "tag") {
        if (normalizedQuery && tags.some((tag) => tag === normalizedQuery)) {
          score += 200;
        }
        if (normalizedQuery && tags.some((tag) => tag.includes(normalizedQuery))) {
          score += 140;
        }
      }

      return { card, score };
    })
    .filter((item) => item.score > 0)
    .sort((left, right) => right.score - left.score || left.card.title.localeCompare(right.card.title));

  return normalizedQuery || linkTargetId ? results : results.sort((left, right) => left.card.title.localeCompare(right.card.title));
}

function centerViewportOnCard(card) {
  const centerX = card.x + card.width / 2;
  const centerY = card.y + card.height / 2;
  const displayCenter = getPrimaryDisplayClientCenter();
  state.viewport.x = Math.round(displayCenter.x - centerX * state.viewport.zoom);
  state.viewport.y = Math.round(displayCenter.y - centerY * state.viewport.zoom);
}

function focusCardById(cardId) {
  const card = getCardById(cardId);
  if (!card) {
    return false;
  }

  centerViewportOnCard(card);
  setSelectedCards([card.id]);
  render();
  return true;
}

async function copyText(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  const input = document.createElement("textarea");
  input.value = text;
  input.setAttribute("readonly", "");
  input.style.position = "fixed";
  input.style.opacity = "0";
  document.body.appendChild(input);
  input.select();
  document.execCommand("copy");
  input.remove();
  return true;
}

function snapValue(value) {
  return Math.round(value / gridSize) * gridSize;
}

function maybeSnap(value) {
  return state.settings.snapToGrid ? snapValue(value) : value;
}

function maybeSnapPoint(point) {
  return {
    x: maybeSnap(point.x),
    y: maybeSnap(point.y)
  };
}

function blurActiveEditor() {
  const activeElement = document.activeElement;
  if (!(activeElement instanceof HTMLElement)) {
    return;
  }
  if (activeElement.matches("input, textarea, select, [contenteditable='true']")) {
    activeElement.blur();
  }
  hideRichTextToolbar();
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function plainTextToRichTextHtml(value = "") {
  const text = String(value ?? "").replace(/\r\n?/g, "\n");
  if (!text) {
    return "";
  }
  return text.split("\n").map((line) => escapeHtml(line)).join("<br>");
}

function plainTextToDefaultRichTextHtml(value = "") {
  const text = String(value ?? "").replace(/\r\n?/g, "\n");
  if (!text) {
    return "";
  }

  const fontFamily = escapeHtml(getRichTextFontFamilyCssValue(state.settings.richTextFontFamily));
  const fontSize = normalizeRichTextDefaultFontSize(state.settings.richTextFontSize);
  const style = `font-family: ${fontFamily}; font-size: ${fontSize}px;`;
  return text
    .split("\n")
    .map((line) => `<span style="${style}">${escapeHtml(line)}</span>`)
    .join("<br>");
}

function normalizeRichTextFontFamily(value = "") {
  const candidates = String(value || "")
    .split(",")
    .map((item) => item.replaceAll('"', "").replaceAll("'", "").trim().toLowerCase())
    .filter(Boolean);
  return richTextFontFamilies.find((font) => candidates.includes(font.toLowerCase())) || "";
}

function normalizeRichTextFontSize(value = "") {
  const number = Number(String(value || "").replace(/[^\d.]/g, ""));
  if (!Number.isFinite(number)) {
    return "";
  }
  const clamped = clamp(number, richTextFontSizes[0], richTextFontSizes[richTextFontSizes.length - 1]);
  const nearest = richTextFontSizes.reduce((best, item) => (
    Math.abs(item - clamped) < Math.abs(best - clamped) ? item : best
  ), richTextFontSizes[0]);
  return `${nearest}px`;
}

function normalizeRichTextDefaultFontFamily(value = "") {
  return normalizeRichTextFontFamily(value) || defaultRichTextFontFamily;
}

function normalizeRichTextDefaultFontSize(value = "") {
  const normalized = normalizeRichTextFontSize(value);
  return normalized ? Number(normalized.replace("px", "")) : defaultRichTextFontSize;
}

function getRichTextFontFamilyCssValue(value = defaultRichTextFontFamily) {
  const font = normalizeRichTextDefaultFontFamily(value).replaceAll('"', "").replaceAll("\\", "");
  return `"${font}", sans-serif`;
}

function normalizeRichTextColor(value = "") {
  const option = new Option();
  option.style.color = "";
  option.style.color = String(value || "").trim();
  return option.style.color || "";
}

function richTextColorToHex(value = "") {
  const color = normalizeRichTextColor(value);
  if (!color) {
    return "";
  }

  const match = color.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/i);
  if (!match) {
    return color.startsWith("#") && color.length === 7 ? color.toLowerCase() : "";
  }

  return `#${[match[1], match[2], match[3]]
    .map((part) => clamp(Number(part), 0, 255).toString(16).padStart(2, "0"))
    .join("")}`;
}

function appendSanitizedRichTextChildren(source, target) {
  Array.from(source.childNodes).forEach((child) => {
    target.appendChild(sanitizeRichTextNode(child));
  });
}

function applySanitizedRichTextStyle(source, target) {
  const color = normalizeRichTextColor(source.getAttribute("color") || source.style.color);
  const family = normalizeRichTextFontFamily(source.getAttribute("face") || source.style.fontFamily);
  const sizeFromFontTag = source.getAttribute("size")
    ? {
        "1": "12px",
        "2": "14px",
        "3": "16px",
        "4": "18px",
        "5": "24px",
        "6": "32px",
        "7": "48px"
      }[source.getAttribute("size")]
    : "";
  const size = normalizeRichTextFontSize(source.style.fontSize || sizeFromFontTag);
  const fontWeight = String(source.style.fontWeight || "").toLowerCase();
  const fontStyle = String(source.style.fontStyle || "").toLowerCase();
  const textDecoration = String(source.style.textDecoration || source.style.textDecorationLine || "").toLowerCase();

  if (color) {
    target.style.color = color;
  }
  if (family) {
    target.style.fontFamily = family;
  }
  if (size) {
    target.style.fontSize = size;
  }
  if (fontWeight === "bold" || Number(fontWeight) >= 600) {
    target.style.fontWeight = "700";
  }
  if (fontStyle === "italic") {
    target.style.fontStyle = "italic";
  }
  if (textDecoration.includes("underline")) {
    target.style.textDecoration = "underline";
  }
}

function sanitizeRichTextNode(node) {
  if (node.nodeType === Node.TEXT_NODE) {
    return document.createTextNode(node.textContent || "");
  }

  if (node.nodeType !== Node.ELEMENT_NODE) {
    return document.createDocumentFragment();
  }

  const tag = node.tagName.toUpperCase();
  if (tag === "BR") {
    return document.createElement("br");
  }

  if (tag === "B" || tag === "STRONG" || tag === "I" || tag === "EM" || tag === "U") {
    const clean = document.createElement(tag.toLowerCase());
    appendSanitizedRichTextChildren(node, clean);
    return clean;
  }

  if (tag === "SPAN" || tag === "FONT") {
    const clean = document.createElement("span");
    applySanitizedRichTextStyle(node, clean);
    appendSanitizedRichTextChildren(node, clean);
    return clean;
  }

  if (tag === "DIV" || tag === "P") {
    const clean = document.createElement("div");
    appendSanitizedRichTextChildren(node, clean);
    return clean;
  }

  const fragment = document.createDocumentFragment();
  appendSanitizedRichTextChildren(node, fragment);
  return fragment;
}

function normalizeRichTextHtml(html = "", fallbackText = "") {
  const source = String(html || "").trim()
    ? String(html || "")
    : plainTextToRichTextHtml(fallbackText);
  if (!source) {
    return "";
  }

  const template = document.createElement("template");
  template.innerHTML = source;
  const output = document.createElement("div");
  appendSanitizedRichTextChildren(template.content, output);
  return output.innerHTML;
}

function richTextHtmlToPlainText(html = "") {
  const normalized = normalizeRichTextHtml(html);
  if (!normalized) {
    return "";
  }
  const host = document.createElement("div");
  host.innerHTML = normalized;
  return (host.innerText || host.textContent || "").replace(/\u00a0/g, " ").trimEnd();
}

function hasRichTextMarkup(value = "") {
  return /<\/?[a-z][\s\S]*>/i.test(String(value || ""));
}

function getSelectionRangeInsideRichTextEditor(editor = activeRichTextEditor) {
  if (!editor) {
    return null;
  }
  const selection = window.getSelection();
  if (!selection || !selection.rangeCount) {
    return null;
  }
  const range = selection.getRangeAt(0);
  const container = range.commonAncestorContainer;
  const containerElement = container.nodeType === Node.ELEMENT_NODE ? container : container.parentElement;
  return containerElement && editor.contains(containerElement) ? range : null;
}

function rememberRichTextSelection() {
  const range = getSelectionRangeInsideRichTextEditor();
  activeRichTextSelectionRange = range ? range.cloneRange() : null;
}

function restoreRichTextSelection() {
  if (!activeRichTextEditor || !activeRichTextSelectionRange) {
    return false;
  }
  activeRichTextEditor.focus();
  const selection = window.getSelection();
  if (!selection) {
    return false;
  }
  selection.removeAllRanges();
  selection.addRange(activeRichTextSelectionRange);
  return true;
}

function isRichTextToolbarActive() {
  return Boolean(richTextToolbar && document.activeElement instanceof HTMLElement && richTextToolbar.contains(document.activeElement));
}

function getRichTextToolbar() {
  if (richTextToolbar) {
    return richTextToolbar;
  }

  const toolbar = document.createElement("div");
  toolbar.className = "rich-text-toolbar";
  toolbar.hidden = true;
  toolbar.addEventListener("pointerdown", (event) => event.stopPropagation());

  const createButton = (label, titleKey, command, value = null) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "rich-text-toolbar-button";
    button.textContent = label;
    button.title = t(titleKey);
    button.setAttribute("aria-label", t(titleKey));
    button.addEventListener("pointerdown", (event) => event.preventDefault());
    button.addEventListener("click", () => applyRichTextCommand(command, value));
    return button;
  };

  const fontSelect = document.createElement("select");
  fontSelect.className = "rich-text-toolbar-select";
  fontSelect.title = t("formatFontFamily");
  const mixedFontOption = document.createElement("option");
  mixedFontOption.value = "";
  mixedFontOption.textContent = "-";
  mixedFontOption.disabled = true;
  fontSelect.appendChild(mixedFontOption);
  richTextFontFamilies.forEach((font) => {
    const option = document.createElement("option");
    option.value = font;
    option.textContent = font;
    fontSelect.appendChild(option);
  });
  fontSelect.value = normalizeRichTextDefaultFontFamily(state.settings.richTextFontFamily);
  fontSelect.addEventListener("change", () => applyRichTextCommand("fontName", fontSelect.value));

  const sizeSelect = document.createElement("select");
  sizeSelect.className = "rich-text-toolbar-size";
  sizeSelect.title = t("formatFontSize");
  const mixedSizeOption = document.createElement("option");
  mixedSizeOption.value = "";
  mixedSizeOption.textContent = "-";
  mixedSizeOption.disabled = true;
  sizeSelect.appendChild(mixedSizeOption);
  richTextFontSizes.forEach((size) => {
    const option = document.createElement("option");
    option.value = String(size);
    option.textContent = String(size);
    sizeSelect.appendChild(option);
  });
  sizeSelect.value = String(normalizeRichTextDefaultFontSize(state.settings.richTextFontSize));
  sizeSelect.addEventListener("change", () => applyRichTextFontSize(sizeSelect.value));

  const colorInput = document.createElement("input");
  colorInput.type = "color";
  colorInput.className = "rich-text-toolbar-color";
  colorInput.title = t("formatTextColor");
  colorInput.setAttribute("aria-label", t("formatTextColor"));
  colorInput.value = "#171916";
  colorInput.addEventListener("input", () => applyRichTextCommand("foreColor", colorInput.value));

  toolbar.append(
    createButton("B", "formatBold", "bold"),
    createButton("I", "formatItalic", "italic"),
    createButton("U", "formatUnderline", "underline"),
    fontSelect,
    sizeSelect,
    colorInput,
    createButton("Tx", "formatClear", "removeFormat")
  );
  document.body.appendChild(toolbar);
  richTextToolbar = toolbar;
  return toolbar;
}

function hideRichTextToolbar() {
  if (richTextToolbar) {
    richTextToolbar.hidden = true;
    resetRichTextToolbarControls();
  }
}

function resetRichTextToolbarControls() {
  if (!richTextToolbar) {
    return;
  }

  const buttons = richTextToolbar.querySelectorAll(".rich-text-toolbar-button");
  buttons.forEach((button) => button.classList.remove("is-active"));

  const fontSelect = richTextToolbar.querySelector(".rich-text-toolbar-select");
  const sizeSelect = richTextToolbar.querySelector(".rich-text-toolbar-size");
  const colorInput = richTextToolbar.querySelector(".rich-text-toolbar-color");
  if (fontSelect) {
    fontSelect.value = normalizeRichTextDefaultFontFamily(state.settings.richTextFontFamily);
  }
  if (sizeSelect) {
    sizeSelect.value = String(normalizeRichTextDefaultFontSize(state.settings.richTextFontSize));
  }
  if (colorInput) {
    colorInput.value = richTextColorToHex(getComputedStyle(document.documentElement).getPropertyValue("--system-text")) || "#171916";
    colorInput.classList.remove("is-mixed");
  }
}

function positionRichTextToolbar(range) {
  if (!activeRichTextEditor || state.locked) {
    hideRichTextToolbar();
    return;
  }

  const toolbar = getRichTextToolbar();
  toolbar.hidden = false;
  const editorRect = activeRichTextEditor.getBoundingClientRect();
  const selectionRect = range?.getBoundingClientRect?.();
  const rect = selectionRect && (selectionRect.width || selectionRect.height) ? selectionRect : editorRect;
  const toolbarRect = toolbar.getBoundingClientRect();
  const left = clamp(rect.left + rect.width / 2 - toolbarRect.width / 2, 8, Math.max(8, window.innerWidth - toolbarRect.width - 8));
  const top = rect.top - toolbarRect.height - 8 < 8 ? rect.bottom + 8 : rect.top - toolbarRect.height - 8;
  toolbar.style.left = `${Math.round(left)}px`;
  toolbar.style.top = `${Math.round(clamp(top, 8, Math.max(8, window.innerHeight - toolbarRect.height - 8)))}px`;
  updateRichTextToolbarState();
}

function getRichTextStyleFromNode(node) {
  const element = node instanceof Element
    ? node
    : node?.parentElement;
  if (!element || !activeRichTextEditor?.contains(element)) {
    return null;
  }

  const style = getComputedStyle(element);
  const weight = String(style.fontWeight || "").toLowerCase();
  const textDecoration = String(style.textDecorationLine || style.textDecoration || "").toLowerCase();
  return {
    fontFamily: normalizeRichTextFontFamily(style.fontFamily) || normalizeRichTextDefaultFontFamily(state.settings.richTextFontFamily),
    fontSize: normalizeRichTextFontSize(style.fontSize) || `${normalizeRichTextDefaultFontSize(state.settings.richTextFontSize)}px`,
    color: richTextColorToHex(style.color) || "#171916",
    bold: weight === "bold" || Number(weight) >= 600,
    italic: style.fontStyle === "italic",
    underline: textDecoration.includes("underline")
  };
}

function getTextNodesInRichTextRange(range) {
  if (!range || !activeRichTextEditor) {
    return [];
  }

  const nodes = [];
  const walker = document.createTreeWalker(activeRichTextEditor, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (!(node.textContent || "").trim()) {
      continue;
    }
    try {
      if (range.intersectsNode(node)) {
        nodes.push(node);
      }
    } catch {
      // Ignore detached transient nodes.
    }
  }
  return nodes;
}

function getUniformRichTextValue(values) {
  const normalizedValues = values.filter((value) => value !== null && typeof value !== "undefined" && value !== "");
  if (!normalizedValues.length) {
    return "";
  }

  return normalizedValues.every((value) => value === normalizedValues[0]) ? normalizedValues[0] : "";
}

function getRichTextSelectionStyle(range) {
  if (!range || !activeRichTextEditor) {
    return null;
  }

  if (range.collapsed) {
    return getRichTextStyleFromNode(range.startContainer);
  }

  const styles = getTextNodesInRichTextRange(range)
    .map((node) => getRichTextStyleFromNode(node))
    .filter(Boolean);
  if (!styles.length) {
    return getRichTextStyleFromNode(range.startContainer);
  }

  return {
    fontFamily: getUniformRichTextValue(styles.map((item) => item.fontFamily)),
    fontSize: getUniformRichTextValue(styles.map((item) => item.fontSize)),
    color: getUniformRichTextValue(styles.map((item) => item.color)),
    bold: getUniformRichTextValue(styles.map((item) => item.bold)),
    italic: getUniformRichTextValue(styles.map((item) => item.italic)),
    underline: getUniformRichTextValue(styles.map((item) => item.underline))
  };
}

function updateRichTextToolbarState() {
  const toolbar = getRichTextToolbar();
  const buttons = toolbar.querySelectorAll(".rich-text-toolbar-button");
  const style = getRichTextSelectionStyle(activeRichTextSelectionRange || getSelectionRangeInsideRichTextEditor());
  const fontSelect = toolbar.querySelector(".rich-text-toolbar-select");
  const sizeSelect = toolbar.querySelector(".rich-text-toolbar-size");
  const colorInput = toolbar.querySelector(".rich-text-toolbar-color");

  buttons[0]?.classList.toggle("is-active", style?.bold === true);
  buttons[1]?.classList.toggle("is-active", style?.italic === true);
  buttons[2]?.classList.toggle("is-active", style?.underline === true);

  if (fontSelect) {
    fontSelect.value = style?.fontFamily || "";
  }
  if (sizeSelect) {
    sizeSelect.value = style?.fontSize ? String(Number(style.fontSize.replace("px", ""))) : "";
  }
  if (colorInput) {
    if (style?.color) {
      colorInput.value = style.color;
      colorInput.classList.remove("is-mixed");
    } else {
      colorInput.value = richTextColorToHex(getComputedStyle(document.documentElement).getPropertyValue("--system-text")) || "#171916";
      colorInput.classList.add("is-mixed");
    }
  }
}

function syncRichTextCardFromEditor(card, editor, options = {}) {
  if (!card || !editor) {
    return;
  }
  const html = normalizeRichTextHtml(editor.innerHTML);
  card.textHtml = html;
  card.text = richTextHtmlToPlainText(html);
  if (card.kind === "comment" && options.touch !== false) {
    card.commentUpdatedAt = Date.now();
  }
}

function syncRichTextTargetFromEditor(editor, setter) {
  if (!editor || typeof setter !== "function") {
    return;
  }
  const html = normalizeRichTextHtml(editor.innerHTML);
  setter(html, richTextHtmlToPlainText(html));
}

function syncActiveRichTextTarget(options = {}) {
  if (!activeRichTextEditor) {
    return;
  }
  if (activeRichTextTarget?.sync) {
    activeRichTextTarget.sync(activeRichTextEditor, options);
    return;
  }
  syncRichTextCardFromEditor(activeRichTextCard, activeRichTextEditor, options);
}

function sanitizeRichTextEditor(editor) {
  if (!editor) {
    return;
  }
  const html = normalizeRichTextHtml(editor.innerHTML);
  if (editor.innerHTML !== html) {
    editor.innerHTML = html;
  }
}

function setRichTextCaretToEnd(editor) {
  if (!editor) {
    return;
  }

  editor.focus();
  const range = document.createRange();
  range.selectNodeContents(editor);
  range.collapse(false);
  const selection = window.getSelection();
  if (!selection) {
    return;
  }

  selection.removeAllRanges();
  selection.addRange(range);
  activeRichTextSelectionRange = range.cloneRange();
}

function applyRichTextClearFormat() {
  if (state.locked || !activeRichTextTarget || !activeRichTextEditor) {
    return;
  }
  if (!restoreRichTextSelection()) {
    return;
  }

  const selection = window.getSelection();
  const range = selection && selection.rangeCount ? selection.getRangeAt(0) : null;
  if (!range || !activeRichTextEditor.contains(range.commonAncestorContainer)) {
    return;
  }

  if (range.collapsed) {
    const text = (activeRichTextEditor.innerText || activeRichTextEditor.textContent || "")
      .replace(/\u00a0/g, " ")
      .trimEnd();
    activeRichTextEditor.innerHTML = plainTextToDefaultRichTextHtml(text);
    setRichTextCaretToEnd(activeRichTextEditor);
  } else {
    const text = range.toString();
    document.execCommand("removeFormat", false, null);
    document.execCommand("insertHTML", false, plainTextToDefaultRichTextHtml(text));
    rememberRichTextSelection();
  }

  syncActiveRichTextTarget();
  positionRichTextToolbar(activeRichTextSelectionRange);
  scheduleSave();
}

function applyRichTextCommand(command, value = null) {
  if (state.locked || !activeRichTextTarget || !activeRichTextEditor) {
    return;
  }
  if (command === "removeFormat") {
    applyRichTextClearFormat();
    return;
  }
  if (!restoreRichTextSelection()) {
    return;
  }

  document.execCommand("styleWithCSS", false, true);
  document.execCommand(command, false, value);
  rememberRichTextSelection();
  syncActiveRichTextTarget();
  positionRichTextToolbar(activeRichTextSelectionRange);
  scheduleSave();
}

function applyRichTextFontSize(value) {
  if (state.locked || !activeRichTextTarget || !activeRichTextEditor || !restoreRichTextSelection()) {
    return;
  }

  const size = normalizeRichTextFontSize(`${value}px`);
  if (!size) {
    return;
  }
  document.execCommand("styleWithCSS", false, false);
  document.execCommand("fontSize", false, "7");
  activeRichTextEditor.querySelectorAll("font[size='7']").forEach((font) => {
    font.removeAttribute("size");
    font.style.fontSize = size;
  });
  rememberRichTextSelection();
  syncActiveRichTextTarget();
  positionRichTextToolbar(activeRichTextSelectionRange);
  scheduleSave();
}

function insertRichTextPlainText(text) {
  const html = plainTextToRichTextHtml(text);
  document.execCommand("insertHTML", false, html);
}

function updateRichTextToolbarFromSelection() {
  const range = getSelectionRangeInsideRichTextEditor();
  if (range) {
    activeRichTextSelectionRange = range.cloneRange();
    positionRichTextToolbar(range);
    return;
  }

  if (isRichTextToolbarActive()) {
    positionRichTextToolbar(activeRichTextSelectionRange);
    return;
  }

  if (activeRichTextEditor && document.activeElement === activeRichTextEditor) {
    positionRichTextToolbar(null);
    return;
  }

  activeRichTextSelectionRange = null;
  hideRichTextToolbar();
}

function autoGrowTextarea(textarea, minHeight = 28) {
  const resize = () => {
    textarea.style.height = "0px";
    textarea.style.height = `${Math.max(textarea.scrollHeight, minHeight)}px`;
  };
  resize();
  requestAnimationFrame(resize);
  return resize;
}

function growCardHeight(card, delta) {
  card.height = Math.max(minCardHeight, Math.round(card.height + delta));
}

function syncAutoSizedFields(cardElement) {
  if (!cardElement) {
    return;
  }

  cardElement.querySelectorAll(".task-text-input, .schedule-note-input, .table-cell-input").forEach((field) => {
    const minHeight = field.classList.contains("schedule-note-input")
      ? 40
      : field.classList.contains("table-cell-input")
        ? 34
        : 28;
    field.style.height = "0px";
    field.style.height = `${Math.max(field.scrollHeight, minHeight)}px`;
  });
}

function syncCardElementLayout(cardElement) {
  if (!cardElement) {
    return;
  }

  syncAutoSizedFields(cardElement);
  if (cardElement.dataset.kind === "web") {
    syncWebCardElement(cardElement);
  }
}

function screenToWorld(clientX, clientY) {
  const layout = getActiveDisplayLayout();
  return {
    x: (clientX - layout.primaryBounds.x - state.viewport.x) / state.viewport.zoom,
    y: (clientY - layout.primaryBounds.y - state.viewport.y) / state.viewport.zoom
  };
}

function getVisibleWorldCenter() {
  const displayCenter = getPrimaryDisplayClientCenter();
  return screenToWorld(displayCenter.x, displayCenter.y);
}

function isBrandLogoAnimationAllowed() {
  return Boolean(
    brandMark
    && !isOverlayWindow
    && !document.hidden
    && !document.body.classList.contains("is-wallpaper-passive")
    && !document.body.classList.contains("is-widget-mode")
  );
}

function resetBrandLogoAnimation() {
  if (brandLogoResetTimer) {
    window.clearTimeout(brandLogoResetTimer);
    brandLogoResetTimer = null;
  }

  brandLogoAnimationActive = false;
  if (brandMark) {
    brandMark.classList.remove("is-animating");
    if (!brandMark.src.endsWith(brandLogoSrc)) {
      brandMark.src = brandLogoSrc;
    }
  }
}

function pickBrandLogoAnimation() {
  if (brandLogoAnimations.length <= 1) {
    return brandLogoAnimations[0] || null;
  }

  const availableAnimations = brandLogoAnimations.filter((animation) => animation.src !== lastBrandLogoAnimationSrc);
  return availableAnimations[Math.floor(Math.random() * availableAnimations.length)] || brandLogoAnimations[0];
}

function playBrandLogoAnimation() {
  if (!isBrandLogoAnimationAllowed() || brandLogoAnimationActive) {
    return;
  }

  const animation = pickBrandLogoAnimation();
  if (!animation) {
    return;
  }

  brandLogoAnimationActive = true;
  lastBrandLogoAnimationSrc = animation.src;
  brandMark.classList.add("is-animating");
  brandMark.src = `${animation.src}?play=${Date.now()}`;

  brandLogoResetTimer = window.setTimeout(() => {
    resetBrandLogoAnimation();
  }, (animation.loopMs * brandLogoAnimationLoops) + 120);
}

function syncBrandLogoAnimationState() {
  if (!isBrandLogoAnimationAllowed() && brandLogoAnimationActive) {
    resetBrandLogoAnimation();
  }
}

function startBrandLogoAnimationTicker() {
  if (!brandMark || isOverlayWindow || brandLogoAnimationTimer) {
    return;
  }

  brandLogoAnimations.forEach((animation) => {
    const image = new Image();
    image.src = animation.src;
  });

  brandLogoAnimationTimer = window.setInterval(playBrandLogoAnimation, brandLogoAnimationIntervalMs);
}

function updateModeUi() {
  const boardModeLabel = connectionMode
    ? (connectionDraft ? t("modeConnectionEnd") : t("modeConnectionStart"))
    : (state.locked ? t("modeView") : t("modeEdit"));
  const windowModeLabel = windowModeState.currentMode !== "normal"
    ? t(getCurrentWindowModeLabelKey())
    : "";

  document.body.classList.toggle("is-locked", state.locked);
  document.body.classList.toggle("is-wallpaper-view", windowModeState.currentMode === "wallpaper-view");
  document.body.classList.toggle("is-wallpaper-passive", windowModeState.currentMode === "wallpaper-view" && !canEditInWallpaperView());
  document.body.classList.toggle("is-widget-mode", windowModeState.currentMode === "widget-mode");
  document.body.classList.toggle("is-widget-mode-overlay", isOverlayWindow && windowModeState.currentMode === "widget-mode");
  const isLocalWorkspaceSurface = windowModeState.windowRole === "workspace"
    || windowModeState.windowRole === "workspace-overlay"
    || (windowModeState.windowRole === "main" && windowModeState.multiWindowWorkspaceActive);
  document.body.classList.toggle("is-workspace-window", isLocalWorkspaceSurface);
  document.body.classList.toggle(
    "is-overlay-surface-transparent",
    isOverlayWindow && (
      windowModeState.currentMode === "widget-mode"
      || (windowModeState.currentMode === "wallpaper-view" && windowModeState.overlayVisible)
    )
  );
  document.body.classList.toggle(
    "is-underlay-cards-hidden",
    !isOverlayWindow && (
      windowModeState.currentMode === "widget-mode"
      || (windowModeState.currentMode === "wallpaper-view" && windowModeState.overlayVisible)
    )
  );
  board.classList.toggle("is-connecting", connectionMode);
  addConnectionButton.classList.toggle("is-active", connectionMode);
  addConnectionButton.dataset.tooltip = t(connectionMode ? "cancelConnection" : "connection");
  addConnectionButton.setAttribute("aria-label", t(connectionMode ? "cancelConnection" : "addConnection"));
  modeLabel.textContent = windowModeLabel ? `${windowModeLabel} - ${boardModeLabel}` : boardModeLabel;
  lockButton.dataset.tooltip = t(state.locked ? "edit" : "lock");
  lockButton.setAttribute("aria-label", t(state.locked ? "edit" : "lock"));
  refreshToolbarWindowModeUi();
  syncBrandLogoAnimationState();
}

function setLocked(locked, options = {}) {
  const shouldReturnToWallpaperView = locked && canEditInWallpaperView();

  if (windowModeState.currentMode === "wallpaper-view" && !canEditInWallpaperView()) {
    locked = true;
  }

  if (locked) {
    setConnectionMode(false);
  }

  state.locked = locked;
  if (locked) {
    hideRichTextToolbar();
  }
  document.body.classList.toggle("is-locked", locked);
  updateModeUi();
  workspace.querySelectorAll("textarea, input, select, [contenteditable]").forEach((field) => {
    if (field.matches("[contenteditable]")) {
      field.contentEditable = locked ? "false" : "true";
      return;
    }
    const inputType = "type" in field ? field.type : "";
    if (field.tagName === "SELECT" || inputType === "checkbox" || inputType === "color" || inputType === "range" || inputType === "time") {
      field.disabled = locked;
    } else {
      field.readOnly = locked;
    }
  });

  if (shouldReturnToWallpaperView) {
    if (options.persist !== false) {
      void saveState({ skipHistory: true }).finally(() => {
        window.desktopBoard?.hideWindow?.();
      });
    } else {
      void window.desktopBoard?.hideWindow?.();
    }
    return;
  }

  if (options.persist !== false) {
    scheduleSave();
  }
}

function canEditInWallpaperView() {
  return isOverlayWindow
    && windowModeState.currentMode === "wallpaper-view"
    && windowModeState.interactionEnabled === true
    && windowModeState.overlayVisible === true;
}

function isWidgetModeActive() {
  return isOverlayWindow
    && windowModeState.currentMode === "widget-mode"
    && windowModeState.overlayVisible === true;
}

function shouldRenderLiveWebContent() {
  if (!window.desktopBoard || isOverlayWindow) {
    return true;
  }

  return !(
    windowModeState.currentMode === "widget-mode"
    || (windowModeState.currentMode === "wallpaper-view" && windowModeState.overlayVisible === true)
  );
}

function shouldUseNativeWebCards() {
  return Boolean(window.desktopBoard?.syncWebCards);
}

function getLiveWebContentModeKey() {
  return shouldRenderLiveWebContent() ? "live" : "paused";
}

function refreshWebContentRenderForWindowMode() {
  const nextKey = getLiveWebContentModeKey();
  if (!liveWebContentModeKey) {
    liveWebContentModeKey = nextKey;
    return;
  }

  if (nextKey !== liveWebContentModeKey && state.cards.some((card) => card.kind === "web")) {
    liveWebContentModeKey = nextKey;
    render();
    return;
  }

  liveWebContentModeKey = nextKey;
  requestAnimationFrame(syncAllWebCardElements);
}

const widgetInteractiveTargetSelector = ".card, .context-menu, .mode-edit-button, .rich-text-toolbar";

function isWidgetInteractiveTarget(target) {
  if (!(target instanceof Element)) {
    return false;
  }

  return Boolean(target.closest(widgetInteractiveTargetSelector));
}

function shouldWidgetOverlayCapturePointer() {
  if (!isWidgetModeActive()) {
    return false;
  }

  if (activeAction) {
    return true;
  }

  if (!contextMenu.hidden) {
    return true;
  }

  const activeElement = document.activeElement;
  return activeElement instanceof Element && Boolean(activeElement.closest(widgetInteractiveTargetSelector));
}

async function syncWidgetModeInteractivity(target = widgetHoverTarget, options = {}) {
  if (!window.desktopBoard?.setWidgetModeInteractivity) {
    return false;
  }

  if (!isWidgetModeActive()) {
    if (widgetInteractionState.interactive || widgetInteractionState.captured) {
      widgetInteractionState = { interactive: false, captured: false };
      await window.desktopBoard.setWidgetModeInteractivity(widgetInteractionState);
    }
    return false;
  }

  const nextState = {
    interactive: shouldWidgetOverlayCapturePointer() || isWidgetInteractiveTarget(target),
    captured: shouldWidgetOverlayCapturePointer()
  };

  if (
    nextState.interactive === widgetInteractionState.interactive
    && nextState.captured === widgetInteractionState.captured
    && options.force !== true
  ) {
    return nextState.interactive;
  }

  widgetInteractionState = nextState;
  await window.desktopBoard.setWidgetModeInteractivity({
    ...nextState,
    focus: options.focus === true
  });
  return nextState.interactive;
}

function ensureEditMode() {
  if (windowModeState.currentMode === "wallpaper-view" && !canEditInWallpaperView()) {
    setLocked(true, { persist: false });
    return;
  }

  if (state.locked) {
    setLocked(false);
  }
}

function render() {
  webResizeObserver?.disconnect();
  workspace.innerHTML = "";
  const existingIds = new Set(state.cards.map((card) => card.id));
  selectedIds = new Set([...selectedIds].filter((id) => existingIds.has(id)));
  if (selectedConnectionId && !state.connections.some((connection) => connection.id === selectedConnectionId)) {
    selectedConnectionId = null;
  }
  document.body.classList.toggle("is-locked", state.locked);
  updateModeUi();
  applyViewport();
  applySettings();
  rebuildCardIndexes();
  enforceGroupStackHierarchy();
  syncAllAttachedComments();
  renderConnections();

  state.cards
    .slice()
    .sort(compareCardsForRender)
    .forEach((card) => {
      workspace.appendChild(renderCard(card));
    });

  refreshVisibleTimerCards();
  refreshVisibleReminderCards();
  liveWebContentModeKey = getLiveWebContentModeKey();
  requestAnimationFrame(syncAllWebCardElements);
}

function getCardLayerBase(card) {
  return card?.kind === "group" ? 0 : 10000;
}

function getCardLayerKey(card) {
  return card?.kind === "group" ? "group" : "card";
}

function getCardStackOrder(card) {
  const stackOrder = Number(card?.stackOrder);
  return Number.isFinite(stackOrder) ? stackOrder : 0;
}

function getCardLayer(card) {
  return getCardLayerBase(card) + getCardStackOrder(card);
}

function compareCardsForRender(a, b) {
  const layerDelta = getCardLayer(a) - getCardLayer(b);
  if (layerDelta !== 0) {
    return layerDelta;
  }

  return state.cards.indexOf(a) - state.cards.indexOf(b);
}

function compareStackBundleCards(a, b) {
  if (a?.kind === "group" && b?.kind === "group") {
    if (isCardInsideGroup(b, a)) {
      return -1;
    }
    if (isCardInsideGroup(a, b)) {
      return 1;
    }
  }

  return compareCardsForRender(a, b);
}

function enforceGroupStackHierarchy(cards = state.cards) {
  const groups = cards.filter((card) => card.kind === "group");
  if (groups.length < 2) {
    return false;
  }

  let changed = false;
  for (let pass = 0; pass < groups.length; pass += 1) {
    let passChanged = false;
    groups.forEach((parent) => {
      groups.forEach((child) => {
        if (parent.id === child.id || !isCardInsideGroup(child, parent)) {
          return;
        }

        const parentOrder = getCardStackOrder(parent);
        if (getCardStackOrder(child) > parentOrder) {
          return;
        }

        child.stackOrder = parentOrder + 1;
        changed = true;
        passChanged = true;
      });
    });

    if (!passChanged) {
      break;
    }
  }

  return changed;
}

function normalizeCardStackOrders(cards = []) {
  const nextOrders = new Map();
  cards.forEach((card) => {
    const stackOrder = Number(card?.stackOrder);
    if (!Number.isFinite(stackOrder)) {
      return;
    }

    const key = getCardLayerKey(card);
    nextOrders.set(key, Math.max(nextOrders.get(key) ?? 0, stackOrder + 1));
  });

  const normalizedCards = cards.map((card) => {
    const stackOrder = Number(card?.stackOrder);
    if (Number.isFinite(stackOrder)) {
      return {
        ...card,
        stackOrder
      };
    }

    const key = getCardLayerKey(card);
    const nextOrder = nextOrders.get(key) ?? 0;
    nextOrders.set(key, nextOrder + 1);
    return {
      ...card,
      stackOrder: nextOrder
    };
  });

  enforceGroupStackHierarchy(normalizedCards);
  return normalizedCards;
}

function getNextStackOrderForLayer(layerKey) {
  return state.cards
    .filter((card) => getCardLayerKey(card) === layerKey)
    .reduce((maxOrder, card) => Math.max(maxOrder, getCardStackOrder(card)), -1) + 1;
}

function assignTopStackOrder(card) {
  if (!card) {
    return card;
  }

  card.stackOrder = getNextStackOrderForLayer(getCardLayerKey(card));
  return card;
}

function refreshCardStackStyles() {
  enforceGroupStackHierarchy();
  workspace.querySelectorAll(".card").forEach((element) => {
    const card = cardIndex.get(element.dataset.id || "");
    if (card) {
      element.style.zIndex = String(getCardLayer(card));
    }
  });
  syncAllWebCardElements();
}

function getStackBundleCards(cards = []) {
  const bundledCards = new Map();
  cards
    .filter(Boolean)
    .sort(compareStackBundleCards)
    .forEach((card) => {
      if (!bundledCards.has(card.id)) {
        bundledCards.set(card.id, card);
      }

      if (card.kind !== "group") {
        return;
      }

      getContainedCards(card, {
        includeGroups: true,
        recursive: true
      })
        .filter((containedCard) => containedCard.kind === "group")
        .sort(compareStackBundleCards)
        .forEach((containedCard) => {
          if (!bundledCards.has(containedCard.id)) {
            bundledCards.set(containedCard.id, containedCard);
          }
        });
    });

  return [...bundledCards.values()];
}

function bringCardsToFront(cards, options = {}) {
  const targetCards = getStackBundleCards(cards);
  if (targetCards.length === 0) {
    return false;
  }

  let changed = false;
  const layerGroups = new Map();
  targetCards.forEach((card) => {
    const key = getCardLayerKey(card);
    if (!layerGroups.has(key)) {
      layerGroups.set(key, []);
    }
    layerGroups.get(key).push(card);
  });

  layerGroups.forEach((layerCards, key) => {
    const targetIds = new Set(layerCards.map((card) => card.id));
    const orderedLayerCards = state.cards
      .filter((card) => getCardLayerKey(card) === key)
      .sort(compareCardsForRender);
    const orderedTargetIds = layerCards
      .slice()
      .sort(compareStackBundleCards)
      .map((card) => card.id);
    const topIds = orderedLayerCards
      .slice(-orderedTargetIds.length)
      .map((card) => card.id);
    const alreadyTop = topIds.length === orderedTargetIds.length
      && topIds.every((id, index) => id === orderedTargetIds[index])
      && orderedTargetIds.every((id) => targetIds.has(id));
    if (alreadyTop) {
      return;
    }

    let nextOrder = orderedLayerCards.reduce((maxOrder, card) => Math.max(maxOrder, getCardStackOrder(card)), -1) + 1;
    layerCards
      .slice()
      .sort(compareStackBundleCards)
      .forEach((card) => {
        if (getCardStackOrder(card) !== nextOrder) {
          changed = true;
        }
        card.stackOrder = nextOrder;
        nextOrder += 1;
      });
  });

  if (enforceGroupStackHierarchy()) {
    changed = true;
  }

  if (!changed) {
    return false;
  }

  if (options.render) {
    render();
  } else {
    refreshCardStackStyles();
  }

  if (options.save !== false) {
    scheduleSave();
  }

  return true;
}

function bringCardToFront(card, options = {}) {
  return bringCardsToFront([card], options);
}

function moveCardStack(card, direction) {
  if (!card || direction === 0) {
    closeContextMenu();
    return;
  }

  ensureEditMode();
  const bundleCards = getStackBundleCards([card]).filter((item) => getCardLayerKey(item) === getCardLayerKey(card));
  const bundleIds = new Set(bundleCards.map((item) => item.id));
  const layerCards = state.cards
    .filter((item) => getCardLayerKey(item) === getCardLayerKey(card))
    .sort(compareCardsForRender);
  const bundleIndexes = bundleCards
    .map((item) => layerCards.findIndex((layerCard) => layerCard.id === item.id))
    .filter((index) => index !== -1);
  if (bundleIndexes.length === 0) {
    closeContextMenu();
    return;
  }

  const firstBundleIndex = Math.min(...bundleIndexes);
  const lastBundleIndex = Math.max(...bundleIndexes);
  const remainingCards = layerCards.filter((item) => !bundleIds.has(item.id));
  const indexLookup = new Map(layerCards.map((item, index) => [item.id, index]));
  let insertionIndex = remainingCards.filter((item) => indexLookup.get(item.id) < firstBundleIndex).length;

  if (direction > 0) {
    const nextCard = remainingCards.find((item) => indexLookup.get(item.id) > lastBundleIndex);
    if (!nextCard) {
      closeContextMenu();
      return;
    }
    insertionIndex = remainingCards.indexOf(nextCard) + 1;
  } else {
    const previousCards = remainingCards.filter((item) => indexLookup.get(item.id) < firstBundleIndex);
    if (previousCards.length === 0) {
      closeContextMenu();
      return;
    }
    insertionIndex = previousCards.length - 1;
  }

  const orderedBundleCards = bundleCards.slice().sort(compareStackBundleCards);
  const nextLayerCards = [
    ...remainingCards.slice(0, insertionIndex),
    ...orderedBundleCards,
    ...remainingCards.slice(insertionIndex)
  ];
  const changed = nextLayerCards.some((item, index) => getCardStackOrder(item) !== index);
  if (!changed) {
    closeContextMenu();
    return;
  }

  nextLayerCards.forEach((item, index) => {
    item.stackOrder = index;
  });
  enforceGroupStackHierarchy();

  render();
  scheduleSave();
  closeContextMenu();
}

function getCardKindLabel(kind) {
  return t(getCardTypeDefinition(kind)?.labelKey || "note");
}

function getCardKindIcon(kind) {
  return getCardTypeDefinition(kind)?.icon || getCardTypeDefinition("note").icon;
}

function getThemeCardIconAsset(kind) {
  const asset = getVisualTheme().assets?.icons?.[kind];
  return typeof asset === "string" && asset.startsWith("data:image/") ? asset : "";
}

function getResizeDirections(card) {
  return card.kind === "group"
    ? ["n", "ne", "e", "se", "s", "sw", "w", "nw"]
    : ["se"];
}

function stopHeaderControlPointer(event) {
  event.stopPropagation();
}

function applyWebAddressValue(card, input) {
  if (!card || card.kind !== "web" || state.locked) {
    return false;
  }

  const previousUrl = normalizeUrl(card.url || card.src);
  const nextUrl = normalizeUrl(input.value);
  if (!nextUrl) {
    input.value = previousUrl || "";
    input.classList.add("is-invalid");
    window.setTimeout(() => input.classList.remove("is-invalid"), 900);
    return false;
  }

  input.value = nextUrl;
  if (nextUrl === previousUrl) {
    return true;
  }

  const oldTitle = getUrlTitle(previousUrl);
  card.url = nextUrl;
  card.src = nextUrl;
  if (!card.title || card.title === oldTitle || card.title === "URL") {
    card.title = getUrlTitle(nextUrl);
  }

  render();
  scheduleSave();
  return true;
}

function reloadWebCard(card) {
  if (shouldUseNativeWebCards()) {
    syncAllWebCardElements();
    void window.desktopBoard.reloadWebCard(card.id);
    return;
  }

  const cardElement = getCardElement(card);
  const browser = cardElement?.querySelector(".web-view");
  if (!browser) {
    render();
    return;
  }

  try {
    if (typeof browser.reloadIgnoringCache === "function") {
      browser.reloadIgnoringCache();
    } else if (typeof browser.reload === "function") {
      browser.reload();
    } else {
      const url = normalizeUrl(card.url || card.src);
      if (url) {
        browser.src = url;
      }
    }
  } catch (error) {
    reportError("web.reload", error);
  }
}

function createWebHeaderControls(card) {
  const input = document.createElement("input");
  input.className = "web-address-input";
  input.type = "text";
  input.value = normalizeUrl(card.url || card.src) || card.url || card.src || "";
  input.readOnly = state.locked;
  input.spellcheck = false;
  input.setAttribute("aria-label", t("address"));
  input.addEventListener("pointerdown", stopHeaderControlPointer);
  input.addEventListener("click", stopHeaderControlPointer);
  input.addEventListener("dblclick", stopHeaderControlPointer);
  input.addEventListener("contextmenu", stopHeaderControlPointer);
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (applyWebAddressValue(card, input)) {
        input.blur();
      }
    }
    if (event.key === "Escape") {
      event.preventDefault();
      input.value = normalizeUrl(card.url || card.src) || "";
      input.blur();
    }
  });
  input.addEventListener("blur", () => applyWebAddressValue(card, input));

  const reloadButton = document.createElement("button");
  reloadButton.type = "button";
  reloadButton.className = "web-refresh-button";
  reloadButton.title = t("reloadWebPage");
  reloadButton.setAttribute("aria-label", t("reloadWebPage"));
  reloadButton.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 7v5h-5"/><path d="M19 12a7 7 0 1 1-2.05-4.95L20 10"/></svg>';
  reloadButton.addEventListener("pointerdown", stopHeaderControlPointer);
  reloadButton.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (applyWebAddressValue(card, input)) {
      reloadWebCard(card);
    }
  });

  return { input, reloadButton };
}

function renderCard(card) {
  const element = document.createElement("section");
  element.className = "card";
  element.classList.toggle("is-selected", selectedIds.has(card.id));
  element.classList.toggle("is-attached", card.kind === "comment" && Boolean(card.commentAttachment));
  element.dataset.id = card.id;
  element.dataset.kind = card.kind;
  if (card.kind === "comment" && card.commentAttachment?.side) {
    element.dataset.attachedSide = card.commentAttachment.side;
  }
  element.style.left = `${card.x}px`;
  element.style.top = `${card.y}px`;
  element.style.width = `${card.width}px`;
  element.style.height = `${card.height}px`;
  element.style.zIndex = String(getCardLayer(card));
  applyCardColors(element, card);
  element.addEventListener("pointerdown", (event) => selectCardFromPointer(event, card));

  const header = document.createElement("div");
  header.className = "card-header";
  header.addEventListener("pointerdown", (event) => startCardMove(event, card));

  const grip = document.createElement("span");
  grip.className = "drag-grip";
  grip.setAttribute("aria-hidden", "true");

  const title = document.createElement("input");
  title.className = "card-title";
  title.value = card.title;
  title.readOnly = state.locked;
  title.addEventListener("input", () => {
    card.title = title.value;
    scheduleSave();
  });

  const headerFill = document.createElement("span");
  headerFill.className = "header-fill";
  headerFill.setAttribute("aria-hidden", "true");

  const kindIcon = document.createElement("span");
  kindIcon.className = "card-kind-icon";
  kindIcon.title = getCardKindLabel(card.kind);
  kindIcon.setAttribute("aria-hidden", "true");
  const themeIconAsset = getThemeCardIconAsset(card.kind);
  if (themeIconAsset) {
    const iconImage = document.createElement("img");
    iconImage.src = themeIconAsset;
    iconImage.alt = "";
    iconImage.draggable = false;
    iconImage.addEventListener("error", () => {
      kindIcon.replaceChildren();
      kindIcon.innerHTML = getCardKindIcon(card.kind);
    }, { once: true });
    kindIcon.appendChild(iconImage);
  } else {
    kindIcon.innerHTML = getCardKindIcon(card.kind);
  }

  if (card.kind === "comment") {
    header.append(grip, headerFill, kindIcon);
  } else if (card.kind === "web") {
    const { input, reloadButton } = createWebHeaderControls(card);
    header.append(grip, input, reloadButton, kindIcon);
  } else if (card.kind === "file") {
    const previewToggle = document.createElement("label");
    previewToggle.className = "card-header-toggle";
    previewToggle.title = canPreviewFile(card) ? t("showPreview") : t("previewUnavailableHint");
    previewToggle.addEventListener("pointerdown", (event) => event.stopPropagation());
    previewToggle.addEventListener("click", (event) => event.stopPropagation());

    const previewInput = document.createElement("input");
    previewInput.type = "checkbox";
    previewInput.checked = canPreviewFile(card) && card.showPreview !== false;
    previewInput.disabled = state.locked || !canPreviewFile(card);
    previewInput.setAttribute("aria-label", previewToggle.title);
    previewInput.addEventListener("change", () => {
      card.showPreview = previewInput.checked;
      render();
      scheduleSave();
    });

    previewToggle.appendChild(previewInput);
    header.append(grip, title, headerFill, previewToggle, kindIcon);
  } else {
    header.append(grip, title, headerFill, kindIcon);
  }

  const body = document.createElement("div");
  body.className = "card-body";
  body.appendChild(renderCardBody(card));
  const meta = renderCardMeta(card);

  element.append(header, body);
  if (meta) {
    element.appendChild(meta);
  }
  getResizeDirections(card).forEach((direction) => {
    const resizeHandle = document.createElement("div");
    resizeHandle.className = "resize-handle";
    resizeHandle.dataset.resizeDir = direction;
    resizeHandle.addEventListener("pointerdown", (event) => startResize(event, card, direction));
    element.appendChild(resizeHandle);
  });
  if (card.kind === "web") {
    setupWebCardSizeSync(element);
  } else {
    requestAnimationFrame(() => syncCardElementLayout(element));
  }
  return element;
}

function applyCardColors(element, card) {
  if (!element) {
    return;
  }

  const headerColor = card.headerColor || getDefaultCardColors(card.kind).header;
  const bodyColor = card.bodyColor || getDefaultCardColors(card.kind).body;
  const buttonPalette = getCardButtonPalette(bodyColor);

  element.style.setProperty("--card-header-color", headerColor);
  element.style.setProperty("--card-body-color", bodyColor);
  element.style.setProperty("--card-header-text", getReadableTextColor(headerColor));
  element.style.setProperty("--card-body-text", getReadableTextColor(bodyColor));
  element.style.setProperty("--card-button-bg", buttonPalette.background);
  element.style.setProperty("--card-button-hover-bg", buttonPalette.hoverBackground);
  element.style.setProperty("--card-button-border", buttonPalette.border);
  element.style.setProperty("--card-button-text", getReadableTextColor(buttonPalette.background));
}

function renderRichTextField({
  className,
  placeholderKey = "note",
  getHtml,
  getText,
  setValue,
  onFocus,
  onBlur,
  onInput
}) {
  const editor = document.createElement("div");
  editor.className = `${className} rich-text-editor`;
  editor.contentEditable = state.locked ? "false" : "true";
  editor.spellcheck = true;
  editor.dataset.placeholder = t(placeholderKey);
  editor.innerHTML = normalizeRichTextHtml(getHtml?.(), getText?.());
  syncRichTextTargetFromEditor(editor, setValue);
  editor.dataset.initialHtml = getHtml?.() || "";
  editor.dataset.initialText = getText?.() || "";

  editor.addEventListener("focus", () => {
    activeRichTextEditor = editor;
    activeRichTextCard = null;
    activeRichTextTarget = {
      sync: (targetEditor) => syncRichTextTargetFromEditor(targetEditor, setValue)
    };
    editor.dataset.initialHtml = getHtml?.() || "";
    editor.dataset.initialText = getText?.() || "";
    onFocus?.(editor);
    rememberRichTextSelection();
    window.setTimeout(updateRichTextToolbarFromSelection, 0);
  });

  editor.addEventListener("blur", () => {
    syncRichTextTargetFromEditor(editor, setValue);
    sanitizeRichTextEditor(editor);
    onBlur?.(editor);
    window.setTimeout(() => {
      if (document.activeElement !== editor && !isRichTextToolbarActive()) {
        hideRichTextToolbar();
      }
    }, 0);
  });

  editor.addEventListener("input", () => {
    syncRichTextTargetFromEditor(editor, setValue);
    onInput?.(editor);
    rememberRichTextSelection();
    updateRichTextToolbarFromSelection();
    scheduleSave();
  });

  editor.addEventListener("paste", (event) => {
    if (state.locked) {
      return;
    }
    event.preventDefault();
    insertRichTextPlainText(event.clipboardData?.getData("text/plain") || "");
    syncRichTextTargetFromEditor(editor, setValue);
    onInput?.(editor);
    rememberRichTextSelection();
    updateRichTextToolbarFromSelection();
    scheduleSave();
  });

  editor.addEventListener("keydown", (event) => {
    if (state.locked || !(event.ctrlKey || event.metaKey) || event.altKey) {
      return;
    }

    const key = event.key.toLowerCase();
    if (key === "b") {
      event.preventDefault();
      applyRichTextCommand("bold");
    } else if (key === "i") {
      event.preventDefault();
      applyRichTextCommand("italic");
    } else if (key === "u") {
      event.preventDefault();
      applyRichTextCommand("underline");
    }
  });

  editor.addEventListener("keyup", updateRichTextToolbarFromSelection);
  editor.addEventListener("pointerup", () => window.setTimeout(updateRichTextToolbarFromSelection, 0));
  return editor;
}

function renderRichTextEditor(card, className, placeholderKey = "note") {
  return renderRichTextField({
    className,
    placeholderKey,
    getHtml: () => card.textHtml,
    getText: () => card.text,
    setValue: (html, text) => {
      card.textHtml = html;
      card.text = text;
    },
    onFocus: (editor) => {
      activeRichTextCard = card;
      activeRichTextTarget = {
        sync: (targetEditor, options = {}) => syncRichTextCardFromEditor(card, targetEditor, options)
      };
      editor.dataset.initialHtml = card.textHtml || "";
      editor.dataset.initialText = card.text || "";
    },
    onBlur: (editor) => {
      syncRichTextCardFromEditor(card, editor);
      const beforeText = editor.dataset.initialText || "";
      const afterText = card.text || "";
      if (recordCommentTextEdit(card, beforeText, afterText)) {
        editor.dataset.initialText = afterText;
        editor.dataset.initialHtml = card.textHtml || "";
        scheduleSave();
      }
    }
  });
}

function renderCardBody(card) {
  if (card.kind === "tasks") {
    return renderTasks(card);
  }

  if (card.kind === "bookmark") {
    return renderBookmarks(card);
  }

  if (card.kind === "table") {
    return renderSimpleTable(card);
  }

  if (card.kind === "calculator") {
    return renderCalculator(card);
  }

  if (card.kind === "progress") {
    return renderProgress(card);
  }

  if (card.kind === "timer") {
    return renderTimer(card);
  }

  if (card.kind === "reminder") {
    return renderReminder(card);
  }

  if (card.kind === "schedule") {
    return renderSchedule(card);
  }

  if (card.kind === "web") {
    return renderWeb(card);
  }

  if (card.kind === "image" || card.kind === "video") {
    return renderMedia(card);
  }

  if (card.kind === "audio") {
    return renderAudio(card);
  }

  if (card.kind === "file") {
    return renderFile(card);
  }

  if (card.kind === "group") {
    const hint = document.createElement("div");
    hint.className = "group-hint";
    hint.textContent = t("groupHint");
    return hint;
  }

  if (card.kind === "code") {
    return renderCodeSnippet(card);
  }

  if (card.kind === "comment") {
    return renderRichTextEditor(card, "comment-text", "commentPlaceholder");
  }

  return renderRichTextEditor(card, "note-text", "note");
}

function insertTextareaText(textarea, text) {
  const start = textarea.selectionStart ?? textarea.value.length;
  const end = textarea.selectionEnd ?? textarea.value.length;
  const value = textarea.value || "";
  textarea.value = `${value.slice(0, start)}${text}${value.slice(end)}`;
  const caret = start + text.length;
  textarea.selectionStart = caret;
  textarea.selectionEnd = caret;
}

function handleCodeEditorKeydown(event, card, textarea) {
  if (state.locked || event.key !== "Tab") {
    return;
  }

  event.preventDefault();
  insertTextareaText(textarea, "  ");
  card.text = textarea.value;
  scheduleSave();
}

function renderCodeSnippet(card) {
  const wrapper = document.createElement("div");
  wrapper.className = "code-card";

  const languageInput = document.createElement("input");
  languageInput.type = "text";
  languageInput.className = "card-field code-language-input";
  languageInput.placeholder = t("codeLanguagePlaceholder");
  languageInput.value = card.codeLanguage || "";
  languageInput.readOnly = state.locked;
  languageInput.setAttribute("aria-label", t("codeLanguage"));
  languageInput.addEventListener("input", () => {
    card.codeLanguage = languageInput.value.trim();
    scheduleSave();
  });

  const textarea = document.createElement("textarea");
  textarea.className = "code-text";
  textarea.value = card.text || "";
  textarea.placeholder = t("codePlaceholder");
  textarea.readOnly = state.locked;
  textarea.spellcheck = false;
  textarea.wrap = "off";
  textarea.addEventListener("input", () => {
    card.text = textarea.value;
    scheduleSave();
  });
  textarea.addEventListener("keydown", (event) => handleCodeEditorKeydown(event, card, textarea));

  wrapper.append(languageInput, textarea);
  return wrapper;
}

function renderCalculator(card) {
  card.calculatorDisplay = normalizeCalculatorDisplay(card.calculatorDisplay);
  card.calculatorExpression = typeof card.calculatorExpression === "string" ? card.calculatorExpression : "";
  card.calculatorOperand = Number.isFinite(Number(card.calculatorOperand)) ? Number(card.calculatorOperand) : null;
  card.calculatorOperation = normalizeStandardCalculatorOperation(card.calculatorOperation);
  card.calculatorWaitingForOperand = Boolean(card.calculatorWaitingForOperand);
  card.calculatorError = normalizeCalculatorError(card.calculatorError);
  card.calculatorHistory = normalizeCalculatorHistory(card.calculatorHistory);

  const wrapper = document.createElement("div");
  wrapper.className = "calculator-card";

  const expression = document.createElement("div");
  expression.className = "calculator-expression";

  const display = document.createElement("input");
  display.type = "text";
  display.className = "calculator-display";
  display.inputMode = "decimal";
  display.autocomplete = "off";
  display.spellcheck = false;
  display.readOnly = state.locked;
  display.setAttribute("aria-label", t("calculator"));
  display.setAttribute("role", "textbox");
  display.setAttribute("aria-live", "polite");

  const historyDetails = document.createElement("details");
  historyDetails.className = "calculator-history";
  const historySummary = document.createElement("summary");
  historySummary.textContent = t("calculatorHistory");
  const historyPanel = document.createElement("div");
  historyPanel.className = "calculator-history-panel";
  const historyList = document.createElement("div");
  historyList.className = "calculator-history-list";
  const clearHistoryButton = document.createElement("button");
  clearHistoryButton.type = "button";
  clearHistoryButton.className = "calculator-history-clear";
  clearHistoryButton.textContent = t("clearCalculatorHistory");
  clearHistoryButton.disabled = state.locked;

  const renderHistory = () => {
    historyList.innerHTML = "";
    if (!card.calculatorHistory.length) {
      const empty = document.createElement("div");
      empty.className = "calculator-history-empty";
      empty.textContent = t("calculatorHistoryEmpty");
      historyList.appendChild(empty);
      clearHistoryButton.disabled = true;
      return;
    }

    clearHistoryButton.disabled = state.locked;
    [...card.calculatorHistory].reverse().forEach((entry) => {
      const item = document.createElement("button");
      item.type = "button";
      item.className = "calculator-history-item";
      item.disabled = state.locked;
      const itemExpression = document.createElement("span");
      itemExpression.className = "calculator-history-expression";
      itemExpression.textContent = entry.expression;
      const itemResult = document.createElement("span");
      itemResult.className = "calculator-history-result";
      itemResult.textContent = entry.result;
      item.append(itemExpression, itemResult);
      item.addEventListener("click", () => {
        card.calculatorDisplay = normalizeCalculatorDisplay(entry.result);
        card.calculatorExpression = entry.expression;
        card.calculatorOperand = parseCalculatorDisplay(entry.result);
        card.calculatorOperation = null;
        card.calculatorWaitingForOperand = true;
        card.calculatorError = "";
        updateView();
        scheduleSave();
      });
      historyList.appendChild(item);
    });
  };

  const getVisibleDisplay = () => getCalculatorErrorText(card.calculatorError) || card.calculatorDisplay || "0";

  const sanitizeTypedDisplay = (value) => {
    const raw = String(value ?? "").replace(",", ".").trim();
    const negative = raw.startsWith("-");
    const cleaned = raw.replace(/[^\d.]/g, "");
    const parts = cleaned.split(".");
    const integerPart = (parts.shift() || "0").replace(/^0+(?=\d)/, "") || "0";
    const decimalPart = parts.join("");
    const hasDecimal = raw.includes(".");
    return normalizeCalculatorDisplay(`${negative ? "-" : ""}${integerPart}${hasDecimal ? `.${decimalPart}` : ""}`);
  };

  const updateView = () => {
    expression.textContent = card.calculatorExpression || "\u00a0";
    display.value = getVisibleDisplay();
    display.classList.toggle("is-error", Boolean(card.calculatorError));
    renderHistory();
  };

  const commit = () => {
    updateView();
    scheduleSave();
  };

  const setDisplay = (value) => {
    card.calculatorDisplay = normalizeCalculatorDisplay(value);
    card.calculatorError = "";
  };

  const resetAll = () => {
    setDisplay("0");
    card.calculatorExpression = "";
    card.calculatorOperand = null;
    card.calculatorOperation = null;
    card.calculatorWaitingForOperand = false;
  };

  const setError = (error, expressionText = "") => {
    card.calculatorDisplay = "0";
    card.calculatorError = normalizeCalculatorError(error);
    card.calculatorExpression = expressionText;
    card.calculatorOperand = null;
    card.calculatorOperation = null;
    card.calculatorWaitingForOperand = true;
  };

  const pushHistory = (expressionText, resultText) => {
    card.calculatorHistory = normalizeCalculatorHistory([
      ...card.calculatorHistory,
      {
        id: createId("calc-history"),
        at: Date.now(),
        expression: expressionText,
        result: resultText
      }
    ]);
  };

  const inputDigit = (digit) => {
    if (card.calculatorError || card.calculatorWaitingForOperand) {
      if (!card.calculatorOperation) {
        card.calculatorExpression = "";
      }
      setDisplay(digit);
      card.calculatorWaitingForOperand = false;
      return;
    }

    const current = card.calculatorDisplay || "0";
    setDisplay(current === "0" ? digit : `${current}${digit}`.slice(0, 18));
  };

  const inputDecimal = () => {
    if (card.calculatorError || card.calculatorWaitingForOperand) {
      if (!card.calculatorOperation) {
        card.calculatorExpression = "";
      }
      setDisplay("0.");
      card.calculatorWaitingForOperand = false;
      return;
    }

    if (!String(card.calculatorDisplay || "").includes(".")) {
      setDisplay(`${card.calculatorDisplay || "0"}.`);
    }
  };

  const chooseOperation = (operation) => {
    const currentValue = parseCalculatorDisplay(card.calculatorDisplay);
    if (currentValue === null) {
      setError("invalid");
      return;
    }

    if (card.calculatorOperation && card.calculatorOperand !== null && !card.calculatorWaitingForOperand) {
      const result = applyCalculatorOperation(card.calculatorOperand, currentValue, card.calculatorOperation);
      const expressionText = `${formatCalculatorNumber(card.calculatorOperand)} ${getCalculatorOperatorSymbol(card.calculatorOperation)} ${formatCalculatorNumber(currentValue)} =`;
      if (result.error) {
        setError(result.text === t("calculatorDivisionByZero") ? "divisionByZero" : "invalid", expressionText);
        return;
      }
      setDisplay(result.text);
      card.calculatorOperand = result.value;
    } else {
      card.calculatorOperand = currentValue;
    }

    card.calculatorOperation = operation;
    card.calculatorExpression = `${formatCalculatorNumber(card.calculatorOperand)} ${getCalculatorOperatorSymbol(operation)}`;
    card.calculatorWaitingForOperand = true;
  };

  const calculateEquals = () => {
    const operation = normalizeStandardCalculatorOperation(card.calculatorOperation);
    const left = card.calculatorOperand;
    const right = parseCalculatorDisplay(card.calculatorDisplay);
    if (!operation || left === null || right === null) {
      return;
    }

    const expressionText = `${formatCalculatorNumber(left)} ${getCalculatorOperatorSymbol(operation)} ${formatCalculatorNumber(right)} =`;
    const result = applyCalculatorOperation(left, right, operation);
    if (result.error) {
      setError(result.text === t("calculatorDivisionByZero") ? "divisionByZero" : "invalid", expressionText);
      pushHistory(expressionText, getVisibleDisplay());
      return;
    }

    setDisplay(result.text);
    card.calculatorExpression = expressionText;
    card.calculatorOperand = result.value;
    card.calculatorOperation = null;
    card.calculatorWaitingForOperand = true;
    pushHistory(expressionText, result.text);
  };

  const applyUnary = (kind) => {
    const currentValue = parseCalculatorDisplay(card.calculatorDisplay);
    if (currentValue === null) {
      setError("invalid");
      return;
    }

    let expressionText = "";
    let result = null;
    if (kind === "square") {
      expressionText = `sqr(${formatCalculatorNumber(currentValue)}) =`;
      result = { error: false, value: currentValue * currentValue, text: formatCalculatorNumber(currentValue * currentValue) };
    } else if (kind === "sqrt") {
      expressionText = `sqrt(${formatCalculatorNumber(currentValue)}) =`;
      result = currentValue < 0
        ? { error: true, text: t("calculatorInvalidInput"), value: null }
        : { error: false, value: Math.sqrt(currentValue), text: formatCalculatorNumber(Math.sqrt(currentValue)) };
    } else if (kind === "reciprocal") {
      expressionText = `1/(${formatCalculatorNumber(currentValue)}) =`;
      result = currentValue === 0
        ? { error: true, text: t("calculatorDivisionByZero"), value: null }
        : { error: false, value: 1 / currentValue, text: formatCalculatorNumber(1 / currentValue) };
    }

    if (!result) {
      return;
    }

    if (result.error) {
      setError(result.text === t("calculatorDivisionByZero") ? "divisionByZero" : "invalid", expressionText);
      pushHistory(expressionText, getVisibleDisplay());
      return;
    }

    setDisplay(result.text);
    card.calculatorExpression = expressionText;
    card.calculatorOperand = result.value;
    card.calculatorOperation = null;
    card.calculatorWaitingForOperand = true;
    pushHistory(expressionText, result.text);
  };

  const applyPercent = () => {
    const currentValue = parseCalculatorDisplay(card.calculatorDisplay);
    if (currentValue === null) {
      setError("invalid");
      return;
    }
    const baseValue = Number.isFinite(Number(card.calculatorOperand)) ? Number(card.calculatorOperand) : 1;
    setDisplay(formatCalculatorNumber((baseValue * currentValue) / 100));
  };

  const runAction = (action, value = null) => {
    if (state.locked) {
      return;
    }

    if (action === "digit") {
      inputDigit(value);
    } else if (action === "decimal") {
      inputDecimal();
    } else if (action === "operation") {
      chooseOperation(value);
    } else if (action === "equals") {
      calculateEquals();
    } else if (action === "clear") {
      resetAll();
    } else if (action === "clear-entry") {
      setDisplay("0");
      card.calculatorWaitingForOperand = false;
    } else if (action === "backspace") {
      if (card.calculatorError || card.calculatorWaitingForOperand) {
        setDisplay("0");
        card.calculatorWaitingForOperand = false;
      } else {
        const current = String(card.calculatorDisplay || "0");
        setDisplay(current.length > 1 ? current.slice(0, -1) : "0");
      }
    } else if (action === "sign") {
      const current = parseCalculatorDisplay(card.calculatorDisplay);
      if (current !== null && current !== 0) {
        setDisplay(formatCalculatorNumber(-current));
      }
    } else if (action === "percent") {
      applyPercent();
    } else if (action === "unary") {
      applyUnary(value);
    }
    commit();
  };

  const keyboardOperations = {
    "+": "add",
    "-": "subtract",
    "*": "multiply",
    x: "multiply",
    X: "multiply",
    "\u00d7": "multiply",
    "/": "divide",
    "\u00f7": "divide"
  };

  display.addEventListener("keydown", (event) => {
    if (state.locked || event.ctrlKey || event.metaKey || event.altKey) {
      return;
    }

    if (/^\d$/.test(event.key)) {
      event.preventDefault();
      runAction("digit", event.key);
      return;
    }

    if (event.key === "." || event.key === ",") {
      event.preventDefault();
      runAction("decimal");
      return;
    }

    const operation = keyboardOperations[event.key];
    if (operation) {
      event.preventDefault();
      runAction("operation", operation);
      return;
    }

    if (event.key === "Enter" || event.key === "=") {
      event.preventDefault();
      runAction("equals");
      return;
    }

    if (event.key === "Backspace") {
      event.preventDefault();
      runAction("backspace");
      return;
    }

    if (event.key === "Delete") {
      event.preventDefault();
      runAction("clear-entry");
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      runAction("clear");
      return;
    }

    if (event.key === "%") {
      event.preventDefault();
      runAction("percent");
    }
  });

  display.addEventListener("input", () => {
    if (state.locked) {
      return;
    }
    const sanitized = sanitizeTypedDisplay(display.value);
    display.value = sanitized;
    card.calculatorDisplay = sanitized;
    card.calculatorError = "";
    card.calculatorWaitingForOperand = false;
    if (!card.calculatorOperation) {
      card.calculatorExpression = "";
    }
    display.classList.remove("is-error");
    scheduleSave();
  });

  clearHistoryButton.addEventListener("click", () => {
    if (state.locked) {
      return;
    }
    card.calculatorHistory = [];
    commit();
  });

  historyPanel.append(historyList, clearHistoryButton);
  historyDetails.append(historySummary, historyPanel);

  const buttons = document.createElement("div");
  buttons.className = "calculator-buttons";
  [
    ["%", "percent", null, "utility", "%"],
    ["CE", "clear-entry", null, "utility", t("calculatorClearEntry")],
    ["C", "clear", null, "utility", t("calculatorClear")],
    ["⌫", "backspace", null, "utility", t("calculatorBackspace")],
    ["1/x", "unary", "reciprocal", "utility", "1/x"],
    ["x²", "unary", "square", "utility", "x²"],
    ["√x", "unary", "sqrt", "utility", "√x"],
    ["÷", "operation", "divide", "operator", t("calculatorOperationDivide")],
    ["7", "digit", "7", "number", "7"],
    ["8", "digit", "8", "number", "8"],
    ["9", "digit", "9", "number", "9"],
    ["×", "operation", "multiply", "operator", t("calculatorOperationMultiply")],
    ["4", "digit", "4", "number", "4"],
    ["5", "digit", "5", "number", "5"],
    ["6", "digit", "6", "number", "6"],
    ["-", "operation", "subtract", "operator", t("calculatorOperationSubtract")],
    ["1", "digit", "1", "number", "1"],
    ["2", "digit", "2", "number", "2"],
    ["3", "digit", "3", "number", "3"],
    ["+", "operation", "add", "operator", t("calculatorOperationAdd")],
    ["±", "sign", null, "number", "±"],
    ["0", "digit", "0", "number", "0"],
    [".", "decimal", null, "number", "."],
    ["=", "equals", null, "equals", t("calculatorEquals")]
  ].forEach(([label, action, value, tone, title]) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `calculator-button calculator-button-${tone}`;
    button.textContent = label;
    button.title = title;
    button.disabled = state.locked;
    button.addEventListener("click", () => runAction(action, value));
    buttons.appendChild(button);
  });

  updateView();
  wrapper.append(expression, display, buttons, historyDetails);
  return wrapper;
}

function renderSimpleTable(card) {
  const columns = normalizeTableColumns(card.tableColumns, 1);
  const rows = normalizeTableRows(card.tableRows, columns.length);
  card.tableColumns = columns;
  card.tableRows = rows;

  const wrapper = document.createElement("div");
  wrapper.className = "table-card";

  const scroll = document.createElement("div");
  scroll.className = "table-scroll";

  const table = document.createElement("table");
  table.className = "simple-table-grid";

  const head = document.createElement("thead");
  const headRow = document.createElement("tr");
  columns.forEach((column, index) => {
    const cell = document.createElement("th");

    const headerCell = document.createElement("div");
    headerCell.className = "table-header-cell";

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.className = "card-field table-column-input";
    titleInput.value = column.title || "";
    titleInput.placeholder = `${t("tableColumnPlaceholder")} ${index + 1}`;
    titleInput.readOnly = state.locked;
    titleInput.addEventListener("input", () => {
      column.title = titleInput.value;
      scheduleSave();
    });

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "table-column-remove";
    removeButton.textContent = "x";
    removeButton.title = t("removeTableColumn");
    removeButton.disabled = state.locked || columns.length <= 1;
    removeButton.addEventListener("click", () => {
      if (state.locked || columns.length <= 1) {
        return;
      }
      ensureEditMode();
      card.tableColumns = columns.filter((item) => item.id !== column.id);
      card.tableRows = rows.map((row) => ({
        ...row,
        cells: row.cells.filter((_, cellIndex) => cellIndex !== index)
      }));
      render();
      scheduleSave();
    });

    headerCell.append(titleInput, removeButton);
    cell.appendChild(headerCell);
    headRow.appendChild(cell);
  });

  const actionsHead = document.createElement("th");
  actionsHead.className = "table-action-head";
  headRow.appendChild(actionsHead);
  head.appendChild(headRow);

  const body = document.createElement("tbody");
  if (!rows.length) {
    const emptyRow = document.createElement("tr");
    const emptyCell = document.createElement("td");
    emptyCell.className = "table-empty";
    emptyCell.colSpan = columns.length + 1;
    emptyCell.textContent = t("tableEmpty");
    emptyRow.appendChild(emptyCell);
    body.appendChild(emptyRow);
  } else {
    rows.forEach((row) => {
      const rowElement = document.createElement("tr");
      row.cells.forEach((cellValue, cellIndex) => {
        const cell = document.createElement("td");
        const textarea = document.createElement("textarea");
        textarea.className = "table-cell-input";
        textarea.rows = 1;
        textarea.value = cellValue || "";
        textarea.placeholder = t("tableCellPlaceholder");
        textarea.readOnly = state.locked;
        textarea.spellcheck = true;
        const resizeCell = autoGrowTextarea(textarea, 34);
        textarea.addEventListener("input", () => {
          row.cells[cellIndex] = textarea.value;
          resizeCell();
          scheduleSave();
        });
        cell.appendChild(textarea);
        rowElement.appendChild(cell);
      });

      const actionCell = document.createElement("td");
      actionCell.className = "table-action-cell";
      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.className = "table-row-remove";
      removeButton.textContent = "x";
      removeButton.title = t("removeTableRow");
      removeButton.disabled = state.locked;
      removeButton.addEventListener("click", () => {
        if (state.locked) {
          return;
        }
        ensureEditMode();
        card.tableRows = rows.filter((item) => item.id !== row.id);
        render();
        scheduleSave();
      });
      actionCell.appendChild(removeButton);
      rowElement.appendChild(actionCell);
      body.appendChild(rowElement);
    });
  }

  table.append(head, body);
  scroll.appendChild(table);

  const actions = document.createElement("div");
  actions.className = "table-actions";

  const addRowButton = document.createElement("button");
  addRowButton.type = "button";
  addRowButton.textContent = t("addTableRow");
  addRowButton.disabled = state.locked;
  addRowButton.addEventListener("click", () => {
    ensureEditMode();
    card.tableRows = [...rows, createTableRow({}, columns.length)];
    growCardHeight(card, 44);
    render();
    scheduleSave();
  });

  const addColumnButton = document.createElement("button");
  addColumnButton.type = "button";
  addColumnButton.textContent = t("addTableColumn");
  addColumnButton.disabled = state.locked;
  addColumnButton.addEventListener("click", () => {
    ensureEditMode();
    const nextIndex = columns.length;
    card.tableColumns = [...columns, createTableColumn({}, nextIndex)];
    card.tableRows = rows.map((row) => ({
      ...row,
      cells: [...row.cells, ""]
    }));
    render();
    scheduleSave();
  });

  actions.append(addRowButton, addColumnButton);
  wrapper.append(scroll, actions);
  return wrapper;
}

function createMetaChip(className, text, onClick = null) {
  const element = document.createElement(onClick ? "button" : "span");
  element.className = className;
  element.textContent = text;
  if (onClick) {
    element.type = "button";
    element.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      onClick();
    });
  }
  return element;
}

function renderCardMeta(card) {
  if (card.kind === "comment") {
    return null;
  }

  const tags = Array.isArray(card.tags) ? card.tags : [];
  const references = getReferencedCards(card);
  const backlinks = getBacklinkCards(card);

  if (!tags.length && !references.length && !backlinks.length) {
    return null;
  }

  const footer = document.createElement("div");
  footer.className = "card-meta";

  if (tags.length) {
    const section = document.createElement("div");
    section.className = "card-meta-section";
    const label = document.createElement("div");
    label.className = "card-meta-label";
    label.textContent = t("tags");
    const list = document.createElement("div");
    list.className = "card-meta-list";
    tags.forEach((tag) => {
      list.appendChild(createMetaChip("card-tag", `#${tag}`));
    });
    section.append(label, list);
    footer.appendChild(section);
  }

  if (references.length) {
    const section = document.createElement("div");
    section.className = "card-meta-section";
    const label = document.createElement("div");
    label.className = "card-meta-label";
    label.textContent = t("directLinks");
    const list = document.createElement("div");
    list.className = "card-meta-list";
    references.forEach((reference) => {
      list.appendChild(createMetaChip("card-reference", reference.title || t("genericElement"), () => focusCardById(reference.id)));
    });
    section.append(label, list);
    footer.appendChild(section);
  }

  if (backlinks.length) {
    const section = document.createElement("div");
    section.className = "card-meta-section";
    const label = document.createElement("div");
    label.className = "card-meta-label";
    label.textContent = t("backlinks");
    const list = document.createElement("div");
    list.className = "card-meta-list";
    backlinks.forEach((backlink) => {
      list.appendChild(createMetaChip("card-backlink", backlink.title || t("genericElement"), () => focusCardById(backlink.id)));
    });
    section.append(label, list);
    footer.appendChild(section);
  }

  return footer;
}

function setBookmarkLinkField(card, linkId, field, value) {
  const link = Array.isArray(card.links) ? card.links.find((item) => item.id === linkId) : null;
  if (!link) {
    return;
  }

  link[field] = String(value || "").trim();
  scheduleSave();
}

function addBookmarkLink(card) {
  ensureEditMode();
  card.links = Array.isArray(card.links) ? card.links : [];
  card.links.push(createBookmarkLink());
  growCardHeight(card, 88);
  render();
  scheduleSave();
}

function removeBookmarkLink(card, linkId) {
  ensureEditMode();
  card.links = (Array.isArray(card.links) ? card.links : []).filter((link) => link.id !== linkId);
  render();
  scheduleSave();
}

async function openExternalUrl(rawUrl) {
  const url = normalizeUrl(rawUrl);
  if (!url) {
    return;
  }

  try {
    if (window.desktopBoard?.openExternal) {
      await window.desktopBoard.openExternal(url);
      return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
  } catch (error) {
    console.error("Failed to open external URL:", error);
  }
}

function renderBookmarks(card) {
  const wrapper = document.createElement("div");
  wrapper.className = "bookmark-card";

  const list = document.createElement("div");
  list.className = "bookmark-list";
  const links = Array.isArray(card.links) ? card.links : [];

  if (!links.length) {
    const empty = document.createElement("div");
    empty.className = "bookmark-empty";
    empty.textContent = t("bookmarkEmpty");
    list.appendChild(empty);
  }

  links.forEach((link) => {
    const item = document.createElement("div");
    item.className = "bookmark-item";

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.className = "card-field";
    titleInput.placeholder = t("bookmarkTitlePlaceholder");
    titleInput.value = link.title || "";
    titleInput.readOnly = state.locked;
    titleInput.addEventListener("input", () => setBookmarkLinkField(card, link.id, "title", titleInput.value));

    const actions = document.createElement("div");
    actions.className = "bookmark-actions";

    const openButton = document.createElement("button");
    openButton.type = "button";
    openButton.textContent = t("openExternally");
    openButton.disabled = !normalizeUrl(link.url);
    openButton.addEventListener("click", () => openExternalUrl(link.url));

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = t("remove");
    removeButton.addEventListener("click", () => removeBookmarkLink(card, link.id));

    const urlInput = document.createElement("input");
    urlInput.type = "text";
    urlInput.className = "card-field";
    urlInput.placeholder = t("bookmarkUrlPlaceholder");
    urlInput.value = link.url || "";
    urlInput.readOnly = state.locked;
    urlInput.addEventListener("input", () => {
      setBookmarkLinkField(card, link.id, "url", urlInput.value);
      openButton.disabled = !normalizeUrl(urlInput.value);
    });

    actions.append(openButton, removeButton);
    item.append(titleInput, urlInput, actions);
    list.appendChild(item);
  });

  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.className = "bookmark-add";
  addButton.textContent = t("addLink");
  addButton.addEventListener("click", () => addBookmarkLink(card));

  wrapper.append(list, addButton);
  return wrapper;
}

function renderProgress(card) {
  const wrapper = document.createElement("div");
  wrapper.className = "progress-card";

  const stats = getProgressStats(card);
  const summary = document.createElement("div");
  summary.className = "progress-summary";
  const label = document.createElement("span");
  label.className = "progress-label";
  label.textContent = t("progressPercent");
  const value = document.createElement("strong");
  value.className = "progress-value";
  value.textContent = `${stats.percent}%`;
  const meta = document.createElement("span");
  meta.className = "progress-meta";
  meta.textContent = stats.total ? `${stats.done} / ${stats.total}` : "0 / 0";
  summary.append(label, value);
  summary.appendChild(meta);

  const meter = document.createElement("div");
  meter.className = "progress-meter";
  const fill = document.createElement("span");
  fill.className = "progress-meter-fill";
  fill.style.width = `${stats.percent}%`;
  meter.appendChild(fill);

  const list = document.createElement("ul");
  list.className = "task-list";
  card.tasks.forEach((task) => {
    list.appendChild(createChecklistRow(card, task, {
      onToggle: () => {
        card.progressValue = getProgressStats(card).percent;
        render();
      },
      onRemove: () => {
        card.progressValue = getProgressStats(card).percent;
      }
    }));
  });

  const addTask = createChecklistAddButton(card, t("addTask"), () => {
    card.progressValue = getProgressStats(card).percent;
  });

  wrapper.append(summary, meter, list, addTask);
  return wrapper;
}

function formatDuration(ms) {
  const totalSeconds = Math.max(0, Math.ceil(ms / 1000));
  const seconds = totalSeconds % 60;
  const totalMinutes = Math.floor(totalSeconds / 60);
  const minutes = totalMinutes % 60;
  const hours = Math.floor(totalMinutes / 60);

  if (hours > 0) {
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }

  return `${String(totalMinutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function getTimerRemainingMs(card, now = Date.now()) {
  const durationMs = getTimerDurationMs(card);
  if (Number.isFinite(card.timerEndsAt)) {
    return clamp(card.timerEndsAt - now, 0, durationMs);
  }

  const remainingMs = Number(card.timerRemainingMs);
  return clamp(Number.isFinite(remainingMs) ? remainingMs : durationMs, 0, durationMs);
}

function clearTimerCompletionNotification(card) {
  card.timerCompletionNotifiedAt = null;
}

function resetReminderDeliveryState(card) {
  card.reminderAcknowledgedAt = null;
  card.reminderLastTriggeredAt = null;
}

function getReminderRepeatIntervalMs(card) {
  return normalizeReminderRepeatIntervalMinutes(card?.reminderRepeatIntervalMinutes) * 60 * 1000;
}

function getReminderStatusText(card, now = Date.now()) {
  const reminderAt = parseReminderTimestamp(card.reminderAt);
  if (reminderAt === null) {
    return t("reminderDateMissing");
  }

  if (Number.isFinite(card.reminderAcknowledgedAt)) {
    return t("reminderAcknowledged", {
      time: formatDateTimeDisplay(card.reminderAcknowledgedAt)
    });
  }

  if (now < reminderAt) {
    return t("reminderScheduled", {
      time: formatDateTimeDisplay(reminderAt)
    });
  }

  if (Number.isFinite(card.reminderLastTriggeredAt)) {
    if (card.reminderRepeatUntilAcknowledged) {
      return t("reminderTriggeredRepeating", {
        time: formatDateTimeDisplay(card.reminderLastTriggeredAt),
        minutes: normalizeReminderRepeatIntervalMinutes(card.reminderRepeatIntervalMinutes)
      });
    }

    return t("reminderTriggered", {
      time: formatDateTimeDisplay(card.reminderLastTriggeredAt)
    });
  }

  return t("reminderDue");
}

function createCardCheckbox(labelKey, inputClassName, checked, onChange) {
  const label = document.createElement("label");
  label.className = "card-checkbox";

  const input = document.createElement("input");
  input.type = "checkbox";
  input.className = inputClassName;
  input.checked = checked;
  input.disabled = state.locked;
  input.addEventListener("change", () => onChange(input.checked));

  const text = document.createElement("span");
  text.textContent = t(labelKey);

  label.append(input, text);
  return { label, input, text };
}

function updateTimerCardElement(element, card, now = Date.now()) {
  if (!element || !card) {
    return;
  }

  const remainingMs = getTimerRemainingMs(card, now);
  const durationMs = getTimerDurationMs(card);
  const isRunning = Number.isFinite(card.timerEndsAt);
  const display = element.querySelector(".timer-display");
  const status = element.querySelector(".timer-status");
  const progress = element.querySelector(".timer-progress-fill");
  const toggleButton = element.querySelector(".timer-toggle");
  const durationInput = element.querySelector(".timer-duration-input");
  const notifyToastInput = element.querySelector(".timer-notify-toast");
  const playSoundInput = element.querySelector(".timer-play-sound");

  if (display) {
    display.textContent = formatDuration(remainingMs);
  }

  if (status) {
    status.textContent = remainingMs <= 0 ? t("timerDone") : t(isRunning ? "timerRunning" : "timerPaused");
  }

  if (progress) {
    const completed = durationMs > 0 ? ((durationMs - remainingMs) / durationMs) * 100 : 0;
    progress.style.width = `${clamp(completed, 0, 100)}%`;
  }

  if (toggleButton) {
    toggleButton.textContent = isRunning ? t("timerPause") : t("timerStart");
  }

  if (durationInput && document.activeElement !== durationInput) {
    durationInput.value = String(normalizeTimerDurationMinutes(card.timerDurationMinutes));
  }

  if (notifyToastInput) {
    notifyToastInput.checked = card.timerNotifyToast !== false;
    notifyToastInput.disabled = state.locked;
  }

  if (playSoundInput) {
    playSoundInput.checked = card.timerPlaySound === true;
    playSoundInput.disabled = state.locked;
  }
}

function updateReminderCardElement(element, card, now = Date.now()) {
  if (!element || !card) {
    return;
  }

  const dateInput = element.querySelector(".reminder-date-input");
  const repeatIntervalInput = element.querySelector(".reminder-repeat-input");
  const status = element.querySelector(".reminder-status");
  const acknowledgeButton = element.querySelector(".reminder-acknowledge");
  const notifyToastInput = element.querySelector(".reminder-notify-toast");
  const playSoundInput = element.querySelector(".reminder-play-sound");
  const repeatInput = element.querySelector(".reminder-repeat-toggle");

  if (dateInput && document.activeElement !== dateInput) {
    dateInput.value = normalizeReminderDateTime(card.reminderAt);
    dateInput.disabled = state.locked;
  }

  if (repeatIntervalInput && document.activeElement !== repeatIntervalInput) {
    repeatIntervalInput.value = String(normalizeReminderRepeatIntervalMinutes(card.reminderRepeatIntervalMinutes));
    repeatIntervalInput.disabled = state.locked || !card.reminderRepeatUntilAcknowledged;
  }

  if (notifyToastInput) {
    notifyToastInput.checked = card.reminderShowToast !== false;
    notifyToastInput.disabled = state.locked;
  }

  if (playSoundInput) {
    playSoundInput.checked = card.reminderPlaySound === true;
    playSoundInput.disabled = state.locked;
  }

  if (repeatInput) {
    repeatInput.checked = card.reminderRepeatUntilAcknowledged !== false;
    repeatInput.disabled = state.locked;
  }

  if (status) {
    status.textContent = getReminderStatusText(card, now);
  }

  if (acknowledgeButton) {
    const reminderAt = parseReminderTimestamp(card.reminderAt);
    const acknowledged = Number.isFinite(card.reminderAcknowledgedAt);
    acknowledgeButton.textContent = acknowledged ? t("reminderResetAcknowledge") : t("reminderAcknowledge");
    acknowledgeButton.disabled = state.locked || reminderAt === null;
  }
}

function refreshVisibleTimerCards(now = Date.now()) {
  workspace.querySelectorAll(".timer-card[data-card-id]").forEach((element) => {
    const card = getCardById(element.dataset.cardId);
    if (card?.kind === "timer") {
      updateTimerCardElement(element, card, now);
    }
  });
}

function refreshVisibleReminderCards(now = Date.now()) {
  workspace.querySelectorAll(".reminder-card[data-card-id]").forEach((element) => {
    const card = getCardById(element.dataset.cardId);
    if (card?.kind === "reminder") {
      updateReminderCardElement(element, card, now);
    }
  });
}

function maybeTriggerTimerNotification(card, now) {
  if (card.timerNotifyToast === false && card.timerPlaySound !== true) {
    return false;
  }

  if (Number.isFinite(card.timerCompletionNotifiedAt)) {
    return false;
  }

  card.timerCompletionNotifiedAt = now;
  void requestDesktopNotification({
    notificationId: buildBoardNotificationId("timer", card.id),
    cardId: card.id,
    title: card.title || t("newTimer"),
    body: t("timerFinishedNotificationBody", {
      title: card.title || t("newTimer")
    }),
    playSound: card.timerPlaySound === true,
    allowAcknowledge: false,
    persistent: false,
    openLabel: t("notificationActionOpen")
  });
  return true;
}

function maybeTriggerReminderNotification(card, now) {
  const reminderAt = parseReminderTimestamp(card.reminderAt);
  if (reminderAt === null || Number.isFinite(card.reminderAcknowledgedAt) || now < reminderAt) {
    return false;
  }

  const alreadyTriggered = Number.isFinite(card.reminderLastTriggeredAt);
  if (alreadyTriggered) {
    if (!card.reminderRepeatUntilAcknowledged) {
      return false;
    }

    if (now - card.reminderLastTriggeredAt < getReminderRepeatIntervalMs(card)) {
      return false;
    }
  }

  if (card.reminderShowToast === false && card.reminderPlaySound !== true) {
    return false;
  }

  card.reminderLastTriggeredAt = now;
  void requestDesktopNotification({
    notificationId: buildBoardNotificationId("reminder", card.id),
    cardId: card.id,
    title: card.title || t("newReminder"),
    body: (card.text || "").trim() || t("reminderNotificationBody", {
      time: formatDateTimeDisplay(reminderAt)
    }),
    playSound: card.reminderPlaySound === true,
    allowAcknowledge: card.reminderRepeatUntilAcknowledged !== false,
    persistent: card.reminderRepeatUntilAcknowledged !== false,
    acknowledgeLabel: t("notificationActionAcknowledge"),
    openLabel: t("notificationActionOpen")
  });

  return true;
}

function handleTimerTick(options = {}) {
  const sideEffects = options.sideEffects !== false;
  const now = Date.now();
  let changed = false;

  state.cards.forEach((card) => {
    if (card.kind === "timer" && Number.isFinite(card.timerEndsAt)) {
      const remainingMs = clamp(card.timerEndsAt - now, 0, getTimerDurationMs(card));
      if (remainingMs !== card.timerRemainingMs) {
        card.timerRemainingMs = remainingMs;
      }
      if (remainingMs <= 0) {
        card.timerEndsAt = null;
        changed = true;
        if (sideEffects && maybeTriggerTimerNotification(card, now)) {
          changed = true;
        }
      }
    }

    if (sideEffects && card.kind === "reminder") {
      changed = maybeTriggerReminderNotification(card, now) || changed;
    }
  });

  refreshVisibleTimerCards(now);
  refreshVisibleReminderCards(now);
  if (sideEffects && changed) {
    void saveState({ skipHistory: true });
  }
}

function setTimerDuration(card, minutesValue) {
  ensureEditMode();
  const timerDurationMinutes = normalizeTimerDurationMinutes(minutesValue);
  const durationMs = timerDurationMinutes * 60 * 1000;
  const now = Date.now();
  const wasRunning = Number.isFinite(card.timerEndsAt);

  card.timerDurationMinutes = timerDurationMinutes;
  card.timerRemainingMs = durationMs;
  card.timerEndsAt = wasRunning ? now + durationMs : null;
  clearTimerCompletionNotification(card);
  void dismissNotificationsForCard(card.id);
  refreshVisibleTimerCards(now);
  scheduleSave();
}

function toggleTimer(card) {
  ensureEditMode();
  const now = Date.now();
  const remainingMs = getTimerRemainingMs(card, now);

  if (Number.isFinite(card.timerEndsAt)) {
    card.timerRemainingMs = remainingMs;
    card.timerEndsAt = null;
  } else {
    const nextRemaining = remainingMs > 0 ? remainingMs : getTimerDurationMs(card);
    card.timerRemainingMs = nextRemaining;
    card.timerEndsAt = now + nextRemaining;
    clearTimerCompletionNotification(card);
  }

  refreshVisibleTimerCards(now);
  scheduleSave();
}

function resetTimer(card) {
  ensureEditMode();
  const now = Date.now();
  card.timerEndsAt = null;
  card.timerRemainingMs = getTimerDurationMs(card);
  clearTimerCompletionNotification(card);
  void dismissNotificationsForCard(card.id);
  refreshVisibleTimerCards(now);
  scheduleSave();
}

function renderTimer(card) {
  const wrapper = document.createElement("div");
  wrapper.className = "timer-card";
  wrapper.dataset.cardId = card.id;

  const display = document.createElement("div");
  display.className = "timer-display";

  const status = document.createElement("div");
  status.className = "timer-status";

  const meter = document.createElement("div");
  meter.className = "timer-progress";
  const fill = document.createElement("span");
  fill.className = "timer-progress-fill";
  meter.appendChild(fill);

  const controls = document.createElement("div");
  controls.className = "timer-controls";

  const durationRow = document.createElement("label");
  durationRow.className = "timer-duration-row";
  const durationLabel = document.createElement("span");
  durationLabel.textContent = t("timerMinutes");
  const durationInput = document.createElement("input");
  durationInput.type = "number";
  durationInput.className = "timer-duration-input card-field";
  durationInput.min = String(minTimerDurationMinutes);
  durationInput.max = String(maxTimerDurationMinutes);
  durationInput.step = "1";
  durationInput.value = String(normalizeTimerDurationMinutes(card.timerDurationMinutes));
  durationInput.readOnly = state.locked;
  durationInput.addEventListener("change", () => setTimerDuration(card, durationInput.value));
  durationRow.append(durationLabel, durationInput);

  const options = document.createElement("div");
  options.className = "timer-options";
  const notifyToastOption = createCardCheckbox("timerNotifyToast", "timer-notify-toast", card.timerNotifyToast !== false, (checked) => {
    card.timerNotifyToast = checked;
    scheduleSave();
  });
  const playSoundOption = createCardCheckbox("timerPlaySound", "timer-play-sound", card.timerPlaySound === true, (checked) => {
    card.timerPlaySound = checked;
    scheduleSave();
  });
  options.append(notifyToastOption.label, playSoundOption.label);

  const actions = document.createElement("div");
  actions.className = "timer-actions";

  const toggleButton = document.createElement("button");
  toggleButton.type = "button";
  toggleButton.className = "timer-toggle";
  toggleButton.addEventListener("click", () => toggleTimer(card));

  const resetButton = document.createElement("button");
  resetButton.type = "button";
  resetButton.textContent = t("timerReset");
  resetButton.addEventListener("click", () => resetTimer(card));

  actions.append(toggleButton, resetButton);
  controls.append(durationRow, options, actions);
  wrapper.append(display, status, meter, controls);
  updateTimerCardElement(wrapper, card);
  return wrapper;
}

function renderReminder(card) {
  const wrapper = document.createElement("div");
  wrapper.className = "reminder-card";
  wrapper.dataset.cardId = card.id;

  const dateLabel = document.createElement("label");
  dateLabel.className = "schedule-time-wrap";
  const dateCaption = document.createElement("span");
  dateCaption.className = "schedule-item-label";
  dateCaption.textContent = t("reminderDateTime");
  const dateInput = document.createElement("input");
  dateInput.type = "datetime-local";
  dateInput.className = "card-field reminder-date-input";
  dateInput.value = normalizeReminderDateTime(card.reminderAt);
  dateInput.disabled = state.locked;
  dateInput.addEventListener("change", () => {
    card.reminderAt = normalizeReminderDateTime(dateInput.value);
    resetReminderDeliveryState(card);
    void dismissNotificationsForCard(card.id);
    refreshVisibleReminderCards();
    scheduleSave();
  });
  dateLabel.append(dateCaption, dateInput);

  const messageLabel = document.createElement("label");
  messageLabel.className = "schedule-note-wrap";
  const messageCaption = document.createElement("span");
  messageCaption.className = "schedule-item-label";
  messageCaption.textContent = t("reminderMessage");
  const messageInput = renderRichTextField({
    className: "card-field schedule-note-input reminder-message-input",
    placeholderKey: "reminderMessagePlaceholder",
    getHtml: () => card.textHtml,
    getText: () => card.text,
    setValue: (html, plainText) => {
      card.textHtml = html;
      card.text = plainText;
    },
    onInput: (editor) => {
      syncAutoSizedFields(editor.closest(".card"));
    }
  });
  messageLabel.append(messageCaption, messageInput);

  const options = document.createElement("div");
  options.className = "reminder-options";
  const notifyToastOption = createCardCheckbox("reminderNotifyToast", "reminder-notify-toast", card.reminderShowToast !== false, (checked) => {
    card.reminderShowToast = checked;
    scheduleSave();
  });
  const playSoundOption = createCardCheckbox("reminderPlaySound", "reminder-play-sound", card.reminderPlaySound === true, (checked) => {
    card.reminderPlaySound = checked;
    scheduleSave();
  });
  const repeatOption = createCardCheckbox("reminderRepeatUntilAcknowledged", "reminder-repeat-toggle", card.reminderRepeatUntilAcknowledged !== false, (checked) => {
    card.reminderRepeatUntilAcknowledged = checked;
    if (!checked) {
      void dismissNotificationsForCard(card.id);
    }
    refreshVisibleReminderCards();
    scheduleSave();
  });
  options.append(notifyToastOption.label, playSoundOption.label, repeatOption.label);

  const repeatRow = document.createElement("label");
  repeatRow.className = "timer-duration-row";
  const repeatLabel = document.createElement("span");
  repeatLabel.textContent = t("reminderRepeatInterval");
  const repeatInput = document.createElement("input");
  repeatInput.type = "number";
  repeatInput.className = "card-field timer-duration-input reminder-repeat-input";
  repeatInput.min = String(minReminderRepeatIntervalMinutes);
  repeatInput.max = String(maxReminderRepeatIntervalMinutes);
  repeatInput.step = "1";
  repeatInput.value = String(normalizeReminderRepeatIntervalMinutes(card.reminderRepeatIntervalMinutes));
  repeatInput.disabled = state.locked || !card.reminderRepeatUntilAcknowledged;
  repeatInput.addEventListener("change", () => {
    card.reminderRepeatIntervalMinutes = normalizeReminderRepeatIntervalMinutes(repeatInput.value);
    repeatInput.value = String(card.reminderRepeatIntervalMinutes);
    scheduleSave();
  });
  repeatRow.append(repeatLabel, repeatInput);

  const status = document.createElement("div");
  status.className = "reminder-status";

  const actions = document.createElement("div");
  actions.className = "reminder-actions";
  const acknowledgeButton = document.createElement("button");
  acknowledgeButton.type = "button";
  acknowledgeButton.className = "reminder-acknowledge";
  acknowledgeButton.addEventListener("click", () => {
    if (Number.isFinite(card.reminderAcknowledgedAt)) {
      resetReminderDeliveryState(card);
    } else {
      card.reminderAcknowledgedAt = Date.now();
      void dismissNotificationsForCard(card.id);
    }
    render();
    scheduleSave();
  });
  actions.appendChild(acknowledgeButton);

  wrapper.append(dateLabel, messageLabel, options, repeatRow, status, actions);
  updateReminderCardElement(wrapper, card);
  return wrapper;
}

function renderMedia(card) {
  const wrapper = document.createElement("div");
  wrapper.className = "media-frame";

  const media = document.createElement(card.kind === "video" ? "video" : "img");
  media.src = card.src || "";
  media.alt = card.title || t("mediaAlt");

  if (card.kind === "video") {
    media.controls = true;
    media.loop = true;
    media.playsInline = true;
  }

  wrapper.appendChild(media);
  return wrapper;
}

function renderAudio(card) {
  const wrapper = document.createElement("div");
  wrapper.className = "audio-frame";

  const audio = document.createElement("audio");
  audio.src = card.src || "";
  audio.controls = true;
  audio.preload = "metadata";

  wrapper.appendChild(audio);
  return wrapper;
}

function formatFileSize(sizeBytes) {
  const value = Number(sizeBytes);
  if (!Number.isFinite(value) || value <= 0) {
    return "-";
  }

  const units = ["B", "KB", "MB", "GB"];
  let size = value;
  let unitIndex = 0;
  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex += 1;
  }
  return `${size >= 10 || unitIndex === 0 ? size.toFixed(0) : size.toFixed(1)} ${units[unitIndex]}`;
}

function getFileNameFromValue(value = "") {
  if (typeof value !== "string" || !value) {
    return "";
  }

  const normalized = value.split(/[?#]/, 1)[0];
  const parts = normalized.split(/[\\/]/);
  const fileName = parts[parts.length - 1] || "";

  try {
    return decodeURIComponent(fileName);
  } catch {
    return fileName;
  }
}

function getFileDisplayName(card) {
  return card.originalName || card.title || getFileNameFromValue(card.assetRelativePath || card.path || card.src) || t("file");
}

function getFileExtension(card) {
  const fileName = getFileDisplayName(card);
  const dotIndex = fileName.lastIndexOf(".");
  return dotIndex > 0 ? fileName.slice(dotIndex + 1).toLowerCase() : "";
}

function getFileTypeLabel(card) {
  const extension = getFileExtension(card);
  return extension ? extension.toUpperCase() : t("file");
}

function getFilePreviewKind(card) {
  const extension = getFileExtension(card);
  if (!extension) {
    return "none";
  }
  if (imagePreviewExtensions.has(extension)) {
    return "image";
  }
  if (videoPreviewExtensions.has(extension)) {
    return "video";
  }
  if (audioPreviewExtensions.has(extension)) {
    return "audio";
  }
  if (extension === "pdf") {
    return "pdf";
  }
  if (officePreviewExtensions.has(extension)) {
    return "office";
  }
  if (textPreviewExtensions.has(extension)) {
    return "text";
  }
  return "none";
}

function canPreviewFile(card) {
  return getFilePreviewKind(card) !== "none";
}

function getFilePreviewCacheKey(card, maxChars) {
  return `${card.assetId || card.assetRelativePath || card.path || card.src || card.id}:${maxChars}`;
}

async function getFileTextPreview(card, maxChars = 3200) {
  const previewKey = getFilePreviewCacheKey(card, maxChars);
  const cached = filePreviewCache.get(previewKey);
  if (cached && typeof cached === "object" && !("then" in cached)) {
    return cached;
  }
  if (cached) {
    return cached;
  }

  if (!window.desktopBoard?.readFilePreview) {
    return {
      format: "text",
      content: ""
    };
  }

  const loader = Promise.resolve(window.desktopBoard.readFilePreview(card.path || card.src || "", getFileExtension(card), maxChars))
    .then((value) => ({
      format: value?.format === "html" ? "html" : "text",
      content: String(value?.content || "").replace(/\u0000/g, "")
    }));

  filePreviewCache.set(previewKey, loader);
  try {
    const preview = await loader;
    filePreviewCache.set(previewKey, preview);
    return preview;
  } catch (error) {
    filePreviewCache.delete(previewKey);
    throw error;
  }
}

function clearFilePreviewCache(card) {
  const cachePrefix = `${card.assetId || card.assetRelativePath || card.path || card.src || card.id}:`;
  [...filePreviewCache.keys()].forEach((cacheKey) => {
    if (cacheKey.startsWith(cachePrefix)) {
      filePreviewCache.delete(cacheKey);
    }
  });
}

function loadFileTextPreview(card, previewHost) {
  previewHost.classList.add("is-loading");
  previewHost.textContent = t("previewLoading");

  getFileTextPreview(card)
    .then((result) => {
      if (!previewHost.isConnected) {
        return;
      }

      const content = String(result?.content || "").trim();
      previewHost.classList.remove("is-loading");

      if (!content) {
        previewHost.textContent = t("previewUnavailable");
        previewHost.classList.add("is-empty");
        return;
      }

      previewHost.classList.remove("is-empty");
      previewHost.textContent = "";
      if (result.format === "html") {
        const html = document.createElement("div");
        html.className = "file-preview-html";
        html.innerHTML = content;
        previewHost.appendChild(html);
      } else {
        const previewText = document.createElement("pre");
        previewText.className = "file-preview-text";
        previewText.textContent = content;
        previewHost.appendChild(previewText);
      }
    })
    .catch(() => {
      if (!previewHost.isConnected) {
        return;
      }
      previewHost.classList.remove("is-loading");
      previewHost.textContent = t("previewReadError");
      previewHost.classList.add("is-empty");
    });
}

function renderFilePreview(card) {
  if (card.showPreview === false) {
    return null;
  }

  const previewKind = getFilePreviewKind(card);
  if (previewKind === "none") {
    return null;
  }

  const preview = document.createElement("div");
  preview.className = "file-preview";

  if (!card.src && !["text", "office"].includes(previewKind)) {
    preview.classList.add("is-empty");
    preview.textContent = t("fileMissing");
    return preview;
  }

  if (previewKind === "image") {
    const image = document.createElement("img");
    image.className = "file-preview-image";
    image.src = card.src || "";
    image.alt = getFileDisplayName(card);
    image.loading = "lazy";
    preview.appendChild(image);
    return preview;
  }

  if (previewKind === "video") {
    const video = document.createElement("video");
    video.className = "file-preview-media";
    video.src = card.src || "";
    video.controls = true;
    video.preload = "metadata";
    video.playsInline = true;
    preview.appendChild(video);
    return preview;
  }

  if (previewKind === "audio") {
    preview.classList.add("is-audio");
    const audio = document.createElement("audio");
    audio.className = "file-preview-media";
    audio.src = card.src || "";
    audio.controls = true;
    audio.preload = "metadata";
    preview.appendChild(audio);
    return preview;
  }

  if (previewKind === "pdf") {
    const frame = document.createElement("iframe");
    frame.className = "file-preview-pdf";
    frame.loading = "lazy";
    frame.src = `${card.src || ""}#toolbar=0&navpanes=0&scrollbar=1`;
    preview.appendChild(frame);
    return preview;
  }

  loadFileTextPreview(card, preview);
  return preview;
}

async function replaceStoredFile(card) {
  ensureEditMode();
  if (!contextMenu.hidden) {
    closeContextMenu();
  }

  const previousDisplayName = getFileDisplayName(card);
  const previousTitle = card.title || "";
  const previousPreview = { ...card };

  const file = window.desktopBoard?.pickFile
    ? await window.desktopBoard.pickFile({
      title: t("replaceFile"),
      defaultPath: card.path || undefined
    })
    : await pickFileInBrowser();

  if (!file) {
    return;
  }

  clearFilePreviewCache(previousPreview);
  card.src = file.src || "";
  card.path = file.path || null;
  card.assetId = file.assetId || null;
  card.assetRelativePath = file.assetRelativePath || null;
  card.originalName = file.originalName || file.name || previousDisplayName;
  card.sizeBytes = Number.isFinite(Number(file.sizeBytes)) ? Number(file.sizeBytes) : null;
  card.showPreview = true;

  if (!previousTitle || previousTitle === previousDisplayName) {
    card.title = card.originalName || previousTitle;
  }

  render();
  scheduleSave();
  void logClientEvent("info", "file.replace", "Replaced file card asset", {
    cardId: card.id,
    fileName: card.originalName || ""
  });
}

async function openStoredFile(card) {
  if (!contextMenu.hidden) {
    closeContextMenu();
  }
  const filePath = getStoredCardFilePath(card);
  if (window.desktopBoard?.openFilePath && filePath) {
    await window.desktopBoard.openFilePath(filePath);
    return;
  }

  if (card.src) {
    window.open(card.src, "_blank", "noopener,noreferrer");
  }
}

async function revealStoredFile(card) {
  if (!contextMenu.hidden) {
    closeContextMenu();
  }
  const filePath = getStoredCardFilePath(card);
  if (window.desktopBoard?.revealFilePath && filePath) {
    await window.desktopBoard.revealFilePath(filePath);
  }
}

function getStoredCardFilePath(card) {
  if (typeof card?.path === "string" && card.path) {
    return card.path;
  }

  if (typeof card?.src !== "string" || !card.src.toLowerCase().startsWith("file:")) {
    return "";
  }

  try {
    return decodeURIComponent(new URL(card.src).pathname).replace(/^\/([a-zA-Z]:\/)/, "$1").replaceAll("/", "\\");
  } catch {
    return "";
  }
}

function canRevealStoredCardFile(card) {
  return ["file", "image", "video", "audio"].includes(card?.kind) && Boolean(getStoredCardFilePath(card));
}

function renderFile(card) {
  const wrapper = document.createElement("div");
  wrapper.className = "file-card";
  wrapper.classList.toggle("is-preview-visible", card.showPreview !== false && canPreviewFile(card));

  const name = document.createElement("div");
  name.className = "file-name";
  name.textContent = getFileDisplayName(card);
  name.title = name.textContent;

  const preview = renderFilePreview(card);

  const meta = document.createElement("div");
  meta.className = "file-meta";

  const typeRow = document.createElement("div");
  typeRow.className = "file-meta-row";
  typeRow.textContent = `${t("fileType")}: ${getFileTypeLabel(card)}`;

  const sizeRow = document.createElement("div");
  sizeRow.className = "file-meta-row";
  sizeRow.textContent = `${t("fileSize")}: ${formatFileSize(card.sizeBytes)}`;

  const pathRow = document.createElement("div");
  pathRow.className = "file-meta-row";
  pathRow.textContent = `${t("fileStoredAt")}: ${card.assetRelativePath || t("fileMissing")}`;

  meta.append(typeRow, sizeRow, pathRow);

  const actions = document.createElement("div");
  actions.className = "file-actions";

  const openButton = document.createElement("button");
  openButton.type = "button";
  openButton.textContent = t("openFile");
  openButton.disabled = !getStoredCardFilePath(card) && !card.src;
  openButton.addEventListener("click", () => openStoredFile(card));

  const revealButton = document.createElement("button");
  revealButton.type = "button";
  revealButton.textContent = t("revealFile");
  revealButton.disabled = !getStoredCardFilePath(card);
  revealButton.addEventListener("click", () => revealStoredFile(card));

  const replaceButton = document.createElement("button");
  replaceButton.type = "button";
  replaceButton.className = "file-action-replace";
  replaceButton.textContent = t("replaceFile");
  replaceButton.disabled = state.locked;
  replaceButton.addEventListener("click", () => replaceStoredFile(card));

  actions.append(openButton, revealButton, replaceButton);
  wrapper.append(name);
  if (preview) {
    wrapper.appendChild(preview);
  }
  wrapper.append(meta, actions);
  return wrapper;
}

function renderWeb(card) {
  const wrapper = document.createElement("div");
  wrapper.className = "web-frame";
  wrapper.classList.toggle("is-web-interactive", Boolean(card.webInteractive));
  const url = normalizeUrl(card.url || card.src);

  if (!url) {
    wrapper.classList.add("web-frame-empty");
    wrapper.textContent = t("urlMissing");
    return wrapper;
  }

  if (!shouldRenderLiveWebContent()) {
    wrapper.classList.add("is-web-paused");
    const placeholder = document.createElement("div");
    placeholder.className = "web-frame-paused";
    placeholder.textContent = getUrlTitle(url);
    wrapper.appendChild(placeholder);
    return wrapper;
  }

  if (shouldUseNativeWebCards()) {
    const slot = document.createElement("div");
    slot.className = "web-native-slot";
    slot.textContent = getUrlTitle(url);
    wrapper.appendChild(slot);
    return wrapper;
  }

  const useWebview = Boolean(window.desktopBoard);
  const browser = document.createElement(useWebview ? "webview" : "iframe");
  browser.className = "web-view";

  if (useWebview) {
    browser.dataset.pendingSrc = url;
    browser.setAttribute("partition", "persist:desktop-board-web");
    browser.setAttribute("webpreferences", "contextIsolation=yes,nodeIntegration=no");
    browser.setAttribute("allowpopups", "");
    browser.addEventListener("did-attach", () => {
      const cardElement = browser.closest(".card");
      syncWebCardElement(cardElement);
      loadPendingWebView(cardElement);
    });
    browser.addEventListener("dom-ready", () => {
      syncWebCardElement(browser.closest(".card"));
    });
    browser.addEventListener("did-finish-load", () => {
      browser.dataset.recoveryCount = "0";
      syncWebCardElement(browser.closest(".card"));
    });
    browser.addEventListener("did-fail-load", (event) => {
      if (event?.isMainFrame === false || event?.errorCode === -3) {
        return;
      }
      scheduleWebViewRecovery(browser);
    });
    browser.addEventListener("render-process-gone", () => scheduleWebViewRecovery(browser));
    browser.addEventListener("unresponsive", () => scheduleWebViewRecovery(browser));
  } else {
    browser.loading = "lazy";
    browser.referrerPolicy = "no-referrer-when-downgrade";
    browser.allow = "autoplay; encrypted-media; fullscreen; picture-in-picture";
    browser.src = url;
  }

  const shield = document.createElement("div");
  shield.className = "web-frame-shield";
  shield.title = t("webShield");
  shield.addEventListener("dblclick", (event) => {
    event.preventDefault();
    event.stopPropagation();
    setWebInteraction(card, true);
  });

  wrapper.append(browser, shield);
  return wrapper;
}

function loadPendingWebView(cardElement) {
  if (!cardElement || cardElement.dataset.kind !== "web") {
    return;
  }

  const browser = cardElement.querySelector(".web-view");
  if (!browser || browser.tagName.toLowerCase() !== "webview") {
    return;
  }

  const pendingSrc = browser.dataset.pendingSrc;
  if (!pendingSrc || browser.dataset.loadedSrc === pendingSrc || !browser.isConnected) {
    return;
  }

  const width = Number(browser.getAttribute("width")) || Math.round(browser.clientWidth);
  const height = Number(browser.getAttribute("height")) || Math.round(browser.clientHeight);
  if (width <= 1 || height <= 1) {
    return;
  }

  browser.dataset.loadedSrc = pendingSrc;
  browser.setAttribute("src", pendingSrc);
  browser.src = pendingSrc;
}

function scheduleWebViewRecovery(browser) {
  const currentCount = Number(browser?.dataset?.recoveryCount || 0);
  if (!browser || currentCount >= 2) {
    return;
  }

  browser.dataset.recoveryCount = String(currentCount + 1);
  window.setTimeout(() => {
    if (!browser.isConnected) {
      return;
    }

    try {
      if (typeof browser.reloadIgnoringCache === "function") {
        browser.reloadIgnoringCache();
      } else if (typeof browser.reload === "function") {
        browser.reload();
      }
    } catch (error) {
      reportError("web.recover", error);
    }
  }, 700);
}

function setupWebCardSizeSync(cardElement) {
  const body = cardElement.querySelector(".card-body");
  if (!body) {
    return;
  }

  webResizeObserver?.observe(body);
  requestAnimationFrame(() => {
    syncWebCardElement(cardElement);
    requestAnimationFrame(() => syncWebCardElement(cardElement));
  });
}

function isAnyModalOpen() {
  return Boolean(document.querySelector(".modal:not([hidden])"));
}

function getNativeWebBodyRects() {
  return [...workspace.querySelectorAll('.card[data-kind="web"] .card-body')]
    .map((body) => {
      const rect = body.getBoundingClientRect();
      return {
        left: rect.left,
        top: rect.top,
        right: rect.right,
        bottom: rect.top + Math.max(1, rect.height - nativeWebResizeReserve),
        width: rect.width,
        height: Math.max(1, rect.height - nativeWebResizeReserve)
      };
    })
    .filter((rect) => rect.width > 1 && rect.height > 1);
}

function getRectOverlapArea(first, second) {
  if (!first || !second) {
    return 0;
  }

  const left = Math.max(first.left, second.left);
  const right = Math.min(first.right, second.right);
  const top = Math.max(first.top, second.top);
  const bottom = Math.min(first.bottom, second.bottom);
  return Math.max(0, right - left) * Math.max(0, bottom - top);
}

function getTotalNativeWebOverlapArea(rect) {
  return getNativeWebBodyRects().reduce((sum, webRect) => sum + getRectOverlapArea(rect, webRect), 0);
}

function shouldHideNativeWebCardForUi(rect) {
  if (isAnyModalOpen()) {
    return true;
  }

  if (!contextMenu || contextMenu.hidden || !rect) {
    return false;
  }

  return getRectOverlapArea(rect, contextMenu.getBoundingClientRect()) > 0;
}

function getNativeWebCardPayload(cardElement, options = {}) {
  const card = cardIndex.get(cardElement?.dataset?.id || "");
  const body = cardElement?.querySelector(".card-body");
  if (!card || card.kind !== "web" || !body) {
    return null;
  }

  const url = normalizeUrl(card.url || card.src);
  const rect = body.getBoundingClientRect();
  const reserveBottom = shouldUseNativeWebCards() ? nativeWebResizeReserve : 0;
  const nativeHeight = Math.max(1, rect.height - reserveBottom);
  const nativeRect = {
    left: rect.left,
    top: rect.top,
    right: rect.right,
    bottom: rect.top + nativeHeight,
    width: rect.width,
    height: nativeHeight
  };
  const visible = options.forceHidden === true
    ? false
    : shouldRenderLiveWebContent()
    && !shouldHideNativeWebCardForUi(nativeRect)
    && Boolean(url)
    && rect.width > 1
    && nativeHeight > 1
    && rect.right > 0
    && rect.bottom > 0
    && rect.left < window.innerWidth
    && rect.top < window.innerHeight;

  return {
    cardId: card.id,
    url,
    visible,
    bounds: {
      x: rect.left,
      y: rect.top,
      width: rect.width,
      height: nativeHeight
    }
  };
}

function syncNativeWebCardsNow() {
  nativeWebCardSyncFrame = 0;
  if (!window.desktopBoard?.syncWebCards) {
    return;
  }

  const forceHidden = !shouldRenderLiveWebContent() || isAnyModalOpen();
  const cards = [...workspace.querySelectorAll('.card[data-kind="web"]')]
    .sort((first, second) => compareCardsForRender(
      cardIndex.get(first.dataset.id || ""),
      cardIndex.get(second.dataset.id || "")
    ))
    .map((cardElement) => getNativeWebCardPayload(cardElement, { forceHidden }))
    .filter(Boolean);
  void window.desktopBoard.syncWebCards(cards);
}

function scheduleNativeWebCardSync() {
  if (!window.desktopBoard?.syncWebCards || nativeWebCardSyncFrame) {
    return;
  }

  nativeWebCardSyncFrame = requestAnimationFrame(syncNativeWebCardsNow);
}

function syncWebCardElement(cardElement) {
  if (!cardElement || cardElement.dataset.kind !== "web") {
    return;
  }

  if (shouldUseNativeWebCards()) {
    scheduleNativeWebCardSync();
    return;
  }

  const body = cardElement.querySelector(".card-body");
  const frame = cardElement.querySelector(".web-frame");
  const browser = cardElement.querySelector(".web-view");
  if (!body || !frame || !browser) {
    return;
  }

  const width = Math.max(1, Math.round(body.clientWidth));
  const height = Math.max(1, Math.round(body.clientHeight));
  if (!width || !height) {
    return;
  }

  const nextWidth = `${width}px`;
  const nextHeight = `${height}px`;
  frame.style.width = nextWidth;
  frame.style.height = nextHeight;
  browser.style.width = nextWidth;
  browser.style.height = nextHeight;

  if (browser.tagName.toLowerCase() === "webview") {
    browser.setAttribute("width", String(width));
    browser.setAttribute("height", String(height));
    loadPendingWebView(cardElement);
  }
}

function syncAllWebCardElements() {
  if (shouldUseNativeWebCards()) {
    scheduleNativeWebCardSync();
    return;
  }

  workspace.querySelectorAll('.card[data-kind="web"]').forEach((cardElement) => {
    syncWebCardElement(cardElement);
  });
}

function removeChecklistRow(card, taskId, options = {}) {
  if (state.locked) {
    return;
  }

  const tasks = Array.isArray(card.tasks) ? card.tasks : [];
  if (!tasks.some((task) => task.id === taskId)) {
    return;
  }

  card.tasks = tasks.filter((task) => task.id !== taskId);
  options.onRemove?.();
  render();
  scheduleSave();
}

function createChecklistRow(card, task, options = {}) {
  const item = document.createElement("li");
  item.className = "task-item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.done;
  checkbox.disabled = state.locked;
  checkbox.addEventListener("change", () => {
    task.done = checkbox.checked;
    options.onToggle?.();
    scheduleSave();
  });

  const text = renderRichTextField({
    className: "task-text-input",
    placeholderKey: "newTask",
    getHtml: () => task.textHtml,
    getText: () => task.text,
    setValue: (html, plainText) => {
      task.textHtml = html;
      task.text = plainText;
    },
    onInput: (editor) => {
      syncAutoSizedFields(editor.closest(".card"));
    },
    onBlur: () => {
      if (!String(task.text || "").trim()) {
        window.setTimeout(() => {
          if (!String(task.text || "").trim()) {
            removeChecklistRow(card, task.id, options);
          }
        }, 0);
      }
    }
  });
  if (state.locked) {
    text.setAttribute("aria-readonly", "true");
  }

  item.append(checkbox, text);
  return item;
}

function createChecklistAddButton(card, label = t("addTask"), afterAdd = null) {
  const addTask = document.createElement("button");
  addTask.className = "add-task";
  addTask.type = "button";
  addTask.textContent = label;
  addTask.addEventListener("click", () => {
    ensureEditMode();
    card.tasks = Array.isArray(card.tasks) ? card.tasks : [];
    const text = t("newTask");
    card.tasks.push({
      id: createId("task"),
      text,
      textHtml: plainTextToDefaultRichTextHtml(text),
      done: false
    });
    growCardHeight(card, 48);
    afterAdd?.();
    render();
    scheduleSave();
  });
  return addTask;
}

function renderTasks(card) {
  const wrapper = document.createElement("div");
  wrapper.className = "tasks-card";
  const list = document.createElement("ul");
  list.className = "task-list";

  card.tasks.forEach((task) => {
    list.appendChild(createChecklistRow(card, task));
  });

  const addTask = createChecklistAddButton(card);
  wrapper.append(list, addTask);
  return wrapper;
}

function syncScheduleLegacyText(card) {
  const entries = Array.isArray(card.scheduleEntries) ? card.scheduleEntries : [];
  card.text = entries
    .map((entry) => {
      const time = normalizeScheduleTime(entry.time);
      const note = String(entry.note || "").trim();
      if (time && note) {
        return `${time} - ${note}`;
      }
      return time || note;
    })
    .filter(Boolean)
    .join("\n");
}

function createScheduleTimeEditor(entry) {
  if (state.settings.timeFormat === "12h") {
    const group = document.createElement("div");
    group.className = "schedule-time-group";

    const parts = getScheduleTimeParts(entry.time);
    const hourSelect = document.createElement("select");
    hourSelect.className = "schedule-time-select";
    for (let hour = 1; hour <= 12; hour += 1) {
      const option = document.createElement("option");
      option.value = String(hour);
      option.textContent = String(hour);
      hourSelect.appendChild(option);
    }
    hourSelect.value = parts.hour;
    hourSelect.disabled = state.locked;

    const minuteSelect = document.createElement("select");
    minuteSelect.className = "schedule-time-select";
    for (let minute = 0; minute < 60; minute += 1) {
      const option = document.createElement("option");
      option.value = String(minute).padStart(2, "0");
      option.textContent = String(minute).padStart(2, "0");
      minuteSelect.appendChild(option);
    }
    minuteSelect.value = parts.minute;
    minuteSelect.disabled = state.locked;

    const periodSelect = document.createElement("select");
    periodSelect.className = "schedule-time-select schedule-period-select";
    ["AM", "PM"].forEach((period) => {
      const option = document.createElement("option");
      option.value = period;
      option.textContent = period;
      periodSelect.appendChild(option);
    });
    periodSelect.value = parts.period;
    periodSelect.disabled = state.locked;

    const handleChange = () => {
      entry.time = scheduleTimeFrom12Hour(hourSelect.value, minuteSelect.value, periodSelect.value);
    };

    hourSelect.addEventListener("change", handleChange);
    minuteSelect.addEventListener("change", handleChange);
    periodSelect.addEventListener("change", handleChange);
    group.append(hourSelect, minuteSelect, periodSelect);
    return group;
  }

  const input = document.createElement("input");
  input.className = "schedule-time-input";
  input.type = "time";
  input.step = 300;
  input.value = normalizeScheduleTime(entry.time);
  input.disabled = state.locked;
  input.addEventListener("input", () => {
    entry.time = normalizeScheduleTime(input.value);
  });
  return input;
}

function createScheduleRow(card, entry) {
  const item = document.createElement("div");
  item.className = "schedule-item";

  const timeLabel = document.createElement("label");
  timeLabel.className = "schedule-time-wrap";
  const timeCaption = document.createElement("span");
  timeCaption.className = "schedule-item-label";
  timeCaption.textContent = t("scheduleTime");

  const timeEditor = createScheduleTimeEditor(entry);
  timeEditor.addEventListener?.("change", () => {
    syncScheduleLegacyText(card);
    scheduleSave();
  });
  timeEditor.addEventListener?.("input", () => {
    syncScheduleLegacyText(card);
    scheduleSave();
  });
  timeLabel.append(timeCaption, timeEditor);

  const noteLabel = document.createElement("label");
  noteLabel.className = "schedule-note-wrap";
  const noteCaption = document.createElement("span");
  noteCaption.className = "schedule-item-label";
  noteCaption.textContent = t("scheduleComment");

  const noteInput = renderRichTextField({
    className: "card-field schedule-note-input",
    placeholderKey: "scheduleCommentPlaceholder",
    getHtml: () => entry.noteHtml,
    getText: () => entry.note,
    setValue: (html, plainText) => {
      entry.noteHtml = html;
      entry.note = plainText;
    },
    onInput: (editor) => {
      syncAutoSizedFields(editor.closest(".card"));
      syncScheduleLegacyText(card);
    },
    onBlur: () => {
      syncScheduleLegacyText(card);
    }
  });
  noteLabel.append(noteCaption, noteInput);

  const removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.className = "schedule-remove";
  removeButton.textContent = "x";
  removeButton.title = t("scheduleRemove");
  removeButton.disabled = state.locked;
  removeButton.addEventListener("click", () => {
    if (state.locked) {
      return;
    }
    ensureEditMode();
    card.scheduleEntries = (Array.isArray(card.scheduleEntries) ? card.scheduleEntries : []).filter((itemEntry) => itemEntry.id !== entry.id);
    syncScheduleLegacyText(card);
    render();
    scheduleSave();
  });

  item.append(timeLabel, noteLabel, removeButton);
  return item;
}

function renderSchedule(card) {
  const wrapper = document.createElement("div");
  wrapper.className = "schedule-card";

  const list = document.createElement("div");
  list.className = "schedule-list";

  const entries = Array.isArray(card.scheduleEntries) ? card.scheduleEntries : [];
  if (entries.length === 0) {
    const empty = document.createElement("div");
    empty.className = "schedule-empty";
    empty.textContent = t("scheduleEmpty");
    list.appendChild(empty);
  } else {
    entries.forEach((entry) => {
      list.appendChild(createScheduleRow(card, entry));
    });
  }

  const addButton = document.createElement("button");
  addButton.className = "add-task";
  addButton.type = "button";
  addButton.textContent = t("addScheduleEntry");
  addButton.disabled = state.locked;
  addButton.addEventListener("click", () => {
    ensureEditMode();
    card.scheduleEntries = Array.isArray(card.scheduleEntries) ? card.scheduleEntries : [];
    card.scheduleEntries.push(createScheduleEntry({
      time: entries.length ? entries[entries.length - 1]?.time || "" : "09:00",
      note: ""
    }));
    growCardHeight(card, 76);
    syncScheduleLegacyText(card);
    render();
    scheduleSave();
  });

  wrapper.append(list, addButton);
  return wrapper;
}

function getCardElement(card) {
  return workspace.querySelector(`[data-id="${card.id}"]`);
}

function createSvgElement(tagName) {
  return document.createElementNS(svgNamespace, tagName);
}

function getConnectionsLayer() {
  let layer = workspace.querySelector(".connections-layer");
  if (layer) {
    return layer;
  }

  layer = createSvgElement("svg");
  layer.classList.add("connections-layer");
  layer.setAttribute("viewBox", `${-connectionCanvasOffset} ${-connectionCanvasOffset} ${connectionCanvasSize} ${connectionCanvasSize}`);
  workspace.prepend(layer);
  return layer;
}

function getConnectionAnchorBase(anchor) {
  if (anchor.type === "card") {
    const card = state.cards.find((item) => item.id === anchor.cardId);
    if (!card) {
      return null;
    }

    return {
      x: card.x + card.width / 2,
      y: card.y + card.height / 2
    };
  }

  return resolveConnectionPoint(anchor, state.cards, true);
}

function resolveConnectionAnchor(anchor, towardPoint) {
  if (anchor.type !== "card") {
    return getConnectionAnchorBase(anchor);
  }

  const card = state.cards.find((item) => item.id === anchor.cardId);
  if (!card) {
    return null;
  }

  const center = {
    x: card.x + card.width / 2,
    y: card.y + card.height / 2
  };
  const target = towardPoint || center;
  const deltaX = target.x - center.x;
  const deltaY = target.y - center.y;

  if (Math.abs(deltaX) < 0.001 && Math.abs(deltaY) < 0.001) {
    return center;
  }

  const scaleX = deltaX === 0 ? Number.POSITIVE_INFINITY : (card.width / 2) / Math.abs(deltaX);
  const scaleY = deltaY === 0 ? Number.POSITIVE_INFINITY : (card.height / 2) / Math.abs(deltaY);
  const scale = Math.min(scaleX, scaleY);

  return {
    x: center.x + deltaX * scale + (deltaX / Math.hypot(deltaX, deltaY)) * 10,
    y: center.y + deltaY * scale + (deltaY / Math.hypot(deltaX, deltaY)) * 10
  };
}

function pointEquals(first, second, epsilon = 0.001) {
  return Boolean(
    first
    && second
    && Math.abs(first.x - second.x) <= epsilon
    && Math.abs(first.y - second.y) <= epsilon
  );
}

function getConnectionBoundCardId(source) {
  if (!source) {
    return null;
  }

  if (source.type === "card" && source.cardId) {
    return source.cardId;
  }

  if (source.binding?.type === "group-body" && source.binding.cardId) {
    return source.binding.cardId;
  }

  return null;
}

function createConnectionRouteNode(point, kind = "auto", options = {}) {
  return {
    x: Number(point?.x) || 0,
    y: Number(point?.y) || 0,
    kind,
    pointIndex: Number.isInteger(options.pointIndex) ? options.pointIndex : null,
    boundCardId: options.boundCardId || null
  };
}

function buildConnectionAnchorNodes(connection) {
  const manualPoints = Array.isArray(connection.points) ? connection.points : [];
  const resolvedManualNodes = manualPoints.map((point, index) => createConnectionRouteNode(
    resolveConnectionPoint(point, state.cards, true),
    "manual",
    {
      pointIndex: index,
      boundCardId: getConnectionBoundCardId(point)
    }
  ));
  const fromBase = getConnectionAnchorBase(connection.from);
  const toBase = getConnectionAnchorBase(connection.to);
  if (!fromBase || !toBase) {
    return null;
  }

  const firstTarget = resolvedManualNodes[0] || toBase;
  const lastTarget = resolvedManualNodes[resolvedManualNodes.length - 1] || fromBase;
  const from = resolveConnectionAnchor(connection.from, firstTarget);
  const to = resolveConnectionAnchor(connection.to, lastTarget);
  if (!from || !to) {
    return null;
  }

  return [
    createConnectionRouteNode(from, "anchor", { boundCardId: getConnectionBoundCardId(connection.from) }),
    ...resolvedManualNodes,
    createConnectionRouteNode(to, "anchor", { boundCardId: getConnectionBoundCardId(connection.to) })
  ];
}

function getConnectionRoutePoints(connection) {
  return getConnectionRouteGeometry(connection)?.points || null;
}

function getRoundedPathData(points, radius = 14) {
  if (!points || points.length < 2) {
    return "";
  }

  if (points.length === 2) {
    return `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y}`;
  }

  const commands = [`M ${points[0].x} ${points[0].y}`];
  for (let index = 1; index < points.length - 1; index += 1) {
    const previous = points[index - 1];
    const current = points[index];
    const next = points[index + 1];
    const distanceToPrevious = Math.hypot(current.x - previous.x, current.y - previous.y);
    const distanceToNext = Math.hypot(next.x - current.x, next.y - current.y);
    const bendRadius = Math.min(radius, distanceToPrevious / 2, distanceToNext / 2);

    if (bendRadius <= 0.5) {
      commands.push(`L ${current.x} ${current.y}`);
      continue;
    }

    const before = {
      x: current.x + ((previous.x - current.x) / distanceToPrevious) * bendRadius,
      y: current.y + ((previous.y - current.y) / distanceToPrevious) * bendRadius
    };
    const after = {
      x: current.x + ((next.x - current.x) / distanceToNext) * bendRadius,
      y: current.y + ((next.y - current.y) / distanceToNext) * bendRadius
    };

    commands.push(`L ${before.x} ${before.y}`);
    commands.push(`Q ${current.x} ${current.y} ${after.x} ${after.y}`);
  }

  const last = points[points.length - 1];
  commands.push(`L ${last.x} ${last.y}`);
  return commands.join(" ");
}

function getSmoothPathData(points, tension = 1) {
  if (!points || points.length < 2) {
    return "";
  }

  if (points.length === 2) {
    return `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y}`;
  }

  const factor = tension / 6;
  const commands = [`M ${points[0].x} ${points[0].y}`];
  for (let index = 0; index < points.length - 1; index += 1) {
    const previous = points[index - 1] || points[index];
    const current = points[index];
    const next = points[index + 1];
    const afterNext = points[index + 2] || next;
    const controlStart = {
      x: current.x + (next.x - previous.x) * factor,
      y: current.y + (next.y - previous.y) * factor
    };
    const controlEnd = {
      x: next.x - (afterNext.x - current.x) * factor,
      y: next.y - (afterNext.y - current.y) * factor
    };
    commands.push(`C ${controlStart.x} ${controlStart.y} ${controlEnd.x} ${controlEnd.y} ${next.x} ${next.y}`);
  }

  return commands.join(" ");
}

function getConnectionPathData(connection, routeGeometry = getConnectionRouteGeometry(connection)) {
  const routePoints = routeGeometry?.points || null;
  if (!routePoints) {
    return "";
  }

  return connection.pathStyle === "smooth"
    ? getSmoothPathData(routePoints)
    : getRoundedPathData(routePoints);
}

function getDistanceToSegment(point, start, end) {
  const lengthSquared = (end.x - start.x) ** 2 + (end.y - start.y) ** 2;
  if (lengthSquared === 0) {
    return Math.hypot(point.x - start.x, point.y - start.y);
  }

  const ratio = clamp(
    ((point.x - start.x) * (end.x - start.x) + (point.y - start.y) * (end.y - start.y)) / lengthSquared,
    0,
    1
  );
  const projection = {
    x: start.x + ratio * (end.x - start.x),
    y: start.y + ratio * (end.y - start.y)
  };

  return Math.hypot(point.x - projection.x, point.y - projection.y);
}

function getWaypointInsertIndex(connection, point) {
  const routeGeometry = getConnectionRouteGeometry(connection);
  const routePoints = routeGeometry?.points;
  if (!routePoints || routePoints.length < 2) {
    return connection.points.length;
  }

  let insertIndex = connection.points.length;
  let nearestDistance = Number.POSITIVE_INFINITY;
  for (let index = 0; index < routePoints.length - 1; index += 1) {
    const distance = getDistanceToSegment(point, routePoints[index], routePoints[index + 1]);
    if (distance < nearestDistance) {
      nearestDistance = distance;
      insertIndex = routeGeometry.segmentInsertIndices?.[index] ?? connection.points.length;
    }
  }

  return clamp(insertIndex, 0, connection.points.length);
}

function getCardRect(card, padding = 0) {
  return {
    left: card.x - padding,
    top: card.y - padding,
    right: card.x + card.width + padding,
    bottom: card.y + card.height + padding
  };
}

function getSegmentOrientation(first, second, third) {
  const value = (second.y - first.y) * (third.x - second.x) - (second.x - first.x) * (third.y - second.y);
  if (Math.abs(value) < 0.0001) {
    return 0;
  }
  return value > 0 ? 1 : 2;
}

function isPointOnSegment(point, start, end) {
  return (
    point.x <= Math.max(start.x, end.x) + 0.001 &&
    point.x >= Math.min(start.x, end.x) - 0.001 &&
    point.y <= Math.max(start.y, end.y) + 0.001 &&
    point.y >= Math.min(start.y, end.y) - 0.001
  );
}

function segmentsIntersect(startA, endA, startB, endB) {
  const orientation1 = getSegmentOrientation(startA, endA, startB);
  const orientation2 = getSegmentOrientation(startA, endA, endB);
  const orientation3 = getSegmentOrientation(startB, endB, startA);
  const orientation4 = getSegmentOrientation(startB, endB, endA);

  if (orientation1 !== orientation2 && orientation3 !== orientation4) {
    return true;
  }

  if (orientation1 === 0 && isPointOnSegment(startB, startA, endA)) {
    return true;
  }
  if (orientation2 === 0 && isPointOnSegment(endB, startA, endA)) {
    return true;
  }
  if (orientation3 === 0 && isPointOnSegment(startA, startB, endB)) {
    return true;
  }
  if (orientation4 === 0 && isPointOnSegment(endA, startB, endB)) {
    return true;
  }

  return false;
}

function segmentIntersectsRect(start, end, rect) {
  if (isPointInsideRect(start, rect) || isPointInsideRect(end, rect)) {
    return true;
  }

  const topLeft = { x: rect.left, y: rect.top };
  const topRight = { x: rect.right, y: rect.top };
  const bottomRight = { x: rect.right, y: rect.bottom };
  const bottomLeft = { x: rect.left, y: rect.bottom };

  return (
    segmentsIntersect(start, end, topLeft, topRight)
    || segmentsIntersect(start, end, topRight, bottomRight)
    || segmentsIntersect(start, end, bottomRight, bottomLeft)
    || segmentsIntersect(start, end, bottomLeft, topLeft)
  );
}

function expandRect(rect, padding = 0) {
  return {
    left: rect.left - padding,
    top: rect.top - padding,
    right: rect.right + padding,
    bottom: rect.bottom + padding
  };
}

function rectIntersectsRect(first, second) {
  return (
    first.left <= second.right &&
    first.right >= second.left &&
    first.top <= second.bottom &&
    first.bottom >= second.top
  );
}

function candidateRouteIntersectsCards(points, obstacleCards) {
  for (let index = 0; index < points.length - 1; index += 1) {
    const start = points[index];
    const end = points[index + 1];
    for (const obstacle of obstacleCards) {
      if (segmentIntersectsRect(start, end, obstacle.rect)) {
        return true;
      }
    }
  }

  return false;
}

function isRoutePointBlocked(point, obstacleCards) {
  return obstacleCards.some((obstacle) => isPointInsideRect(point, obstacle.rect));
}

function getRoutePointKey(point) {
  return `${point.x},${point.y}`;
}

function addRouteEdge(adjacency, fromKey, toKey, cost, direction) {
  if (!adjacency.has(fromKey)) {
    adjacency.set(fromKey, []);
  }
  adjacency.get(fromKey).push({ to: toKey, cost, direction });
}

function buildOrthogonalRouteGraph(start, end, obstacleCards) {
  const xValues = new Set([start.x, end.x]);
  const yValues = new Set([start.y, end.y]);
  const bounds = {
    left: Math.min(start.x, end.x),
    top: Math.min(start.y, end.y),
    right: Math.max(start.x, end.x),
    bottom: Math.max(start.y, end.y)
  };

  obstacleCards.forEach((obstacle) => {
    xValues.add(obstacle.rect.left - connectionRouteLaneOffset);
    xValues.add(obstacle.rect.right + connectionRouteLaneOffset);
    yValues.add(obstacle.rect.top - connectionRouteLaneOffset);
    yValues.add(obstacle.rect.bottom + connectionRouteLaneOffset);
    bounds.left = Math.min(bounds.left, obstacle.rect.left);
    bounds.top = Math.min(bounds.top, obstacle.rect.top);
    bounds.right = Math.max(bounds.right, obstacle.rect.right);
    bounds.bottom = Math.max(bounds.bottom, obstacle.rect.bottom);
  });

  xValues.add(bounds.left - connectionRouteBoundsPadding);
  xValues.add(bounds.right + connectionRouteBoundsPadding);
  yValues.add(bounds.top - connectionRouteBoundsPadding);
  yValues.add(bounds.bottom + connectionRouteBoundsPadding);

  const sortedX = [...xValues].sort((first, second) => first - second);
  const sortedY = [...yValues].sort((first, second) => first - second);
  const nodes = new Map();
  const adjacency = new Map();

  sortedX.forEach((x) => {
    sortedY.forEach((y) => {
      const point = { x, y };
      if (isRoutePointBlocked(point, obstacleCards)) {
        return;
      }
      const key = getRoutePointKey(point);
      nodes.set(key, point);
      adjacency.set(key, []);
    });
  });

  sortedY.forEach((y) => {
    let previousNode = null;
    sortedX.forEach((x) => {
      const key = getRoutePointKey({ x, y });
      const node = nodes.get(key);
      if (!node) {
        return;
      }
      if (previousNode && !candidateRouteIntersectsCards([previousNode, node], obstacleCards)) {
        const cost = Math.abs(node.x - previousNode.x);
        const previousKey = getRoutePointKey(previousNode);
        addRouteEdge(adjacency, previousKey, key, cost, "horizontal");
        addRouteEdge(adjacency, key, previousKey, cost, "horizontal");
      }
      previousNode = node;
    });
  });

  sortedX.forEach((x) => {
    let previousNode = null;
    sortedY.forEach((y) => {
      const key = getRoutePointKey({ x, y });
      const node = nodes.get(key);
      if (!node) {
        return;
      }
      if (previousNode && !candidateRouteIntersectsCards([previousNode, node], obstacleCards)) {
        const cost = Math.abs(node.y - previousNode.y);
        const previousKey = getRoutePointKey(previousNode);
        addRouteEdge(adjacency, previousKey, key, cost, "vertical");
        addRouteEdge(adjacency, key, previousKey, cost, "vertical");
      }
      previousNode = node;
    });
  });

  return { nodes, adjacency };
}

function findOrthogonalRoutePath(start, end, obstacleCards) {
  if (!obstacleCards.length || !candidateRouteIntersectsCards([start, end], obstacleCards)) {
    return [start, end];
  }

  const { nodes, adjacency } = buildOrthogonalRouteGraph(start, end, obstacleCards);
  const startKey = getRoutePointKey(start);
  const endKey = getRoutePointKey(end);
  if (!nodes.has(startKey) || !nodes.has(endKey)) {
    return [start, end];
  }

  const openStates = [{
    stateKey: `${startKey}|start`,
    nodeKey: startKey,
    direction: "start",
    cost: 0,
    score: Math.abs(start.x - end.x) + Math.abs(start.y - end.y)
  }];
  const bestCost = new Map([[`${startKey}|start`, 0]]);
  const previousState = new Map();
  const closedStates = new Set();

  while (openStates.length) {
    openStates.sort((first, second) => first.score - second.score || first.cost - second.cost);
    const current = openStates.shift();
    if (!current || closedStates.has(current.stateKey)) {
      continue;
    }
    closedStates.add(current.stateKey);

    if (current.nodeKey === endKey) {
      const keys = [];
      let walker = current.stateKey;
      while (walker) {
        const [nodeKey] = walker.split("|");
        keys.push(nodeKey);
        walker = previousState.get(walker) || null;
      }
      return keys.reverse().map((key) => nodes.get(key)).filter(Boolean);
    }

    const currentPoint = nodes.get(current.nodeKey);
    const neighbours = adjacency.get(current.nodeKey) || [];
    neighbours.forEach((edge) => {
      const nextStateKey = `${edge.to}|${edge.direction}`;
      const turnPenalty = current.direction !== "start" && current.direction !== edge.direction
        ? connectionRouteTurnPenalty
        : 0;
      const nextCost = current.cost + edge.cost + turnPenalty;
      if (nextCost >= (bestCost.get(nextStateKey) ?? Number.POSITIVE_INFINITY)) {
        return;
      }

      bestCost.set(nextStateKey, nextCost);
      previousState.set(nextStateKey, current.stateKey);
      const nextPoint = nodes.get(edge.to);
      openStates.push({
        stateKey: nextStateKey,
        nodeKey: edge.to,
        direction: edge.direction,
        cost: nextCost,
        score: nextCost + Math.abs(nextPoint.x - end.x) + Math.abs(nextPoint.y - end.y) + (currentPoint ? 0 : 0)
      });
    });
  }

  return [start, end];
}

function collectConnectionRouteObstacles(startNode, endNode, useAllCards = false) {
  const excludedIds = new Set([startNode.boundCardId, endNode.boundCardId].filter(Boolean));
  const searchRect = expandRect(
    normalizeRect(startNode.x, startNode.y, endNode.x, endNode.y),
    connectionRouteSearchPadding
  );

  return state.cards
    .filter((card) => card.kind !== "group" && !excludedIds.has(card.id))
    .map((card) => ({ card, rect: getCardRect(card, connectionRouteObstaclePadding) }))
    .filter((obstacle) => useAllCards || rectIntersectsRect(obstacle.rect, searchRect));
}

function buildConnectionSegmentRoute(startNode, endNode) {
  const localObstacles = collectConnectionRouteObstacles(startNode, endNode, false);
  let route = findOrthogonalRoutePath(startNode, endNode, localObstacles);
  if (route.length > 2 || !candidateRouteIntersectsCards([startNode, endNode], localObstacles)) {
    return route;
  }

  const allObstacles = collectConnectionRouteObstacles(startNode, endNode, true);
  route = findOrthogonalRoutePath(startNode, endNode, allObstacles);
  return route.length >= 2 ? route : [startNode, endNode];
}

function resolveOrthogonalConnectionAnchor(anchor, towardPoint) {
  if (!anchor || !towardPoint) {
    return null;
  }

  if (anchor.type !== "card") {
    return getConnectionAnchorBase(anchor);
  }

  const card = state.cards.find((item) => item.id === anchor.cardId);
  if (!card) {
    return null;
  }

  const center = {
    x: card.x + card.width / 2,
    y: card.y + card.height / 2
  };
  const deltaX = towardPoint.x - center.x;
  const deltaY = towardPoint.y - center.y;
  const inset = 10;
  const top = card.y - inset;
  const bottom = card.y + card.height + inset;
  const left = card.x - inset;
  const right = card.x + card.width + inset;

  if (Math.abs(deltaX) >= Math.abs(deltaY)) {
    return {
      x: deltaX >= 0 ? right : left,
      y: clamp(towardPoint.y, card.y + 8, card.y + card.height - 8)
    };
  }

  return {
    x: clamp(towardPoint.x, card.x + 8, card.x + card.width - 8),
    y: deltaY >= 0 ? bottom : top
  };
}

function getConnectionRouteGeometry(connection) {
  const anchorNodes = buildConnectionAnchorNodes(connection);
  if (!anchorNodes || anchorNodes.length < 2) {
    return null;
  }

  const routeNodes = [anchorNodes[0]];
  const segmentInsertIndices = [];
  const manualPoints = anchorNodes
    .filter((node) => node.kind === "manual")
    .map((node) => ({ x: node.x, y: node.y, pointIndex: node.pointIndex }));

  for (let index = 0; index < anchorNodes.length - 1; index += 1) {
    const currentNode = anchorNodes[index];
    const nextNode = anchorNodes[index + 1];
    const segmentNodes = buildConnectionSegmentRoute(currentNode, nextNode);
    const insertIndex = nextNode.kind === "manual" ? nextNode.pointIndex : manualPoints.length;

    for (let segmentIndex = 1; segmentIndex < segmentNodes.length; segmentIndex += 1) {
      const sourceNode = segmentNodes[segmentIndex];
      const isLast = segmentIndex === segmentNodes.length - 1;
      const nextRouteNode = isLast
        ? nextNode
        : createConnectionRouteNode(sourceNode, "auto");
      const previousNode = routeNodes[routeNodes.length - 1];
      if (pointEquals(previousNode, nextRouteNode)) {
        continue;
      }
      routeNodes.push(nextRouteNode);
      segmentInsertIndices.push(insertIndex);
    }
  }

  if (routeNodes.length >= 2) {
    const startPoint = resolveOrthogonalConnectionAnchor(connection.from, routeNodes[1]);
    if (startPoint) {
      routeNodes[0] = createConnectionRouteNode(startPoint, "anchor", {
        boundCardId: getConnectionBoundCardId(connection.from)
      });
    }

    const lastIndex = routeNodes.length - 1;
    const endPoint = resolveOrthogonalConnectionAnchor(connection.to, routeNodes[lastIndex - 1]);
    if (endPoint) {
      routeNodes[lastIndex] = createConnectionRouteNode(endPoint, "anchor", {
        boundCardId: getConnectionBoundCardId(connection.to)
      });
    }
  }

  return {
    points: routeNodes.map((node) => ({ x: node.x, y: node.y })),
    autoPoints: routeNodes
      .filter((node) => node.kind === "auto")
      .map((node) => ({ x: node.x, y: node.y })),
    manualPoints,
    segmentInsertIndices
  };
}

function addWaypointToConnection(connection, point) {
  ensureEditMode();
  const nextPoint = createConnectionPoint(point);
  connection.points.splice(getWaypointInsertIndex(connection, nextPoint), 0, nextPoint);
  selectedConnectionId = connection.id;
  renderConnections();
  scheduleSave();
}

function getConnectionMarkerId(connection, suffix) {
  return `${connection.id}-${suffix}`.replace(/[^a-z0-9_-]/gi, "-");
}

function getConnectionVisualTheme() {
  return getVisualTheme().connections;
}

function getConnectionDashArray(theme, draft = false) {
  if (draft) {
    return "10 8";
  }
  if (theme.lineStyle === "dashed") {
    return `${Math.max(theme.strokeWidth * 3, 8)} ${Math.max(theme.strokeWidth * 2, 5)}`;
  }
  if (theme.lineStyle === "dotted") {
    return `0 ${Math.max(theme.strokeWidth * 2.4, 5)}`;
  }
  return "";
}

function renderConnectionMarker(defs, connection, capType) {
  const theme = getConnectionVisualTheme();
  const markerScale = theme.markerScale;
  const marker = createSvgElement("marker");
  marker.setAttribute("id", getConnectionMarkerId(connection, capType));
  marker.setAttribute("markerUnits", "userSpaceOnUse");
  marker.setAttribute("orient", "auto-start-reverse");
  if (capType === "dot") {
    marker.setAttribute("viewBox", "0 0 12 12");
    marker.setAttribute("refX", "6");
    marker.setAttribute("refY", "6");
    marker.setAttribute("markerWidth", String(8 * markerScale));
    marker.setAttribute("markerHeight", String(8 * markerScale));
    const dot = createSvgElement("circle");
    dot.setAttribute("cx", "6");
    dot.setAttribute("cy", "6");
    dot.setAttribute("r", String(3.5 * markerScale));
    dot.setAttribute("fill", connection.color);
    dot.setAttribute("stroke", "var(--connection-outline)");
    dot.setAttribute("stroke-width", "1.4");
    marker.appendChild(dot);
  } else {
    marker.setAttribute("viewBox", "0 0 10 10");
    marker.setAttribute("refX", "8.4");
    marker.setAttribute("refY", "5");
    marker.setAttribute("markerWidth", String(10 * markerScale));
    marker.setAttribute("markerHeight", String(10 * markerScale));
    const arrow = createSvgElement("path");
    arrow.setAttribute("d", "M 0 0 L 10 5 L 0 10 z");
    arrow.setAttribute("fill", connection.color);
    arrow.setAttribute("stroke", "var(--connection-outline)");
    arrow.setAttribute("stroke-width", "0.9");
    arrow.setAttribute("stroke-linejoin", "round");
    marker.appendChild(arrow);
  }

  defs.appendChild(marker);
}

function renderConnectionMarkers(defs, connection) {
  const markerTypes = new Set([connection.startCap, connection.endCap].filter((capType) => capType && capType !== "none"));
  markerTypes.forEach((capType) => renderConnectionMarker(defs, connection, capType));
}

function renderConnectionPath(layer, connection, draft = false) {
  const routeGeometry = getConnectionRouteGeometry(connection);
  const pathData = getConnectionPathData(connection, routeGeometry);
  if (!pathData) {
    return;
  }

  const isSelected = !draft && selectedConnectionId === connection.id;
  const visualTheme = getConnectionVisualTheme();
  const dashArray = getConnectionDashArray(visualTheme, draft);
  const outlinePath = createSvgElement("path");
  outlinePath.classList.add("connection-outline");
  outlinePath.setAttribute("d", pathData);
  outlinePath.setAttribute("stroke-width", String(isSelected ? visualTheme.outlineWidth + 1 : visualTheme.outlineWidth));
  if (dashArray) {
    outlinePath.setAttribute("stroke-dasharray", dashArray);
  }

  if (visualTheme.outlineWidth > 0) {
    layer.appendChild(outlinePath);
  }

  const visiblePath = createSvgElement("path");
  visiblePath.classList.add("connection-path");
  visiblePath.classList.toggle("is-selected", isSelected);
  if (draft) {
    visiblePath.classList.add("connection-draft");
  }
  visiblePath.setAttribute("d", pathData);
  visiblePath.setAttribute("stroke", connection.color);
  visiblePath.setAttribute("stroke-width", String(draft ? visualTheme.draftStrokeWidth : (isSelected ? visualTheme.selectedStrokeWidth : visualTheme.strokeWidth)));
  if (dashArray) {
    visiblePath.setAttribute("stroke-dasharray", dashArray);
  }

  if (!draft && connection.startCap && connection.startCap !== "none") {
    visiblePath.setAttribute("marker-start", `url(#${getConnectionMarkerId(connection, connection.startCap)})`);
  }

  if (!draft && connection.endCap && connection.endCap !== "none") {
    visiblePath.setAttribute("marker-end", `url(#${getConnectionMarkerId(connection, connection.endCap)})`);
  }

  layer.appendChild(visiblePath);

  if (draft) {
    return;
  }

  const hitPath = createSvgElement("path");
  hitPath.classList.add("connection-hit");
  hitPath.dataset.connectionId = connection.id;
  hitPath.setAttribute("d", pathData);
  hitPath.addEventListener("contextmenu", (event) => openConnectionContextMenu(event, connection));
  hitPath.addEventListener("pointerdown", (event) => selectConnectionFromPointer(event, connection));
  layer.appendChild(hitPath);

  if (isSelected) {
    renderConnectionWaypoints(layer, connection, routeGeometry);
  }
}

function renderConnectionWaypoints(layer, connection, routeGeometry = getConnectionRouteGeometry(connection)) {
  const visualTheme = getConnectionVisualTheme();
  (routeGeometry?.autoPoints || []).forEach((point) => {
    const handle = createSvgElement("circle");
    handle.classList.add("connection-waypoint", "connection-waypoint-auto");
    handle.setAttribute("cx", point.x);
    handle.setAttribute("cy", point.y);
    handle.setAttribute("r", String(Math.max(2, visualTheme.waypointRadius - 1)));
    layer.appendChild(handle);
  });

  (routeGeometry?.manualPoints || []).forEach((point) => {
    const handle = createSvgElement("circle");
    handle.classList.add("connection-waypoint");
    handle.dataset.connectionId = connection.id;
    handle.dataset.pointIndex = String(point.pointIndex);
    handle.setAttribute("cx", point.x);
    handle.setAttribute("cy", point.y);
    handle.setAttribute("r", String(visualTheme.waypointRadius));
    handle.setAttribute("tabindex", "0");
    handle.addEventListener("pointerdown", (event) => startWaypointMove(event, connection, point.pointIndex));
    layer.appendChild(handle);
  });
}

function selectConnection(connectionId) {
  selectedConnectionId = connectionId;
  selectedIds.clear();
  updateSelectionStyles();
  renderConnections();
}

function selectConnectionFromPointer(event, connection) {
  event.preventDefault();
  event.stopPropagation();
  if (event.button !== 0) {
    return;
  }

  const now = performance.now();
  const wasSelected = selectedConnectionId === connection.id;
  const isDoubleClick = wasSelected && lastConnectionClick.id === connection.id && now - lastConnectionClick.time < 500;
  lastConnectionClick = {
    id: connection.id,
    time: now
  };

  if (isDoubleClick && !state.locked) {
    addWaypointToConnection(connection, screenToWorld(event.clientX, event.clientY));
    lastConnectionClick = {
      id: null,
      time: 0
    };
    return;
  }

  selectConnection(connection.id);
}

function addWaypointFromDoubleClick(event, connection) {
  event.preventDefault();
  event.stopPropagation();
  if (selectedConnectionId !== connection.id || state.locked) {
    return;
  }

  addWaypointToConnection(connection, screenToWorld(event.clientX, event.clientY));
}

function startWaypointMove(event, connection, pointIndex) {
  if (event.button !== 0 || state.locked) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  event.currentTarget.setPointerCapture(event.pointerId);
  selectedConnectionId = connection.id;
  activeAction = {
    type: "waypoint",
    pointerId: event.pointerId,
    connection,
    pointIndex,
    captureElement: event.currentTarget
  };
}

function renderConnections() {
  const layer = getConnectionsLayer();
  layer.innerHTML = "";

  const defs = createSvgElement("defs");
  state.connections.forEach((connection) => renderConnectionMarkers(defs, connection));
  layer.appendChild(defs);

  state.connections.forEach((connection) => renderConnectionPath(layer, connection));
  if (connectionDraft) {
    renderConnectionPath(layer, {
      id: "connection-draft",
      from: connectionDraft.from,
      to: connectionDraft.to,
      color: connectionDraft.color,
      startCap: connectionDraft.startCap,
      endCap: connectionDraft.endCap,
      pathStyle: connectionDraft.pathStyle
    }, true);
  }
}

function anchorFromPointerEvent(event) {
  const world = screenToWorld(event.clientX, event.clientY);
  const element = event.target.closest(".card");

  if (!element) {
    return createConnectionPointAnchor(world);
  }

  const card = state.cards.find((item) => item.id === element.dataset.id);
  const startsOnGroupBody = card?.kind === "group" && Boolean(event.target.closest(".card-body"));
  if (!card || startsOnGroupBody) {
    return createConnectionPointAnchor(world, startsOnGroupBody ? card.id : null);
  }

  return {
    type: "card",
    cardId: card.id
  };
}

function anchorsEqual(first, second) {
  if (first.type !== second.type) {
    return false;
  }

  if (first.type === "card") {
    return first.cardId === second.cardId;
  }

  return Math.hypot(first.x - second.x, first.y - second.y) < 8;
}

function setConnectionMode(enabled) {
  connectionMode = Boolean(enabled);
  if (!connectionMode) {
    connectionDraft = null;
  } else {
    ensureEditMode();
    clearSelection();
    closeContextMenu();
  }

  updateModeUi();
  renderConnections();
}

function toggleConnectionMode() {
  setConnectionMode(!connectionMode);
}

function startConnectionFromAnchor(anchor) {
  ensureEditMode();
  clearSelection();
  closeContextMenu();
  const normalizedAnchor = normalizeConnectionAnchor(anchor);
  connectionMode = true;
  const point = getConnectionAnchorBase(normalizedAnchor) || getVisibleWorldCenter();
  connectionDraft = {
    from: normalizedAnchor,
    to: createConnectionPointAnchor(point),
    color: getConnectionColor(),
    startCap: "none",
    endCap: "arrow",
    pathStyle: "segmented"
  };
  updateModeUi();
  renderConnections();
}

function handleConnectionPointerDown(event) {
  if (!connectionMode || state.locked || event.button !== 0 || isWidgetModeActive()) {
    return;
  }

  if (event.target.closest(".toolbar") || event.target.closest(".modal") || event.target.closest(".context-menu")) {
    return;
  }

  blurActiveEditor();
  event.preventDefault();
  event.stopImmediatePropagation();

  const anchor = anchorFromPointerEvent(event);
  if (!connectionDraft) {
    connectionDraft = {
      from: anchor,
      to: anchor.type === "point" ? anchor : createConnectionPointAnchor(screenToWorld(event.clientX, event.clientY)),
      color: getConnectionColor(),
      startCap: "none",
      endCap: "arrow",
      pathStyle: "segmented"
    };
    updateModeUi();
    renderConnections();
    return;
  }

  if (anchorsEqual(connectionDraft.from, anchor)) {
    setConnectionMode(false);
    return;
  }

  const connection = normalizeConnection({
    id: createId("connection"),
    from: connectionDraft.from,
    to: anchor,
    points: [],
    color: connectionDraft.color,
    customColor: false,
    startCap: connectionDraft.startCap,
    endCap: connectionDraft.endCap,
    pathStyle: connectionDraft.pathStyle
  });
  state.connections.push(connection);
  connectionDraft = null;
  setConnectionMode(false);
  renderConnections();
  scheduleSave();
}

function handleConnectionPointerMove(event) {
  if (!connectionMode || !connectionDraft) {
    return;
  }

  connectionDraft.to = createConnectionPointAnchor(screenToWorld(event.clientX, event.clientY));
  renderConnections();
}

function removeConnectionsForCardIds(cardIds) {
  const ids = new Set(cardIds);
  state.connections = state.connections.filter((connection) => (
    (connection.from.type !== "card" || !ids.has(connection.from.cardId)) &&
    (connection.to.type !== "card" || !ids.has(connection.to.cardId))
  ));
}

function removeReferencesForCardIds(cardIds) {
  const ids = new Set(cardIds);
  state.cards.forEach((card) => {
    card.references = normalizeReferenceIds(card.references, card.id).filter((referenceId) => !ids.has(referenceId));
  });
}

function getSelectedCards() {
  return state.cards.filter((card) => selectedIds.has(card.id));
}

function setSelectedCards(ids) {
  const hadSelectedConnection = Boolean(selectedConnectionId);
  selectedConnectionId = null;
  selectedIds = new Set(ids);
  updateSelectionStyles();
  if (hadSelectedConnection) {
    renderConnections();
  }
}

function clearSelection() {
  const hadSelectedConnection = Boolean(selectedConnectionId);
  selectedConnectionId = null;
  selectedIds.clear();
  updateSelectionStyles();
  if (hadSelectedConnection) {
    renderConnections();
  }
}

function updateSelectionStyles() {
  workspace.querySelectorAll(".card").forEach((element) => {
    element.classList.toggle("is-selected", selectedIds.has(element.dataset.id));
  });
}

function toggleCardSelection(card) {
  const nextIds = new Set(selectedIds);
  if (nextIds.has(card.id)) {
    nextIds.delete(card.id);
  } else {
    nextIds.add(card.id);
  }
  setSelectedCards(nextIds);
}

function isEditableTarget(target) {
  return Boolean(target.closest("input, textarea, button, select, audio, video, iframe, webview, [contenteditable='true'], .rich-text-toolbar, .resize-handle, .context-menu, .card-header-toggle"));
}

function isTextInputTarget(target) {
  return Boolean(target?.closest?.("input, textarea, select, [contenteditable='true']"));
}

function isBoardDeleteShortcutBlocked(target) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  if (isTextInputTarget(target)) {
    return true;
  }

  return Boolean(target.closest(".modal"));
}

function selectCardFromPointer(event, card) {
  if (connectionMode || event.button !== 0 || state.locked) {
    return;
  }

  if (!event.shiftKey && !event.ctrlKey && !event.metaKey) {
    bringCardToFront(card);
  }

  if (isEditableTarget(event.target)) {
    return;
  }

  if (event.shiftKey || event.ctrlKey || event.metaKey) {
    toggleCardSelection(card);
    return;
  }

  if (!selectedIds.has(card.id)) {
    setSelectedCards([card.id]);
  }
}

function normalizeRect(left, top, right, bottom) {
  return {
    left: Math.min(left, right),
    top: Math.min(top, bottom),
    right: Math.max(left, right),
    bottom: Math.max(top, bottom)
  };
}

function cardIntersectsRect(card, rect) {
  const cardRect = {
    left: card.x,
    top: card.y,
    right: card.x + card.width,
    bottom: card.y + card.height
  };

  return (
    cardRect.left <= rect.right &&
    cardRect.right >= rect.left &&
    cardRect.top <= rect.bottom &&
    cardRect.bottom >= rect.top
  );
}

function updateSelectionBox(event) {
  const screenRect = normalizeRect(activeAction.startX, activeAction.startY, event.clientX, event.clientY);
  selectionBox.style.left = `${screenRect.left}px`;
  selectionBox.style.top = `${screenRect.top}px`;
  selectionBox.style.width = `${screenRect.right - screenRect.left}px`;
  selectionBox.style.height = `${screenRect.bottom - screenRect.top}px`;

  const currentWorld = screenToWorld(event.clientX, event.clientY);
  const worldRect = normalizeRect(
    activeAction.startWorldX,
    activeAction.startWorldY,
    currentWorld.x,
    currentWorld.y
  );
  const ids = state.cards
    .filter((card) => cardIntersectsRect(card, worldRect))
    .map((card) => card.id);

  setSelectedCards(ids);
}

function startSelection(event) {
  const cardElement = event.target.closest(".card");
  const startsOnGroupBody = cardElement?.dataset.kind === "group" && Boolean(event.target.closest(".card-body"));

  if (
    connectionMode ||
    event.button !== 0 ||
    state.locked ||
    isWidgetModeActive() ||
    event.target.closest(".toolbar") ||
    event.target.closest(".modal") ||
    event.target.closest(".context-menu") ||
    (cardElement && !startsOnGroupBody)
  ) {
    return;
  }

  blurActiveEditor();
  event.preventDefault();
  closeContextMenu();
  clearSelection();

  const startWorld = screenToWorld(event.clientX, event.clientY);
  board.setPointerCapture(event.pointerId);
  board.classList.add("is-selecting");
  selectionBox.hidden = false;
  selectionBox.style.left = `${event.clientX}px`;
  selectionBox.style.top = `${event.clientY}px`;
  selectionBox.style.width = "0px";
  selectionBox.style.height = "0px";

  activeAction = {
    type: "select",
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    startWorldX: startWorld.x,
    startWorldY: startWorld.y
  };
}

function collectMoveItems(cards) {
  const items = new Map();
  cards.forEach((card) => {
    items.set(card.id, { card, originX: card.x, originY: card.y });
  });

  return [...items.values()];
}

function startCardMove(event, card) {
  if (connectionMode || event.button !== 0 || state.locked || event.target.closest("button") || event.target.matches("input, textarea, [contenteditable='true']")) {
    return;
  }

  blurActiveEditor();

  if (event.shiftKey || event.ctrlKey || event.metaKey) {
    event.preventDefault();
    event.stopPropagation();
    toggleCardSelection(card);
    return;
  }

  event.preventDefault();
  event.stopPropagation();

  if (!selectedIds.has(card.id)) {
    setSelectedCards([card.id]);
  }

  const selectedCards = getSelectedCards();
  bringCardsToFront(selectedCards.length > 1 ? selectedCards : [card], { save: false });

  const cardElement = getCardElement(card);
  cardElement.setPointerCapture(event.pointerId);
  const startWorld = screenToWorld(event.clientX, event.clientY);
  const moveCards = getCardsForMove(
    selectedCards.length > 1
      ? selectedCards
      : [card]
  );

  activeAction = {
    type: "move",
    pointerId: event.pointerId,
    card,
    startWorldX: startWorld.x,
    startWorldY: startWorld.y,
    originX: card.x,
    originY: card.y,
    items: collectMoveItems(moveCards)
  };
  void syncWidgetModeInteractivity(event.target, { focus: true, force: true });
}

function startResize(event, card, direction = "se") {
  if (connectionMode || event.button !== 0 || state.locked) {
    return;
  }

  blurActiveEditor();
  event.preventDefault();
  event.stopPropagation();

  const cardElement = getCardElement(card);
  cardElement.setPointerCapture(event.pointerId);
  const startWorld = screenToWorld(event.clientX, event.clientY);
  activeAction = {
    type: "resize",
    pointerId: event.pointerId,
    card,
    direction,
    startWorldX: startWorld.x,
    startWorldY: startWorld.y,
    originX: card.x,
    originY: card.y,
    originRight: card.x + card.width,
    originBottom: card.y + card.height,
    originWidth: card.width,
    originHeight: card.height
  };
  void syncWidgetModeInteractivity(event.target, { focus: true, force: true });
}

function startPan(event) {
  if (event.target.closest(".toolbar") || event.target.closest(".modal")) {
    return;
  }

  if (event.button !== 1 || isWidgetModeActive()) {
    return;
  }

  blurActiveEditor();
  event.preventDefault();
  board.setPointerCapture(event.pointerId);
  board.classList.add("is-panning");

  activeAction = {
    type: "pan",
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    originX: state.viewport.x,
    originY: state.viewport.y
  };
}

function updateActiveAction(event) {
  if (!activeAction || event.pointerId !== activeAction.pointerId) {
    return;
  }

  if (activeAction.type === "pan") {
    state.viewport.x = activeAction.originX + event.clientX - activeAction.startX;
    state.viewport.y = activeAction.originY + event.clientY - activeAction.startY;
    applyViewport();
    return;
  }

  if (activeAction.type === "select") {
    updateSelectionBox(event);
    return;
  }

  if (activeAction.type === "waypoint") {
    const currentPoint = activeAction.connection.points[activeAction.pointIndex];
    const point = createConnectionPoint(
      screenToWorld(event.clientX, event.clientY),
      currentPoint?.binding?.cardId || null
    );
    activeAction.connection.points[activeAction.pointIndex] = point;
    renderConnections();
    return;
  }

  const { card } = activeAction;
  const cardElement = getCardElement(card);
  const currentWorld = screenToWorld(event.clientX, event.clientY);

  if (activeAction.type === "move") {
    const deltaX = currentWorld.x - activeAction.startWorldX;
    const deltaY = currentWorld.y - activeAction.startWorldY;
    const nextX = maybeSnap(activeAction.originX + deltaX);
    const nextY = maybeSnap(activeAction.originY + deltaY);
    const snappedDeltaX = nextX - activeAction.originX;
    const snappedDeltaY = nextY - activeAction.originY;
    activeAction.items.forEach((item) => {
      item.card.x = item.originX + snappedDeltaX;
      item.card.y = item.originY + snappedDeltaY;
      const itemElement = getCardElement(item.card);
      if (itemElement) {
        itemElement.style.left = `${item.card.x}px`;
        itemElement.style.top = `${item.card.y}px`;
        if (item.card.kind === "web") {
          syncCardElementLayout(itemElement);
        }
      }
    });
    syncAttachedCommentsForTargets(activeAction.items.map((item) => item.card.id));
    renderConnections();
  }

  if (activeAction.type === "resize") {
    const deltaX = currentWorld.x - activeAction.startWorldX;
    const deltaY = currentWorld.y - activeAction.startWorldY;
    let left = activeAction.originX;
    let top = activeAction.originY;
    let right = activeAction.originRight;
    let bottom = activeAction.originBottom;

    if (activeAction.direction.includes("w")) {
      left = maybeSnap(activeAction.originX + deltaX);
    }
    if (activeAction.direction.includes("e")) {
      right = maybeSnap(activeAction.originRight + deltaX);
    }
    if (activeAction.direction.includes("n")) {
      top = maybeSnap(activeAction.originY + deltaY);
    }
    if (activeAction.direction.includes("s")) {
      bottom = maybeSnap(activeAction.originBottom + deltaY);
    }

    if (right - left < minCardWidth) {
      if (activeAction.direction.includes("w")) {
        left = right - minCardWidth;
      } else {
        right = left + minCardWidth;
      }
    }
    if (bottom - top < minCardHeight) {
      if (activeAction.direction.includes("n")) {
        top = bottom - minCardHeight;
      } else {
        bottom = top + minCardHeight;
      }
    }

    card.x = left;
    card.y = top;
    card.width = Math.max(right - left, minCardWidth);
    card.height = Math.max(bottom - top, minCardHeight);
    cardElement.style.left = `${card.x}px`;
    cardElement.style.top = `${card.y}px`;
    cardElement.style.width = `${card.width}px`;
    cardElement.style.height = `${card.height}px`;
    syncCardElementLayout(cardElement);
    syncAttachedCommentsForTargets([card.id]);
    renderConnections();
  }
}

function stopActiveAction(event) {
  if (!activeAction || event.pointerId !== activeAction.pointerId) {
    return;
  }

  const shouldSave = activeAction.type !== "select";

  if (activeAction.type === "pan") {
    if (board.hasPointerCapture(event.pointerId)) {
      board.releasePointerCapture(event.pointerId);
    }
    board.classList.remove("is-panning");
  } else if (activeAction.type === "select") {
    if (board.hasPointerCapture(event.pointerId)) {
      board.releasePointerCapture(event.pointerId);
    }
    board.classList.remove("is-selecting");
    selectionBox.hidden = true;
  } else if (activeAction.type === "waypoint") {
    if (activeAction.captureElement?.hasPointerCapture(event.pointerId)) {
      activeAction.captureElement.releasePointerCapture(event.pointerId);
    }
  } else {
    const cardElement = getCardElement(activeAction.card);
    if (cardElement && cardElement.hasPointerCapture(event.pointerId)) {
      cardElement.releasePointerCapture(event.pointerId);
    }
  }

  if (activeAction.type === "move") {
    settleMovedCommentAttachments(activeAction.items);
  }

  activeAction = null;
  void syncWidgetModeInteractivity(widgetHoverTarget, { force: true });
  if (shouldSave) {
    scheduleSave();
  }
}

function zoomAt(event) {
  if (event.target.closest(".toolbar") || event.target.closest(".modal") || isWidgetModeActive()) {
    return;
  }

  event.preventDefault();

  const oldZoom = state.viewport.zoom;
  const direction = event.deltaY > 0 ? -1 : 1;
  const factor = direction > 0 ? 1.1 : 0.9;
  const nextZoom = clamp(oldZoom * factor, minZoom, maxZoom);
  const worldPoint = screenToWorld(event.clientX, event.clientY);
  const layout = getActiveDisplayLayout();

  state.viewport.zoom = nextZoom;
  state.viewport.x = event.clientX - layout.primaryBounds.x - worldPoint.x * nextZoom;
  state.viewport.y = event.clientY - layout.primaryBounds.y - worldPoint.y * nextZoom;

  applyViewport();
  scheduleSave();
}

function getNewCardPosition(width, height, worldPoint = null) {
  const center = worldPoint || getVisibleWorldCenter();
  const offset = worldPoint ? 0 : state.cards.length * 12;
  return {
    x: maybeSnap(center.x - width / 2 + offset),
    y: maybeSnap(center.y - height / 2 + offset)
  };
}

function addCard(kind, worldPoint = null) {
  ensureEditMode();

  const definition = getCardTypeDefinition(kind);
  const width = definition.defaultSize?.width || 300;
  const height = definition.defaultSize?.height || 220;
  const position = getNewCardPosition(width, height, worldPoint);
  const colors = getDefaultCardColors(kind);
  const base = {
    id: createId(kind),
    kind,
    x: position.x,
    y: position.y,
    width,
    height,
    headerColor: colors.header,
    bodyColor: colors.body,
    customHeaderColor: false,
    customBodyColor: false,
    stackOrder: getNextStackOrderForLayer(kind === "group" ? "group" : "card")
  };

  if (kind === "comment") {
    const now = Date.now();
    state.cards.push({
      ...base,
      title: t("newComment"),
      text: "",
      textHtml: "",
      commentAttachment: null,
      commentCreatedAt: now,
      commentUpdatedAt: now,
      commentHistory: []
    });
  } else if (kind === "code") {
    state.cards.push({
      ...base,
      title: t("newCode"),
      codeLanguage: "",
      text: ""
    });
  } else if (kind === "calculator") {
    state.cards.push({
      ...base,
      title: t("newCalculator"),
      calculatorDisplay: "0",
      calculatorExpression: "",
      calculatorOperand: null,
      calculatorOperation: null,
      calculatorWaitingForOperand: false,
      calculatorError: "",
      calculatorHistory: []
    });
  } else if (kind === "table") {
    state.cards.push({
      ...base,
      title: t("newTable"),
      tableColumns: normalizeTableColumns([], 3),
      tableRows: Array.from({ length: 3 }, () => createTableRow({}, 3))
    });
  } else if (kind === "tasks") {
    state.cards.push({
      ...base,
      title: t("newList"),
      tasks: [{ id: createId("task"), text: t("firstTask"), done: false }]
    });
  } else if (kind === "bookmark") {
    state.cards.push({
      ...base,
      title: t("newBookmark"),
      links: [createBookmarkLink()]
    });
  } else if (kind === "progress") {
    state.cards.push({
      ...base,
      title: t("newProgress"),
      progressValue: 0,
      tasks: [{ id: createId("task"), text: t("firstTask"), done: false }]
    });
  } else if (kind === "timer") {
    state.cards.push({
      ...base,
      title: t("newTimer"),
      timerDurationMinutes: defaultTimerDurationMinutes,
      timerRemainingMs: defaultTimerDurationMinutes * 60 * 1000,
      timerEndsAt: null,
      timerNotifyToast: true,
      timerPlaySound: false,
      timerCompletionNotifiedAt: null
    });
  } else if (kind === "reminder") {
    state.cards.push({
      ...base,
      title: t("newReminder"),
      text: "",
      textHtml: "",
      reminderAt: "",
      reminderShowToast: true,
      reminderPlaySound: false,
      reminderRepeatUntilAcknowledged: true,
      reminderRepeatIntervalMinutes: defaultReminderRepeatIntervalMinutes,
      reminderAcknowledgedAt: null,
      reminderLastTriggeredAt: null
    });
  } else if (kind === "schedule") {
    state.cards.push({
      ...base,
      title: t("newSchedule"),
      scheduleEntries: [createScheduleEntry({ time: "09:00", note: "" })],
      text: ""
    });
  } else {
    state.cards.push({
      ...base,
      title: t("newNote"),
      text: "",
      textHtml: ""
    });
  }

  render();
  scheduleSave();
}

function addGroup(worldPoint = null) {
  ensureEditMode();

  const definition = getCardTypeDefinition("group");
  const width = definition.defaultSize?.width || 620;
  const height = definition.defaultSize?.height || 360;
  const position = getNewCardPosition(width, height, worldPoint);
  const colors = getDefaultCardColors("group");
  state.cards.push({
    id: createId("group"),
    kind: "group",
    title: t("newGroup"),
    x: position.x,
    y: position.y,
    width,
    height,
    headerColor: colors.header,
    bodyColor: colors.body,
    customHeaderColor: false,
    customBodyColor: false,
    stackOrder: getNextStackOrderForLayer("group")
  });

  render();
  scheduleSave();
}

async function addMedia(kind, worldPoint = null) {
  ensureEditMode();

  const media = window.desktopBoard?.pickMedia
    ? await window.desktopBoard.pickMedia(kind)
    : await pickMediaInBrowser(kind);

  if (!media) {
    return;
  }

  const definition = getCardTypeDefinition(kind);
  const width = definition.defaultSize?.width || 360;
  const height = definition.defaultSize?.height || 260;
  const position = getNewCardPosition(width, height, worldPoint);
  const colors = getDefaultCardColors(kind);

  state.cards.push({
    id: createId(kind),
    kind,
    title: media.name || (kind === "video" ? t("video") : kind === "audio" ? t("audio") : t("image")),
    x: position.x,
    y: position.y,
    width,
    height,
    headerColor: colors.header,
    bodyColor: colors.body,
    customHeaderColor: false,
    customBodyColor: false,
    stackOrder: getNextStackOrderForLayer("card"),
    src: media.src,
    path: media.path || null,
    assetId: media.assetId || null,
    assetRelativePath: media.assetRelativePath || null,
    originalName: media.originalName || media.name || null
  });

  render();
  scheduleSave();
}

async function addFile(worldPoint = null) {
  ensureEditMode();

  const file = window.desktopBoard?.pickFile
    ? await window.desktopBoard.pickFile()
    : await pickFileInBrowser();

  if (!file) {
    return;
  }

  const definition = getCardTypeDefinition("file");
  const width = definition.defaultSize?.width || 360;
  const height = definition.defaultSize?.height || 280;
  const position = getNewCardPosition(width, height, worldPoint);
  const colors = getDefaultCardColors("file");

  state.cards.push({
    id: createId("file"),
    kind: "file",
    title: file.name || t("newFile"),
    x: position.x,
    y: position.y,
    width,
    height,
    headerColor: colors.header,
    bodyColor: colors.body,
    customHeaderColor: false,
    customBodyColor: false,
    stackOrder: getNextStackOrderForLayer("card"),
    src: file.src,
    path: file.path || null,
    assetId: file.assetId || null,
    assetRelativePath: file.assetRelativePath || null,
    originalName: file.originalName || file.name || t("newFile"),
    sizeBytes: Number.isFinite(Number(file.sizeBytes)) ? Number(file.sizeBytes) : null,
    showPreview: true
  });

  render();
  scheduleSave();
}

function closeUrlModal(result = "") {
  urlModal.hidden = true;
  urlStatus.textContent = "";
  requestAnimationFrame(syncAllWebCardElements);

  if (pendingUrlResolver) {
    const resolve = pendingUrlResolver;
    pendingUrlResolver = null;
    resolve(result);
  }
}

function submitUrlModal() {
  const url = normalizeUrl(urlInput.value);
  if (!url) {
    urlStatus.textContent = t("invalidUrl");
    urlInput.focus();
    return;
  }

  closeUrlModal(url);
}

function requestWebUrl(currentValue = "", submitKey = "add") {
  closeContextMenu();

  if (pendingUrlResolver) {
    closeUrlModal("");
  }

  urlInput.dataset.mode = currentValue ? "edit" : "add";
  urlModalTitle.textContent = t(currentValue ? "editUrlTitle" : "urlTitle");
  saveUrlButton.textContent = t(submitKey);
  urlInput.value = currentValue || "https://";
  urlStatus.textContent = "";
  urlModal.hidden = false;
  syncAllWebCardElements();

  window.setTimeout(() => {
    urlInput.focus();
    urlInput.select();
  }, 0);

  return new Promise((resolve) => {
    pendingUrlResolver = resolve;
  });
}

function closeSearchModal(result = null) {
  searchModal.hidden = true;
  searchResults.innerHTML = "";
  searchStatus.textContent = "";
  searchState.query = "";
  searchState.resultIds = [];
  searchState.activeIndex = 0;
  searchInput.blur();

  if (pendingSearchResolver) {
    const resolve = pendingSearchResolver;
    pendingSearchResolver = null;
    resolve(result);
  }
}

function syncSearchResultActiveState() {
  Array.from(searchResults.children).forEach((item, index) => {
    const isActive = index === searchState.activeIndex;
    item.classList.toggle("is-active", isActive);
    item.setAttribute("aria-selected", isActive ? "true" : "false");
  });
}

function updateSearchResults() {
  const results = searchCards(searchInput.value, {
    scope: searchState.scope,
    onlyIds: searchState.onlyIds,
    excludeIds: searchState.excludeIds
  });

  searchState.resultIds = results.map((item) => item.card.id);
  searchState.activeIndex = Math.min(searchState.activeIndex, Math.max(searchState.resultIds.length - 1, 0));
  searchResults.innerHTML = "";

  if (!results.length) {
    searchStatus.textContent = t("searchNoResults");
    return;
  }

  searchStatus.textContent = t("searchResults", { count: results.length });

  results.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "search-result";
    button.classList.toggle("is-active", index === searchState.activeIndex);
    button.setAttribute("role", "option");
    button.setAttribute("aria-selected", index === searchState.activeIndex ? "true" : "false");

    const title = document.createElement("div");
    title.className = "search-result-title";
    title.textContent = item.card.title || t("genericElement");

    const meta = document.createElement("div");
    meta.className = "search-result-meta";
    const tags = Array.isArray(item.card.tags) && item.card.tags.length
      ? ` - ${item.card.tags.map((tag) => `#${tag}`).join(" ")}`
      : "";
    meta.textContent = `${getCardKindLabel(item.card.kind)} - ${item.card.id}${tags}`;

    const snippetText = getCardSearchSnippet(item.card);
    if (snippetText) {
      const snippet = document.createElement("div");
      snippet.className = "search-result-snippet";
      snippet.textContent = snippetText;
      button.append(title, meta, snippet);
    } else {
      button.append(title, meta);
    }

    button.addEventListener("click", () => {
      if (searchState.mode === "pick") {
        closeSearchModal(item.card.id);
        return;
      }

      closeSearchModal(null);
      focusCardById(item.card.id);
    });

    button.addEventListener("mouseenter", () => {
      searchState.activeIndex = index;
      syncSearchResultActiveState();
    });

    searchResults.appendChild(button);
  });
}

function submitSearchResultByIndex(index = searchState.activeIndex) {
  const cardId = searchState.resultIds[index];
  if (!cardId) {
    return;
  }

  if (searchState.mode === "pick") {
    closeSearchModal(cardId);
    return;
  }

  closeSearchModal(null);
  focusCardById(cardId);
}

function openSearchModal(options = {}) {
  closeContextMenu();

  if (pendingSearchResolver) {
    closeSearchModal(null);
  }

  searchState.mode = options.mode === "pick" ? "pick" : "navigate";
  searchState.query = options.query || "";
  searchState.scope = ["all", "title", "tag"].includes(options.scope) ? options.scope : searchState.scope || "all";
  searchState.onlyIds = Array.isArray(options.onlyIds) ? options.onlyIds : null;
  searchState.excludeIds = new Set(options.excludeIds || []);
  searchState.activeIndex = 0;

  searchTitle.textContent = t(searchState.mode === "pick" ? "searchPickTitle" : "searchTitle");
  searchHelp.textContent = t(searchState.mode === "pick" ? "searchPickHelp" : "searchHelp");
  searchInput.placeholder = t("searchPlaceholder");
  searchInput.value = searchState.query;
  searchScopeInput.value = searchState.scope;
  searchModal.hidden = false;
  updateSearchResults();

  window.setTimeout(() => {
    searchInput.focus();
    searchInput.select();
  }, 0);

  if (searchState.mode !== "pick") {
    return Promise.resolve(null);
  }

  return new Promise((resolve) => {
    pendingSearchResolver = resolve;
  });
}

function renderMetaListItem(card, actions = {}) {
  const row = document.createElement("div");
  row.className = "meta-list-item";

  const content = document.createElement("div");
  content.className = "meta-list-item-content";
  const title = document.createElement("div");
  title.className = "meta-list-item-title";
  title.textContent = card.title || t("genericElement");
  const meta = document.createElement("div");
  meta.className = "meta-list-item-meta";
  meta.textContent = `${getCardKindLabel(card.kind)} - ${card.id}`;
  content.append(title, meta);
  row.appendChild(content);

  if (actions.go) {
    const goButton = document.createElement("button");
    goButton.type = "button";
    goButton.className = "meta-list-item-action";
    goButton.textContent = t("goTo");
    goButton.addEventListener("click", () => actions.go(card));
    row.appendChild(goButton);
  }

  if (actions.remove) {
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "meta-list-item-remove";
    removeButton.textContent = t("remove");
    removeButton.addEventListener("click", () => actions.remove(card));
    row.appendChild(removeButton);
  }

  return row;
}

function renderMetaEditor() {
  const card = getCardById(metaEditor.cardId);
  if (!card) {
    return;
  }

  metaLinkInput.value = createCardLink(card.id);

  metaReferencesList.innerHTML = "";
  if (!metaEditor.references.length) {
    const empty = document.createElement("div");
    empty.className = "meta-list-empty";
    empty.textContent = t("noReferences");
    metaReferencesList.appendChild(empty);
  } else {
    metaEditor.references
      .map((referenceId) => getCardById(referenceId))
      .filter(Boolean)
      .forEach((referenceCard) => {
        metaReferencesList.appendChild(renderMetaListItem(referenceCard, {
          go: (target) => focusCardById(target.id),
          remove: (target) => {
            metaEditor.references = metaEditor.references.filter((referenceId) => referenceId !== target.id);
            renderMetaEditor();
          }
        }));
      });
  }

  metaBacklinksList.innerHTML = "";
  const backlinks = getBacklinkCards(card);
  if (!backlinks.length) {
    const empty = document.createElement("div");
    empty.className = "meta-list-empty";
    empty.textContent = t("noBacklinks");
    metaBacklinksList.appendChild(empty);
  } else {
    backlinks.forEach((backlinkCard) => {
      metaBacklinksList.appendChild(renderMetaListItem(backlinkCard, {
        go: (target) => focusCardById(target.id)
      }));
    });
  }
}

function closeMetaModal() {
  metaModal.hidden = true;
  metaEditor = {
    cardId: null,
    references: []
  };
}

function openMetaEditor(card) {
  closeContextMenu();
  metaEditor = {
    cardId: card.id,
    references: normalizeReferenceIds(card.references, card.id)
  };
  metaModalTitle.textContent = t("linksPanelTitle");
  metaModal.hidden = false;
  renderMetaEditor();
  window.setTimeout(() => {
    addReferenceButton.focus();
  }, 0);
}

async function addReferenceFromMetaEditor() {
  const card = getCardById(metaEditor.cardId);
  if (!card) {
    return;
  }

  metaModal.hidden = true;
  const selectedId = await openSearchModal({
    mode: "pick",
    excludeIds: [card.id, ...metaEditor.references]
  });

  if (!selectedId) {
    metaModal.hidden = false;
    renderMetaEditor();
    return;
  }

  metaEditor.references = normalizeReferenceIds([...metaEditor.references, selectedId], card.id);
  metaModal.hidden = false;
  renderMetaEditor();
}

function saveMetaEditor() {
  const card = getCardById(metaEditor.cardId);
  if (!card) {
    closeMetaModal();
    return;
  }

  card.references = normalizeReferenceIds(metaEditor.references, card.id);
  closeMetaModal();
  render();
  scheduleSave();
}

function closeCommentHistoryModal() {
  if (!commentHistoryModal) {
    return;
  }

  commentHistoryModal.hidden = true;
  if (commentHistoryList) {
    commentHistoryList.innerHTML = "";
  }
  if (commentHistoryMeta) {
    commentHistoryMeta.innerHTML = "";
  }
  requestAnimationFrame(syncAllWebCardElements);
}

function formatCommentHistoryText(value) {
  if (value === null || typeof value === "undefined") {
    return t("commentEmptyText");
  }
  if (typeof value === "string") {
    const text = hasRichTextMarkup(value) ? richTextHtmlToPlainText(value) : value;
    return text.trim() ? text : t("commentEmptyText");
  }
  const text = serializeAuditValue(value);
  return text.trim() ? text : t("commentEmptyText");
}

function getHistoryEventLabel(entry) {
  if (entry.kind === "created") {
    return t("historyEventCreated");
  }
  if (entry.kind === "group-add") {
    return t("historyEventGroupAdd");
  }
  if (entry.kind === "group-remove") {
    return t("historyEventGroupRemove");
  }
  return t("historyEventUpdated");
}

function renderHistoryChange(change) {
  const fragment = document.createDocumentFragment();
  const fieldLabel = document.createElement("div");
  fieldLabel.className = "comment-history-label";
  fieldLabel.textContent = `${t("historyField")}: ${change.field === "textHtml" ? t("richTextContent") : change.field}`;

  const beforeLabel = document.createElement("div");
  beforeLabel.className = "comment-history-label";
  beforeLabel.textContent = t("commentHistoryBefore");
  const before = document.createElement("pre");
  before.className = "comment-history-text";
  before.textContent = formatCommentHistoryText(change.before);

  const afterLabel = document.createElement("div");
  afterLabel.className = "comment-history-label";
  afterLabel.textContent = t("commentHistoryAfter");
  const after = document.createElement("pre");
  after.className = "comment-history-text";
  after.textContent = formatCommentHistoryText(change.after);

  fragment.append(fieldLabel, beforeLabel, before, afterLabel, after);
  return fragment;
}

function renderCommentHistoryEntry(entry) {
  const item = document.createElement("article");
  item.className = "comment-history-item";

  const time = document.createElement("div");
  time.className = "comment-history-time";
  const actorName = entry.actor?.name || t("unknown");
  time.textContent = `${formatDateTimeDisplay(entry.at)} - ${actorName}`;

  const eventLabel = document.createElement("strong");
  eventLabel.className = "comment-history-label";
  eventLabel.textContent = getHistoryEventLabel(entry);

  item.append(time, eventLabel);

  if (Array.isArray(entry.changes) && entry.changes.length) {
    entry.changes.forEach((change) => {
      item.appendChild(renderHistoryChange(change));
    });
  } else if (entry.before !== entry.after) {
    item.appendChild(renderHistoryChange({
      field: "text",
      before: entry.before,
      after: entry.after
    }));
  }

  return item;
}

function getLegacyCommentHistoryEntries(card) {
  if (!card || card.kind !== "comment") {
    return [];
  }
  const hasNativeTextHistory = normalizeCardHistory(card.cardHistory).some((entry) => (
    Array.isArray(entry.changes) && entry.changes.some((change) => change.field === "text" || change.field === "textHtml")
  ));
  if (hasNativeTextHistory) {
    return [];
  }

  return normalizeCommentHistory(card.commentHistory).map((entry) => ({
    id: entry.id,
    at: entry.at,
    actor: normalizeAuditActor(card.updatedBy || card.createdBy, createDefaultAuditActor()),
    kind: "updated",
    changes: [
      {
        field: "text",
        before: entry.before,
        after: entry.after
      }
    ]
  }));
}

function getGroupMembershipHistoryEntries(group) {
  if (!group || group.kind !== "group") {
    return [];
  }

  return normalizeGroupHistory(state.groupHistory)
    .filter((entry) => entry.groupId === group.id)
    .map((entry) => ({
      id: entry.id,
      at: entry.at,
      actor: entry.actor,
      kind: entry.action === "remove" ? "group-remove" : "group-add",
      changes: [
        {
          field: "member",
          before: entry.action === "remove" ? entry.cardTitle || entry.cardId : "",
          after: entry.action === "add" ? entry.cardTitle || entry.cardId : ""
        }
      ]
    }));
}

function showCardHistoryModal(card) {
  if (!commentHistoryModal || !commentHistoryList || !commentHistoryMeta || !card) {
    return;
  }

  commentHistoryTitle.textContent = t("cardHistoryTitle");
  closeCommentHistoryButton?.setAttribute("aria-label", t("closeCommentHistory"));
  if (closeCommentHistoryFooterButton) {
    closeCommentHistoryFooterButton.textContent = t("close");
  }

  commentHistoryMeta.innerHTML = "";
  [
    [t("cardCreatedAt"), formatDateTimeDisplay(card.createdAt)],
    [t("cardCreatedBy"), card.createdBy?.name || t("unknown")],
    [t("cardUpdatedAt"), formatDateTimeDisplay(card.updatedAt)],
    [t("cardUpdatedBy"), card.updatedBy?.name || t("unknown")]
  ].forEach(([label, value]) => {
    const row = document.createElement("div");
    row.className = "comment-history-meta-row";
    const labelElement = document.createElement("span");
    labelElement.textContent = label;
    const valueElement = document.createElement("strong");
    valueElement.textContent = value || t("unknown");
    row.append(labelElement, valueElement);
    commentHistoryMeta.appendChild(row);
  });

  commentHistoryList.innerHTML = "";
  const history = [
    ...normalizeCardHistory(card.cardHistory),
    ...getLegacyCommentHistoryEntries(card),
    ...getGroupMembershipHistoryEntries(card)
  ].sort((a, b) => b.at - a.at);
  if (!history.length) {
    const empty = document.createElement("div");
    empty.className = "meta-list-empty";
    empty.textContent = t("historyEmpty");
    commentHistoryList.appendChild(empty);
  } else {
    history.forEach((entry) => {
      commentHistoryList.appendChild(renderCommentHistoryEntry(entry));
    });
  }

  commentHistoryModal.hidden = false;
  syncAllWebCardElements();
  window.setTimeout(() => closeCommentHistoryFooterButton?.focus(), 0);
}

async function openCardHistory(card) {
  closeContextMenu();
  if (!card) {
    return;
  }

  if (windowModeState.currentMode !== "normal" && window.desktopBoard?.openCardHistoryInNormalMode) {
    try {
      const result = await window.desktopBoard.openCardHistoryInNormalMode(card.id);
      if (result?.state) {
        windowModeState = normalizeWindowModeState(result.state);
        refreshWallpaperModeUi({ force: true });
        updateModeUi();
        refreshWebContentRenderForWindowMode();
      }
      return;
    } catch (error) {
      reportError("cardHistory.openInNormalMode", error);
    }
  }

  if (windowModeState.currentMode !== "normal") {
    await switchWindowMode("normal");
  }
  showCardHistoryModal(card);
}

function openCommentHistory(card) {
  void openCardHistory(card);
}

async function copyCardLink(card) {
  closeContextMenu();
  await copyText(createCardLink(card.id));
  if (!metaModal.hidden && metaEditor.cardId === card.id) {
    metaLinkInput.focus();
    metaLinkInput.select();
  }
}

function parseTagDraftInput(value) {
  return normalizeTagList(String(value || "").split(/[\r\n,]+/));
}

function setCardTags(card, tags) {
  card.tags = normalizeTagList(tags);
  render();
  scheduleSave();
}

function addCardTags(card, rawValue) {
  const nextTags = parseTagDraftInput(rawValue);
  if (!nextTags.length) {
    return false;
  }

  setCardTags(card, [...(Array.isArray(card.tags) ? card.tags : []), ...nextTags]);
  return true;
}

function removeCardTag(card, tag) {
  const currentTags = Array.isArray(card.tags) ? card.tags : [];
  const nextTags = currentTags.filter((item) => item.toLowerCase() !== String(tag || "").toLowerCase());
  if (nextTags.length === currentTags.length) {
    return false;
  }

  setCardTags(card, nextTags);
  return true;
}

function createContextTagEditor(card) {
  const section = document.createElement("div");
  section.className = "context-menu-section context-tags-section";

  const title = document.createElement("div");
  title.className = "context-menu-subtitle";
  title.textContent = t("tags");

  const list = document.createElement("div");
  list.className = "context-tags-list";

  const input = document.createElement("input");
  input.type = "text";
  input.className = "context-tag-input";
  input.placeholder = t("tagInputPlaceholder");
  input.setAttribute("aria-label", t("tags"));

  const note = document.createElement("div");
  note.className = "context-menu-note";
  note.textContent = t("tagInputHelp");

  const refresh = () => {
    list.innerHTML = "";
    const tags = Array.isArray(card.tags) ? card.tags : [];

    if (!tags.length) {
      const empty = document.createElement("div");
      empty.className = "context-tags-empty";
      empty.textContent = t("noTags");
      list.appendChild(empty);
      return;
    }

    tags.forEach((tag) => {
      const chip = document.createElement("span");
      chip.className = "context-tag-chip";

      const label = document.createElement("span");
      label.className = "context-tag-chip-label";
      label.textContent = `#${tag}`;

      const removeButton = document.createElement("button");
      removeButton.type = "button";
      removeButton.className = "context-tag-remove";
      removeButton.textContent = "x";
      removeButton.setAttribute("aria-label", t("removeTagLabel", { tag }));
      removeButton.addEventListener("click", () => {
        if (removeCardTag(card, tag)) {
          refresh();
          input.focus();
        }
      });

      chip.append(label, removeButton);
      list.appendChild(chip);
    });
  };

  input.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") {
      return;
    }

    event.preventDefault();
    if (!addCardTags(card, input.value)) {
      return;
    }

    input.value = "";
    refresh();
    input.focus();
  });

  refresh();
  section.append(title, list, input, note);
  return section;
}

async function addWeb(worldPoint = null) {
  ensureEditMode();

  const definition = getCardTypeDefinition("web");
  const width = definition.defaultSize?.width || 560;
  const height = definition.defaultSize?.height || 360;
  const position = getNewCardPosition(width, height, worldPoint);
  const colors = getDefaultCardColors("web");
  const card = {
    id: createId("web"),
    kind: "web",
    title: t("urlTitle"),
    x: position.x,
    y: position.y,
    width,
    height,
    headerColor: colors.header,
    bodyColor: colors.body,
    customHeaderColor: false,
    customBodyColor: false,
    stackOrder: getNextStackOrderForLayer("card"),
    url: "",
    src: ""
  };

  state.cards.push(card);

  render();
  requestAnimationFrame(() => {
    const addressInput = getCardElement(card)?.querySelector(".web-address-input");
    if (addressInput) {
      addressInput.focus();
      addressInput.select();
    }
  });
  scheduleSave();
}

function pickMediaInBrowser(kind) {
  return new Promise((resolve) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = kind === "video" ? "video/*" : kind === "audio" ? "audio/*" : "image/*";
    input.addEventListener("change", () => {
      const file = input.files?.[0];
      if (!file) {
        resolve(null);
        return;
      }

      resolve({
        name: file.name,
        src: URL.createObjectURL(file),
        path: null,
        assetId: null,
        assetRelativePath: null,
        originalName: file.name
      });
    });
    input.click();
  });
}

function pickFileInBrowser() {
  return new Promise((resolve) => {
    const input = document.createElement("input");
    input.type = "file";
    input.addEventListener("change", () => {
      const file = input.files?.[0];
      if (!file) {
        resolve(null);
        return;
      }

      resolve({
        name: file.name,
        src: URL.createObjectURL(file),
        path: null,
        assetId: null,
        assetRelativePath: null,
        originalName: file.name,
        sizeBytes: file.size
      });
    });
    input.click();
  });
}

function getAssetKindFromFile(file) {
  const mimeType = String(file?.type || "").toLowerCase();
  if (mimeType.startsWith("image/")) {
    return "image";
  }
  if (mimeType.startsWith("video/")) {
    return "video";
  }
  if (mimeType.startsWith("audio/")) {
    return "audio";
  }

  const extension = String(file?.name || "").split(".").pop().toLowerCase();
  if (["png", "jpg", "jpeg", "webp", "gif", "bmp", "svg"].includes(extension)) {
    return "image";
  }
  if (["mp4", "webm", "mov", "mkv", "avi"].includes(extension)) {
    return "video";
  }
  if (["mp3", "wav", "ogg", "m4a", "flac", "aac"].includes(extension)) {
    return "audio";
  }

  return file?.name ? "file" : null;
}

function closeContextMenu() {
  contextMenu.hidden = true;
  contextMenu.innerHTML = "";
  requestAnimationFrame(syncAllWebCardElements);
}

function positionContextMenu(clientX, clientY) {
  contextMenu.hidden = false;
  const margin = 8;
  const rect = contextMenu.getBoundingClientRect();
  const clampLeft = (value) => Math.max(margin, Math.min(value, window.innerWidth - rect.width - margin));
  const clampTop = (value) => Math.max(margin, Math.min(value, window.innerHeight - rect.height - margin));
  const candidates = [
    { left: clientX, top: clientY },
    { left: clientX - rect.width, top: clientY },
    { left: clientX, top: clientY - rect.height },
    { left: clientX - rect.width, top: clientY - rect.height },
    { left: clientX + margin, top: clientY - rect.height / 2 },
    { left: clientX - rect.width - margin, top: clientY - rect.height / 2 }
  ].map((candidate) => {
    const left = clampLeft(candidate.left);
    const top = clampTop(candidate.top);
    return {
      left,
      top,
      overlap: getTotalNativeWebOverlapArea({
        left,
        top,
        right: left + rect.width,
        bottom: top + rect.height
      })
    };
  });

  const best = candidates.reduce((currentBest, candidate) => (
    candidate.overlap < currentBest.overlap ? candidate : currentBest
  ), candidates[0]);

  contextMenu.style.left = `${best.left}px`;
  contextMenu.style.top = `${best.top}px`;
  requestAnimationFrame(syncAllWebCardElements);
}

function createContextButton(label, action, danger = false) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = label;
  if (danger) {
    button.className = "context-menu-danger";
  }
  button.addEventListener("click", async () => {
    await action();
  });
  return button;
}

function createContextSection(items) {
  const section = document.createElement("div");
  section.className = "context-menu-section";
  items.forEach((item) => section.appendChild(item));
  return section;
}

function createContextColorRow(label, value, onInput) {
  const row = document.createElement("label");
  const text = document.createElement("span");
  const input = document.createElement("input");
  text.textContent = label;
  input.type = "color";
  input.value = value;
  input.addEventListener("input", () => onInput(input.value));
  row.append(text, input);
  return row;
}

function createContextSelectRow(label, value, options, onChange) {
  const row = document.createElement("label");
  const text = document.createElement("span");
  const select = document.createElement("select");
  text.textContent = label;
  options.forEach((option) => {
    const item = document.createElement("option");
    item.value = option.value;
    item.textContent = option.label;
    select.appendChild(item);
  });
  select.value = value;
  select.addEventListener("change", () => onChange(select.value));
  row.append(text, select);
  return row;
}

function findCardFromEventTarget(target) {
  const element = target.closest(".card");
  if (!element) {
    return null;
  }

  return state.cards.find((card) => card.id === element.dataset.id) || null;
}

function focusCardTitle(card) {
  ensureEditMode();
  const title = getCardElement(card)?.querySelector(card.kind === "web" ? ".web-address-input" : ".card-title");
  if (title) {
    title.focus();
    title.select();
  }
  closeContextMenu();
}

function duplicateCard(card) {
  ensureEditMode();
  const copy = clone(card);
  copy.id = createId(card.kind);
  copy.title = `${card.title || t("genericElement")} ${t("copySuffix")}`;
  copy.x = maybeSnap(card.x + gridSize);
  copy.y = maybeSnap(card.y + gridSize);
  delete copy.createdAt;
  delete copy.updatedAt;
  delete copy.createdBy;
  delete copy.updatedBy;
  copy.cardHistory = [];

  if (Array.isArray(copy.tasks)) {
    copy.tasks = copy.tasks.map((task) => ({ ...task, id: createId("task") }));
  }

  if (Array.isArray(copy.links)) {
    copy.links = copy.links.map((link) => ({ ...link, id: createId("link") }));
  }

  if (Array.isArray(copy.scheduleEntries)) {
    copy.scheduleEntries = copy.scheduleEntries.map((entry) => ({ ...entry, id: createId("schedule-item") }));
  }

  if (Array.isArray(copy.tableColumns)) {
    copy.tableColumns = copy.tableColumns.map((column, index) => createTableColumn({ ...column, id: "" }, index));
  }

  if (Array.isArray(copy.tableRows)) {
    copy.tableRows = copy.tableRows.map((row) => createTableRow({ ...row, id: "" }, copy.tableColumns?.length || row.cells?.length || 1));
  }

  if (Array.isArray(copy.calculatorInputs)) {
    copy.calculatorInputs = copy.calculatorInputs.map((input) => createCalculatorInput({ ...input, id: "" }));
  }

  if (copy.kind === "calculator") {
    copy.calculatorHistory = [];
    copy.calculatorExpression = "";
    copy.calculatorOperand = null;
    copy.calculatorOperation = null;
    copy.calculatorWaitingForOperand = false;
    copy.calculatorError = "";
  }

  if (copy.kind === "timer") {
    copy.timerRemainingMs = getTimerRemainingMs(card);
    copy.timerEndsAt = null;
  }

  if (copy.kind === "progress") {
    copy.progressValue = getProgressStats(copy).percent;
  }

  if (copy.kind === "comment") {
    const now = Date.now();
    copy.commentCreatedAt = now;
    copy.commentUpdatedAt = now;
    copy.commentHistory = [];
    copy.commentAttachment = null;
  }

  assignTopStackOrder(copy);
  state.cards.push(copy);
  render();
  scheduleSave();
  closeContextMenu();
}

function deleteCard(card) {
  ensureEditMode();
  state.cards = state.cards.filter((item) => item.id !== card.id);
  removeConnectionsForCardIds([card.id]);
  removeReferencesForCardIds([card.id]);
  detachCommentsFromCardIds([card.id]);
  selectedIds.delete(card.id);
  render();
  scheduleSave();
  closeContextMenu();
}

function deleteSelectedCards() {
  if (state.locked || selectedIds.size === 0) {
    return;
  }

  const ids = new Set(selectedIds);
  state.cards = state.cards.filter((card) => !ids.has(card.id));
  removeConnectionsForCardIds(ids);
  removeReferencesForCardIds(ids);
  detachCommentsFromCardIds(ids);
  clearSelection();
  render();
  scheduleSave();
  closeContextMenu();
}

function createGroupFromSelection() {
  ensureEditMode();

  const cards = getSelectedCards();
  if (cards.length === 0) {
    return;
  }

  const sidePadding = 24;
  const bottomPadding = 24;
  const headerPadding = 56;
  const left = Math.min(...cards.map((card) => card.x));
  const top = Math.min(...cards.map((card) => card.y));
  const right = Math.max(...cards.map((card) => card.x + card.width));
  const bottom = Math.max(...cards.map((card) => card.y + card.height));
  const groupX = maybeSnap(left - sidePadding);
  const groupY = maybeSnap(top - headerPadding);
  const colors = getDefaultCardColors("group");
  const group = {
    id: createId("group"),
    kind: "group",
    title: t("newGroup"),
    x: groupX,
    y: groupY,
    width: Math.max(right - left + sidePadding * 2, minCardWidth),
    height: Math.max(bottom - top + headerPadding + bottomPadding, minCardHeight),
    headerColor: colors.header,
    bodyColor: colors.body,
    customHeaderColor: false,
    customBodyColor: false,
    stackOrder: getNextStackOrderForLayer("group")
  };

  state.cards.push(group);
  selectedIds = new Set([group.id]);
  render();
  scheduleSave();
  closeContextMenu();
}

function setWebInteraction(card, enabled) {
  if (card.kind !== "web") {
    return;
  }

  card.webInteractive = Boolean(enabled);
  render();
  scheduleSave();
  closeContextMenu();
}

function disableAllWebInteraction() {
  let changed = false;
  state.cards.forEach((card) => {
    if (card.kind === "web" && card.webInteractive) {
      card.webInteractive = false;
      changed = true;
    }
  });

  if (changed) {
    render();
    scheduleSave();
  }

  return changed;
}

function resetCardColors(card) {
  ensureEditMode();
  const colors = getDefaultCardColors(card.kind);
  card.headerColor = colors.header;
  card.bodyColor = colors.body;
  card.customHeaderColor = false;
  card.customBodyColor = false;
  applyCardColors(getCardElement(card), card);
  scheduleSave();
  closeContextMenu();
}

function setCardHeaderColor(card, value) {
  ensureEditMode();
  card.headerColor = value;
  card.customHeaderColor = true;
  applyCardColors(getCardElement(card), card);
  scheduleSave();
}

function setCardBodyColor(card, value) {
  ensureEditMode();
  card.bodyColor = value;
  card.customBodyColor = true;
  applyCardColors(getCardElement(card), card);
  scheduleSave();
}

function setConnectionColor(connection, value) {
  ensureEditMode();
  connection.color = value;
  connection.customColor = true;
  renderConnections();
  scheduleSave();
}

function resetConnectionColor(connection) {
  ensureEditMode();
  connection.color = getConnectionColor();
  connection.customColor = false;
  renderConnections();
  scheduleSave();
}

function setConnectionCap(connection, edge, value) {
  ensureEditMode();
  if (edge === "start") {
    connection.startCap = normalizeConnectionCap(value);
  } else {
    connection.endCap = normalizeConnectionCap(value);
  }
  renderConnections();
  scheduleSave();
}

function setConnectionPathStyle(connection, value) {
  ensureEditMode();
  connection.pathStyle = normalizeConnectionPathStyle(value);
  renderConnections();
  scheduleSave();
}

function convertConnectionToAutoPath(connection) {
  ensureEditMode();
  connection.points = [];
  renderConnections();
  scheduleSave();
  closeContextMenu();
}

function deleteConnection(connection) {
  ensureEditMode();
  state.connections = state.connections.filter((item) => item.id !== connection.id);
  if (selectedConnectionId === connection.id) {
    selectedConnectionId = null;
  }
  renderConnections();
  scheduleSave();
  closeContextMenu();
}

function connectSelectedCards(cards = getSelectedCards()) {
  if (cards.length < 2) {
    return;
  }

  ensureEditMode();
  const newConnections = [];
  for (let index = 0; index < cards.length - 1; index += 1) {
    const connection = normalizeConnection({
      id: createId("connection"),
      from: { type: "card", cardId: cards[index].id },
      to: { type: "card", cardId: cards[index + 1].id },
      points: [],
      color: getConnectionColor(),
      customColor: false,
      startCap: "none",
      endCap: "arrow",
      pathStyle: "segmented"
    });
    newConnections.push(connection);
  }

  state.connections.push(...newConnections);
  selectedConnectionId = newConnections[newConnections.length - 1].id;
  selectedIds.clear();
  render();
  scheduleSave();
  closeContextMenu();
}

function createElement(kind, worldPoint = null) {
  const definition = getCardTypeDefinition(kind);
  if (!definition) {
    return;
  }

  if (definition.createMode === "media") {
    addMedia(kind, worldPoint);
    return;
  }

  if (definition.createMode === "web") {
    addWeb(worldPoint);
    return;
  }

  if (definition.createMode === "file") {
    addFile(worldPoint);
    return;
  }

  if (definition.createMode === "group") {
    addGroup(worldPoint);
    return;
  }

  addCard(kind, worldPoint);
}

function createAtContext(kind, worldPoint) {
  closeContextMenu();
  createElement(kind, worldPoint);
}

function renderConnectionContextMenu(connection) {
  const title = document.createElement("div");
  title.className = "context-menu-title";
  title.textContent = t("connection");

  contextMenu.append(
    title,
    createContextSection([
      createContextSelectRow(t("connectionPathStyle"), connection.pathStyle, [
        { value: "segmented", label: t("connectionPathSegmented") },
        { value: "smooth", label: t("connectionPathSmooth") }
      ], (value) => setConnectionPathStyle(connection, value)),
      createContextSelectRow(t("connectionStartCap"), connection.startCap, [
        { value: "none", label: t("connectionCapNone") },
        { value: "arrow", label: t("connectionCapArrow") },
        { value: "dot", label: t("connectionCapDot") }
      ], (value) => setConnectionCap(connection, "start", value)),
      createContextSelectRow(t("connectionEndCap"), connection.endCap, [
        { value: "none", label: t("connectionCapNone") },
        { value: "arrow", label: t("connectionCapArrow") },
        { value: "dot", label: t("connectionCapDot") }
      ], (value) => setConnectionCap(connection, "end", value)),
      createContextButton(t("connectionAutoPath"), () => convertConnectionToAutoPath(connection)),
      createContextColorRow(t("color"), connection.color, (value) => setConnectionColor(connection, value)),
      createContextButton(t("resetColors"), () => resetConnectionColor(connection))
    ]),
    createContextSection([
      createContextButton(t("delete"), () => deleteConnection(connection), true)
    ])
  );
}

function openConnectionContextMenu(event, connection) {
  event.preventDefault();
  event.stopPropagation();
  selectedConnectionId = connection.id;
  selectedIds.clear();
  updateSelectionStyles();
  closeContextMenu();
  renderConnections();
  renderConnectionContextMenu(connection);
  positionContextMenu(event.clientX, event.clientY);
}

function renderBoardContextMenu(worldPoint) {
  const title = document.createElement("div");
  title.className = "context-menu-title";
  title.textContent = t("createElement");

  const sections = [title];
  const quickCreateDefinitions = getVisibleQuickCreateDefinitions();

  quickCreateGroupOrder.forEach((group) => {
    const items = quickCreateDefinitions
      .filter((definition) => definition.quickCreateGroup === group)
      .map((definition) => createContextButton(t(definition.labelKey), () => createAtContext(definition.kind, worldPoint)));

    if (items.length) {
      sections.push(createContextSection(items));
    }
  });

  sections.push(
    createContextSection([
      createContextButton(t("connectFromHere"), () => startConnectionFromAnchor(createConnectionPointAnchor(worldPoint))),
      createContextButton(t("settings"), () => {
        closeContextMenu();
        openSettings();
      })
    ])
  );

  contextMenu.append(...sections);
}

function renderSelectionContextMenu(cards) {
  const title = document.createElement("div");
  title.className = "context-menu-title";
  title.textContent = t("selected", { count: cards.length });
  const actions = [
    createContextButton(t(cards.length === 2 ? "connect" : "connectChain"), () => connectSelectedCards(cards)),
    createContextButton(t("groupSelected"), createGroupFromSelection),
    createContextButton(t("clearSelection"), () => {
      clearSelection();
      closeContextMenu();
    })
  ];

  contextMenu.append(
    title,
    createContextSection(actions),
    createContextSection([
      createContextButton(t("deleteSelected"), deleteSelectedCards, true)
    ])
  );
}

function renderCardContextMenu(card) {
  const title = document.createElement("div");
  title.className = "context-menu-title";
  title.textContent = card.title || t("genericElement");

  const mainActions = [
    ...(card.kind === "web" || card.kind === "comment" ? [] : [createContextButton(t("rename"), () => focusCardTitle(card))]),
    createContextButton(t("duplicate"), () => duplicateCard(card)),
    createContextButton(t("bringForward"), () => moveCardStack(card, 1)),
    createContextButton(t("sendBackward"), () => moveCardStack(card, -1)),
    createContextButton(t("connectFromHere"), () => startConnectionFromAnchor({ type: "card", cardId: card.id })),
    createContextButton(t("cardHistory"), () => openCardHistory(card)),
    ...(card.kind === "comment" ? [] : [createContextButton(t("editLinks"), () => openMetaEditor(card))])
  ];

  if (card.kind === "web") {
    mainActions.push(createContextButton(
      t(card.webInteractive ? "disableWebInteraction" : "enableWebInteraction"),
      () => setWebInteraction(card, !card.webInteractive)
    ));
  }

  if (card.kind === "comment") {
    mainActions.push(createContextButton(t("attachCommentNearest"), () => attachCommentToNearestTarget(card, { render: true })));
    if (card.commentAttachment) {
      mainActions.push(createContextButton(t("detachComment"), () => detachComment(card, { render: true })));
    }
  }

  if (card.kind === "file") {
    mainActions.push(createContextButton(t("replaceFile"), () => replaceStoredFile(card)));
    mainActions.push(createContextButton(t("openFile"), () => openStoredFile(card)));
    mainActions.push(createContextButton(t("revealFile"), () => revealStoredFile(card)));
  } else if (canRevealStoredCardFile(card)) {
    mainActions.push(createContextButton(t("revealFile"), () => revealStoredFile(card)));
  }

  contextMenu.append(
    title,
    createContextSection(mainActions),
    createContextSection([
      createContextColorRow(t("headerColor"), card.headerColor, (value) => setCardHeaderColor(card, value)),
      createContextColorRow(t("bodyColor"), card.bodyColor, (value) => setCardBodyColor(card, value)),
      createContextButton(t("resetColors"), () => resetCardColors(card))
    ]),
    createContextSection([
      createContextButton(t("delete"), () => deleteCard(card), true)
    ])
  );
  if (card.kind !== "comment") {
    contextMenu.append(createContextTagEditor(card));
  }
}

function openContextMenu(event) {
  if (event.target.closest(".toolbar") || event.target.closest(".modal") || event.target.closest(".context-menu")) {
    event.preventDefault();
    return;
  }

  blurActiveEditor();
  event.preventDefault();
  closeContextMenu();

  const card = findCardFromEventTarget(event.target);
  const worldPoint = screenToWorld(event.clientX, event.clientY);
  const startsOnGroupBody = card?.kind === "group" && Boolean(event.target.closest(".card-body"));

  if (card && !startsOnGroupBody) {
    if (!selectedIds.has(card.id)) {
      setSelectedCards([card.id]);
    }

    if (selectedIds.size > 1) {
      renderSelectionContextMenu(getSelectedCards());
    } else {
      renderCardContextMenu(card);
    }
  } else {
    if (card?.kind === "group") {
      setSelectedCards([card.id]);
    }
    renderBoardContextMenu(worldPoint);
  }

  positionContextMenu(event.clientX, event.clientY);
}

function openSettings() {
  closeContextMenu();
  settingsStatus.textContent = "";
  ensureSettingsLayout();
  applySettings();
  refreshAppConfigUi({ force: true });
  settingsModal.hidden = false;
  syncAllWebCardElements();
  void loadAppRuntimeConfig();
  void loadWindowModeState();
  void loadAppUpdateState();
  void loadBoardsList();
}

function closeSettings() {
  settingsModal.hidden = true;
  requestAnimationFrame(syncAllWebCardElements);
}

async function switchStorageDirectory() {
  if (!window.desktopBoard?.pickStorageDirectory || !window.desktopBoard?.setStorageDirectory) {
    return;
  }

  try {
    const directoryPath = await window.desktopBoard.pickStorageDirectory();
    if (!directoryPath) {
      return;
    }

    const result = await window.desktopBoard.setStorageDirectory(directoryPath, state);
    applyBoardManagerResult(result);
    clearAssetManagerAnalysis();
    refreshAssetManagerUi();
    settingsStatus.textContent = t(result?.loadedExistingState ? "storageSwitchedLoaded" : "storageSwitchedSaved");
    void logClientEvent("info", "storage.switch", "Storage switched from settings", {
      root: appRuntimeConfig.storageInfo?.root || ""
    });
  } catch (error) {
    reportError("storage.switch", error);
    settingsStatus.textContent = t("storageSwitchFailed");
  }
}

async function openCurrentStorageFolder() {
  if (!window.desktopBoard?.openStorageDirectory) {
    return;
  }

  try {
    await window.desktopBoard.openStorageDirectory();
  } catch (error) {
    reportError("storage.open", error);
  }
}

async function openLogsFolder() {
  if (!window.desktopBoard?.openLogsDirectory) {
    return;
  }

  try {
    await window.desktopBoard.openLogsDirectory();
  } catch (error) {
    reportError("logs.open", error);
  }
}

function formatBoardArchiveStatus(result, actionKey) {
  const fileName = String(result?.filePath || "").split(/[/\\]/).pop() || "board";
  const assets = actionKey === "boardArchiveImported"
    ? Number(result?.importedAssetCount || 0)
    : Number(result?.exportedAssetCount || 0);
  let message = t(actionKey, {
    name: fileName,
    cards: Number(result?.cardCount || 0),
    assets
  });

  if (Number(result?.missingAssetCount || 0) > 0) {
    message += ` ${t("boardArchiveMissingAssets", { count: Number(result.missingAssetCount) })}`;
  }

  return message;
}

async function exportBoardArchiveFromSettings() {
  if (!window.desktopBoard?.exportBoardArchive) {
    return;
  }

  try {
    const result = await window.desktopBoard.exportBoardArchive(state);
    if (!result) {
      return;
    }
    settingsStatus.textContent = formatBoardArchiveStatus(result, "boardArchiveExported");
  } catch (error) {
    reportError("archive.export", error);
    settingsStatus.textContent = t("boardArchiveFailed");
  }
}

async function importBoardArchiveFromSettings() {
  if (!window.desktopBoard?.importBoardArchive) {
    return;
  }

  try {
    const result = await window.desktopBoard.importBoardArchive();
    if (!result?.state) {
      return;
    }
    applyBoardManagerResult(result);
    clearAssetManagerAnalysis();
    refreshAssetManagerUi();
    settingsStatus.textContent = formatBoardArchiveStatus(result, "boardArchiveImported");
  } catch (error) {
    reportError("archive.import", error);
    settingsStatus.textContent = t("boardArchiveFailed");
  }
}

async function analyzeAssetsFromSettings() {
  if (!window.desktopBoard?.analyzeAssets || assetManagerState.analyzing || assetManagerState.cleaning) {
    return;
  }

  assetManagerState.analyzing = true;
  assetManagerState.statusMessage = t("assetScanRunning");
  assetManagerState.statusTone = "muted";
  refreshAssetManagerUi();

  try {
    assetManagerState.analysis = await window.desktopBoard.analyzeAssets(state);
    assetManagerState.statusMessage = "";
    assetManagerState.statusTone = "";
    refreshAssetManagerUi();
  } catch (error) {
    reportError("assets.analyze", error);
    assetManagerState.statusMessage = t("assetScanFailed");
    assetManagerState.statusTone = "error";
  } finally {
    assetManagerState.analyzing = false;
    refreshAssetManagerUi();
  }
}

async function cleanupAssetsFromSettings() {
  if (!window.desktopBoard?.cleanupAssets || assetManagerState.analyzing || assetManagerState.cleaning) {
    return;
  }

  assetManagerState.cleaning = true;
  assetManagerState.statusMessage = t("assetCleanupRunning");
  assetManagerState.statusTone = "muted";
  refreshAssetManagerUi();

  try {
    const result = await window.desktopBoard.cleanupAssets(state);
    assetManagerState.analysis = result?.analysis || null;
    assetManagerState.statusMessage = t("assetCleanupDone", {
      count: Number(result?.removedCount || 0),
      size: formatFileSize(result?.removedBytes || 0)
    });
    assetManagerState.statusTone = "";
  } catch (error) {
    reportError("assets.cleanup", error);
    assetManagerState.statusMessage = t("assetCleanupFailed");
    assetManagerState.statusTone = "error";
  } finally {
    assetManagerState.cleaning = false;
    refreshAssetManagerUi();
  }
}

async function maybeRunStartupAssetMaintenance() {
  if (startupAssetMaintenanceStarted || appRuntimeConfig.autoManageAssetsOnLaunch !== true) {
    return;
  }
  if (!window.desktopBoard?.analyzeAssets) {
    return;
  }

  startupAssetMaintenanceStarted = true;
  assetManagerState.analyzing = true;
  assetManagerState.statusMessage = t("assetScanRunning");
  assetManagerState.statusTone = "muted";
  refreshAssetManagerUi();

  try {
    const analysis = await window.desktopBoard.analyzeAssets(state);
    assetManagerState.analysis = analysis;
    assetManagerState.analyzing = false;

    if (Number(analysis?.unusedAssetCount || 0) > 0 && window.desktopBoard?.cleanupAssets) {
      assetManagerState.cleaning = true;
      assetManagerState.statusMessage = t("assetCleanupRunning");
      assetManagerState.statusTone = "muted";
      refreshAssetManagerUi();

      const result = await window.desktopBoard.cleanupAssets(state);
      assetManagerState.analysis = result?.analysis || analysis;
      assetManagerState.statusMessage = t("assetCleanupDone", {
        count: Number(result?.removedCount || 0),
        size: formatFileSize(result?.removedBytes || 0)
      });
      assetManagerState.statusTone = "";
    } else {
      assetManagerState.statusMessage = "";
      assetManagerState.statusTone = "";
    }
  } catch (error) {
    reportError("assets.startupMaintenance", error);
    assetManagerState.statusMessage = t("assetCleanupFailed");
    assetManagerState.statusTone = "error";
  } finally {
    assetManagerState.analyzing = false;
    assetManagerState.cleaning = false;
    refreshAssetManagerUi();
  }
}

async function saveSettings() {
  ensureEditMode();
  const nextColors = Object.fromEntries(
    Object.entries(colorInputRefs).map(([kind, inputs]) => [
      kind,
      {
        header: inputs.header.value || defaultSettings.colors[kind].header,
        body: inputs.body.value || defaultSettings.colors[kind].body
      }
    ])
  );

  state.settings = normalizeSettings({
    ...state.settings,
    themeMode: themeModeInput.value || defaultSettings.themeMode,
    languageMode: languageModeInput.value || defaultSettings.languageMode,
    timeFormat: timeFormatInput.value || defaultSettings.timeFormat,
    backgroundColor: backgroundColorInput.value || defaultSettings.backgroundColor,
    backgroundOpacity: Number(backgroundOpacityInput?.value ?? defaultSettings.backgroundOpacity),
    connectionColor: connectionColorInput.value || getDefaultConnectionColor(backgroundColorInput.value || defaultSettings.backgroundColor),
    richTextFontFamily: richTextFontFamilyInput?.value || defaultSettings.richTextFontFamily,
    richTextFontSize: Number(richTextFontSizeInput?.value || defaultSettings.richTextFontSize),
    snapToGrid: snapToGridInput.checked,
    historyEnabled: historyEnabledInput?.checked !== false,
    quickCreateKinds: getSelectedQuickCreateKinds(),
    toolbarCreateKinds: getSelectedToolbarCreateKinds(),
    colorSchemes: state.settings.colorSchemes,
    colors: nextColors,
    toggleHotkey: toggleHotkeyInput.value.trim() || defaultSettings.toggleHotkey,
    lockHotkey: lockHotkeyInput.value.trim() || defaultSettings.lockHotkey
  });

  applyDefaultColorsToInheritedCards();
  applyDefaultColorsToInheritedConnections();
  applySettings();
  applySystemTheme(currentSystemTheme);
  render();
  await saveState({ skipHistory: true });

  let statusMessage = t("settingsSaved");

  if (window.desktopBoard?.updateAppConfig) {
    try {
      const requestVersion = ++appRuntimeConfigRequestVersion;
      const wallpaperModeEnabled = appRuntimeConfig.windowModeSupported === true;
      const multiMonitorMode = getMultiMonitorModeFromUi();
      const nextAppConfig = await window.desktopBoard.updateAppConfig({
        diagnosticsEnabled: diagnosticsEnabledInput.checked,
        autoStartEnabled: autoStartWithWindowsInput?.checked === true,
        autoManageAssetsOnLaunch: autoManageAssetsOnLaunchInput?.checked === true,
        wallpaperModeEnabled,
        wallpaperInteractionEnabled: false,
        multiMonitorEnabled: multiMonitorMode === "seamless",
        multiMonitorMode,
        multiMonitorDisplayIds: multiMonitorMode === "single" ? [] : getSelectedMultiMonitorDisplayIdsFromUi()
      });
      if (requestVersion === appRuntimeConfigRequestVersion) {
        appRuntimeConfig = nextAppConfig;
        applyViewport();
        refreshAppConfigUi({ force: true });
      }

      if (multiMonitorMode !== "workspace") {
        await switchWindowMode(wallpaperModeEnabled ? windowModeInput?.value || "normal" : "normal");
      } else {
        await loadWindowModeState();
      }
    } catch (error) {
      reportError("config.update", error);
      statusMessage = t("appConfigSaveError");
    }
  }

  if (window.desktopBoard?.updateHotkeys) {
    try {
      const result = await window.desktopBoard.updateHotkeys(state.settings);
      if (!result.toggleRegistered || !result.lockRegistered) {
        statusMessage = t("hotkeyWarning");
      }
    } catch (error) {
      reportError("hotkeys.update", error);
      statusMessage = t("hotkeyError");
    }
  } else {
    statusMessage = t("settingsSavedPreview");
  }

  settingsStatus.textContent = statusMessage;
}

async function handleDroppedFiles(event) {
  event.preventDefault();
  ensureEditMode();

  const files = Array.from(event.dataTransfer.files || []);
  let nextDroppedStackOrder = getNextStackOrderForLayer("card");
  const cards = await Promise.all(files.map(async (file) => {
    const kind = getAssetKindFromFile(file);
    if (!kind) {
      return null;
    }

    let media = null;
    if (window.desktopBoard?.importAsset && file.path) {
      try {
        media = await window.desktopBoard.importAsset({
          path: file.path,
          kind,
          originalName: file.name
        });
      } catch (error) {
        console.error("Failed to import dropped media:", error);
      }
    }

    if (!media) {
      media = {
        name: file.name,
        originalName: file.name,
        src: file.path ? `file:///${file.path.replaceAll("\\", "/")}` : URL.createObjectURL(file),
        path: file.path || null,
        assetId: null,
        assetRelativePath: null,
        sizeBytes: file.size
      };
    }

    const world = screenToWorld(event.clientX, event.clientY);
    const colors = getDefaultCardColors(kind);
    const definition = getCardTypeDefinition(kind);
    return {
      id: createId(kind),
      kind,
      title: media.name || file.name,
      x: maybeSnap(world.x),
      y: maybeSnap(world.y),
      width: definition.defaultSize?.width || 360,
      height: definition.defaultSize?.height || 260,
      headerColor: colors.header,
      bodyColor: colors.body,
      customHeaderColor: false,
      customBodyColor: false,
      stackOrder: nextDroppedStackOrder++,
      src: media.src,
      path: media.path || null,
      assetId: media.assetId || null,
      assetRelativePath: media.assetRelativePath || null,
      originalName: media.originalName || media.name || file.name,
      sizeBytes: Number.isFinite(Number(media.sizeBytes)) ? Number(media.sizeBytes) : file.size,
      showPreview: kind === "file" ? true : undefined
    };
  }));

  state.cards.push(...cards.filter(Boolean));

  render();
  scheduleSave();
}

board.addEventListener("pointerdown", handleConnectionPointerDown);
board.addEventListener("pointerdown", startPan);
board.addEventListener("pointerdown", startSelection);
board.addEventListener("pointermove", handleConnectionPointerMove);
board.addEventListener("pointermove", updateActiveAction);
board.addEventListener("pointerup", stopActiveAction);
board.addEventListener("pointercancel", stopActiveAction);
board.addEventListener("wheel", zoomAt, { passive: false });
board.addEventListener("contextmenu", openContextMenu);
board.addEventListener("dragover", (event) => event.preventDefault());
board.addEventListener("drop", handleDroppedFiles);

window.addEventListener("keydown", (event) => {
  const typingTarget = isTextInputTarget(document.activeElement);

  if (!searchModal.hidden) {
    if (event.key === "Enter") {
      event.preventDefault();
      submitSearchResultByIndex();
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();
      if (searchState.resultIds.length) {
        searchState.activeIndex = Math.min(searchState.activeIndex + 1, searchState.resultIds.length - 1);
        syncSearchResultActiveState();
      }
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      if (searchState.resultIds.length) {
        searchState.activeIndex = Math.max(searchState.activeIndex - 1, 0);
        syncSearchResultActiveState();
      }
      return;
    }

    if (event.key === "Escape") {
      event.preventDefault();
      closeSearchModal(null);
      return;
    }
  }

  if (!urlModal.hidden && event.key === "Enter") {
    event.preventDefault();
    submitUrlModal();
    return;
  }

  if (!urlModal.hidden && event.key === "Escape") {
    event.preventDefault();
    closeUrlModal("");
    return;
  }

  if (!metaModal.hidden && event.key === "Escape") {
    event.preventDefault();
    closeMetaModal();
    return;
  }

  if (commentHistoryModal && !commentHistoryModal.hidden && event.key === "Escape") {
    event.preventDefault();
    closeCommentHistoryModal();
    return;
  }

  if ((event.ctrlKey || event.metaKey) && !event.altKey && event.code === "KeyZ" && !typingTarget) {
    event.preventDefault();
    if (event.shiftKey) {
      redoStateChange();
    } else {
      undoStateChange();
    }
    return;
  }

  if ((event.ctrlKey || event.metaKey) && !event.altKey && !event.shiftKey && event.code === "KeyY" && !typingTarget) {
    event.preventDefault();
    redoStateChange();
    return;
  }

  if ((event.ctrlKey || event.metaKey) && !event.altKey && event.code === "KeyK") {
    event.preventDefault();
    openSearchModal({ mode: "navigate" });
    return;
  }

  if (event.key === "Delete" && selectedIds.size > 0 && !isBoardDeleteShortcutBlocked(document.activeElement)) {
    event.preventDefault();
    deleteSelectedCards();
    return;
  }

  if (event.key === "Delete" && selectedConnectionId && !isBoardDeleteShortcutBlocked(document.activeElement)) {
    const connection = state.connections.find((item) => item.id === selectedConnectionId);
    if (connection) {
      event.preventDefault();
      deleteConnection(connection);
      selectedConnectionId = null;
      return;
    }
  }

  if (event.key === "Escape" && connectionMode) {
    event.preventDefault();
    setConnectionMode(false);
    return;
  }

  if (event.key === "Escape" && disableAllWebInteraction()) {
    event.preventDefault();
    return;
  }

  if (event.key === "Escape" && !contextMenu.hidden) {
    closeContextMenu();
  }

  if (event.key === "Escape" && !settingsModal.hidden) {
    closeSettings();
  }
});

window.addEventListener("pointerdown", (event) => {
  if (!contextMenu.hidden && !event.target.closest(".context-menu") && event.button !== 2) {
    closeContextMenu();
  }
  if (!event.target.closest(".rich-text-editor") && !event.target.closest(".rich-text-toolbar")) {
    hideRichTextToolbar();
  }
});

window.addEventListener("resize", closeContextMenu);
document.addEventListener("selectionchange", updateRichTextToolbarFromSelection);
document.addEventListener("visibilitychange", syncBrandLogoAnimationState);

lockButton.addEventListener("click", () => setLocked(!state.locked));
hideButton.addEventListener("click", () => {
  if (window.desktopBoard) {
    window.desktopBoard.hideWindow();
  }
});
getToolbarCardTypes().forEach((definition) => {
  definition.toolbarButton.addEventListener("click", () => createElement(definition.kind));
});
addConnectionButton.addEventListener("click", toggleConnectionMode);
searchButton.addEventListener("click", () => openSearchModal({ mode: "navigate" }));
settingsButton.addEventListener("click", openSettings);
closeSettingsButton.addEventListener("click", closeSettings);
saveSettingsButton.addEventListener("click", saveSettings);
pickStoragePathButton?.addEventListener("click", switchStorageDirectory);
openStoragePathButton?.addEventListener("click", openCurrentStorageFolder);
openLogsButton?.addEventListener("click", openLogsFolder);
exportBoardButton?.addEventListener("click", exportBoardArchiveFromSettings);
importBoardButton?.addEventListener("click", importBoardArchiveFromSettings);
createBoardButton?.addEventListener("click", createBoardFromSettings);
switchBoardButton?.addEventListener("click", switchBoardFromSettings);
renameBoardButton?.addEventListener("click", renameBoardFromSettings);
deleteBoardButton?.addEventListener("click", deleteBoardFromSettings);
toolbarBoardSelect?.addEventListener("change", () => {
  void switchBoardById(toolbarBoardSelect.value, null);
});
toolbarWindowModeSelect?.addEventListener("change", () => {
  void switchWindowMode(toolbarWindowModeSelect.value || "normal");
});
modeEditButton?.addEventListener("click", () => {
  void switchWindowMode("normal");
});
analyzeAssetsButton?.addEventListener("click", analyzeAssetsFromSettings);
cleanupAssetsButton?.addEventListener("click", cleanupAssetsFromSettings);
checkUpdatesButton?.addEventListener("click", checkForUpdatesFromSettings);
installUpdateButton?.addEventListener("click", installDownloadedUpdateFromSettings);
saveColorSchemeButton?.addEventListener("click", () => {
  void saveCurrentColorScheme();
});
exportColorSchemeButton?.addEventListener("click", exportCurrentColorScheme);
importThemeButton?.addEventListener("click", () => {
  void importThemeFromFile();
});
importThemePackageButton?.addEventListener("click", () => {
  void importThemePackageFromDirectory();
});
multiMonitorModeInput?.addEventListener("change", () => refreshAppConfigUi());
backgroundOpacityInput?.addEventListener("input", () => {
  if (backgroundOpacityValue) {
    const nextTransparency = Number(backgroundOpacityInput.value);
    backgroundOpacityValue.textContent = `${clamp(Number.isFinite(nextTransparency) ? nextTransparency : defaultSettings.backgroundOpacity, 0, 100)}%`;
  }
});
window.addEventListener("pointermove", (event) => {
  widgetHoverTarget = event.target instanceof Element ? event.target : null;
  void syncWidgetModeInteractivity(widgetHoverTarget);
}, true);
window.addEventListener("pointerdown", (event) => {
  widgetHoverTarget = event.target instanceof Element ? event.target : null;
  void syncWidgetModeInteractivity(widgetHoverTarget, { focus: true });
}, true);
window.addEventListener("pointerup", () => {
  void syncWidgetModeInteractivity(widgetHoverTarget, { force: true });
}, true);
window.addEventListener("focusin", (event) => {
  widgetHoverTarget = event.target instanceof Element ? event.target : widgetHoverTarget;
  void syncWidgetModeInteractivity(widgetHoverTarget, { focus: true, force: true });
});
window.addEventListener("focusout", () => {
  window.setTimeout(() => {
    void syncWidgetModeInteractivity(widgetHoverTarget, { force: true });
  }, 0);
});
window.addEventListener("beforeunload", () => {
  if (window.desktopBoard?.syncWebCards) {
    void window.desktopBoard.syncWebCards([]);
  }
});
closeUrlButton.addEventListener("click", () => closeUrlModal(""));
cancelUrlButton.addEventListener("click", () => closeUrlModal(""));
saveUrlButton.addEventListener("click", submitUrlModal);
closeSearchButton.addEventListener("click", () => closeSearchModal(null));
cancelSearchButton.addEventListener("click", () => closeSearchModal(null));
searchInput.addEventListener("input", () => {
  searchState.activeIndex = 0;
  updateSearchResults();
});
searchScopeInput.addEventListener("change", () => {
  searchState.scope = searchScopeInput.value;
  searchState.activeIndex = 0;
  updateSearchResults();
});
closeMetaButton.addEventListener("click", closeMetaModal);
cancelMetaButton.addEventListener("click", closeMetaModal);
saveMetaButton.addEventListener("click", saveMetaEditor);
addReferenceButton.addEventListener("click", addReferenceFromMetaEditor);
copyMetaLinkButton.addEventListener("click", async () => {
  const card = getCardById(metaEditor.cardId);
  if (card) {
    await copyCardLink(card);
  }
});
closeCommentHistoryButton?.addEventListener("click", closeCommentHistoryModal);
closeCommentHistoryFooterButton?.addEventListener("click", closeCommentHistoryModal);
settingsModal.addEventListener("click", (event) => {
  if (event.target === settingsModal) {
    closeSettings();
  }
});
urlModal.addEventListener("click", (event) => {
  if (event.target === urlModal) {
    closeUrlModal("");
  }
});
searchModal.addEventListener("click", (event) => {
  if (event.target === searchModal) {
    closeSearchModal(null);
  }
});
metaModal.addEventListener("click", (event) => {
  if (event.target === metaModal) {
    closeMetaModal();
  }
});
commentHistoryModal?.addEventListener("click", (event) => {
  if (event.target === commentHistoryModal) {
    closeCommentHistoryModal();
  }
});

if (!timerTickHandle) {
  timerTickHandle = window.setInterval(() => {
    handleTimerTick({ sideEffects: !isOverlayWindow });
  }, timerTickIntervalMs);
}
startBrandLogoAnimationTicker();

if (window.desktopBoard) {
  window.desktopBoard.onToggleLock(() => setLocked(!state.locked));
  window.desktopBoard.onSystemThemeUpdate?.((theme) => applySystemTheme(theme));
  window.desktopBoard.onUpdateState?.((nextState) => {
    appUpdateState = normalizeAppUpdateState(nextState);
    refreshAppUpdateUi();
  });
  window.desktopBoard.onWindowModeState?.((nextState) => {
    windowModeState = normalizeWindowModeState(nextState);
    applyViewport();
    if (windowModeState.currentMode === "widget-mode") {
      if (state.locked) {
        setLocked(false, { persist: false });
      }
      void syncWidgetModeInteractivity(widgetHoverTarget);
    } else if (windowModeState.currentMode === "wallpaper-view") {
      if (canEditInWallpaperView()) {
        if (state.locked) {
          setLocked(false, { persist: false });
        }
      } else if (!state.locked) {
        setLocked(true, { persist: false });
      }
    } else {
      void syncWidgetModeInteractivity(null, { force: true });
    }
    refreshWallpaperModeUi({ force: true });
    updateModeUi();
    refreshWebContentRenderForWindowMode();
  });
  window.desktopBoard.onOpenCardHistory?.((payload) => {
    const cardId = typeof payload?.cardId === "string" ? payload.cardId : "";
    const card = cardId ? getCardById(cardId) : null;
    if (card) {
      showCardHistoryModal(card);
    }
  });
  window.desktopBoard.onNotificationEvent?.((payload) => {
    const cardId = typeof payload?.cardId === "string" ? payload.cardId : "";
    if (!cardId) {
      return;
    }

    if (payload?.type === "focus-card") {
      focusCardById(cardId);
      return;
    }

    if (payload?.type === "acknowledge-card") {
      const card = getCardById(cardId);
      if (card?.kind !== "reminder") {
        return;
      }
      card.reminderAcknowledgedAt = Date.now();
      render();
      void saveState({ skipHistory: true });
    }
  });
  window.desktopBoard.onStateChanged?.((nextState) => {
    applyLoadedBoardState(nextState, { persist: false, preserveViewport: true, preserveLocked: true });
  });
}

window.addEventListener("error", (event) => {
  reportError("window.error", event.error || new Error(event.message || "Window error"));
});

window.addEventListener("unhandledrejection", (event) => {
  const reason = event.reason instanceof Error ? event.reason : new Error(String(event.reason || "Unhandled rejection"));
  reportError("window.unhandledrejection", reason);
});

loadSystemTheme().then(loadAppRuntimeConfig).then(loadWindowModeState).then(loadAppUpdateState).then(loadState).then(() => {
  applySystemTheme(currentSystemTheme);
  render();
  if (!isOverlayWindow) {
    void saveState();
    void maybeRunStartupAssetMaintenance();
  }
  void loadBoardsList();
}).catch((error) => {
  reportError("app.init", error);
  state = clone(defaultState);
  resetHistoryTracking(state);
  applySystemTheme(currentSystemTheme);
  render();
});
