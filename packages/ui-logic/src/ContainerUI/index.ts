import { UI, UIPayload } from "../UI";

export interface ContainerUIPayload extends UIPayload{
    editable: boolean;
    insertable: boolean
}

export class ContainerUI extends UI {
    editable: boolean;
    insertable: boolean
    constructor () {
        super()
        this.editable = false
        this.insertable = true
    }
}
