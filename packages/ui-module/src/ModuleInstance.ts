import { UIInstance } from "@mikefeng110808/ui-logic";
import { gennerateUUID } from "@mikefeng110808/utils";
import { ModuleUI } from ".";


export class ModuleInstance extends UIInstance {
  children: ModuleInstance[];
  target: ModuleUI;
  moduleId: string;
  canDrag:boolean
  constructor() {
    super()
    this.moduleId = gennerateUUID()
    this.children = []
    this.target = new ModuleUI()
    this.canDrag = true
  }
  setTarget(target: ModuleUI) {
    this.target = target
  }
  combi(target: ModuleUI) {
    var module = new ModuleInstance()
    module.setTarget(target);
    this.children.push(module);
    this.target.addModuleId(module.moduleId)
    return module
  }
  unCombi(moduleId: string) {
    var module = this.findContainUI(this, moduleId)
    console.log(module)
    if (module) {
      module.target.removeModuleId(moduleId)
      module.children = module.children.filter(t => t.moduleId != moduleId)
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
  resetRelativeStyle () {
    var style = this.target.selfProp.getRelativeStyle()
    for (let [key,value] of Object.entries(style)) {
        this.target.style[key] = value
    }
  }
  getChildren (): ModuleInstance[] {
    return this.children.filter(item => this.target.filterChildren(item))
  }
  setValue (data: any) {

  }
}
