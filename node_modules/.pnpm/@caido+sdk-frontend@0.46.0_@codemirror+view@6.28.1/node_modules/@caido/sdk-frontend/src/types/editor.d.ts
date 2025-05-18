import type { EditorView } from "@codemirror/view";
/**
 * Generic editor interface.
 */
export type Editor = {
    /**
     * Get the currently selected text of the editor.
     */
    getSelectedText: () => string;
    /**
     * Replace the currently selected text of the editor.
     * @param text The text to replace the selection with.
     */
    replaceSelectedText: (text: string) => void;
    /**
     * Check whether the editor is read-only.
     * @returns Whether the editor is read-only.
     */
    isReadOnly: () => boolean;
    /**
     * Focus the editor.
     */
    focus: () => void;
    /**
     * Get the editor view.
     * @returns The CodeMirror {@link https://codemirror.net/docs/ref/#view.EditorView EditorView}.
     */
    getEditorView: () => EditorView;
};
export type HTTPRequestEditor = {
    /**
     * Get the editor element.
     * Append this to your DOM to display the editor.
     * @returns The editor element.
     */
    getElement: () => HTMLElement;
    /**
     * Get the editor view.
     * @returns The CodeMirror {@link https://codemirror.net/docs/ref/#view.EditorView EditorView}.
     */
    getEditorView: () => EditorView;
};
export type HTTPResponseEditor = {
    /**
     * Get the editor element.
     * Append this to your DOM to display the editor.
     * @returns The editor element.
     */
    getElement: () => HTMLElement;
    /**
     * Get the editor view.
     * @returns The CodeMirror {@link https://codemirror.net/docs/ref/#view.EditorView EditorView}.
     */
    getEditorView: () => EditorView;
};
