import type { ID } from "./utils";
/**
 * Utilities to interact with the Sitemap page.
 * @category Sitemap
 */
export type SitemapSDK = {
    /**
     * Get the current scope ID.
     * @returns The current scope ID.
     */
    getScopeId: () => ID | undefined;
    /**
     * Set the current scope.
     * @param id The ID of the scope to set.
     */
    setScope: (id: ID | undefined) => void;
};
