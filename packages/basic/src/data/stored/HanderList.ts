/**
 *Listener
 * @param {any} message
 * @interface Listener
 */
interface Listener {
  (message?: any): any;
}
/**
 *Handler
 * @param {string} name
 * @param {Listener} fun
 * @interface Handler
 */
export interface Handler {
  name: string;
  fun: Listener;
}
/**
 *HandlerRes
 *
 * @interface HandlerRes
 */
export interface HandlerRes {
  name: string;
  res: any;
}

export class HanderList {
  protected handlers: Array<Handler>;
  constructor() {
    this.handlers = [];
  }
  /**
   *add
   *
   * @param {Handler} handler
   * @memberof HanderList
   */
  add(handler: Handler) {
    this.handlers.push(handler);
  }
  /**
   *remove
   *
   * @param {string} name
   * @memberof HanderList
   */
  remove(name: string) {
    this.handlers = this.handlers.filter((handler) => handler.name !== name);
  }
  /**
   *get
   *
   * @param {any} input
   * @returns {HandlerRes[]}
   * @memberof HanderList
   */
  get(input?: any, name: string = "") {
    return this.handlers
      .filter((handler) => name === "" || handler.name === name)
      .map((handler) => {
        return {
          name: handler.name,
          res: handler.fun(input),
        };
      });
  }
}
