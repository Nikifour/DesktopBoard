const board = document.getElementById("board");
const workspace = document.getElementById("workspace");
const toolbarBoardSelect = document.getElementById("toolbarBoardSelect");
const modeLabel = document.getElementById("modeLabel");
const lockButton = document.getElementById("lockButton");
const hideButton = document.getElementById("hideButton");
const addNoteButton = document.getElementById("addNoteButton");
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
const themeModeInput = document.getElementById("themeModeInput");
const backgroundColorInput = document.getElementById("backgroundColorInput");
const noteHeaderColorInput = document.getElementById("noteHeaderColorInput");
const noteBodyColorInput = document.getElementById("noteBodyColorInput");
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
const diagnosticsEnabledInput = document.getElementById("diagnosticsEnabledInput");
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
const stateSchemaVersion = 7;
const defaultBoardId = "main";
const defaultBoardName = navigator.language?.toLowerCase().startsWith("ru") ? "Основная доска" : "Main board";
const minTimerDurationMinutes = 1;
const defaultTimerDurationMinutes = 25;
const maxTimerDurationMinutes = 10080;
const defaultReminderRepeatIntervalMinutes = 5;
const minReminderRepeatIntervalMinutes = 1;
const maxReminderRepeatIntervalMinutes = 1440;
const timerTickIntervalMs = 1000;
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
    defaultSize: { width: 320, height: 270 },
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

const defaultSettings = {
  themeMode: "system",
  languageMode: "system",
  timeFormat: "24h",
  backgroundColor: "#f4f5f0",
  connectionColor: "#171916",
  snapToGrid: true,
  quickCreateKinds: [...defaultQuickCreateKinds],
  colors: {
    note: { header: "#f2c94c", body: "#fff8d7" },
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
let saveTimer = null;
let selectedIds = new Set();
let selectedConnectionId = null;
let undoStack = [];
let redoStack = [];
let lastCommittedHistorySnapshot = null;
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
  autoStart: {
    supported: false,
    reason: "unknown",
    enabled: false,
    effective: false
  },
  storageInfo: null
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
const webResizeObserver = typeof ResizeObserver === "function"
  ? new ResizeObserver((entries) => {
    entries.forEach((entry) => syncWebCardElement(entry.target.closest(".card")));
  })
  : null;
let cardIndex = new Map();
let backlinkIndex = new Map();
const quickCreateInputMap = new Map();
let timerTickHandle = null;

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
    invalidUrl: "Enter a valid http/https URL.",
    settingsSaved: "Settings saved.",
    settingsSavedPreview: "Settings saved for preview.",
    hotkeyWarning: "One hotkey was not registered. Check the shortcut.",
    hotkeyError: "Could not update hotkeys. Check the format."
  }
};

Object.assign(translations.ru, {
  autoStartWithWindows: "\u0410\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a \u0441 Windows",
  autoManageAssetsOnLaunch: "\u0410\u0432\u0442\u043e\u0430\u043d\u0430\u043b\u0438\u0437 \u0438 \u043e\u0447\u0438\u0441\u0442\u043a\u0430 \u0444\u0430\u0439\u043b\u043e\u0432 \u043f\u0440\u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0435",
  autoManageAssetsOnLaunchHelp: "\u041f\u0440\u0438 \u0441\u0442\u0430\u0440\u0442\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0432\u0435\u0440\u0438\u0442 \u0444\u0430\u0439\u043b\u044b \u0434\u043e\u0441\u043a\u0438, \u043f\u043e\u043c\u0435\u0442\u0438\u0442 \u0431\u0438\u0442\u044b\u0435 \u0441\u0441\u044b\u043b\u043a\u0438 \u0438 \u0443\u0434\u0430\u043b\u0438\u0442 \u043d\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c\u044b\u0435 \u0444\u0430\u0439\u043b\u044b.",
  autoStartHelpSupported: "\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0442\u044c\u0441\u044f \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438 \u043f\u043e\u0441\u043b\u0435 \u0432\u0445\u043e\u0434\u0430 \u0432 Windows.",
  autoStartHelpUnpacked: "\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u043e \u0432 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u043e\u0439 \u0438\u043b\u0438 portable-\u0441\u0431\u043e\u0440\u043a\u0435 \u043d\u0430 Windows. Dev-\u0440\u0435\u0436\u0438\u043c \u0432 \u0430\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a \u043d\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f.",
  autoStartHelpUnsupported: "\u0410\u0432\u0442\u043e\u0437\u0430\u043f\u0443\u0441\u043a \u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 Windows.",
  appConfigSaveError: "\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f."
});

