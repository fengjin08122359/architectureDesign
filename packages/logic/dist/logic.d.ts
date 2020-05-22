import { DataList } from '@mikefeng110808/basic';

/**
 *optionsPayload
 * @param {boolean} needValidHidden
 * @param {any} key: string
 * @interface optionsPayload
 */
export declare interface optionsPayload {
    needValidHidden: boolean;
    [key: string]: any;
}

export declare class SingleUI {
    key: string;
    props: SingleUIProps;
    valid: any[];
    type: string;
    value: any;
    children: any[];
    rawData: SingleUIPayload;
    rawComponents: string[];
    canRender: boolean;
    constructor(params: SingleUIPayload);
    /**
     *dataFind
     * @param {string | number} data
     * @memberof SingleUI
     */
    dataFind(data: string | number): null;
    /**
     *save
     * @param {string} value
     * @memberof SingleUI
     */
    save(value: string): void;
    /**
     *getKey
     * @returns string
     * @memberof SingleUI
     */
    getKey(): string;
    /**
     *getValue
     * @returns any
     * @memberof SingleUI
     */
    getValue(): any;
    /**
     *hasChange
     * @returns boolean
     * @memberof SingleUI
     */
    hasChange(): boolean;
    /**
     *onChange
     * @param  ({val, oldVal})
     * @returns ({val, oldVal})
     * @memberof SingleUI
     */
    onChange({ val, oldVal }: any): {
        val: any;
        oldVal: any;
    };
    /**
     *getValid
     *
     * @returns Promise<validPayload>
     * @memberof SingleUI
     */
    getValid(): Promise<validPayload>;
    /**
     *setDisabled
     * @param  {boolean} flag
     * @returns boolean
     * @memberof SingleUI
     */
    setDisabled(flag?: boolean): boolean;
    /**
     *getKeyValue
     * @returns SingleUIValuePayload
     * @memberof SingleUI
     */
    getKeyValue(): SingleUIValuePayload;
    /**
     *setKeyValue
     * @param {SingleUIValuePayload} ({ key, value, children })
     * @memberof SingleUI
     */
    setKeyValue({ key, value, children }: SingleUIValuePayload): void;
    /**
     *setKeyValue
     * @returns SingleUI[]
     * @memberof SingleUI
     */
    getAllItems(): SingleUI[];
    /**
     *getCanRender
     * @returns boolean
     * @memberof SingleUI
     */
    getCanRender(): boolean;
    /**
     *render
     *
     * @memberof SingleUI
     */
    render(...res: any): any;
}

/**
 *SingleUIPayload
 * @param {string} key
 * @param {SingleUIProps} props
 * @param {Array} valid
 * @param {string} type
 * @param {any} value
 * @param {Array} children
 * @interface SingleUIPayload
 */
export declare interface SingleUIPayload {
    key?: string;
    props: SingleUIProps;
    valid?: any[];
    type?: string;
    value?: any;
    children?: any[];
    rawComponents?: string[];
}

/**
 *SingleUIProps
 * @param {string} label
 * @param {string} required
 * @param {Array} data
 * @param {boolean} disabled
 * @param {boolean} show
 * @param {placeholder} placeholder
 * @param {any} key: string
 * @interface SingleUIProps
 */
declare interface SingleUIProps {
    label?: string;
    required?: string;
    data?: [];
    disabled?: boolean;
    show?: boolean;
    placeholder?: string;
    [key: string]: any;
}

/**
 *SingleUIValuePayload
 * @param {string} key
 * @param {any} value
 * @param {SingleUIValuePayload} children
 * @interface SingleUIValuePayload
 */
export declare interface SingleUIValuePayload {
    key: string;
    value: any;
    children: SingleUIValuePayload[];
}

/**
 *templatePayload
 * @param {string} key
 * @param {SingleUI} value
 * @interface templatePayload
 */
export declare interface templatePayload {
    key: string;
    value: typeof SingleUI;
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

/**
 *validPayload
 * @param {boolean} success
 * @param {string} message
 * @param {string} type
 * @interface validPayload
 */
export declare interface validPayload {
    success: boolean;
    message: string;
    type: string;
}

export { }
