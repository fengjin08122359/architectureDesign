import { SelfProp, ContainerUI, ComponentSingleUI, ComponentMultipleUI } from "@mikefeng110808/ui-logic";

class ContainerSelfProp extends SelfProp{
    constructor () {
        super()
    }
    getStyle (): any {
        return {
            width:"100%",
            height: "200px",
            background: 'blue',
            display: 'block',
            position: 'relative',
        }
    }
}

class BasicSelfProp extends SelfProp{
    constructor () {
        super()
    }
    getStyle (): any {
        return {
            width:"20%",
            height: "100px",
            background: 'red',
            display: 'inline-block'
        }
    }
}

class MergeSelfProp extends SelfProp{
    constructor () {
        super()
    }
    getStyle (): any {
        return {
            width:"100px",
            height: "100px",
            background: 'green',
            display: 'inline-block'
        }
    }
}


export let container = [{
    name: "外层",
    selfProp: ContainerSelfProp,
    UI: ContainerUI,
    params: [{
        type:'input',
        key: 'label',
        props: {label: 'input'}
    },{
        type:'array',
        key: 'label',
        props: {label: 'array'}
    },{
        type:'object',
        key: 'label',
        props: {label: 'object'}
    },{
        type:'number',
        key: 'label',
        props: {label: 'number'}
    },{
        type:'select',
        key: 'label',
        props: {label: 'select'}
    },{
        type:'mulSelect',
        key: 'label',
        props: {label: 'mulSelect'}
    },]
},{
    name: "基本容器",
    selfProp: ContainerSelfProp,
    UI: ContainerUI
},{
    name: "线性容器",
    selfProp: ContainerSelfProp,
    UI: ContainerUI
},{
    name: "弹窗",
    selfProp: ContainerSelfProp,
    UI: ContainerUI
}]
export let basic = [{
    name: "按钮",
    selfProp: BasicSelfProp,
    UI: ComponentSingleUI
},{
    name: "输入框",
    selfProp: BasicSelfProp,
    UI: ComponentSingleUI
},{
    name: "日期选择",
    selfProp: BasicSelfProp,
    UI: ComponentSingleUI
},{
    name: "时间选择",
    selfProp: BasicSelfProp,
    UI: ComponentSingleUI
},{
    name: "下拉选择",
    selfProp: BasicSelfProp,
    UI: ComponentSingleUI
},{
    name: "多选框",
    selfProp: BasicSelfProp,
    UI: ComponentSingleUI
},{
    name: "多选框组",
    selfProp: BasicSelfProp,
    UI: ComponentSingleUI
},{
    name: "单选框组",
    selfProp: BasicSelfProp,
    UI: ComponentSingleUI
},{
    name: "下拉框",
    selfProp: BasicSelfProp,
    UI: ComponentSingleUI
},{
    name: "时间选择框",
    selfProp: BasicSelfProp,
    UI: ComponentSingleUI
}]
export let merge = [{
    name: "柱状折现图",
    selfProp: MergeSelfProp,
    UI: ComponentMultipleUI
},{
    name: "饼图",
    selfProp: MergeSelfProp,
    UI: ComponentMultipleUI
},{
    name: "表格",
    selfProp: MergeSelfProp,
    UI: ComponentMultipleUI
},{
    name: "嵌入式页面",
    selfProp: MergeSelfProp,
    UI: ComponentMultipleUI
},{
    name: "缩放工具页面",
    selfProp: MergeSelfProp,
    UI: ComponentMultipleUI
}]
