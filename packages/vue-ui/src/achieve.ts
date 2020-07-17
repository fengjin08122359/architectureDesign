import Vue from 'vue'
import ElementUI from 'element-ui'
import { VueUI, VueRenderPayload } from './ui'
import { SingleUIPayload } from '@mikefeng110808/instance'
import InputVueUIComp from './componnents/InputVueUI.vue'
import ArrayVueUIComp from './componnents/ArrayVueUI.vue'
import ObjectVueUIComp from './componnents/ObjectVueUI.vue'
import MulSelectVueUIComp from './componnents/MulSelectVueUI.vue'
import SelectVueUIComp from './componnents/SelectVueUI.vue'
import NumberVueUIComp from './componnents/NumberVueUI.vue'
Vue.use(ElementUI)
export class InputVueUI extends VueUI{
  constructor(params:SingleUIPayload) {
    super(params);
  }
  renderInstance(render: VueRenderPayload) {
    return render.createElement(InputVueUIComp, {
      props: {target: this}
    })
  }
}

export class ArrayVueUI extends VueUI{
  constructor(params:SingleUIPayload) {
    super(params);
    if (!Array.isArray(this.value)) {
      this.value = []
    }
    if (this.value.length == 0) {
      this.addCol()
    }
  }
  addCol () {
    this.value.push({
      value: ''
    })
  }
  delCol (index:number) {
    this.value.splice(index, 1)
  }
  getValue (): any[] {
    return this.value.map((item:any) => item.value)
  }
  setValue (val: any[]) {
    this.value = val.map((item:any) => {
      return {value: item}
    })
  }
  renderInstance(render: VueRenderPayload) {
    return render.createElement(ArrayVueUIComp, {
      props: {target: this}
    })
  }
}

interface ObjectArrayPayload {
  key: any
  value: any
}

export class ObjectVueUI extends VueUI{
  constructor(params:SingleUIPayload) {
    super(params);
    this.props.objectArray = this.props.objectArray || []
    this.setValue(this.value || {});
    if (this.props.objectArray.length == 0) {
      this.addCol()
    }
  }
  addCol () {
    this.props.objectArray.push({
      key:'',
      value: ''
    })
  }
  delCol (index:number) {
    this.props.objectArray.splice(index, 1)
  }
  getValue (): any[] {
    return this.props.objectArray.reduce((total: any,current: ObjectArrayPayload) => {
      total[current.key] = current.value
      return total
    }, {})
  }
  setValue (val: Object) {
    this.value = val
    this.props.objectArray = []
    for(let[key,value] of Object.entries(this.value)) {
      this.props.objectArray.push({
        key,value
      })
    }
    if (this.props.objectArray.length == 0) {
      this.addCol()
    }
  }
  renderInstance(render: VueRenderPayload) {
    return render.createElement(ObjectVueUIComp, {
      props: {target: this}
    })
  }
}



export class MulSelectVueUI extends VueUI{
  constructor(params:SingleUIPayload) {
    super(params);
    this.props.configVisible = this.props.configVisible || []
    this.props.optionsArray = this.props.optionsArray || []
    this.setValue(this.value || '');
    if (this.props.optionsArray.length == 0) {
      this.addCol()
    }
  }
  addCol () {
    this.props.optionsArray.push({
      key:'',
      value: ''
    })
  }
  delCol (index:number) {
    this.props.optionsArray.splice(index, 1)
  }
  renderInstance(render: VueRenderPayload) {
    return render.createElement(MulSelectVueUIComp, {
      props: {target: this}
    })
  }
}
export class SelectVueUI extends VueUI{
  constructor(params:SingleUIPayload) {
    super(params);
    this.props.configVisible = this.props.configVisible || []
    this.props.optionsArray = this.props.optionsArray || []
    this.setValue(this.value || []);
    if (this.props.optionsArray.length == 0) {
      this.addCol()
    }
  }
  addCol () {
    this.props.optionsArray.push({
      key:'',
      value: ''
    })
  }
  delCol (index:number) {
    this.props.optionsArray.splice(index, 1)
  }
  renderInstance(render: VueRenderPayload) {
    return render.createElement(SelectVueUIComp, {
      props: {target: this}
    })
  }
}
export class NumberVueUI extends VueUI{
  constructor(params:SingleUIPayload) {
    super(params);
  }
  renderInstance(render: VueRenderPayload) {
    return render.createElement(NumberVueUIComp, {
      props: {target: this}
    })
  }
}
