import { HanderList } from "../data/stored/HanderList";
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
export declare class Intercept extends HanderList {
    protected handlers: Array<InterceptHandler>;
    constructor();
    /**
     *addIntercept
     *
     * @param {InterceptHandler} handler
     * @memberof Intercept
     */
    addIntercept(handler: InterceptHandler): void;
    /**
     *removeIntercept
     *
     * @param {string} name
     * @memberof Intercept
     */
    removeIntercept(name: string): void;
    /**
     *getIntercept
     *
     * @param {any} input
     * @memberof Intercept
     */
    getIntercept(input: any, name?: string): string[];
}
export {};
//# sourceMappingURL=Intercept.d.ts.map