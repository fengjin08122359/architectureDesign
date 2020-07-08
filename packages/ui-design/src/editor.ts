import { ModuleInstance, ModuleTargetPayload } from "@mikefeng110808/ui-generator/";

export let currentEl:ModuleTargetPayload | null = null;

export let setCurrentModule = (target: ModuleTargetPayload) => {
    currentEl = target
}

export let clearCurrentEl = () =>{
    currentEl = null
}

class EditorInstance {
    active?:ModuleInstance
    isRelative: boolean
    constructor () {
        this.active = undefined
        this.isRelative = true
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