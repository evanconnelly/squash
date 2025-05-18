import type { ID } from "./utils";
/**
 * Utilities to interact with scopes
 * @category Scopes
 */
export type ScopesSDK = {
    /**
     * Get all scopes.
     * @returns A list of scopes.
     */
    getScopes: () => Scope[];
    /**
     * Create a scope.
     * @param options Options for the scope.
     * @param options.name The name of the scope.
     * @param options.allowlist The list of included items in the scope.
     * @param options.denylist The list of excluded items in the scope.
     * @returns The created scope.
     *
     * @example
     * ```ts
     * const newScope = await sdk.scopes.createScope({
     *   name: "Example",
     *   allowlist: ["*example.com", "*github.com"],
     *   denylist: ["*caido.io"],
     * });
     * ```
     */
    createScope: (options: {
        name: string;
        allowlist: string[];
        denylist: string[];
    }) => Promise<Scope | undefined>;
    /**
     * Update a scope.
     * @param id The id of the scope to update.
     * @param options Options for the scope.
     * @param options.name The name of the scope.
     * @param options.allowlist The list of included items in the scope.
     * @param options.denylist The list of excluded items in the scope.
     * @returns The updated scope.
     */
    updateScope: (id: ID, options: {
        name?: string;
        allowlist?: string[];
        denylist?: string[];
    }) => Promise<Scope | undefined>;
    /**
     * Delete a scope.
     * @param id The id of the scope to delete.
     * @returns Whether the scope was deleted.
     */
    deleteScope: (id: ID) => Promise<boolean>;
};
/**
 * Represents a scope.
 * @category Scopes
 */
export type Scope = {
    /**
     * The unique ID of the scope.
     */
    id: ID;
    /**
     * The name of the scope.
     */
    name: string;
    /**
     * The list of included items.
     */
    allowlist: string[];
    /**
     * The list of excluded items.
     */
    denylist: string[];
};
