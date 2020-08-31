import { ModuleInstance } from "@mikefeng110808/ui-module";

export let currentEl:ModuleInstance | null = null;

export let setCurrentModule = (target: ModuleInstance) => {
    currentEl = target
}

export let clearCurrentEl = () =>{
    currentEl = null
}

class EditorInstance {
    active?:ModuleInstance
    isRelative: boolean
    borderColor: string
    constructor () {
        this.active = undefined
        this.isRelative = true
        this.borderColor = '#bdbdbd'
    }
    setActive(instance: ModuleInstance){
        this.active = instance
    }
    deleteActive () {
        if (this.active) {
            containerModules.unCombi(this.active.moduleId)
        }
    }
}

export let editorInstance = new EditorInstance();


export let setEditorInstance = (instance: ModuleInstance) => {
    editorInstance.setActive(instance)
}

export let containerModules: ModuleInstance = new ModuleInstance()

containerModules.canDrag = false
containerModules.target.style.width = "100%"
containerModules.target.style.height = "100%"
containerModules.target.style.overflow = 'auto'
