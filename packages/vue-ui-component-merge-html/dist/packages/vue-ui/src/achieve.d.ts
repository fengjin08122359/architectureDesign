import { VueUI } from './ui';
import { SingleUIPayload } from '@mikefeng110808/instance';
export declare class InputVueUI extends VueUI {
    constructor(params: SingleUIPayload);
}
export declare class ArrayVueUI extends VueUI {
    constructor(params: SingleUIPayload);
    addCol(): void;
    delCol(index: number): void;
    getValue(): any[];
    setValue(val: any[]): void;
}
export declare class ObjectVueUI extends VueUI {
    constructor(params: SingleUIPayload);
    addCol(): void;
    delCol(index: number): void;
    getValue(): any[];
    setValue(val: Object): void;
}
export declare class MulSelectVueUI extends VueUI {
    constructor(params: SingleUIPayload);
    addCol(): void;
    delCol(index: number): void;
}
export declare class SelectVueUI extends VueUI {
    constructor(params: SingleUIPayload);
    addCol(): void;
    delCol(index: number): void;
}
export declare class NumberVueUI extends VueUI {
    constructor(params: SingleUIPayload);
}
export declare class BooleanVueUI extends VueUI {
    constructor(params: SingleUIPayload);
}
export declare class SimulateVueUI extends VueUI {
    simulateValue: any;
    error: string;
    constructor(params: SingleUIPayload);
    getValue(): any;
    setValue(value: any): void;
    simulate(): void;
    simulateValueToString(): string;
}
//# sourceMappingURL=achieve.d.ts.map