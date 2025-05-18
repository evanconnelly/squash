declare module "caido:utils" {
  /**
   * A unique identifier.
   * @category Shared
   */
  export type ID = string & { __id?: never };
  /**
   * A cursor for pagination.
   * @category Shared
   */
  export type Cursor = string & { __cursor?: never };
  /**
   * Types that can be converted to bytes in inputs.
   * @category Shared
   */
  export type Bytes = string | Array<number> | Uint8Array;
  /**
   * Promise or value.
   * @category Shared
   */
  export type MaybePromise<T> = T | Promise<T>;
  /**
   * Option to return raw value
   * @category Shared
   */
  export type RawOption = { raw: true };
}
