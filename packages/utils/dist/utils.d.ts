import { AxiosRequestConfig } from 'axios';
import { AxiosResponse } from 'axios';

export declare interface AxiosOpt {
    method?: string;
    url?: any;
    responseType?: any;
    data?: {};
    formData?: any;
    timeout?: number;
    [x: string]: any;
}
export { AxiosRequestConfig }
export { AxiosResponse }

export declare let convertPx: (str: string) => any;

/**
 * Returns an array of HTML elements located under the point specified by x, y.
 * If the native elementsFromPoint function does not exist, a polyfill will be used.
 *
 * @param  {number} x : X position
 * @param  {number} y : Y position
 * @return {array} : Array of the elements under the point (x, y)
 */
export declare function elementsFromPoint(x: number, y: number): any[];

export declare let eventOptions: string[];

export declare let gennerateUUID: () => string;

export declare class HttpInstance {
    baseURL: string;
    constructor(param: HttpInstanceParam);
    private init;
    protected convertRequest(config: AxiosRequestConfig): AxiosRequestConfig;
    protected convertResponse(config: AxiosResponse<any>): AxiosResponse<any>;
    create(opts: AxiosOpt): Promise<unknown>;
    handleSuccess(response: AxiosResponse<any>, resolve: {
        (value?: unknown): void;
        (arg0: any): void;
    }, opts: AxiosOpt): void;
    handleError(error: any, reject: {
        (reason?: any): void;
        (arg0: any): void;
    }, opts: AxiosOpt): void;
}

export declare interface HttpInstanceParam {
    baseURL: string;
}

export declare let setPx: (num: string | number, pre?: string) => string;

export declare let styleOptions: string[];

export { }
