import Vue from 'vue'
import ElementUI from 'element-ui'
import { VueUI, VueRenderPayload, SimulateVueUI} from '@mikefeng110808/vue-ui'
import { SingleUIPayload } from '@mikefeng110808/instance'
import EventListVueUIComponent from './components/EventListVueUI.vue'
import ContainerVueUIComponent from './components/ContainerVueUI.vue'
import CardContainerVueUIComponent from './components/CardContainerVueUI.vue'
import DialogContainerVueUIComponent from './components/DialogContainerVueUI.vue'
import ButtonVueUIComponent from './components/ButtonVueUI.vue'
import InputVueUIComponent from './components/InputVueUI.vue'
import NumberVueUIComponent from './components/NumberVueUI.vue'
import TimePickerVueUIComponent from './components/TimePickerVueUI.vue'
import TimeGroupVueUIComponent from './components/TimeGroupVueUI.vue'
import SelectVueUIComponent from './components/SelectVueUI.vue'
import CheckBoxVueUIComponent from './components/CheckBoxVueUI.vue'
import CheckBoxGroupVueUIComponent from './components/CheckBoxGroupVueUI.vue'
import RadioVueUIComponent from './components/RadioVueUI.vue'
import MulSelectVueUIComponent from './components/MulSelectVueUI.vue'
import IframeVueUIComponent from './components/IframeVueUI.vue'
import TableVueUIComponent from './components/TableVueUI.vue'
import TableDataConfigVueUIComponent from './components/TableDataConfigVueUI.vue'


import { apiList, eventList } from '@mikefeng110808/ui-design'
import { ModuleUI } from '@mikefeng110808/ui-module'
import { ApiList, EventList } from '@mikefeng110808/ui-generator'


Vue.use(ElementUI)
export class EventListVueUI extends VueUI{
  apiList: ApiList
  eventList: EventList
  constructor(params:SingleUIPayload) {
    super(params);
    this.apiList = apiList
    this.eventList = eventList
  }
  renderInstance(render: VueRenderPayload) {
    return render.createElement(EventListVueUIComponent, {
      props: {target: this}
    },[render.vueRoot.$slots.default])
  }
}


export class BasicVueUI extends VueUI{
  ui: ModuleUI
  isCompiler: boolean
  constructor(params:SingleUIPayload) {
    super(params);
    this.ui = this.props.ui
    this.isCompiler = this.props.isCompiler
  }
  renderInstance(render: VueRenderPayload) {
    return render.createElement('div', {
      props: {target: this}
    },[render.vueRoot.$slots.default])
  }
}


export class ContainerVueUI extends BasicVueUI{
  constructor(params:SingleUIPayload) {
    super(params);
  }
  renderInstance(render: VueRenderPayload) {
    return render.createElement(ContainerVueUIComponent, {
      props: {target: this}
    },[render.vueRoot.$slots.default])
  }
}


export class CardContainerVueUI extends BasicVueUI{
  tab: any
  constructor(params:SingleUIPayload) {
    super(params);
  }
  renderInstance(render: VueRenderPayload) {
    return render.createElement(CardContainerVueUIComponent, {
      props: {target: this}
    },[render.vueRoot.$slots.default])
  }
}

export class DialogContainerVueUI extends BasicVueUI{
  constructor(params:SingleUIPayload) {
    super(params);
  }
  renderInstance(render: VueRenderPayload) {
    return render.createElement(DialogContainerVueUIComponent, {
      props: {target: this}
    },[render.vueRoot.$slots.default])
  }
}


export class ButtonVueUI extends BasicVueUI{
  constructor(params:SingleUIPayload) {
    super(params);
  }
  renderInstance(render: VueRenderPayload) {
    return render.createElement(ButtonVueUIComponent, {
      props: {target: this}
    },[render.vueRoot.$slots.default])
  }
}

export class InputVueUI extends BasicVueUI{
  constructor(params:SingleUIPayload) {
    super(params);
  }
  renderInstance(render: VueRenderPayload) {
    return render.createElement(InputVueUIComponent, {
      props: {target: this}
    },[render.vueRoot.$slots.default])
  }
}

export class NumberVueUI extends BasicVueUI{
  constructor(params:SingleUIPayload) {
    super(params);
  }
  renderInstance(render: VueRenderPayload) {
    return render.createElement(NumberVueUIComponent, {
      props: {target: this}
    },[render.vueRoot.$slots.default])
  }
}
export class TimePickerVueUI extends BasicVueUI{
  constructor(params:SingleUIPayload) {
    super(params);
  }
  renderInstance(render: VueRenderPayload) {
    return render.createElement(TimePickerVueUIComponent, {
      props: {target: this}
    },[render.vueRoot.$slots.default])
  }
}

export class TimeGroupVueUI extends BasicVueUI{
  year: any[]
  report: any[]
  constructor(params:SingleUIPayload) {
    super(params);
    this.year = new Array(21).fill(2020).map((item, index) => item - index).map(item => {
      return {
        key: item,
        value: item
      }
    })
    this.report = [{
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
    }]
  }
  renderInstance(render: VueRenderPayload) {
    return render.createElement(TimeGroupVueUIComponent, {
      props: {target: this}
    },[render.vueRoot.$slots.default])
  }
}

export class SelectVueUI extends BasicVueUI{
  constructor(params:SingleUIPayload) {
    super(params);
  }
  renderInstance(render: VueRenderPayload) {
    return render.createElement(SelectVueUIComponent, {
      props: {target: this}
    },[render.vueRoot.$slots.default])
  }
}

export class CheckBoxVueUI extends BasicVueUI{
  constructor(params:SingleUIPayload) {
    super(params);
  }
  renderInstance(render: VueRenderPayload) {
    return render.createElement(CheckBoxVueUIComponent, {
      props: {target: this}
    },[render.vueRoot.$slots.default])
  }
}

