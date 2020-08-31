import { SingleUIPayload } from "@mikefeng110808/logic";
import { EventBind } from "../EventBind";
import { Style } from "../Style";
export interface UIPayload {
    eventBind: EventBind;
    style: Style;
    selfProp: SelfProp;
}
export declare class UI {
    eventBind: EventBind;
    style: Style;
    selfProp: SelfProp;
    constructor();
    setSelfProp(selfProp: SelfProp): void;
    getValue(): any;
}
export declare class SelfProp {
    opt: any;
    params: SingleUIPayload[];
    constructor();
    setParam(data?: SingleUIPayload[]): void;
    getValue(): any;
    setValue(value: any): void;
}
//# sourceMappingURL=index.d.ts.map