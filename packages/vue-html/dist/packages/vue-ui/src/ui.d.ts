import { UIList, SingleUI, SingleUIPayload, optionsPayload } from '@mikefeng110808/instance';
import Vue, { CreateElement, RenderContext, VueConstructor } from 'vue';
import { LifeCycle } from './lifeCycle';
export interface VueRenderPayload {
    createElement: CreateElement;
    vueRoot: Vue;
    context: RenderContext<Record<never, any>>;
    [x: string]: any;
}
export declare class VueUI extends SingleUI {
    renderComponent?: VueConstructor<Vue>;
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
//# sourceMappingURL=ui.d.ts.map