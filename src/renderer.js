const board = document.getElementById("board");
const workspace = document.getElementById("workspace");
const urlParams = new URLSearchParams(window.location.search);
const isOverlayWindow = urlParams.get("role") === "overlay";
const themeValidation = window.DesktopBoardThemeValidation || {};
const brandMark = document.querySelector(".brand-mark");
const toolbarBoardSelect = document.getElementById("toolbarBoardSelect");
const toolbarWindowModeSelect = document.getElementById("toolbarWindowModeSelect");
const toolbarTemplateGroup = document.getElementById("toolbarTemplateGroup");
const modeLabel = document.getElementById("modeLabel");
const lockButton = document.getElementById("lockButton");
const hideButton = document.getElementById("hideButton");
const addNoteButton = document.getElementById("addNoteButton");
const addCommentButton = document.getElementById("addCommentButton");
const addChatButton = document.getElementById("addChatButton");
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
const interactiveBackgroundQualityInput = document.getElementById("interactiveBackgroundQualityInput");
const noteHeaderColorInput = document.getElementById("noteHeaderColorInput");
const noteBodyColorInput = document.getElementById("noteBodyColorInput");
const commentHeaderColorInput = document.getElementById("commentHeaderColorInput");
const commentBodyColorInput = document.getElementById("commentBodyColorInput");
const chatHeaderColorInput = document.getElementById("chatHeaderColorInput");
const chatBodyColorInput = document.getElementById("chatBodyColorInput");
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
const clockHeaderColorInput = document.getElementById("clockHeaderColorInput");
const clockBodyColorInput = document.getElementById("clockBodyColorInput");
const weatherHeaderColorInput = document.getElementById("weatherHeaderColorInput");
const weatherBodyColorInput = document.getElementById("weatherBodyColorInput");
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
  chat: { header: chatHeaderColorInput, body: chatBodyColorInput },
  code: { header: codeHeaderColorInput, body: codeBodyColorInput },
  table: { header: tableHeaderColorInput, body: tableBodyColorInput },
  calculator: { header: calculatorHeaderColorInput, body: calculatorBodyColorInput },
  tasks: { header: tasksHeaderColorInput, body: tasksBodyColorInput },
  schedule: { header: scheduleHeaderColorInput, body: scheduleBodyColorInput },
  bookmark: { header: bookmarkHeaderColorInput, body: bookmarkBodyColorInput },
  progress: { header: progressHeaderColorInput, body: progressBodyColorInput },
  timer: { header: timerHeaderColorInput, body: timerBodyColorInput },
  reminder: { header: reminderHeaderColorInput, body: reminderBodyColorInput },
  clock: { header: clockHeaderColorInput, body: clockBodyColorInput },
  weather: { header: weatherHeaderColorInput, body: weatherBodyColorInput },
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
const cardCatalogSettingsLabel = document.getElementById("cardCatalogSettingsLabel");
const cardCatalogSettingsHelp = document.getElementById("cardCatalogSettingsHelp");
const openCardCatalogButton = document.getElementById("openCardCatalogButton");
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
const openThemeCatalogButton = document.getElementById("openThemeCatalogButton");
const openThemeEditorButton = document.getElementById("openThemeEditorButton");
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
const themeCatalogModal = document.getElementById("themeCatalogModal");
const themeCatalogTitle = document.getElementById("themeCatalogTitle");
const closeThemeCatalogButton = document.getElementById("closeThemeCatalogButton");
const themeCatalogCloseFooterButton = document.getElementById("themeCatalogCloseFooterButton");
const themeCatalogHelp = document.getElementById("themeCatalogHelp");
const themeCatalogGrid = document.getElementById("themeCatalogGrid");
const themeCatalogStatus = document.getElementById("themeCatalogStatus");
const themeCatalogImportFileButton = document.getElementById("themeCatalogImportFileButton");
const themeCatalogImportPackageButton = document.getElementById("themeCatalogImportPackageButton");
const themeCatalogUploadButton = document.getElementById("themeCatalogUploadButton");
const themeCatalogBrowseTab = document.getElementById("themeCatalogBrowseTab");
const themeCatalogInstalledTab = document.getElementById("themeCatalogInstalledTab");
const cardCatalogModal = document.getElementById("cardCatalogModal");
const cardCatalogTitle = document.getElementById("cardCatalogTitle");
const closeCardCatalogButton = document.getElementById("closeCardCatalogButton");
const cardCatalogCloseFooterButton = document.getElementById("cardCatalogCloseFooterButton");
const cardCatalogHelp = document.getElementById("cardCatalogHelp");
const cardCatalogGrid = document.getElementById("cardCatalogGrid");
const cardCatalogStatus = document.getElementById("cardCatalogStatus");
const cardCatalogImportButton = document.getElementById("cardCatalogImportButton");
const cardCatalogUploadButton = document.getElementById("cardCatalogUploadButton");
const cardCatalogBrowseTab = document.getElementById("cardCatalogBrowseTab");
const cardCatalogInstalledTab = document.getElementById("cardCatalogInstalledTab");
const themeEditorModal = document.getElementById("themeEditorModal");
const themeEditorTitle = document.getElementById("themeEditorTitle");
const closeThemeEditorButton = document.getElementById("closeThemeEditorButton");
const themeEditorCloseFooterButton = document.getElementById("themeEditorCloseFooterButton");
const themeEditorLoadCurrentButton = document.getElementById("themeEditorLoadCurrentButton");
const themeEditorLoadDefaultButton = document.getElementById("themeEditorLoadDefaultButton");
const themeEditorApplyButton = document.getElementById("themeEditorApplyButton");
const themeEditorExportButton = document.getElementById("themeEditorExportButton");
const themeEditorStatus = document.getElementById("themeEditorStatus");
const themeEditorNameInput = document.getElementById("themeEditorNameInput");
const themeCardRadiusInput = document.getElementById("themeCardRadiusInput");
const themePanelRadiusInput = document.getElementById("themePanelRadiusInput");
const themeButtonRadiusInput = document.getElementById("themeButtonRadiusInput");
const themeCardBorderWidthInput = document.getElementById("themeCardBorderWidthInput");
const themeCardHeaderHeightInput = document.getElementById("themeCardHeaderHeightInput");
const themeGroupHeaderHeightInput = document.getElementById("themeGroupHeaderHeightInput");
const themeIconScaleInput = document.getElementById("themeIconScaleInput");
const themeShadowInput = document.getElementById("themeShadowInput");
const themeHeaderAssetInput = document.getElementById("themeHeaderAssetInput");
const themeBodyAssetInput = document.getElementById("themeBodyAssetInput");
const themePickHeaderAssetButton = document.getElementById("themePickHeaderAssetButton");
const themePickBodyAssetButton = document.getElementById("themePickBodyAssetButton");
const themeClearHeaderAssetButton = document.getElementById("themeClearHeaderAssetButton");
const themeClearBodyAssetButton = document.getElementById("themeClearBodyAssetButton");
const themeAssetsJsonInput = document.getElementById("themeAssetsJsonInput");
const themeStrokeWidthInput = document.getElementById("themeStrokeWidthInput");
const themeSelectedStrokeWidthInput = document.getElementById("themeSelectedStrokeWidthInput");
const themeDraftStrokeWidthInput = document.getElementById("themeDraftStrokeWidthInput");
const themeOutlineWidthInput = document.getElementById("themeOutlineWidthInput");
const themeWaypointRadiusInput = document.getElementById("themeWaypointRadiusInput");
const themeMarkerScaleInput = document.getElementById("themeMarkerScaleInput");
const themeLineStyleInput = document.getElementById("themeLineStyleInput");
const themeInteractiveEnabledInput = document.getElementById("themeInteractiveEnabledInput");
const themeInteractiveFpsInput = document.getElementById("themeInteractiveFpsInput");
const themeBackgroundTypeInput = document.getElementById("themeBackgroundTypeInput");
const themeBackgroundColorInput = document.getElementById("themeBackgroundColorInput");
const themeBackgroundOpacityInput = document.getElementById("themeBackgroundOpacityInput");
const themeParticleColorInput = document.getElementById("themeParticleColorInput");
const themeParticleCountInput = document.getElementById("themeParticleCountInput");
const themeActorPresetInput = document.getElementById("themeActorPresetInput");
const themeAddActorPresetButton = document.getElementById("themeAddActorPresetButton");
const themeActorEnhancerInput = document.getElementById("themeActorEnhancerInput");
const themeApplyActorEnhancerButton = document.getElementById("themeApplyActorEnhancerButton");
const themeEffectPresetInput = document.getElementById("themeEffectPresetInput");
const themeApplyEffectPresetButton = document.getElementById("themeApplyEffectPresetButton");
const themeFormatJsonButton = document.getElementById("themeFormatJsonButton");
const themeValidateJsonButton = document.getElementById("themeValidateJsonButton");
const themeBuilderSummary = document.getElementById("themeBuilderSummary");
const themeActorsJsonInput = document.getElementById("themeActorsJsonInput");
const themeReactionsJsonInput = document.getElementById("themeReactionsJsonInput");
const themeCardEffectsJsonInput = document.getElementById("themeCardEffectsJsonInput");
const themePreviewCard = document.getElementById("themePreviewCard");
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
const chatMessageLimit = 300;
const sharedGroupOperationLimit = 1000;
const stateSchemaVersion = 10;
const defaultBoardId = "main";
const defaultBoardName = navigator.language?.toLowerCase().startsWith("ru") ? "Основная доска" : "Main board";
const subscriptionPlanLimits = {
  free: {
    labelKey: "subscriptionPlanFree",
    sharedGroupMaxWidth: 1800,
    sharedGroupMaxHeight: 1100
  },
  plus: {
    labelKey: "subscriptionPlanPlus",
    sharedGroupMaxWidth: 3600,
    sharedGroupMaxHeight: 2200
  },
  team: {
    labelKey: "subscriptionPlanTeam",
    sharedGroupMaxWidth: 7200,
    sharedGroupMaxHeight: 4400
  }
};
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
const interactiveBackgroundQualityProfiles = {
  off: { fps: 0, maxActors: 0, particleScale: 0 },
  low: { fps: 20, maxActors: 16, particleScale: 0.45 },
  normal: { fps: 30, maxActors: 48, particleScale: 1 }
};
const interactiveBackgroundMaxDpr = 2;
const interactiveBackgroundMaxCardEffectDelayMs = 4000;
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
    kind: "chat",
    labelKey: "chat",
    createLabelKey: "addChat",
    colorKind: "chat",
    quickCreateGroup: "text",
    createMode: "card",
    defaultSize: { width: 360, height: 320 },
    toolbarButton: addChatButton,
    icon: '<svg viewBox="0 0 24 24"><path d="M5 6h14v9H8l-3 3z"/><path d="M9 10h6M9 13h4"/><path d="M17 16l2 2v-5"/></svg>'
  },
  {
    kind: "code",
    labelKey: "code",
    createLabelKey: "addCode",
    colorKind: "code",
    quickCreateGroup: "text",
    createMode: "card",
    packageOnly: true,
    defaultSize: { width: 420, height: 280 },
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
    kind: "clock",
    labelKey: "clock",
    createLabelKey: "addClock",
    colorKind: "clock",
    quickCreateGroup: "text",
    createMode: "card",
    packageOnly: true,
    defaultSize: { width: 320, height: 220 },
    icon: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/><path d="M7 3l-3 3M17 3l3 3"/></svg>'
  },
  {
    kind: "weather",
    labelKey: "weather",
    createLabelKey: "addWeather",
    colorKind: "weather",
    quickCreateGroup: "text",
    createMode: "card",
    packageOnly: true,
    defaultSize: { width: 360, height: 260 },
    icon: '<svg viewBox="0 0 24 24"><path d="M8 17h9a4 4 0 0 0 .6-7.9A6 6 0 0 0 6.2 9.7 3.7 3.7 0 0 0 8 17z"/><path d="M8 20h8"/></svg>'
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
const defaultQuickCreateKinds = getStaticQuickCreateDefinitions().map((definition) => definition.kind);
const defaultToolbarCreateKinds = cardTypeRegistry
  .filter((definition) => Boolean(definition.toolbarButton))
  .map((definition) => definition.kind);
const cardTemplateCreatePrefix = "template:";
const developerCardPackId = "developer-pack";
const codeSnippetCardTemplateId = "code-snippet";
const legacyCodeCardKind = "code";

const bundledCardCatalog = [
  {
    id: "planning-pack",
    nameKey: "cardCatalogPlanningPackName",
    descriptionKey: "cardCatalogPlanningPackDescription",
    author: "Desktop Board",
    rating: 4.8,
    downloads: 0,
    tags: ["cardCatalogTagPlanning", "cardCatalogTagBuiltIn"],
    templates: [
      {
        id: "daily-plan",
        kind: "tasks",
        nameKey: "cardTemplateDailyPlanName",
        descriptionKey: "cardTemplateDailyPlanDescription",
        titleKey: "cardTemplateDailyPlanTitle",
        width: 360,
        height: 300,
        data: {
          tasks: [
            { textKey: "cardTemplateDailyPlanTask1", done: false },
            { textKey: "cardTemplateDailyPlanTask2", done: false },
            { textKey: "cardTemplateDailyPlanTask3", done: false }
          ]
        }
      },
      {
        id: "meeting-notes",
        kind: "note",
        nameKey: "cardTemplateMeetingNotesName",
        descriptionKey: "cardTemplateMeetingNotesDescription",
        titleKey: "cardTemplateMeetingNotesTitle",
        width: 360,
        height: 280,
        data: {
          textKey: "cardTemplateMeetingNotesText"
        }
      },
      {
        id: "weekly-schedule",
        kind: "schedule",
        nameKey: "cardTemplateWeeklyScheduleName",
        descriptionKey: "cardTemplateWeeklyScheduleDescription",
        titleKey: "cardTemplateWeeklyScheduleTitle",
        width: 380,
        height: 300,
        data: {
          scheduleEntries: [
            { time: "09:00", noteKey: "cardTemplateWeeklyScheduleEntry1" },
            { time: "13:00", noteKey: "cardTemplateWeeklyScheduleEntry2" },
            { time: "17:00", noteKey: "cardTemplateWeeklyScheduleEntry3" }
          ]
        }
      }
    ]
  },
  {
    id: developerCardPackId,
    nameKey: "cardCatalogDeveloperPackName",
    descriptionKey: "cardCatalogDeveloperPackDescription",
    author: "Desktop Board",
    rating: 4.7,
    downloads: 0,
    tags: ["cardCatalogTagDev", "cardCatalogTagBuiltIn"],
    templates: [
      {
        id: codeSnippetCardTemplateId,
        kind: "code",
        nameKey: "cardTemplateCodeSnippetName",
        descriptionKey: "cardTemplateCodeSnippetDescription",
        titleKey: "cardTemplateCodeSnippetTitle",
        width: 420,
        height: 280,
        data: {
          codeLanguage: "",
          text: ""
        }
      },
      {
        id: "bug-report",
        kind: "note",
        nameKey: "cardTemplateBugReportName",
        descriptionKey: "cardTemplateBugReportDescription",
        titleKey: "cardTemplateBugReportTitle",
        width: 380,
        height: 300,
        data: {
          textKey: "cardTemplateBugReportText",
          tags: ["bug", "qa"]
        }
      },
      {
        id: "api-snippet",
        kind: "code",
        nameKey: "cardTemplateApiSnippetName",
        descriptionKey: "cardTemplateApiSnippetDescription",
        titleKey: "cardTemplateApiSnippetTitle",
        width: 440,
        height: 300,
        data: {
          codeLanguage: "js",
          text: "async function request(url) {\n  const response = await fetch(url);\n  return response.json();\n}"
        }
      },
      {
        id: "test-matrix",
        kind: "table",
        nameKey: "cardTemplateTestMatrixName",
        descriptionKey: "cardTemplateTestMatrixDescription",
        titleKey: "cardTemplateTestMatrixTitle",
        width: 460,
        height: 300,
        data: {
          tableColumns: [
            { titleKey: "cardTemplateTestMatrixColumn1" },
            { titleKey: "cardTemplateTestMatrixColumn2" },
            { titleKey: "cardTemplateTestMatrixColumn3" }
          ],
          tableRows: [
            { cellsKeys: ["cardTemplateTestMatrixRow1A", "cardTemplateTestMatrixRow1B", "cardTemplateTestMatrixRow1C"] },
            { cellsKeys: ["cardTemplateTestMatrixRow2A", "cardTemplateTestMatrixRow2B", "cardTemplateTestMatrixRow2C"] }
          ]
        }
      }
    ]
  },
  {
    id: "research-pack",
    nameKey: "cardCatalogResearchPackName",
    descriptionKey: "cardCatalogResearchPackDescription",
    author: "Desktop Board",
    rating: 4.6,
    downloads: 0,
    tags: ["cardCatalogTagResearch", "cardCatalogTagBuiltIn"],
    templates: [
      {
        id: "source-list",
        kind: "bookmark",
        nameKey: "cardTemplateSourceListName",
        descriptionKey: "cardTemplateSourceListDescription",
        titleKey: "cardTemplateSourceListTitle",
        width: 360,
        height: 280,
        data: {
          links: [
            { titleKey: "cardTemplateSourceListLink1", url: "https://example.com" }
          ]
        }
      },
      {
        id: "experiment-progress",
        kind: "progress",
        nameKey: "cardTemplateExperimentProgressName",
        descriptionKey: "cardTemplateExperimentProgressDescription",
        titleKey: "cardTemplateExperimentProgressTitle",
        width: 360,
        height: 300,
        data: {
          tasks: [
            { textKey: "cardTemplateExperimentProgressTask1", done: false },
            { textKey: "cardTemplateExperimentProgressTask2", done: false },
            { textKey: "cardTemplateExperimentProgressTask3", done: false }
          ]
        }
      },
      {
        id: "reminder-review",
        kind: "reminder",
        nameKey: "cardTemplateReminderReviewName",
        descriptionKey: "cardTemplateReminderReviewDescription",
        titleKey: "cardTemplateReminderReviewTitle",
        width: 360,
        height: 280,
        data: {
          textKey: "cardTemplateReminderReviewText"
        }
      }
    ]
  },
  {
    id: "desktop-widgets-pack",
    nameKey: "cardCatalogWidgetsPackName",
    descriptionKey: "cardCatalogWidgetsPackDescription",
    author: "Desktop Board",
    rating: 4.6,
    downloads: 0,
    tags: ["cardCatalogTagWidgets", "cardCatalogTagBuiltIn"],
    templates: [
      {
        id: "clock-date",
        kind: "clock",
        nameKey: "cardTemplateClockDateName",
        descriptionKey: "cardTemplateClockDateDescription",
        titleKey: "cardTemplateClockDateTitle",
        width: 320,
        height: 220,
        data: {
          clockTimeZone: "system",
          clockShowSeconds: true
        }
      },
      {
        id: "weather-location",
        kind: "weather",
        nameKey: "cardTemplateWeatherName",
        descriptionKey: "cardTemplateWeatherDescription",
        titleKey: "cardTemplateWeatherTitle",
        width: 360,
        height: 260,
        data: {
          weatherLocation: "",
          weatherUnits: "metric"
        }
      }
    ]
  }
];

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
      chat: { header: "#3f6f8f", body: "#e6f1f6" },
      code: { header: "#4c6ef5", body: "#e9efff" },
      table: { header: "#5b7bd5", body: "#eef3ff" },
      calculator: { header: "#d66f45", body: "#fde8de" },
      tasks: { header: "#2f7d57", body: "#e7f3ec" },
      schedule: { header: "#3a8f9f", body: "#e6f6f8" },
      bookmark: { header: "#f2c94c", body: "#fff8d7" },
      progress: { header: "#2f7d57", body: "#e7f3ec" },
      timer: { header: "#3a8f9f", body: "#e6f6f8" },
      reminder: { header: "#d96b5f", body: "#fdebe7" },
      clock: { header: "#3a8f9f", body: "#e6f6f8" },
      weather: { header: "#4f85a6", body: "#e4f0f4" },
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
      chat: { header: "#466f86", body: "#dcecf2" },
      code: { header: "#6072d6", body: "#e5e9fb" },
      table: { header: "#536fb5", body: "#e7edf9" },
      calculator: { header: "#c56f4d", body: "#f7e2d7" },
      tasks: { header: "#31805f", body: "#dcefe6" },
      schedule: { header: "#428f9b", body: "#dff1f3" },
      bookmark: { header: "#d6b23c", body: "#f7efc9" },
      progress: { header: "#31805f", body: "#dcefe6" },
      timer: { header: "#428f9b", body: "#dff1f3" },
      reminder: { header: "#bd655b", body: "#f5dfdb" },
      clock: { header: "#428f9b", body: "#dff1f3" },
      weather: { header: "#536fb5", body: "#e7edf9" },
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
      chat: { header: "#4d7f9d", body: "#e2f0f6" },
      code: { header: "#3e70b8", body: "#e3edf8" },
      table: { header: "#4f85a6", body: "#e4f0f4" },
      calculator: { header: "#b9674c", body: "#f5e1d7" },
      tasks: { header: "#3f8b66", body: "#e2f1e8" },
      schedule: { header: "#2894a3", body: "#ddf3f5" },
      bookmark: { header: "#e2b94b", body: "#fff4ce" },
      progress: { header: "#3f8b66", body: "#e2f1e8" },
      timer: { header: "#2894a3", body: "#ddf3f5" },
      reminder: { header: "#c25c65", body: "#f7e0e3" },
      clock: { header: "#2894a3", body: "#ddf3f5" },
      weather: { header: "#4f85a6", body: "#e4f0f4" },
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
    connection: null,
    actors: {},
    backgrounds: {},
    cardHeaders: {},
    cardBodies: {}
  },
  interactiveBackground: {
    enabled: false,
    fps: 30,
    background: {
      type: "none"
    },
    actors: [],
    reactions: [],
    cardEffects: {
      create: {
        enabled: false,
        type: "none",
        delayMs: 0,
        durationMs: 600,
        color: "#7aa884",
        asset: "",
        animation: ""
      },
      delete: {
        enabled: false,
        type: "none",
        delayMs: 0,
        durationMs: 600,
        color: "#7aa884",
        asset: "",
        animation: ""
      }
    }
  }
};

const bundledThemeCatalog = [
  {
    id: "classic-board",
    nameKey: "themeCatalogClassicName",
    descriptionKey: "themeCatalogClassicDescription",
    colorSchemeId: "classic",
    rating: 4.8,
    downloads: 0,
    previewKind: "classic",
    tags: ["themeCatalogTagClean", "themeCatalogTagBuiltIn"],
    visualTheme: {
      name: "Classic Board",
      tokens: {
        shadow: "medium",
        cardRadius: 8,
        panelRadius: 8,
        buttonRadius: 6
      },
      connections: {
        lineStyle: "solid",
        outlineWidth: 6
      }
    }
  },
  {
    id: "graphite-focus",
    nameKey: "themeCatalogGraphiteName",
    descriptionKey: "themeCatalogGraphiteDescription",
    colorSchemeId: "graphite",
    rating: 4.9,
    downloads: 0,
    previewKind: "graphite",
    tags: ["themeCatalogTagDark", "themeCatalogTagFocus"],
    visualTheme: {
      name: "Graphite Focus",
      tokens: {
        shadow: "strong",
        cardRadius: 7,
        panelRadius: 8,
        buttonRadius: 6
      },
      connections: {
        strokeWidth: 3.5,
        selectedStrokeWidth: 4,
        outlineWidth: 7,
        lineStyle: "solid"
      }
    }
  },
  {
    id: "studio-soft",
    nameKey: "themeCatalogStudioName",
    descriptionKey: "themeCatalogStudioDescription",
    colorSchemeId: "studio",
    rating: 4.7,
    downloads: 0,
    previewKind: "studio",
    tags: ["themeCatalogTagSoft", "themeCatalogTagWork"],
    visualTheme: {
      name: "Studio Soft",
      tokens: {
        shadow: "light",
        cardRadius: 8,
        panelRadius: 8,
        buttonRadius: 6
      },
      connections: {
        strokeWidth: 2.5,
        selectedStrokeWidth: 3,
        outlineWidth: 5,
        lineStyle: "solid"
      }
    }
  },
  {
    id: "interactive-lab",
    nameKey: "themeCatalogInteractiveName",
    descriptionKey: "themeCatalogInteractiveDescription",
    colorSchemeId: "graphite",
    rating: 4.6,
    downloads: 0,
    previewKind: "interactive",
    tags: ["themeCatalogTagInteractive", "themeCatalogTagExperimental"],
    visualTheme: {
      name: "Interactive Lab",
      tokens: {
        shadow: "strong",
        cardRadius: 8,
        panelRadius: 8,
        buttonRadius: 6
      },
      interactiveBackground: {
        enabled: true,
        fps: 30,
        background: {
          type: "particles",
          color: "#1f2423",
          opacity: 0.55,
          particleColor: "#8fd8c6",
          particleCount: 70
        },
        actors: [],
        reactions: [],
        cardEffects: {
          create: {
            enabled: false,
            type: "none",
            delayMs: 0,
            durationMs: 600,
            color: "#7aa884",
            asset: "",
            animation: ""
          },
          delete: {
            enabled: false,
            type: "none",
            delayMs: 0,
            durationMs: 600,
            color: "#7aa884",
            asset: "",
            animation: ""
          }
        }
      }
    }
  }
];

