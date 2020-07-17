import Vue from 'vue'
import ElementUI from 'element-ui'
import { VueUI, VueRenderPayload } from '@mikefeng110808/vue-ui'
import { SingleUIPayload } from '@mikefeng110808/instance'
import EventListVueUIComponent from './components/EventListVueUI.vue'
import ContainerVueUIComponent from './components/ContainerVueUI.vue'
import CardContainerVueUIComponent from './components/CardContainerVueUI.vue'
import DialogContainerVueUIComponent from './components/DialogContainerVueUI.vue'
import ButtonVueUIComponent from './components/ButtonVueUI.vue'

import { apiList, eventList } from '@mikefeng110808/ui-design'
import { UI } from '@mikefeng110808/ui-logic'



Vue.use(ElementUI)
export class EventListVueUI extends VueUI{
  apiList
  eventList
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
  ui: UI
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
