import { basic, container, merge } from "./constants/module"
import { Props } from "./constants"


export let basicModules: Props[] = []
export let continerModules: Props[] = []
export let mergeModules: Props[] = []

var addBasic = (props:Props) => {
    basicModules.push(props)
}
var addContiner = (props:Props) => {
    continerModules.push(props)
}
var addMerge = (props:Props) => {

    mergeModules.push(props)
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

export let generateModule = (props:Props) => {
    let target = new props.UI()
    target.name = props.name
    target.setSelfProp(new props.selfProp())
    var style = target.selfProp.getStyle()
    for (let [key,value] of Object.entries(style)) {
        target.style[key] = value
    }
    target.selfProp.setParam(props.params)
    return target
}



