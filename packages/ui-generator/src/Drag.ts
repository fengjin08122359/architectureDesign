export interface DragPayload {
    target: HTMLElement
}

export class Drag {
    target: HTMLElement
    constructor (param: DragPayload) {
        this.target = param.target
    }
}