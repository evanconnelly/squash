declare module "caido:utils" {
  /**
   * The SDK for the runtime information.
   * @category Runtime
   */
  export type RuntimeSDK = {
    /**
     * Get the current version of Caido.
     */
    get version(): string;
  };
}
