import { ContainerUI,ComponentMultipleUI, ComponentSingleUI } from "@mikefeng110808/ui-logic"
import { basic, container, merge } from "./constants/module"
import { Props } from "./constants"


export let basicModules: ComponentSingleUI[] = []
export let continerModules: ContainerUI[] = []
export let mergeModules: ComponentMultipleUI[] = []

var addBasic = (props:Props) => {
    let target = new ContainerUI()
    target.name = props.name
    target.selfProp = props.selfProp
    basicModules.push(target)
}
var addContiner = (props:Props) => {
    let target = new ComponentSingleUI()
    target.name = props.name
    target.selfProp = props.selfProp
    continerModules.push(target)
}
var addMerge = (props:Props) => {
    let target = new ComponentMultipleUI()
    target.name = props.name
    target.selfProp = props.selfProp
    mergeModules.push(target)
}

basic.forEach((item:Props) => {
    addBasic(item)
})


container.forEach((item:Props) => {
    addContiner(item)
})



merge.forEach((item:Props) => {
    addMerge(item)
})





