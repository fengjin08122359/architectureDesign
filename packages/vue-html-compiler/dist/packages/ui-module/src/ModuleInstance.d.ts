import { UIInstance } from "@mikefeng110808/ui-logic";
import { ModuleUI } from ".";
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
//# sourceMappingURL=ModuleInstance.d.ts.map