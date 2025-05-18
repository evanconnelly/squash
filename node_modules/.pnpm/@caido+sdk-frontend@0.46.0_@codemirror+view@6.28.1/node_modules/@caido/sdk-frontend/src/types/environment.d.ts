/**
 * Utilities to interact with the environment.
 * @category Environment
 */
export type EnvironmentSDK = {
    /**
     * Get the value of an environment variable.
     * @param name The name of the environment variable.
     * @returns The value of the environment variable.
     */
    getVar: (name: string) => string | undefined;
    /**
     * Get all environment variables available in the global environment and the selected environment.
     * @returns All environment variables.
     */
    getVars: () => EnvironmentVariable[];
};
export type EnvironmentVariable = {
    /**
     * The name of the environment variable.
     */
    name: string;
    /**
     * The value of the environment variable.
     */
    value: string;
    /**
     * Whether the environment variable is a secret.
     */
    isSecret: boolean;
};
