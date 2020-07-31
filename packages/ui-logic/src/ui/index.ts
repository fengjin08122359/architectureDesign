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
  typeId?: string
  moduleIdList: any[]
  constructor() {
    this.id = gennerateUUID()
    this.eventBind = new EventBind()
    this.style = new Style()
    this.selfProp = new SelfProp()
    this.moduleIdList = []
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
  filterChildren (instance:any):boolean {
    return this.moduleIdList.find(item => item == instance.moduleId)
  }
  addModuleId(moduleId:string) {
    this.moduleIdList.push(moduleId)
  }
  removeModuleId(moduleId:string) {
    this.moduleIdList = this.moduleIdList.filter(item => item!=moduleId)
  }
}


export class SelfProp {
  opt: any
  params: SingleUIPayload[];
  constructor() {
    this.opt = {}
    this.params = []
  }
  setParam(data:SingleUIPayload[] = []) {
    this.params = data
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
  getValue ():any {
    return this.opt
  }
  setValue (value: any) {
    this.opt = value || {}
  }
}
