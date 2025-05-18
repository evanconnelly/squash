import type { Icon } from "./utils";
/**
 * Utilities to interact with the sidebar.
 * @category Sidebar
 */
export type SidebarSDK = {
    /**
     * Register a sidebar item.
     * @param name The name of the sidebar item.
     * @param path The path that the user will be navigated to when the sidebar item is clicked.
     * @param options Options for the sidebar item.
     * @param options.icon The {@link Icon} of the sidebar item.
     * @param options.group The group the sidebar item belongs to.
     * @param options.isExternal Whether the path points to an external URL.
     * @returns The created sidebar item.
     *
     * @example
     * ```ts
     * sdk.sidebar.registerItem("My Plugin", "/my-plugin-page", {
     *   icon: "fas fa-rocket",
     * });
     * ```
     */
    registerItem: (name: string, path: string, options?: {
        icon?: Icon;
        group?: string;
        isExternal?: boolean;
    }) => SidebarItem;
};
/**
 * Represents a sidebar item.
 * @category Sidebar
 */
type SidebarItem = {
    /**
     * Set the value of a notification badge next to the sidebar item.
     * @param count - The number to display in the badge. A value of 0 will hide the badge.
     */
    setCount: (count: number) => void;
};
export {};
