import { VueRenderPayload } from "@mikefeng110808/vue-ui";
import { SingleUIPayload } from "@mikefeng110808/logic";
import { MergeVueUI } from './logic';
export declare class CompMergeInstance {
    view: String;
    logic: typeof MergeVueUI;
    instance?: MergeVueUI;
    db: SingleUIPayload;
    renderResult: any;
    constructor();
    getInstance(): void;
    renderInstance(render: VueRenderPayload): any;
    renderStaticInstance(render: VueRenderPayload): any;
}
//# sourceMappingURL=view.d.ts.map