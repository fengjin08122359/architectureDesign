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
export interface SingleUIProps {
    label?: string;
    required?: string;
    data?: [];
    disabled?: boolean;
    show?: boolean;
    placeholder?: string;
    [key: string]: any;
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
export interface SingleUIPayload {
    key?: string;
    props: SingleUIProps;
    valid?: any[];
    type?: string;
    value?: any;
    children?: any[];
    rawComponents?: string[];
}
/**
 *SingleUIValuePayload
 * @param {string} key
 * @param {any} value
 * @param {SingleUIValuePayload} children
 * @interface SingleUIValuePayload
 */
export interface SingleUIValuePayload {
    key: string;
    value: any;
    children: SingleUIValuePayload[];
}
/**
 *validPayload
 * @param {boolean} success
 * @param {string} message
 * @param {string} type
 * @interface validPayload
 */
export interface validPayload {
    success: boolean;
    message: string;
    type: string;
}
declare class SingleUI {
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
export { SingleUI };
//# sourceMappingURL=SingleUI.d.ts.map