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
export declare class HanderList {
    protected handlers: Array<Handler>;
    constructor();
    /**
     *add
     *
     * @param {Handler} handler
     * @memberof HanderList
     */
    add(handler: Handler): void;
    /**
     *remove
     *
     * @param {string} name
     * @memberof HanderList
     */
    remove(name: string): void;
    /**
     *get
     *
     * @param {any} input
     * @returns {HandlerRes[]}
     * @memberof HanderList
     */
    get(input?: any, name?: string): {
        name: string;
        res: any;
    }[];
}
export {};
//# sourceMappingURL=HanderList.d.ts.map