export class CheckBoxGroupVueUI extends BasicVueUI{
  constructor(params:SingleUIPayload) {
    super(params);
  }
  renderInstance(render: VueRenderPayload) {
    return render.createElement(CheckBoxGroupVueUIComponent, {
      props: {target: this}
    },[render.vueRoot.$slots.default])
  }
}

export class RadioVueUI extends BasicVueUI{
  constructor(params:SingleUIPayload) {
    super(params);
  }
  renderInstance(render: VueRenderPayload) {
    return render.createElement(RadioVueUIComponent, {
      props: {target: this}
    },[render.vueRoot.$slots.default])
  }
}

export class MulSelectVueUI extends BasicVueUI{
  constructor(params:SingleUIPayload) {
    super(params);
  }
  renderInstance(render: VueRenderPayload) {
    return render.createElement(MulSelectVueUIComponent, {
      props: {target: this}
    },[render.vueRoot.$slots.default])
  }
}

export class IframeVueUI extends BasicVueUI{
  constructor(params:SingleUIPayload) {
    super(params);
  }
  renderInstance(render: VueRenderPayload) {
    return render.createElement(IframeVueUIComponent, {
      props: {target: this}
    },[render.vueRoot.$slots.default])
  }
}

interface TableColPayload {
  prop?:string
  label?:string
  sortable?:boolean
  className?: string
  width?:string
  minWidth?:string
  fixed?:boolean
  convert?:any
  type?: string
  showOverflowTooltip?: boolean
  children?:TableCol[]
}


export class TableCol implements TableColPayload {
  prop: string
  label: string
  sortable: boolean
  className: string
  width: string
  minWidth: string
  fixed: boolean
  convert: any
  type: string
  showOverflowTooltip:boolean
  children: TableCol[]
  constructor (params: TableColPayload) {
      this.prop = params.prop || ''
      this.type = params.type || ''
      this.label = params.label || ''
      this.sortable = params.sortable || false
      this.className = params.className || ''
      this.width = params.width || ''
      this.minWidth = params.minWidth || '100px'
      this.fixed = params.fixed || false
      this.convert = params.convert || false
      this.showOverflowTooltip = params.showOverflowTooltip || false
      this.children = (params.children || []).map((item:TableColPayload) => new TableCol(item))
  }
  render(h:any, data:any, row:any, key:any = this.prop) {
    if (this.convert) {
      return h('span', {

      },[this.convert(h, data, this, row)])
    } else {
      return h('span', {

      },[row[key]])
    }
  }
}


export class TableVueUI extends BasicVueUI{
  list: any[]
  loading: boolean
  direction: 'vertical' | 'horizontal'
  cols: TableCol[]
  mergetList: any[]
  mergeCols: any[]
  showHeader: boolean
  mergeShowHeader: boolean
  constructor(params:SingleUIPayload) {
    super(params);
    this.list = []
    this.loading = false
    this.cols = []
    this.direction = 'vertical'
    this.showHeader = true;
    this.mergetList = []
    this.mergeCols = []
    this.mergeShowHeader = false
    this.setData()
  }
  setData () {
    this.cols.push(new TableCol({label:'test',prop: 'test'}))
    this.cols.push(new TableCol({label:'aaaaa',prop: 'test2'}))
    this.list = [{
      test:"a",
      test2: 'v'
    },{
      test:"b",
      test2: 'q'
    },]
    this.merge()
  }
  merge () {
    if (this.direction === 'vertical') {
      this.mergeShowHeader = this.showHeader
      this.mergetList = this.list.concat()
      this.mergeCols = this.cols.concat()
    } else {
      this.mergeShowHeader = false
      this.mergetList = this.cols.map(item => {
        return {
          prop: item.prop
        }
      })
      this.mergeCols = [new TableCol({prop: 'homeTitle'})].concat(this.list.map((item, index) => {
        return new TableCol({prop: index.toString()});
      }))
    }
  }
  getTableRow (scope: any, item:any) {
    if (this.direction === 'vertical') {
      return scope.row
    } else {
      if (item.prop == "homeTitle") {
        var target = this.cols.find(t =>t.prop == scope.row.prop)
        if (target) {
          return {
            [scope.row.prop]:target.label
          }
        } else {
          return {
            [scope.row.prop]:''
          }
        }
      }
      return this.list[item.prop]
    }
  }
  getTableKey  (scope: any, item:any) {
    if (this.direction === 'vertical') {
      return item.prop
    } else {
      return scope.row.prop
    }
  }
  renderInstance(render: VueRenderPayload) {
    return render.createElement(TableVueUIComponent, {
      props: {target: this}
    },[render.vueRoot.$slots.default])
  }
}


export class TableDataConfigVueUI extends VueUI{
  cols:TableCol[]
  data: any[]
  simulate: SimulateVueUI
  constructor(params:SingleUIPayload) {
    super(params);
    this.cols = []
    this.data = []
    this.simulate = new SimulateVueUI({})
    this.check()
  }
  addCol () {
    this.cols.push(new TableCol({}))
  }
  delCol (index:number) {
    this.cols.splice(index, 1)
  }
  check () {
    if (this.cols.length == 0) {
      this.addCol()
    }
  }
  getValue () {
    return this.value
  }
  setValue (value: any) {
    var oldValue = this.value;
    this.value = value;
    this.check()
    if (oldValue != this.value) {
      this.onChange({
        val: this.value,
        oldVal: oldValue,
      });
    }
  }
  renderInstance(render: VueRenderPayload) {
    return render.createElement(TableDataConfigVueUIComponent, {
      props: {target: this}
    },[render.vueRoot.$slots.default, this.simulate.render(render)])
  }
}
