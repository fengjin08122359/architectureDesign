export declare class Log {
    private dataList;
    constructor();
    /**
     *log
     *
     * @param {any[]} rest[]
     * @memberof Log
     */
    log(...rest: any[]): void;
    /**
     *error
     *
     * @param {any[]} rest[]
     * @memberof Log
     */
    error(...rest: any[]): void;
    /**
     *debug
     *
     * @param {any[]} rest[]
     * @memberof Log
     */
    debug(...rest: any[]): void;
    /**
     *info
     *
     * @param {any[]} rest[]
     * @memberof Log
     */
    info(...rest: any[]): void;
    /**
     *warn
     *
     * @param {any[]} rest[]
     * @memberof Log
     */
    warn(...rest: any[]): void;
    /**
     *error
     *
     * @param {string} name
     * @memberof Log
     */
    get(name?: string): any[];
}
//# sourceMappingURL=Log.d.ts.map