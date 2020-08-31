export interface PositionPayload {
    left?: any;
    right?: any;
    top?: any;
    bottom?: any;
    position?: any;
    display?: any;
    zIndex?: any;
    width?: any;
    height?: any;
    overflow?: any;
}
export declare class Position {
    left: any;
    right: any;
    top: any;
    bottom: any;
    position: any;
    display: any;
    zIndex: any;
    width: any;
    height: any;
    overflow: any;
    constructor();
    setKeyValue<K extends keyof (PositionPayload)>(key: K, value: any): void;
}
//# sourceMappingURL=index.d.ts.map