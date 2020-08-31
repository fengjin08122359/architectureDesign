import { UI, UIPayload, SelfProp } from "@mikefeng110808/ui-logic";
export interface ModuleUIPayload extends UIPayload {
    id: string;
    selfProp: ModuleSelfProp;
    name?: string;
    dom?: HTMLElement;
    editable: boolean;
    insertable: boolean;
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
export declare class ModuleSelfProp extends SelfProp {
    constructor();
    getStyle(): any;
    getRelativeStyle(): any;
}
//# sourceMappingURL=moduleUI.d.ts.map