import { SingleUI, SingleUIPayload, SingleUIValuePayload, validPayload } from "./SingleUI";
import { DataList } from "@mikefeng110808/basic";
/**
 *templatePayload
 * @param {string} key
 * @param {SingleUI} value
 * @interface templatePayload
 */
export interface templatePayload {
    key: string;
    value: typeof SingleUI;
}
/**
 *optionsPayload
 * @param {boolean} needValidHidden
 * @param {any} key: string
 * @interface optionsPayload
 */
export interface optionsPayload {
    needValidHidden: boolean;
    [key: string]: any;
}
export declare class UIList {
    options: optionsPayload;
    needValidHidden: any;
    rawList: SingleUIPayload[];
    list: any[];
    componentHasRendered: DataList;
    private templateList;
    classTarget: typeof UIList;
    constructor(list: any[], options?: optionsPayload);
    /**
     *reset
     *
     * @memberof UIList
     */
    reset(): void;
    /**
     *addTemplate
     *
     * @param {templatePayload} template
     * @memberof UIList
     */
    addTemplate({ key, value }: templatePayload): void;
    /**
     *getTemplate
     * @returns templatePayload[]
     * @memberof UIList
     */
    getTemplate(): templatePayload[];
    /**
     *convert
     * @private
     * @param {SingleUIPayload} item
     * @memberof UIList
     */
    private convert;
    convertSinlgeUI(item: SingleUIPayload): SingleUI;
    /**
     *getValid
     *
     * @returns Promise<validPayload>
     * @memberof UIList
     */
    getValid(): Promise<validPayload>;
    /**
     *save
     * @param {SingleUIValuePayload} data
     * @memberof UIList
     */
    save(data: SingleUIValuePayload[]): void;
    /**
     *getValue
     * @returns SingleUIValuePayload[]
     * @memberof UIList
     */
    getValue(): SingleUIValuePayload[];
    /**
     *getAllItems
     * @returns SingleUI[]
     * @memberof UIList
     */
    getAllItems(): SingleUI[];
    /**
     *loadComponents
     * @returns Promise
     * @memberof UIList
     */
    loadComponents(): Promise<unknown>;
    /**
     *getNeedRender
     * @returns string[]
     * @memberof UIList
     */
    getNeedRender(): string[];
    /**
     *render
     * @returns Promise
     * @memberof UIList
     */
    load(): Promise<void>;
    render(): any[];
    /**
     *handleComponentKey
     * @param {any} key
     * @returns Promise
     * @memberof UIList
     */
    handleComponentKey(key: string): Promise<unknown>;
}
//# sourceMappingURL=index.d.ts.map