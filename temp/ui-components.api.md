## API Report File for "@mikefeng110808/ui-components"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts

import { ApiList } from '@mikefeng110808/ui-generator';
import { EventList } from '@mikefeng110808/ui-generator';
import { ModuleUI } from '@mikefeng110808/ui-module';
import { SimulateVueUI } from '@mikefeng110808/vue-ui';
import { SingleUIPayload } from '@mikefeng110808/instance';
import { VueRenderPayload } from '@mikefeng110808/vue-ui';
import { VueUI } from '@mikefeng110808/vue-ui';

// @public (undocumented)
export class BasicVueUI extends VueUI {
    constructor(params: SingleUIPayload);
    // (undocumented)
    isCompiler: boolean;
    // (undocumented)
    renderInstance(render: VueRenderPayload): import("vue").VNode;
    // (undocumented)
    ui: ModuleUI;
}

// @public (undocumented)
export class ButtonVueUI extends BasicVueUI {
    constructor(params: SingleUIPayload);
    // (undocumented)
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}

// @public (undocumented)
export class CardContainerVueUI extends BasicVueUI {
    constructor(params: SingleUIPayload);
    // (undocumented)
    renderInstance(render: VueRenderPayload): import("vue").VNode;
    // (undocumented)
    tab: any;
}

// @public (undocumented)
export class CheckBoxGroupVueUI extends BasicVueUI {
    constructor(params: SingleUIPayload);
    // (undocumented)
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}

// @public (undocumented)
export class CheckBoxVueUI extends BasicVueUI {
    constructor(params: SingleUIPayload);
    // (undocumented)
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}

// @public (undocumented)
export class ContainerVueUI extends BasicVueUI {
    constructor(params: SingleUIPayload);
    // (undocumented)
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}

// @public (undocumented)
export class DialogContainerVueUI extends BasicVueUI {
    constructor(params: SingleUIPayload);
    // (undocumented)
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}

// @public (undocumented)
export class EventListVueUI extends VueUI {
    constructor(params: SingleUIPayload);
    // (undocumented)
    apiList: ApiList;
    // (undocumented)
    eventList: EventList;
    // (undocumented)
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}

// @public (undocumented)
export class IframeVueUI extends BasicVueUI {
    constructor(params: SingleUIPayload);
    // (undocumented)
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}

// @public (undocumented)
export class InputVueUI extends BasicVueUI {
    constructor(params: SingleUIPayload);
    // (undocumented)
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}

// @public (undocumented)
export class MulSelectVueUI extends BasicVueUI {
    constructor(params: SingleUIPayload);
    // (undocumented)
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}

// @public (undocumented)
export class NumberVueUI extends BasicVueUI {
    constructor(params: SingleUIPayload);
    // (undocumented)
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}

// @public (undocumented)
export class RadioVueUI extends BasicVueUI {
    constructor(params: SingleUIPayload);
    // (undocumented)
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}

// @public (undocumented)
export class SelectVueUI extends BasicVueUI {
    constructor(params: SingleUIPayload);
    // (undocumented)
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}

// Warning: (ae-forgotten-export) The symbol "TableColPayload" needs to be exported by the entry point index.d.ts
//
// @public (undocumented)
export class TableCol implements TableColPayload {
    constructor(params: TableColPayload);
    // (undocumented)
    children: TableCol[];
    // (undocumented)
    className: string;
    // (undocumented)
    convert: any;
    // (undocumented)
    fixed: boolean;
    // (undocumented)
    label: string;
    // (undocumented)
    minWidth: string;
    // (undocumented)
    prop: string;
    // (undocumented)
    render(h: any, data: any, row: any, key?: any): any;
    // (undocumented)
    showOverflowTooltip: boolean;
    // (undocumented)
    sortable: boolean;
    // (undocumented)
    type: string;
    // (undocumented)
    width: string;
}

// @public (undocumented)
export class TableDataConfigVueUI extends VueUI {
    constructor(params: SingleUIPayload);
    // (undocumented)
    addCol(): void;
    // (undocumented)
    check(): void;
    // (undocumented)
    cols: TableCol[];
    // (undocumented)
    data: any[];
    // (undocumented)
    delCol(index: number): void;
    // (undocumented)
    getValue(): any;
    // (undocumented)
    renderInstance(render: VueRenderPayload): import("vue").VNode;
    // (undocumented)
    setValue(value: any): void;
    // (undocumented)
    simulate: SimulateVueUI;
}

// @public (undocumented)
export class TableVueUI extends BasicVueUI {
    constructor(params: SingleUIPayload);
    // (undocumented)
    cols: TableCol[];
    // (undocumented)
    direction: 'vertical' | 'horizontal';
    // (undocumented)
    getTableKey(scope: any, item: any): any;
    // (undocumented)
    getTableRow(scope: any, item: any): any;
    // (undocumented)
    list: any[];
    // (undocumented)
    loading: boolean;
    // (undocumented)
    merge(): void;
    // (undocumented)
    mergeCols: any[];
    // (undocumented)
    mergeShowHeader: boolean;
    // (undocumented)
    mergetList: any[];
    // (undocumented)
    renderInstance(render: VueRenderPayload): import("vue").VNode;
    // (undocumented)
    setData(): void;
    // (undocumented)
    showHeader: boolean;
}

// @public (undocumented)
export class TimeGroupVueUI extends BasicVueUI {
    constructor(params: SingleUIPayload);
    // (undocumented)
    renderInstance(render: VueRenderPayload): import("vue").VNode;
    // (undocumented)
    report: any[];
    // (undocumented)
    year: any[];
}

// @public (undocumented)
export class TimePickerVueUI extends BasicVueUI {
    constructor(params: SingleUIPayload);
    // (undocumented)
    renderInstance(render: VueRenderPayload): import("vue").VNode;
}


// (No @packageDocumentation comment for this package)

```
