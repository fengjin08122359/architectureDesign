import { SingleUIPayload } from "@mikefeng110808/logic";
import { VueUI } from "@mikefeng110808/vue-ui";
import { VueRenderPayload } from "@mikefeng110808/vue-instance";
export declare class MergeVueUI extends VueUI {
    [x: string]: any;
    renderTemplate: string;
    constructor(params: SingleUIPayload);
    staticRender(renderTarget: VueRenderPayload): import("vue").VNode;
    normalRender(renderTarget: VueRenderPayload): import("vue").VNode;
}
export declare class DoubleTitle extends MergeVueUI {
    constructor(params: SingleUIPayload);
}
//# sourceMappingURL=logic.d.ts.map