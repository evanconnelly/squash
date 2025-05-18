export {};

declare global {
  namespace QuickJS {
    type TypedArray =
      | Uint8Array
      | Uint8ClampedArray
      | Uint16Array
      | Uint32Array
      | Int8Array
      | Int16Array
      | Int32Array
      | BigUint64Array
      | BigInt64Array
      | Float32Array
      | Float64Array;
    type ArrayBufferView = TypedArray | DataView;
  }

  interface SymbolConstructor {
    /**
     * A method that is used to release resources held by an object. Called by the semantics of the `using` statement.
     */
    readonly dispose: unique symbol;
  }
}
