import { SingleUIPayload } from '@mikefeng110808/logic';
import { VueRenderPayload } from '@mikefeng110808/vue-instance';
import { VueRenderPayload as VueRenderPayload_2 } from '@mikefeng110808/vue-ui';
import { VueUI } from '@mikefeng110808/vue-ui';

export declare class CompMergeInstance {
    view: String;
    logic: typeof MergeVueUI;
    instance?: MergeVueUI;
    db: SingleUIPayload;
    renderResult: any;
    constructor();
    getInstance(): void;
    renderInstance(render: VueRenderPayload_2): any;
    renderStaticInstance(render: VueRenderPayload_2): any;
}

declare class MergeVueUI extends VueUI {
    [x: string]: any;
    renderTemplate: string;
    constructor(params: SingleUIPayload);
    staticRender(renderTarget: VueRenderPayload): import("vue").VNode;
    normalRender(renderTarget: VueRenderPayload): import("vue").VNode;
}

export { }
