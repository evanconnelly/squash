import type { ID } from "./utils";
/**
 * A replay tab.
 * @category Replay
 */
export type ReplayTab = {
    /**
     * The ID of the session associated with this tab.
     */
    sessionId: ID;
};
/**
 * A session in Replay.
 * @category Replay
 */
export type ReplaySession = {
    /**
     * The ID of the session.
     */
    id: ID;
    /**
     * The name of the session.
     */
    name: string;
    /**
     * The ID of the collection the session belongs to.
     */
    collectionId: ID;
};
/**
 * A collection in Replay.
 * @category Replay
 */
export type ReplayCollection = {
    /**
     * The ID of the collection.
     */
    id: ID;
    /**
     * The name of the collection.
     */
    name: string;
    /**
     * The sessions in the collection.
     */
    sessionIds: ID[];
};
/**
 * Utilities to interact with Replay.
 * @category Replay
 */
export type ReplaySDK = {
    /**
     * Open a replay tab for the given session.
     * @param sessionId The ID of the session to open.
     */
    openTab: (sessionId: ID) => void;
    /**
     * Close a replay tab for the given session.
     * @param sessionId The ID of the session to close.
     */
    closeTab: (sessionId: ID) => void;
    /**
     * Get the list of all open replay tabs.
     * @returns The list of all open replay tabs.
     */
    getTabs: () => ReplayTab[];
    /**
     * Get the list of all replay collections.
     * @returns The list of all replay collections.
     */
    getCollections: () => ReplayCollection[];
    /**
     * Get the list of all replay sessions.
     * @returns The list of all replay sessions.
     */
    getSessions: () => ReplaySession[];
    /**
     * Rename a session.
     * @param id The ID of the session to rename.
     * @param name The new name of the session.
     * @returns The updated session.
     */
    renameSession: (id: ID, name: string) => Promise<ReplaySession>;
};
