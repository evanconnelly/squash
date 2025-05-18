import type { CommandID, Icon } from "./utils";
/**
 * Utilities to insert menu items and context-menus throughout the UI.
 * @category Menu
 */
export type MenuSDK = {
    /**
     * Register a menu item.
     * @param item The menu item to register.
     *
     * @example
     * ```ts
     * sdk.menu.registerItem({
     *   type: "Request",
     *   commandId: "hello",
     *   leadingIcon: "fas fa-hand",
     * });
     * ```
     */
    registerItem: (item: MenuItem) => void;
};
/**
 * A content-menu item.
 * @category Menu
 */
export type MenuItem = RequestRowMenuItem | SettingsMenuItem | RequestMenuItem | ResponseMenuItem;
/**
 * A context-menu item that appears when right-clicking a request row.
 * @category Menu
 */
type RequestRowMenuItem = {
    type: "RequestRow";
    /**
     * The command ID to execute when the menu item is clicked.
     */
    commandId: CommandID;
    /**
     * The icon to display to the left of the menu item.
     */
    leadingIcon?: string;
};
/**
 * A context-menu item that appears when right-clicking a request pane.
 * @category Menu
 */
type RequestMenuItem = {
    type: "Request";
    /**
     * The command ID to execute when the menu item is clicked.
     */
    commandId: CommandID;
    /**
     * The icon to display to the left of the menu item.
     */
    leadingIcon?: string;
};
/**
 * A context-menu item that appears when right-clicking a response pane.
 * @category Menu
 */
type ResponseMenuItem = {
    type: "Response";
    /**
     * The command ID to execute when the menu item is
     */
    commandId: CommandID;
    /**
     * The icon to display to the left of the menu item.
     */
    leadingIcon?: string;
};
/**
 * A menu item that appears in the settings menu.
 * @category Menu
 */
type SettingsMenuItem = {
    type: "Settings";
    /**
     * The label of the menu item.
     */
    label: string;
    /**
     * The path that the user will be navigated to when the menu item is clicked
     * The path must start with "/settings/".
     */
    path: string;
    /**
     * The {@link Icon} to display to the left of the menu item.
     */
    leadingIcon?: Icon;
};
export {};
