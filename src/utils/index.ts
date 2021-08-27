import { throttleHandler } from "./throttle";
import { regExEmail } from "./validation";
import { saveStateHelper } from "./storeHelpers/saveState";
import { loadStateHelper } from "./storeHelpers/loadState";

export const throttle = throttleHandler;
export const validateEmail = regExEmail;
export const saveState = saveStateHelper;
export const loadState = loadStateHelper;
