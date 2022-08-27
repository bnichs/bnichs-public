

const ENV = process.env.NODE_ENV
const isDev = ENV == "development"

const PAGE_TITLE_BASE = "Ben Nichols"
const TITLE_PREFIX = `${isDev ? "dev - " : "" }`
export const PAGE_TITLE = `${TITLE_PREFIX}${PAGE_TITLE_BASE}`


export const PERSON_NAME = "Ben Nichols"
export const PERSON_SUBTITLE = "Software Engineer"
export const PERSON_OBJECTIVE = "System Development & Automation"
export const PERSON_WEBSITE = "https://www.ben-nichols.net"
