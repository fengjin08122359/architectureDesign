import { DataList } from "@mikefeng110808/basic";
export declare let GetConfig: {};
export declare let PostConfig: {};
export declare let PostformConfig: {};
export declare let PostjsonConfig: {};
export declare let PostfileConfig: {};
export declare let AutoConfig: {};
export interface ConfigPayload {
    name: string;
    config: any;
}
export declare const ConfigList: {
    name: string;
    config: {};
}[];
export declare class Api {
    id: string;
    opt: ApiPayload;
    constructor(opt: ApiPayload);
    fetch(): void;
    setValue(val: any): void;
}
export interface ApiPayload {
    config: string;
    name: string;
    getParam: [];
    postParam: [];
    id?: string;
}
export declare class ApiList {
    list: DataList;
    constructor();
    add(apiData: ApiPayload): Api;
    remove(id: string): void;
    getList(): any[];
    clear(): void;
    save(val: any): void;
}
//# sourceMappingURL=Api.d.ts.map