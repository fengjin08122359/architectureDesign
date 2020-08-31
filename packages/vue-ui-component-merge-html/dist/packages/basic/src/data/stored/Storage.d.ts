declare class Storage {
    storage: any;
    constructor();
    /**
     *get
     *
     * @param {string} key
     * @memberof Storage
     */
    get(key: string | number): any;
    /**
     *set
     *
     * @param {string} key
     * @param {any} value
     * @memberof Storage
     */
    set(key: string | number, value: any): void;
    /**
     *remove
     *
     * @param {string} key
     * @memberof Storage
     */
    remove(key: string | number): void;
    /**
     *clear
     *
     * @memberof Storage
     */
    clear(): void;
}
export { Storage };
//# sourceMappingURL=Storage.d.ts.map