import { UI } from "../UI";
export interface UIInstancePayload {
    moduleId: string;
}
export declare class UIInstance implements UIInstancePayload {
    children: UIInstance[];
    target: UI;
    moduleId: string;
    canDrag: boolean;
    constructor();
    canDragFilter(): boolean;
    setTarget(target: UI): void;
    combi(target: UI): UIInstance;
    unCombi(moduleId: string): void;
    findContainUI(tree: UIInstance, moduleId: string): UIInstance | null;
    move(x: number, y: number): void;
    getValue(): any;
    getChildren(): UIInstance[];
}
//# sourceMappingURL=index.d.ts.map