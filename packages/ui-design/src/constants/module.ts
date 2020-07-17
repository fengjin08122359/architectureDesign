import { SelfProp, ContainerUI, ComponentSingleUI, ComponentMultipleUI } from "@mikefeng110808/ui-logic";
import { Props } from ".";
import { CardContainerUI } from "./ui";

class ContainerSelfProp extends SelfProp{
    constructor () {
        super()
    }
    getStyle (): any {
        return {
            width:"100%",
            height: "200px",
            background: '',
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
            background: '',
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
            background: '',
            display: 'inline-block'
        }
    }
}


export let container: Props[] = [{
    id: '1',
    name: "基本容器",
    selfProp: ContainerSelfProp,
    UI: ContainerUI,
    params: [{
        type:'input',
        key: 'input',
        props: {label: 'input'}
    },{
        type:'array',
        key: 'array',
        props: {label: 'array'}
    },{
        type:'object',
        key: 'object',
        props: {label: 'object'}
    },{
        type:'number',
        key: 'number',
        props: {label: 'number'}
    },{
        type:'select',
        key: 'select',
        props: {label: 'select'}
    },{
        type:'mulSelect',
        key: 'mulSelect',
        props: {label: 'mulSelect'}
    },]
},{
    name: "选项卡",
    id: '2',
    selfProp: ContainerSelfProp,
    UI: CardContainerUI,
    params:[{
        type:'object',
        key: 'tab',
        props: {label: '选项卡'}
    }]
},{
    name: "弹窗",
    id: '4',
    selfProp: ContainerSelfProp,
    UI: ContainerUI
}]
export let basic: Props[] = [{
    name: "按钮",
    id: '5',
    selfProp: BasicSelfProp,
    UI: ComponentSingleUI
},{
    name: "输入框",
    id: '6',
    selfProp: BasicSelfProp,
    UI: ComponentSingleUI
},{
    name: "日期选择",
    id: '7',
    selfProp: BasicSelfProp,
    UI: ComponentSingleUI
},{
    name: "时间选择",
    id: '8',
    selfProp: BasicSelfProp,
    UI: ComponentSingleUI
},{
    name: "下拉选择",
    id: '9',
    selfProp: BasicSelfProp,
    UI: ComponentSingleUI
},{
    name: "多选框",
    id: '10',
    selfProp: BasicSelfProp,
    UI: ComponentSingleUI
},{
    name: "多选框组",
    id: '11',
    selfProp: BasicSelfProp,
    UI: ComponentSingleUI
},{
    name: "单选框组",
    id: '12',
    selfProp: BasicSelfProp,
    UI: ComponentSingleUI
},{
    name: "下拉框",
    id: '13',
    selfProp: BasicSelfProp,
    UI: ComponentSingleUI
},{
    name: "时间选择框",
    id: '14',
    selfProp: BasicSelfProp,
    UI: ComponentSingleUI
}]
export let merge: Props[] = [{
    name: "柱状折现图",
    id: '15',
    selfProp: MergeSelfProp,
    UI: ComponentMultipleUI
},{
    name: "饼图",
    id: '16',
    selfProp: MergeSelfProp,
    UI: ComponentMultipleUI
},{
    name: "表格",
    id: '17',
    selfProp: MergeSelfProp,
    UI: ComponentMultipleUI
},{
    name: "嵌入式页面",
    id: '18',
    selfProp: MergeSelfProp,
    UI: ComponentMultipleUI
},{
    name: "缩放工具页面",
    id: '19',
    selfProp: MergeSelfProp,
    UI: ComponentMultipleUI
}]
