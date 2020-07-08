import { UI, UIPayload } from "../UI";




export interface ComponentSingleUIPayload extends UIPayload {
    editable: boolean
    insertable: boolean
}

export class ComponentSingleUI extends UI {
    editable: boolean;
    insertable: boolean
    constructor () {
        super()
        this.editable = true
        this.insertable = false
    }
}

export interface ComponentMultipleUIPayload extends ComponentSingleUIPayload {
    id: string;
}

export class ComponentMultipleUI extends ComponentSingleUI{
    constructor () {
        super()
    }
}
