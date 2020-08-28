import Vue from 'vue'
import ElementUI from 'element-ui'
import { VueUI } from './ui'
import { SingleUIPayload } from '@mikefeng110808/instance'
import InputVueUIComp from './components/InputVueUI.vue'
import ArrayVueUIComp from './components/ArrayVueUI.vue'
import ObjectVueUIComp from './components/ObjectVueUI.vue'
import MulSelectVueUIComp from './components/MulSelectVueUI.vue'
import SelectVueUIComp from './components/SelectVueUI.vue'
import NumberVueUIComp from './components/NumberVueUI.vue'
import BooleanVueUIComp from './components/BooleanVueUI.vue'
import SimulateVueUIComp from './components/SimulateVueUI.vue'

Vue.use(ElementUI)
export class InputVueUI extends VueUI{
  constructor(params:SingleUIPayload) {
    super(params);
    this.renderComponent = InputVueUIComp
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
    this.renderComponent = ArrayVueUIComp
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
    this.value = (val || []).map((item:any) => {
      return {value: item}
    })
    if (!Array.isArray(this.value)) {
      this.value = []
    }
    if (this.value.length == 0) {
      this.addCol()
    }
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
    this.renderComponent = ObjectVueUIComp
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
    this.value = val || {}
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
    this.renderComponent = MulSelectVueUIComp
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
    this.renderComponent = SelectVueUIComp
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
}
export class NumberVueUI extends VueUI{
  constructor(params:SingleUIPayload) {
    super(params);
    this.renderComponent = NumberVueUIComp
  }
}

export class BooleanVueUI extends VueUI{
  constructor(params:SingleUIPayload) {
    super(params);
    this.value = !!this.value
    this.renderComponent = BooleanVueUIComp
  }
}

export class SimulateVueUI extends VueUI{
  simulateValue: any
  error: string
  constructor(params:SingleUIPayload) {
    super(params);
    this.simulateValue = ''
    this.error = ''
    this.simulate()
    this.renderComponent = SimulateVueUIComp
  }
  getValue( ){
    return this.value;
  }
  setValue (value:any) {
    var oldValue = this.value;
    this.value = value;
    if (oldValue != this.value) {
      this.onChange({
        val: this.value,
        oldVal: oldValue,
      });
    }
    this.simulate()
  }
  simulate () {
    this.simulateValue = this.value
    this.error = ''
    try {
      this.simulateValue = JSON.parse(this.value)
    } catch (error) {
      this.error = error
    }
  }
  simulateValueToString ():string {
    return typeof this.simulateValue == 'object' ? JSON.stringify(this.simulateValue) : this.simulateValue
  }
}
