import { SelfProp } from '@mikefeng110808/ui-logic';
import { UI } from '@mikefeng110808/ui-logic';
import { UIInstance } from '@mikefeng110808/ui-logic';
import { UIPayload } from '@mikefeng110808/ui-logic';

export declare class ComponentMultipleUI extends ComponentSingleUI {
    constructor();
}

export declare class ComponentSingleUI extends ModuleUI {
    constructor();
}

export declare class ContainerUI extends ModuleUI {
    constructor();
}

export declare class ModuleInstance extends UIInstance {
    children: ModuleInstance[];
    target: ModuleUI;
    moduleId: string;
    canDrag: boolean;
    constructor();
    setTarget(target: ModuleUI): void;
    combi(target: ModuleUI): ModuleInstance;
    unCombi(moduleId: string): void;
    findContainUI(tree: ModuleInstance, moduleId: string): ModuleInstance | null;
    resetRelativeStyle(): void;
    getChildren(): ModuleInstance[];
    setValue(data: any): void;
}

export declare class ModuleSelfProp extends SelfProp {
    constructor();
    getStyle(): any;
    getRelativeStyle(): any;
}

export declare class ModuleUI extends UI {
    id: string;
    name?: string;
    dom?: HTMLElement;
    typeId?: string;
    moduleIdList: any[];
    editable: boolean;
    insertable: boolean;
    selfProp: ModuleSelfProp;
    constructor();
    getValue(): any;
    setDom(dom: HTMLElement): void;
    setId(id?: string): void;
    filterChildren(instance: any): boolean;
    addModuleId(moduleId: string): void;
    removeModuleId(moduleId: string): void;
}

export declare interface ModuleUIPayload extends UIPayload {
    id: string;
    selfProp: ModuleSelfProp;
    name?: string;
    dom?: HTMLElement;
    editable: boolean;
    insertable: boolean;
}

export { }
