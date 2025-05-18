import type { ID } from "./utils";
/**
 * Utilities to interact with the Intercept page.
 * @category Intercept
 */
export type InterceptSDK = {
    /**
     * Get the current scope ID.
     * @returns The current scope ID.
     */
    getScopeId: () => ID | undefined;
    /**
     * Set the current scope.
     * @param scopeId The ID of the scope to set.
     */
    setScope: (id: ID | undefined) => void;
};
