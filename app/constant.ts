export const OWNER = "Yidadaa";
export const REPO = "ChatGPT-Next-Web";
export const REPO_URL = `http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=UjG4-UaGkkcyyq91QDIbpLh0Vq8In4ux&authKey=UancUgsjLCV4xuZjxCHM2AMdKTEQYQsKJnJPhIPdEl1Scbv6481flyhlYHI6Dusx&noverify=0&group_code=545385080`;
export const ISSUE_URL = `http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=UjG4-UaGkkcyyq91QDIbpLh0Vq8In4ux&authKey=UancUgsjLCV4xuZjxCHM2AMdKTEQYQsKJnJPhIPdEl1Scbv6481flyhlYHI6Dusx&noverify=0&group_code=545385080`;
export const UPDATE_URL = `${REPO_URL}#keep-updated`;
export const FETCH_COMMIT_URL = `https://api.github.com/repos/${OWNER}/${REPO}/commits?per_page=1`;
export const FETCH_TAG_URL = `https://api.github.com/repos/${OWNER}/${REPO}/tags?per_page=1`;
export const RUNTIME_CONFIG_DOM = "danger-runtime-config";

export enum Path {
  Home = "/",
  Chat = "/chat",
  Settings = "/settings",
  NewChat = "/new-chat",
  Masks = "/masks",
}

export enum SlotID {
  AppBody = "app-body",
}

export enum FileName {
  Masks = "masks.json",
  Prompts = "prompts.json",
}

export enum StoreKey {
  Chat = "chat-next-web-store",
  Access = "access-control",
  Config = "app-config",
  Mask = "mask-store",
  Prompt = "prompt-store",
  Update = "chat-update",
}

export const MAX_SIDEBAR_WIDTH = 500;
export const MIN_SIDEBAR_WIDTH = 230;
export const NARROW_SIDEBAR_WIDTH = 100;

export const ACCESS_CODE_PREFIX = "ak-";

export const LAST_INPUT_KEY = "last-input";

export const REQUEST_TIMEOUT_MS = 60000;

export const EXPORT_MESSAGE_CLASS_NAME = "export-markdown";