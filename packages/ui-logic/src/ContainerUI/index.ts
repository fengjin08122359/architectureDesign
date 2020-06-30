import { EventBind } from "../EventBind";
import { Position } from "../Position";
import { Style } from "../Style";


export class ContainerUI {
    dom: HTMLElement;
    eventBind: EventBind;
    position: Position;
    style: Style
    constructor (dom?: HTMLElement) {
        this.dom  = dom || document.createElement('div')
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
