declare module "caido:plugin" {
  /**
   * Promise or value.
   * @category Shared
   */
  type MaybePromise<T> = T | Promise<T>;

  /**
   * Base SDK interface.
   * @category Shared
   */
  export interface SDK {}

  /**
   * Define a Plugin backend functions that are callable from the frontend.
   *
   * @example
   * ```typescript
   * function generateNumber(sdk: SDK, min: number, max: number): number {
   *   return Math.floor(Math.random() * (max - min + 1) + min);
   * }
   *
   * export type API = DefineAPI<{
   *   generateNumber: typeof generateNumber;
   * }>;
   *
   * export function init(sdk: SDK<API>) {
   *   sdk.api.register("generateNumber", generateNumber);
   * }
   * ```
   * @category Shared
   */
  export type DefineAPI<
    API extends Record<string, (...args: any[]) => MaybePromise<any>>,
  > = {
    [K in keyof API]: DefineAPICallback<API[K]>;
  };

  /**
   * Parser for Plugin backend callable functions
   * @category Shared
   */
  export type DefineAPICallback<F> = F extends (
    sdk: SDK,
    ...args: infer A
  ) => infer R
    ? (...args: A) => R
    : "Your callback must respect the format (sdk: SDK, ...args: unknown[]) => MaybePromise<unknown>";

  /**
   * Define a Plugin backend events that the frontend can receive.
   *
   * @example
   * ```typescript
   * type MyEventData = { id: string; name: string };
   *
   * export type BackendEvents = DefineEvents<{
   *   "myevent": (data: MyEventData) => void;
   * }>;
   *
   * export function init(sdk: SDK<{}, BackendEvents>) {
   *   sdk.api.send("myevent", { id: "1", name: "hello" });
   * }
   * ```
   * @category Shared
   */
  export type DefineEvents<
    Events extends Record<string, (...args: any[]) => MaybePromise<void>>,
  > = {
    [K in keyof Events]: DefineEventCallback<Events[K]>;
  };

  /**
   * Parser for Plugin backend events callbacks.
   * @category Shared
   */
  export type DefineEventCallback<F> = F extends (
    ...args: infer A
  ) => MaybePromise<void>
    ? (...args: A) => MaybePromise<void>
    : "Your callback must respect the format (...args: unknown[]) => MaybePromise<void>";
}
