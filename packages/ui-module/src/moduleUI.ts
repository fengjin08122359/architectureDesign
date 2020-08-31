import { UI, UIPayload, SelfProp } from "@mikefeng110808/ui-logic";
import {
  gennerateUUID,
} from "@mikefeng110808/utils";

export interface ModuleUIPayload extends UIPayload {
  id: string;
  selfProp: ModuleSelfProp
  name ? : string
  dom ? : HTMLElement;
  editable: boolean;
  insertable: boolean
}




export class ModuleUI extends UI {
  id: string;
  name ? : string;
  dom ? : HTMLElement;
  typeId?: string
  moduleIdList: any[]
  editable: boolean;
  insertable: boolean
  selfProp: ModuleSelfProp
  constructor() {
    super()
    this.id = gennerateUUID()
    this.moduleIdList = []
    this.editable = true
    this.insertable = true
    this.selfProp = new ModuleSelfProp()
  }
  getValue (): any {
    return {
      typeId: this.typeId,
      id:this.id,
      insertable:this.insertable,
      editable:this.editable,
      moduleIdList: this.moduleIdList,
      eventBind: {
        value:  this.eventBind.getValue()
      },
      selfProp: {
        value: this.selfProp.getValue()
      },
      style:{
        value: this.style.getValue()
      }
    }
  }
  setDom(dom: HTMLElement) {
    this.dom = dom
  }
  setId(id ? : string) {
    this.id = id || gennerateUUID()
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

export class ModuleSelfProp extends SelfProp {
  constructor() {
    super()
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
