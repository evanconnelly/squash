/**
 * Utilities to interact with the plugin's static assets.
 * @category Files
 */
export type AssetsSDK = {
    /**
     * Get a file from the assets folder.
     * @returns The asset file.
     */
    get: (path: string) => Promise<Asset>;
};
/**
 * A static asset.
 * @category Files
 */
type Asset = {
    asReadableStream: () => ReadableStream;
    asArrayBuffer: () => Promise<ArrayBuffer>;
    asString: () => Promise<string>;
    asJson: <T = unknown>() => Promise<T>;
};
export {};
