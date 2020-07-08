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
  setTarget(target: ModuleTargetPayload) {
    this.target = target
  }
  combi(target: ModuleTargetPayload) {
    var module = new ModuleInstance()
    module.setTarget(target);
    this.children.push(module);
    return module
  }
  unCombi(moduleId: string) {
    var target = this.findContainUI(this, moduleId)
    if (target) {
      target.children = target.children.filter(t => t.moduleId != moduleId)
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
}