const defaultSettings = {
  themeMode: "system",
  languageMode: "system",
  timeFormat: "24h",
  backgroundColor: "#f4f5f0",
  backgroundOpacity: 0,
  connectionColor: "#171916",
  interactiveBackgroundQuality: "off",
  richTextFontFamily: defaultRichTextFontFamily,
  richTextFontSize: defaultRichTextFontSize,
  visualTheme: clone(defaultVisualTheme),
  activeVisualThemeId: "",
  installedThemes: [],
  snapToGrid: true,
  historyEnabled: true,
  quickCreateKinds: [...defaultQuickCreateKinds],
  toolbarCreateKinds: [...defaultToolbarCreateKinds],
  cardPacks: [],
  colorSchemes: [],
  colors: {
    note: { header: "#f2c94c", body: "#fff8d7" },
    comment: { header: "#8a6f2a", body: "#fff1c2" },
    chat: { header: "#3f6f8f", body: "#e6f1f6" },
    code: { header: "#4c6ef5", body: "#e9efff" },
    table: { header: "#5b7bd5", body: "#eef3ff" },
    calculator: { header: "#d66f45", body: "#fde8de" },
    tasks: { header: "#2f7d57", body: "#e7f3ec" },
    schedule: { header: "#3a8f9f", body: "#e6f6f8" },
    bookmark: { header: "#f2c94c", body: "#fff8d7" },
    progress: { header: "#2f7d57", body: "#e7f3ec" },
    timer: { header: "#3a8f9f", body: "#e6f6f8" },
    reminder: { header: "#d96b5f", body: "#fdebe7" },
    clock: { header: "#3a8f9f", body: "#e6f6f8" },
    weather: { header: "#4f85a6", body: "#e4f0f4" },
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
  account: {
    subscriptionPlan: "free"
  },
  audit: {
    localActor: createDefaultAuditActor()
  },
  groupHistory: [],
  sharedGroupOperations: [],
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
let themeCatalogActiveTab = "browse";
let cardCatalogActiveTab = "browse";
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
const weatherFetchRequests = new Map();
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
let themeEditorWorkingTheme = null;
const interactiveBackgroundState = {
  baseCanvas: null,
  overlayCanvas: null,
  baseContext: null,
  overlayContext: null,
  raf: 0,
  lastFrameAt: 0,
  lastConfigKey: "",
  actors: [],
  particles: [],
  cardEffects: [],
  reactionCooldowns: new Map(),
  images: new Map(),
  geometry: {
    key: "",
    version: 0,
    cards: [],
    cardRoutes: [],
    connectionRoutes: []
  },
  mouse: {
    worldX: 0,
    worldY: 0,
    active: false,
    lastMoveAt: 0
  }
};
const pendingCardRemovalIds = new Set();
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
      "#interactiveBackgroundQualityLabel",
      "#interactiveBackgroundHelp",
      "#connectionColorLabel",
      "#colorSchemeSettingsBlock",
      "#openThemeCatalogButton",
      "#openThemeEditorButton",
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
      "#cardCatalogSettingsBlock",
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
    interactiveBackgroundQuality: "Интерактивный фон",
    interactiveBackgroundHelp: "Работает только для тем, где задан interactiveBackground. Низкое качество ограничивает FPS и число объектов.",
    interactiveBackgroundOff: "Выключен",
    interactiveBackgroundLow: "Низкое качество",
    interactiveBackgroundNormal: "Обычное качество",
    connectionColor: "Цвет соединений",
    themeCatalog: "Каталог тем",
    themeCatalogClose: "Закрыть каталог тем",
    themeCatalogHelp: "Пока серверной части нет, здесь отображаются темы, встроенные в приложение. Позже в этом окне появятся пользовательские темы, рейтинг, скриншоты, видео превью, загрузка и публикация.",
    themeCatalogUpload: "Загрузить свою тему",
    themeCatalogUploadLocal: "Публикация на сервер пока недоступна. Сейчас можно импортировать тему локально.",
    themeCatalogApply: "Применить",
    themeCatalogDownload: "Скачать файл",
    themeCatalogRating: "Рейтинг {rating}",
    themeCatalogDownloads: "Скачиваний: {count}",
    themeCatalogBuiltIn: "Встроенная",
    themeCatalogScreenshots: "Скриншоты",
    themeCatalogVideoPreview: "Видео превью",
    themeCatalogApplied: "Тема применена: {name}.",
    themeCatalogExported: "Тема экспортирована: {name}.",
    themePackageImportFinished: "Импорт пакета темы завершен.",
    themeCatalogClassicName: "Classic Board",
    themeCatalogClassicDescription: "Базовая светлая тема приложения: спокойный фон, читаемые карточки и стандартные соединения.",
    themeCatalogGraphiteName: "Graphite Focus",
    themeCatalogGraphiteDescription: "Темная рабочая тема с более контрастными соединениями и усиленной тенью карточек.",
    themeCatalogStudioName: "Studio Soft",
    themeCatalogStudioDescription: "Мягкая светлая тема для длинной работы с заметками, таблицами и планами.",
    themeCatalogInteractiveName: "Interactive Lab",
    themeCatalogInteractiveDescription: "Демонстрационная заготовка для интерактивного фона: частицы включены, актеры и эффекты можно добавить через пакет темы.",
    themeCatalogTagClean: "чистая",
    themeCatalogTagBuiltIn: "стандартная",
    themeCatalogTagDark: "темная",
    themeCatalogTagFocus: "фокус",
    themeCatalogTagSoft: "мягкая",
    themeCatalogTagWork: "рабочая",
    themeCatalogTagInteractive: "интерактивная",
    themeCatalogTagExperimental: "эксперимент",
    cardCatalog: "Каталог карточек",
    cardCatalogClose: "Закрыть каталог карточек",
    cardCatalogSettings: "Пакеты карточек",
    cardCatalogSettingsHelp: "Установленные пакеты добавляют шаблоны карточек для узких сценариев работы.",
    cardCatalogHelp: "Пока серверной части нет, здесь отображаются встроенные и локально установленные пакеты карточек. Позже это окно можно подключить к онлайн-каталогу с рейтингом, описанием, скриншотами и публикацией.",
    cardCatalogImport: "Импорт пакета",
    cardCatalogUpload: "Загрузить свой пакет",
    cardCatalogUploadLocal: "Публикация на сервер пока недоступна. Сейчас можно импортировать пакет карточек локально.",
    cardCatalogInstall: "Установить",
    cardCatalogInstalled: "Установлено",
    cardCatalogBuiltIn: "Встроенный",
    cardCatalogCreate: "Создать",
    cardCatalogExport: "Скачать пакет",
    cardCatalogRemove: "Удалить пакет",
    cardCatalogAuthor: "Автор: {author}",
    cardCatalogTemplateCount: "Шаблонов: {count}",
    cardCatalogInstalledStatus: "Пакет установлен: {name}.",
    cardCatalogImported: "Пакет импортирован: {name}.",
    cardCatalogRemoved: "Пакет удален.",
    cardCatalogExported: "Пакет экспортирован: {name}.",
    cardCatalogImportFailed: "Не удалось импортировать пакет карточек.",
    cardCatalogTemplateCreated: "Создана карточка: {name}.",
    cardCatalogPlanningPackName: "Планирование",
    cardCatalogPlanningPackDescription: "Шаблоны для ежедневного планирования, встреч и расписания.",
    cardCatalogDeveloperPackName: "Разработка",
    cardCatalogDeveloperPackDescription: "Шаблоны для баг-репортов, сниппетов и тестовых матриц.",
    cardCatalogResearchPackName: "Исследования",
    cardCatalogResearchPackDescription: "Шаблоны для источников, экспериментов и напоминаний о проверке.",
    cardCatalogTagPlanning: "планирование",
    cardCatalogTagBuiltIn: "стандартный",
    cardCatalogTagDev: "разработка",
    cardCatalogTagResearch: "исследования",
    cardTemplateDailyPlanName: "План дня",
    cardTemplateDailyPlanDescription: "Список задач для быстрых ежедневных приоритетов.",
    cardTemplateDailyPlanTitle: "План дня",
    cardTemplateDailyPlanTask1: "Главная задача",
    cardTemplateDailyPlanTask2: "Проверить прогресс",
    cardTemplateDailyPlanTask3: "Закрыть день",
    cardTemplateMeetingNotesName: "Заметки встречи",
    cardTemplateMeetingNotesDescription: "Заготовка для фиксации темы, решений и следующих шагов.",
    cardTemplateMeetingNotesTitle: "Встреча",
    cardTemplateMeetingNotesText: "Тема:\n\nРешения:\n\nСледующие шаги:",
    cardTemplateWeeklyScheduleName: "Расписание недели",
    cardTemplateWeeklyScheduleDescription: "Базовые временные блоки для планирования недели.",
    cardTemplateWeeklyScheduleTitle: "Неделя",
    cardTemplateWeeklyScheduleEntry1: "Фокус-блок",
    cardTemplateWeeklyScheduleEntry2: "Проверка задач",
    cardTemplateWeeklyScheduleEntry3: "Итоги дня",
    cardTemplateBugReportName: "Bug report",
    cardTemplateBugReportDescription: "Структура для описания ошибки и шагов воспроизведения.",
    cardTemplateBugReportTitle: "Bug report",
    cardTemplateBugReportText: "Ожидаемый результат:\n\nФактический результат:\n\nШаги воспроизведения:\n1. \n2. \n3. ",
    cardTemplateApiSnippetName: "API snippet",
    cardTemplateApiSnippetDescription: "Карточка кода для небольшого примера запроса.",
    cardTemplateApiSnippetTitle: "API snippet",
    cardTemplateTestMatrixName: "Тестовая матрица",
    cardTemplateTestMatrixDescription: "Таблица для проверки сценариев по окружениям.",
    cardTemplateTestMatrixTitle: "Тестовая матрица",
    cardTemplateTestMatrixColumn1: "Сценарий",
    cardTemplateTestMatrixColumn2: "Статус",
    cardTemplateTestMatrixColumn3: "Комментарий",
    cardTemplateTestMatrixRow1A: "Основной путь",
    cardTemplateTestMatrixRow1B: "Не проверено",
    cardTemplateTestMatrixRow1C: "",
    cardTemplateTestMatrixRow2A: "Ошибка",
    cardTemplateTestMatrixRow2B: "Не проверено",
    cardTemplateTestMatrixRow2C: "",
    cardTemplateSourceListName: "Список источников",
    cardTemplateSourceListDescription: "Карточка ссылок для материалов и исследований.",
    cardTemplateSourceListTitle: "Источники",
    cardTemplateSourceListLink1: "Новый источник",
    cardTemplateExperimentProgressName: "Прогресс эксперимента",
    cardTemplateExperimentProgressDescription: "Процент готовности по чеклисту этапов.",
    cardTemplateExperimentProgressTitle: "Эксперимент",
    cardTemplateExperimentProgressTask1: "Гипотеза",
    cardTemplateExperimentProgressTask2: "Проверка",
    cardTemplateExperimentProgressTask3: "Выводы",
    cardTemplateReminderReviewName: "Напоминание о проверке",
    cardTemplateReminderReviewDescription: "Напоминание для повторной проверки материала или решения.",
    cardTemplateReminderReviewTitle: "Проверить позже",
    cardTemplateReminderReviewText: "Что проверить:",
    themeEditor: "Редактор тем",
    themeEditorTitle: "Редактор тем",
    themeEditorName: "Название темы",
    themeEditorLoadCurrent: "Загрузить текущую",
    themeEditorLoadDefault: "Новая стандартная",
    themeEditorShape: "Форма и карточки",
    themeEditorCardBackgrounds: "SVG фоны карточек",
    themeHeaderAsset: "SVG хедера",
    themeBodyAsset: "SVG фона элемента",
    themePickAsset: "Выбрать SVG",
    themeClearAsset: "Очистить",
    themePreview: "Превью",
    themeEditorCardBackgroundsHelp: "Файлы встраиваются в тему как data URI. Для разных типов карточек можно позже отредактировать JSON темы вручную: assets.cardHeaders.note, assets.cardBodies.tasks и т.д.",
    themeAssetsJson: "Ассеты темы JSON",
    themeEditorConnections: "Соединения",
    themeEditorInteractive: "Интерактивный фон",
    themeBuilderTitle: "Сборщик сложной темы",
    themeBuilderHelp: "Пресеты добавляют безопасные JSON-блоки. Их можно доработать ниже вручную.",
    themeActorPreset: "Пресет actor",
    themeActorEnhancer: "Усиление последнего actor",
    themeEffectPreset: "Пресет эффектов",
    themeAddActorPreset: "Добавить actor",
    themeApplyActorEnhancer: "Применить",
    themeApplyEffectPreset: "Добавить эффект",
    themeFormatJson: "Форматировать JSON",
    themeValidateJson: "Проверить тему",
    themeBuilderSummary: "Actors: {actors}, reactions: {reactions}, assets: {assets}.",
    themeBuilderActorAdded: "Actor добавлен.",
    themeBuilderEnhancerApplied: "Усиление применено к последнему actor.",
    themeBuilderEffectApplied: "Эффект добавлен.",
    themeBuilderNoActor: "Сначала добавьте actor.",
    themeBuilderJsonFormatted: "JSON отформатирован.",
    themeBuilderValid: "Тема корректна: actors {actors}, reactions {reactions}, assets {assets}.",
    themeCardRadius: "Радиус карточек",
    themePanelRadius: "Радиус панелей",
    themeButtonRadius: "Радиус кнопок",
    themeCardBorderWidth: "Рамка карточек",
    themeCardHeaderHeight: "Хедер карточек",
    themeGroupHeaderHeight: "Хедер групп",
    themeIconScale: "Размер иконок",
    themeShadow: "Тень",
    themeStrokeWidth: "Толщина линии",
    themeSelectedStrokeWidth: "Выделенная линия",
    themeDraftStrokeWidth: "Черновая линия",
    themeOutlineWidth: "Контур",
    themeWaypointRadius: "Путевые точки",
    themeMarkerScale: "Маркеры",
    themeLineStyle: "Стиль линии",
    themeInteractiveEnabled: "Включен в теме",
    themeInteractiveFps: "FPS",
    themeBackgroundType: "Тип фона",
    themeBackgroundColor: "Цвет фона",
    themeBackgroundOpacity: "Прозрачность слоя",
    themeParticleColor: "Цвет частиц",
    themeParticleCount: "Количество частиц",
    themeActorsJson: "Actors JSON",
    themeReactionsJson: "Reactions JSON",
    themeCardEffectsJson: "Card effects JSON",
    themeEditorInteractiveHelp: "Для ассетов используйте импорт пакета темы. Здесь редактируется безопасный JSON без JavaScript.",
    themeEditorApplied: "Тема применена.",
    themeEditorExported: "Тема экспортирована.",
    themeEditorInvalidJson: "Ошибка JSON в редакторе темы.",
    themeEditorLoaded: "Тема загружена в редактор.",
    themeEditorDefaultLoaded: "Стандартная тема загружена в редактор.",
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
    apply: "Применить",
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
    interactiveBackgroundQuality: "Interactive background",
    interactiveBackgroundHelp: "Works only for themes with interactiveBackground. Low quality limits FPS and actor count.",
    interactiveBackgroundOff: "Off",
    interactiveBackgroundLow: "Low quality",
    interactiveBackgroundNormal: "Normal quality",
    connectionColor: "Connection color",
    themeCatalog: "Theme catalog",
    themeCatalogClose: "Close theme catalog",
    themeCatalogHelp: "There is no server yet, so this list shows themes bundled with the app. Later this window will host community themes, ratings, screenshots, video previews, downloads, and publishing.",
    themeCatalogUpload: "Upload your theme",
    themeCatalogUploadLocal: "Server publishing is not available yet. For now, import a theme locally.",
    themeCatalogApply: "Apply",
    themeCatalogDownload: "Download file",
    themeCatalogRating: "Rating {rating}",
    themeCatalogDownloads: "Downloads: {count}",
    themeCatalogBuiltIn: "Built in",
    themeCatalogScreenshots: "Screenshots",
    themeCatalogVideoPreview: "Video preview",
    themeCatalogApplied: "Theme applied: {name}.",
    themeCatalogExported: "Theme exported: {name}.",
    themePackageImportFinished: "Theme package import finished.",
    themeCatalogClassicName: "Classic Board",
    themeCatalogClassicDescription: "The app's base light theme: calm background, readable cards, and standard connections.",
    themeCatalogGraphiteName: "Graphite Focus",
    themeCatalogGraphiteDescription: "Dark workspace theme with more contrast for connections and stronger card shadows.",
    themeCatalogStudioName: "Studio Soft",
    themeCatalogStudioDescription: "Soft light theme for long sessions with notes, tables, and plans.",
    themeCatalogInteractiveName: "Interactive Lab",
    themeCatalogInteractiveDescription: "Demo base for interactive backgrounds: particles are enabled, actors and effects can be added through a theme package.",
    themeCatalogTagClean: "clean",
    themeCatalogTagBuiltIn: "standard",
    themeCatalogTagDark: "dark",
    themeCatalogTagFocus: "focus",
    themeCatalogTagSoft: "soft",
    themeCatalogTagWork: "work",
    themeCatalogTagInteractive: "interactive",
    themeCatalogTagExperimental: "experimental",
    cardCatalog: "Card catalog",
    cardCatalogClose: "Close card catalog",
    cardCatalogSettings: "Card packages",
    cardCatalogSettingsHelp: "Installed packages add card templates for specialized workflows.",
    cardCatalogHelp: "There is no server yet, so this list shows bundled and locally installed card packages. Later this window can connect to an online catalog with ratings, descriptions, screenshots, and publishing.",
    cardCatalogImport: "Import package",
    cardCatalogUpload: "Upload your package",
    cardCatalogUploadLocal: "Server publishing is not available yet. For now, import a card package locally.",
    cardCatalogInstall: "Install",
    cardCatalogInstalled: "Installed",
    cardCatalogBuiltIn: "Built in",
    cardCatalogCreate: "Create",
    cardCatalogExport: "Download package",
    cardCatalogRemove: "Remove package",
    cardCatalogAuthor: "Author: {author}",
    cardCatalogTemplateCount: "Templates: {count}",
    cardCatalogInstalledStatus: "Package installed: {name}.",
    cardCatalogImported: "Package imported: {name}.",
    cardCatalogRemoved: "Package removed.",
    cardCatalogExported: "Package exported: {name}.",
    cardCatalogImportFailed: "Could not import card package.",
    cardCatalogTemplateCreated: "Card created: {name}.",
    cardCatalogPlanningPackName: "Planning",
    cardCatalogPlanningPackDescription: "Templates for daily planning, meetings, and schedules.",
    cardCatalogDeveloperPackName: "Development",
    cardCatalogDeveloperPackDescription: "Templates for bug reports, snippets, and test matrices.",
    cardCatalogResearchPackName: "Research",
    cardCatalogResearchPackDescription: "Templates for sources, experiments, and review reminders.",
    cardCatalogTagPlanning: "planning",
    cardCatalogTagBuiltIn: "standard",
    cardCatalogTagDev: "development",
    cardCatalogTagResearch: "research",
    cardTemplateDailyPlanName: "Daily plan",
    cardTemplateDailyPlanDescription: "Task list for quick daily priorities.",
    cardTemplateDailyPlanTitle: "Daily plan",
    cardTemplateDailyPlanTask1: "Main task",
    cardTemplateDailyPlanTask2: "Check progress",
    cardTemplateDailyPlanTask3: "Close the day",
    cardTemplateMeetingNotesName: "Meeting notes",
    cardTemplateMeetingNotesDescription: "Template for topic, decisions, and next steps.",
    cardTemplateMeetingNotesTitle: "Meeting",
    cardTemplateMeetingNotesText: "Topic:\n\nDecisions:\n\nNext steps:",
    cardTemplateWeeklyScheduleName: "Weekly schedule",
    cardTemplateWeeklyScheduleDescription: "Base time blocks for weekly planning.",
    cardTemplateWeeklyScheduleTitle: "Week",
    cardTemplateWeeklyScheduleEntry1: "Focus block",
    cardTemplateWeeklyScheduleEntry2: "Task review",
    cardTemplateWeeklyScheduleEntry3: "Daily wrap-up",
    cardTemplateBugReportName: "Bug report",
    cardTemplateBugReportDescription: "Structure for describing a bug and reproduction steps.",
    cardTemplateBugReportTitle: "Bug report",
    cardTemplateBugReportText: "Expected result:\n\nActual result:\n\nSteps to reproduce:\n1. \n2. \n3. ",
    cardTemplateApiSnippetName: "API snippet",
    cardTemplateApiSnippetDescription: "Code card for a small request example.",
    cardTemplateApiSnippetTitle: "API snippet",
    cardTemplateTestMatrixName: "Test matrix",
    cardTemplateTestMatrixDescription: "Table for checking scenarios across environments.",
    cardTemplateTestMatrixTitle: "Test matrix",
    cardTemplateTestMatrixColumn1: "Scenario",
    cardTemplateTestMatrixColumn2: "Status",
    cardTemplateTestMatrixColumn3: "Comment",
    cardTemplateTestMatrixRow1A: "Happy path",
    cardTemplateTestMatrixRow1B: "Not checked",
    cardTemplateTestMatrixRow1C: "",
    cardTemplateTestMatrixRow2A: "Error case",
    cardTemplateTestMatrixRow2B: "Not checked",
    cardTemplateTestMatrixRow2C: "",
    cardTemplateSourceListName: "Source list",
    cardTemplateSourceListDescription: "Bookmark card for research materials.",
    cardTemplateSourceListTitle: "Sources",
    cardTemplateSourceListLink1: "New source",
    cardTemplateExperimentProgressName: "Experiment progress",
    cardTemplateExperimentProgressDescription: "Completion percentage based on checklist stages.",
    cardTemplateExperimentProgressTitle: "Experiment",
    cardTemplateExperimentProgressTask1: "Hypothesis",
    cardTemplateExperimentProgressTask2: "Validation",
    cardTemplateExperimentProgressTask3: "Findings",
    cardTemplateReminderReviewName: "Review reminder",
    cardTemplateReminderReviewDescription: "Reminder to re-check a material or decision.",
    cardTemplateReminderReviewTitle: "Review later",
    cardTemplateReminderReviewText: "What to review:",
    themeEditor: "Theme editor",
    themeEditorTitle: "Theme editor",
    themeEditorName: "Theme name",
    themeEditorLoadCurrent: "Load current",
    themeEditorLoadDefault: "New default",
    themeEditorShape: "Shape and cards",
    themeEditorCardBackgrounds: "SVG card backgrounds",
    themeHeaderAsset: "Header SVG",
    themeBodyAsset: "Card body SVG",
    themePickAsset: "Choose SVG",
    themeClearAsset: "Clear",
    themePreview: "Preview",
    themeEditorCardBackgroundsHelp: "Files are embedded into the theme as data URIs. Per-card-type backgrounds can later be edited in theme JSON: assets.cardHeaders.note, assets.cardBodies.tasks, etc.",
    themeAssetsJson: "Theme assets JSON",
    themeEditorConnections: "Connections",
    themeEditorInteractive: "Interactive background",
    themeBuilderTitle: "Complex theme builder",
    themeBuilderHelp: "Presets add safe JSON blocks. You can fine-tune them manually below.",
    themeActorPreset: "Actor preset",
    themeActorEnhancer: "Last actor enhancement",
    themeEffectPreset: "Effect preset",
    themeAddActorPreset: "Add actor",
    themeApplyActorEnhancer: "Apply",
    themeApplyEffectPreset: "Add effect",
    themeFormatJson: "Format JSON",
    themeValidateJson: "Validate theme",
    themeBuilderSummary: "Actors: {actors}, reactions: {reactions}, assets: {assets}.",
    themeBuilderActorAdded: "Actor added.",
    themeBuilderEnhancerApplied: "Enhancement applied to the last actor.",
    themeBuilderEffectApplied: "Effect added.",
    themeBuilderNoActor: "Add an actor first.",
    themeBuilderJsonFormatted: "JSON formatted.",
    themeBuilderValid: "Theme is valid: actors {actors}, reactions {reactions}, assets {assets}.",
    themeCardRadius: "Card radius",
    themePanelRadius: "Panel radius",
    themeButtonRadius: "Button radius",
    themeCardBorderWidth: "Card border",
    themeCardHeaderHeight: "Card header",
    themeGroupHeaderHeight: "Group header",
    themeIconScale: "Icon size",
    themeShadow: "Shadow",
    themeStrokeWidth: "Line width",
    themeSelectedStrokeWidth: "Selected line",
    themeDraftStrokeWidth: "Draft line",
    themeOutlineWidth: "Outline",
    themeWaypointRadius: "Waypoints",
    themeMarkerScale: "Markers",
    themeLineStyle: "Line style",
    themeInteractiveEnabled: "Enabled in theme",
    themeInteractiveFps: "FPS",
    themeBackgroundType: "Background type",
    themeBackgroundColor: "Background color",
    themeBackgroundOpacity: "Layer opacity",
    themeParticleColor: "Particle color",
    themeParticleCount: "Particle count",
    themeActorsJson: "Actors JSON",
    themeReactionsJson: "Reactions JSON",
    themeCardEffectsJson: "Card effects JSON",
    themeEditorInteractiveHelp: "Use theme package import for assets. This field edits safe JSON without JavaScript.",
    themeEditorApplied: "Theme applied.",
    themeEditorExported: "Theme exported.",
    themeEditorInvalidJson: "Theme editor JSON error.",
    themeEditorLoaded: "Theme loaded into editor.",
    themeEditorDefaultLoaded: "Default theme loaded into editor.",
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
    apply: "Apply",
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
  multiMonitorSingleHelp: "Одно обычное окно будет открываться на выбранном экране.",
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
  multiMonitorSingleHelp: "One regular window will open on the selected screen.",
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
  chat: "\u0427\u0430\u0442",
  addChat: "\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0447\u0430\u0442",
  newChat: "\u041d\u043e\u0432\u044b\u0439 \u0447\u0430\u0442",
  chatPlaceholder: "\u041d\u0430\u043f\u0438\u0448\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435...",
  sendChatMessage: "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",
  chatEmpty: "\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442.",
  makeSharedGroup: "\u0421\u0434\u0435\u043b\u0430\u0442\u044c shared group",
  disableSharedGroup: "\u041e\u0442\u043a\u043b\u044e\u0447\u0438\u0442\u044c shared group",
  copySharedGroupId: "\u0421\u043a\u043e\u043f\u0438\u0440\u043e\u0432\u0430\u0442\u044c shared ID",
  sharedGroupBadge: "Shared",
  sharedGroupLocalStatus: "\u041b\u043e\u043a\u0430\u043b\u044c\u043d\u0430\u044f shared group",
  sharedGroupLimit: "\u041b\u0438\u043c\u0438\u0442",
  subscriptionPlanFree: "Free",
  subscriptionPlanPlus: "Plus",
  subscriptionPlanTeam: "Team"
});

Object.assign(translations.en, {
  chat: "Chat",
  addChat: "Add chat",
  newChat: "New chat",
  chatPlaceholder: "Write a message...",
  sendChatMessage: "Send",
  chatEmpty: "No messages yet.",
  makeSharedGroup: "Make shared group",
  disableSharedGroup: "Disable shared group",
  copySharedGroupId: "Copy shared ID",
  sharedGroupBadge: "Shared",
  sharedGroupLocalStatus: "Local shared group",
  sharedGroupLimit: "Limit",
  subscriptionPlanFree: "Free",
  subscriptionPlanPlus: "Plus",
  subscriptionPlanTeam: "Team"
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
  catalogBrowseTab: "Каталог",
  catalogInstalledTab: "Загруженные",
  catalogActive: "Используется",
  themeCatalogRemove: "Удалить",
  themeCatalogRemoved: "Тема удалена.",
  themeCatalogRemoveFailed: "Не удалось удалить тему.",
  themeCatalogInstalledEmpty: "Загруженных тем пока нет.",
  themeCatalogInstalledDescription: "Тема доступна локально и может быть применена к текущей доске.",
  themeRemoveConfirm: "Удалить эту тему из загруженных?",
  themeRemoveUsedConfirm: "Эта тема используется в досках: {count}. При удалении эти доски будут переведены на стандартную тему. Продолжить?",
  cardCatalogInstalledEmpty: "Загруженных пакетов карточек пока нет.",
  cardPackRemoveConfirm: "Удалить этот пакет карточек из загруженных?",
  cardPackRemoveUsedConfirm: "Карточки из этого пакета используются на досках: {count}. При удалении пакета эти карточки будут удалены. Продолжить?",
  cardCatalogRemoveFailed: "Не удалось удалить пакет карточек.",
  cardTemplateCodeSnippetName: "\u0421\u043d\u0438\u043f\u043f\u0435\u0442 \u043a\u043e\u0434\u0430",
  cardTemplateCodeSnippetDescription: "\u041f\u0443\u0441\u0442\u0430\u044f \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0430 \u043a\u043e\u0434\u0430 \u0434\u043b\u044f \u0437\u0430\u043c\u0435\u0442\u043e\u043a, \u043a\u043e\u043c\u0430\u043d\u0434 \u0438 \u0444\u0440\u0430\u0433\u043c\u0435\u043d\u0442\u043e\u0432.",
  cardTemplateCodeSnippetTitle: "\u0421\u043d\u0438\u043f\u043f\u0435\u0442",
  clock: "Часы / дата",
  weather: "Погода",
  addClock: "Добавить часы",
  addWeather: "Добавить погоду",
  newClock: "Новые часы",
  newWeather: "Новая погода",
  clockTimeZone: "Часовой пояс",
  clockSystemTimeZone: "Системный: {zone}",
  clockTimeZoneHelp: "Пустое поле использует системный часовой пояс. Можно указать IANA-зону, например Europe/Moscow или Asia/Qyzylorda.",
  weatherLocationPlaceholder: "Город или место",
  weatherRefresh: "Обновить",
  weatherLoading: "Загрузка...",
  weatherNoData: "Данных пока нет",
  weatherEmptyLocation: "Укажите место и нажмите обновить.",
  weatherSource: "Источник: wttr.in",
  weatherUpdated: "Обновлено: {time}",
  weatherFailed: "Не удалось загрузить погоду.",
  weatherHumidity: "Влажность {value}%",
  weatherWind: "Ветер {value}",
  cardCatalogWidgetsPackName: "Виджеты",
  cardCatalogWidgetsPackDescription: "Карточки для быстрых информеров на доске: часы, дата и погода.",
  cardCatalogTagWidgets: "виджеты",
  cardTemplateClockDateName: "Часы / дата",
  cardTemplateClockDateDescription: "Локальное время и дата с выбором часового пояса.",
  cardTemplateClockDateTitle: "Часы",
  cardTemplateWeatherName: "Погода",
  cardTemplateWeatherDescription: "Погода для выбранного места с ручным обновлением.",
  cardTemplateWeatherTitle: "Погода"
});

