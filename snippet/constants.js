const LAST_COMMAND_TERMINATED = "lastCommandTerminated"
const SEQUENCE_RELEASED = "sequenceReleased"
const PAGE_IS_ABOUT_TO_RELOAD = "beforeunload"
const SEQUENCE_TERMINATED = "terminated"
const SEQUENCE_ERROR = "error"
const SEQUENCE_RESET = "reset"
//const STORAGE_NAME = "\"jSpaghetti:\" + moduleName + \":\" + sequenceName"
const STORAGE_NAME = (moduleName, sequenceName) => `"jSpaghetti: ${moduleName}:${sequenceName}`
const EXIT_COMMAND = "exit"
const GOTOIF_COMMAND = "jumpif"
const WAIT_COMMAND = "wait"
const WAIT_FOR_PAGE_TO_RELOAD = "page-reload"
const INTERNAL_OBJECT_COMMANDS_LIST = [WAIT_COMMAND, GOTOIF_COMMAND, EXIT_COMMAND]
const DEFAULT_DELAY = 10