Object.assign(translations.en, {
  autoStartWithWindows: "Start with Windows",
  autoManageAssetsOnLaunch: "Auto-analyze and clean files on launch",
  autoManageAssetsOnLaunchHelp: "When the app starts it will inspect board files, flag broken references, and remove unused stored files.",
  autoStartHelpSupported: "The app will start automatically after you sign in to Windows.",
  autoStartHelpUnpacked: "Available in installed or portable Windows builds. Dev mode is not added to startup.",
  autoStartHelpUnsupported: "Auto-start is available only on Windows.",
  appConfigSaveError: "Could not save app settings."
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
  calculatorDivisionByZero: "\u0414\u0435\u043b\u0435\u043d\u0438\u0435 \u043d\u0430 \u043d\u043e\u043b\u044c"
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
  calculatorDivisionByZero: "Division by zero"
});

Object.assign(translations.ru, {
  connectionPathStyle: "\u0422\u0440\u0430\u0435\u043a\u0442\u043e\u0440\u0438\u044f",
  connectionPathSegmented: "\u041b\u043e\u043c\u0430\u043d\u0430\u044f",
  connectionPathSmooth: "\u041f\u043b\u0430\u0432\u043d\u0430\u044f",
  connectionStartCap: "\u041d\u0430\u0447\u0430\u043b\u043e",
  connectionEndCap: "\u041a\u043e\u043d\u0435\u0446",
  connectionCapNone: "\u0411\u0435\u0437 \u043c\u0430\u0440\u043a\u0435\u0440\u0430",
  connectionCapArrow: "\u0421\u0442\u0440\u0435\u043b\u043a\u0430",
  connectionCapDot: "\u0422\u043e\u0447\u043a\u0430"
});

Object.assign(translations.en, {
  connectionPathStyle: "Path",
  connectionPathSegmented: "Segmented",
  connectionPathSmooth: "Smooth",
  connectionStartCap: "Start",
  connectionEndCap: "End",
  connectionCapNone: "No cap",
  connectionCapArrow: "Arrow",
  connectionCapDot: "Dot"
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
  removeTagLabel: "\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0442\u0435\u0433 {tag}"
});

