import { ModuleUI } from "../moduleUI";

export class ComponentSingleUI extends ModuleUI {
    constructor () {
        super()
        this.insertable = false
    }
}

export class ComponentMultipleUI extends ComponentSingleUI {
  constructor () {
      super()
      this.insertable = false
  }
}
