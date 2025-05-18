import type { CommandID, ID } from "./utils";
/**
 * Utilities to interact with commands
 * @category Commands
 */
export type CommandsSDK = {
    /**
     * Register a command.
     * @param id The id of the command.
     * @param options Options for the command.
     * @param options.name The name of the command.
     * @param options.run The function to run when the command is executed.
     * @param options.group The group this command belongs to.
     * @param options.when A function to determine if the command is available.
     *
     * @example
     * ```ts
     * sdk.commands.register("hello", {
     *   name: "Print to console.",
     *   run: () => console.log("Hello world!"),
     *   group: "Custom Commands",
     * });
     * ```
     */
    register: (id: CommandID, options: {
        name: string;
        run: (context: CommandContext) => void;
        group?: string;
        when?: (context: CommandContext) => boolean;
    }) => void;
};
/**
 * Represents the context in which a command is executed.
 * @category Commands
 */
export type CommandContext = CommandContextBase | CommandContextRequestRow | CommandContextRequest | CommandContextResponse;
/**
 * The base context for a command.
 * This context is used for commands that are not executed in a specific context, such as via shortcuts and the command palette.
 * @category Commands
 */
type CommandContextBase = {
    type: "BaseContext";
};
/**
 * The context for a command that is executed on a row in the request table.
 * @category Commands
 */
type CommandContextRequestRow = {
    type: "RequestRowContext";
    /**
     * The requests that are selected in the request table.
     */
    requests: {
        id: ID;
        host: string;
        port: number;
        path: string;
        query: string;
        isTls: boolean;
    }[];
};
/**
 * The context for a command that is executed on a request pane.
 * @category Commands
 */
type CommandContextRequest = {
    type: "RequestContext";
    /**
     * The request that is currently open in the request pane.
     */
    request: {
        host: string;
        port: number;
        path: string;
        query: string;
        isTls: boolean;
        raw: string;
    };
    /**
     * The currently selected text in the request pane.
     */
    selection: string;
};
/**
 * The context for a command that is executed on a response pane.
 * @category Commands
 */
type CommandContextResponse = {
    type: "ResponseContext";
    /**
     * The request that is associated with the response.
     */
    request: {
        id: ID;
        host: string;
        port: number;
        path: string;
        query: string;
        isTls: boolean;
    };
    /**
     * The response that is currently open in the response pane.
     */
    response: {
        id: ID;
        raw: string;
        statusCode: number;
        roundtripTime: number;
    };
    /**
     * The currently selected text in the response pane.
     */
    selection: string;
};
export {};
