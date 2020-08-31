import { CreateElement } from 'vue';
import { optionsPayload } from '@mikefeng110808/instance';
import { RenderContext } from 'vue';
import { SingleUI } from '@mikefeng110808/instance';
import { SingleUIPayload } from '@mikefeng110808/instance';
import { UIList } from '@mikefeng110808/instance';
import { default as Vue_2 } from 'vue';
import { VueConstructor } from 'vue';

export declare class ArrayVueUI extends VueUI {
    constructor(params: SingleUIPayload);
    addCol(): void;
    delCol(index: number): void;
    getValue(): any[];
    setValue(val: any[]): void;
}

export declare class BooleanVueUI extends VueUI {
    constructor(params: SingleUIPayload);
}

export declare class InputVueUI extends VueUI {
    constructor(params: SingleUIPayload);
}

declare class LifeCycle {
    constructor(lifeCycle?: LifeCyclePayload);
    mounted(): void;
}

declare interface LifeCyclePayload {
}

export declare class MulSelectVueUI extends VueUI {
    constructor(params: SingleUIPayload);
    addCol(): void;
    delCol(index: number): void;
}

export declare class NumberVueUI extends VueUI {
    constructor(params: SingleUIPayload);
}

export declare class ObjectVueUI extends VueUI {
    constructor(params: SingleUIPayload);
    addCol(): void;
    delCol(index: number): void;
    getValue(): any[];
    setValue(val: Object): void;
}

export declare class SelectVueUI extends VueUI {
    constructor(params: SingleUIPayload);
    addCol(): void;
    delCol(index: number): void;
}

export declare class SimulateVueUI extends VueUI {
    simulateValue: any;
    error: string;
    constructor(params: SingleUIPayload);
    getValue(): any;
    setValue(value: any): void;
    simulate(): void;
    simulateValueToString(): string;
}

export declare interface VueRenderPayload {
    createElement: CreateElement;
    vueRoot: Vue_2;
    context: RenderContext<Record<never, any>>;
    [x: string]: any;
}

export declare class VueUI extends SingleUI {
    renderComponent?: VueConstructor<Vue_2>;
    lifeCycle?: LifeCycle;
    constructor(params: SingleUIPayload);
    render(render: VueRenderPayload, props?: any): import("vue").VNode;
    renderInstance(render: VueRenderPayload, props?: any): import("vue").VNode;
}

export declare class VueUIList extends UIList {
    constructor(list?: any[], options?: optionsPayload);
    convertSinlgeUI(item: SingleUIPayload): VueUI;
    handleComponentKey(key: string): Promise<unknown>;
    getRenderList(render: VueRenderPayload): any[];
}

export { }
