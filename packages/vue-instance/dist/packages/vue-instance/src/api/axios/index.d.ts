import { AxiosResponse, AxiosRequestConfig } from 'axios';
interface AxiosOpt {
    method: string;
    url: any;
    responseType: any;
    data: {};
    formData: any;
    timeout: number;
    [x: string]: any;
}
export declare class HttpInstance {
    baseURL: string;
    constructor(param: {
        baseURL: string;
    });
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
export {};
//# sourceMappingURL=index.d.ts.map