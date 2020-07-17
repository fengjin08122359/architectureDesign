import {
  ComponentMultipleUI,
  ComponentSingleUI,
  gennerateUUID,
  ContainerUI,
  convertPx,
  setPx
} from "@mikefeng110808/ui-logic";

export interface ModuleTargetPayload extends ContainerUI, ComponentMultipleUI, ComponentSingleUI {

}

export interface ModulePayload {
  moduleId: string
}

export class ModuleInstance implements ModulePayload {
  children: ModuleInstance[];
  target: ModuleTargetPayload;
  moduleId: string;
  canDrag:boolean
  constructor() {
    this.moduleId = gennerateUUID()
    this.children = []
    this.target = new ContainerUI()
    this.canDrag = true
  }
  canDragFilter () {
    return this.canDrag && (this.target.style.position == 'absolute' || this.target.style.position == 'fixed')
  }
  setTarget(target: ModuleTargetPayload) {
    this.target = target
  }
  combi(target: ModuleTargetPayload) {
    var module = new ModuleInstance()
    module.setTarget(target);
    this.children.push(module);
    this.target.addModuleId(module.moduleId)
    return module
  }
  unCombi(moduleId: string) {
    var module = this.findContainUI(this, moduleId)
    if (module) {
      module.children = module.children.filter(t => t.moduleId != moduleId)
      module.target.removeModuleId(moduleId)
    }
  }
  findContainUI(tree:ModuleInstance, moduleId:string): ModuleInstance | null {
    if (tree.children.find(item => item.moduleId == moduleId)){
      return tree
    } else if (tree.children.length > 0) {
      var target :ModuleInstance | null = null
      tree.children.forEach(item => {
        target = this.findContainUI(item, moduleId) || target
      })
      return target
    } else {
      return null
    }
     
  }
  move(x: number, y: number) {
    var left = convertPx(this.target.style.left) + x
    var top = convertPx(this.target.style.top) + y
    this.target.style.setKeyValue('left', setPx(left))
    this.target.style.setKeyValue('top', setPx(top))
  }
  resetRelativeStyle () {
    var style = this.target.selfProp.getRelativeStyle()
    for (let [key,value] of Object.entries(style)) {
        this.target.style[key] = value
    }
  }
  getValue ():any {
    return {
      moduleId: this.moduleId,
      canDrag: this.canDrag,
      target: {
        typeId: this.target.typeId,
        id:this.target.id,
        insertable:this.target.insertable,
        editable:this.target.editable,
        moduleIdList: this.target.moduleIdList,
        eventBind: {
          inValue: this.target.eventBind.getInList().map(item => item.opt),
          outValue: this.target.eventBind.getOutList().map(item => item.opt)
        },
        selfProp: {
          value: this.target.selfProp.opt
        },
        style:{
          value: this.target.style.getValue()
        }
      },
      children: this.children.map(item => item.getValue())
    }
  }
  getChildren (): ModuleInstance[] {
    return this.children.filter(item => this.target.filterChildren(item))
  }
}