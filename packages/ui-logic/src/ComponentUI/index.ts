import { DataList } from "@mikefeng110808/basic"
import { Style } from "../Style";
import { Position } from "../Position";
import { EventBind } from "../EventBind";
import { gennerateUUID } from "..";

export class ComponentSingleUI {
    dom: HTMLElement
    style: Style
    eventBind: EventBind
    position: Position
    constructor (dom: HTMLElement) {
        this.dom = dom
        this.style = new Style(dom)
        this.eventBind  = new EventBind(dom)
        this.position = new Position(dom)
    }
    
}

export class ComponentMultipleUI extends ComponentSingleUI{
    children: DataList
    selfProp: SelfProp
    id: string;
    constructor (dom:HTMLElement) {
        super(dom)
        this.id = gennerateUUID()
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