export declare class Debounce {
    timeout: any;
    constructor();
    do(handle: (...args: any[]) => void, wait: number): void;
}
export declare class Throttle {
    timeout: any;
    lastTriggerTime: number | null;
    lastExecutedTime: number | null;
    executeOncePerWait: boolean;
    immediate: boolean;
    constructor();
    do(handle: (...args: any[]) => void, wait: number): void;
    later(handle: (...args: any[]) => void, wait: number, args: any[]): void;
}
//# sourceMappingURL=Performance.d.ts.map