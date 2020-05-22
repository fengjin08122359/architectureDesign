/**
 *Data
 * @param {name} string
 * @param {data} any
 * @interface Data
 */
export interface Data {
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
    add(data: Data): void;
    /**
     *remove
     *
     * @param {string} name
     * @memberof DataList
     */
    remove(name: string): void;
    /**
     *get
     *
     * @param {string} name
     * @memberof DataList
     */
    get(name?: string): Data[];
}
//# sourceMappingURL=DataList.d.ts.map