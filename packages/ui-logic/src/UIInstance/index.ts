import { gennerateUUID } from "@mikefeng110808/utils";
import { UI } from "../UI";

export interface UIInstancePayload {
  moduleId: string
}

export class UIInstance implements UIInstancePayload {
  children: UIInstance[];
  target: UI;
  moduleId: string;
  canDrag:boolean
  constructor() {
    this.moduleId = gennerateUUID()
    this.children = []
    this.target = new UI()
    this.canDrag = true
  }
  canDragFilter () {
    return this.canDrag && (this.target.style.position && (this.target.style.position == 'absolute' || this.target.style.position == 'fixed'))
  }
  setTarget(target: UI) {
    this.target = target
  }
  combi(target: UI) {
    var module = new UIInstance()
    module.setTarget(target);
    this.children.push(module);
    return module
  }
  unCombi(moduleId: string) {
    var module = this.findContainUI(this, moduleId)
    console.log(module)
    if (module) {
      module.children = module.children.filter(t => t.moduleId != moduleId)
    }
  }
  findContainUI(tree:UIInstance, moduleId:string): UIInstance | null {
    if (tree.children.find(item => item.moduleId == moduleId)){
      return tree
    } else if (tree.children.length > 0) {
      var target :UIInstance | null = null
      tree.children.forEach(item => {
        target = this.findContainUI(item, moduleId) || target
      })
      return target
    } else {
      return null
    }
  }
  move(x: number, y: number) {
    this.target.style.move(x, y)
  }
  getValue ():any {
    return {
      moduleId: this.moduleId,
      canDrag: this.canDrag,
      target: this.target.getValue(),
      children: this.children.map(item => item.getValue())
    }
  }
  getChildren (): UIInstance[] {
    return this.children
  }
}
