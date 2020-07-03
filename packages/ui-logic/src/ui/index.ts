import { EventBind } from "../EventBind";
import { Position } from "../Position";
import { Style } from "../Style";
import { gennerateUUID } from "..";

export interface UIPayload {
    dom: HTMLElement;
    eventBind: EventBind;
    position: Position;
    style: Style;
    id: string;
    selfProp: SelfProp
    name?: string
}

export class UI {
    dom: HTMLElement;
    eventBind: EventBind;
    position: Position;
    style: Style
    id: string;
    selfProp: SelfProp;
    name?: string;
    constructor (dom: HTMLElement) {
        this.id = gennerateUUID()
        this.dom  = dom
        this.eventBind  = new EventBind(this.dom)
        this.position = new Position(this.dom)
        this.style = new Style(this.dom)
        this.selfProp = new SelfProp()
    }
    setDom (dom: HTMLElement) {
        this.dom  = dom
        this.eventBind  = new EventBind(this.dom)
        this.position = new Position(this.dom)
        this.style = new Style(this.dom)
    }
}


export class SelfProp {
    constructor () {

    }
}