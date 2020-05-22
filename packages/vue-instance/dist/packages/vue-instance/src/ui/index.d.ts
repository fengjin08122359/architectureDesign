import { UIList, SingleUI, SingleUIPayload, DataList, optionsPayload } from '@mikefeng110808/instance';
import Vue, { CreateElement, RenderContext } from 'vue';
export interface VueRenderPayload {
    createElement: CreateElement;
    vueRoot: Vue;
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
//# sourceMappingURL=index.d.ts.map