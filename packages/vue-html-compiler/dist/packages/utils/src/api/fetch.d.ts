import 'isomorphic-fetch';
export declare class Request {
    header: {};
    needEncode: boolean;
    loadingInstance: null;
    constructor();
    fetch({ url, method, params, headers, backError, signal }: {
        url?: string | undefined;
        method?: string | undefined;
        params?: {} | undefined;
        headers?: {} | undefined;
        backError?: string | undefined;
        signal?: {} | undefined;
    }): Promise<any>;
    solveFetch(res: Response, backError: string): Promise<any> | null;
    changeUrl(options: any, url: string, params: any): {
        options: any;
        url: string;
    };
}
//# sourceMappingURL=fetch.d.ts.map