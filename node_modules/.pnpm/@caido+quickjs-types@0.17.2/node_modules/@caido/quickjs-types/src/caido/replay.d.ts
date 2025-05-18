declare module "caido:utils" {
  /**
   * A replay session.
   * @category Replay
   */
  export type ReplaySession = {
    /**
     * The unique Caido {@link ID} of the replay session.
     */
    getId(): ID;
    /**
     * The name of the replay session.
     */
    getName(): string;
  };

  /**
   * A collection of replay sessions.
   * @category Replay
   */
  export type ReplayCollection = {
    /**
     * The unique Caido {@link ID} of the replay collection.
     */
    getId(): ID;
    /**
     * The name of the replay collection.
     */
    getName(): string;
  };

  /**
   * The SDK for the Replay service.
   * @category Replay
   */
  export type ReplaySDK = {
    createSession(
      source?: RequestSource,
      collection?: ID | ReplayCollection,
    ): Promise<ReplaySession>;
    getCollections(): Promise<Array<ReplayCollection>>;
  };
}
