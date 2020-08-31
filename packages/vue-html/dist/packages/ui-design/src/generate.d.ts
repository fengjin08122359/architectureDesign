import { ModuleUI } from '@mikefeng110808/ui-module';
import { SingleUIPayload, templatePayload } from "@mikefeng110808/logic";
import { VueUIList, VueUI, VueRenderPayload } from '@mikefeng110808/vue-ui';
export declare class GeneratePiece {
    uiList: VueUIList;
    constructor();
    add({ key, value }: templatePayload): void;
    remove(name: string): void;
    generate(list: SingleUIPayload[]): VueUI[];
    render(render: VueRenderPayload): any[];
    getValue(): import("../../logic/src").SingleUIValuePayload[];
}
export declare class ModuleGenrate extends GeneratePiece {
    isCompiler: boolean;
    constructor();
    setTarget(ui: ModuleUI): void;
}
export declare class ApiGenerate extends GeneratePiece {
    constructor();
}
export declare class EventGenerate extends GeneratePiece {
    constructor();
}
export declare class InEventGenerate extends GeneratePiece {
    constructor();
}
export declare class OutEventGenerate extends GeneratePiece {
    constructor();
}
export declare class PropGeneratePiece extends GeneratePiece {
    constructor();
}
//# sourceMappingURL=generate.d.ts.map