Object.assign(translations.en, {
  catalogBrowseTab: "Catalog",
  catalogInstalledTab: "Downloaded",
  catalogActive: "In use",
  themeCatalogRemove: "Remove",
  themeCatalogRemoved: "Theme removed.",
  themeCatalogRemoveFailed: "Could not remove theme.",
  themeCatalogInstalledEmpty: "No downloaded themes yet.",
  themeCatalogInstalledDescription: "This theme is available locally and can be applied to the current board.",
  themeRemoveConfirm: "Remove this downloaded theme?",
  themeRemoveUsedConfirm: "This theme is used by {count} board(s). Removing it will reset those boards to the default theme. Continue?",
  cardCatalogInstalledEmpty: "No downloaded card packages yet.",
  cardPackRemoveConfirm: "Remove this downloaded card package?",
  cardPackRemoveUsedConfirm: "Cards from this package are used on boards: {count}. Removing the package will delete those cards. Continue?",
  cardCatalogRemoveFailed: "Could not remove card package.",
  cardTemplateCodeSnippetName: "Code snippet",
  cardTemplateCodeSnippetDescription: "Blank code card for notes, commands, and fragments.",
  cardTemplateCodeSnippetTitle: "Snippet",
  clock: "Clock / date",
  weather: "Weather",
  addClock: "Add clock",
  addWeather: "Add weather",
  newClock: "New clock",
  newWeather: "New weather",
  clockTimeZone: "Time zone",
  clockSystemTimeZone: "System: {zone}",
  clockTimeZoneHelp: "Leave empty to use the system time zone. You can enter an IANA zone, for example Europe/London or America/New_York.",
  weatherLocationPlaceholder: "City or place",
  weatherRefresh: "Refresh",
  weatherLoading: "Loading...",
  weatherNoData: "No data yet",
  weatherEmptyLocation: "Enter a place and refresh.",
  weatherSource: "Source: wttr.in",
  weatherUpdated: "Updated: {time}",
  weatherFailed: "Could not load weather.",
  weatherHumidity: "Humidity {value}%",
  weatherWind: "Wind {value}",
  cardCatalogWidgetsPackName: "Widgets",
  cardCatalogWidgetsPackDescription: "Quick board widgets: clock, date, and weather.",
  cardCatalogTagWidgets: "widgets",
  cardTemplateClockDateName: "Clock / date",
  cardTemplateClockDateDescription: "Local time and date with selectable time zone.",
  cardTemplateClockDateTitle: "Clock",
  cardTemplateWeatherName: "Weather",
  cardTemplateWeatherDescription: "Weather for a selected place with manual refresh.",
  cardTemplateWeatherTitle: "Weather"
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

function normalizeSubscriptionPlan(value) {
  return Object.hasOwn(subscriptionPlanLimits, value) ? value : "free";
}

function normalizeAccountState(account = {}) {
  return {
    subscriptionPlan: normalizeSubscriptionPlan(account?.subscriptionPlan)
  };
}

function getSharedGroupLimits(subscriptionPlan = state?.account?.subscriptionPlan) {
  return subscriptionPlanLimits[normalizeSubscriptionPlan(subscriptionPlan)] || subscriptionPlanLimits.free;
}

function getSharedGroupLimitLabel(subscriptionPlan = state?.account?.subscriptionPlan) {
  const limits = getSharedGroupLimits(subscriptionPlan);
  return `${t(limits.labelKey)}: ${limits.sharedGroupMaxWidth}x${limits.sharedGroupMaxHeight}`;
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

function normalizeChatMessage(message = {}) {
  const source = message && typeof message === "object" ? message : {};
  const createdAt = Number.isFinite(Number(source.createdAt)) ? Number(source.createdAt) : Date.now();
  const editedAt = Number.isFinite(Number(source.editedAt)) ? Number(source.editedAt) : null;
  const deletedAt = Number.isFinite(Number(source.deletedAt)) ? Number(source.deletedAt) : null;

  return {
    id: typeof source.id === "string" && source.id ? source.id.slice(0, 160) : createId("chat-message"),
    author: normalizeAuditActor(source.author, createDefaultAuditActor()),
    text: typeof source.text === "string" ? source.text.slice(0, 4000) : "",
    createdAt,
    editedAt,
    deletedAt
  };
}

function normalizeChatMessages(messages = []) {
  if (!Array.isArray(messages)) {
    return [];
  }

  return messages
    .map(normalizeChatMessage)
    .filter((message) => message.text || Number.isFinite(message.deletedAt))
    .slice(-chatMessageLimit);
}

function createChatMessage(text) {
  return normalizeChatMessage({
    id: createId("chat-message"),
    author: getCurrentAuditActor(),
    text: String(text || "").trim(),
    createdAt: Date.now()
  });
}

function normalizeSharedGroup(sharedGroup = null, groupId = "") {
  const source = sharedGroup && typeof sharedGroup === "object" ? sharedGroup : {};
  const enabled = source.enabled === true;
  const id = typeof source.id === "string" && source.id.trim()
    ? source.id.trim().slice(0, 160)
    : enabled
      ? createId("shared-group")
      : "";

  return {
    enabled,
    id,
    role: ["owner", "editor", "viewer"].includes(source.role) ? source.role : "owner",
    status: ["local", "pending", "syncing", "synced", "error"].includes(source.status) ? source.status : "local",
    groupId: typeof source.groupId === "string" && source.groupId.trim() ? source.groupId.trim().slice(0, 160) : groupId,
    createdAt: Number.isFinite(Number(source.createdAt)) ? Number(source.createdAt) : Date.now(),
    lastSyncedAt: Number.isFinite(Number(source.lastSyncedAt)) ? Number(source.lastSyncedAt) : null,
    lastSyncedOpId: typeof source.lastSyncedOpId === "string" ? source.lastSyncedOpId.slice(0, 160) : "",
    lastLocalChangeAt: Number.isFinite(Number(source.lastLocalChangeAt)) ? Number(source.lastLocalChangeAt) : null,
    lastLocalOpId: typeof source.lastLocalOpId === "string" ? source.lastLocalOpId.slice(0, 160) : "",
    inviteUrl: typeof source.inviteUrl === "string" ? source.inviteUrl.slice(0, 500) : ""
  };
}

function isGroupShared(group) {
  return group?.kind === "group" && group.sharedGroup?.enabled === true && Boolean(group.sharedGroup.id);
}

function normalizeSharedGroupOperation(operation = {}) {
  const source = operation && typeof operation === "object" ? operation : {};
  const groupId = typeof source.groupId === "string" ? source.groupId.slice(0, 160) : "";
  const sharedGroupId = typeof source.sharedGroupId === "string" ? source.sharedGroupId.slice(0, 160) : "";
  const type = typeof source.type === "string" && source.type.trim() ? source.type.trim().slice(0, 80) : "";
  const entityType = typeof source.entityType === "string" && source.entityType.trim() ? source.entityType.trim().slice(0, 80) : "";
  const entityId = typeof source.entityId === "string" ? source.entityId.slice(0, 160) : "";

  return {
    id: typeof source.id === "string" && source.id ? source.id.slice(0, 160) : createId("shared-op"),
    at: Number.isFinite(Number(source.at)) ? Number(source.at) : Date.now(),
    actor: normalizeAuditActor(source.actor, createDefaultAuditActor()),
    groupId,
    sharedGroupId,
    type,
    entityType,
    entityId,
    payload: source.payload && typeof source.payload === "object" && !Array.isArray(source.payload)
      ? clone(source.payload)
      : {}
  };
}

function normalizeSharedGroupOperations(operations = []) {
  if (!Array.isArray(operations)) {
    return [];
  }

  return operations
    .map(normalizeSharedGroupOperation)
    .filter((operation) => operation.groupId && operation.sharedGroupId && operation.type && operation.entityType)
    .slice(-sharedGroupOperationLimit);
}

function constrainSharedGroupRect(rect, direction = "se", subscriptionPlan = state?.account?.subscriptionPlan) {
  const limits = getSharedGroupLimits(subscriptionPlan);
  let left = Number(rect.left) || 0;
  let top = Number(rect.top) || 0;
  let right = Number(rect.right) || left + minCardWidth;
  let bottom = Number(rect.bottom) || top + minCardHeight;
  const maxWidth = Math.max(minCardWidth, limits.sharedGroupMaxWidth);
  const maxHeight = Math.max(minCardHeight, limits.sharedGroupMaxHeight);

  if (right - left > maxWidth) {
    if (direction.includes("w") && !direction.includes("e")) {
      left = right - maxWidth;
    } else {
      right = left + maxWidth;
    }
  }

  if (bottom - top > maxHeight) {
    if (direction.includes("n") && !direction.includes("s")) {
      top = bottom - maxHeight;
    } else {
      bottom = top + maxHeight;
    }
  }

  return { left, top, right, bottom };
}

function enforceSharedGroupLimits(group, subscriptionPlan = state?.account?.subscriptionPlan) {
  if (!isGroupShared(group)) {
    return false;
  }

  const rect = constrainSharedGroupRect({
    left: group.x,
    top: group.y,
    right: group.x + group.width,
    bottom: group.y + group.height
  }, "se", subscriptionPlan);
  const nextWidth = Math.max(rect.right - rect.left, minCardWidth);
  const nextHeight = Math.max(rect.bottom - rect.top, minCardHeight);
  const changed = Math.round(group.width) !== Math.round(nextWidth) || Math.round(group.height) !== Math.round(nextHeight);
  group.width = nextWidth;
  group.height = nextHeight;
  return changed;
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

function getSystemTimeZone() {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
  } catch {
    return "UTC";
  }
}

function isValidTimeZone(value) {
  try {
    new Intl.DateTimeFormat("en-US", { timeZone: value }).format(Date.now());
    return true;
  } catch {
    return false;
  }
}

function normalizeClockTimeZone(value) {
  const text = String(value || "").trim();
  if (!text || text.toLowerCase() === "system") {
    return "system";
  }
  return isValidTimeZone(text) ? text.slice(0, 80) : "system";
}

function getClockResolvedTimeZone(card) {
  const timeZone = normalizeClockTimeZone(card?.clockTimeZone);
  return timeZone === "system" ? getSystemTimeZone() : timeZone;
}

function normalizeClockFields(card = {}) {
  return {
    clockTimeZone: normalizeClockTimeZone(card.clockTimeZone),
    clockShowSeconds: card.clockShowSeconds !== false
  };
}

function normalizeWeatherLocation(value) {
  return String(value || "").trim().slice(0, 120);
}

function normalizeWeatherUnits(value) {
  return value === "imperial" ? "imperial" : "metric";
}

function normalizeWeatherFields(card = {}) {
  return {
    weatherLocation: normalizeWeatherLocation(card.weatherLocation),
    weatherUnits: normalizeWeatherUnits(card.weatherUnits),
    weatherTemperatureC: Number.isFinite(Number(card.weatherTemperatureC)) ? Number(card.weatherTemperatureC) : null,
    weatherFeelsLikeC: Number.isFinite(Number(card.weatherFeelsLikeC)) ? Number(card.weatherFeelsLikeC) : null,
    weatherDescription: typeof card.weatherDescription === "string" ? card.weatherDescription.slice(0, 120) : "",
    weatherHumidity: Number.isFinite(Number(card.weatherHumidity)) ? clamp(Math.round(Number(card.weatherHumidity)), 0, 100) : null,
    weatherWindKph: Number.isFinite(Number(card.weatherWindKph)) ? Math.max(0, Math.round(Number(card.weatherWindKph))) : null,
    weatherUpdatedAt: Number.isFinite(Number(card.weatherUpdatedAt)) ? Number(card.weatherUpdatedAt) : null,
    weatherError: typeof card.weatherError === "string" ? card.weatherError.slice(0, 160) : ""
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
    ? [...multiMonitorDisplays.querySelectorAll('input[type="checkbox"]:checked, input[type="radio"]:checked')]
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
  const isSingleMode = mode === "single";
  const primaryDisplay = displays.find((display) => display.primary) || displays[0];
  const singleSelectedDisplay = displays.find((display) => selectedIds.has(display.id))
    || primaryDisplay;
  const singleSelectedId = singleSelectedDisplay?.id || "";

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

    const input = document.createElement("input");
    input.type = isSingleMode ? "radio" : "checkbox";
    input.name = "multiMonitorDisplaySelection";
    input.value = id;
    input.checked = isSingleMode ? id === singleSelectedId : selectedIds.has(id);
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
      ? getSelectedMultiMonitorDisplayIdsFromUi().length || 1
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

function getStaticQuickCreateDefinitions() {
  return cardTypeRegistry.filter((definition) => !definition.packageOnly);
}

function getToolbarCardTypes() {
  return cardTypeRegistry.filter((definition) => Boolean(definition.toolbarButton));
}

function getCardTemplateCreateId(packId, templateId) {
  return `${cardTemplateCreatePrefix}${normalizePackId(packId, "pack")}:${normalizePackId(templateId, "template")}`;
}

function isCardTemplateCreateId(value) {
  return typeof value === "string" && value.startsWith(cardTemplateCreatePrefix);
}

function isCardTemplateCreateIdForPack(value, packId) {
  return isCardTemplateCreateId(value) && value.startsWith(`${cardTemplateCreatePrefix}${normalizePackId(packId, "pack")}:`);
}

function getCardPackCreateDefinitions(packs = getInstalledCardPacks()) {
  const normalizedPacks = normalizeCardPacks(packs);
  return normalizedPacks.flatMap((pack) => pack.templates.map((template) => {
    const baseDefinition = getCardTypeDefinition(template.kind);
    return {
      kind: getCardTemplateCreateId(pack.id, template.id),
      template,
      packId: pack.id,
      templateId: template.id,
      label: getCardTemplateDisplayName(template),
      description: getCardTemplateDescription(template),
      quickCreateGroup: baseDefinition.quickCreateGroup || "text",
      createMode: "template",
      icon: baseDefinition.icon || getCardTypeDefinition("note").icon
    };
  }));
}

function getAllQuickCreateDefinitions(packs = getInstalledCardPacks()) {
  return [
    ...getStaticQuickCreateDefinitions(),
    ...getCardPackCreateDefinitions(packs)
  ];
}

function getAllToolbarCreateDefinitions(packs = getInstalledCardPacks()) {
  return [
    ...getToolbarCardTypes(),
    ...getCardPackCreateDefinitions(packs)
  ];
}

function getCreateDefinitionLabel(definition) {
  return definition.label || t(definition.labelKey) || t("genericElement");
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

function normalizeQuickCreateKinds(kinds, cardPacks = state.settings?.cardPacks) {
  return normalizeCardKindList(kinds, getAllQuickCreateDefinitions(cardPacks), defaultQuickCreateKinds);
}

function normalizeToolbarCreateKinds(kinds, cardPacks = state.settings?.cardPacks) {
  return normalizeCardKindList(kinds, getAllToolbarCreateDefinitions(cardPacks), defaultToolbarCreateKinds);
}

function ensureCardKindInList(kinds, kind, allowedDefinitions = cardTypeRegistry) {
  const normalized = normalizeCardKindList(kinds, allowedDefinitions, []);
  const allowedKinds = new Set(allowedDefinitions.map((definition) => definition.kind));
  if (allowedKinds.has(kind) && !normalized.includes(kind)) {
    normalized.push(kind);
  }
  return normalized;
}

function normalizePackId(value, fallback = "pack") {
  const safe = String(value || "")
    .trim()
    .toLowerCase()
    .replace(/[^\w-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
  return safe || `${fallback}-${Date.now().toString(36)}`;
}

function localizeTemplateValue(value, key) {
  if (key && typeof key === "string") {
    return t(key);
  }
  return typeof value === "string" ? value : "";
}

function normalizeCardTemplate(template = {}, index = 0) {
  const source = template && typeof template === "object" ? template : {};
  const kind = cardTypeMap.has(source.kind) ? source.kind : "note";
  const definition = getCardTypeDefinition(kind);
  const parsedWidth = Number(source.width);
  const parsedHeight = Number(source.height);
  const data = source.data && typeof source.data === "object" && !Array.isArray(source.data)
    ? source.data
    : {};

  return {
    id: normalizePackId(source.id, `template-${index + 1}`),
    kind,
    name: typeof source.name === "string" ? source.name.slice(0, 80) : "",
    nameKey: typeof source.nameKey === "string" ? source.nameKey.slice(0, 120) : "",
    description: typeof source.description === "string" ? source.description.slice(0, 240) : "",
    descriptionKey: typeof source.descriptionKey === "string" ? source.descriptionKey.slice(0, 120) : "",
    title: typeof source.title === "string" ? source.title.slice(0, 120) : "",
    titleKey: typeof source.titleKey === "string" ? source.titleKey.slice(0, 120) : "",
    width: Number.isFinite(parsedWidth) ? clamp(Math.round(parsedWidth), minCardWidth, 900) : definition.defaultSize?.width || 300,
    height: Number.isFinite(parsedHeight) ? clamp(Math.round(parsedHeight), minCardHeight, 700) : definition.defaultSize?.height || 220,
    data: clone(data)
  };
}

function normalizeCardPack(pack = {}, fallbackId = "pack") {
  const source = pack && typeof pack === "object" ? pack : {};
  const templates = Array.isArray(source.templates)
    ? source.templates.slice(0, 40).map((template, index) => normalizeCardTemplate(template, index))
    : [];

  return {
    id: normalizePackId(source.id, fallbackId),
    name: typeof source.name === "string" ? source.name.slice(0, 80) : "",
    nameKey: typeof source.nameKey === "string" ? source.nameKey.slice(0, 120) : "",
    description: typeof source.description === "string" ? source.description.slice(0, 360) : "",
    descriptionKey: typeof source.descriptionKey === "string" ? source.descriptionKey.slice(0, 120) : "",
    author: typeof source.author === "string" && source.author.trim() ? source.author.trim().slice(0, 80) : "Desktop Board",
    rating: Number.isFinite(Number(source.rating)) ? clamp(Number(source.rating), 0, 5) : 0,
    downloads: Number.isFinite(Number(source.downloads)) ? Math.max(0, Math.round(Number(source.downloads))) : 0,
    tags: Array.isArray(source.tags) ? source.tags.slice(0, 8).map((tag) => String(tag || "").trim().slice(0, 40)).filter(Boolean) : [],
    installedAt: Number.isFinite(Number(source.installedAt)) ? Number(source.installedAt) : Date.now(),
    source: typeof source.source === "string" ? source.source.slice(0, 40) : "local",
    templates
  };
}

function normalizeCardPacks(packs = []) {
  if (!Array.isArray(packs)) {
    return [];
  }

  const seen = new Set();
  return packs
    .slice(0, 30)
    .map((pack, index) => normalizeCardPack(pack, `pack-${index + 1}`))
    .filter((pack) => {
      if (!pack.templates.length || seen.has(pack.id)) {
        return false;
      }
      seen.add(pack.id);
      return true;
    });
}

function getBundledCardPack(packId) {
  const normalizedId = normalizePackId(packId, "pack");
  return getBundledCardCatalogPacks().find((pack) => pack.id === normalizedId) || null;
}

function mergeCardPackWithBundledUpdates(pack) {
  const normalizedPack = normalizeCardPack(pack);
  const bundledPack = getBundledCardPack(normalizedPack.id);
  if (!bundledPack || normalizedPack.source !== "bundled") {
    return normalizedPack;
  }

  const installedTemplates = new Map(normalizedPack.templates.map((template) => [template.id, template]));
  const bundledTemplateIds = new Set(bundledPack.templates.map((template) => template.id));
  return normalizeCardPack({
    ...bundledPack,
    ...normalizedPack,
    templates: [
      ...bundledPack.templates.map((template) => installedTemplates.get(template.id) || template),
      ...normalizedPack.templates.filter((template) => !bundledTemplateIds.has(template.id))
    ]
  });
}

function hasCardPackTemplate(cardPacks, packId, templateId) {
  const normalizedPackId = normalizePackId(packId, "pack");
  const normalizedTemplateId = normalizePackId(templateId, "template");
  return normalizeCardPacks(cardPacks).some((pack) => (
    pack.id === normalizedPackId
    && pack.templates.some((template) => template.id === normalizedTemplateId)
  ));
}

function settingsUsesLegacyCodeCreateKind(settings = {}) {
  return [settings.quickCreateKinds, settings.toolbarCreateKinds].some((kinds) => (
    Array.isArray(kinds) && kinds.includes(legacyCodeCardKind)
  ));
}

function normalizeSettingsCardPacks(settings = {}) {
  const upgradedPacks = normalizeCardPacks(settings.cardPacks).map(mergeCardPackWithBundledUpdates);
  if (
    settingsUsesLegacyCodeCreateKind(settings)
    && !hasCardPackTemplate(upgradedPacks, developerCardPackId, codeSnippetCardTemplateId)
  ) {
    const developerPack = getBundledCardPack(developerCardPackId);
    if (developerPack) {
      upgradedPacks.push(developerPack);
    }
  }
  return normalizeCardPacks(upgradedPacks);
}

function migrateLegacyCodeCreateKinds(kinds, cardPacks) {
  if (!Array.isArray(kinds)) {
    return kinds;
  }

  const codeSnippetCreateId = getCardTemplateCreateId(developerCardPackId, codeSnippetCardTemplateId);
  const canUseCodeSnippet = hasCardPackTemplate(cardPacks, developerCardPackId, codeSnippetCardTemplateId);
  return kinds.map((kind) => (
    kind === legacyCodeCardKind && canUseCodeSnippet ? codeSnippetCreateId : kind
  ));
}

function normalizeCardPackPayload(payload = {}) {
  const source = payload && typeof payload === "object" ? payload : {};
  const packSource = source.type === "desktop-board-card-pack" && source.pack && typeof source.pack === "object"
    ? source.pack
    : source.pack || source;
  const pack = normalizeCardPack({
    ...packSource,
    source: "imported",
    installedAt: Date.now()
  });
  if (!pack.templates.length) {
    throw new Error("Card pack has no templates");
  }
  return pack;
}

function getCardPackDisplayName(pack) {
  return localizeTemplateValue(pack.name, pack.nameKey) || pack.id;
}

function getCardPackDescription(pack) {
  return localizeTemplateValue(pack.description, pack.descriptionKey);
}

function getCardTemplateDisplayName(template) {
  return localizeTemplateValue(template.name, template.nameKey) || t(getCardTypeDefinition(template.kind).labelKey);
}

function getCardTemplateDescription(template) {
  return localizeTemplateValue(template.description, template.descriptionKey);
}

function getTemplateDataText(source, fieldName) {
  return localizeTemplateValue(source?.[fieldName], source?.[`${fieldName}Key`]);
}

function materializeTemplateTasks(tasks = []) {
  const source = Array.isArray(tasks) ? tasks : [];
  return source.map((task) => ({
    id: createId("task"),
    text: getTemplateDataText(task, "text"),
    textHtml: normalizeRichTextHtml(task?.textHtml, getTemplateDataText(task, "text")),
    done: Boolean(task?.done)
  }));
}

function materializeTemplateLinks(links = []) {
  const source = Array.isArray(links) ? links : [];
  return source.map((link) => ({
    id: createId("link"),
    title: getTemplateDataText(link, "title"),
    url: typeof link?.url === "string" ? link.url.trim() : ""
  }));
}

function materializeTemplateScheduleEntries(entries = []) {
  const source = Array.isArray(entries) ? entries : [];
  return source.map((entry) => createScheduleEntry({
    id: createId("schedule-item"),
    time: entry?.time,
    note: getTemplateDataText(entry, "note"),
    noteHtml: entry?.noteHtml
  }));
}

function materializeTemplateTableColumns(columns = []) {
  const source = Array.isArray(columns) ? columns : [];
  return normalizeTableColumns(source.map((column) => ({
    title: getTemplateDataText(column, "title")
  })), Math.max(1, source.length || 3)).map((column) => ({
    ...column,
    id: createId("table-column")
  }));
}

function materializeTemplateTableRows(rows = [], columnCount = 1) {
  const source = Array.isArray(rows) ? rows : [];
  return source.map((row) => {
    const cells = Array.isArray(row?.cellsKeys)
      ? row.cellsKeys.map((key) => t(key))
      : Array.isArray(row?.cells)
        ? row.cells.map((cell) => String(cell || ""))
        : [];
    return createTableRow({ id: createId("table-row"), cells }, columnCount);
  });
}

function getVisibleQuickCreateDefinitions(kinds = state.settings?.quickCreateKinds) {
  const visibleKinds = new Set(normalizeQuickCreateKinds(kinds));
  return getAllQuickCreateDefinitions().filter((definition) => visibleKinds.has(definition.kind));
}

function getVisibleToolbarCreateDefinitions(kinds = state.settings?.toolbarCreateKinds) {
  const visibleKinds = new Set(normalizeToolbarCreateKinds(kinds));
  return getAllToolbarCreateDefinitions().filter((definition) => visibleKinds.has(definition.kind));
}

function syncCreateSettingsGrid(grid, inputMap, definitions, selectedKinds) {
  const definitionIds = new Set(definitions.map((definition) => definition.kind));
  inputMap.forEach((item, kind) => {
    if (!definitionIds.has(kind)) {
      item.label?.remove();
      inputMap.delete(kind);
    }
  });

  definitions.forEach((definition) => {
    let item = inputMap.get(definition.kind);
    if (!item) {
      const label = document.createElement("label");
      label.className = "settings-toggle-item";

      const input = document.createElement("input");
      input.type = "checkbox";
      input.value = definition.kind;

      const text = document.createElement("span");
      text.className = "settings-toggle-item-label";

      label.append(input, text);
      item = { label, input, text };
      inputMap.set(definition.kind, item);
    }

    item.input.checked = selectedKinds.has(definition.kind);
    item.input.setAttribute("aria-label", getCreateDefinitionLabel(definition));
    item.text.textContent = getCreateDefinitionLabel(definition);
    grid.appendChild(item.label);
  });
}

function renderQuickCreateSettings() {
  if (!quickCreateKindsGrid) {
    return;
  }

  const definitions = getAllQuickCreateDefinitions();
  const selectedKinds = new Set(normalizeQuickCreateKinds(state.settings.quickCreateKinds));
  syncCreateSettingsGrid(quickCreateKindsGrid, quickCreateInputMap, definitions, selectedKinds);
}

function getSelectedQuickCreateKinds() {
  if (!quickCreateInputMap.size) {
    return normalizeQuickCreateKinds(state.settings?.quickCreateKinds);
  }

  return getAllQuickCreateDefinitions()
    .filter((definition) => quickCreateInputMap.get(definition.kind)?.input.checked)
    .map((definition) => definition.kind);
}

function renderToolbarCreateSettings() {
  if (!toolbarCreateKindsGrid) {
    return;
  }

  const toolbarDefinitions = getAllToolbarCreateDefinitions();
  const selectedKinds = new Set(normalizeToolbarCreateKinds(state.settings.toolbarCreateKinds));
  syncCreateSettingsGrid(toolbarCreateKindsGrid, toolbarCreateInputMap, toolbarDefinitions, selectedKinds);
}

function getSelectedToolbarCreateKinds() {
  if (!toolbarCreateInputMap.size) {
    return normalizeToolbarCreateKinds(state.settings?.toolbarCreateKinds);
  }

  return getAllToolbarCreateDefinitions()
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

  if (toolbarTemplateGroup) {
    toolbarTemplateGroup.replaceChildren();
    getVisibleToolbarCreateDefinitions()
      .filter((definition) => definition.createMode === "template")
      .forEach((definition) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "icon-button toolbar-template-button";
        button.innerHTML = definition.icon || getCardTypeDefinition("note").icon;
        const label = getCreateDefinitionLabel(definition);
        button.dataset.tooltip = label;
        button.setAttribute("aria-label", label);
        button.addEventListener("click", () => createCardFromTemplate(definition.template, null, {
          packId: definition.packId,
          templateId: definition.templateId
        }));
        toolbarTemplateGroup.appendChild(button);
      });
  }

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

  const installedTheme = normalizeInstalledTheme({
    ...(payload?.catalog || {}),
    name: payload?.theme?.name || payload?.scheme?.name || payload?.name,
    source: payload?.catalog?.bundled ? "bundled" : "imported",
    installedAt: Date.now(),
    colorScheme: imported.colorScheme,
    visualTheme: imported.visualTheme
  });
  await applyInstalledTheme(installedTheme, statusMessage);
}

async function applyInstalledTheme(theme, statusMessage = t("themeImported")) {
  const normalizedTheme = normalizeInstalledTheme(theme);
  const nextSettings = {
    ...state.settings,
    activeVisualThemeId: normalizedTheme.id,
    installedThemes: [
      ...getInstalledThemes().filter((item) => item.id !== normalizedTheme.id),
      normalizedTheme
    ]
  };
  if (normalizedTheme.colorScheme) {
    nextSettings.backgroundColor = normalizedTheme.colorScheme.backgroundColor;
    nextSettings.backgroundOpacity = normalizedTheme.colorScheme.backgroundOpacity;
    nextSettings.connectionColor = normalizedTheme.colorScheme.connectionColor;
    nextSettings.colors = normalizedTheme.colorScheme.colors;
  }
  if (normalizedTheme.visualTheme) {
    nextSettings.visualTheme = normalizedTheme.visualTheme;
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
    return false;
  }

  try {
    const text = await file.text();
    const payload = JSON.parse(text);
    await applyImportedThemePayload(payload);
    return true;
  } catch (error) {
    console.error("Failed to import theme:", error);
    state.settings = normalizeSettings({
      ...state.settings,
      visualTheme: clone(defaultVisualTheme)
    });
    applySettings();
    render();
    setStatusText(settingsStatus, t("themeImportFailed"), "error");
    return false;
  }
}

async function importThemePackageFromDirectory() {
  if (!window.desktopBoard?.importThemePackage) {
    setStatusText(settingsStatus, t("themeImportFailed"), "error");
    return false;
  }

  try {
    const result = await window.desktopBoard.importThemePackage();
    if (!result?.payload) {
      return false;
    }

    await applyImportedThemePayload(
      result.payload,
      t("themePackageImported", { count: Number(result.importedAssetCount) || 0 })
    );
    return true;
  } catch (error) {
    console.error("Failed to import theme package:", error);
    state.settings = normalizeSettings({
      ...state.settings,
      visualTheme: clone(defaultVisualTheme)
    });
    applySettings();
    render();
    setStatusText(settingsStatus, t("themeImportFailed"), "error");
    return false;
  }
}

function setThemeCatalogStatus(message = "", tone = "") {
  setStatusText(themeCatalogStatus, message, tone);
}

function getBundledThemeCatalogEntryName(entry) {
  return t(entry.nameKey || entry.id);
}

function getBundledThemeCatalogEntryDescription(entry) {
  return t(entry.descriptionKey || "");
}

function getBundledThemeCatalogColorScheme(entry) {
  const schemeSource = builtInColorSchemes.find((scheme) => scheme.id === entry.colorSchemeId)
    || builtInColorSchemes[0];
  const visualTheme = normalizeVisualTheme({
    ...entry.visualTheme,
    name: getBundledThemeCatalogEntryName(entry)
  });

  return normalizeColorScheme({
    ...schemeSource,
    id: entry.id,
    name: getBundledThemeCatalogEntryName(entry),
    visualTheme
  });
}

function getBundledThemeCatalogPayload(entry) {
  const colorScheme = getBundledThemeCatalogColorScheme(entry);
  const visualTheme = colorScheme.visualTheme || normalizeVisualTheme(entry.visualTheme);
  const name = getBundledThemeCatalogEntryName(entry);

  return {
    type: "desktop-board-theme",
    version: 1,
    theme: {
      name,
      colorScheme,
      visual: visualTheme
    },
    catalog: {
      id: entry.id,
      author: "Desktop Board",
      rating: entry.rating,
      bundled: true
    }
  };
}

function downloadJsonPayload(payload, fallbackName = "desktop-board-theme", extension = ".dbtheme.json") {
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const rawName = String(payload?.theme?.name || payload?.pack?.name || fallbackName);
  const safeName = rawName.replace(/[^\wа-яё-]+/gi, "-").replace(/^-+|-+$/g, "") || fallbackName;
  link.href = url;
  link.download = `${safeName}${extension}`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function applyThemeCatalogTranslations() {
  if (!themeCatalogModal) {
    return;
  }

  setText("themeCatalogTitle", "themeCatalog");
  if (themeCatalogHelp) {
    themeCatalogHelp.textContent = t("themeCatalogHelp");
  }
  closeThemeCatalogButton?.setAttribute("aria-label", t("themeCatalogClose"));
  if (themeCatalogImportFileButton) {
    themeCatalogImportFileButton.textContent = t("importTheme");
  }
  if (themeCatalogImportPackageButton) {
    themeCatalogImportPackageButton.textContent = t("importThemePackage");
  }
  if (themeCatalogUploadButton) {
    themeCatalogUploadButton.textContent = t("themeCatalogUpload");
  }
  if (themeCatalogBrowseTab) {
    themeCatalogBrowseTab.textContent = t("catalogBrowseTab");
  }
  if (themeCatalogInstalledTab) {
    themeCatalogInstalledTab.textContent = t("catalogInstalledTab");
  }
  if (themeCatalogCloseFooterButton) {
    themeCatalogCloseFooterButton.textContent = t("cancel");
  }
}

function refreshThemeCatalogTabs() {
  themeCatalogBrowseTab?.classList.toggle("is-active", themeCatalogActiveTab === "browse");
  themeCatalogInstalledTab?.classList.toggle("is-active", themeCatalogActiveTab === "installed");
}

function renderThemeCatalogPreview(previewElement, entry) {
  if (!previewElement) {
    return;
  }

  const scheme = getBundledThemeCatalogColorScheme(entry);
  const noteColors = scheme.colors.note || defaultSettings.colors.note;
  const tasksColors = scheme.colors.tasks || defaultSettings.colors.tasks;
  const groupColors = scheme.colors.group || defaultSettings.colors.group;
  previewElement.style.setProperty("--catalog-bg", scheme.backgroundColor);
  previewElement.style.setProperty("--catalog-line", scheme.connectionColor);
  previewElement.style.setProperty("--catalog-note-header", noteColors.header);
  previewElement.style.setProperty("--catalog-note-body", noteColors.body);
  previewElement.style.setProperty("--catalog-task-header", tasksColors.header);
  previewElement.style.setProperty("--catalog-task-body", tasksColors.body);
  previewElement.style.setProperty("--catalog-group-header", groupColors.header);
  previewElement.style.setProperty("--catalog-group-body", groupColors.body);
}

function renderThemeInstalledCatalog() {
  if (!themeCatalogGrid) {
    return;
  }

  themeCatalogGrid.replaceChildren();
  const installedThemes = getInstalledThemes();
  if (!installedThemes.length) {
    const empty = document.createElement("div");
    empty.className = "catalog-empty";
    empty.textContent = t("themeCatalogInstalledEmpty");
    themeCatalogGrid.appendChild(empty);
    return;
  }

  installedThemes.forEach((theme) => {
    const card = document.createElement("article");
    card.className = "theme-catalog-card";

    const preview = document.createElement("div");
    preview.className = "theme-catalog-preview theme-catalog-preview-classic";
    const scheme = theme.colorScheme || normalizeColorScheme({ visualTheme: theme.visualTheme });
    renderThemeCatalogPreview(preview, {
      previewKind: "classic",
      visualTheme: theme.visualTheme,
      colorSchemeId: scheme.id
    });
    preview.style.setProperty("--catalog-bg", scheme.backgroundColor);
    preview.style.setProperty("--catalog-line", scheme.connectionColor);
    preview.innerHTML = `
      <div class="theme-catalog-preview-group"></div>
      <div class="theme-catalog-preview-card theme-catalog-preview-card-a"><span></span><p></p></div>
      <div class="theme-catalog-preview-card theme-catalog-preview-card-b"><span></span><p></p></div>
      <svg class="theme-catalog-preview-connection" viewBox="0 0 180 120" aria-hidden="true">
        <path d="M42 70 C78 36 108 104 144 58" />
      </svg>
    `;

    const title = document.createElement("h3");
    title.textContent = theme.name || t("themeCatalog");

    const meta = document.createElement("div");
    meta.className = "theme-catalog-meta";
    const source = document.createElement("span");
    source.textContent = theme.source === "bundled" ? t("themeCatalogBuiltIn") : t("cardCatalogInstalled");
    const active = document.createElement("span");
    active.textContent = state.settings.activeVisualThemeId === theme.id ? t("catalogActive") : theme.id;
    meta.append(source, active);

    const description = document.createElement("p");
    description.className = "theme-catalog-description";
    description.textContent = t("themeCatalogInstalledDescription");

    const actions = document.createElement("div");
    actions.className = "theme-catalog-actions";
    const applyButton = document.createElement("button");
    applyButton.type = "button";
    applyButton.textContent = t("themeCatalogApply");
    applyButton.addEventListener("click", () => {
      void applyInstalledTheme(theme, t("themeCatalogApplied", { name: theme.name }));
    });

    const exportButton = document.createElement("button");
    exportButton.type = "button";
    exportButton.textContent = t("themeCatalogDownload");
    exportButton.addEventListener("click", () => {
      downloadJsonPayload({
        type: "desktop-board-theme",
        version: 1,
        theme: {
          name: theme.name,
          colorScheme: theme.colorScheme,
          visual: theme.visualTheme
        },
        catalog: {
          id: theme.id
        }
      }, theme.id);
    });

    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = t("themeCatalogRemove");
    removeButton.addEventListener("click", () => {
      void removeInstalledTheme(theme.id);
    });

    actions.append(applyButton, exportButton, removeButton);
    card.append(preview, title, meta, description, actions);
    themeCatalogGrid.appendChild(card);
  });
}

function renderThemeCatalog() {
  if (!themeCatalogGrid) {
    return;
  }

  refreshThemeCatalogTabs();
  themeCatalogGrid.replaceChildren();
  if (themeCatalogActiveTab === "installed") {
    renderThemeInstalledCatalog();
    return;
  }

  bundledThemeCatalog.forEach((entry) => {
    const card = document.createElement("article");
    card.className = "theme-catalog-card";

    const preview = document.createElement("div");
    preview.className = `theme-catalog-preview theme-catalog-preview-${entry.previewKind || "classic"}`;
    renderThemeCatalogPreview(preview, entry);
    preview.innerHTML = `
      <div class="theme-catalog-preview-group"></div>
      <div class="theme-catalog-preview-card theme-catalog-preview-card-a"><span></span><p></p></div>
      <div class="theme-catalog-preview-card theme-catalog-preview-card-b"><span></span><p></p></div>
      <svg class="theme-catalog-preview-connection" viewBox="0 0 180 120" aria-hidden="true">
        <path d="M42 70 C78 36 108 104 144 58" />
      </svg>
    `;

    const title = document.createElement("h3");
    title.textContent = getBundledThemeCatalogEntryName(entry);

    const meta = document.createElement("div");
    meta.className = "theme-catalog-meta";
    meta.innerHTML = `
      <span>${t("themeCatalogRating", { rating: entry.rating.toFixed(1) })}</span>
      <span>${t("themeCatalogDownloads", { count: entry.downloads })}</span>
      <span>${t("themeCatalogBuiltIn")}</span>
    `;

    const description = document.createElement("p");
    description.className = "theme-catalog-description";
    description.textContent = getBundledThemeCatalogEntryDescription(entry);

    const tags = document.createElement("div");
    tags.className = "theme-catalog-tags";
    (entry.tags || []).forEach((tagKey) => {
      const tag = document.createElement("span");
      tag.textContent = t(tagKey);
      tags.appendChild(tag);
    });

    const media = document.createElement("div");
    media.className = "theme-catalog-media";
    media.innerHTML = `
      <span>${t("themeCatalogScreenshots")}</span>
      <span>${t("themeCatalogVideoPreview")}</span>
    `;

    const actions = document.createElement("div");
    actions.className = "theme-catalog-actions";
    const applyButton = document.createElement("button");
    applyButton.type = "button";
    applyButton.textContent = t("themeCatalogApply");
    applyButton.addEventListener("click", () => {
      void applyThemeCatalogEntry(entry);
    });

    const exportButton = document.createElement("button");
    exportButton.type = "button";
    exportButton.textContent = t("themeCatalogDownload");
    exportButton.addEventListener("click", () => exportThemeCatalogEntry(entry));

    actions.append(applyButton, exportButton);
    card.append(preview, title, meta, description, tags, media, actions);
    themeCatalogGrid.appendChild(card);
  });
}

function openThemeCatalog() {
  if (!themeCatalogModal) {
    return;
  }

  closeContextMenu();
  applyThemeCatalogTranslations();
  renderThemeCatalog();
  setThemeCatalogStatus("");
  themeCatalogModal.hidden = false;
}

function closeThemeCatalog() {
  if (themeCatalogModal) {
    themeCatalogModal.hidden = true;
  }
  setThemeCatalogStatus("");
}

async function applyThemeCatalogEntry(entry) {
  try {
    const name = getBundledThemeCatalogEntryName(entry);
    await applyImportedThemePayload(
      getBundledThemeCatalogPayload(entry),
      t("themeCatalogApplied", { name })
    );
    setThemeCatalogStatus(t("themeCatalogApplied", { name }), "success");
    renderColorSchemePresets();
  } catch (error) {
    console.error("Failed to apply bundled theme:", error);
    setThemeCatalogStatus(t("themeImportFailed"), "error");
  }
}

function exportThemeCatalogEntry(entry) {
  try {
    const name = getBundledThemeCatalogEntryName(entry);
    downloadJsonPayload(getBundledThemeCatalogPayload(entry), entry.id);
    setThemeCatalogStatus(t("themeCatalogExported", { name }), "success");
  } catch (error) {
    console.error("Failed to export bundled theme:", error);
    setThemeCatalogStatus(t("themeEditorInvalidJson"), "error");
  }
}

function getDefaultThemeSettingsForRemoval() {
  return {
    backgroundColor: defaultSettings.backgroundColor,
    backgroundOpacity: defaultSettings.backgroundOpacity,
    connectionColor: defaultSettings.connectionColor,
    colors: clone(defaultSettings.colors),
    visualTheme: clone(defaultVisualTheme),
    activeVisualThemeId: ""
  };
}

function removeThemeFromCurrentState(themeId) {
  const normalizedId = normalizePackId(themeId, "theme");
  state.settings = normalizeSettings({
    ...state.settings,
    installedThemes: getInstalledThemes().filter((theme) => theme.id !== normalizedId),
    ...(state.settings.activeVisualThemeId === normalizedId ? getDefaultThemeSettingsForRemoval() : {})
  });
  applyDefaultColorsToInheritedCards();
  applyDefaultColorsToInheritedConnections();
  applySettings();
  applySystemTheme(currentSystemTheme);
  render();
}

async function removeInstalledTheme(themeId) {
  const normalizedId = normalizePackId(themeId, "theme");
  if (!normalizedId) {
    return;
  }

  const usage = window.desktopBoard?.scanCatalogUsage
    ? await window.desktopBoard.scanCatalogUsage({ themeId: normalizedId, currentState: state })
    : { themeBoards: state.settings.activeVisualThemeId === normalizedId ? [{ id: state.boardId, name: state.boardName }] : [] };
  const usedCount = Number(usage?.themeBoards?.length || 0);
  const message = usedCount > 0
    ? t("themeRemoveUsedConfirm", { count: usedCount })
    : t("themeRemoveConfirm");
  if (!window.confirm(message)) {
    return;
  }

  try {
    if (window.desktopBoard?.applyCatalogRemoval) {
      const result = await window.desktopBoard.applyCatalogRemoval({
        themeId: normalizedId,
        currentState: state,
        defaultThemeSettings: getDefaultThemeSettingsForRemoval()
      });
      if (result?.state) {
        applyLoadedBoardState(result.state, { persist: false, preserveViewport: true, preserveLocked: true });
      } else {
        removeThemeFromCurrentState(normalizedId);
        await saveState({ skipHistory: true });
      }
    } else {
      removeThemeFromCurrentState(normalizedId);
      await saveState({ skipHistory: true });
    }
    renderThemeCatalog();
    renderColorSchemePresets();
    setThemeCatalogStatus(t("themeCatalogRemoved"), "success");
  } catch (error) {
    reportError("theme.remove", error);
    setThemeCatalogStatus(t("themeCatalogRemoveFailed"), "error");
  }
}

async function importThemeFromCatalogFile() {
  const imported = await importThemeFromFile();
  if (imported) {
    setThemeCatalogStatus(t("themeImported"), "success");
    themeCatalogActiveTab = "installed";
    renderThemeCatalog();
  }
}

async function importThemePackageFromCatalogDirectory() {
  const imported = await importThemePackageFromDirectory();
  if (imported) {
    setThemeCatalogStatus(t("themePackageImportFinished"), "success");
    themeCatalogActiveTab = "installed";
    renderThemeCatalog();
  }
}

function setCardCatalogStatus(message = "", tone = "") {
  setStatusText(cardCatalogStatus, message, tone);
}

function getBundledCardCatalogPacks() {
  return bundledCardCatalog.map((pack) => normalizeCardPack({
    ...pack,
    source: "bundled",
    installedAt: 0
  }));
}

function getInstalledCardPacks() {
  return normalizeCardPacks(state.settings?.cardPacks);
}

function isCardPackInstalled(packId) {
  return getInstalledCardPacks().some((pack) => pack.id === packId);
}

function getCardPackPayload(pack) {
  const normalized = normalizeCardPack(pack);
  return {
    type: "desktop-board-card-pack",
    version: 1,
    pack: {
      ...normalized,
      installedAt: undefined
    }
  };
}

function applyCardCatalogTranslations() {
  if (!cardCatalogModal) {
    return;
  }

  setText("cardCatalogTitle", "cardCatalog");
  if (cardCatalogHelp) {
    cardCatalogHelp.textContent = t("cardCatalogHelp");
  }
  closeCardCatalogButton?.setAttribute("aria-label", t("cardCatalogClose"));
  if (cardCatalogImportButton) {
    cardCatalogImportButton.textContent = t("cardCatalogImport");
  }
  if (cardCatalogUploadButton) {
    cardCatalogUploadButton.textContent = t("cardCatalogUpload");
  }
  if (cardCatalogBrowseTab) {
    cardCatalogBrowseTab.textContent = t("catalogBrowseTab");
  }
  if (cardCatalogInstalledTab) {
    cardCatalogInstalledTab.textContent = t("catalogInstalledTab");
  }
  if (cardCatalogCloseFooterButton) {
    cardCatalogCloseFooterButton.textContent = t("cancel");
  }
}

function refreshCardCatalogTabs() {
  cardCatalogBrowseTab?.classList.toggle("is-active", cardCatalogActiveTab === "browse");
  cardCatalogInstalledTab?.classList.toggle("is-active", cardCatalogActiveTab === "installed");
}

function getCardCatalogTemplateIcon(template) {
  return getCardTypeDefinition(template.kind).icon || "";
}

function renderCardCatalogTemplateList(pack, container) {
  const list = document.createElement("div");
  list.className = "card-catalog-template-list";

  pack.templates.forEach((template) => {
    const item = document.createElement("div");
    item.className = "card-catalog-template";

    const icon = document.createElement("span");
    icon.className = "card-catalog-template-icon";
    icon.innerHTML = getCardCatalogTemplateIcon(template);

    const text = document.createElement("div");
    text.className = "card-catalog-template-text";
    const title = document.createElement("strong");
    title.textContent = getCardTemplateDisplayName(template);
    const description = document.createElement("span");
    description.textContent = getCardTemplateDescription(template) || t(getCardTypeDefinition(template.kind).labelKey);
    text.append(title, description);

    const createButton = document.createElement("button");
    createButton.type = "button";
    createButton.textContent = t("cardCatalogCreate");
    createButton.addEventListener("click", () => {
      createCardFromTemplate(template, null, { packId: pack.id, templateId: template.id });
      setCardCatalogStatus(t("cardCatalogTemplateCreated", { name: getCardTemplateDisplayName(template) }), "success");
    });

    item.append(icon, text, createButton);
    list.appendChild(item);
  });

  container.appendChild(list);
}

function renderCardCatalogPack(pack, { bundled = false } = {}) {
  const card = document.createElement("article");
  card.className = "card-catalog-card";
  card.dataset.source = bundled ? "bundled" : "installed";

  const titleRow = document.createElement("div");
  titleRow.className = "card-catalog-title-row";
  const title = document.createElement("h3");
  title.textContent = getCardPackDisplayName(pack);
  const source = document.createElement("span");
  source.textContent = bundled ? t("cardCatalogBuiltIn") : t("cardCatalogInstalled");
  titleRow.append(title, source);

  const meta = document.createElement("div");
  meta.className = "card-catalog-meta";
  [
    t("cardCatalogAuthor", { author: pack.author }),
    t("themeCatalogRating", { rating: pack.rating.toFixed(1) }),
    t("themeCatalogDownloads", { count: pack.downloads }),
    t("cardCatalogTemplateCount", { count: pack.templates.length })
  ].forEach((textValue) => {
    const item = document.createElement("span");
    item.textContent = textValue;
    meta.appendChild(item);
  });

  const description = document.createElement("p");
  description.className = "card-catalog-description";
  description.textContent = getCardPackDescription(pack);

  const tags = document.createElement("div");
  tags.className = "card-catalog-tags";
  pack.tags.forEach((tagValue) => {
    const tag = document.createElement("span");
    tag.textContent = t(tagValue);
    tags.appendChild(tag);
  });

  const actions = document.createElement("div");
  actions.className = "card-catalog-actions";
  const installed = isCardPackInstalled(pack.id);
  const installButton = document.createElement("button");
  installButton.type = "button";
  installButton.textContent = installed ? t("cardCatalogInstalled") : t("cardCatalogInstall");
  installButton.disabled = installed;
  installButton.addEventListener("click", () => {
    void installCardPack(pack);
  });

  const exportButton = document.createElement("button");
  exportButton.type = "button";
  exportButton.textContent = t("cardCatalogExport");
  exportButton.addEventListener("click", () => exportCardPack(pack));

  actions.append(installButton, exportButton);
  if (!bundled) {
    const removeButton = document.createElement("button");
    removeButton.type = "button";
    removeButton.textContent = t("cardCatalogRemove");
    removeButton.addEventListener("click", () => {
      void removeCardPack(pack.id);
    });
    actions.appendChild(removeButton);
  }

  card.append(titleRow, meta, description, tags, actions);
  renderCardCatalogTemplateList(pack, card);
  return card;
}

function renderInstalledCardCatalog() {
  if (!cardCatalogGrid) {
    return;
  }

  cardCatalogGrid.replaceChildren();
  const installedPacks = getInstalledCardPacks();
  if (!installedPacks.length) {
    const empty = document.createElement("div");
    empty.className = "catalog-empty";
    empty.textContent = t("cardCatalogInstalledEmpty");
    cardCatalogGrid.appendChild(empty);
    return;
  }

  installedPacks.forEach((pack) => {
    cardCatalogGrid.appendChild(renderCardCatalogPack(pack, { bundled: false, installedView: true }));
  });
}

function renderCardCatalog() {
  if (!cardCatalogGrid) {
    return;
  }

  refreshCardCatalogTabs();
  cardCatalogGrid.replaceChildren();
  if (cardCatalogActiveTab === "installed") {
    renderInstalledCardCatalog();
    return;
  }

  getBundledCardCatalogPacks().forEach((pack) => {
    cardCatalogGrid.appendChild(renderCardCatalogPack(pack, { bundled: true }));
  });
}

function openCardCatalog() {
  if (!cardCatalogModal) {
    return;
  }

  closeContextMenu();
  applyCardCatalogTranslations();
  renderCardCatalog();
  setCardCatalogStatus("");
  cardCatalogModal.hidden = false;
}

function closeCardCatalog() {
  if (cardCatalogModal) {
    cardCatalogModal.hidden = true;
  }
  setCardCatalogStatus("");
}

async function installCardPack(pack) {
  const normalized = normalizeCardPack({
    ...pack,
    source: pack.source || "local",
    installedAt: Date.now()
  });
  const nextPacks = [
    ...getInstalledCardPacks().filter((item) => item.id !== normalized.id),
    normalized
  ];
  const templateCreateIds = normalized.templates.map((template) => getCardTemplateCreateId(normalized.id, template.id));
  state.settings = normalizeSettings({
    ...state.settings,
    cardPacks: nextPacks,
    quickCreateKinds: normalizeQuickCreateKinds([
      ...state.settings.quickCreateKinds.filter((kind) => !isCardTemplateCreateIdForPack(kind, normalized.id)),
      ...templateCreateIds
    ], nextPacks),
    toolbarCreateKinds: normalizeToolbarCreateKinds([
      ...state.settings.toolbarCreateKinds.filter((kind) => !isCardTemplateCreateIdForPack(kind, normalized.id)),
      ...templateCreateIds
    ], nextPacks)
  });
  await saveState({ skipHistory: true });
  applyToolbarCreateVisibility();
  renderQuickCreateSettings();
  renderToolbarCreateSettings();
  cardCatalogActiveTab = "installed";
  renderCardCatalog();
  setCardCatalogStatus(t("cardCatalogInstalledStatus", { name: getCardPackDisplayName(normalized) }), "success");
}

function removeCardPackFromStateSource(sourceState, packId) {
  const normalizedPackId = normalizePackId(packId, "pack");
  const removedCardIds = new Set(
    (Array.isArray(sourceState.cards) ? sourceState.cards : [])
      .filter((card) => card.sourceCardPackId === normalizedPackId)
      .map((card) => card.id)
  );
  sourceState.settings = normalizeSettings({
    ...sourceState.settings,
    cardPacks: normalizeCardPacks(sourceState.settings?.cardPacks).filter((pack) => pack.id !== normalizedPackId),
    quickCreateKinds: (sourceState.settings?.quickCreateKinds || []).filter((kind) => !isCardTemplateCreateIdForPack(kind, normalizedPackId)),
    toolbarCreateKinds: (sourceState.settings?.toolbarCreateKinds || []).filter((kind) => !isCardTemplateCreateIdForPack(kind, normalizedPackId))
  });
  if (removedCardIds.size) {
    sourceState.cards = sourceState.cards.filter((card) => !removedCardIds.has(card.id));
    sourceState.connections = (Array.isArray(sourceState.connections) ? sourceState.connections : []).filter((connection) => {
      const anchors = [connection.from, connection.to];
      return anchors.every((anchor) => !(anchor?.type === "card" && removedCardIds.has(anchor.cardId)));
    });
    sourceState.cards.forEach((card) => {
      if (Array.isArray(card.references)) {
        card.references = card.references.filter((id) => !removedCardIds.has(id));
      }
      if (card.commentAttachment && removedCardIds.has(card.commentAttachment.cardId)) {
        card.commentAttachment = null;
      }
    });
  }
  return sourceState;
}

async function removeCardPack(packId) {
  const normalizedPackId = normalizePackId(packId, "pack");
  const usage = window.desktopBoard?.scanCatalogUsage
    ? await window.desktopBoard.scanCatalogUsage({ cardPackId: normalizedPackId, currentState: state })
    : {
      cardPackBoards: [{
        id: state.boardId,
        name: state.boardName,
        cardCount: state.cards.filter((card) => card.sourceCardPackId === normalizedPackId).length
      }].filter((item) => item.cardCount > 0)
    };
  const cardCount = Number(usage?.cardPackCardCount || 0);
  const message = cardCount > 0
    ? t("cardPackRemoveUsedConfirm", { count: cardCount })
    : t("cardPackRemoveConfirm");
  if (!window.confirm(message)) {
    return;
  }

  try {
    if (window.desktopBoard?.applyCatalogRemoval) {
      const result = await window.desktopBoard.applyCatalogRemoval({
        cardPackId: normalizedPackId,
        currentState: state
      });
      if (result?.state) {
        applyLoadedBoardState(result.state, { persist: false, preserveViewport: true, preserveLocked: true });
      } else {
        state = removeCardPackFromStateSource(state, normalizedPackId);
        await saveState({ skipHistory: true });
      }
    } else {
      state = removeCardPackFromStateSource(state, normalizedPackId);
      await saveState({ skipHistory: true });
    }
    applyToolbarCreateVisibility();
    renderQuickCreateSettings();
    renderToolbarCreateSettings();
    renderCardCatalog();
    setCardCatalogStatus(t("cardCatalogRemoved"), "success");
  } catch (error) {
    reportError("cardPack.remove", error);
    setCardCatalogStatus(t("cardCatalogRemoveFailed"), "error");
  }
}

function exportCardPack(pack) {
  downloadJsonPayload(getCardPackPayload(pack), pack.id, ".dbcardpack.json");
  setCardCatalogStatus(t("cardCatalogExported", { name: getCardPackDisplayName(pack) }), "success");
}

async function importCardPackFromFile() {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".json,.dbcardpack,application/json";
  const file = await new Promise((resolve) => {
    input.addEventListener("change", () => resolve(input.files?.[0] || null), { once: true });
    input.click();
  });
  if (!file) {
    return false;
  }

  try {
    const payload = JSON.parse(await file.text());
    const pack = normalizeCardPackPayload(payload);
    await installCardPack(pack);
    cardCatalogActiveTab = "installed";
    renderCardCatalog();
    setCardCatalogStatus(t("cardCatalogImported", { name: getCardPackDisplayName(pack) }), "success");
    return true;
  } catch (error) {
    console.error("Failed to import card pack:", error);
    setCardCatalogStatus(t("cardCatalogImportFailed"), "error");
    return false;
  }
}

function applyThemeEditorTranslations() {
  if (!themeEditorModal) {
    return;
  }

  setText("themeEditorTitle", "themeEditorTitle");
  setText("themeEditorNameLabel", "themeEditorName");
  setText("themeEditorShapeTitle", "themeEditorShape");
  setText("themeEditorCardBackgroundsTitle", "themeEditorCardBackgrounds");
  setText("themeHeaderAssetLabel", "themeHeaderAsset");
  setText("themeBodyAssetLabel", "themeBodyAsset");
  setText("themeEditorCardBackgroundsHelp", "themeEditorCardBackgroundsHelp");
  setText("themeAssetsJsonLabel", "themeAssetsJson");
  setText("themePreviewTitle", "themePreview");
  setText("themeEditorConnectionsTitle", "themeEditorConnections");
  setText("themeEditorInteractiveTitle", "themeEditorInteractive");
  setText("themeBuilderTitle", "themeBuilderTitle");
  setText("themeBuilderHelp", "themeBuilderHelp");
  setText("themeActorPresetLabel", "themeActorPreset");
  setText("themeActorEnhancerLabel", "themeActorEnhancer");
  setText("themeEffectPresetLabel", "themeEffectPreset");
  setText("themeCardRadiusLabel", "themeCardRadius");
  setText("themePanelRadiusLabel", "themePanelRadius");
  setText("themeButtonRadiusLabel", "themeButtonRadius");
  setText("themeCardBorderWidthLabel", "themeCardBorderWidth");
  setText("themeCardHeaderHeightLabel", "themeCardHeaderHeight");
  setText("themeGroupHeaderHeightLabel", "themeGroupHeaderHeight");
  setText("themeIconScaleLabel", "themeIconScale");
  setText("themeShadowLabel", "themeShadow");
  setText("themeStrokeWidthLabel", "themeStrokeWidth");
  setText("themeSelectedStrokeWidthLabel", "themeSelectedStrokeWidth");
  setText("themeDraftStrokeWidthLabel", "themeDraftStrokeWidth");
  setText("themeOutlineWidthLabel", "themeOutlineWidth");
  setText("themeWaypointRadiusLabel", "themeWaypointRadius");
  setText("themeMarkerScaleLabel", "themeMarkerScale");
  setText("themeLineStyleLabel", "themeLineStyle");
  setText("themeInteractiveEnabledLabel", "themeInteractiveEnabled");
  setText("themeInteractiveFpsLabel", "themeInteractiveFps");
  setText("themeBackgroundTypeLabel", "themeBackgroundType");
  setText("themeBackgroundColorLabel", "themeBackgroundColor");
  setText("themeBackgroundOpacityLabel", "themeBackgroundOpacity");
  setText("themeParticleColorLabel", "themeParticleColor");
  setText("themeParticleCountLabel", "themeParticleCount");
  setText("themeActorsJsonLabel", "themeActorsJson");
  setText("themeReactionsJsonLabel", "themeReactionsJson");
  setText("themeCardEffectsJsonLabel", "themeCardEffectsJson");
  setText("themeEditorInteractiveHelp", "themeEditorInteractiveHelp");

  closeThemeEditorButton?.setAttribute("aria-label", t("themeEditorTitle"));
  if (themeEditorLoadCurrentButton) {
    themeEditorLoadCurrentButton.textContent = t("themeEditorLoadCurrent");
  }
  if (themeEditorLoadDefaultButton) {
    themeEditorLoadDefaultButton.textContent = t("themeEditorLoadDefault");
  }
  if (themePickHeaderAssetButton) {
    themePickHeaderAssetButton.textContent = t("themePickAsset");
  }
  if (themePickBodyAssetButton) {
    themePickBodyAssetButton.textContent = t("themePickAsset");
  }
  if (themeClearHeaderAssetButton) {
    themeClearHeaderAssetButton.textContent = t("themeClearAsset");
  }
  if (themeClearBodyAssetButton) {
    themeClearBodyAssetButton.textContent = t("themeClearAsset");
  }
  if (themeAddActorPresetButton) {
    themeAddActorPresetButton.textContent = t("themeAddActorPreset");
  }
  if (themeApplyActorEnhancerButton) {
    themeApplyActorEnhancerButton.textContent = t("themeApplyActorEnhancer");
  }
  if (themeApplyEffectPresetButton) {
    themeApplyEffectPresetButton.textContent = t("themeApplyEffectPreset");
  }
  if (themeFormatJsonButton) {
    themeFormatJsonButton.textContent = t("themeFormatJson");
  }
  if (themeValidateJsonButton) {
    themeValidateJsonButton.textContent = t("themeValidateJson");
  }
  if (themeEditorApplyButton) {
    themeEditorApplyButton.textContent = t("apply");
  }
  if (themeEditorExportButton) {
    themeEditorExportButton.textContent = t("exportColorScheme");
  }
  if (themeEditorCloseFooterButton) {
    themeEditorCloseFooterButton.textContent = t("cancel");
  }
}

function setThemeEditorStatus(message = "", tone = "") {
  setStatusText(themeEditorStatus, message, tone);
}

function setThemeEditorInputValue(input, value) {
  if (input) {
    input.value = String(value ?? "");
  }
}

function setThemeEditorNumberInput(input, value) {
  if (input) {
    input.value = String(value ?? 0);
  }
}

function setThemeAssetInput(input, asset = "") {
  if (!input) {
    return;
  }

  const safeAsset = normalizeThemeAssetPath(asset);
  input.dataset.asset = safeAsset;
  input.value = safeAsset
    ? (safeAsset.startsWith("data:image/") ? "embedded image" : safeAsset)
    : "";
}

function updateThemeAssetsJsonDefaultAsset(section, asset = "") {
  if (!themeAssetsJsonInput || !["cardHeaders", "cardBodies"].includes(section)) {
    return;
  }

  try {
    const assets = getThemeEditorAssetsJson();
    const group = assets[section] && typeof assets[section] === "object" && !Array.isArray(assets[section])
      ? { ...assets[section] }
      : {};
    if (asset) {
      group.default = asset;
    } else {
      delete group.default;
    }
    assets[section] = group;
    setThemeEditorJsonInput(themeAssetsJsonInput, assets);
  } catch {
    // Leave the user's broken JSON untouched; validation will report it.
  }
}

function fillThemeEditorFromTheme(theme = getVisualTheme(), statusKey = "") {
  if (!themeEditorModal) {
    return;
  }

  const normalized = normalizeVisualTheme(theme);
  themeEditorWorkingTheme = clone(normalized);
  const { tokens, connections, interactiveBackground } = normalized;
  const background = interactiveBackground.background || defaultVisualTheme.interactiveBackground.background;

  setThemeEditorInputValue(themeEditorNameInput, normalized.name || defaultVisualTheme.name);
  setThemeEditorNumberInput(themeCardRadiusInput, tokens.cardRadius);
  setThemeEditorNumberInput(themePanelRadiusInput, tokens.panelRadius);
  setThemeEditorNumberInput(themeButtonRadiusInput, tokens.buttonRadius);
  setThemeEditorNumberInput(themeCardBorderWidthInput, tokens.cardBorderWidth);
  setThemeEditorNumberInput(themeCardHeaderHeightInput, tokens.cardHeaderHeight);
  setThemeEditorNumberInput(themeGroupHeaderHeightInput, tokens.groupHeaderHeight);
  setThemeEditorNumberInput(themeIconScaleInput, tokens.iconScale);
  setThemeEditorInputValue(themeShadowInput, tokens.shadow);
  setThemeAssetInput(themeHeaderAssetInput, normalized.assets?.cardHeaders?.default || "");
  setThemeAssetInput(themeBodyAssetInput, normalized.assets?.cardBodies?.default || "");
  setThemeEditorJsonInput(themeAssetsJsonInput, normalized.assets || defaultVisualTheme.assets);

  setThemeEditorNumberInput(themeStrokeWidthInput, connections.strokeWidth);
  setThemeEditorNumberInput(themeSelectedStrokeWidthInput, connections.selectedStrokeWidth);
  setThemeEditorNumberInput(themeDraftStrokeWidthInput, connections.draftStrokeWidth);
  setThemeEditorNumberInput(themeOutlineWidthInput, connections.outlineWidth);
  setThemeEditorNumberInput(themeWaypointRadiusInput, connections.waypointRadius);
  setThemeEditorNumberInput(themeMarkerScaleInput, connections.markerScale);
  setThemeEditorInputValue(themeLineStyleInput, connections.lineStyle);

  if (themeInteractiveEnabledInput) {
    themeInteractiveEnabledInput.checked = interactiveBackground.enabled === true;
  }
  setThemeEditorNumberInput(themeInteractiveFpsInput, interactiveBackground.fps);
  setThemeEditorInputValue(themeBackgroundTypeInput, background.type || "none");
  setThemeEditorInputValue(themeBackgroundColorInput, isHexColor(background.color) ? background.color : defaultSettings.backgroundColor);
  setThemeEditorNumberInput(themeBackgroundOpacityInput, Number.isFinite(Number(background.opacity)) ? background.opacity : 1);
  setThemeEditorInputValue(themeParticleColorInput, isHexColor(background.particleColor) ? background.particleColor : getDefaultConnectionColor(defaultSettings.backgroundColor));
  setThemeEditorNumberInput(themeParticleCountInput, Number.isFinite(Number(background.particleCount)) ? background.particleCount : 60);
  setThemeEditorJsonInput(themeActorsJsonInput, interactiveBackground.actors || []);
  setThemeEditorJsonInput(themeReactionsJsonInput, interactiveBackground.reactions || []);
  setThemeEditorJsonInput(themeCardEffectsJsonInput, interactiveBackground.cardEffects || defaultVisualTheme.interactiveBackground.cardEffects);

  if (statusKey) {
    setThemeEditorStatus(t(statusKey), "success");
  } else {
    setThemeEditorStatus("");
  }
  updateThemeEditorPreview();
  updateThemeBuilderSummary();
}

function parseThemeEditorJson(input, fallback) {
  const text = String(input?.value || "").trim();
  if (!text) {
    return fallback;
  }
  return JSON.parse(text);
}

function setThemeEditorJsonInput(input, value) {
  setThemeEditorInputValue(input, JSON.stringify(value, null, 2));
}

function getThemeEditorActorsJson() {
  const actors = parseThemeEditorJson(themeActorsJsonInput, []);
  return Array.isArray(actors) ? actors : [];
}

function getThemeEditorReactionsJson() {
  const reactions = parseThemeEditorJson(themeReactionsJsonInput, []);
  return Array.isArray(reactions) ? reactions : [];
}

function getThemeEditorAssetsJson() {
  const assets = parseThemeEditorJson(themeAssetsJsonInput, {});
  return assets && typeof assets === "object" && !Array.isArray(assets) ? assets : {};
}

function getThemeEditorCardEffectsJson() {
  const effects = parseThemeEditorJson(themeCardEffectsJsonInput, defaultVisualTheme.interactiveBackground.cardEffects);
  return effects && typeof effects === "object" && !Array.isArray(effects)
    ? effects
    : defaultVisualTheme.interactiveBackground.cardEffects;
}

function countThemeAssetEntries(assets = {}) {
  if (!assets || typeof assets !== "object" || Array.isArray(assets)) {
    return 0;
  }

  return Object.values(assets).reduce((total, value) => {
    if (value && typeof value === "object" && !Array.isArray(value)) {
      return total + Object.values(value).filter(Boolean).length;
    }
    return total + (value ? 1 : 0);
  }, 0);
}

function updateThemeBuilderSummary() {
  if (!themeBuilderSummary) {
    return;
  }

  try {
    const actors = getThemeEditorActorsJson();
    const reactions = getThemeEditorReactionsJson();
    const assets = getThemeEditorAssetsJson();
    themeBuilderSummary.textContent = t("themeBuilderSummary", {
      actors: actors.length,
      reactions: reactions.length,
      assets: countThemeAssetEntries(assets)
    });
  } catch {
    themeBuilderSummary.textContent = t("themeEditorInvalidJson");
  }
}

function createUniqueThemeActorId(baseId, actors = []) {
  const safeBase = String(baseId || "actor").trim().replace(/[^\w-]/g, "").slice(0, 48) || "actor";
  const used = new Set(actors.map((actor) => actor?.id).filter(Boolean));
  if (!used.has(safeBase)) {
    return safeBase;
  }
  for (let index = 2; index <= 99; index += 1) {
    const candidate = `${safeBase}-${index}`;
    if (!used.has(candidate)) {
      return candidate;
    }
  }
  return `${safeBase}-${Date.now().toString(36).slice(-4)}`;
}

function getThemeActorTransitionPreset() {
  return {
    enabled: true,
    maxJumpDistance: 420,
    jumpDurationMs: 650,
    jumpArcHeight: 90,
    climbDurationMs: 700,
    dropDurationMs: 520,
    cardToConnectionDistance: 180,
    connectionToCardDistance: 180,
    animations: {
      jumpStart: "jumpStart",
      jumpAir: "jumpAir",
      land: "land",
      climbUp: "climbUp",
      dropDown: "dropDown"
    }
  };
}

function getThemeActorReactionPreset(includeTransitions = false) {
  return {
    default: "idle",
    moving: "walk",
    mouseNear: "walk",
    cardRest: "rest",
    notice: "notice",
    hunt: "hunt",
    rest: "rest",
    return: "walk",
    ...(includeTransitions
      ? {
        jump: "jumpAir",
        jumpStart: "jumpStart",
        jumpAir: "jumpAir",
        land: "land",
        climbUp: "climbUp",
        dropDown: "dropDown"
      }
      : {})
  };
}

function createThemeActorPreset(preset, actors = []) {
  if (preset === "orbitSprite") {
    return {
      id: createUniqueThemeActorId("orbit-sprite", actors),
      sprite: "",
      behavior: "orbitCard",
      count: 3,
      width: 42,
      height: 42,
      speed: 34,
      layer: "overlay",
      color: "#7aa884",
      opacity: 0.75,
      reactions: {
        default: "idle",
        orbit: "walk",
        moving: "walk"
      }
    };
  }

  if (preset === "growAroundCard") {
    return {
      id: createUniqueThemeActorId("card-growth", actors),
      sprite: "",
      behavior: "growAroundCard",
      count: 2,
      width: 90,
      height: 90,
      speed: 24,
      layer: "background",
      color: "#7aa884",
      opacity: 0.42,
      reactions: {
        default: "idle"
      }
    };
  }

  if (preset === "ambientWander") {
    return {
      id: createUniqueThemeActorId("ambient", actors),
      sprite: "",
      behavior: "wander",
      count: 10,
      width: 18,
      height: 18,
      speed: 22,
      layer: "background",
      color: "#7aa884",
      opacity: 0.45,
      reactions: {
        default: "idle",
        moving: "idle"
      }
    };
  }

  const id = createUniqueThemeActorId("surface-pet", actors);
  return {
    id,
    sprite: "",
    behavior: "surfaceWanderAndMouseHunt",
    count: 2,
    width: 72,
    height: 56,
    speed: 58,
    layer: "overlay",
    color: "#7aa884",
    surfaces: {
      cards: true,
      connections: true,
      board: true,
      connectionSnapDistance: 24
    },
    rest: {
      enabled: true,
      target: "cardEdge",
      intervalMs: [12000, 45000],
      durationMs: [5000, 18000],
      edge: "auto",
      offsetX: 0,
      offsetY: -8,
      animation: "rest"
    },
    mouse: {
      noticeRadius: 220,
      huntRadius: 160,
      noticeDelayMs: 600,
      loseInterestRadius: 300,
      huntSpeedMultiplier: 1.35,
      animations: {
        notice: "notice",
        hunt: "hunt"
      }
    },
    transitions: getThemeActorTransitionPreset(),
    animations: {
      idle: { type: "gif", asset: "petIdle" },
      walk: { type: "image", asset: "petWalk", flipByDirection: true },
      notice: { type: "gif", asset: "petNotice" },
      hunt: { type: "image", asset: "petHunt", flipByDirection: true },
      rest: { type: "gif", asset: "petRest", offsetY: 10 },
      jumpStart: { type: "gif", asset: "petJumpStart" },
      jumpAir: { type: "gif", asset: "petJumpAir" },
      land: { type: "gif", asset: "petLand" },
      climbUp: { type: "gif", asset: "petClimbUp" },
      dropDown: { type: "gif", asset: "petDropDown" }
    },
    reactions: getThemeActorReactionPreset(true),
    interactions: [
      {
        type: "avoidActors",
        target: "any",
        radius: 48,
        strength: 0.6
      },
      {
        type: "greetActor",
        target: "sameKind",
        radius: 42,
        cooldownMs: 12000,
        durationMs: [900, 1600],
        selfAnimation: "notice",
        otherAnimation: "notice"
      }
    ]
  };
}

function addThemeActorPreset() {
  try {
    const actors = getThemeEditorActorsJson();
    actors.push(createThemeActorPreset(themeActorPresetInput?.value || "surfacePet", actors));
    setThemeEditorJsonInput(themeActorsJsonInput, actors);
    if (themeInteractiveEnabledInput) {
      themeInteractiveEnabledInput.checked = true;
    }
    setThemeEditorStatus(t("themeBuilderActorAdded"), "success");
    updateThemeEditorPreview();
  } catch (error) {
    console.error("Failed to add actor preset:", error);
    setThemeEditorStatus(t("themeEditorInvalidJson"), "error");
  }
}

function applyThemeActorEnhancer() {
  try {
    const actors = getThemeEditorActorsJson();
    const actor = actors[actors.length - 1];
    if (!actor) {
      setThemeEditorStatus(t("themeBuilderNoActor"), "error");
      return;
    }

    const enhancer = themeActorEnhancerInput?.value || "transitions";
    if (enhancer === "transitions") {
      actor.transitions = getThemeActorTransitionPreset();
      actor.reactions = {
        ...(actor.reactions || {}),
        ...getThemeActorReactionPreset(true)
      };
    } else if (enhancer === "mouseHunt") {
      actor.behavior = "surfaceWanderAndMouseHunt";
      actor.surfaces = {
        cards: true,
        connections: true,
        board: true,
        connectionSnapDistance: 24,
        ...(actor.surfaces || {})
      };
      actor.mouse = {
        noticeRadius: 220,
        huntRadius: 160,
        noticeDelayMs: 600,
        loseInterestRadius: 300,
        huntSpeedMultiplier: 1.35,
        animations: {
          notice: "notice",
          hunt: "hunt"
        },
        ...(actor.mouse || {})
      };
      actor.reactions = {
        ...(actor.reactions || {}),
        ...getThemeActorReactionPreset(false)
      };
    } else if (enhancer === "rest") {
      actor.rest = {
        enabled: true,
        target: "cardEdge",
        intervalMs: [12000, 45000],
        durationMs: [5000, 18000],
        edge: "auto",
        offsetX: 0,
        offsetY: -8,
        animation: "rest",
        ...(actor.rest || {})
      };
      actor.reactions = {
        ...(actor.reactions || {}),
        cardRest: "rest",
        rest: "rest"
      };
    } else if (enhancer === "interactions") {
      const existing = Array.isArray(actor.interactions) ? actor.interactions : [];
      actor.interactions = [
        ...existing,
        {
          type: "avoidActors",
          target: "any",
          radius: 48,
          strength: 0.6
        },
        {
          type: "followActor",
          target: "sameKind",
          distance: 86,
          chance: 0.15,
          durationMs: [4000, 12000]
        }
      ].slice(0, 12);
    }

    setThemeEditorJsonInput(themeActorsJsonInput, actors);
    setThemeEditorStatus(t("themeBuilderEnhancerApplied"), "success");
    updateThemeEditorPreview();
  } catch (error) {
    console.error("Failed to apply actor enhancer:", error);
    setThemeEditorStatus(t("themeEditorInvalidJson"), "error");
  }
}

function applyThemeEffectPreset() {
  try {
    const preset = themeEffectPresetInput?.value || "portalLifecycle";
    const effects = getThemeEditorCardEffectsJson();
    const reactions = getThemeEditorReactionsJson();

    if (preset === "particlesLifecycle") {
      effects.create = {
        enabled: true,
        type: "particleBurst",
        anchor: "card.center",
        durationMs: 900,
        color: "#7aa884",
        count: 44,
        radius: 150,
        spread: 180
      };
      effects.delete = {
        enabled: true,
        type: "particleBurst",
        anchor: "card.center",
        durationMs: 900,
        color: "#d25b5b",
        count: 36,
        radius: 130,
        spread: 160
      };
    } else if (preset === "hoverGlow") {
      reactions.push({
        when: "cardHovered",
        do: {
          effect: "glow",
          anchor: "card.center",
          durationMs: 600,
          color: "#7aa884",
          opacity: 0.42,
          radius: 160
        },
        cooldownMs: 300
      });
    } else {
      effects.create = {
        enabled: true,
        type: "portal",
        anchor: "card.center",
        delayMs: 0,
        durationMs: 800,
        color: "#7aa884",
        opacity: 0.75,
        radius: 130
      };
      effects.delete = {
        enabled: true,
        type: "portal",
        anchor: "card.center",
        delayMs: 0,
        durationMs: 800,
        color: "#d25b5b",
        opacity: 0.75,
        radius: 130
      };
    }

    setThemeEditorJsonInput(themeCardEffectsJsonInput, effects);
    setThemeEditorJsonInput(themeReactionsJsonInput, reactions);
    if (themeInteractiveEnabledInput) {
      themeInteractiveEnabledInput.checked = true;
    }
    setThemeEditorStatus(t("themeBuilderEffectApplied"), "success");
    updateThemeEditorPreview();
  } catch (error) {
    console.error("Failed to apply theme effect preset:", error);
    setThemeEditorStatus(t("themeEditorInvalidJson"), "error");
  }
}

function formatThemeEditorJson() {
  try {
    setThemeEditorJsonInput(themeAssetsJsonInput, getThemeEditorAssetsJson());
    setThemeEditorJsonInput(themeActorsJsonInput, getThemeEditorActorsJson());
    setThemeEditorJsonInput(themeReactionsJsonInput, getThemeEditorReactionsJson());
    setThemeEditorJsonInput(themeCardEffectsJsonInput, getThemeEditorCardEffectsJson());
    setThemeEditorStatus(t("themeBuilderJsonFormatted"), "success");
    updateThemeEditorPreview();
  } catch (error) {
    console.error("Failed to format theme editor JSON:", error);
    setThemeEditorStatus(t("themeEditorInvalidJson"), "error");
  }
}

function validateThemeEditorTheme() {
  try {
    const theme = getVisualThemeFromEditor();
    setThemeEditorStatus(t("themeBuilderValid", {
      actors: theme.interactiveBackground.actors.length,
      reactions: theme.interactiveBackground.reactions.length,
      assets: countThemeAssetEntries(theme.assets)
    }), "success");
    updateThemeBuilderSummary();
  } catch (error) {
    console.error("Failed to validate edited theme:", error);
    setThemeEditorStatus(t("themeEditorInvalidJson"), "error");
  }
}

function getThemeEditorNumber(input, fallback) {
  const number = Number(input?.value);
  return Number.isFinite(number) ? number : fallback;
}

function getVisualThemeFromEditor() {
  const base = themeEditorWorkingTheme ? clone(themeEditorWorkingTheme) : getVisualTheme();
  const baseInteractive = base.interactiveBackground || defaultVisualTheme.interactiveBackground;
  const baseBackground = baseInteractive.background || defaultVisualTheme.interactiveBackground.background;
  const assetsFromEditor = {
    ...(base.assets || {}),
    ...getThemeEditorAssetsJson()
  };
  const actors = getThemeEditorActorsJson();
  const reactions = getThemeEditorReactionsJson();
  const cardEffects = getThemeEditorCardEffectsJson();

  return normalizeVisualTheme({
    ...base,
    name: themeEditorNameInput?.value?.trim() || t("exportedColorSchemeName"),
    assets: {
      ...assetsFromEditor,
      cardHeaders: {
        ...(assetsFromEditor.cardHeaders || {}),
        default: themeHeaderAssetInput?.dataset.asset || assetsFromEditor.cardHeaders?.default || ""
      },
      cardBodies: {
        ...(assetsFromEditor.cardBodies || {}),
        default: themeBodyAssetInput?.dataset.asset || assetsFromEditor.cardBodies?.default || ""
      }
    },
    tokens: {
      cardRadius: getThemeEditorNumber(themeCardRadiusInput, base.tokens.cardRadius),
      panelRadius: getThemeEditorNumber(themePanelRadiusInput, base.tokens.panelRadius),
      buttonRadius: getThemeEditorNumber(themeButtonRadiusInput, base.tokens.buttonRadius),
      cardBorderWidth: getThemeEditorNumber(themeCardBorderWidthInput, base.tokens.cardBorderWidth),
      cardHeaderHeight: getThemeEditorNumber(themeCardHeaderHeightInput, base.tokens.cardHeaderHeight),
      groupHeaderHeight: getThemeEditorNumber(themeGroupHeaderHeightInput, base.tokens.groupHeaderHeight),
      iconScale: getThemeEditorNumber(themeIconScaleInput, base.tokens.iconScale),
      shadow: themeShadowInput?.value || base.tokens.shadow
    },
    connections: {
      strokeWidth: getThemeEditorNumber(themeStrokeWidthInput, base.connections.strokeWidth),
      selectedStrokeWidth: getThemeEditorNumber(themeSelectedStrokeWidthInput, base.connections.selectedStrokeWidth),
      draftStrokeWidth: getThemeEditorNumber(themeDraftStrokeWidthInput, base.connections.draftStrokeWidth),
      outlineWidth: getThemeEditorNumber(themeOutlineWidthInput, base.connections.outlineWidth),
      waypointRadius: getThemeEditorNumber(themeWaypointRadiusInput, base.connections.waypointRadius),
      markerScale: getThemeEditorNumber(themeMarkerScaleInput, base.connections.markerScale),
      lineStyle: themeLineStyleInput?.value || base.connections.lineStyle
    },
    interactiveBackground: {
      ...baseInteractive,
      enabled: themeInteractiveEnabledInput?.checked === true,
      fps: getThemeEditorNumber(themeInteractiveFpsInput, baseInteractive.fps),
      background: {
        ...baseBackground,
        type: themeBackgroundTypeInput?.value || baseBackground.type || "none",
        color: themeBackgroundColorInput?.value || baseBackground.color || defaultSettings.backgroundColor,
        opacity: getThemeEditorNumber(themeBackgroundOpacityInput, baseBackground.opacity ?? 1),
        particleColor: themeParticleColorInput?.value || baseBackground.particleColor || getDefaultConnectionColor(defaultSettings.backgroundColor),
        particleCount: getThemeEditorNumber(themeParticleCountInput, baseBackground.particleCount ?? 60)
      },
      actors,
      reactions,
      cardEffects
    }
  });
}

function updateThemeEditorPreview() {
  if (!themePreviewCard) {
    return;
  }

  try {
    const theme = getVisualThemeFromEditor();
    const noteColors = getDefaultCardColors("note");
    const buttonPalette = getCardButtonPalette(noteColors.body);
    themePreviewCard.style.setProperty("--theme-card-radius", `${theme.tokens.cardRadius}px`);
    themePreviewCard.style.setProperty("--theme-card-border-width", `${theme.tokens.cardBorderWidth}px`);
    themePreviewCard.style.setProperty("--theme-card-header-height", `${theme.tokens.cardHeaderHeight}px`);
    themePreviewCard.style.setProperty("--theme-card-icon-scale", String(theme.tokens.iconScale));
    themePreviewCard.style.setProperty("--shadow", getThemeShadowValue(theme.tokens.shadow));
    themePreviewCard.style.setProperty("--card-header-color", noteColors.header);
    themePreviewCard.style.setProperty("--card-body-color", noteColors.body);
    themePreviewCard.style.setProperty("--card-header-text", getReadableTextColor(noteColors.header));
    themePreviewCard.style.setProperty("--card-body-text", getReadableTextColor(noteColors.body));
    themePreviewCard.style.setProperty("--card-button-bg", buttonPalette.background);
    themePreviewCard.style.setProperty("--card-button-hover-bg", buttonPalette.hoverBackground);
    themePreviewCard.style.setProperty("--card-button-border", buttonPalette.border);
    themePreviewCard.style.setProperty("--card-button-text", getReadableTextColor(buttonPalette.background));
    const headerAsset = theme.assets?.cardHeaders?.default || "";
    const bodyAsset = theme.assets?.cardBodies?.default || "";
    themePreviewCard.style.setProperty("--card-header-image", headerAsset ? `url("${headerAsset}")` : "none");
    themePreviewCard.style.setProperty("--card-body-image", bodyAsset ? `url("${bodyAsset}")` : "none");
    if (themeEditorStatus?.dataset.tone === "error") {
      setThemeEditorStatus("");
    }
    updateThemeBuilderSummary();
  } catch {
    setThemeEditorStatus(t("themeEditorInvalidJson"), "error");
  }
}

async function pickThemeSurfaceAsset(targetInput) {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = ".svg,.png,.webp,.gif,image/svg+xml,image/png,image/webp,image/gif";
  const file = await new Promise((resolve) => {
    input.addEventListener("change", () => resolve(input.files?.[0] || null), { once: true });
    input.click();
  });
  if (!file) {
    return;
  }

  const asset = await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(String(reader.result || "")), { once: true });
    reader.addEventListener("error", () => reject(reader.error || new Error("Failed to read file")), { once: true });
    reader.readAsDataURL(file);
  });
  setThemeAssetInput(targetInput, asset);
  if (targetInput === themeHeaderAssetInput) {
    updateThemeAssetsJsonDefaultAsset("cardHeaders", targetInput.dataset.asset || "");
  } else if (targetInput === themeBodyAssetInput) {
    updateThemeAssetsJsonDefaultAsset("cardBodies", targetInput.dataset.asset || "");
  }
  updateThemeEditorPreview();
}

function openThemeEditor() {
  closeContextMenu();
  fillThemeEditorFromTheme(getVisualTheme());
  applyThemeEditorTranslations();
  themeEditorModal.hidden = false;
  requestAnimationFrame(() => themeEditorNameInput?.focus());
}

function closeThemeEditor() {
  if (themeEditorModal) {
    themeEditorModal.hidden = true;
  }
  setThemeEditorStatus("");
}

async function applyThemeEditorTheme() {
  try {
    const visualTheme = getVisualThemeFromEditor();
    state.settings = normalizeSettings({
      ...state.settings,
      visualTheme
    });
    themeEditorWorkingTheme = clone(visualTheme);
    applySettings();
    render();
    await saveState({ skipHistory: true });
    setThemeEditorStatus(t("themeEditorApplied"), "success");
    setStatusText(settingsStatus, t("themeEditorApplied"), "success");
  } catch (error) {
    console.error("Failed to apply edited theme:", error);
    setThemeEditorStatus(t("themeEditorInvalidJson"), "error");
  }
}

function exportThemeEditorTheme() {
  try {
    const visualTheme = getVisualThemeFromEditor();
    const scheme = getColorSchemeFromInputs(visualTheme.name || t("exportedColorSchemeName"));
    const payload = {
      type: "desktop-board-theme",
      version: 1,
      theme: {
        name: visualTheme.name,
        colorScheme: scheme,
        visual: visualTheme
      }
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    const safeName = visualTheme.name.replace(/[^\wа-яё-]+/gi, "-").replace(/^-+|-+$/g, "") || "desktop-board-theme";
    link.href = url;
    link.download = `${safeName}.dbtheme.json`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
    setThemeEditorStatus(t("themeEditorExported"), "success");
  } catch (error) {
    console.error("Failed to export edited theme:", error);
    setThemeEditorStatus(t("themeEditorInvalidJson"), "error");
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
  if (sourceSchemaVersion < 10) {
    settings.quickCreateKinds = ensureCardKindInList(settings.quickCreateKinds, "chat", cardTypeRegistry);
    settings.toolbarCreateKinds = ensureCardKindInList(settings.toolbarCreateKinds, "chat", getToolbarCardTypes());
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
    account: normalizeAccountState(source.account),
    audit: normalizeAuditState(source.audit),
    groupHistory: normalizeGroupHistory(source.groupHistory),
    sharedGroupOperations: normalizeSharedGroupOperations(source.sharedGroupOperations),
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
  normalized.cards.forEach((card) => enforceSharedGroupLimits(card, normalized.account.subscriptionPlan));
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
  const allowedInteractiveBackgroundQualities = ["off", "low", "normal"];
  const themeMode = allowedThemeModes.includes(settings.themeMode) ? settings.themeMode : defaultSettings.themeMode;
  const languageMode = allowedLanguageModes.includes(settings.languageMode) ? settings.languageMode : defaultSettings.languageMode;
  const timeFormat = allowedTimeFormats.includes(settings.timeFormat) ? settings.timeFormat : defaultSettings.timeFormat;
  const interactiveBackgroundQuality = allowedInteractiveBackgroundQualities.includes(settings.interactiveBackgroundQuality)
    ? settings.interactiveBackgroundQuality
    : defaultSettings.interactiveBackgroundQuality;
  const backgroundColor = isHexColor(settings.backgroundColor) ? settings.backgroundColor : defaultSettings.backgroundColor;
  const parsedBackgroundOpacity = Number(settings.backgroundOpacity);
  const backgroundOpacity = Number.isFinite(parsedBackgroundOpacity)
    ? clamp(Math.round(parsedBackgroundOpacity), 0, 100)
    : defaultSettings.backgroundOpacity;
  const richTextFontFamily = normalizeRichTextDefaultFontFamily(settings.richTextFontFamily);
  const richTextFontSize = normalizeRichTextDefaultFontSize(settings.richTextFontSize);
  const cardPacks = normalizeSettingsCardPacks(settings);
  const quickCreateKinds = migrateLegacyCodeCreateKinds(settings.quickCreateKinds, cardPacks);
  const toolbarCreateKinds = migrateLegacyCodeCreateKinds(settings.toolbarCreateKinds, cardPacks);
  const installedThemes = normalizeInstalledThemes(settings.installedThemes);
  const activeVisualThemeId = installedThemes.some((theme) => theme.id === settings.activeVisualThemeId)
    ? settings.activeVisualThemeId
    : "";
  const legacyColorSources = {
    bookmark: sourceColors.bookmark || sourceColors.note,
    progress: sourceColors.progress || sourceColors.tasks,
    timer: sourceColors.timer || sourceColors.schedule,
    reminder: sourceColors.reminder || sourceColors.timer || sourceColors.schedule,
    clock: sourceColors.clock || sourceColors.timer || sourceColors.schedule,
    weather: sourceColors.weather || sourceColors.schedule,
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
    interactiveBackgroundQuality,
    connectionColor: isHexColor(settings.connectionColor) ? settings.connectionColor : getDefaultConnectionColor(backgroundColor),
    richTextFontFamily,
    richTextFontSize,
    visualTheme: normalizeVisualTheme(settings.visualTheme),
    activeVisualThemeId,
    installedThemes,
    snapToGrid: settings.snapToGrid !== false,
    historyEnabled: settings.historyEnabled !== false,
    quickCreateKinds: normalizeQuickCreateKinds(quickCreateKinds, cardPacks),
    toolbarCreateKinds: normalizeToolbarCreateKinds(toolbarCreateKinds, cardPacks),
    cardPacks,
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
  if (themeValidation.sanitizeThemeAssetPath) {
    return themeValidation.sanitizeThemeAssetPath(value);
  }
  if (typeof value !== "string") {
    return "";
  }

  const path = value.trim().replaceAll("\\", "/");
  if (/^data:image\/(png|webp|gif|svg\+xml);base64,/i.test(path)) {
    return path.length <= 700000 ? path : "";
  }
  if (
    !path
    || !path.startsWith("assets/")
    || path.includes("..")
    || /^[a-z][a-z0-9+.-]*:/i.test(path)
    || path.startsWith("/")
    || !/\.(svg|png|webp|gif)$/i.test(path)
  ) {
    return "";
  }

  return path.slice(0, 240);
}

function normalizeThemeAssetMap(source = {}, allowedKeys = null) {
  if (!source || typeof source !== "object" || Array.isArray(source)) {
    return {};
  }

  const output = {};
  Object.entries(source).slice(0, 80).forEach(([key, path]) => {
    const safeKey = String(key || "").trim().replace(/[^\w-]/g, "").slice(0, 80);
    if (!safeKey || (allowedKeys && !allowedKeys.has(safeKey))) {
      return;
    }
    const safePath = normalizeThemeAssetPath(path);
    if (safePath) {
      output[safeKey] = safePath;
    }
  });
  return output;
}

function normalizeThemeAssets(assets = {}) {
  const sourceIcons = assets && typeof assets === "object" && assets.icons && typeof assets.icons === "object"
    ? assets.icons
    : {};
  const icons = normalizeThemeAssetMap(sourceIcons, new Set(cardTypeRegistry.map((definition) => definition.kind)));

  const connection = assets && typeof assets === "object" ? assets.connection : null;
  return {
    icons,
    actors: normalizeThemeAssetMap(assets?.actors),
    backgrounds: normalizeThemeAssetMap(assets?.backgrounds),
    cardHeaders: normalizeThemeAssetMap(assets?.cardHeaders, new Set(["default", ...cardTypeRegistry.map((definition) => definition.kind)])),
    cardBodies: normalizeThemeAssetMap(assets?.cardBodies, new Set(["default", ...cardTypeRegistry.map((definition) => definition.kind)])),
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

function normalizeInteractiveBackgroundSurface(background = {}) {
  const source = background && typeof background === "object" ? background : {};
  const type = normalizeThemeEnum(source.type, ["none", "solid", "gradient", "image", "particles"], "none");
  const colors = Array.isArray(source.colors)
    ? source.colors.filter(isHexColor).slice(0, 4)
    : [];
  const color = isHexColor(source.color) ? source.color : defaultSettings.backgroundColor;
  const fallbackParticleColor = getDefaultConnectionColor(color);

  return {
    type,
    color,
    colors,
    asset: typeof source.asset === "string" ? source.asset.trim().replace(/[^\w-]/g, "").slice(0, 80) : "",
    opacity: normalizeThemeNumber(source.opacity, 1, 0, 1, 2),
    particleColor: isHexColor(source.particleColor) ? source.particleColor : fallbackParticleColor,
    particleCount: normalizeThemeNumber(source.particleCount, 60, 0, 240)
  };
}

function normalizeInteractiveBackgroundActor(actor = {}, index = 0) {
  const source = actor && typeof actor === "object" ? actor : {};
  const id = typeof source.id === "string" && source.id.trim()
    ? source.id.trim().replace(/[^\w-]/g, "").slice(0, 80)
    : `actor-${index + 1}`;
  const sprite = typeof source.sprite === "string" ? source.sprite.trim().replace(/[^\w-]/g, "").slice(0, 80) : "";
  const color = isHexColor(source.color) ? source.color : "#7aa884";
  const sourceAnimations = source.animations && typeof source.animations === "object" && !Array.isArray(source.animations)
    ? source.animations
    : {};
  const animations = {};
  Object.entries(sourceAnimations).slice(0, 16).forEach(([pose, animation]) => {
    const safePose = String(pose || "").trim().replace(/[^\w-]/g, "").slice(0, 40);
    const normalized = normalizeInteractiveBackgroundAnimation(animation);
    if (safePose && normalized) {
      animations[safePose] = normalized;
    }
  });
  const sourceReactions = source.reactions && typeof source.reactions === "object" && !Array.isArray(source.reactions)
    ? source.reactions
    : {};
  const reactions = themeValidation.normalizeReactionMap
    ? themeValidation.normalizeReactionMap(sourceReactions)
    : {};
  if (!themeValidation.normalizeReactionMap) {
    ["default", "moving", "mouseNear", "cardRest", "orbit", "appear", "disappear", "notice", "hunt", "rest", "return", "jump", "jumpStart", "jumpAir", "land", "climbUp", "dropDown"].forEach((key) => {
      const pose = typeof sourceReactions[key] === "string"
        ? sourceReactions[key].trim().replace(/[^\w-]/g, "").slice(0, 40)
        : "";
      if (pose) {
        reactions[key] = pose;
      }
    });
  }
  const surfaceOptions = themeValidation.normalizeSurfaceActorOptions
    ? themeValidation.normalizeSurfaceActorOptions(source)
    : {
      surfaces: {
        cards: true,
        connections: true,
        board: true,
        cardArea: "perimeter",
        connectionSnapDistance: 24
      },
      rest: {
        enabled: false,
        target: "cardEdge",
        intervalMs: [12000, 45000],
        durationMs: [5000, 18000],
        edge: "auto",
        offsetX: 0,
        offsetY: -8,
        animation: "rest"
      },
      mouse: {
        noticeRadius: 220,
        huntRadius: 160,
        noticeDelayMs: 600,
        loseInterestRadius: 300,
        huntSpeedMultiplier: 1.35,
        animations: {
          notice: "notice",
          hunt: "hunt"
        }
      }
    };
  const transitions = themeValidation.normalizeActorSurfaceTransitions
    ? themeValidation.normalizeActorSurfaceTransitions(source.transitions)
    : {
      enabled: false,
      maxJumpDistance: 420,
      jumpDurationMs: 650,
      jumpArcHeight: 90,
      climbDurationMs: 700,
      dropDurationMs: 520,
      connectionToCardDistance: 180,
      cardToConnectionDistance: 180,
      animations: {
        jumpStart: "jumpStart",
        jumpAir: "jumpAir",
        land: "land",
        climbUp: "climbUp",
        dropDown: "dropDown"
      }
    };

  return {
    id,
    sprite,
    animations,
    reactions,
    layer: normalizeThemeEnum(source.layer, ["background", "overlay"], "overlay"),
    behavior: normalizeThemeEnum(
      source.behavior,
      ["wander", "followMouse", "wanderAndFollowMouse", "restOnCard", "orbitCard", "growAroundCard", "surfaceWanderAndMouseHunt"],
      "wander"
    ),
    surfaces: surfaceOptions.surfaces,
    rest: surfaceOptions.rest,
    mouse: surfaceOptions.mouse,
    transitions,
    interactions: normalizeInteractiveActorInteractions(source.interactions),
    count: normalizeThemeNumber(source.count, 1, 0, 24),
    width: normalizeThemeNumber(source.width, 48, 12, 240),
    height: normalizeThemeNumber(source.height, 48, 12, 240),
    speed: normalizeThemeNumber(source.speed, 40, 0, 260),
    opacity: normalizeThemeNumber(source.opacity, 1, 0, 1, 2),
    color,
    tint: isHexColor(source.tint) ? source.tint : "",
    mouseInterestRadius: normalizeThemeNumber(source.mouseInterestRadius, 160, 0, 900),
    canRestOnCards: source.canRestOnCards !== false
  };
}

function normalizeInteractiveBackgroundAnimation(animation = {}) {
  if (themeValidation.normalizeActorAnimation) {
    return themeValidation.normalizeActorAnimation(animation);
  }
  const source = animation && typeof animation === "object" ? animation : {};
  const type = normalizeThemeEnum(source.type, ["gif", "image", "spritesheet"], "image");
  const asset = typeof source.asset === "string" ? source.asset.trim().replace(/[^\w-]/g, "").slice(0, 80) : "";
  if (!asset) {
    return null;
  }

  return {
    type,
    asset,
    frames: normalizeThemeNumber(source.frames, 1, 1, 240),
    fps: normalizeThemeNumber(source.fps, 12, 1, 60),
    columns: normalizeThemeNumber(source.columns, 0, 0, 64),
    frameWidth: normalizeThemeNumber(source.frameWidth, 0, 0, 4096),
    frameHeight: normalizeThemeNumber(source.frameHeight, 0, 0, 4096),
    loop: source.loop !== false,
    flipByDirection: source.flipByDirection === true,
    offsetX: normalizeThemeNumber(source.offsetX, 0, -240, 240),
    offsetY: normalizeThemeNumber(source.offsetY, 0, -240, 240),
    scale: normalizeThemeNumber(source.scale, 1, 0.1, 4, 2),
    opacity: normalizeThemeNumber(source.opacity, 1, 0, 1, 2)
  };
}

function normalizeInteractiveActorInteractions(interactions = []) {
  if (themeValidation.normalizeActorInteractions) {
    return themeValidation.normalizeActorInteractions(interactions);
  }
  return [];
}

function normalizeInteractiveBackgroundCardEffect(effect = {}, fallback = {}) {
  const source = effect && typeof effect === "object" ? effect : {};
  const type = normalizeThemeEnum(source.type, ["none", "portal", "fade", "scale", "slide", "particleBurst", "ripple", "glow", "pulse"], "none");
  return {
    enabled: source.enabled === true && type !== "none",
    type,
    delayMs: normalizeThemeNumber(source.delayMs, fallback.delayMs || 0, 0, interactiveBackgroundMaxCardEffectDelayMs),
    durationMs: normalizeThemeNumber(source.durationMs, fallback.durationMs || 600, 120, interactiveBackgroundMaxCardEffectDelayMs),
    color: isHexColor(source.color) ? source.color : fallback.color || "#7aa884",
    opacity: normalizeThemeNumber(source.opacity, fallback.opacity ?? 1, 0, 1, 2),
    count: normalizeThemeNumber(source.count, fallback.count || 24, 1, 120),
    radius: normalizeThemeNumber(source.radius, fallback.radius || 120, 8, 420),
    spread: normalizeThemeNumber(source.spread, fallback.spread || 140, 0, 480),
    asset: typeof source.asset === "string" ? source.asset.trim().replace(/[^\w-]/g, "").slice(0, 80) : "",
    animation: typeof source.animation === "string" ? source.animation.trim().replace(/[^\w-]/g, "").slice(0, 80) : ""
  };
}

function normalizeInteractiveBackgroundReactions(reactions = []) {
  if (themeValidation.normalizeThemeEventReactions) {
    return themeValidation.normalizeThemeEventReactions(reactions);
  }
  if (!Array.isArray(reactions)) {
    return [];
  }

  return reactions
    .slice(0, 64)
    .map((reaction, index) => {
      const source = reaction && typeof reaction === "object" && !Array.isArray(reaction) ? reaction : {};
      const when = normalizeThemeEnum(
        source.when,
        ["cardCreated", "cardDeleted", "cardMoved", "cardResized", "cardSelected", "cardDeselected", "cardHovered", "cardContentChanged", "cardGrouped", "cardUngrouped", "taskChecked", "taskUnchecked", "timerFinished", "reminderTriggered", "fileAttached", "urlLoaded"],
        ""
      );
      const effect = themeValidation.normalizeThemeEffect
        ? themeValidation.normalizeThemeEffect(source.do || source.effect || {})
        : null;
      if (!when || !effect?.enabled) {
        return null;
      }
      return {
        id: typeof source.id === "string" && source.id.trim() ? source.id.trim().replace(/[^\w-]/g, "").slice(0, 80) : `reaction-${index + 1}`,
        when,
        if: {
          cardKinds: [],
          tags: [],
          cardIds: []
        },
        do: effect,
        cooldownMs: normalizeThemeNumber(source.cooldownMs, 350, 0, 60000)
      };
    })
    .filter(Boolean);
}

function normalizeInteractiveBackground(config = {}) {
  const source = config && typeof config === "object" ? config : {};
  const actors = Array.isArray(source.actors)
    ? source.actors.slice(0, 24).map((actor, index) => normalizeInteractiveBackgroundActor(actor, index))
    : [];
  const fallbackEffects = defaultVisualTheme.interactiveBackground.cardEffects;
  const sourceEffects = source.cardEffects && typeof source.cardEffects === "object" && !Array.isArray(source.cardEffects)
    ? source.cardEffects
    : {};

  return {
    enabled: source.enabled === true,
    fps: normalizeThemeNumber(source.fps, defaultVisualTheme.interactiveBackground.fps, 10, 60),
    background: normalizeInteractiveBackgroundSurface(source.background),
    actors,
    reactions: normalizeInteractiveBackgroundReactions(source.reactions),
    cardEffects: {
      create: normalizeInteractiveBackgroundCardEffect(sourceEffects.create, fallbackEffects.create),
      delete: normalizeInteractiveBackgroundCardEffect(sourceEffects.delete, fallbackEffects.delete)
    }
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
    assets: normalizeThemeAssets(source.assets),
    interactiveBackground: normalizeInteractiveBackground(source.interactiveBackground)
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

function normalizeInstalledTheme(theme = {}, fallbackId = "theme") {
  const source = theme && typeof theme === "object" ? theme : {};
  const payload = normalizeThemePackage(source.payload || source);
  const visualTheme = payload.visualTheme || normalizeVisualTheme(source.visualTheme || source.visual);
  const colorScheme = payload.colorScheme || (source.colorScheme ? normalizeColorScheme(source.colorScheme) : null);
  const name = typeof source.name === "string" && source.name.trim()
    ? source.name.trim().slice(0, 80)
    : visualTheme?.name || colorScheme?.name || "Theme";
  const rawId = typeof source.id === "string" && source.id.trim()
    ? source.id
    : source.catalog?.id || colorScheme?.id || name;

  return {
    id: normalizePackId(rawId, fallbackId),
    name,
    source: typeof source.source === "string" ? source.source.slice(0, 40) : "imported",
    installedAt: Number.isFinite(Number(source.installedAt)) ? Number(source.installedAt) : Date.now(),
    colorScheme,
    visualTheme
  };
}

function normalizeInstalledThemes(themes = []) {
  if (!Array.isArray(themes)) {
    return [];
  }

  const seen = new Set();
  return themes
    .slice(0, 60)
    .map((theme, index) => normalizeInstalledTheme(theme, `theme-${index + 1}`))
    .filter((theme) => {
      if (!theme.id || seen.has(theme.id)) {
        return false;
      }
      seen.add(theme.id);
      return true;
    });
}

function getInstalledThemes() {
  return normalizeInstalledThemes(state.settings?.installedThemes);
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

  if (normalized.kind === "chat") {
    normalized.chatMessages = normalizeChatMessages(normalized.chatMessages);
    normalized.sharedGroupId = typeof normalized.sharedGroupId === "string" ? normalized.sharedGroupId.slice(0, 160) : "";
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

  if (normalized.kind === "clock") {
    Object.assign(normalized, normalizeClockFields(normalized));
  }

  if (normalized.kind === "weather") {
    Object.assign(normalized, normalizeWeatherFields(normalized));
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

  if (normalized.kind === "group") {
    normalized.sharedGroup = normalizeSharedGroup(normalized.sharedGroup, normalized.id);
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

function getAuditChatMessages(messages = []) {
  return normalizeChatMessages(messages).map((message) => ({
    authorId: message.author.id,
    authorName: message.author.name,
    text: message.text,
    createdAt: message.createdAt,
    editedAt: message.editedAt,
    deletedAt: message.deletedAt
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
    case "chat":
      return {
        ...base,
        sharedGroupId: getAuditText(card.sharedGroupId),
        chatMessages: getAuditChatMessages(card.chatMessages)
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
    case "clock":
      return {
        ...base,
        clockTimeZone: normalizeClockTimeZone(card.clockTimeZone),
        clockShowSeconds: card.clockShowSeconds !== false
      };
    case "weather":
      return {
        ...base,
        weatherLocation: normalizeWeatherLocation(card.weatherLocation),
        weatherUnits: normalizeWeatherUnits(card.weatherUnits)
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
      return {
        ...base,
        sharedGroup: isGroupShared(card)
          ? {
            id: card.sharedGroup.id,
            role: card.sharedGroup.role,
            status: card.sharedGroup.status
          }
          : null
      };
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

function recordGroupMembershipAudit(actor, at, options = {}) {
  const recordHistory = options.recordHistory !== false;
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

  entries.forEach((entry) => {
    const group = cardById.get(entry.groupId);
    if (!isGroupShared(group)) {
      return;
    }
    appendSharedGroupOperation(group, `membership.${entry.action}`, "membership", `${entry.groupId}:${entry.cardId}`, {
      entry
    }, { actor, at });
  });

  if (recordHistory && entries.length) {
    state.groupHistory = normalizeGroupHistory([
      ...(Array.isArray(state.groupHistory) ? state.groupHistory : []),
      ...entries
    ]);
  }
}

function recordAuditChanges() {
  const recordHistory = isHistoryRecordingEnabled();
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
      if (recordHistory) {
        appendCardHistoryEntry(card, {
          at: now,
          actor,
          kind: "created",
          changes: []
        });
      }
      appendSharedGroupCardOperation(card, "card.created", {}, { actor, at: now });
      return;
    }

    const changes = getAuditFieldChanges(previous, current);
    if (!changes.length) {
      return;
    }

    card.updatedAt = now;
    card.updatedBy = actor;
    if (recordHistory) {
      appendCardHistoryEntry(card, {
        at: now,
        actor,
        kind: "updated",
        changes
      });
    }
    appendSharedGroupCardOperation(card, "card.updated", { changes }, { actor, at: now });
  });

  recordGroupMembershipAudit(actor, now, { recordHistory });
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

function getSharedGroupBySharedId(sharedGroupId) {
  if (!sharedGroupId) {
    return null;
  }

  return state.cards.find((card) => isGroupShared(card) && card.sharedGroup.id === sharedGroupId) || null;
}

function getSharedGroupByLocalOrSharedId(groupId) {
  if (!groupId) {
    return null;
  }

  return state.cards.find((card) => isGroupShared(card) && (card.id === groupId || card.sharedGroup.id === groupId)) || null;
}

function getSharedGroupForCard(card) {
  if (!card) {
    return null;
  }

  if (isGroupShared(card)) {
    return card;
  }

  if (card.kind === "chat" && card.sharedGroupId) {
    const directGroup = getSharedGroupByLocalOrSharedId(card.sharedGroupId);
    if (directGroup) {
      return directGroup;
    }
  }

  return state.cards
    .filter((group) => isGroupShared(group) && group.id !== card.id && isCardInsideGroup(card, group))
    .sort((left, right) => (left.width * left.height) - (right.width * right.height))[0] || null;
}

function serializeCardForSharedGroup(card, group) {
  const snapshot = clone(card);
  snapshot.sharedGroupOffset = {
    x: Math.round(card.x - group.x),
    y: Math.round(card.y - group.y)
  };
  return snapshot;
}

function isConnectionAnchorInsideSharedGroup(anchor, group, memberIds) {
  if (!anchor || !group) {
    return false;
  }

  if (anchor.type === "card") {
    return memberIds.has(anchor.cardId);
  }

  if (anchor.type === "point" && anchor.binding?.type === "group-body") {
    return anchor.binding.cardId === group.id || memberIds.has(anchor.binding.cardId);
  }

  if (anchor.type === "point") {
    return isPointInsideRect(anchor, getGroupBodyRect(group));
  }

  return false;
}

function getSharedGroupCards(group) {
  if (!isGroupShared(group)) {
    return [];
  }

  return getContainedCards(group, { includeGroups: true, recursive: true })
    .filter((card) => card.id !== group.id)
    .sort((left, right) => (left.stackOrder || 0) - (right.stackOrder || 0) || left.id.localeCompare(right.id));
}

function getSharedGroupConnections(group) {
  const cards = getSharedGroupCards(group);
  const memberIds = new Set(cards.map((card) => card.id));
  memberIds.add(group.id);
  return state.connections
    .filter((connection) => (
      isConnectionAnchorInsideSharedGroup(connection.from, group, memberIds)
      && isConnectionAnchorInsideSharedGroup(connection.to, group, memberIds)
    ))
    .map((connection) => clone(connection));
}

function getSharedGroupForConnection(connection) {
  if (!connection) {
    return null;
  }

  return state.cards
    .filter(isGroupShared)
    .sort((left, right) => (left.width * left.height) - (right.width * right.height))
    .find((group) => {
      const memberIds = new Set(getSharedGroupCards(group).map((card) => card.id));
      memberIds.add(group.id);
      return (
        isConnectionAnchorInsideSharedGroup(connection.from, group, memberIds)
        && isConnectionAnchorInsideSharedGroup(connection.to, group, memberIds)
      );
    }) || null;
}

function buildSharedGroupSyncPayload(group) {
  if (!isGroupShared(group)) {
    return null;
  }
  const subscriptionPlan = normalizeSubscriptionPlan(state.account?.subscriptionPlan);

  return {
    schemaVersion: 1,
    boardId: state.boardId,
    boardName: state.boardName,
    groupId: group.id,
    sharedGroupId: group.sharedGroup.id,
    subscriptionPlan,
    limits: getSharedGroupLimits(subscriptionPlan),
    generatedAt: Date.now(),
    group: serializeCardForSharedGroup(group, group),
    cards: getSharedGroupCards(group).map((card) => serializeCardForSharedGroup(card, group)),
    connections: getSharedGroupConnections(group),
    operations: normalizeSharedGroupOperations(state.sharedGroupOperations)
      .filter((operation) => operation.sharedGroupId === group.sharedGroup.id)
  };
}

function getSharedGroupEntityType(card) {
  if (!card) {
    return "card";
  }

  if (card.kind === "chat") {
    return "chat";
  }

  if (card.kind === "group") {
    return "group";
  }

  return "card";
}

function appendSharedGroupOperation(group, type, entityType, entityId, payload = {}, options = {}) {
  if (!isGroupShared(group)) {
    return false;
  }

  const operation = normalizeSharedGroupOperation({
    id: createId("shared-op"),
    at: Number.isFinite(Number(options.at)) ? Number(options.at) : Date.now(),
    actor: normalizeAuditActor(options.actor, getCurrentAuditActor()),
    groupId: group.id,
    sharedGroupId: group.sharedGroup.id,
    type,
    entityType,
    entityId,
    payload
  });
  state.sharedGroupOperations = normalizeSharedGroupOperations([
    ...(Array.isArray(state.sharedGroupOperations) ? state.sharedGroupOperations : []),
    operation
  ]);
  group.sharedGroup.lastLocalOpId = operation.id;
  group.sharedGroup.lastLocalChangeAt = operation.at;
  return true;
}

function appendSharedGroupCardOperation(card, type, payload = {}, options = {}) {
  const group = getSharedGroupForCard(card);
  if (!group) {
    return false;
  }

  return appendSharedGroupOperation(group, type, getSharedGroupEntityType(card), card.id, {
    card: serializeCardForSharedGroup(card, group),
    ...payload
  }, options);
}

function appendSharedGroupConnectionOperation(connection, type, payload = {}, options = {}) {
  const group = getSharedGroupForConnection(connection);
  if (!group) {
    return false;
  }

  return appendSharedGroupOperation(group, type, "connection", connection.id, {
    connection: clone(connection),
    ...payload
  }, options);
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
    account: clone(source.account || normalizeAccountState()),
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
  if (interactiveBackgroundQualityInput) {
    interactiveBackgroundQualityInput.value = state.settings.interactiveBackgroundQuality || defaultSettings.interactiveBackgroundQuality;
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
  syncInteractiveBackgroundEngine();
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
  setText("interactiveBackgroundQualityLabel", "interactiveBackgroundQuality");
  setText("interactiveBackgroundHelp", "interactiveBackgroundHelp");
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
  setText("cardCatalogSettingsLabel", "cardCatalogSettings");
  setText("cardCatalogSettingsHelp", "cardCatalogSettingsHelp");
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
    ["chatColorRuleLabel", "chat"],
    ["codeColorRuleLabel", "code"],
    ["tableColorRuleLabel", "table"],
    ["calculatorColorRuleLabel", "calculator"],
    ["tasksColorRuleLabel", "tasks"],
    ["scheduleColorRuleLabel", "schedule"],
    ["bookmarkColorRuleLabel", "bookmark"],
    ["progressColorRuleLabel", "progress"],
    ["timerColorRuleLabel", "timer"],
    ["reminderColorRuleLabel", "reminder"],
    ["clockColorRuleLabel", "clock"],
    ["weatherColorRuleLabel", "weather"],
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
  setSelectOptionText(interactiveBackgroundQualityInput, "off", "interactiveBackgroundOff");
  setSelectOptionText(interactiveBackgroundQualityInput, "low", "interactiveBackgroundLow");
  setSelectOptionText(interactiveBackgroundQualityInput, "normal", "interactiveBackgroundNormal");
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
  if (openThemeCatalogButton) {
    openThemeCatalogButton.textContent = t("themeCatalog");
  }
  if (openCardCatalogButton) {
    openCardCatalogButton.textContent = t("cardCatalog");
  }
  if (openThemeEditorButton) {
    openThemeEditorButton.textContent = t("themeEditor");
  }
  applyThemeCatalogTranslations();
  applyCardCatalogTranslations();
  applyThemeEditorTranslations();
  applyToolbarCreateVisibility();
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

  if (card.kind === "chat" && Array.isArray(card.chatMessages)) {
    card.chatMessages.forEach((message) => {
      parts.push(message.author?.name || "", message.text || "");
    });
  }

  if (card.kind === "web") {
    parts.push(card.url || card.src || "");
  }

  if (card.kind === "timer") {
    parts.push(String(card.timerDurationMinutes || defaultTimerDurationMinutes));
  }

  if (card.kind === "clock") {
    parts.push(card.clockTimeZone || getSystemTimeZone());
  }

  if (card.kind === "weather") {
    parts.push(card.weatherLocation || "", card.weatherDescription || "");
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

function worldToScreen(worldX, worldY) {
  const layout = getActiveDisplayLayout();
  return {
    x: layout.primaryBounds.x + state.viewport.x + (worldX * state.viewport.zoom),
    y: layout.primaryBounds.y + state.viewport.y + (worldY * state.viewport.zoom)
  };
}

function getVisibleWorldBounds(padding = 0) {
  const topLeft = screenToWorld(-padding, -padding);
  const bottomRight = screenToWorld(window.innerWidth + padding, window.innerHeight + padding);
  return {
    left: Math.min(topLeft.x, bottomRight.x),
    top: Math.min(topLeft.y, bottomRight.y),
    right: Math.max(topLeft.x, bottomRight.x),
    bottom: Math.max(topLeft.y, bottomRight.y)
  };
}

function ensureInteractiveBackgroundLayers() {
  if (!board || !workspace) {
    return false;
  }

  if (!interactiveBackgroundState.baseCanvas) {
    const baseCanvas = document.createElement("canvas");
    baseCanvas.className = "interactive-background-canvas interactive-background-base";
    baseCanvas.setAttribute("aria-hidden", "true");
    board.insertBefore(baseCanvas, workspace);
    interactiveBackgroundState.baseCanvas = baseCanvas;
    interactiveBackgroundState.baseContext = baseCanvas.getContext("2d");
  }

  if (!interactiveBackgroundState.overlayCanvas) {
    const overlayCanvas = document.createElement("canvas");
    overlayCanvas.className = "interactive-background-canvas interactive-background-overlay";
    overlayCanvas.setAttribute("aria-hidden", "true");
    board.insertBefore(overlayCanvas, selectionBox || workspace.nextSibling);
    interactiveBackgroundState.overlayCanvas = overlayCanvas;
    interactiveBackgroundState.overlayContext = overlayCanvas.getContext("2d");
  }

  return Boolean(interactiveBackgroundState.baseContext && interactiveBackgroundState.overlayContext);
}

function resizeInteractiveBackgroundCanvas(canvas) {
  if (!canvas) {
    return { width: 0, height: 0, dpr: 1 };
  }

  const rect = board.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, interactiveBackgroundMaxDpr);
  const width = Math.max(1, Math.round(rect.width * dpr));
  const height = Math.max(1, Math.round(rect.height * dpr));

  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
  canvas.style.width = `${rect.width}px`;
  canvas.style.height = `${rect.height}px`;

  return { width: rect.width, height: rect.height, dpr };
}

function getInteractiveBackgroundQualityProfile() {
  const quality = state.settings?.interactiveBackgroundQuality || defaultSettings.interactiveBackgroundQuality;
  return interactiveBackgroundQualityProfiles[quality] || interactiveBackgroundQualityProfiles.off;
}

function getInteractiveBackgroundConfig() {
  try {
    return getVisualTheme().interactiveBackground || defaultVisualTheme.interactiveBackground;
  } catch {
    return defaultVisualTheme.interactiveBackground;
  }
}

function isInteractiveBackgroundEnabled() {
  if (isOverlayWindow || document.hidden) {
    return false;
  }

  const config = getInteractiveBackgroundConfig();
  const profile = getInteractiveBackgroundQualityProfile();
  return Boolean(config.enabled && profile.fps > 0);
}

function getInteractiveBackgroundConfigKey(config = getInteractiveBackgroundConfig()) {
  return JSON.stringify({
    quality: state.settings?.interactiveBackgroundQuality || defaultSettings.interactiveBackgroundQuality,
    background: config.background,
    actors: config.actors,
    reactions: config.reactions,
    cardEffects: config.cardEffects,
    fps: config.fps
  });
}

function setInteractiveBackgroundLayersVisible(visible) {
  [interactiveBackgroundState.baseCanvas, interactiveBackgroundState.overlayCanvas].forEach((canvas) => {
    if (canvas) {
      canvas.hidden = !visible;
    }
  });
}

function stopInteractiveBackgroundEngine() {
  if (interactiveBackgroundState.raf) {
    cancelAnimationFrame(interactiveBackgroundState.raf);
    interactiveBackgroundState.raf = 0;
  }
  interactiveBackgroundState.lastFrameAt = 0;
  setInteractiveBackgroundLayersVisible(false);
}

function resolveInteractiveBackgroundAsset(ref, collection) {
  if (!ref) {
    return "";
  }

  const asset = getVisualTheme().assets?.[collection]?.[ref] || "";
  return typeof asset === "string" && asset.startsWith("data:image/") ? asset : "";
}

function getInteractiveBackgroundImage(ref, collection) {
  const source = resolveInteractiveBackgroundAsset(ref, collection);
  if (!source) {
    return null;
  }

  if (!interactiveBackgroundState.images.has(source)) {
    const image = new Image();
    const record = { image, loaded: false };
    image.onload = () => {
      record.loaded = true;
    };
    image.onerror = () => {
      record.loaded = false;
    };
    image.src = source;
    interactiveBackgroundState.images.set(source, record);
  }

  return interactiveBackgroundState.images.get(source);
}

function createInteractiveBackgroundActor(definition, index) {
  const bounds = getVisibleWorldBounds(240);
  const width = Math.max(1, bounds.right - bounds.left);
  const height = Math.max(1, bounds.bottom - bounds.top);
  const angle = Math.random() * Math.PI * 2;
  const speed = definition.speed || 30;
  const now = performance.now();

  const actor = {
    id: `${definition.id}-${index}`,
    definition,
    x: bounds.left + (Math.random() * width),
    y: bounds.top + (Math.random() * height),
    vx: Math.cos(angle) * speed,
    vy: Math.sin(angle) * speed,
    direction: "right",
    pose: "idle",
    poseStartedAt: now,
    animationMemory: {
      randomSets: {}
    },
    interactionMemory: {
      follow: null,
      gather: null,
      cooldowns: new Map()
    },
    forcedPose: "",
    forcedPoseUntil: 0,
    transition: null,
    phase: Math.random() * Math.PI * 2,
    targetCardId: "",
    pauseUntil: 0,
    surfaceState: "idle",
    surfaceStateStartedAt: now,
    surfaceRoute: null,
    surfaceRouteIndex: 0,
    surfaceDirection: 1,
    surfaceTarget: null,
    nextConnectionSnapAt: 0,
    returnTarget: null,
    restTarget: null,
    restUntil: 0,
    nextRestAt: now + getRandomRangeValue(definition.rest?.intervalMs, 16000)
  };
  if (definition.behavior === "surfaceWanderAndMouseHunt") {
    pickInteractiveActorSurfaceRoute(actor);
  }
  return actor;
}

function resetInteractiveBackgroundScene(config = getInteractiveBackgroundConfig(), profile = getInteractiveBackgroundQualityProfile()) {
  const actors = [];
  config.actors.forEach((definition) => {
    for (let index = 0; index < definition.count && actors.length < profile.maxActors; index += 1) {
      actors.push(createInteractiveBackgroundActor(definition, index));
    }
  });

  interactiveBackgroundState.actors = actors;
  interactiveBackgroundState.particles = [];
  interactiveBackgroundState.reactionCooldowns.clear();
  interactiveBackgroundState.images.clear();
}

function isThemeCardEffectEnabled(action) {
  if (!isInteractiveBackgroundEnabled()) {
    return false;
  }

  const effect = getInteractiveBackgroundConfig().cardEffects?.[action];
  return Boolean(effect?.enabled);
}

function getThemeCardEffect(action) {
  return getInteractiveBackgroundConfig().cardEffects?.[action] || defaultVisualTheme.interactiveBackground.cardEffects[action];
}

function snapshotThemeEffectCard(card) {
  if (!card) {
    const center = getVisibleWorldCenter();
    return {
      id: "",
      kind: "",
      tags: [],
      x: center.x - 60,
      y: center.y - 40,
      width: 120,
      height: 80
    };
  }

  return {
    id: card.id,
    kind: card.kind,
    tags: Array.isArray(card.tags) ? [...card.tags] : [],
    x: card.x,
    y: card.y,
    width: card.width,
    height: card.height
  };
}

function resolveThemeEffectAnchor(anchor, card) {
  const safeAnchor = anchor || "card.center";
  if (safeAnchor === "board.cursor" && interactiveBackgroundState.mouse.active) {
    return {
      x: interactiveBackgroundState.mouse.worldX,
      y: interactiveBackgroundState.mouse.worldY
    };
  }
  if (safeAnchor === "board.visibleCenter") {
    return getVisibleWorldCenter();
  }

  const target = card || snapshotThemeEffectCard(null);
  const left = target.x;
  const top = target.y;
  const right = target.x + target.width;
  const bottom = target.y + target.height;
  const centerX = target.x + target.width / 2;
  const centerY = target.y + target.height / 2;
  switch (safeAnchor) {
    case "card.top":
      return { x: centerX, y: top };
    case "card.right":
      return { x: right, y: centerY };
    case "card.bottom":
      return { x: centerX, y: bottom };
    case "card.left":
      return { x: left, y: centerY };
    case "card.topLeft":
      return { x: left, y: top };
    case "card.topRight":
      return { x: right, y: top };
    case "card.bottomRight":
      return { x: right, y: bottom };
    case "card.bottomLeft":
      return { x: left, y: bottom };
    case "card":
    case "card.center":
    default:
      return { x: centerX, y: centerY };
  }
}

function createThemeEffectParticles(effect) {
  const count = clamp(Math.round(effect.count || 24), 1, 120);
  const spread = Math.max(0, effect.spread || 140);
  return Array.from({ length: count }, () => ({
    angle: Math.random() * Math.PI * 2,
    distance: spread * (0.35 + Math.random() * 0.65),
    radius: 1.5 + Math.random() * 3.5,
    phase: Math.random() * Math.PI * 2,
    alpha: 0.45 + Math.random() * 0.55
  }));
}

function queueInteractiveVisualEffect(action, card, effect, options = {}) {
  if (!effect?.enabled || !isInteractiveBackgroundEnabled()) {
    return;
  }

  const cardSnapshot = snapshotThemeEffectCard(card);
  const visualDelayMs = options.visualDelayMs ?? effect.delayMs ?? 0;
  interactiveBackgroundState.cardEffects.push({
    id: createId(`theme-effect-${action}`),
    action,
    effect,
    card: cardSnapshot,
    anchor: resolveThemeEffectAnchor(effect.anchor, cardSnapshot),
    startedAt: performance.now() + visualDelayMs,
    delayMs: options.delayMs ?? effect.delayMs ?? 0,
    visualDelayMs,
    durationMs: effect.durationMs,
    particles: effect.type === "particleBurst" ? createThemeEffectParticles(effect) : []
  });
  syncInteractiveBackgroundEngine();
}

function queueInteractiveCardEffect(action, card, options = {}) {
  const effect = getThemeCardEffect(action);
  queueInteractiveVisualEffect(action, card, effect, {
    ...options,
    visualDelayMs: 0
  });
}

function emitThemeInteractionEvent(eventName, payload = {}) {
  if (!isInteractiveBackgroundEnabled()) {
    return;
  }

  const config = getInteractiveBackgroundConfig();
  const reactions = Array.isArray(config.reactions) ? config.reactions : [];
  if (reactions.length === 0) {
    return;
  }

  const card = payload.card ? snapshotThemeEffectCard(payload.card) : null;
  const event = { name: eventName, card };
  const now = performance.now();
  reactions.forEach((reaction, index) => {
    const matches = themeValidation.doesThemeReactionMatch
      ? themeValidation.doesThemeReactionMatch(reaction, event)
      : reaction.when === eventName;
    if (!matches) {
      return;
    }

    const cooldownKey = `${eventName}:${reaction.id || index}:${card?.id || "board"}`;
    const lastTriggeredAt = interactiveBackgroundState.reactionCooldowns.get(cooldownKey) || 0;
    if (reaction.cooldownMs > 0 && now - lastTriggeredAt < reaction.cooldownMs) {
      return;
    }

    interactiveBackgroundState.reactionCooldowns.set(cooldownKey, now);
    queueInteractiveVisualEffect(eventName, card, reaction.do, {
      visualDelayMs: reaction.do.delayMs
    });
  });
}

function pruneInteractiveCardEffects(now) {
  interactiveBackgroundState.cardEffects = interactiveBackgroundState.cardEffects.filter((entry) => {
    const totalDuration = Math.max(entry.delayMs || 0, entry.durationMs || 0) + 120;
    return now - entry.startedAt <= totalDuration;
  });
}

function syncInteractiveBackgroundEngine() {
  if (!isInteractiveBackgroundEnabled()) {
    stopInteractiveBackgroundEngine();
    return;
  }

  if (!ensureInteractiveBackgroundLayers()) {
    stopInteractiveBackgroundEngine();
    return;
  }

  const config = getInteractiveBackgroundConfig();
  const profile = getInteractiveBackgroundQualityProfile();
  const configKey = getInteractiveBackgroundConfigKey(config);
  if (configKey !== interactiveBackgroundState.lastConfigKey) {
    interactiveBackgroundState.lastConfigKey = configKey;
    resetInteractiveBackgroundScene(config, profile);
  }

  setInteractiveBackgroundLayersVisible(true);
  if (!interactiveBackgroundState.raf) {
    interactiveBackgroundState.raf = requestAnimationFrame(drawInteractiveBackgroundFrame);
  }
}

function getInteractiveBackgroundGeometryKey() {
  return JSON.stringify({
    cards: state.cards.map((card) => [
      card.id,
      card.kind,
      Math.round(card.x),
      Math.round(card.y),
      Math.round(card.width),
      Math.round(card.height)
    ]),
    connections: state.connections.map((connection) => [
      connection.id,
      connection.pathStyle,
      connection.from,
      connection.to,
      connection.points
    ])
  });
}

function createInteractiveCardRoute(card, area = "perimeter") {
  const inset = 4;
  const tokens = getVisualTheme().tokens || defaultVisualTheme.tokens;
  const headerHeight = card.kind === "group" ? tokens.groupHeaderHeight : tokens.cardHeaderHeight;
  const safeHeaderBottom = clamp(card.y + Math.max(8, headerHeight) - inset, card.y + inset, card.y + card.height - inset);
  if (area === "header") {
    const y = card.y + Math.max(inset, Math.min(headerHeight * 0.5, card.height - inset));
    return {
      id: `card-header:${card.id}`,
      type: "card",
      cardId: card.id,
      cardArea: "header",
      points: [
        { x: card.x + inset, y },
        { x: card.x + card.width - inset, y }
      ]
    };
  }
  if (area === "body") {
    return {
      id: `card-body:${card.id}`,
      type: "card",
      cardId: card.id,
      cardArea: "body",
      points: [
        { x: card.x + inset, y: safeHeaderBottom },
        { x: card.x + card.width - inset, y: safeHeaderBottom },
        { x: card.x + card.width - inset, y: card.y + card.height - inset },
        { x: card.x + inset, y: card.y + card.height - inset },
        { x: card.x + inset, y: safeHeaderBottom }
      ]
    };
  }
  return {
    id: `card:${card.id}`,
    type: "card",
    cardId: card.id,
    points: [
      { x: card.x + inset, y: card.y + inset },
      { x: card.x + card.width - inset, y: card.y + inset },
      { x: card.x + card.width - inset, y: card.y + card.height - inset },
      { x: card.x + inset, y: card.y + card.height - inset },
      { x: card.x + inset, y: card.y + inset }
    ]
  };
}

function createInteractiveConnectionRoute(connection) {
  const points = getConnectionRouteGeometry(connection)?.points || [];
  if (points.length < 2) {
    return null;
  }

  return {
    id: `connection:${connection.id}`,
    type: "connection",
    connectionId: connection.id,
    points: points.map((point) => ({ x: point.x, y: point.y }))
  };
}

function rebuildInteractiveBackgroundGeometry() {
  const cards = state.cards
    .filter((card) => card && card.width > 0 && card.height > 0)
    .map((card) => ({
      id: card.id,
      kind: card.kind,
      x: card.x,
      y: card.y,
      width: card.width,
      height: card.height
    }));
  const cardRoutes = cards.map((card) => createInteractiveCardRoute(card));
  const connectionRoutes = state.connections
    .map((connection) => createInteractiveConnectionRoute(connection))
    .filter(Boolean);

  interactiveBackgroundState.geometry = {
    key: getInteractiveBackgroundGeometryKey(),
    version: interactiveBackgroundState.geometry.version + 1,
    cards,
    cardRoutes,
    connectionRoutes
  };
  return interactiveBackgroundState.geometry;
}

function getInteractiveBackgroundGeometry() {
  const key = getInteractiveBackgroundGeometryKey();
  if (interactiveBackgroundState.geometry.key !== key) {
    return rebuildInteractiveBackgroundGeometry();
  }
  return interactiveBackgroundState.geometry;
}

function getRandomRangeValue(range, fallback = 0) {
  if (!Array.isArray(range) || range.length < 2) {
    return fallback;
  }
  const min = Number(range[0]);
  const max = Number(range[1]);
  if (!Number.isFinite(min) || !Number.isFinite(max)) {
    return fallback;
  }
  return min + Math.random() * Math.max(0, max - min);
}

function pickRandomItem(items) {
  return items.length ? items[Math.floor(Math.random() * items.length)] : null;
}

function getInteractiveSurfaceRouteType(route) {
  return route?.type || "board";
}

function getInteractiveSurfaceTransitionKind(fromRoute, toRoute) {
  const fromType = getInteractiveSurfaceRouteType(fromRoute);
  const toType = getInteractiveSurfaceRouteType(toRoute);
  if (fromType === "card" && toType === "connection") {
    return "dropDown";
  }
  if (fromType === "connection" && toType === "card") {
    return "climbUp";
  }
  if (fromType === "card" && toType === "board") {
    return "dropDown";
  }
  if (fromType === "board" && toType === "card") {
    return "climbUp";
  }
  return "jump";
}

function getInteractiveSurfaceTransitionDistanceLimit(transitions, fromRoute, toRoute, kind) {
  const fromType = getInteractiveSurfaceRouteType(fromRoute);
  const toType = getInteractiveSurfaceRouteType(toRoute);
  if (fromType === "card" && toType === "connection") {
    return transitions.cardToConnectionDistance;
  }
  if (fromType === "connection" && toType === "card") {
    return transitions.connectionToCardDistance;
  }
  if (kind === "climbUp" || kind === "dropDown") {
    return Math.max(transitions.cardToConnectionDistance, transitions.connectionToCardDistance);
  }
  return transitions.maxJumpDistance;
}

function getInteractiveSurfaceTransitionDuration(transitions, kind) {
  if (kind === "climbUp") {
    return transitions.climbDurationMs;
  }
  if (kind === "dropDown") {
    return transitions.dropDurationMs;
  }
  return transitions.jumpDurationMs;
}

function maybeStartInteractiveActorSurfaceTransition(actor, fromRoute, toRoute, fromPoint, toPoint) {
  const transitions = actor.definition.transitions || {};
  if (!transitions.enabled || !fromRoute || !toPoint || actor.transition) {
    return false;
  }

  const routeChanged = fromRoute?.id !== toRoute?.id || getInteractiveSurfaceRouteType(fromRoute) !== getInteractiveSurfaceRouteType(toRoute);
  if (!routeChanged) {
    return false;
  }

  const from = {
    x: Number.isFinite(actor.x) ? actor.x : fromPoint?.x || 0,
    y: Number.isFinite(actor.y) ? actor.y : fromPoint?.y || 0
  };
  const to = {
    x: toPoint.x,
    y: toPoint.y
  };
  const distance = Math.hypot(to.x - from.x, to.y - from.y);
  const kind = getInteractiveSurfaceTransitionKind(fromRoute, toRoute);
  const distanceLimit = getInteractiveSurfaceTransitionDistanceLimit(transitions, fromRoute, toRoute, kind);
  if (!Number.isFinite(distance) || distance > distanceLimit) {
    return false;
  }

  actor.transition = {
    kind,
    from,
    to,
    startedAt: performance.now(),
    durationMs: getInteractiveSurfaceTransitionDuration(transitions, kind),
    arcHeight: kind === "jump" ? transitions.jumpArcHeight : Math.min(transitions.jumpArcHeight, 60),
    animations: transitions.animations || {}
  };
  return true;
}

function getRandomVisibleWorldPoint(padding = 160) {
  const bounds = getVisibleWorldBounds(padding);
  return {
    x: bounds.left + Math.random() * Math.max(1, bounds.right - bounds.left),
    y: bounds.top + Math.random() * Math.max(1, bounds.bottom - bounds.top)
  };
}

function getInteractiveActorAvailableRoutes(actor) {
  const geometry = getInteractiveBackgroundGeometry();
  const surfaces = actor.definition.surfaces || {};
  const cardArea = ["perimeter", "header", "body"].includes(surfaces.cardArea) ? surfaces.cardArea : "perimeter";
  return [
    ...(surfaces.cards === false ? [] : geometry.cards.map((card) => createInteractiveCardRoute(card, cardArea))),
    ...(surfaces.connections === false ? [] : geometry.connectionRoutes)
  ].filter((route) => route.points.length >= 2);
}

function pickInteractiveActorSurfaceRoute(actor) {
  const previousRoute = actor.surfaceRoute;
  const previousTarget = actor.surfaceTarget ? { ...actor.surfaceTarget } : { x: actor.x, y: actor.y };
  const route = pickRandomItem(getInteractiveActorAvailableRoutes(actor));
  if (!route) {
    actor.surfaceRoute = null;
    actor.surfaceRouteIndex = 0;
    actor.surfaceDirection = 1;
    actor.surfaceTarget = getRandomVisibleWorldPoint();
    maybeStartInteractiveActorSurfaceTransition(actor, previousRoute, actor.surfaceRoute, previousTarget, actor.surfaceTarget);
    return actor.surfaceTarget;
  }

  const direction = Math.random() < 0.5 ? -1 : 1;
  const index = Math.floor(Math.random() * route.points.length);
  actor.surfaceRoute = route;
  actor.surfaceRouteIndex = index;
  actor.surfaceDirection = direction;
  actor.surfaceTarget = route.points[index];
  maybeStartInteractiveActorSurfaceTransition(actor, previousRoute, actor.surfaceRoute, previousTarget, actor.surfaceTarget);
  return actor.surfaceTarget;
}

function advanceInteractiveActorSurfaceTarget(actor) {
  const route = actor.surfaceRoute;
  const surfaces = actor.definition.surfaces || {};
  const previousRoute = actor.surfaceRoute;
  const previousTarget = actor.surfaceTarget ? { ...actor.surfaceTarget } : { x: actor.x, y: actor.y };
  if (!route || !route.points?.length) {
    if (surfaces.board === false) {
      return pickInteractiveActorSurfaceRoute(actor);
    }
    actor.surfaceTarget = getRandomVisibleWorldPoint();
    maybeStartInteractiveActorSurfaceTransition(actor, previousRoute, actor.surfaceRoute, previousTarget, actor.surfaceTarget);
    return actor.surfaceTarget;
  }

  actor.surfaceRouteIndex += actor.surfaceDirection || 1;
  if (actor.surfaceRouteIndex < 0 || actor.surfaceRouteIndex >= route.points.length) {
    if (route.type === "card") {
      actor.surfaceDirection *= -1;
      actor.surfaceRouteIndex = clamp(actor.surfaceRouteIndex, 0, route.points.length - 1);
    } else {
      return pickInteractiveActorSurfaceRoute(actor);
    }
  }

  actor.surfaceTarget = route.points[actor.surfaceRouteIndex];
  maybeStartInteractiveActorSurfaceTransition(actor, previousRoute, actor.surfaceRoute, previousTarget, actor.surfaceTarget);
  return actor.surfaceTarget;
}

function chooseInteractiveCardEdge(card, actor, configuredEdge = "auto") {
  if (configuredEdge !== "auto") {
    return configuredEdge;
  }
  const edges = ["top", "right", "bottom", "left"];
  const seed = Math.abs(Math.sin(actor.phase + Date.now() / 1000));
  return edges[Math.floor(seed * edges.length) % edges.length];
}

function getInteractiveBackgroundCardEdgeTarget(actor) {
  const geometry = getInteractiveBackgroundGeometry();
  const cards = geometry.cards.filter((card) => card.kind !== "group");
  const card = pickRandomItem(cards.length ? cards : geometry.cards);
  if (!card) {
    return null;
  }

  const rest = actor.definition.rest;
  const edge = chooseInteractiveCardEdge(card, actor, rest.edge);
  const tValue = 0.2 + Math.random() * 0.6;
  let x = card.x + card.width * tValue;
  let y = card.y;

  if (edge === "right") {
    x = card.x + card.width;
    y = card.y + card.height * tValue;
  } else if (edge === "bottom") {
    x = card.x + card.width * tValue;
    y = card.y + card.height;
  } else if (edge === "left") {
    x = card.x;
    y = card.y + card.height * tValue;
  }

  return {
    x: x + rest.offsetX,
    y: y + rest.offsetY,
    cardId: card.id,
    edge
  };
}

function projectPointOnSegment(point, start, end) {
  const lengthSquared = (end.x - start.x) ** 2 + (end.y - start.y) ** 2;
  if (lengthSquared <= 0.0001) {
    return {
      x: start.x,
      y: start.y,
      ratio: 0,
      distance: Math.hypot(point.x - start.x, point.y - start.y)
    };
  }

  const ratio = clamp(
    ((point.x - start.x) * (end.x - start.x) + (point.y - start.y) * (end.y - start.y)) / lengthSquared,
    0,
    1
  );
  const projection = {
    x: start.x + (end.x - start.x) * ratio,
    y: start.y + (end.y - start.y) * ratio
  };
  return {
    ...projection,
    ratio,
    distance: Math.hypot(point.x - projection.x, point.y - projection.y)
  };
}

function snapInteractiveActorToConnectionRoute(actor, now) {
  const surfaces = actor.definition.surfaces || {};
  const snapDistance = Number(surfaces.connectionSnapDistance) || 0;
  if (surfaces.connections === false || snapDistance <= 0 || now < actor.nextConnectionSnapAt) {
    return false;
  }

  actor.nextConnectionSnapAt = now + 800;
  const geometry = getInteractiveBackgroundGeometry();
  let best = null;
  geometry.connectionRoutes.forEach((route) => {
    for (let index = 0; index < route.points.length - 1; index += 1) {
      const projection = projectPointOnSegment(actor, route.points[index], route.points[index + 1]);
      if (projection.distance <= snapDistance && (!best || projection.distance < best.distance)) {
        best = { route, index, projection };
      }
    }
  });

  if (!best) {
    return false;
  }

  const previousRoute = actor.surfaceRoute;
  const previousTarget = actor.surfaceTarget ? { ...actor.surfaceTarget } : { x: actor.x, y: actor.y };
  actor.surfaceRoute = best.route;
  actor.surfaceRouteIndex = best.projection.ratio > 0.5 ? best.index + 1 : best.index;
  actor.surfaceDirection = best.projection.ratio > 0.5 ? 1 : -1;
  actor.surfaceTarget = { x: best.projection.x, y: best.projection.y };
  maybeStartInteractiveActorSurfaceTransition(actor, previousRoute, actor.surfaceRoute, previousTarget, actor.surfaceTarget);
  return true;
}

function getInteractiveBackgroundCards() {
  return state.cards.filter((card) => card && card.kind !== "group" && card.width > 0 && card.height > 0);
}

function pickInteractiveBackgroundCard() {
  const cards = getInteractiveBackgroundCards();
  return cards.length ? cards[Math.floor(Math.random() * cards.length)] : null;
}

function getInteractiveBackgroundCardById(id) {
  return state.cards.find((card) => card.id === id) || null;
}

function getInteractiveBackgroundCardTarget(actor, edge = "top") {
  let card = getInteractiveBackgroundCardById(actor.targetCardId);
  if (!card) {
    card = pickInteractiveBackgroundCard();
    actor.targetCardId = card?.id || "";
  }
  if (!card) {
    return null;
  }

  if (edge === "center") {
    return {
      x: card.x + (card.width / 2),
      y: card.y + (card.height / 2),
      card
    };
  }

  return {
    x: card.x + clamp(card.width * (0.2 + ((actor.phase % 1) * 0.6)), 0, card.width),
    y: card.y - (actor.definition.height * 0.24),
    card
  };
}

function getInteractiveActorPose(actor, key, fallback = "idle") {
  const reactions = actor.definition.reactions || {};
  if (reactions[key]) {
    return reactions[key];
  }
  const fallbackKeys = Array.isArray(fallback) ? fallback : [fallback];
  for (const fallbackKey of fallbackKeys) {
    if (reactions[fallbackKey]) {
      return reactions[fallbackKey];
    }
  }
  return fallbackKeys[0] || "idle";
}

function setInteractiveActorPose(actor, pose, now) {
  const nextPose = pose || "idle";
  if (actor.pose === nextPose) {
    return;
  }

  actor.pose = nextPose;
  actor.poseStartedAt = now;
}

function updateInteractiveActorDirection(actor, previousX, previousY = actor.y) {
  const deltaX = actor.x - previousX;
  const deltaY = actor.y - previousY;
  if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 0.001) {
    actor.direction = deltaX < 0 ? "left" : "right";
  } else if (Math.abs(deltaY) > 0.001) {
    actor.direction = deltaY < 0 ? "up" : "down";
  }
}

function moveInteractiveActorToward(actor, target, dt, speed) {
  const previousX = actor.x;
  const previousY = actor.y;
  const dx = target.x - actor.x;
  const dy = target.y - actor.y;
  const distance = Math.hypot(dx, dy);
  if (distance < 1) {
    return true;
  }

  const step = Math.min(distance, Math.max(0, speed) * dt);
  actor.x += (dx / distance) * step;
  actor.y += (dy / distance) * step;
  updateInteractiveActorDirection(actor, previousX, previousY);
  return distance <= Math.max(4, step + 2);
}

function updateInteractiveBackgroundWander(actor, dt) {
  const previousX = actor.x;
  const previousY = actor.y;
  const bounds = getVisibleWorldBounds(420);
  actor.x += actor.vx * dt;
  actor.y += actor.vy * dt;
  updateInteractiveActorDirection(actor, previousX, previousY);

  if (actor.x < bounds.left || actor.x > bounds.right) {
    actor.vx *= -1;
    actor.x = clamp(actor.x, bounds.left, bounds.right);
  }
  if (actor.y < bounds.top || actor.y > bounds.bottom) {
    actor.vy *= -1;
    actor.y = clamp(actor.y, bounds.top, bounds.bottom);
  }

  if (Math.random() < dt * 0.18) {
    const angle = Math.atan2(actor.vy, actor.vx) + ((Math.random() - 0.5) * 0.8);
    const speed = actor.definition.speed || 30;
    actor.vx = Math.cos(angle) * speed;
    actor.vy = Math.sin(angle) * speed;
  }
}

function getInteractiveActorTransitionPose(actor, progress) {
  const transition = actor.transition || {};
  const animations = transition.animations || {};
  if (transition.kind === "climbUp") {
    return getInteractiveActorPose(actor, "climbUp", [animations.climbUp || "climbUp", "jump", "moving", "default", "walk"]);
  }
  if (transition.kind === "dropDown") {
    return getInteractiveActorPose(actor, "dropDown", [animations.dropDown || "dropDown", "jump", "moving", "default", "walk"]);
  }
  if (progress < 0.2) {
    return getInteractiveActorPose(actor, "jumpStart", [animations.jumpStart || "jumpStart", "jump", "moving", "default", "walk"]);
  }
  if (progress > 0.82) {
    return getInteractiveActorPose(actor, "land", [animations.land || "land", "jump", "moving", "default", "walk"]);
  }
  return getInteractiveActorPose(actor, "jumpAir", [animations.jumpAir || "jumpAir", "jump", "moving", "default", "walk"]);
}

function updateInteractiveActorSurfaceTransition(actor, now) {
  const transition = actor.transition;
  if (!transition) {
    return false;
  }

  const duration = Math.max(120, transition.durationMs || 650);
  const progress = clamp((now - transition.startedAt) / duration, 0, 1);
  const previousX = actor.x;
  const previousY = actor.y;
  actor.x = transition.from.x + (transition.to.x - transition.from.x) * progress;
  actor.y = transition.from.y + (transition.to.y - transition.from.y) * progress;
  if (transition.kind === "jump") {
    actor.y -= Math.sin(progress * Math.PI) * transition.arcHeight;
  } else if (transition.kind === "climbUp") {
    actor.y -= Math.sin(progress * Math.PI) * transition.arcHeight * 0.35;
  } else if (transition.kind === "dropDown") {
    actor.y += Math.sin(progress * Math.PI) * transition.arcHeight * 0.25;
  }
  updateInteractiveActorDirection(actor, previousX, previousY);
  setInteractiveActorPose(actor, getInteractiveActorTransitionPose(actor, progress), now);

  if (progress >= 1) {
    actor.x = transition.to.x;
    actor.y = transition.to.y;
    actor.transition = null;
  }
  return true;
}

function getInteractiveActorDistance(a, b) {
  return Math.hypot((a?.x || 0) - (b?.x || 0), (a?.y || 0) - (b?.y || 0));
}

function getInteractiveActorInteractionKey(interaction, suffix = "") {
  return `${interaction.id || interaction.type}${suffix ? `:${suffix}` : ""}`;
}

function isInteractiveInteractionCoolingDown(actor, interaction, now, suffix = "") {
  const key = getInteractiveActorInteractionKey(interaction, suffix);
  const lastAt = actor.interactionMemory?.cooldowns?.get(key) || 0;
  return interaction.cooldownMs > 0 && now - lastAt < interaction.cooldownMs;
}

function setInteractiveInteractionCooldown(actor, interaction, now, suffix = "") {
  const key = getInteractiveActorInteractionKey(interaction, suffix);
  actor.interactionMemory?.cooldowns?.set(key, now);
}

function findInteractiveActorById(id) {
  if (!id) {
    return null;
  }
  return interactiveBackgroundState.actors.find((actor) => actor.id === id) || null;
}

function getInteractiveActorCandidates(actor, interaction) {
  const target = interaction.target || "sameKind";
  return interactiveBackgroundState.actors.filter((candidate) => {
    if (candidate === actor) {
      return false;
    }
    if (target === "any") {
      return true;
    }
    if (target === "sameKind") {
      return candidate.definition.id === actor.definition.id;
    }
    return candidate.id === target || candidate.definition.id === target;
  });
}

function pickInteractiveActorCandidate(actor, interaction) {
  const candidates = getInteractiveActorCandidates(actor, interaction);
  return pickRandomItem(candidates);
}

function isInteractiveActorMousePriority(actor, now) {
  if (!interactiveBackgroundState.mouse.active || now - interactiveBackgroundState.mouse.lastMoveAt > 6000) {
    return false;
  }
  const distance = Math.hypot(interactiveBackgroundState.mouse.worldX - actor.x, interactiveBackgroundState.mouse.worldY - actor.y);
  const radius = actor.definition.mouse?.noticeRadius || actor.definition.mouseInterestRadius || 0;
  return radius > 0 && distance <= radius;
}

function applyInteractiveActorAvoidance(actor, interaction, dt) {
  const radius = Math.max(1, interaction.radius || 48);
  const strength = Math.max(0, interaction.strength || 0.6);
  if (strength <= 0) {
    return;
  }

  const previousX = actor.x;
  const previousY = actor.y;
  getInteractiveActorCandidates(actor, { ...interaction, target: interaction.target || "any" }).forEach((other) => {
    const dx = actor.x - other.x;
    const dy = actor.y - other.y;
    const distance = Math.max(0.001, Math.hypot(dx, dy));
    if (distance >= radius) {
      return;
    }
    const push = ((radius - distance) / radius) * strength * 70 * dt;
    actor.x += (dx / distance) * push;
    actor.y += (dy / distance) * push;
  });
  updateInteractiveActorDirection(actor, previousX, previousY);
}

function setInteractiveActorForcedPose(actor, pose, until, now) {
  actor.forcedPose = pose || "";
  actor.forcedPoseUntil = until || 0;
  if (actor.forcedPose && until > now) {
    setInteractiveActorPose(actor, actor.forcedPose, now);
  }
}

function tryInteractiveActorGreeting(actor, interaction, now) {
  if (isInteractiveInteractionCoolingDown(actor, interaction, now)) {
    return false;
  }

  const candidates = getInteractiveActorCandidates(actor, interaction)
    .filter((candidate) => getInteractiveActorDistance(actor, candidate) <= interaction.radius)
    .filter((candidate) => !isInteractiveInteractionCoolingDown(candidate, interaction, now, actor.id));
  const other = pickRandomItem(candidates);
  if (!other) {
    return false;
  }

  const duration = getRandomRangeValue(interaction.durationMs, 1200);
  const until = now + Math.min(duration, 6000);
  setInteractiveActorForcedPose(actor, interaction.selfAnimation, until, now);
  setInteractiveActorForcedPose(other, interaction.otherAnimation, until, now);
  setInteractiveInteractionCooldown(actor, interaction, now);
  setInteractiveInteractionCooldown(other, interaction, now, actor.id);
  return true;
}

function updateInteractiveActorFollow(actor, interaction, dt, now) {
  const memory = actor.interactionMemory;
  let follow = memory.follow;
  let target = follow && follow.until > now ? findInteractiveActorById(follow.targetActorId) : null;
  if (!target && Math.random() < interaction.chance * dt && !isInteractiveInteractionCoolingDown(actor, interaction, now)) {
    target = pickInteractiveActorCandidate(actor, interaction);
    if (target) {
      follow = {
        targetActorId: target.id,
        until: now + getRandomRangeValue(interaction.durationMs, 6000)
      };
      memory.follow = follow;
      setInteractiveInteractionCooldown(actor, interaction, now);
    }
  }

  if (!target) {
    if (follow) {
      memory.follow = null;
    }
    return false;
  }

  const distance = getInteractiveActorDistance(actor, target);
  if (distance > interaction.distance) {
    moveInteractiveActorToward(actor, target, dt, actor.definition.speed * 1.1);
    setInteractiveActorPose(actor, getInteractiveActorPose(actor, "moving", ["default", "walk"]), now);
  } else {
    setInteractiveActorPose(actor, getInteractiveActorPose(actor, "default", "idle"), now);
  }
  return true;
}

function getInteractiveCardAnchorPoint(card, anchor = "card.center", actorIndex = 0, spacing = 48) {
  const safeCard = card || pickInteractiveBackgroundCard();
  if (!safeCard) {
    return getRandomVisibleWorldPoint();
  }
  const offset = (actorIndex % 5 - 2) * spacing;
  const centerX = safeCard.x + safeCard.width / 2;
  const centerY = safeCard.y + safeCard.height / 2;
  if (anchor === "card.top") {
    return { x: centerX + offset, y: safeCard.y - spacing * 0.45 };
  }
  if (anchor === "card.right") {
    return { x: safeCard.x + safeCard.width + spacing * 0.45, y: centerY + offset };
  }
  if (anchor === "card.bottom") {
    return { x: centerX + offset, y: safeCard.y + safeCard.height + spacing * 0.45 };
  }
  if (anchor === "card.left") {
    return { x: safeCard.x - spacing * 0.45, y: centerY + offset };
  }
  return {
    x: centerX + Math.cos(actorIndex) * spacing,
    y: centerY + Math.sin(actorIndex) * spacing
  };
}

function updateInteractiveActorGather(actor, interaction, dt, now) {
  const memory = actor.interactionMemory;
  let gather = memory.gather;
  if (!gather || gather.until <= now || !state.cards.some((card) => card.id === gather.cardId)) {
    if (Math.random() >= interaction.chance * dt || isInteractiveInteractionCoolingDown(actor, interaction, now)) {
      return false;
    }
    const card = pickInteractiveBackgroundCard();
    if (!card) {
      return false;
    }
    gather = {
      cardId: card.id,
      actorIndex: Math.floor(Math.random() * interaction.maxGathered),
      until: now + getRandomRangeValue(interaction.durationMs, 8000)
    };
    memory.gather = gather;
    setInteractiveInteractionCooldown(actor, interaction, now);
  }

  const card = getInteractiveBackgroundCardById(gather.cardId);
  if (!card) {
    memory.gather = null;
    return false;
  }
  const target = getInteractiveCardAnchorPoint(card, interaction.anchor, gather.actorIndex, interaction.spacing);
  moveInteractiveActorToward(actor, target, dt, actor.definition.speed);
  setInteractiveActorPose(actor, getInteractiveActorPose(actor, "moving", ["default", "walk"]), now);
  return true;
}

function updateInteractiveActorInteractions(actor, dt, now) {
  if (actor.forcedPose && actor.forcedPoseUntil > now) {
    setInteractiveActorPose(actor, actor.forcedPose, now);
    return true;
  }
  if (actor.forcedPoseUntil && actor.forcedPoseUntil <= now) {
    actor.forcedPose = "";
    actor.forcedPoseUntil = 0;
  }

  const interactions = Array.isArray(actor.definition.interactions) ? actor.definition.interactions : [];
  if (!interactions.length) {
    return false;
  }

  interactions
    .filter((interaction) => interaction.type === "avoidActors")
    .forEach((interaction) => applyInteractiveActorAvoidance(actor, interaction, dt));

  if (isInteractiveActorMousePriority(actor, now)) {
    return false;
  }

  for (const interaction of interactions) {
    if (interaction.type === "greetActor" && tryInteractiveActorGreeting(actor, interaction, now)) {
      return true;
    }
    if (interaction.type === "followActor" && updateInteractiveActorFollow(actor, interaction, dt, now)) {
      return true;
    }
    if (interaction.type === "gatherAroundCard" && updateInteractiveActorGather(actor, interaction, dt, now)) {
      return true;
    }
  }

  return false;
}

function setInteractiveActorSurfaceState(actor, stateName, now) {
  if (actor.surfaceState === stateName) {
    return;
  }
  actor.surfaceState = stateName;
  actor.surfaceStateStartedAt = now;
}

function getInteractiveActorMouseHuntState(actor, mouseDistance, now, mouseIsFresh) {
  const mouse = actor.definition.mouse || {};
  if (themeValidation.getMouseHuntState) {
    return themeValidation.getMouseHuntState(
      actor.surfaceState,
      mouseDistance,
      now,
      actor.surfaceStateStartedAt || now,
      mouse,
      mouseIsFresh
    );
  }

  if (!mouseIsFresh || mouseDistance > mouse.loseInterestRadius) {
    return actor.surfaceState === "notice" || actor.surfaceState === "hunt" ? "return" : actor.surfaceState;
  }
  if (mouseDistance <= mouse.huntRadius && actor.surfaceState === "notice" && now - actor.surfaceStateStartedAt >= mouse.noticeDelayMs) {
    return "hunt";
  }
  if (mouseDistance <= mouse.noticeRadius) {
    return actor.surfaceState === "hunt" ? "hunt" : "notice";
  }
  return actor.surfaceState === "notice" || actor.surfaceState === "hunt" ? "return" : actor.surfaceState;
}

function updateInteractiveSurfaceActorRest(actor, dt, now) {
  const rest = actor.definition.rest;
  if (!rest?.enabled) {
    return false;
  }

  if (actor.surfaceState === "rest" && actor.restTarget && now <= actor.restUntil) {
    actor.x = actor.restTarget.x;
    actor.y = actor.restTarget.y;
    setInteractiveActorPose(actor, getInteractiveActorPose(actor, "rest", [rest.animation, "cardRest", "default", "idle"]), now);
    return true;
  }

  if (actor.surfaceState === "rest" && now > actor.restUntil) {
    actor.restTarget = null;
    actor.nextRestAt = now + getRandomRangeValue(rest.intervalMs, 16000);
    setInteractiveActorSurfaceState(actor, "idle", now);
  }

  if (actor.surfaceState === "restTravel" && actor.restTarget) {
    const arrived = moveInteractiveActorToward(actor, actor.restTarget, dt, actor.definition.speed);
    if (arrived) {
      actor.restUntil = now + getRandomRangeValue(rest.durationMs, 8000);
      setInteractiveActorSurfaceState(actor, "rest", now);
      setInteractiveActorPose(actor, getInteractiveActorPose(actor, "rest", [rest.animation, "cardRest", "default", "idle"]), now);
    } else {
      setInteractiveActorPose(actor, getInteractiveActorPose(actor, "moving", ["return", "default", "walk"]), now);
    }
    return true;
  }

  if (now >= actor.nextRestAt) {
    const target = getInteractiveBackgroundCardEdgeTarget(actor);
    if (target) {
      actor.restTarget = target;
      actor.returnTarget = actor.surfaceTarget || target;
      setInteractiveActorSurfaceState(actor, "restTravel", now);
      return true;
    }
    actor.nextRestAt = now + getRandomRangeValue(rest.intervalMs, 16000);
  }

  return false;
}

function updateInteractiveSurfaceActorMovement(actor, dt, now) {
  snapInteractiveActorToConnectionRoute(actor, now);
  const target = actor.surfaceTarget || pickInteractiveActorSurfaceRoute(actor);
  const arrived = target
    ? moveInteractiveActorToward(actor, target, dt, actor.definition.speed)
    : false;
  if (arrived) {
    advanceInteractiveActorSurfaceTarget(actor);
  }
  setInteractiveActorPose(actor, getInteractiveActorPose(actor, "moving", ["default", "walk"]), now);
}

function updateInteractiveSurfaceActor(actor, dt, now) {
  const mouseIsFresh = interactiveBackgroundState.mouse.active && now - interactiveBackgroundState.mouse.lastMoveAt < 6000;
  const mouseDistance = mouseIsFresh
    ? Math.hypot(interactiveBackgroundState.mouse.worldX - actor.x, interactiveBackgroundState.mouse.worldY - actor.y)
    : Number.POSITIVE_INFINITY;
  const mouseState = getInteractiveActorMouseHuntState(actor, mouseDistance, now, mouseIsFresh);

  if (mouseState === "notice" || mouseState === "hunt" || mouseState === "return") {
    if (actor.surfaceState !== mouseState) {
      actor.returnTarget = actor.surfaceTarget || actor.restTarget || getRandomVisibleWorldPoint();
      setInteractiveActorSurfaceState(actor, mouseState, now);
    }
  }

  if (actor.surfaceState === "notice") {
    setInteractiveActorPose(
      actor,
      getInteractiveActorPose(actor, "notice", [actor.definition.mouse?.animations?.notice || "notice", "mouseNear", "moving", "default", "idle"]),
      now
    );
    return;
  }

  if (actor.surfaceState === "hunt") {
    moveInteractiveActorToward(
      actor,
      { x: interactiveBackgroundState.mouse.worldX, y: interactiveBackgroundState.mouse.worldY },
      dt,
      actor.definition.speed * (actor.definition.mouse?.huntSpeedMultiplier || 1.35)
    );
    setInteractiveActorPose(
      actor,
      getInteractiveActorPose(actor, "hunt", [actor.definition.mouse?.animations?.hunt || "hunt", "mouseNear", "moving", "default", "walk"]),
      now
    );
    return;
  }

  if (actor.surfaceState === "return") {
    const target = actor.returnTarget || actor.surfaceTarget || pickInteractiveActorSurfaceRoute(actor);
    const arrived = target ? moveInteractiveActorToward(actor, target, dt, actor.definition.speed) : true;
    setInteractiveActorPose(actor, getInteractiveActorPose(actor, "return", ["moving", "default", "walk"]), now);
    if (arrived) {
      actor.returnTarget = null;
      setInteractiveActorSurfaceState(actor, "idle", now);
    }
    return;
  }

  if (updateInteractiveSurfaceActorRest(actor, dt, now)) {
    return;
  }

  updateInteractiveSurfaceActorMovement(actor, dt, now);
}

function updateInteractiveBackgroundActor(actor, dt, now) {
  const definition = actor.definition;
  actor.phase += dt * 0.4;

  if (updateInteractiveActorSurfaceTransition(actor, now)) {
    return;
  }

  if (updateInteractiveActorInteractions(actor, dt, now)) {
    return;
  }

  if (definition.behavior === "surfaceWanderAndMouseHunt") {
    updateInteractiveSurfaceActor(actor, dt, now);
    return;
  }

  if (definition.behavior === "growAroundCard") {
    if (!getInteractiveBackgroundCardById(actor.targetCardId)) {
      const card = pickInteractiveBackgroundCard();
      actor.targetCardId = card?.id || "";
    }
    setInteractiveActorPose(actor, getInteractiveActorPose(actor, "default"), now);
    return;
  }

  if (definition.behavior === "orbitCard") {
    const target = getInteractiveBackgroundCardTarget(actor, "center");
    if (target) {
      const radius = Math.max(target.card.width, target.card.height) * 0.58;
      const orbitSpeed = Math.max(0.08, definition.speed / 180);
      const previousX = actor.x;
      const previousY = actor.y;
      actor.phase += dt * orbitSpeed;
      actor.x = target.x + Math.cos(actor.phase) * radius;
      actor.y = target.y + Math.sin(actor.phase) * radius;
      updateInteractiveActorDirection(actor, previousX, previousY);
      setInteractiveActorPose(actor, getInteractiveActorPose(actor, "orbit", getInteractiveActorPose(actor, "moving", "walk")), now);
      return;
    }
  }

  const mouseIsFresh = interactiveBackgroundState.mouse.active && now - interactiveBackgroundState.mouse.lastMoveAt < 6000;
  const mouseDistance = mouseIsFresh
    ? Math.hypot(interactiveBackgroundState.mouse.worldX - actor.x, interactiveBackgroundState.mouse.worldY - actor.y)
    : Number.POSITIVE_INFINITY;
  const shouldFollowMouse = (
    definition.behavior === "followMouse"
    || definition.behavior === "wanderAndFollowMouse"
  ) && mouseDistance <= definition.mouseInterestRadius;

  if (shouldFollowMouse) {
    moveInteractiveActorToward(
      actor,
      { x: interactiveBackgroundState.mouse.worldX, y: interactiveBackgroundState.mouse.worldY },
      dt,
      definition.speed * 1.65
    );
    setInteractiveActorPose(actor, getInteractiveActorPose(actor, "mouseNear", getInteractiveActorPose(actor, "moving", "walk")), now);
    return;
  }

  if (definition.behavior === "restOnCard" || (definition.behavior === "wanderAndFollowMouse" && definition.canRestOnCards)) {
    const target = getInteractiveBackgroundCardTarget(actor);
    if (target && actor.pauseUntil > now) {
      actor.x = target.x;
      actor.y = target.y;
      setInteractiveActorPose(actor, getInteractiveActorPose(actor, "cardRest", "rest"), now);
      return;
    }
    if (target) {
      const arrived = moveInteractiveActorToward(actor, target, dt, definition.speed);
      if (arrived) {
        actor.pauseUntil = now + 1800 + Math.random() * 4200;
        setInteractiveActorPose(actor, getInteractiveActorPose(actor, "cardRest", "rest"), now);
      } else {
        setInteractiveActorPose(actor, getInteractiveActorPose(actor, "moving", "walk"), now);
      }
      return;
    }
  }

  updateInteractiveBackgroundWander(actor, dt);
  setInteractiveActorPose(actor, getInteractiveActorPose(actor, "moving", "walk"), now);
}

function drawInteractiveBackgroundImage(context, imageRecord, x, y, width, height, opacity = 1) {
  if (!imageRecord?.loaded) {
    return false;
  }

  context.save();
  context.globalAlpha *= opacity;
  context.drawImage(imageRecord.image, x, y, width, height);
  context.restore();
  return true;
}

function drawInteractiveBackgroundRoundedRect(context, x, y, width, height, radius) {
  const safeRadius = Math.max(0, Math.min(radius, width / 2, height / 2));
  if (typeof context.roundRect === "function") {
    context.roundRect(x, y, width, height, safeRadius);
    return;
  }

  context.moveTo(x + safeRadius, y);
  context.lineTo(x + width - safeRadius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + safeRadius);
  context.lineTo(x + width, y + height - safeRadius);
  context.quadraticCurveTo(x + width, y + height, x + width - safeRadius, y + height);
  context.lineTo(x + safeRadius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - safeRadius);
  context.lineTo(x, y + safeRadius);
  context.quadraticCurveTo(x, y, x + safeRadius, y);
}

function mergeInteractiveAnimationVisual(baseAnimation, wrapperAnimation) {
  if (!baseAnimation || !wrapperAnimation) {
    return baseAnimation;
  }
  return {
    ...baseAnimation,
    offsetX: (baseAnimation.offsetX || 0) + (wrapperAnimation.offsetX || 0),
    offsetY: (baseAnimation.offsetY || 0) + (wrapperAnimation.offsetY || 0),
    scale: (baseAnimation.scale || 1) * (wrapperAnimation.scale || 1),
    opacity: (baseAnimation.opacity ?? 1) * (wrapperAnimation.opacity ?? 1)
  };
}

function resolveInteractiveActorAnimationByPose(actor, pose, now, depth = 0, wrapperAnimation = null) {
  const animations = actor.definition.animations || {};
  const animation = animations[pose]
    || animations.idle
    || animations.default
    || Object.values(animations)[0]
    || null;
  return resolveInteractiveActorAnimation(actor, animation, pose, now, depth, wrapperAnimation);
}

function resolveInteractiveActorAnimation(actor, animation, pose, now, depth = 0, wrapperAnimation = null) {
  if (!animation || depth > 6) {
    return mergeInteractiveAnimationVisual(animation, wrapperAnimation);
  }

  if (animation.type === "randomSet") {
    const items = Array.isArray(animation.items) ? animation.items : [];
    if (!items.length) {
      return null;
    }
    const key = pose || actor.pose || "default";
    const memory = actor.animationMemory?.randomSets || {};
    const previous = memory[key];
    if (!previous || now >= previous.nextAt || !items.includes(previous.pose)) {
      const nextPose = items[Math.floor(Math.random() * items.length)];
      memory[key] = {
        pose: nextPose,
        nextAt: now + getRandomRangeValue(animation.intervalMs, 6000)
      };
      actor.animationMemory.randomSets = memory;
    }
    return resolveInteractiveActorAnimationByPose(actor, memory[key].pose, now, depth + 1, mergeInteractiveAnimationVisual(animation, wrapperAnimation));
  }

  if (animation.type === "sequence") {
    const steps = Array.isArray(animation.steps) ? animation.steps : [];
    if (!steps.length) {
      return null;
    }
    const elapsed = Math.max(0, now - (actor.poseStartedAt || now));
    let cursor = 0;
    for (const step of steps) {
      const duration = Math.max(80, step.durationMs || 800);
      if (step.loop || elapsed <= cursor + duration) {
        return resolveInteractiveActorAnimationByPose(actor, step.animation, now, depth + 1, mergeInteractiveAnimationVisual(animation, wrapperAnimation));
      }
      cursor += duration;
    }
    const lastStep = steps[steps.length - 1];
    return resolveInteractiveActorAnimationByPose(actor, lastStep.animation, now, depth + 1, mergeInteractiveAnimationVisual(animation, wrapperAnimation));
  }

  if (animation.type === "directional") {
    const directionalPose = animation[actor.direction]
      || animation.default
      || animation.right
      || animation.left
      || animation.down
      || animation.up;
    return directionalPose
      ? resolveInteractiveActorAnimationByPose(actor, directionalPose, now, depth + 1, mergeInteractiveAnimationVisual(animation, wrapperAnimation))
      : null;
  }

  if (animation.type === "oneShot") {
    const elapsed = Math.max(0, now - (actor.poseStartedAt || now));
    const nextPose = elapsed <= animation.durationMs ? animation.animation : animation.fallback;
    return resolveInteractiveActorAnimationByPose(actor, nextPose, now, depth + 1, mergeInteractiveAnimationVisual(animation, wrapperAnimation));
  }

  return mergeInteractiveAnimationVisual(animation, wrapperAnimation);
}

function getInteractiveActorAnimation(actor, now = performance.now()) {
  return resolveInteractiveActorAnimationByPose(actor, actor.pose, now);
}

function drawInteractiveActorAnimation(context, actor, animation, x, y, width, height, now) {
  if (!animation) {
    return false;
  }

  const imageRecord = getInteractiveBackgroundImage(animation.asset, "actors");
  if (!imageRecord?.loaded) {
    return false;
  }

  context.save();
  context.globalAlpha *= animation.opacity ?? 1;
  const scale = animation.scale || 1;
  const drawWidth = width * scale;
  const drawHeight = height * scale;
  let drawX = x + (width - drawWidth) / 2 + (animation.offsetX || 0) * state.viewport.zoom;
  let drawY = y + (height - drawHeight) / 2 + (animation.offsetY || 0) * state.viewport.zoom;
  if (animation.flipByDirection && actor.direction === "left") {
    context.translate(drawX + drawWidth, drawY);
    context.scale(-1, 1);
    drawX = 0;
    drawY = 0;
  }

  if (animation.type === "spritesheet" && animation.frames > 1) {
    const elapsed = Math.max(0, now - (actor.poseStartedAt || now));
    const rawFrame = Math.floor((elapsed / 1000) * animation.fps);
    const frameIndex = animation.loop ? rawFrame % animation.frames : Math.min(animation.frames - 1, rawFrame);
    const columns = animation.columns || animation.frames;
    const frameWidth = animation.frameWidth || Math.floor(imageRecord.image.width / columns);
    const frameHeight = animation.frameHeight || imageRecord.image.height;
    const sourceX = (frameIndex % columns) * frameWidth;
    const sourceY = Math.floor(frameIndex / columns) * frameHeight;
    context.drawImage(imageRecord.image, sourceX, sourceY, frameWidth, frameHeight, drawX, drawY, drawWidth, drawHeight);
  } else {
    context.drawImage(imageRecord.image, drawX, drawY, drawWidth, drawHeight);
  }

  context.restore();
  return true;
}

function drawInteractiveBackgroundActor(context, actor) {
  const definition = actor.definition;
  const screen = worldToScreen(actor.x, actor.y);
  const width = definition.width * state.viewport.zoom;
  const height = definition.height * state.viewport.zoom;

  if (
    screen.x + width < -80
    || screen.y + height < -80
    || screen.x - width > window.innerWidth + 80
    || screen.y - height > window.innerHeight + 80
  ) {
    return;
  }

  const sprite = getInteractiveBackgroundImage(definition.sprite, "actors");
  const x = screen.x - width / 2;
  const y = screen.y - height / 2;
  context.save();
  context.globalAlpha = definition.opacity;
  const now = performance.now();
  if (drawInteractiveActorAnimation(context, actor, getInteractiveActorAnimation(actor, now), x, y, width, height, now)) {
    // The active animation handled drawing.
  } else if (sprite?.loaded) {
    context.drawImage(sprite.image, x, y, width, height);
  } else {
    context.fillStyle = definition.color;
    context.beginPath();
    drawInteractiveBackgroundRoundedRect(context, x, y, width, height, Math.min(width, height) * 0.32);
    context.fill();
  }
  context.restore();
}

function drawInteractiveBackgroundDecoration(context, actor) {
  const target = getInteractiveBackgroundCardTarget(actor, "center");
  if (!target) {
    return;
  }

  const card = target.card;
  const topLeft = worldToScreen(card.x - 10, card.y - 10);
  const width = (card.width + 20) * state.viewport.zoom;
  const height = (card.height + 20) * state.viewport.zoom;

  context.save();
  context.globalAlpha = actor.definition.opacity * 0.62;
  context.strokeStyle = actor.definition.color;
  context.lineWidth = Math.max(2, 3 * state.viewport.zoom);
  context.lineCap = "round";
  context.lineJoin = "round";
  context.beginPath();
  drawInteractiveBackgroundRoundedRect(context, topLeft.x, topLeft.y, width, height, Math.min(24, 12 * state.viewport.zoom));
  context.stroke();

  const branchCount = 4;
  for (let index = 0; index < branchCount; index += 1) {
    const tValue = (index + 1) / (branchCount + 1);
    const x = topLeft.x + width * tValue;
    const y = topLeft.y + (index % 2 === 0 ? height : 0);
    context.beginPath();
    context.moveTo(x, y);
    context.quadraticCurveTo(
      x + Math.sin(actor.phase + index) * 22 * state.viewport.zoom,
      y + (index % 2 === 0 ? 22 : -22) * state.viewport.zoom,
      x + Math.cos(actor.phase + index) * 38 * state.viewport.zoom,
      y + (index % 2 === 0 ? 36 : -36) * state.viewport.zoom
    );
    context.stroke();
  }
  context.restore();
}

function drawInteractiveCardEffect(context, entry, now) {
  const elapsed = Math.max(0, now - entry.startedAt);
  if (now < entry.startedAt) {
    return;
  }
  const duration = Math.max(120, entry.durationMs || 600);
  const progress = clamp(elapsed / duration, 0, 1);
  const card = entry.card;
  const cardCenter = worldToScreen(card.x + card.width / 2, card.y + card.height / 2);
  const anchorWorld = entry.anchor || {
    x: card.x + card.width / 2,
    y: card.y + card.height / 2
  };
  const anchor = worldToScreen(anchorWorld.x, anchorWorld.y);
  const width = card.width * state.viewport.zoom;
  const height = card.height * state.viewport.zoom;
  const radius = Math.max(width, height) * (0.18 + progress * 0.48);
  const color = entry.effect.color || "#7aa884";
  const opacity = clamp(Number(entry.effect.opacity ?? 1), 0, 1);

  context.save();
  context.globalAlpha = (1 - (progress * 0.65)) * opacity;
  context.strokeStyle = color;
  context.fillStyle = color;
  context.lineWidth = Math.max(2, 4 * state.viewport.zoom);
  context.lineCap = "round";

  if (entry.effect.type === "portal") {
    for (let index = 0; index < 3; index += 1) {
      const ringProgress = (progress + index * 0.18) % 1;
      context.globalAlpha = (1 - ringProgress) * 0.62 * opacity;
      context.beginPath();
      context.ellipse(
        anchor.x,
        anchor.y,
        radius * (0.55 + ringProgress),
        radius * (0.18 + ringProgress * 0.12),
        (now / 420) + index,
        0,
        Math.PI * 2
      );
      context.stroke();
    }
  } else if (entry.effect.type === "fade") {
    context.globalAlpha = (entry.action === "create" ? progress * 0.42 : (1 - progress) * 0.42) * opacity;
    context.fillRect(cardCenter.x - width / 2, cardCenter.y - height / 2, width, height);
  } else if (entry.effect.type === "slide") {
    const offset = (entry.action === "create" ? 1 - progress : progress) * 42 * state.viewport.zoom;
    context.globalAlpha = 0.42 * opacity;
    context.beginPath();
    drawInteractiveBackgroundRoundedRect(context, cardCenter.x - width / 2, cardCenter.y - height / 2 + offset, width, height, 8 * state.viewport.zoom);
    context.stroke();
  } else if (entry.effect.type === "scale") {
    const scale = entry.action === "create" ? progress : 1 - progress;
    context.globalAlpha = 0.5 * opacity;
    context.beginPath();
    drawInteractiveBackgroundRoundedRect(
      context,
      cardCenter.x - (width * scale) / 2,
      cardCenter.y - (height * scale) / 2,
      width * scale,
      height * scale,
      8 * state.viewport.zoom
    );
    context.stroke();
  } else if (entry.effect.type === "ripple") {
    context.globalAlpha = (1 - progress) * 0.58 * opacity;
    context.lineWidth = Math.max(1, 3 * state.viewport.zoom);
    context.beginPath();
    context.arc(anchor.x, anchor.y, Math.max(4, entry.effect.radius * state.viewport.zoom * progress), 0, Math.PI * 2);
    context.stroke();
  } else if (entry.effect.type === "glow") {
    const glowAlpha = (0.22 + Math.sin(progress * Math.PI) * 0.34) * opacity;
    context.globalAlpha = glowAlpha;
    context.shadowColor = color;
    context.shadowBlur = Math.max(12, 28 * state.viewport.zoom);
    context.lineWidth = Math.max(2, 3 * state.viewport.zoom);
    context.beginPath();
    drawInteractiveBackgroundRoundedRect(context, cardCenter.x - width / 2, cardCenter.y - height / 2, width, height, 8 * state.viewport.zoom);
    context.stroke();
  } else if (entry.effect.type === "pulse") {
    const pulse = Math.sin(progress * Math.PI);
    const grow = 1 + pulse * 0.08;
    context.globalAlpha = (1 - progress * 0.5) * 0.48 * opacity;
    context.beginPath();
    drawInteractiveBackgroundRoundedRect(
      context,
      cardCenter.x - (width * grow) / 2,
      cardCenter.y - (height * grow) / 2,
      width * grow,
      height * grow,
      8 * state.viewport.zoom
    );
    context.stroke();
  } else if (entry.effect.type === "particleBurst") {
    const particles = Array.isArray(entry.particles) ? entry.particles : [];
    particles.forEach((particle) => {
      const distance = particle.distance * state.viewport.zoom * progress;
      const wobble = Math.sin((progress * Math.PI * 2) + particle.phase) * 5 * state.viewport.zoom;
      const x = anchor.x + Math.cos(particle.angle) * distance + Math.cos(particle.angle + Math.PI / 2) * wobble;
      const y = anchor.y + Math.sin(particle.angle) * distance + Math.sin(particle.angle + Math.PI / 2) * wobble;
      context.globalAlpha = (1 - progress) * particle.alpha * opacity;
      context.beginPath();
      context.arc(x, y, particle.radius * state.viewport.zoom, 0, Math.PI * 2);
      context.fill();
    });
  }

  if (entry.effect.asset) {
    const imageRecord = getInteractiveBackgroundImage(entry.effect.asset, "actors");
    const imageSize = Math.max(48, Math.min(width, height) * 0.42);
    drawInteractiveBackgroundImage(context, imageRecord, anchor.x - imageSize / 2, anchor.y - imageSize / 2, imageSize, imageSize, (1 - progress * 0.2) * opacity);
  }

  context.restore();
}

function ensureInteractiveBackgroundParticles(count) {
  if (interactiveBackgroundState.particles.length === count) {
    return;
  }

  const bounds = getVisibleWorldBounds(320);
  interactiveBackgroundState.particles = Array.from({ length: count }, () => ({
    x: bounds.left + Math.random() * Math.max(1, bounds.right - bounds.left),
    y: bounds.top + Math.random() * Math.max(1, bounds.bottom - bounds.top),
    radius: 1.2 + Math.random() * 2.4,
    drift: 4 + Math.random() * 20,
    phase: Math.random() * Math.PI * 2
  }));
}

function drawInteractiveBackgroundSurface(context, config, profile, now) {
  const background = config.background || defaultVisualTheme.interactiveBackground.background;
  const opacity = clamp(Number(background.opacity), 0, 1);
  if (background.type === "none" || opacity <= 0) {
    return;
  }

  context.save();
  context.globalAlpha = opacity;

  if (background.type === "solid") {
    context.fillStyle = background.color;
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);
  } else if (background.type === "gradient") {
    const colors = background.colors.length ? background.colors : [background.color, getDefaultConnectionColor(background.color)];
    const gradient = context.createLinearGradient(0, 0, window.innerWidth, window.innerHeight);
    colors.forEach((color, index) => {
      gradient.addColorStop(colors.length === 1 ? 0 : index / (colors.length - 1), color);
    });
    context.fillStyle = gradient;
    context.fillRect(0, 0, window.innerWidth, window.innerHeight);
  } else if (background.type === "image") {
    const imageRecord = getInteractiveBackgroundImage(background.asset, "backgrounds");
    if (imageRecord?.loaded) {
      const imageRatio = imageRecord.image.width / Math.max(1, imageRecord.image.height);
      const canvasRatio = window.innerWidth / Math.max(1, window.innerHeight);
      let width = window.innerWidth;
      let height = window.innerHeight;
      if (imageRatio > canvasRatio) {
        width = height * imageRatio;
      } else {
        height = width / imageRatio;
      }
      context.drawImage(imageRecord.image, (window.innerWidth - width) / 2, (window.innerHeight - height) / 2, width, height);
    }
  } else if (background.type === "particles") {
    const count = Math.round(background.particleCount * profile.particleScale);
    ensureInteractiveBackgroundParticles(count);
    const bounds = getVisibleWorldBounds(360);
    context.fillStyle = background.particleColor;
    interactiveBackgroundState.particles.forEach((particle) => {
      particle.y += Math.sin((now / 1000) + particle.phase) * 0.012 * particle.drift;
      if (particle.x < bounds.left || particle.x > bounds.right || particle.y < bounds.top || particle.y > bounds.bottom) {
        particle.x = bounds.left + Math.random() * Math.max(1, bounds.right - bounds.left);
        particle.y = bounds.top + Math.random() * Math.max(1, bounds.bottom - bounds.top);
      }
      const screen = worldToScreen(particle.x, particle.y);
      context.beginPath();
      context.arc(screen.x, screen.y, particle.radius * state.viewport.zoom, 0, Math.PI * 2);
      context.fill();
    });
  }

  context.restore();
}

function clearInteractiveBackgroundCanvas(context, metrics) {
  context.setTransform(1, 0, 0, 1, 0, 0);
  context.clearRect(0, 0, metrics.width * metrics.dpr, metrics.height * metrics.dpr);
  context.setTransform(metrics.dpr, 0, 0, metrics.dpr, 0, 0);
}

function drawInteractiveBackgroundFrame(timestamp) {
  interactiveBackgroundState.raf = 0;
  if (!isInteractiveBackgroundEnabled()) {
    stopInteractiveBackgroundEngine();
    return;
  }

  if (!ensureInteractiveBackgroundLayers()) {
    stopInteractiveBackgroundEngine();
    return;
  }

  const config = getInteractiveBackgroundConfig();
  const profile = getInteractiveBackgroundQualityProfile();
  const targetFps = Math.min(config.fps, profile.fps);
  const minFrameDelta = 1000 / Math.max(1, targetFps);
  if (interactiveBackgroundState.lastFrameAt && timestamp - interactiveBackgroundState.lastFrameAt < minFrameDelta) {
    interactiveBackgroundState.raf = requestAnimationFrame(drawInteractiveBackgroundFrame);
    return;
  }

  const previousFrameAt = interactiveBackgroundState.lastFrameAt || timestamp;
  const dt = clamp((timestamp - previousFrameAt) / 1000, 0.001, 0.08);
  interactiveBackgroundState.lastFrameAt = timestamp;

  const baseMetrics = resizeInteractiveBackgroundCanvas(interactiveBackgroundState.baseCanvas);
  const overlayMetrics = resizeInteractiveBackgroundCanvas(interactiveBackgroundState.overlayCanvas);
  const baseContext = interactiveBackgroundState.baseContext;
  const overlayContext = interactiveBackgroundState.overlayContext;

  clearInteractiveBackgroundCanvas(baseContext, baseMetrics);
  clearInteractiveBackgroundCanvas(overlayContext, overlayMetrics);
  drawInteractiveBackgroundSurface(baseContext, config, profile, timestamp);
  pruneInteractiveCardEffects(timestamp);

  interactiveBackgroundState.actors.forEach((actor) => {
    updateInteractiveBackgroundActor(actor, dt, timestamp);
    const context = actor.definition.layer === "background" ? baseContext : overlayContext;
    if (actor.definition.behavior === "growAroundCard") {
      drawInteractiveBackgroundDecoration(context, actor);
    } else {
      drawInteractiveBackgroundActor(context, actor);
    }
  });
  interactiveBackgroundState.cardEffects.forEach((entry) => drawInteractiveCardEffect(overlayContext, entry, timestamp));

  interactiveBackgroundState.raf = requestAnimationFrame(drawInteractiveBackgroundFrame);
}

function updateInteractiveBackgroundPointer(event) {
  if (!event) {
    return;
  }

  const point = screenToWorld(event.clientX, event.clientY);
  interactiveBackgroundState.mouse.worldX = point.x;
  interactiveBackgroundState.mouse.worldY = point.y;
  interactiveBackgroundState.mouse.active = true;
  interactiveBackgroundState.mouse.lastMoveAt = performance.now();
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

  syncInteractiveBackgroundEngine();
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

function getThemeCardSurfaceAsset(kind, surface) {
  const assets = getVisualTheme().assets?.[surface] || {};
  const asset = assets[kind] || assets.default || "";
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
  emitThemeInteractionEvent("urlLoaded", { card });

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
  element.classList.toggle("is-theme-removing", pendingCardRemovalIds.has(card.id));
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
  element.addEventListener("pointerenter", () => emitThemeInteractionEvent("cardHovered", { card }));

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
    emitThemeInteractionEvent("cardContentChanged", { card });
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

  const sharedBadge = document.createElement("span");
  sharedBadge.className = "shared-group-badge";
  sharedBadge.textContent = t("sharedGroupBadge");
  sharedBadge.title = card.sharedGroup?.id
    ? `${t("sharedGroupLocalStatus")}: ${card.sharedGroup.id}. ${t("sharedGroupLimit")}: ${getSharedGroupLimitLabel()}`
    : t("sharedGroupBadge");
  sharedBadge.hidden = !isGroupShared(card);

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
  } else if (card.kind === "group") {
    header.append(grip, title, sharedBadge, headerFill, kindIcon);
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
  const headerAsset = getThemeCardSurfaceAsset(card.kind, "cardHeaders");
  const bodyAsset = getThemeCardSurfaceAsset(card.kind, "cardBodies");

  element.style.setProperty("--card-header-color", headerColor);
  element.style.setProperty("--card-body-color", bodyColor);
  element.style.setProperty("--card-header-image", headerAsset ? `url("${headerAsset}")` : "none");
  element.style.setProperty("--card-body-image", bodyAsset ? `url("${bodyAsset}")` : "none");
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
      const contentChanged = beforeText !== afterText;
      const historyRecorded = recordCommentTextEdit(card, beforeText, afterText);
      if (contentChanged) {
        emitThemeInteractionEvent("cardContentChanged", { card });
      }
      if (contentChanged || historyRecorded) {
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

  if (card.kind === "chat") {
    return renderChat(card);
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

  if (card.kind === "clock") {
    return renderClock(card);
  }

  if (card.kind === "weather") {
    return renderWeather(card);
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

function renderChat(card) {
  card.chatMessages = normalizeChatMessages(card.chatMessages);
  const wrapper = document.createElement("div");
  wrapper.className = "chat-card";

  const messages = document.createElement("div");
  messages.className = "chat-messages";
  if (!card.chatMessages.length) {
    const empty = document.createElement("div");
    empty.className = "chat-empty";
    empty.textContent = t("chatEmpty");
    messages.appendChild(empty);
  } else {
    card.chatMessages.forEach((message) => {
      if (message.deletedAt) {
        return;
      }
      const item = document.createElement("article");
      item.className = "chat-message";

      const meta = document.createElement("div");
      meta.className = "chat-message-meta";
      const author = document.createElement("strong");
      author.textContent = message.author?.name || t("unknown");
      const time = document.createElement("span");
      time.textContent = formatDateTimeDisplay(message.createdAt);
      meta.append(author, time);

      const text = document.createElement("div");
      text.className = "chat-message-text";
      text.textContent = message.text;
      item.append(meta, text);
      messages.appendChild(item);
    });
  }

  const form = document.createElement("form");
  form.className = "chat-compose";

  const input = document.createElement("textarea");
  input.className = "chat-input";
  input.rows = 2;
  input.maxLength = 4000;
  input.placeholder = t("chatPlaceholder");
  input.disabled = state.locked;

  const sendButton = document.createElement("button");
  sendButton.type = "submit";
  sendButton.textContent = t("sendChatMessage");
  sendButton.disabled = state.locked;

  const sendMessage = () => {
    const text = input.value.trim();
    if (!text || state.locked) {
      return;
    }
    card.chatMessages = normalizeChatMessages([...card.chatMessages, createChatMessage(text)]);
    card.updatedAt = Date.now();
    input.value = "";
    emitThemeInteractionEvent("cardContentChanged", { card });
    render();
    scheduleSave();
  };

  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    sendMessage();
  });

  form.append(input, sendButton);
  wrapper.append(messages, form);
  requestAnimationFrame(() => {
    messages.scrollTop = messages.scrollHeight;
  });
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
  emitThemeInteractionEvent("timerFinished", { card });
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
  emitThemeInteractionEvent("reminderTriggered", { card });
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
  refreshVisibleClockCards(now);
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

function formatClockParts(card, now = Date.now()) {
  const locale = getActiveLanguage() === "ru" ? "ru-RU" : "en-US";
  const timeZone = getClockResolvedTimeZone(card);
  const hour12 = state.settings?.timeFormat === "12h";
  const second = card.clockShowSeconds === false ? undefined : "2-digit";

  try {
    return {
      time: new Intl.DateTimeFormat(locale, {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second,
        hour12
      }).format(now),
      date: new Intl.DateTimeFormat(locale, {
        timeZone,
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric"
      }).format(now),
      timeZone
    };
  } catch {
    return {
      time: new Date(now).toLocaleTimeString(locale),
      date: new Date(now).toLocaleDateString(locale),
      timeZone: getSystemTimeZone()
    };
  }
}

function updateClockCardElement(element, card, now = Date.now()) {
  if (!element || !card) {
    return;
  }
  const parts = formatClockParts(card, now);
  const time = element.querySelector(".clock-time");
  const date = element.querySelector(".clock-date");
  const zone = element.querySelector(".clock-zone");
  const input = element.querySelector(".clock-timezone-input");

  if (time) {
    time.textContent = parts.time;
  }
  if (date) {
    date.textContent = parts.date;
  }
  if (zone) {
    zone.textContent = card.clockTimeZone === "system"
      ? t("clockSystemTimeZone", { zone: parts.timeZone })
      : parts.timeZone;
  }
  if (input && document.activeElement !== input) {
    input.value = card.clockTimeZone === "system" ? "" : card.clockTimeZone;
    input.disabled = state.locked;
  }
}

function refreshVisibleClockCards(now = Date.now()) {
  workspace.querySelectorAll(".clock-card[data-card-id]").forEach((element) => {
    const card = getCardById(element.dataset.cardId);
    if (card?.kind === "clock") {
      updateClockCardElement(element, card, now);
    }
  });
}

function renderClock(card) {
  Object.assign(card, normalizeClockFields(card));
  const wrapper = document.createElement("div");
  wrapper.className = "clock-card";
  wrapper.dataset.cardId = card.id;

  const display = document.createElement("div");
  display.className = "clock-display";
  const time = document.createElement("div");
  time.className = "clock-time";
  const date = document.createElement("div");
  date.className = "clock-date";
  const zone = document.createElement("div");
  zone.className = "clock-zone";
  display.append(time, date, zone);

  const settings = document.createElement("label");
  settings.className = "clock-timezone-row";
  const label = document.createElement("span");
  label.textContent = t("clockTimeZone");
  const input = document.createElement("input");
  input.type = "text";
  input.className = "card-field clock-timezone-input";
  input.placeholder = getSystemTimeZone();
  input.value = card.clockTimeZone === "system" ? "" : card.clockTimeZone;
  input.readOnly = state.locked;
  input.addEventListener("change", () => {
    card.clockTimeZone = normalizeClockTimeZone(input.value);
    input.value = card.clockTimeZone === "system" ? "" : card.clockTimeZone;
    updateClockCardElement(wrapper, card);
    scheduleSave();
  });
  settings.append(label, input);

  const help = document.createElement("div");
  help.className = "clock-help";
  help.textContent = t("clockTimeZoneHelp");

  wrapper.append(display, settings, help);
  updateClockCardElement(wrapper, card);
  return wrapper;
}

function getWeatherTemperature(card) {
  const value = Number(card.weatherTemperatureC);
  if (!Number.isFinite(value)) {
    return "";
  }
  if (normalizeWeatherUnits(card.weatherUnits) === "imperial") {
    return `${Math.round((value * 9) / 5 + 32)}°F`;
  }
  return `${Math.round(value)}°C`;
}

function getWeatherWind(card) {
  const value = Number(card.weatherWindKph);
  if (!Number.isFinite(value)) {
    return "";
  }
  if (normalizeWeatherUnits(card.weatherUnits) === "imperial") {
    return `${Math.round(value / 1.609)} mph`;
  }
  return `${Math.round(value)} km/h`;
}

function updateWeatherCardElement(element, card) {
  if (!element || !card) {
    return;
  }

  const locationInput = element.querySelector(".weather-location-input");
  const unitsInput = element.querySelector(".weather-units-input");
  const refreshButton = element.querySelector(".weather-refresh-button");
  const temp = element.querySelector(".weather-temperature");
  const desc = element.querySelector(".weather-description");
  const meta = element.querySelector(".weather-meta");
  const status = element.querySelector(".weather-status");

  if (locationInput && document.activeElement !== locationInput) {
    locationInput.value = card.weatherLocation || "";
    locationInput.readOnly = state.locked;
  }
  if (unitsInput) {
    unitsInput.value = normalizeWeatherUnits(card.weatherUnits);
    unitsInput.disabled = state.locked;
  }
  if (refreshButton) {
    refreshButton.disabled = state.locked || weatherFetchRequests.has(card.id);
    refreshButton.textContent = weatherFetchRequests.has(card.id) ? t("weatherLoading") : t("weatherRefresh");
  }
  if (temp) {
    temp.textContent = getWeatherTemperature(card) || "--";
  }
  if (desc) {
    desc.textContent = card.weatherDescription || t("weatherNoData");
  }
  if (meta) {
    const details = [];
    if (Number.isFinite(Number(card.weatherHumidity))) {
      details.push(t("weatherHumidity", { value: Math.round(Number(card.weatherHumidity)) }));
    }
    const wind = getWeatherWind(card);
    if (wind) {
      details.push(t("weatherWind", { value: wind }));
    }
    meta.textContent = details.join(" / ");
  }
  if (status) {
    if (card.weatherError) {
      status.textContent = card.weatherError;
      status.dataset.tone = "error";
    } else if (card.weatherUpdatedAt) {
      status.textContent = t("weatherUpdated", { time: formatDateTimeDisplay(card.weatherUpdatedAt) });
      status.dataset.tone = "muted";
    } else if (!card.weatherLocation) {
      status.textContent = t("weatherEmptyLocation");
      status.dataset.tone = "muted";
    } else {
      status.textContent = t("weatherSource");
      status.dataset.tone = "muted";
    }
  }
}

function parseWeatherResponse(data) {
  const current = Array.isArray(data?.current_condition) ? data.current_condition[0] : null;
  if (!current) {
    return null;
  }
  const description = Array.isArray(current.weatherDesc) ? current.weatherDesc[0]?.value : "";
  return {
    weatherTemperatureC: Number.isFinite(Number(current.temp_C)) ? Number(current.temp_C) : null,
    weatherFeelsLikeC: Number.isFinite(Number(current.FeelsLikeC)) ? Number(current.FeelsLikeC) : null,
    weatherDescription: typeof description === "string" ? description.slice(0, 120) : "",
    weatherHumidity: Number.isFinite(Number(current.humidity)) ? Number(current.humidity) : null,
    weatherWindKph: Number.isFinite(Number(current.windspeedKmph)) ? Number(current.windspeedKmph) : null,
    weatherUpdatedAt: Date.now(),
    weatherError: ""
  };
}

function clearWeatherResult(card) {
  card.weatherTemperatureC = null;
  card.weatherFeelsLikeC = null;
  card.weatherDescription = "";
  card.weatherHumidity = null;
  card.weatherWindKph = null;
  card.weatherUpdatedAt = null;
  card.weatherError = "";
}

async function refreshWeatherCard(card) {
  if (!card || card.kind !== "weather" || state.locked) {
    return;
  }

  const location = normalizeWeatherLocation(card.weatherLocation);
  if (!location) {
    clearWeatherResult(card);
    render();
    scheduleSave();
    return;
  }

  const activeRequest = weatherFetchRequests.get(card.id);
  if (activeRequest?.location === location) {
    return;
  }

  const requestId = createId("weather-request");
  weatherFetchRequests.set(card.id, { requestId, location });
  updateWeatherCardElement(workspace.querySelector(`.weather-card[data-card-id="${CSS.escape(card.id)}"]`), card);

  try {
    const response = await fetch(`https://wttr.in/${encodeURIComponent(location)}?format=j1`, {
      cache: "no-store"
    });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const parsed = parseWeatherResponse(await response.json());
    if (!parsed) {
      throw new Error("No weather data");
    }
    if (weatherFetchRequests.get(card.id)?.requestId !== requestId || normalizeWeatherLocation(card.weatherLocation) !== location) {
      return;
    }
    Object.assign(card, parsed);
  } catch {
    if (weatherFetchRequests.get(card.id)?.requestId === requestId) {
      card.weatherError = t("weatherFailed");
    }
  } finally {
    if (weatherFetchRequests.get(card.id)?.requestId === requestId) {
      weatherFetchRequests.delete(card.id);
      render();
      scheduleSave();
    }
  }
}

function renderWeather(card) {
  Object.assign(card, normalizeWeatherFields(card));
  const wrapper = document.createElement("div");
  wrapper.className = "weather-card";
  wrapper.dataset.cardId = card.id;

  const controls = document.createElement("div");
  controls.className = "weather-controls";

  const locationInput = document.createElement("input");
  locationInput.type = "text";
  locationInput.className = "card-field weather-location-input";
  locationInput.placeholder = t("weatherLocationPlaceholder");
  locationInput.value = card.weatherLocation || "";
  locationInput.readOnly = state.locked;
  locationInput.addEventListener("change", () => {
    const nextLocation = normalizeWeatherLocation(locationInput.value);
    if (nextLocation !== card.weatherLocation) {
      clearWeatherResult(card);
    }
    card.weatherLocation = nextLocation;
    scheduleSave();
    void refreshWeatherCard(card);
  });
  locationInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      locationInput.blur();
      const nextLocation = normalizeWeatherLocation(locationInput.value);
      if (nextLocation !== card.weatherLocation) {
        clearWeatherResult(card);
      }
      card.weatherLocation = nextLocation;
      scheduleSave();
      void refreshWeatherCard(card);
    }
  });

  const unitsInput = document.createElement("select");
  unitsInput.className = "card-field weather-units-input";
  [
    { value: "metric", label: "°C" },
    { value: "imperial", label: "°F" }
  ].forEach((option) => {
    const item = document.createElement("option");
    item.value = option.value;
    item.textContent = option.label;
    unitsInput.appendChild(item);
  });
  unitsInput.value = normalizeWeatherUnits(card.weatherUnits);
  unitsInput.disabled = state.locked;
  unitsInput.addEventListener("change", () => {
    card.weatherUnits = normalizeWeatherUnits(unitsInput.value);
    render();
    scheduleSave();
  });

  const refreshButton = document.createElement("button");
  refreshButton.type = "button";
  refreshButton.className = "weather-refresh-button";
  refreshButton.addEventListener("click", () => {
    const nextLocation = normalizeWeatherLocation(locationInput.value);
    if (nextLocation !== card.weatherLocation) {
      clearWeatherResult(card);
    }
    card.weatherLocation = nextLocation;
    card.weatherUnits = normalizeWeatherUnits(unitsInput.value);
    void refreshWeatherCard(card);
  });

  controls.append(locationInput, unitsInput, refreshButton);

  const summary = document.createElement("div");
  summary.className = "weather-summary";
  const temp = document.createElement("strong");
  temp.className = "weather-temperature";
  const desc = document.createElement("span");
  desc.className = "weather-description";
  const meta = document.createElement("span");
  meta.className = "weather-meta";
  summary.append(temp, desc, meta);

  const status = document.createElement("div");
  status.className = "weather-status";

  wrapper.append(controls, summary, status);
  updateWeatherCardElement(wrapper, card);
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
    emitThemeInteractionEvent(task.done ? "taskChecked" : "taskUnchecked", { card });
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
  appendSharedGroupConnectionOperation(connection, "connection.waypoint.added", {
    point: nextPoint
  });
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
    originPoint: clone(connection.points[pointIndex] || {}),
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
  appendSharedGroupConnectionOperation(connection, "connection.created");
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
  const previousSelectedIds = new Set(selectedIds);
  selectedConnectionId = null;
  selectedIds = new Set(ids);
  updateSelectionStyles();
  if (hadSelectedConnection) {
    renderConnections();
  }
  selectedIds.forEach((id) => {
    if (!previousSelectedIds.has(id)) {
      const card = state.cards.find((item) => item.id === id);
      if (card) {
        emitThemeInteractionEvent("cardSelected", { card });
      }
    }
  });
  previousSelectedIds.forEach((id) => {
    if (!selectedIds.has(id)) {
      const card = state.cards.find((item) => item.id === id);
      if (card) {
        emitThemeInteractionEvent("cardDeselected", { card });
      }
    }
  });
}

function getConnectionsForCardIds(cardIds) {
  const ids = new Set(cardIds);
  return state.connections.filter((connection) => (
    (connection.from.type === "card" && ids.has(connection.from.cardId)) ||
    (connection.to.type === "card" && ids.has(connection.to.cardId))
  ));
}

function clearSelection() {
  const hadSelectedConnection = Boolean(selectedConnectionId);
  const previousSelectedCards = getSelectedCards();
  selectedConnectionId = null;
  selectedIds.clear();
  updateSelectionStyles();
  if (hadSelectedConnection) {
    renderConnections();
  }
  previousSelectedCards.forEach((card) => emitThemeInteractionEvent("cardDeselected", { card }));
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

    if (isGroupShared(card)) {
      const constrained = constrainSharedGroupRect({ left, top, right, bottom }, activeAction.direction);
      left = constrained.left;
      top = constrained.top;
      right = constrained.right;
      bottom = constrained.bottom;
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
    const actor = getCurrentAuditActor();
    const at = Date.now();
    activeAction.items.forEach((item) => {
      if (Math.round(item.card.x) !== Math.round(item.originX) || Math.round(item.card.y) !== Math.round(item.originY)) {
        emitThemeInteractionEvent("cardMoved", { card: item.card });
        appendSharedGroupCardOperation(item.card, "card.moved", {
          previousPosition: {
            x: item.originX,
            y: item.originY
          },
          position: {
            x: item.card.x,
            y: item.card.y
          }
        }, { actor, at });
      }
    });
    settleMovedCommentAttachments(activeAction.items);
  }

  if (activeAction.type === "resize") {
    const card = activeAction.card;
    if (
      card
      && (
        Math.round(card.x) !== Math.round(activeAction.originX)
        || Math.round(card.y) !== Math.round(activeAction.originY)
        || Math.round(card.width) !== Math.round(activeAction.originWidth)
        || Math.round(card.height) !== Math.round(activeAction.originHeight)
      )
    ) {
      emitThemeInteractionEvent("cardResized", { card });
      appendSharedGroupCardOperation(card, "card.resized", {
        previousRect: {
          x: activeAction.originX,
          y: activeAction.originY,
          width: activeAction.originWidth,
          height: activeAction.originHeight
        },
        rect: {
          x: card.x,
          y: card.y,
          width: card.width,
          height: card.height
        }
      });
    }
  }

  if (activeAction.type === "waypoint") {
    const point = activeAction.connection.points[activeAction.pointIndex];
    if (serializeAuditValue(point) !== serializeAuditValue(activeAction.originPoint)) {
      appendSharedGroupConnectionOperation(activeAction.connection, "connection.waypoint.moved", {
        pointIndex: activeAction.pointIndex,
        previousPoint: activeAction.originPoint,
        point
      });
    }
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

function findContainingSharedGroupForCard(card) {
  const candidates = state.cards
    .filter((group) => isGroupShared(group) && isCardInsideGroup(card, group))
    .sort((left, right) => (left.width * left.height) - (right.width * right.height));
  return candidates[0] || null;
}

function commitCardCreation(card, options = {}) {
  const effect = isThemeCardEffectEnabled("create") ? getThemeCardEffect("create") : null;
  if (effect) {
    queueInteractiveCardEffect("create", card);
  }

  const delayMs = effect?.delayMs || 0;
  if (delayMs > 0) {
    const targetBoardId = state.boardId;
    window.setTimeout(() => {
      if (state.boardId !== targetBoardId) {
        return;
      }
      state.cards.push(card);
      emitThemeInteractionEvent("cardCreated", { card });
      if (typeof options.afterInsert === "function") {
        options.afterInsert(card);
      }
      render();
      scheduleSave();
    }, delayMs);
    return false;
  }

  state.cards.push(card);
  emitThemeInteractionEvent("cardCreated", { card });
  if (typeof options.afterInsert === "function") {
    options.afterInsert(card);
  }
  return true;
}

function commitCardsCreation(cards) {
  let insertedImmediately = false;
  cards.filter(Boolean).forEach((card) => {
    insertedImmediately = commitCardCreation(card) || insertedImmediately;
  });
  return insertedImmediately;
}

function getTemplateCardTitle(template) {
  return localizeTemplateValue(template.title, template.titleKey)
    || getCardTemplateDisplayName(template)
    || t(getCardTypeDefinition(template.kind).labelKey);
}

function buildTemplateCardContent(template) {
  const data = template.data && typeof template.data === "object" ? template.data : {};
  const title = getTemplateCardTitle(template);

  switch (template.kind) {
    case "comment": {
      const now = Date.now();
      const text = getTemplateDataText(data, "text");
      return {
        title,
        text,
        textHtml: normalizeRichTextHtml(data.textHtml, text),
        commentAttachment: null,
        commentCreatedAt: now,
        commentUpdatedAt: now,
        commentHistory: []
      };
    }
    case "code":
      return {
        title,
        codeLanguage: typeof data.codeLanguage === "string" ? data.codeLanguage.slice(0, 24) : "",
        text: getTemplateDataText(data, "text")
      };
    case "calculator":
      return {
        title,
        calculatorDisplay: "0",
        calculatorExpression: "",
        calculatorOperand: null,
        calculatorOperation: null,
        calculatorWaitingForOperand: false,
        calculatorError: "",
        calculatorHistory: []
      };
    case "table": {
      const columns = materializeTemplateTableColumns(data.tableColumns);
      const rows = materializeTemplateTableRows(data.tableRows, columns.length);
      return {
        title,
        tableColumns: columns,
        tableRows: rows.length ? rows : Array.from({ length: 3 }, () => createTableRow({}, columns.length))
      };
    }
    case "tasks":
      return {
        title,
        tasks: materializeTemplateTasks(data.tasks).length
          ? materializeTemplateTasks(data.tasks)
          : [{ id: createId("task"), text: t("firstTask"), done: false }]
      };
    case "bookmark":
      return {
        title,
        links: materializeTemplateLinks(data.links).length
          ? materializeTemplateLinks(data.links)
          : [createBookmarkLink()]
      };
    case "chat":
      return {
        title,
        chatMessages: normalizeChatMessages(data.chatMessages),
        sharedGroupId: typeof data.sharedGroupId === "string" ? data.sharedGroupId.slice(0, 160) : ""
      };
    case "progress":
      return {
        title,
        progressValue: 0,
        tasks: materializeTemplateTasks(data.tasks).length
          ? materializeTemplateTasks(data.tasks)
          : [{ id: createId("task"), text: t("firstTask"), done: false }]
      };
    case "timer": {
      const duration = normalizeThemeNumber(data.timerDurationMinutes, defaultTimerDurationMinutes, 1, 1440);
      return {
        title,
        timerDurationMinutes: duration,
        timerRemainingMs: duration * 60 * 1000,
        timerEndsAt: null,
        timerNotifyToast: data.timerNotifyToast !== false,
        timerPlaySound: data.timerPlaySound === true,
        timerCompletionNotifiedAt: null
      };
    }
    case "reminder":
      return {
        title,
        text: getTemplateDataText(data, "text"),
        textHtml: normalizeRichTextHtml(data.textHtml, getTemplateDataText(data, "text")),
        reminderAt: typeof data.reminderAt === "string" ? data.reminderAt : "",
        reminderShowToast: data.reminderShowToast !== false,
        reminderPlaySound: data.reminderPlaySound === true,
        reminderRepeatUntilAcknowledged: data.reminderRepeatUntilAcknowledged !== false,
        reminderRepeatIntervalMinutes: normalizeThemeNumber(data.reminderRepeatIntervalMinutes, defaultReminderRepeatIntervalMinutes, 1, 1440),
        reminderAcknowledgedAt: null,
        reminderLastTriggeredAt: null
      };
    case "clock":
      return {
        title,
        ...normalizeClockFields(data)
      };
    case "weather":
      return {
        title,
        ...normalizeWeatherFields(data)
      };
    case "schedule": {
      const entries = materializeTemplateScheduleEntries(data.scheduleEntries);
      return {
        title,
        scheduleEntries: entries.length ? entries : [createScheduleEntry({ time: "09:00", note: "" })],
        text: ""
      };
    }
    case "web": {
      const url = normalizeUrl(data.url || getTemplateDataText(data, "url"));
      return {
        title: title || (url ? getUrlTitle(url) : t("urlTitle")),
        url,
        src: url
      };
    }
    default: {
      const text = getTemplateDataText(data, "text");
      return {
        title,
        text,
        textHtml: normalizeRichTextHtml(data.textHtml, text)
      };
    }
  }
}

function createCardFromTemplate(templateSource, worldPoint = null, source = {}) {
  ensureEditMode();
  const template = normalizeCardTemplate(templateSource);
  const position = getNewCardPosition(template.width, template.height, worldPoint);
  const colors = getDefaultCardColors(template.kind);
  const data = template.data && typeof template.data === "object" ? template.data : {};
  const sourcePackId = source.packId ? normalizePackId(source.packId, "pack") : "";
  const sourceTemplateId = normalizePackId(source.templateId || template.id, "template");
  const card = {
    id: createId(template.kind),
    kind: template.kind,
    x: position.x,
    y: position.y,
    width: template.width,
    height: template.height,
    headerColor: isHexColor(data.headerColor) ? data.headerColor : colors.header,
    bodyColor: isHexColor(data.bodyColor) ? data.bodyColor : colors.body,
    customHeaderColor: isHexColor(data.headerColor),
    customBodyColor: isHexColor(data.bodyColor),
    stackOrder: getNextStackOrderForLayer(template.kind === "group" ? "group" : "card"),
    tags: normalizeTagList(data.tags),
    sourceCardPackId: sourcePackId || "",
    sourceCardTemplateId: sourcePackId ? sourceTemplateId : "",
    ...buildTemplateCardContent(template)
  };
  if (card.kind === "chat" && !card.sharedGroupId) {
    const sharedGroup = findContainingSharedGroupForCard(card);
    card.sharedGroupId = sharedGroup?.sharedGroup?.id || "";
  }

  commitCardCreation(card);
  render();
  scheduleSave();
  return card;
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
    commitCardCreation({
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
    commitCardCreation({
      ...base,
      title: t("newCode"),
      codeLanguage: "",
      text: ""
    });
  } else if (kind === "calculator") {
    commitCardCreation({
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
    commitCardCreation({
      ...base,
      title: t("newTable"),
      tableColumns: normalizeTableColumns([], 3),
      tableRows: Array.from({ length: 3 }, () => createTableRow({}, 3))
    });
  } else if (kind === "tasks") {
    commitCardCreation({
      ...base,
      title: t("newList"),
      tasks: [{ id: createId("task"), text: t("firstTask"), done: false }]
    });
  } else if (kind === "bookmark") {
    commitCardCreation({
      ...base,
      title: t("newBookmark"),
      links: [createBookmarkLink()]
    });
  } else if (kind === "chat") {
    const sharedGroup = findContainingSharedGroupForCard(base);
    commitCardCreation({
      ...base,
      title: t("newChat"),
      chatMessages: [],
      sharedGroupId: sharedGroup?.sharedGroup?.id || ""
    });
  } else if (kind === "progress") {
    commitCardCreation({
      ...base,
      title: t("newProgress"),
      progressValue: 0,
      tasks: [{ id: createId("task"), text: t("firstTask"), done: false }]
    });
  } else if (kind === "timer") {
    commitCardCreation({
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
    commitCardCreation({
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
  } else if (kind === "clock") {
    commitCardCreation({
      ...base,
      title: t("newClock"),
      clockTimeZone: "system",
      clockShowSeconds: true
    });
  } else if (kind === "weather") {
    commitCardCreation({
      ...base,
      title: t("newWeather"),
      weatherLocation: "",
      weatherUnits: "metric",
      weatherTemperatureC: null,
      weatherFeelsLikeC: null,
      weatherDescription: "",
      weatherHumidity: null,
      weatherWindKph: null,
      weatherUpdatedAt: null,
      weatherError: ""
    });
  } else if (kind === "schedule") {
    commitCardCreation({
      ...base,
      title: t("newSchedule"),
      scheduleEntries: [createScheduleEntry({ time: "09:00", note: "" })],
      text: ""
    });
  } else {
    commitCardCreation({
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
  commitCardCreation({
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

  commitCardCreation({
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

  commitCardCreation({
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

  const focusAddress = () => {
    requestAnimationFrame(() => {
      const addressInput = getCardElement(card)?.querySelector(".web-address-input");
      if (addressInput) {
        addressInput.focus();
        addressInput.select();
      }
    });
  };

  const inserted = commitCardCreation(card, { afterInsert: focusAddress });
  if (inserted) {
    render();
    scheduleSave();
  }
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

  if (Array.isArray(copy.chatMessages)) {
    copy.chatMessages = copy.chatMessages.map((message) => ({ ...message, id: createId("chat-message") }));
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

  if (copy.kind === "group") {
    copy.sharedGroup = normalizeSharedGroup(null, copy.id);
  }

  assignTopStackOrder(copy);
  const inserted = commitCardCreation(copy);
  if (inserted) {
    render();
    scheduleSave();
  }
  closeContextMenu();
}

function removeCardsByIds(ids) {
  const actor = getCurrentAuditActor();
  const at = Date.now();
  const cardsToRemove = state.cards.filter((card) => ids.has(card.id));
  const connectionsToRemove = getConnectionsForCardIds(ids);
  connectionsToRemove.forEach((connection) => {
    appendSharedGroupConnectionOperation(connection, "connection.deleted", {
      connectionId: connection.id
    }, { actor, at });
  });
  cardsToRemove.forEach((card) => {
    appendSharedGroupCardOperation(card, "card.deleted", {
      cardId: card.id,
      kind: card.kind,
      title: card.title || ""
    }, { actor, at });
  });
  state.cards = state.cards.filter((card) => !ids.has(card.id));
  removeConnectionsForCardIds(ids);
  removeReferencesForCardIds(ids);
  detachCommentsFromCardIds(ids);
  ids.forEach((id) => pendingCardRemovalIds.delete(id));
}

function deleteCardsWithThemeEffect(cards) {
  const ids = new Set(cards.map((card) => card.id));
  const effect = isThemeCardEffectEnabled("delete") ? getThemeCardEffect("delete") : null;
  if (!effect || effect.delayMs <= 0) {
    cards.forEach((card) => emitThemeInteractionEvent("cardDeleted", { card }));
    removeCardsByIds(ids);
    clearSelection();
    render();
    scheduleSave();
    closeContextMenu();
    return;
  }

  cards.forEach((card) => {
    emitThemeInteractionEvent("cardDeleted", { card });
    if (!pendingCardRemovalIds.has(card.id)) {
      queueInteractiveCardEffect("delete", card);
    }
    pendingCardRemovalIds.add(card.id);
  });
  selectedIds = new Set([...selectedIds].filter((id) => !ids.has(id)));
  render();
  closeContextMenu();
  const targetBoardId = state.boardId;
  window.setTimeout(() => {
    if (state.boardId !== targetBoardId) {
      ids.forEach((id) => pendingCardRemovalIds.delete(id));
      return;
    }
    removeCardsByIds(ids);
    clearSelection();
    render();
    scheduleSave();
  }, effect.delayMs);
}

function deleteCard(card) {
  ensureEditMode();
  if (!card || pendingCardRemovalIds.has(card.id)) {
    return;
  }

  deleteCardsWithThemeEffect([card]);
}

function deleteSelectedCards() {
  if (state.locked || selectedIds.size === 0) {
    return;
  }

  const cards = getSelectedCards().filter((card) => !pendingCardRemovalIds.has(card.id));
  if (cards.length === 0) {
    return;
  }

  deleteCardsWithThemeEffect(cards);
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

  const inserted = commitCardCreation(group);
  selectedIds = new Set([group.id]);
  if (inserted) {
    emitThemeInteractionEvent("cardGrouped", { card: group });
    cards.forEach((card) => emitThemeInteractionEvent("cardGrouped", { card }));
    render();
    scheduleSave();
  }
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

function enableLocalSharedGroup(group) {
  ensureEditMode();
  if (!group || group.kind !== "group") {
    return;
  }

  group.sharedGroup = normalizeSharedGroup({
    enabled: true,
    id: group.sharedGroup?.id || createId("shared-group"),
    role: group.sharedGroup?.role || "owner",
    status: "local",
    groupId: group.id,
    createdAt: group.sharedGroup?.createdAt || Date.now(),
    lastSyncedAt: group.sharedGroup?.lastSyncedAt || null,
    lastSyncedOpId: group.sharedGroup?.lastSyncedOpId || "",
    inviteUrl: group.sharedGroup?.inviteUrl || ""
  }, group.id);
  enforceSharedGroupLimits(group);
  appendSharedGroupOperation(group, "sharedGroup.enabled", "group", group.id, {
    group: buildSharedGroupSyncPayload(group)
  });
  render();
  scheduleSave();
  closeContextMenu();
}

function disableLocalSharedGroup(group) {
  ensureEditMode();
  if (!group || group.kind !== "group") {
    return;
  }

  const sharedId = group.sharedGroup?.id || "";
  appendSharedGroupOperation(group, "sharedGroup.disabled", "group", group.id, {
    sharedGroupId: sharedId
  });
  group.sharedGroup = normalizeSharedGroup(null, group.id);
  state.cards.forEach((card) => {
    if (card.kind === "chat" && (card.sharedGroupId === group.id || card.sharedGroupId === sharedId)) {
      card.sharedGroupId = "";
    }
  });
  render();
  scheduleSave();
  closeContextMenu();
}

async function copySharedGroupId(group) {
  if (!isGroupShared(group)) {
    return;
  }

  await copyText(group.sharedGroup.id);
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
  const previousColor = connection.color;
  connection.color = value;
  connection.customColor = true;
  appendSharedGroupConnectionOperation(connection, "connection.updated", {
    changes: [{
      field: "color",
      before: previousColor,
      after: connection.color
    }]
  });
  renderConnections();
  scheduleSave();
}

function resetConnectionColor(connection) {
  ensureEditMode();
  const previousColor = connection.color;
  const previousCustomColor = connection.customColor;
  connection.color = getConnectionColor();
  connection.customColor = false;
  appendSharedGroupConnectionOperation(connection, "connection.updated", {
    changes: [
      { field: "color", before: previousColor, after: connection.color },
      { field: "customColor", before: previousCustomColor, after: connection.customColor }
    ]
  });
  renderConnections();
  scheduleSave();
}

function setConnectionCap(connection, edge, value) {
  ensureEditMode();
  const field = edge === "start" ? "startCap" : "endCap";
  const previousValue = connection[field];
  if (edge === "start") {
    connection.startCap = normalizeConnectionCap(value);
  } else {
    connection.endCap = normalizeConnectionCap(value);
  }
  appendSharedGroupConnectionOperation(connection, "connection.updated", {
    changes: [{
      field,
      before: previousValue,
      after: connection[field]
    }]
  });
  renderConnections();
  scheduleSave();
}

function setConnectionPathStyle(connection, value) {
  ensureEditMode();
  const previousValue = connection.pathStyle;
  connection.pathStyle = normalizeConnectionPathStyle(value);
  appendSharedGroupConnectionOperation(connection, "connection.updated", {
    changes: [{
      field: "pathStyle",
      before: previousValue,
      after: connection.pathStyle
    }]
  });
  renderConnections();
  scheduleSave();
}

function convertConnectionToAutoPath(connection) {
  ensureEditMode();
  const previousPoints = clone(connection.points || []);
  connection.points = [];
  appendSharedGroupConnectionOperation(connection, "connection.updated", {
    changes: [{
      field: "points",
      before: previousPoints,
      after: connection.points
    }]
  });
  renderConnections();
  scheduleSave();
  closeContextMenu();
}

function deleteConnection(connection) {
  ensureEditMode();
  appendSharedGroupConnectionOperation(connection, "connection.deleted", {
    connectionId: connection.id
  });
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
  newConnections.forEach((connection) => appendSharedGroupConnectionOperation(connection, "connection.created"));
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

function createDefinitionAtContext(definition, worldPoint) {
  closeContextMenu();
  if (definition?.createMode === "template") {
    createCardFromTemplate(definition.template, worldPoint, {
      packId: definition.packId,
      templateId: definition.templateId
    });
    return;
  }
  createElement(definition?.kind, worldPoint);
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
      .map((definition) => createContextButton(getCreateDefinitionLabel(definition), () => createDefinitionAtContext(definition, worldPoint)));

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

  if (card.kind === "group") {
    if (isGroupShared(card)) {
      mainActions.push(createContextButton(t("copySharedGroupId"), () => copySharedGroupId(card)));
      mainActions.push(createContextButton(t("disableSharedGroup"), () => disableLocalSharedGroup(card)));
    } else {
      mainActions.push(createContextButton(t("makeSharedGroup"), () => enableLocalSharedGroup(card)));
    }
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
    interactiveBackgroundQuality: interactiveBackgroundQualityInput?.value || defaultSettings.interactiveBackgroundQuality,
    connectionColor: connectionColorInput.value || getDefaultConnectionColor(backgroundColorInput.value || defaultSettings.backgroundColor),
    richTextFontFamily: richTextFontFamilyInput?.value || defaultSettings.richTextFontFamily,
    richTextFontSize: Number(richTextFontSizeInput?.value || defaultSettings.richTextFontSize),
    snapToGrid: snapToGridInput.checked,
    historyEnabled: historyEnabledInput?.checked !== false,
    quickCreateKinds: getSelectedQuickCreateKinds(),
    toolbarCreateKinds: getSelectedToolbarCreateKinds(),
    cardPacks: state.settings.cardPacks,
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
        multiMonitorDisplayIds: getSelectedMultiMonitorDisplayIdsFromUi()
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

  const inserted = commitCardsCreation(cards.filter(Boolean));

  if (inserted) {
    render();
    scheduleSave();
  }
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

  if (event.key === "Escape" && themeCatalogModal && !themeCatalogModal.hidden) {
    closeThemeCatalog();
  }

  if (event.key === "Escape" && cardCatalogModal && !cardCatalogModal.hidden) {
    closeCardCatalog();
  }

  if (event.key === "Escape" && themeEditorModal && !themeEditorModal.hidden) {
    closeThemeEditor();
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

window.addEventListener("resize", () => {
  closeContextMenu();
  syncInteractiveBackgroundEngine();
});
document.addEventListener("selectionchange", updateRichTextToolbarFromSelection);
document.addEventListener("visibilitychange", () => {
  syncBrandLogoAnimationState();
  syncInteractiveBackgroundEngine();
});

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
openThemeCatalogButton?.addEventListener("click", openThemeCatalog);
closeThemeCatalogButton?.addEventListener("click", closeThemeCatalog);
themeCatalogCloseFooterButton?.addEventListener("click", closeThemeCatalog);
themeCatalogImportFileButton?.addEventListener("click", () => {
  void importThemeFromCatalogFile();
});
themeCatalogImportPackageButton?.addEventListener("click", () => {
  void importThemePackageFromCatalogDirectory();
});
themeCatalogUploadButton?.addEventListener("click", () => {
  setThemeCatalogStatus(t("themeCatalogUploadLocal"), "muted");
  void importThemeFromCatalogFile();
});
themeCatalogBrowseTab?.addEventListener("click", () => {
  themeCatalogActiveTab = "browse";
  renderThemeCatalog();
});
themeCatalogInstalledTab?.addEventListener("click", () => {
  themeCatalogActiveTab = "installed";
  renderThemeCatalog();
});
openCardCatalogButton?.addEventListener("click", openCardCatalog);
closeCardCatalogButton?.addEventListener("click", closeCardCatalog);
cardCatalogCloseFooterButton?.addEventListener("click", closeCardCatalog);
cardCatalogImportButton?.addEventListener("click", () => {
  void importCardPackFromFile();
});
cardCatalogUploadButton?.addEventListener("click", () => {
  setCardCatalogStatus(t("cardCatalogUploadLocal"), "muted");
  void importCardPackFromFile();
});
cardCatalogBrowseTab?.addEventListener("click", () => {
  cardCatalogActiveTab = "browse";
  renderCardCatalog();
});
cardCatalogInstalledTab?.addEventListener("click", () => {
  cardCatalogActiveTab = "installed";
  renderCardCatalog();
});
openThemeEditorButton?.addEventListener("click", openThemeEditor);
closeThemeEditorButton?.addEventListener("click", closeThemeEditor);
themeEditorCloseFooterButton?.addEventListener("click", closeThemeEditor);
themeEditorLoadCurrentButton?.addEventListener("click", () => fillThemeEditorFromTheme(getVisualTheme(), "themeEditorLoaded"));
themeEditorLoadDefaultButton?.addEventListener("click", () => fillThemeEditorFromTheme(defaultVisualTheme, "themeEditorDefaultLoaded"));
themePickHeaderAssetButton?.addEventListener("click", () => {
  void pickThemeSurfaceAsset(themeHeaderAssetInput);
});
themePickBodyAssetButton?.addEventListener("click", () => {
  void pickThemeSurfaceAsset(themeBodyAssetInput);
});
themeClearHeaderAssetButton?.addEventListener("click", () => {
  setThemeAssetInput(themeHeaderAssetInput, "");
  updateThemeAssetsJsonDefaultAsset("cardHeaders", "");
  updateThemeEditorPreview();
});
themeClearBodyAssetButton?.addEventListener("click", () => {
  setThemeAssetInput(themeBodyAssetInput, "");
  updateThemeAssetsJsonDefaultAsset("cardBodies", "");
  updateThemeEditorPreview();
});
themeAddActorPresetButton?.addEventListener("click", addThemeActorPreset);
themeApplyActorEnhancerButton?.addEventListener("click", applyThemeActorEnhancer);
themeApplyEffectPresetButton?.addEventListener("click", applyThemeEffectPreset);
themeFormatJsonButton?.addEventListener("click", formatThemeEditorJson);
themeValidateJsonButton?.addEventListener("click", validateThemeEditorTheme);
themeEditorApplyButton?.addEventListener("click", () => {
  void applyThemeEditorTheme();
});
themeEditorExportButton?.addEventListener("click", exportThemeEditorTheme);
[
  themeEditorNameInput,
  themeCardRadiusInput,
  themePanelRadiusInput,
  themeButtonRadiusInput,
  themeCardBorderWidthInput,
  themeCardHeaderHeightInput,
  themeGroupHeaderHeightInput,
  themeIconScaleInput,
  themeShadowInput,
  themeStrokeWidthInput,
  themeSelectedStrokeWidthInput,
  themeDraftStrokeWidthInput,
  themeOutlineWidthInput,
  themeWaypointRadiusInput,
  themeMarkerScaleInput,
  themeLineStyleInput,
  themeInteractiveEnabledInput,
  themeInteractiveFpsInput,
  themeBackgroundTypeInput,
  themeBackgroundColorInput,
  themeBackgroundOpacityInput,
  themeParticleColorInput,
  themeParticleCountInput,
  themeAssetsJsonInput,
  themeActorsJsonInput,
  themeReactionsJsonInput,
  themeCardEffectsJsonInput
].filter(Boolean).forEach((input) => {
  input.addEventListener("input", updateThemeEditorPreview);
  input.addEventListener("change", updateThemeEditorPreview);
});
multiMonitorModeInput?.addEventListener("change", () => refreshAppConfigUi());
backgroundOpacityInput?.addEventListener("input", () => {
  if (backgroundOpacityValue) {
    const nextTransparency = Number(backgroundOpacityInput.value);
    backgroundOpacityValue.textContent = `${clamp(Number.isFinite(nextTransparency) ? nextTransparency : defaultSettings.backgroundOpacity, 0, 100)}%`;
  }
});
window.addEventListener("pointermove", (event) => {
  updateInteractiveBackgroundPointer(event);
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
