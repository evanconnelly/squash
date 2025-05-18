/**
 * SDK for interacting with the Files page.
 * @category Files
 */
export type FilesSDK = {
    /**
     * Gets all hosted files.
     * @returns The files.
     */
    getAll: () => HostedFile[];
    /**
     * Uploads a file to the host.
     * @param file The file to upload.
     * @returns The uploaded file.
     */
    create: (file: File) => Promise<HostedFile>;
    /**
     * Renames a file on the host.
     * @param id The ID of the file to rename.
     * @param name The new name of the file.
     * @returns The renamed file.
     */
    rename: (id: string, name: string) => Promise<HostedFile>;
    /**
     * Deletes a file from the host.
     * @param id The ID of the file to delete.
     * @returns The deleted file.
     */
    delete: (id: string) => Promise<void>;
};
/**
 * A hosted file.
 * @category Files
 */
export type HostedFile = {
    /**
     * The ID of the file.
     */
    id: string;
    /**
     * The name of the file.
     */
    name: string;
    /**
     * The size of the file in bytes.
     */
    size: number;
    /**
     * The path of the file.
     */
    path: string;
    /**
     * The date the file was created.
     */
    createdAt: Date;
    /**
     * The date the file was updated.
     */
    updatedAt: Date;
};
