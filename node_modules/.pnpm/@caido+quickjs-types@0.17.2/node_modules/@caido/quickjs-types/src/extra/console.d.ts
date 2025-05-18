export {};

declare global {
  /**
   * Console interface for logging.
   *
   * Currently logs are only available in the backend logs.
   * See the [documentation](https://docs.caido.io/report_bug.html#1-backend-logs) on how to retrieve them.
   */
  type Console = {
    /**
     * Log a message with the debug level.
     *
     * Usually used for troubleshooting purposes.
     */
    debug(message: any): void;
    /**
     * Log a message with the info level.
     *
     * Usually used for general information.
     */
    log(message: any): void;
    /**
     * Log a message with the warn level.
     *
     * Usually used for unexpected behaviors.
     */
    warn(message: any): void;
    /**
     * Log a message with the error level.
     *
     * Usually used for critical errors.
     */
    error(message: any): void;
  };
  var console: Console;
}
