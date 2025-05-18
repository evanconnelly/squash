/**
 * Utilities to interact with navigation.
 * @category Navigation
 */
export type NavigationSDK = {
    /**
     * Navigate to a path.
     * @param path The path to navigate to.
     *
     * @example
     * ```ts
     * sdk.navigation.goTo("/my-plugin-page");
     * ```
     */
    goTo: (path: string) => void;
    /**
     * Add a page to the navigation.
     * @param path The path of the page.
     * @param options Options for the page.
     * @param options.body The body of the page.
     * @param options.topbar The topbar of the page.
     * @param options.onEnter The callback to execute when the page is entered.
     */
    addPage: (path: string, options: {
        body: HTMLElement;
        topbar?: HTMLElement;
        onEnter?: () => void;
    }) => void;
};
