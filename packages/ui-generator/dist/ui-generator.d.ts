import { DataList } from '@mikefeng110808/basic';

export declare class Api {
    id: string;
    opt: ApiPayload;
    constructor(opt: ApiPayload);
    fetch(): void;
    setValue(val: any): void;
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

export declare interface ApiPayload {
    config: string;
    name: string;
    getParam: [];
    postParam: [];
    id?: string;
}

export declare let AutoConfig: {};

export declare const ConfigList: {
    name: string;
    config: {};
}[];

export declare interface ConfigPayload {
    name: string;
    config: any;
}

export declare class Drag {
    target: HTMLElement;
    constructor(param: DragPayload);
}

export declare interface DragPayload {
    target: HTMLElement;
}

declare class Event_2 {
    id: string;
    opt: EventPayload;
    constructor(opt: EventPayload);
    fetch(): void;
    setValue(val: any): void;
}
export { Event_2 as Event }

export declare class EventList {
    list: DataList;
    constructor();
    add(apiData: EventPayload): Event_2;
    remove(id: string): void;
    getList(): any[];
    clear(): void;
    save(): void;
}

export declare interface EventPayload {
    id?: string;
    name: string;
    type: eventType;
}

declare type eventType = 'EventDispatcher' | 'ObserverSubject';

export declare let GetConfig: {};

export declare let PostConfig: {};

export declare let PostfileConfig: {};

export declare let PostformConfig: {};

export declare let PostjsonConfig: {};

export { }
