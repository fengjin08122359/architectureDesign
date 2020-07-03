import { DataList } from "@mikefeng110808/basic"
import { UI, UIPayload } from "../UI";




export interface ComponentSingleUIPayload extends UIPayload {
    editable: boolean
    insertable: boolean
}

export class ComponentSingleUI extends UI {
    editable: boolean;
    insertable: boolean
    constructor (dom: HTMLElement) {
        super(dom)
        this.editable = true
        this.insertable = false
    }
}

export interface ComponentMultipleUIPayload extends ComponentSingleUIPayload {
    children: DataList
    selfProp: SelfProp
    id: string;
}

export class ComponentMultipleUI extends ComponentSingleUI{
    children: DataList
    selfProp: SelfProp
    constructor (dom:HTMLElement) {
        super(dom)
        this.children = new DataList()
        this.selfProp = new SelfProp()
    }
    combi (ui: ComponentMultipleUI) {
        if (this.findUI(ui).length > 0) {
            this.unCombi(ui);
        }
        this.children.add({name: ui.id, data: ui});
        this.dom.append(ui.dom);
    }
    unCombi (ui: ComponentMultipleUI) {
        this.findUI(ui).forEach((item) => {
            this.children.remove(item.name);
        });
        if (this.dom.parentElement) {
            this.dom.removeChild(ui.dom)
        }
    }
    findUI (ui: ComponentMultipleUI) {
        return this.children.get(ui.id)
    }
}

export class SelfProp {
    constructor () {

    }
}