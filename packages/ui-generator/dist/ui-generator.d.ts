import { ComponentMultipleUIPayload } from '@mikefeng110808/ui-logic';
import { ComponentSingleUIPayload } from '@mikefeng110808/ui-logic';
import { ContainerUIPayload } from '@mikefeng110808/ui-logic';

export declare let gennerateUUID: () => string;

export declare class Module {
    width: number;
    height: number;
    children: ModulePayload[];
    constructor();
    changeSize({ width, height }: {
        width?: number | undefined;
        height?: number | undefined;
    }): void;
}

declare interface ModulePayload extends ContainerUIPayload, ComponentMultipleUIPayload, ComponentSingleUIPayload {
    moduleId: string;
    moudleType: string;
}

export { }
