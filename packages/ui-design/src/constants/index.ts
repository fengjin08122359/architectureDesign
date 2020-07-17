import { SelfProp, ContainerUI, ComponentSingleUI, ComponentMultipleUI } from "@mikefeng110808/ui-logic";
import { SingleUIPayload } from "@mikefeng110808/logic";

export interface Props {
    name: string,
    selfProp: typeof SelfProp,
    UI: typeof ContainerUI | typeof ComponentSingleUI | typeof ComponentMultipleUI
    params?: SingleUIPayload[],
    id: string,
}
