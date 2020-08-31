import { Storage } from '@mikefeng110808/basic';
declare class LocalStorage extends Storage {
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
export declare let storage: LocalStorage;
export {};
//# sourceMappingURL=storage.d.ts.map