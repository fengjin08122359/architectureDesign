import { HanderList, HandlerRes } from "../data/stored/HanderList";

/**
 *InterceptHandler
 * @param {string} name
 * @param {(message: any) => boolean;} fun
 * @interface InterceptHandler
 */
interface InterceptHandler {
  name: string;
  fun: (message: any) => boolean;
}

export class Intercept extends HanderList {
  protected handlers: Array<InterceptHandler>;
  constructor() {
    super();
    this.handlers = [];
  }
  /**
   *addIntercept
   *
   * @param {InterceptHandler} handler
   * @memberof Intercept
   */
  addIntercept(handler: InterceptHandler) {
    this.add(handler);
  }
  /**
   *removeIntercept
   *
   * @param {string} name
   * @memberof Intercept
   */
  removeIntercept(name: string) {
    this.remove(name);
  }
  /**
   *getIntercept
   *
   * @param {any} input
   * @memberof Intercept
   */
  getIntercept(input: any, name: string = "") {
    return this.get(input, name)
      .filter((target: HandlerRes) => target.res)
      .map((target: HandlerRes) => target.name);
  }
}
