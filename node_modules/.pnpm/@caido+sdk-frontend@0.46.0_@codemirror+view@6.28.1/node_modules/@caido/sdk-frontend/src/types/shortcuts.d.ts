import type { CommandID } from "./utils";
/**
 * Utilities to interact with shortcuts.
 * @category Shortcuts
 */
export type ShortcutsSDK = {
    /**
     * Register a shortcut.
     * @param commandId The id of the command to run when the shortcut is triggered.
     * @param keys The keys of the shortcut. Check out {@link https://github.com/jaywcjlove/hotkeys-js?tab=readme-ov-file#supported-keys hotkeys-js} for the list of supported keys.
     */
    register: (commandId: CommandID, keys: string[]) => void;
};
