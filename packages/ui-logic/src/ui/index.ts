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
}

export class UI {
    dom: HTMLElement;
    eventBind: EventBind;
    position: Position;
    style: Style
    id: string;
    constructor (dom: HTMLElement) {
        this.id = gennerateUUID()
        this.dom  = dom
        this.eventBind  = new EventBind(this.dom)
        this.position = new Position(this.dom)
        this.style = new Style(this.dom)
    }
    setDom (dom: HTMLElement) {
        this.dom  = dom
        this.eventBind  = new EventBind(this.dom)
        this.position = new Position(this.dom)
        this.style = new Style(this.dom)
    }
}
