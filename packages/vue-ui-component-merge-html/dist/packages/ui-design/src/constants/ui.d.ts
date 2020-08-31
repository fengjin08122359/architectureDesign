import { ContainerUI, ModuleSelfProp } from "@mikefeng110808/ui-module";
export declare class ContainerSelfProp extends ModuleSelfProp {
    constructor();
    getStyle(): any;
}
export declare class BasicSelfProp extends ModuleSelfProp {
    constructor();
    getStyle(): any;
}
export declare class MergeSelfProp extends ModuleSelfProp {
    constructor();
    getStyle(): any;
}
export declare class CardContainerSelfProp extends ContainerSelfProp {
    constructor();
}
export declare class CardContainerUI extends ContainerUI {
    activeCard: string;
    constructor();
    filterChildren(instance: any): boolean;
    addModuleId(moduleId: string): void;
    removeModuleId(moduleId: string): void;
}
export declare class ButtonSelfProp extends BasicSelfProp {
    constructor();
}
export declare class InputSelfProp extends BasicSelfProp {
    constructor();
}
export declare class NumberSelfProp extends BasicSelfProp {
    constructor();
}
export declare class TimePickerSelfProp extends BasicSelfProp {
    constructor();
}
export declare class TimeGroupSelfProp extends BasicSelfProp {
    constructor();
}
export declare class SelectSelfProp extends BasicSelfProp {
    constructor();
}
export declare class CheckboxSelfProp extends BasicSelfProp {
    constructor();
}
export declare class CheckBoxGroupSelfProp extends BasicSelfProp {
    constructor();
}
export declare class RadioSelfProp extends BasicSelfProp {
    constructor();
}
export declare class MulSelectSelfProp extends BasicSelfProp {
    constructor();
}
export declare class IframeSelfProp extends MergeSelfProp {
    constructor();
}
//# sourceMappingURL=ui.d.ts.map