import { VueUI, VueRenderPayload, SimulateVueUI } from '@mikefeng110808/vue-ui';
import { SingleUIPayload } from '@mikefeng110808/instance';
import { ModuleUI } from '@mikefeng110808/ui-module';
import { ApiList, EventList } from '@mikefeng110808/ui-generator';
export declare class EventListVueUI extends VueUI {
    apiList: ApiList;
    eventList: EventList;
    constructor(params: SingleUIPayload);
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}
export declare class BasicVueUI extends VueUI {
    ui: ModuleUI;
    isCompiler: boolean;
    constructor(params: SingleUIPayload);
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}
export declare class ContainerVueUI extends BasicVueUI {
    constructor(params: SingleUIPayload);
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}
export declare class CardContainerVueUI extends BasicVueUI {
    tab: any;
    constructor(params: SingleUIPayload);
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}
export declare class DialogContainerVueUI extends BasicVueUI {
    constructor(params: SingleUIPayload);
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}
export declare class ButtonVueUI extends BasicVueUI {
    constructor(params: SingleUIPayload);
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}
export declare class InputVueUI extends BasicVueUI {
    constructor(params: SingleUIPayload);
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}
export declare class NumberVueUI extends BasicVueUI {
    constructor(params: SingleUIPayload);
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}
export declare class TimePickerVueUI extends BasicVueUI {
    constructor(params: SingleUIPayload);
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}
export declare class TimeGroupVueUI extends BasicVueUI {
    year: any[];
    report: any[];
    constructor(params: SingleUIPayload);
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}
export declare class SelectVueUI extends BasicVueUI {
    constructor(params: SingleUIPayload);
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}
export declare class CheckBoxVueUI extends BasicVueUI {
    constructor(params: SingleUIPayload);
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}
export declare class CheckBoxGroupVueUI extends BasicVueUI {
    constructor(params: SingleUIPayload);
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}
export declare class RadioVueUI extends BasicVueUI {
    constructor(params: SingleUIPayload);
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}
export declare class MulSelectVueUI extends BasicVueUI {
    constructor(params: SingleUIPayload);
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}
export declare class IframeVueUI extends BasicVueUI {
    constructor(params: SingleUIPayload);
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}
interface TableColPayload {
    prop?: string;
    label?: string;
    sortable?: boolean;
    className?: string;
    width?: string;
    minWidth?: string;
    fixed?: boolean;
    convert?: any;
    type?: string;
    showOverflowTooltip?: boolean;
    children?: TableCol[];
}
export declare class TableCol implements TableColPayload {
    prop: string;
    label: string;
    sortable: boolean;
    className: string;
    width: string;
    minWidth: string;
    fixed: boolean;
    convert: any;
    type: string;
    showOverflowTooltip: boolean;
    children: TableCol[];
    constructor(params: TableColPayload);
    render(h: any, data: any, row: any, key?: any): any;
}
export declare class TableVueUI extends BasicVueUI {
    list: any[];
    loading: boolean;
    direction: 'vertical' | 'horizontal';
    cols: TableCol[];
    mergetList: any[];
    mergeCols: any[];
    showHeader: boolean;
    mergeShowHeader: boolean;
    constructor(params: SingleUIPayload);
    setData(): void;
    merge(): void;
    getTableRow(scope: any, item: any): any;
    getTableKey(scope: any, item: any): any;
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}
export declare class TableDataConfigVueUI extends VueUI {
    cols: TableCol[];
    data: any[];
    simulate: SimulateVueUI;
    constructor(params: SingleUIPayload);
    addCol(): void;
    delCol(index: number): void;
    check(): void;
    getValue(): any;
    setValue(value: any): void;
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}
export {};
//# sourceMappingURL=achieve.d.ts.map