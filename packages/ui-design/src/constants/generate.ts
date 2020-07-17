import { eventOptions } from "@mikefeng110808/ui-logic"

export let apiParams = [{
  type:'id',
  key: 'id',
  props: {label: 'id',show:false}
},{
  type:'input',
  key: 'name',
  props: {label: '名称'}
},{
  type:'select',
  key: 'config',
  props: {label: '名称',optionsArray:[{
    key: 'get',
    value: 'get'
  },{
    key: 'post',
    value: 'post'
  },{
    key: 'postform',
    value: 'postform'
  },{
    key: 'postjson',
    value: 'postjson'
  },{
    key: 'postfile',
    value: 'postfile'
  },{
    key: 'auto',
    value: 'auto'
  },],
  configVisible: false}
},{
  type:'object',
  key: 'getParam',
  props: {label: 'get参数'}
},{
  type:'object',
  key: 'postParam',
  props: {label: 'post参数'}
}]


export let eventParams = [{
  type:'id',
  key: 'id',
  props: {label: 'id', show:false}
},{
  type:'input',
  key: 'name',
  props: {label: '名称'}
},{
  type:'select',
  key: 'type',
  props: {label: '事件类型',optionsArray:[{
    key: 'EventDispatcher',
    value: 'EventDispatcher'
  },{
    key: 'ObserverSubject',
    value: 'ObserverSubject'
  }],
  configVisible: false}
}]



export let outParams = [{
  type: 'eventList',
  key: 'tid',
  props: {
    label: 'id',
  }
}, {
  type: 'select',
  key: 'key',
  props: {
    label: '事件类型',
    optionsArray: eventOptions.map(item => {
      return {
        key: item,
        value: item
      }
    }),
    configVisible: false
  }
}]

export let inParams = [{
  type: 'eventList',
  key: 'tid',
  props: {
    label: 'id',
  }
}]