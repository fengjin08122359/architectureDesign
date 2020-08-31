import { DataList } from "@mikefeng110808/basic";
declare type eventType = 'EventDispatcher' | 'ObserverSubject';
export interface EventPayload {
    id?: string;
    name: string;
    type: eventType;
}
export declare class Event {
    id: string;
    opt: EventPayload;
    constructor(opt: EventPayload);
    fetch(): void;
    setValue(val: any): void;
}
export declare class EventList {
    list: DataList;
    constructor();
    add(apiData: EventPayload): Event;
    remove(id: string): void;
    getList(): any[];
    clear(): void;
    save(): void;
}
export {};
//# sourceMappingURL=EventList.d.ts.map