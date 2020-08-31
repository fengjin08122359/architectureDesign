export declare class Style {
    changed: number;
    [x: string]: any;
    constructor();
    setKeyValue<K extends keyof (CSSStyleDeclaration)>(key: K, value: any): void;
    getValue(): {} & this;
    setValue(val: any): void;
    clear(): void;
    move(x: number, y: number): void;
}
//# sourceMappingURL=index.d.ts.map