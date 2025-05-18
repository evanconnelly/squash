import type { HTTPQL, ID } from "./utils";
/**
 * Utilities to interact with the Match and Replace page.
 * @category Match and Replace
 */
export type MatchReplaceSDK = {
    /**
     * Get all collections.
     */
    getCollections: () => MatchReplaceCollection[];
    /**
     * Create a collection.
     * @param options - The options for the collection.
     * @param options.name - The name of the collection.
     */
    createCollection: (options: {
        name: string;
    }) => Promise<MatchReplaceCollection>;
    /**
     * Update a collection.
     * @param id - The ID of the collection.
     * @param options - The new values for the collection.
     * @param options.name - The new name of the collection.
     */
    updateCollection: (id: ID, options: {
        name: string;
    }) => Promise<MatchReplaceCollection>;
    /**
     * Delete a collection.
     * @param id - The ID of the collection.
     */
    deleteCollection: (id: ID) => Promise<void>;
    /**
     * Get all rules.
     * @returns All rules.
     */
    getRules: () => MatchReplaceRule[];
    /**
     * Get all active rules.
     * Rules are ordered in priority from highest to lowest.
     * @returns All active rules.
     */
    getActiveRules: () => MatchReplaceRule[];
    /**
     * Select a rule to be displayed in the UI.
     * @param id - The ID of the rule, or undefined to clear the selection.
     */
    selectRule: (id: ID | undefined) => void;
    /**
     * Create a rule.
     * @param options - The options for the rule.
     * @param options.name - The name of the rule.
     * @param options.isEnabled - Whether the rule is enabled.
     * @param options.matchTerm - The match term of the rule.
     * @param options.replaceTerm - The replace term of the rule.
     * @param options.isRegex - Whether the match term is a regex.
     * @param options.strategy - The strategy of the rule.
     * @param options.query - The HTTPQL query to match the rule against.
     * @param options.collectionId - The ID of the collection the rule belongs to.
     */
    createRule: (options: {
        name: string;
        isEnabled: boolean;
        matchTerm: string;
        replaceTerm: string;
        isRegex: boolean;
        query: HTTPQL;
        strategy: MatchReplaceStrategy;
        collectionId: ID;
    }) => Promise<MatchReplaceRule>;
    /**
     * Update a rule.
     * @param id - The ID of the rule.
     * @param options - The new values for the rule.
     * @param options.name - The new name of the rule.
     * @param options.isEnabled - Whether the rule is enabled.
     * @param options.matchTerm - The new match term of the rule.
     * @param options.replaceTerm - The new replace term of the rule.
     * @param options.isRegex - Whether the match term is a regex.
     * @param options.query - The new HTTPQL query of the rule.
     * @param options.strategy - The new strategy of the rule.
     */
    updateRule: (id: ID, options: {
        name: string;
        isEnabled: boolean;
        matchTerm: string;
        replaceTerm: string;
        isRegex: boolean;
        query: HTTPQL;
        strategy: MatchReplaceStrategy;
    }) => Promise<MatchReplaceRule>;
    /**
     * Delete a rule.
     * @param id - The ID of the rule.
     */
    deleteRule: (id: ID) => Promise<void>;
};
/**
 * A rule in Match and Replace.
 * @category Match and Replace
 */
export type MatchReplaceRule = {
    /**
     * The ID of the rule.
     */
    id: ID;
    /**
     * The name of the rule.
     */
    name: string;
    /**
     * Whether the rule is enabled.
     */
    isEnabled: boolean;
    /**
     * The match term of the rule.
     */
    matchTerm: string;
    /**
     * The replace term of the rule.
     */
    replaceTerm: string;
    /**
     * Whether the match term is a regex.
     */
    isRegex: boolean;
    /**
     * The HTTPQL query to match the rule against.
     * Only requests that match the query will be affected by the rule.
     */
    query: HTTPQL;
    /**
     * The strategy of the rule.
     */
    strategy: MatchReplaceStrategy;
    /**
     * The ID of the collection the rule belongs to.
     */
    collectionId: ID;
};
export type MatchReplaceStrategy = "REQUEST_FIRST_LINE" | "REQUEST_HEADER" | "REQUEST_BODY" | "RESPONSE_FIRST_LINE" | "RESPONSE_HEADER" | "RESPONSE_BODY";
/**
 * A collection in Match and Replace.
 * @category Match and Replace
 */
export type MatchReplaceCollection = {
    id: ID;
    name: string;
    ruleIds: ID[];
};
