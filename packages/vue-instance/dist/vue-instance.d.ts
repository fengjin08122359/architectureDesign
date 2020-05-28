import { AxiosRequestConfig } from 'axios';
import { AxiosResponse } from 'axios';
import { CreateElement } from 'vue';
import { DataList } from '@mikefeng110808/instance';
import { ErrorCode } from '@mikefeng110808/instance';
import { EventDispatcher } from '@mikefeng110808/instance';
import { Intercept } from '@mikefeng110808/instance';
import { Log } from '@mikefeng110808/instance';
import { optionsPayload } from '@mikefeng110808/instance';
import { RenderContext } from 'vue';
import { SingleUI } from '@mikefeng110808/instance';
import { SingleUIPayload } from '@mikefeng110808/instance';
import { UIList } from '@mikefeng110808/instance';
import { default as Vue_2 } from 'vue';

export declare interface AxiosOpt {
    method?: string;
    url?: any;
    responseType?: any;
    data?: {};
    formData?: any;
    timeout?: number;
    [x: string]: any;
}

export declare const errorCode: ErrorCode;

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

export declare const httpIntercept: Intercept;

declare class KeepAlive {
    pong: number;
    checkTime: number;
    reconnectTime: number;
    connnectNumber: number;
    connectLimit: number;
    keepAliveModel: boolean;
    interval: any;
    ws: WebSocketInstance;
    constructor(opt: {
        ws: WebSocketInstance;
    });
    init(): void;
    setConnectLimit(data: number): void;
    setPong(): void;
    check(): void;
    endTimeout(): void;
    close(): void;
    end(): void;
    reconnect(): boolean;
}

export declare const keyFrame: EventDispatcher;

export declare const log: VueLog;

export declare const routerIntercept: Intercept;

declare class VueLog extends Log {
    constructor();
}

export declare interface VueRenderPayload {
    createElement: CreateElement;
    vueRoot: Vue_2;
    context: RenderContext<Record<never, any>>;
}

export declare class VueUI extends SingleUI {
    constructor(params: SingleUIPayload);
    render(render: VueRenderPayload): import("vue").VNode;
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}

export declare class VueUIList extends UIList {
    componentHasRendered: DataList;
    constructor(list: any[], options?: optionsPayload);
    handleComponentKey(key: string): Promise<unknown>;
    getRenderList(render: VueRenderPayload): any[];
}

export declare class WebSocketInstance {
    client: any;
    protected keepAlive: KeepAlive;
    url: any;
    constructor();
    isClosed(): boolean;
    canReconnected(): boolean;
    endClient(): void;
    start(url: any): void;
    setConnectLimit(data: number): void;
    send(msg: any): void;
    end(): void;
}

export declare const wsIntercept: Intercept;

export { }
