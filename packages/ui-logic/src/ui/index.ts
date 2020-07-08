import {
  EventBind
} from "../EventBind";
import {
  Style
} from "../Style";
import {
  gennerateUUID
} from "..";
import { SingleUI, SingleUIPayload } from "@mikefeng110808/logic";
import { GeneratePiece } from "../ParamPiece/index";
import { VueRenderPayload } from "@mikefeng110808/vue-ui";

export interface UIPayload {
  eventBind: EventBind;
  style: Style;
  id: string;
  selfProp: SelfProp
  name ? : string
  dom ? : HTMLElement;
}

export class UI {
  eventBind: EventBind;
  style: Style
  id: string;
  selfProp: SelfProp;
  name ? : string;
  dom ? : HTMLElement;
  constructor() {
    this.id = gennerateUUID()
    this.eventBind = new EventBind()
    this.style = new Style()
    this.selfProp = new SelfProp()
  }
  setDom(dom: HTMLElement) {
    this.dom = dom
  }
  setId(id ? : string) {
    this.id = id || gennerateUUID()
  }
  setSelfProp(selfProp: SelfProp) {
    this.selfProp = selfProp
  }
}


export class SelfProp {
  params: SingleUI[];
  generatePiece: GeneratePiece
  constructor() {
    this.params = []
    this.generatePiece = new GeneratePiece()
  }
  setParam(data:SingleUIPayload[] = []) {
    this.params = this.generatePiece.generate(data)
  }
  renderParam (render: VueRenderPayload) {
    return this.generatePiece.render(render)
  }
  getStyle(): any {
    return {
      width: 100,
      height: 100
    }
  }
  getRelativeStyle(): any {
    return {
      position: 'relative',
      top: 'auto',
      bottom: 'auto',
      right: 'auto',
      left: 'auto',
    }
  }
}
