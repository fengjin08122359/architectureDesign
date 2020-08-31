import { DataList } from "@mikefeng110808/basic";
export interface OutEventPayload {
    key: keyof HTMLElementEventMap;
    tid: string;
}
export interface InEventPayload {
    tid: string;
}
export declare class InEventBind {
    opt: InEventPayload;
    id: string;
    constructor(opt: InEventPayload);
    setValue(val: any): void;
    getValue(): InEventPayload;
}
export declare class OutEventBind {
    opt: OutEventPayload;
    id: string;
    constructor(opt: OutEventPayload);
    setValue(val: any): void;
    getValue(): OutEventPayload;
}
export declare class EventBind {
    inList: DataList;
    outList: DataList;
    constructor();
    addIn(data?: InEventPayload): InEventBind;
    addOut(data?: OutEventPayload): OutEventBind;
    removeIn(id: string): void;
    removeOut(id: string): void;
    getInList(): any[];
    getOutList(): any[];
    clearIn(): void;
    clearOut(): void;
    save(): void;
    getValue(): {
        inValue: any[];
        outValue: any[];
    };
}
//# sourceMappingURL=index.d.ts.map