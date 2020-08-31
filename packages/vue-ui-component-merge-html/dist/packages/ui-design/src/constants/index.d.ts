import { SingleUIPayload } from "@mikefeng110808/logic";
import { ContainerUI, ComponentSingleUI, ComponentMultipleUI, ModuleSelfProp } from '@mikefeng110808/ui-module';
export interface Props {
    name: string;
    selfProp: typeof ModuleSelfProp;
    UI: typeof ContainerUI | typeof ComponentSingleUI | typeof ComponentMultipleUI;
    params?: SingleUIPayload[];
    id: string;
}
//# sourceMappingURL=index.d.ts.map