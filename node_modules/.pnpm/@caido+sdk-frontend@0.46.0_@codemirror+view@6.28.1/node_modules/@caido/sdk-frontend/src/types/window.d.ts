import type { Editor } from "./editor";
/**
 * Utilities to interact with the active page.
 * @category Window
 */
export type WindowSDK = {
    /**
     * Get the active editor.
     * @returns The active editor.
     */
    getActiveEditor: () => Editor | undefined;
    /**
     * Show a toast message.
     * @param message The message to show.
     * @param options Options for the toast message.
     * @param options.variant The variant of the toast message.
     * @param options.duration The duration of the toast message in milliseconds.
     */
    showToast: (message: string, options?: {
        variant?: "success" | "error" | "warning" | "info";
        duration?: number;
    }) => void;
};
