declare module "caido:utils" {
  /**
   * A {@link Project} status.
   * @category Projects
   */
  export type ProjectStatus = "ready" | "restoring" | "error";

  /**
   * A saved immutable Project.
   * @category Projects
   */
  export type Project = {
    /**
     * The unique Caido {@link ID} of the project.
     */
    getId(): ID;
    /**
     * The name of the project.
     */
    getName(): string;
    /**
     * The version of the project.
     * The format is `MAJOR.MINOR.PATCH`.
     */
    getVersion(): string;
    /**
     * The status of the project.
     */
    getStatus(): ProjectStatus;
  };

  /**
   * The SDK for the Projects service.
   * @category Projects
   */
  export type ProjectsSDK = {
    /**
     * Get the currently selected {@link Project} if any.
     *
     * @example
     * ```js
     * await sdk.projects.getCurrent();
     * ```
     */
    getCurrent(): Promise<Project | undefined>;
  };
}
