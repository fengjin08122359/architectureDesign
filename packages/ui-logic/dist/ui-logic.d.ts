import { DataList } from '@mikefeng110808/basic';
import { SingleUIPayload } from '@mikefeng110808/logic';

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

declare class InEventBind {
    opt: InEventPayload;
    id: string;
    constructor(opt: InEventPayload);
    setValue(val: any): void;
    getValue(): InEventPayload;
}

declare interface InEventPayload {
    tid: string;
}

declare class OutEventBind {
    opt: OutEventPayload;
    id: string;
    constructor(opt: OutEventPayload);
    setValue(val: any): void;
    getValue(): OutEventPayload;
}

declare interface OutEventPayload {
    key: keyof HTMLElementEventMap;
    tid: string;
}

declare class Position_2 {
    left: any;
    right: any;
    top: any;
    bottom: any;
    position: any;
    display: any;
    zIndex: any;
    width: any;
    height: any;
    overflow: any;
    constructor();
    setKeyValue<K extends keyof (PositionPayload)>(key: K, value: any): void;
}
export { Position_2 as Position }

export declare interface PositionPayload {
    left?: any;
    right?: any;
    top?: any;
    bottom?: any;
    position?: any;
    display?: any;
    zIndex?: any;
    width?: any;
    height?: any;
    overflow?: any;
}

export declare class SelfProp {
    opt: any;
    params: SingleUIPayload[];
    constructor();
    setParam(data?: SingleUIPayload[]): void;
    getValue(): any;
    setValue(value: any): void;
}

export declare class Style {
    changed: number;
    [x: string]: any;
    constructor();
    setKeyValue<K extends keyof (CSSStyleDeclaration)>(key: K, value: any): void;
    getValue(): {} & this;
    setValue(val: any): void;
    clear(): void;
    move(x: number, y: number): void;
}

export declare class UI {
    eventBind: EventBind;
    style: Style;
    selfProp: SelfProp;
    constructor();
    setSelfProp(selfProp: SelfProp): void;
    getValue(): any;
}

export declare class UIInstance implements UIInstancePayload {
    children: UIInstance[];
    target: UI;
    moduleId: string;
    canDrag: boolean;
    constructor();
    canDragFilter(): boolean;
    setTarget(target: UI): void;
    combi(target: UI): UIInstance;
    unCombi(moduleId: string): void;
    findContainUI(tree: UIInstance, moduleId: string): UIInstance | null;
    move(x: number, y: number): void;
    getValue(): any;
    getChildren(): UIInstance[];
}

export declare interface UIInstancePayload {
    moduleId: string;
}

export declare interface UIPayload {
    eventBind: EventBind;
    style: Style;
    selfProp: SelfProp;
}

export { }
