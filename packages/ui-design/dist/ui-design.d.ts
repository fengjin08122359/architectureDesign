import { ApiList } from '@mikefeng110808/ui-generator/';
import { ComponentMultipleUI } from '@mikefeng110808/ui-module';
import { ComponentSingleUI } from '@mikefeng110808/ui-module';
import { ContainerUI } from '@mikefeng110808/ui-module';
import { EventList } from '@mikefeng110808/ui-generator/';
import { ModuleInstance } from '@mikefeng110808/ui-module';
import { ModuleSelfProp } from '@mikefeng110808/ui-module';
import { ModuleUI } from '@mikefeng110808/ui-module';
import { SingleUIPayload } from '@mikefeng110808/logic';
import { templatePayload } from '@mikefeng110808/logic';
import { VueRenderPayload } from '@mikefeng110808/vue-ui';
import { VueUI } from '@mikefeng110808/vue-ui';
import { VueUIList } from '@mikefeng110808/vue-ui';

export declare let addApi: () => import("../../ui-generator/src").Api;

export declare let addEvent: () => import("../../ui-generator/src").Event;

export declare class ApiGenerate extends GeneratePiece {
    constructor();
}

export declare let apiList: ApiList;

export declare let basicModules: Props[];

export declare let clearCurrentEl: () => void;

export declare let compilerInstance: ModuleInstance;

export declare let containerModules: ModuleInstance;

export declare let continerModules: Props[];

export declare let currentEl: ModuleInstance | null;

declare class EditorInstance {
    active?: ModuleInstance;
    isRelative: boolean;
    borderColor: string;
    constructor();
    setActive(instance: ModuleInstance): void;
    deleteActive(): void;
}

export declare let editorInstance: EditorInstance;

export declare class EventGenerate extends GeneratePiece {
    constructor();
}

export declare let eventList: EventList;

export declare let generateModule: (props: Props) => import("../../ui-module/src").ContainerUI | import("../../ui-module/src").ComponentSingleUI;

export declare class GeneratePiece {
    uiList: VueUIList;
    constructor();
    add({ key, value }: templatePayload): void;
    remove(name: string): void;
    generate(list: SingleUIPayload[]): VueUI[];
    render(render: VueRenderPayload): any[];
    getValue(): import("../../logic/src").SingleUIValuePayload[];
}

export declare class InEventGenerate extends GeneratePiece {
    constructor();
}

export declare let mergeModules: Props[];

export declare class ModuleGenrate extends GeneratePiece {
    isCompiler: boolean;
    constructor();
    setTarget(ui: ModuleUI): void;
}

export declare class OutEventGenerate extends GeneratePiece {
    constructor();
}

export declare class PropGeneratePiece extends GeneratePiece {
    constructor();
}

declare interface Props {
    name: string;
    selfProp: typeof ModuleSelfProp;
    UI: typeof ContainerUI | typeof ComponentSingleUI | typeof ComponentMultipleUI;
    params?: SingleUIPayload[];
    id: string;
}

export declare let removeApi: (id: string) => void;

export declare let removeEvent: (id: string) => void;

export declare let restoreFromConfig: () => void;

export declare let restoreFromEdit: () => void;

export declare let restoreInstance: (instance: ModuleInstance, res: any) => ModuleInstance;

export declare let saveFromConfig: () => void;

export declare let saveFromEdit: () => void;

export declare let setCurrentModule: (target: ModuleInstance) => void;

export declare let setEditorInstance: (instance: ModuleInstance) => void;

export { }
