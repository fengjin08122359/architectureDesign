import { DataList } from '@mikefeng110808/basic';

export declare class ComponentMultipleUI extends ComponentSingleUI {
    children: DataList;
    constructor(dom?: HTMLElement);
    combi(ui: ComponentMultipleUI): void;
    unCombi(ui: ComponentMultipleUI): void;
    findUI(ui: ComponentMultipleUI): import("../../../basic/src").DataPayload[];
}

export declare interface ComponentMultipleUIPayload extends ComponentSingleUIPayload {
    children: DataList;
    id: string;
}

export declare class ComponentSingleUI extends UI {
    editable: boolean;
    insertable: boolean;
    constructor(dom?: HTMLElement);
}

export declare interface ComponentSingleUIPayload extends UIPayload {
    editable: boolean;
    insertable: boolean;
}

export declare class ContainerUI extends UI {
    editable: boolean;
    insertable: boolean;
    constructor(dom?: HTMLElement);
}

export declare interface ContainerUIPayload extends UIPayload {
    editable: boolean;
    insertable: boolean;
}

export declare class EventBind {
    dataList: DataList;
    dom: HTMLElement;
    constructor(dom: HTMLElement);
    bind<K extends keyof HTMLElementEventMap>(key: K, event: EventListener, options?: boolean | AddEventListenerOptions): void;
    unbind<K extends keyof HTMLElementEventMap>(key: K): void;
}

export declare let gennerateUUID: () => string;

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
    dom: HTMLElement;
    constructor(dom: HTMLElement);
    setKeyValue<K extends keyof (PositionPayload | CSSStyleDeclaration)>(key: K, value: any): void;
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
    constructor();
}

export declare class Style {
    style: CSSStyleDeclaration;
    constructor(dom: HTMLElement);
    setKeyValue<K extends keyof (CSSStyleDeclaration)>(key: K, value: any): void;
}

declare class UI {
    dom: HTMLElement;
    eventBind: EventBind;
    position: Position_2;
    style: Style;
    id: string;
    selfProp: SelfProp;
    name?: string;
    constructor(dom: HTMLElement);
    setDom(dom: HTMLElement): void;
}

declare interface UIPayload {
    dom: HTMLElement;
    eventBind: EventBind;
    position: Position_2;
    style: Style;
    id: string;
    selfProp: SelfProp;
    name?: string;
}

export { }
