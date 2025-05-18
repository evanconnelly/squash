declare module "caido:utils" {
  /**
   * A saved immutable Finding.
   * @category Environment
   */
  export type EnvironmentVariable = {
    /**
     * The name of the environment variable
     */
    readonly name: string;
    /**
     * The value of the environment variable
     */
    readonly value: string;
    /**
     * If the environment variable is a secret
     */
    readonly isSecret: boolean;
  };

  /**
   * Input for the `setVar` of {@link EnvironmentSDK}.
   * @category Environment
   */
  export type SetVarInput = {
    /**
     * Name of the environment variable
     */
    name: string;
    /**
     * Value of the environment variable
     */
    value: string;
    /**
     * If the environment variable should be treated as secret.
     * Secrets are encrypted on the disk.
     * @default false
     */
    secret: boolean;
    /**
     * If the environment variable should be set on the global
     * environment or the currently selected environment.
     * By default, it will be set globally.
     * @default true
     */
    global: boolean;
  };

  /**
   * The SDK for the Environment service.
   * @category Environment
   */
  export type EnvironmentSDK = {
    /**
     * Get the value of an environment variable.
     * @param name The name of the environment variable.
     * @returns The value of the environment variable.
     */
    getVar(name: string): string | undefined;
    /**
     * Get all the environment variables.
     * It includes the global environment and the selected environment.
     * Those variables can change over time so avoid caching them.
     * @returns An array of {@link EnvironmentVariable}
     */
    getVars(): Array<EnvironmentVariable>;
    /**
     * Sets an environment variable to a given value.
     * This will override any existing value.
     * The environment variable can be set either on the currently
     * selected environment or the global environment.
     *
     * @throws {Error} If trying to set when a project is not selected.
     * @throws {Error} If trying to set when an environment is not selected (with `global: false`).
     *
     * @example
     * ```js
     * await sdk.env.setVar({
     *   name: "USER_SECRET",
     *   value: "my secret value",
     *   secret: true,
     *   global: false
     * });
     * ```
     */
    setVar(input: SetVarInput): Promise<void>;
  };
}
