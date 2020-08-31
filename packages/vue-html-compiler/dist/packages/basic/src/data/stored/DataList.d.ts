/**
 *Data
 * @param {name} string
 * @param {data} any
 * @interface Data
 */
export interface DataPayload {
    name: string;
    data: any;
}
export declare class DataList {
    private datas;
    constructor();
    /**
     *add
     *
     * @param {Data} data
     * @memberof DataList
     */
    add(data: DataPayload): void;
    /**
     *remove
     *
     * @param {string} name
     * @memberof DataList
     */
    remove(name: string): void;
    /**
     *clear
     *
     * @memberof DataList
     */
    clear(): void;
    /**
     *get
     *
     * @param {string} name
     * @memberof DataList
     */
    get(name?: string): DataPayload[];
    /**
     *get
     *
     * @param {string} name
     * @return {any} any
     * @memberof DataList
     */
    find(name?: string): any;
}
//# sourceMappingURL=DataList.d.ts.map