import { ModuleInstance } from "@mikefeng110808/ui-module";
export declare let currentEl: ModuleInstance | null;
export declare let setCurrentModule: (target: ModuleInstance) => void;
export declare let clearCurrentEl: () => void;
declare class EditorInstance {
    active?: ModuleInstance;
    isRelative: boolean;
    borderColor: string;
    constructor();
    setActive(instance: ModuleInstance): void;
    deleteActive(): void;
}
export declare let editorInstance: EditorInstance;
export declare let setEditorInstance: (instance: ModuleInstance) => void;
export declare let containerModules: ModuleInstance;
export {};
//# sourceMappingURL=editor.d.ts.map