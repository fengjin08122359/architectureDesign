import { ContainerUI, ComponentSingleUI } from "@mikefeng110808/ui-module";
export declare class BaiscContainerUI extends ContainerUI {
    typeId: string;
    name: string;
    constructor();
}
export declare class CardContainerUI extends ContainerUI {
    activeCard: string;
    typeId: string;
    name: string;
    constructor();
    filterChildren(instance: any): boolean;
    addModuleId(moduleId: string): void;
    removeModuleId(moduleId: string): void;
}
export declare class DialogContainerUI extends ContainerUI {
    typeId: string;
    name: string;
    constructor();
}
export declare class ButtonComponent extends ComponentSingleUI {
    typeId: string;
    name: string;
    constructor();
}
export declare class InputComponent extends ComponentSingleUI {
    typeId: string;
    name: string;
    constructor();
}
export declare class NumberComponent extends ComponentSingleUI {
    typeId: string;
    name: string;
    constructor();
}
export declare class TimePickerComponent extends ComponentSingleUI {
    typeId: string;
    name: string;
    constructor();
}
export declare class TimeComponent extends ComponentSingleUI {
    typeId: string;
    name: string;
    constructor();
}
export declare class SelectComponent extends ComponentSingleUI {
    typeId: string;
    name: string;
    constructor();
}
export declare class CheckboxComponent extends ComponentSingleUI {
    typeId: string;
    name: string;
    constructor();
}
export declare class CheckBoxGroupComponent extends ComponentSingleUI {
    typeId: string;
    name: string;
    constructor();
}
export declare class RadioComponent extends ComponentSingleUI {
    typeId: string;
    name: string;
    constructor();
}
export declare class MulSelectComponent extends ComponentSingleUI {
    typeId: string;
    name: string;
    constructor();
}
export declare class LineEchartComponent extends ComponentSingleUI {
    typeId: string;
    name: string;
    constructor();
}
export declare class PieEchartComponent extends ComponentSingleUI {
    typeId: string;
    name: string;
    constructor();
}
export declare class TableComponent extends ComponentSingleUI {
    typeId: string;
    name: string;
    constructor();
}
export declare class IframeComponent extends ComponentSingleUI {
    typeId: string;
    name: string;
    constructor();
}
//# sourceMappingURL=index.d.ts.map