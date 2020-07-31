import { ContainerUI, ComponentSingleUI, ComponentMultipleUI } from "@mikefeng110808/ui-logic";
import { Props } from ".";
import { BasicSelfProp, CardContainerSelfProp, ContainerSelfProp, MergeSelfProp, CardContainerUI, ButtonSelfProp, InputSelfProp, NumberSelfProp, TimePickerSelfProp, TimeGroupSelfProp, SelectSelfProp, CheckboxSelfProp, CheckBoxGroupSelfProp, RadioSelfProp, MulSelectSelfProp, IframeSelfProp } from "./ui";


export let container: Props[] = [{
    id: '1',
    name: "基本容器",
    selfProp: ContainerSelfProp,
    UI: ContainerUI,
    params: [{
        type:'input',
        key: 'input',
        props: {label: 'input'},
        value: ''
    },{
        type:'array',
        key: 'array',
        props: {label: 'array'},
        value: []
    },{
        type:'object',
        key: 'object',
        props: {label: 'object'},
        value: {}
    },{
        type:'number',
        key: 'number',
        props: {label: 'number'},
        value: 0
    },{
        type:'select',
        key: 'select',
        props: {label: 'select'},
        value: ''
    },{
        type:'mulSelect',
        key: 'mulSelect',
        props: {label: 'mulSelect'},
        value: []
    },]
},{
    name: "选项卡",
    id: '2',
    selfProp: CardContainerSelfProp,
    UI: CardContainerUI,
    params:[{
        type:'array',
        key: 'tab',
        props: {label: '选项卡'},
    }]
},{
    name: "弹窗",
    id: '3',
    selfProp: ContainerSelfProp,
    UI: ContainerUI
}]
export let basic: Props[] = [{
    name: "按钮",
    id: '4',
    selfProp: ButtonSelfProp,
    UI: ComponentSingleUI,
    params:[{
        type:'input',
        key: 'label',
        props: {label: '描述'},
    }]
},{
    name: "输入框",
    id: '5',
    selfProp: InputSelfProp,
    UI: ComponentSingleUI,
    params:[{
        type:'input',
        key: 'value',
        props: {label: '值'},
    },{
        type:'input',
        key: 'prepend',
        props: {label: '前缀'},
    }]
},{
    name: "数字输入框",
    id: '6',
    selfProp: NumberSelfProp,
    UI: ComponentSingleUI,
    params:[{
        type:'input',
        key: 'value',
        props: {label: '值'},
    },{
        type:'input',
        key: 'label',
        props: {label: '标签'},
    }]
},{
    name: "日期选择",
    id: '7',
    selfProp: TimePickerSelfProp,
    UI: ComponentSingleUI,
    params:[{
        type:'input',
        key: 'value',
        props: {label: '值'},
    },{
        type:'input',
        key: 'placeholder',
        props: {label: 'placeholder'},
    },{
        type:'select',
        key: 'type',
        props: {label: '日期类型',optionsArray:[{
            key: 'year',
            value: 'year'
          },{
            key: 'month',
            value: 'month'
          },{
            key: 'date',
            value: 'date'
          },{
            key: 'week',
            value: 'week'
          },{
            key: 'datetime',
            value: 'datetime'
          },{
            key: 'datetimerange',
            value: 'datetimerange'
          },{
            key: 'daterange',
            value: 'daterange'
          },],
          configVisible: false
        }
    }]
},{
    name: "时间选择",
    id: '8',
    selfProp: TimeGroupSelfProp,
    UI: ComponentSingleUI,
    params:[{
        type:'select',
        key: 'year',
        props: {label: '日期类型',optionsArray:new Array(21).fill(2020).map((item, index) => item - index).map(item => {
            return {
              key: item,
              value: item
            }
          }),
          configVisible: false
        }
    },{
        type:'select',
        key: 'report',
        props: {label: '日期类型',optionsArray:[{
            key: 1,
            value: '年报'
          },{
            
            key: 2,
            value: '三季'
          },{
            
            key: 3,
            value: '中期'
          },{
            key: 4,
            value: '一季'
          }],
          configVisible: false
        }
    }]
},{
    name: "下拉选择",
    id: '9',
    selfProp: SelectSelfProp,
    UI: ComponentSingleUI,
    params:[{
        type:'select',
        key: 'value',
        props: {label: '日期类型',optionsArray:[{
            key: 1,
            value: '选项一'
          },{
            key: 2,
            value: '选项二'
          },{
            key: 3,
            value: '选项三'
          }],
          configVisible: true
        }
    }]
},{
    name: "多选框",
    id: '10',
    selfProp: CheckboxSelfProp,
    UI: ComponentSingleUI,
    params:[{
        type:'boolean',
        key: 'value',
    },{
        type:'input',
        key: 'label',
    }]
},{
    name: "多选框组",
    id: '11',
    selfProp: CheckBoxGroupSelfProp,
    UI: ComponentSingleUI,
    params:[{
        type:'mulSelect',
        key: 'value',
        props: {optionsArray:[{
            key: 1,
            value: '选项一'
          },{
            key: 2,
            value: '选项二'
          },{
            key: 3,
            value: '选项三'
          }],
          configVisible: true
        },
    }]
},{
    name: "单选框组",
    id: '12',
    selfProp: RadioSelfProp,
    UI: ComponentSingleUI,
    params:[{
        type:'select',
        key: 'value',
        props: {label: '日期类型',optionsArray:[{
            key: 1,
            value: '选项一'
          },{
            key: 2,
            value: '选项二'
          },{
            key: 3,
            value: '选项三'
          }],
          configVisible: true
        }
    }]
},{
    name: "下拉框",
    id: '13',
    selfProp: MulSelectSelfProp,
    UI: ComponentSingleUI,
    params:[{
        type:'mulSelect',
        key: 'value',
        props: {optionsArray:[{
            key: 1,
            value: '选项一'
          },{
            key: 2,
            value: '选项二'
          },{
            key: 3,
            value: '选项三'
          }],
          configVisible: true
        },
    }]
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
    UI: ComponentMultipleUI,
    params: [{
      type:'tableDataConfig',
      key: 'config',
    }]
},{
    name: "嵌入式页面",
    id: '18',
    selfProp: IframeSelfProp,
    UI: ComponentMultipleUI,
    params:[{
        type:'input',
        key: 'src',
    }]
}]
