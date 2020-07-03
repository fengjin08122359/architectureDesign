
import { ContainerUIPayload, ComponentMultipleUIPayload, ComponentSingleUIPayload } from "@mikefeng110808/ui-logic";

export interface ModulePayload extends ContainerUIPayload, ComponentMultipleUIPayload,ComponentSingleUIPayload{
    moduleId: string
    moudleType: string
}

export class Module {
    width: number
    height: number
    children: ModulePayload[];
    constructor () {
        this.width = 100
        this.height = 100
        this.children = []
        
    }
    changeSize ({width=this.width, height=this.height}) {
        this.width = width
        this.height = height
    }
}