type JSONPrimitive = string | number | boolean | null | undefined;
/**
 * A unique Caido identifier per type.
 */
export type ID = string & {
    __id?: never;
};
/**
 * A unique command identifier.
 * @example "my-super-command"
 */
export type CommandID = string & {
    __commandId?: never;
};
/**
 * An HTTPQL expression.
 * @example `req.method.eq:"POST"`
 */
export type HTTPQL = string & {
    __httpql?: never;
};
/**
 * A {@link https://fontawesome.com/icons|FontAwesome} icon class.
 * @example "fas fa-rocket"
 */
export type Icon = string & {
    __icon?: never;
};
export type JSONValue = JSONPrimitive | JSONValue[] | {
    [key: string]: JSONValue;
};
type NotAssignableToJson = bigint | symbol | Function;
export type JSONCompatible<T> = unknown extends T ? never : {
    [P in keyof T]: T[P] extends JSONValue ? T[P] : T[P] extends NotAssignableToJson ? never : JSONCompatible<T[P]>;
};
export type PromisifiedReturnType<T extends (...args: unknown[]) => unknown> = ReturnType<T> extends Promise<infer U> ? Promise<U> : Promise<ReturnType<T>>;
export {};
