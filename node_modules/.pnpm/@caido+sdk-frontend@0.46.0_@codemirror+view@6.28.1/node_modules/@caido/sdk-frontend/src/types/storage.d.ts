import type { JSONCompatible, JSONValue } from "./utils";
/**
 * Utilities to interact with frontend-plugin storage.
 * @category Storage
 */
export type StorageSDK = {
    /**
     * Get the storage.
     * @returns The storage.
     */
    get: () => JSONValue;
    /**
     * Set the storage.
     * @param value The value to set the storage to
     * @returns A promise that resolves when the storage has been set.
     */
    set: <T>(value: JSONCompatible<T>) => Promise<void>;
    /**
     * Subscribe to storage changes.
     * @param callback The callback to call when the storage changes.
     */
    onChange: (callback: (value: JSONValue) => void) => void;
};