Object.assign(translations.en, {
  linksPanelTitle: "Links",
  tagInputPlaceholder: "New tag",
  tagInputHelp: "Press Enter to add a tag",
  noTags: "No tags yet.",
  editLinks: "Links...",
  removeTagLabel: "Remove tag {tag}"
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
  return source.map((task) => ({
    id: typeof task?.id === "string" && task.id ? task.id : createId("task"),
    text: typeof task?.text === "string" ? task.text : "",
    done: Boolean(task?.done)
  }));
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
  return {
    id: typeof entry?.id === "string" && entry.id ? entry.id : createId("schedule-item"),
    time: normalizeScheduleTime(entry?.time),
    note: typeof entry?.note === "string"
      ? entry.note
      : typeof entry?.text === "string"
        ? entry.text
        : ""
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

function isSettingsModalOpen() {
  return Boolean(settingsModal && settingsModal.hidden === false);
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

function applyLoadedBoardState(nextState) {
  if (saveTimer) {
    clearTimeout(saveTimer);
    saveTimer = null;
  }

  state = normalizeState(nextState);
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
}

function applyBoardManagerResult(result, statusMessage = "") {
  if (result?.appConfig) {
    appRuntimeConfig = result.appConfig;
  }
  if (result?.state) {
    applyLoadedBoardState(result.state);
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
  } catch (error) {
    reportError("config.load", error);
  }

  refreshAppConfigUi({ force: true });
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

function normalizeQuickCreateKinds(kinds) {
  const allowedKinds = new Set(cardTypeRegistry.map((definition) => definition.kind));
  const source = Array.isArray(kinds) ? kinds : defaultQuickCreateKinds;
  const normalized = [];

  source.forEach((kind) => {
    if (!allowedKinds.has(kind) || normalized.includes(kind)) {
      return;
    }
    normalized.push(kind);
  });

  return normalized;
}

function getVisibleQuickCreateDefinitions(kinds = state.settings?.quickCreateKinds) {
  const visibleKinds = new Set(normalizeQuickCreateKinds(kinds));
  return cardTypeRegistry.filter((definition) => visibleKinds.has(definition.kind));
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

function normalizeState(input) {
  const source = input && Array.isArray(input.cards) ? input : defaultState;
  const parsedSchemaVersion = Number(source.schemaVersion);
  const sourceSchemaVersion = Number.isFinite(parsedSchemaVersion) && parsedSchemaVersion > 0
    ? parsedSchemaVersion
    : 0;
  const settings = normalizeSettings(source.settings);
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
    cards: source.cards.map((card) => normalizeCard(card, settings)),
    connections: []
  };

  const cardIds = new Set(normalized.cards.map((card) => card.id));
  normalized.cards = normalized.cards.map((card) => ({
    ...card,
    references: normalizeReferenceIds(card.references, card.id, cardIds)
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
    connectionColor: isHexColor(settings.connectionColor) ? settings.connectionColor : getDefaultConnectionColor(backgroundColor),
    snapToGrid: settings.snapToGrid !== false,
    quickCreateKinds: normalizeQuickCreateKinds(settings.quickCreateKinds),
    colors
  };
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
    tags: normalizeTagList(card.tags),
    references: normalizeReferenceIds(card.references, card.id || "")
  };

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

  if (normalized.kind === "calculator") {
    normalized.calculatorOperation = normalizeCalculatorOperation(normalized.calculatorOperation);
    normalized.calculatorInputs = normalizeCalculatorInputs(normalized.calculatorInputs);
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
    normalized.text = typeof normalized.text === "string" ? normalized.text : "";
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

function applyViewport() {
  const { x, y, zoom } = state.viewport;
  board.style.setProperty("--pan-x", `${x}px`);
  board.style.setProperty("--pan-y", `${y}px`);
  board.style.setProperty("--zoom", zoom);
  board.style.backgroundSize = `${gridSize * zoom}px ${gridSize * zoom}px`;
  zoomLabel.textContent = `${Math.round(zoom * 100)}%`;
  requestAnimationFrame(syncAllWebCardElements);
}

function applySettings() {
  document.documentElement.style.setProperty("--page", state.settings.backgroundColor);
  document.documentElement.style.setProperty("--connection-outline", getReadableTextColor(state.settings.backgroundColor));
  themeModeInput.value = state.settings.themeMode;
  languageModeInput.value = state.settings.languageMode;
  timeFormatInput.value = state.settings.timeFormat;
  backgroundColorInput.value = state.settings.backgroundColor;
  connectionColorInput.value = state.settings.connectionColor;
  Object.entries(colorInputRefs).forEach(([kind, inputs]) => {
    if (!inputs?.header || !inputs?.body) {
      return;
    }
    inputs.header.value = state.settings.colors[kind].header;
    inputs.body.value = state.settings.colors[kind].body;
  });
  snapToGridInput.checked = state.settings.snapToGrid;
  toggleHotkeyInput.value = state.settings.toggleHotkey;
  lockHotkeyInput.value = state.settings.lockHotkey;
  refreshAppConfigUi();
  renderQuickCreateSettings();
  applyTranslations();
}

function applyTranslations() {
  document.documentElement.lang = getActiveLanguage();
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
  setText("timeFormatLabel", "timeFormat");
  setText("backgroundColorLabel", "backgroundColor");
  setText("connectionColorLabel", "connectionColor");
  setText("storagePathLabel", "storagePath");
  setText("storagePathHelp", "storagePathHelp");
  setText("diagnosticsEnabledLabel", "diagnosticsEnabled");
  setText("logsFolderLabel", "logsFolder");
  setText("boardArchiveLabel", "boardArchive");
  setText("boardArchiveHelp", "boardArchiveHelp");
  setText("assetManagerLabel", "assetManager");
  setText("assetManagerHelp", "assetManagerHelp");
  setText("autoManageAssetsOnLaunchLabel", "autoManageAssetsOnLaunch");
  setText("autoManageAssetsOnLaunchHelp", "autoManageAssetsOnLaunchHelp");
  setText("updatesLabel", "updatesLabel");
  setText("newElementColorsTitle", "newElementColors");
  setText("quickCreateTitle", "quickCreateMenu");
  setText("quickCreateHelp", "quickCreateHelp");
  setText("headerColorColumnLabel", "headerColor");
  setText("bodyColorColumnLabel", "bodyColor");
  [
    ["noteColorRuleLabel", "note"],
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
  refreshAssetManagerUi();
  refreshAppUpdateUi();

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
    parts.push(normalizeCalculatorOperation(card.calculatorOperation));
    if (Array.isArray(card.calculatorInputs)) {
      parts.push(...card.calculatorInputs.map((input) => input.value || ""));
    }
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
  state.viewport.x = Math.round(window.innerWidth / 2 - centerX * state.viewport.zoom);
  state.viewport.y = Math.round(window.innerHeight / 2 - centerY * state.viewport.zoom);
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
  if (activeElement.matches("input, textarea, select")) {
    activeElement.blur();
  }
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
  return {
    x: (clientX - state.viewport.x) / state.viewport.zoom,
    y: (clientY - state.viewport.y) / state.viewport.zoom
  };
}

function getVisibleWorldCenter() {
  return screenToWorld(window.innerWidth / 2, window.innerHeight / 2);
}

function updateModeUi() {
  document.body.classList.toggle("is-locked", state.locked);
  board.classList.toggle("is-connecting", connectionMode);
  addConnectionButton.classList.toggle("is-active", connectionMode);
  addConnectionButton.dataset.tooltip = t(connectionMode ? "cancelConnection" : "connection");
  addConnectionButton.setAttribute("aria-label", t(connectionMode ? "cancelConnection" : "addConnection"));
  modeLabel.textContent = connectionMode
    ? (connectionDraft ? t("modeConnectionEnd") : t("modeConnectionStart"))
    : (state.locked ? t("modeView") : t("modeEdit"));
  lockButton.dataset.tooltip = t(state.locked ? "edit" : "lock");
  lockButton.setAttribute("aria-label", t(state.locked ? "edit" : "lock"));
}

function setLocked(locked) {
  if (locked) {
    setConnectionMode(false);
  }

  state.locked = locked;
  document.body.classList.toggle("is-locked", locked);
  updateModeUi();
  workspace.querySelectorAll("textarea, input, select").forEach((field) => {
    const inputType = "type" in field ? field.type : "";
    if (field.tagName === "SELECT" || inputType === "checkbox" || inputType === "color" || inputType === "range" || inputType === "time") {
      field.disabled = locked;
    } else {
      field.readOnly = locked;
    }
  });
  scheduleSave();
}

function ensureEditMode() {
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
  renderConnections();

  state.cards
    .slice()
    .sort((a, b) => getCardLayer(a) - getCardLayer(b))
    .forEach((card) => {
      workspace.appendChild(renderCard(card));
    });

  refreshVisibleTimerCards();
  refreshVisibleReminderCards();
}

function getCardLayer(card) {
  return card.kind === "group" ? 0 : 10;
}

function getCardKindLabel(kind) {
  return t(getCardTypeDefinition(kind)?.labelKey || "note");
}

function getCardKindIcon(kind) {
  return getCardTypeDefinition(kind)?.icon || getCardTypeDefinition("note").icon;
}

function getResizeDirections(card) {
  return card.kind === "group"
    ? ["n", "ne", "e", "se", "s", "sw", "w", "nw"]
    : ["se"];
}

function renderCard(card) {
  const element = document.createElement("section");
  element.className = "card";
  element.classList.toggle("is-selected", selectedIds.has(card.id));
  element.dataset.id = card.id;
  element.dataset.kind = card.kind;
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
  kindIcon.innerHTML = getCardKindIcon(card.kind);

  if (card.kind === "file") {
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

  const textarea = document.createElement("textarea");
  textarea.className = "note-text";
  textarea.value = card.text || "";
  textarea.readOnly = state.locked;
  textarea.spellcheck = true;
  textarea.addEventListener("input", () => {
    card.text = textarea.value;
    scheduleSave();
  });

  return textarea;
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

function syncCalculatorResult(card, valueElement) {
  if (!valueElement) {
    return;
  }

  const result = computeCalculatorResult(card);
  valueElement.textContent = result.text;
  valueElement.classList.toggle("is-empty", !result.text || result.empty || result.messageOnly);
}

function renderCalculator(card) {
  card.calculatorOperation = normalizeCalculatorOperation(card.calculatorOperation);
  card.calculatorInputs = normalizeCalculatorInputs(card.calculatorInputs);

  const wrapper = document.createElement("div");
  wrapper.className = "calculator-card";

  const operationRow = document.createElement("div");
  operationRow.className = "calculator-operation-row";

  const operationLabel = document.createElement("div");
  operationLabel.className = "calculator-label";
  operationLabel.textContent = t("calculatorOperation");

  const operationSelect = document.createElement("select");
  operationSelect.className = "card-field";
  operationSelect.disabled = state.locked;
  [
    ["add", "calculatorOperationAdd"],
    ["subtract", "calculatorOperationSubtract"],
    ["multiply", "calculatorOperationMultiply"],
    ["divide", "calculatorOperationDivide"]
  ].forEach(([value, key]) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = t(key);
    operationSelect.appendChild(option);
  });
  operationSelect.value = card.calculatorOperation;
  operationSelect.addEventListener("change", () => {
    card.calculatorOperation = normalizeCalculatorOperation(operationSelect.value);
    syncCalculatorResult(card, resultValue);
    scheduleSave();
  });
  operationRow.append(operationLabel, operationSelect);

  const inputList = document.createElement("div");
  inputList.className = "calculator-input-list";

  const resultBlock = document.createElement("div");
  resultBlock.className = "calculator-result";

  const resultLabel = document.createElement("div");
  resultLabel.className = "calculator-label";
  resultLabel.textContent = t("calculatorResult");

  const resultValue = document.createElement("div");
  resultValue.className = "calculator-result-value";

  const canRemoveInputs = card.calculatorInputs.length > 2;
  card.calculatorInputs.forEach((input, index) => {
    const row = document.createElement("div");
    row.className = "calculator-input-row";

    const field = document.createElement("input");
    field.type = "text";
    field.inputMode = "decimal";
    field.className = "card-field";
    field.placeholder = `${t("calculatorInputPlaceholder")} ${index + 1}`;
    field.value = input.value || "";
    field.readOnly = state.locked;
    field.addEventListener("input", () => {
      input.value = field.value;
      syncCalculatorResult(card, resultValue);
      scheduleSave();
    });

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.className = "calculator-input-remove";
    removeButton.textContent = "x";
    removeButton.title = t("removeCalculatorInput");
    removeButton.disabled = state.locked || !canRemoveInputs;
    removeButton.addEventListener("click", () => {
      if (state.locked || card.calculatorInputs.length <= 2) {
        return;
      }
      card.calculatorInputs = card.calculatorInputs.filter((item) => item.id !== input.id);
      render();
      scheduleSave();
    });

    row.append(field, removeButton);
    inputList.appendChild(row);
  });

  resultBlock.append(resultLabel, resultValue);

  const addButton = document.createElement("button");
  addButton.type = "button";
  addButton.className = "calculator-add";
  addButton.textContent = t("addCalculatorInput");
  addButton.disabled = state.locked;
  addButton.addEventListener("click", () => {
    if (state.locked) {
      return;
    }
    card.calculatorInputs = [...card.calculatorInputs, createCalculatorInput()];
    growCardHeight(card, 44);
    render();
    scheduleSave();
  });

  syncCalculatorResult(card, resultValue);
  wrapper.append(operationRow, inputList, resultBlock, addButton);
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

function handleTimerTick() {
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
        if (maybeTriggerTimerNotification(card, now)) {
          changed = true;
        }
      }
    }

    if (card.kind === "reminder") {
      changed = maybeTriggerReminderNotification(card, now) || changed;
    }
  });

  refreshVisibleTimerCards(now);
  refreshVisibleReminderCards(now);
  if (changed) {
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
  const messageInput = document.createElement("textarea");
  messageInput.className = "card-field schedule-note-input reminder-message-input";
  messageInput.rows = 2;
  messageInput.value = card.text || "";
  messageInput.placeholder = t("reminderMessagePlaceholder");
  messageInput.readOnly = state.locked;
  messageInput.spellcheck = true;
  const resizeMessage = autoGrowTextarea(messageInput, 56);
  messageInput.addEventListener("input", () => {
    card.text = messageInput.value;
    resizeMessage();
    scheduleSave();
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
  if (window.desktopBoard?.openFilePath && card.path) {
    await window.desktopBoard.openFilePath(card.path);
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
  if (window.desktopBoard?.revealFilePath && card.path) {
    await window.desktopBoard.revealFilePath(card.path);
  }
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
  openButton.disabled = !card.path && !card.src;
  openButton.addEventListener("click", () => openStoredFile(card));

  const revealButton = document.createElement("button");
  revealButton.type = "button";
  revealButton.textContent = t("revealFile");
  revealButton.disabled = !card.path;
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

  const useWebview = Boolean(window.desktopBoard);
  const browser = document.createElement(useWebview ? "webview" : "iframe");
  browser.className = "web-view";

  if (useWebview) {
    browser.setAttribute("partition", "persist:desktop-board-web");
    browser.setAttribute("webpreferences", "contextIsolation=yes,nodeIntegration=no");
    browser.setAttribute("allowpopups", "");
    browser.addEventListener("dom-ready", () => syncWebCardElement(browser.closest(".card")));
    browser.addEventListener("did-finish-load", () => syncWebCardElement(browser.closest(".card")));
  } else {
    browser.loading = "lazy";
    browser.referrerPolicy = "no-referrer-when-downgrade";
    browser.allow = "autoplay; encrypted-media; fullscreen; picture-in-picture";
  }

  browser.src = url;

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

function setupWebCardSizeSync(cardElement) {
  const body = cardElement.querySelector(".card-body");
  if (!body) {
    return;
  }

  webResizeObserver?.observe(body);
  requestAnimationFrame(() => syncWebCardElement(cardElement));
}

function syncWebCardElement(cardElement) {
  if (!cardElement || cardElement.dataset.kind !== "web") {
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
  }
}

function syncAllWebCardElements() {
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

  const text = document.createElement("textarea");
  text.className = "task-text-input";
  text.rows = 1;
  text.value = task.text;
  text.readOnly = state.locked;
  text.spellcheck = true;
  const resizeText = autoGrowTextarea(text, 28);
  text.addEventListener("input", () => {
    task.text = text.value;
    resizeText();
    scheduleSave();
  });
  text.addEventListener("blur", () => {
    task.text = text.value;
    if (!String(text.value || "").trim()) {
      window.setTimeout(() => {
        if (!String(task.text || "").trim()) {
          removeChecklistRow(card, task.id, options);
        }
      }, 0);
    }
  });

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
    card.tasks.push({ id: createId("task"), text: t("newTask"), done: false });
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

  const noteInput = document.createElement("textarea");
  noteInput.className = "card-field schedule-note-input";
  noteInput.rows = 1;
  noteInput.value = entry.note || "";
  noteInput.placeholder = t("scheduleCommentPlaceholder");
  noteInput.readOnly = state.locked;
  noteInput.spellcheck = true;
  const resizeNote = autoGrowTextarea(noteInput, 40);
  noteInput.addEventListener("input", () => {
    entry.note = noteInput.value;
    resizeNote();
    syncScheduleLegacyText(card);
    scheduleSave();
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
    .filter((card) => !excludedIds.has(card.id))
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

function renderConnectionMarker(defs, connection, capType) {
  const marker = createSvgElement("marker");
  marker.setAttribute("id", getConnectionMarkerId(connection, capType));
  marker.setAttribute("markerUnits", "userSpaceOnUse");
  marker.setAttribute("orient", "auto-start-reverse");
  if (capType === "dot") {
    marker.setAttribute("viewBox", "0 0 12 12");
    marker.setAttribute("refX", "6");
    marker.setAttribute("refY", "6");
    marker.setAttribute("markerWidth", "8");
    marker.setAttribute("markerHeight", "8");
    const dot = createSvgElement("circle");
    dot.setAttribute("cx", "6");
    dot.setAttribute("cy", "6");
    dot.setAttribute("r", "3.5");
    dot.setAttribute("fill", connection.color);
    dot.setAttribute("stroke", "var(--connection-outline)");
    dot.setAttribute("stroke-width", "1.4");
    marker.appendChild(dot);
  } else {
    marker.setAttribute("viewBox", "0 0 10 10");
    marker.setAttribute("refX", "8.4");
    marker.setAttribute("refY", "5");
    marker.setAttribute("markerWidth", "10");
    marker.setAttribute("markerHeight", "10");
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
  const outlinePath = createSvgElement("path");
  outlinePath.classList.add("connection-outline");
  outlinePath.setAttribute("d", pathData);
  outlinePath.setAttribute("stroke-width", isSelected ? "7" : "6");

  layer.appendChild(outlinePath);

  const visiblePath = createSvgElement("path");
  visiblePath.classList.add("connection-path");
  visiblePath.classList.toggle("is-selected", isSelected);
  if (draft) {
    visiblePath.classList.add("connection-draft");
  }
  visiblePath.setAttribute("d", pathData);
  visiblePath.setAttribute("stroke", connection.color);
  visiblePath.setAttribute("stroke-width", draft ? "2" : (isSelected ? "3.5" : "3"));

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
  (routeGeometry?.autoPoints || []).forEach((point) => {
    const handle = createSvgElement("circle");
    handle.classList.add("connection-waypoint", "connection-waypoint-auto");
    handle.setAttribute("cx", point.x);
    handle.setAttribute("cy", point.y);
    handle.setAttribute("r", "4");
    layer.appendChild(handle);
  });

  (routeGeometry?.manualPoints || []).forEach((point) => {
    const handle = createSvgElement("circle");
    handle.classList.add("connection-waypoint");
    handle.dataset.connectionId = connection.id;
    handle.dataset.pointIndex = String(point.pointIndex);
    handle.setAttribute("cx", point.x);
    handle.setAttribute("cy", point.y);
    handle.setAttribute("r", "6");
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
  if (!connectionMode || state.locked || event.button !== 0) {
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
  return Boolean(target.closest("input, textarea, button, select, audio, video, iframe, webview, .resize-handle, .context-menu, .card-header-toggle"));
}

function isTextInputTarget(target) {
  return Boolean(target?.closest?.("input, textarea, select"));
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
  if (connectionMode || event.button !== 0 || state.locked || isEditableTarget(event.target)) {
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
  if (connectionMode || event.button !== 0 || state.locked || event.target.closest("button") || event.target.matches("input, textarea")) {
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

  const cardElement = getCardElement(card);
  cardElement.setPointerCapture(event.pointerId);
  const startWorld = screenToWorld(event.clientX, event.clientY);
  const selectedCards = getSelectedCards();
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
}

function startPan(event) {
  if (event.target.closest(".toolbar") || event.target.closest(".modal")) {
    return;
  }

  if (event.button !== 1) {
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
      }
    });
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

  activeAction = null;
  if (shouldSave) {
    scheduleSave();
  }
}

function zoomAt(event) {
  if (event.target.closest(".toolbar") || event.target.closest(".modal")) {
    return;
  }

  event.preventDefault();

  const oldZoom = state.viewport.zoom;
  const direction = event.deltaY > 0 ? -1 : 1;
  const factor = direction > 0 ? 1.1 : 0.9;
  const nextZoom = clamp(oldZoom * factor, minZoom, maxZoom);
  const worldPoint = screenToWorld(event.clientX, event.clientY);

  state.viewport.zoom = nextZoom;
  state.viewport.x = event.clientX - worldPoint.x * nextZoom;
  state.viewport.y = event.clientY - worldPoint.y * nextZoom;

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
    customBodyColor: false
  };

  if (kind === "code") {
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
      calculatorOperation: "add",
      calculatorInputs: normalizeCalculatorInputs([], 2)
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
      text: ""
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
    customBodyColor: false
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

  const url = await requestWebUrl("", "add");
  if (!url) {
    return;
  }

  const definition = getCardTypeDefinition("web");
  const width = definition.defaultSize?.width || 560;
  const height = definition.defaultSize?.height || 360;
  const position = getNewCardPosition(width, height, worldPoint);
  const colors = getDefaultCardColors("web");

  state.cards.push({
    id: createId("web"),
    kind: "web",
    title: getUrlTitle(url),
    x: position.x,
    y: position.y,
    width,
    height,
    headerColor: colors.header,
    bodyColor: colors.body,
    customHeaderColor: false,
    customBodyColor: false,
    url,
    src: url
  });

  render();
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
}

function positionContextMenu(clientX, clientY) {
  contextMenu.hidden = false;
  const margin = 8;
  const rect = contextMenu.getBoundingClientRect();
  const left = Math.min(clientX, window.innerWidth - rect.width - margin);
  const top = Math.min(clientY, window.innerHeight - rect.height - margin);
  contextMenu.style.left = `${Math.max(margin, left)}px`;
  contextMenu.style.top = `${Math.max(margin, top)}px`;
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
  const title = getCardElement(card)?.querySelector(".card-title");
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

  if (copy.kind === "timer") {
    copy.timerRemainingMs = getTimerRemainingMs(card);
    copy.timerEndsAt = null;
  }

  if (copy.kind === "progress") {
    copy.progressValue = getProgressStats(copy).percent;
  }

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
    customBodyColor: false
  };

  state.cards.push(group);
  selectedIds = new Set([group.id]);
  render();
  scheduleSave();
  closeContextMenu();
}

async function editWebUrl(card) {
  ensureEditMode();

  const oldTitle = getUrlTitle(card.url || card.src || "");
  const url = await requestWebUrl(card.url || card.src || "", "save");
  if (!url) {
    return;
  }

  card.url = url;
  card.src = url;
  if (!card.title || card.title === oldTitle) {
    card.title = getUrlTitle(url);
  }

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
    createContextButton(t("rename"), () => focusCardTitle(card)),
    createContextButton(t("duplicate"), () => duplicateCard(card)),
    createContextButton(t("connectFromHere"), () => startConnectionFromAnchor({ type: "card", cardId: card.id })),
    createContextButton(t("editLinks"), () => openMetaEditor(card))
  ];

  if (card.kind === "web") {
    mainActions.push(createContextButton(t("editUrl"), () => editWebUrl(card)));
    mainActions.push(createContextButton(
      t(card.webInteractive ? "disableWebInteraction" : "enableWebInteraction"),
      () => setWebInteraction(card, !card.webInteractive)
    ));
  }

  if (card.kind === "file") {
    mainActions.push(createContextButton(t("replaceFile"), () => replaceStoredFile(card)));
    mainActions.push(createContextButton(t("openFile"), () => openStoredFile(card)));
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
    ]),
    createContextTagEditor(card)
  );
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
  applySettings();
  refreshAppConfigUi({ force: true });
  settingsModal.hidden = false;
  void loadAppRuntimeConfig();
  void loadAppUpdateState();
  void loadBoardsList();
}

function closeSettings() {
  settingsModal.hidden = true;
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
    connectionColor: connectionColorInput.value || getDefaultConnectionColor(backgroundColorInput.value || defaultSettings.backgroundColor),
    snapToGrid: snapToGridInput.checked,
    quickCreateKinds: getSelectedQuickCreateKinds(),
    colors: nextColors,
    toggleHotkey: toggleHotkeyInput.value.trim() || defaultSettings.toggleHotkey,
    lockHotkey: lockHotkeyInput.value.trim() || defaultSettings.lockHotkey
  });

  applyDefaultColorsToInheritedCards();
  applyDefaultColorsToInheritedConnections();
  applySettings();
  applySystemTheme(currentSystemTheme);
  render();

  let statusMessage = t("settingsSaved");

  if (window.desktopBoard?.updateAppConfig) {
    try {
      const requestVersion = ++appRuntimeConfigRequestVersion;
      const nextAppConfig = await window.desktopBoard.updateAppConfig({
        diagnosticsEnabled: diagnosticsEnabledInput.checked,
        autoStartEnabled: autoStartWithWindowsInput?.checked === true,
        autoManageAssetsOnLaunch: autoManageAssetsOnLaunchInput?.checked === true
      });
      if (requestVersion === appRuntimeConfigRequestVersion) {
        appRuntimeConfig = nextAppConfig;
        refreshAppConfigUi({ force: true });
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
  scheduleSave();
}

async function handleDroppedFiles(event) {
  event.preventDefault();
  ensureEditMode();

  const files = Array.from(event.dataTransfer.files || []);
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
});

window.addEventListener("resize", closeContextMenu);

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
analyzeAssetsButton?.addEventListener("click", analyzeAssetsFromSettings);
cleanupAssetsButton?.addEventListener("click", cleanupAssetsFromSettings);
checkUpdatesButton?.addEventListener("click", checkForUpdatesFromSettings);
installUpdateButton?.addEventListener("click", installDownloadedUpdateFromSettings);
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

if (!timerTickHandle) {
  timerTickHandle = window.setInterval(handleTimerTick, timerTickIntervalMs);
}

if (window.desktopBoard) {
  window.desktopBoard.onToggleLock(() => setLocked(!state.locked));
  window.desktopBoard.onSystemThemeUpdate?.((theme) => applySystemTheme(theme));
  window.desktopBoard.onUpdateState?.((nextState) => {
    appUpdateState = normalizeAppUpdateState(nextState);
    refreshAppUpdateUi();
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
}

window.addEventListener("error", (event) => {
  reportError("window.error", event.error || new Error(event.message || "Window error"));
});

window.addEventListener("unhandledrejection", (event) => {
  const reason = event.reason instanceof Error ? event.reason : new Error(String(event.reason || "Unhandled rejection"));
  reportError("window.unhandledrejection", reason);
});

loadSystemTheme().then(loadAppRuntimeConfig).then(loadAppUpdateState).then(loadState).then(() => {
  applySystemTheme(currentSystemTheme);
  render();
  saveState();
  void maybeRunStartupAssetMaintenance();
  void loadBoardsList();
}).catch((error) => {
  reportError("app.init", error);
  state = clone(defaultState);
  resetHistoryTracking(state);
  applySystemTheme(currentSystemTheme);
  render();
});
