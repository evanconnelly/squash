import type { HTTPRequestEditor, HTTPResponseEditor } from "./editor";
import type { Icon } from "./utils";
/**
 * Utilities to create UI components.
 * @category UI
 */
export type UISDK = {
    /**
     * Create a button.
     * @param options Options for the button.
     * @param options.variant The variant of the button.
     * @param options.label The label of the button.
     * @param options.leadingIcon The leading icon of the button.
     * @param options.trailingIcon The trailing icon of the button.
     * @param options.size The size of the button.
     * @returns The button element.
     *
     * @example
     * ```ts
     * const deleteButton = sdk.ui.button({
     *   variant: "primary",
     *   label: "Delete",
     *   trailingIcon: "fas fa-trash-can",
     *   size: "small",
     * });
     * ```
     */
    button: (options?: {
        variant?: "primary" | "secondary" | "tertiary";
        label?: string;
        leadingIcon?: Icon;
        trailingIcon?: Icon;
        size?: "small" | "medium" | "large";
    }) => HTMLElement;
    /**
     * Create a card.
     * @param options Options for the card.
     * @param options.header The header of the card.
     * @param options.body The body of the card.
     * @param options.footer The footer of the card.
     * @returns The card element.
     */
    card: (options?: {
        header?: HTMLElement;
        body?: HTMLElement;
        footer?: HTMLElement;
    }) => HTMLElement;
    /**
     * Create a well.
     * @param options Options for the well.
     * @param options.header The header of the well.
     * @param options.body The body of the well.
     * @param options.footer The footer of the well.
     * @returns The well element.
     */
    well: (options?: {
        header?: HTMLElement;
        body?: HTMLElement;
        footer?: HTMLElement;
    }) => HTMLElement;
    /**
     * Create an HTTP request editor
     * @returns The HTTP request editor.
     */
    httpRequestEditor: () => HTTPRequestEditor;
    /**
     * Create an HTTP response editor
     * @returns The HTTP response editor.
     */
    httpResponseEditor: () => HTTPResponseEditor;
};
