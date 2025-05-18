import type { HTTPQL, ID } from "./utils";
/**
 * SDK for interacting with the Filters page.
 * @category Filters
 */
export type FiltersSDK = {
    /**
     * Gets all filters.
     * @returns The filters.
     */
    getAll: () => Filter[];
    /**
     * Creates a filter.
     * @param options Options for the filter.
     * @param options.name The name of the filter. Should be unique.
     * @param options.query The HTTPQL query of the filter.
     * @param options.alias The alias of the filter. Used when referencing the filter in an HTTPQL query (e.g. `preset:my-alias`).
     *
     * Should be unique and follow the format `[a-zA-Z0-9_-]+`.
     *
     * @returns The created filter.
     */
    create: (options: {
        name: string;
        query: HTTPQL;
        alias: string;
    }) => Promise<Filter>;
    /**
     * Updates a filter.
     * @param id The ID of the filter to update.
     * @param options Options for the filter.
     * @param options.name The name of the filter.
     * @param options.alias The alias of the filter.
     * @param options.query The HTTPQL query of the filter.
     * @returns The updated filter.
     */
    update: (id: ID, options: {
        name: string;
        alias: string;
        query: HTTPQL;
    }) => Promise<Filter>;
    /**
     * Deletes a filter.
     * @param id The ID of the filter to delete.
     */
    delete: (id: ID) => Promise<void>;
};
/**
 * Represents a filter.
 * @category Filters
 */
export type Filter = {
    /**
     * The ID of the filter.
     */
    id: ID;
    /**
     * The name of the filter.
     */
    name: string;
    /**
     * The alias of the filter.
     * This alias is used when referencing the filter in an HTTPQL query (e.g. `preset:my-alias`).
     */
    alias: string;
    /**
     * The HTTPQL expression of the filter.
     */
    query: HTTPQL;
};
