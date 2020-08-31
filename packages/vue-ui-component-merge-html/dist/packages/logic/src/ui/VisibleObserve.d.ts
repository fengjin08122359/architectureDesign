/**
 * 监听元素是否可见的抽象类
 */
declare abstract class AVisibleObserve {
    /**
     * 监听元素的 DOM ID
     */
    protected targetDomId: string;
    /**
     * 可见范围根节点 DOM ID
     */
    protected rootDomId: string;
    /**
     * Active 变化回调
     */
    protected onActiveChange: (active?: boolean) => void;
    constructor(targetDomId: string, rootDomId: string, onActiveChange: (active?: boolean) => void);
    /**
     * 开始监听
     */
    abstract observe(): void;
    /**
     * 取消监听
     */
    abstract unobserve(): void;
}
export declare class VisibleObserve extends AVisibleObserve {
    /**
     * 实际 VisibleObserve 类
     */
    private actualVisibleObserve;
    constructor(targetDomId: string, rootDomId: string, onActiveChange: (active?: boolean) => void);
    observe(): void;
    unobserve(): void;
}
export {};
//# sourceMappingURL=VisibleObserve.d.ts.map