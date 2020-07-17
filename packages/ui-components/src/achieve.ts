import Vue from 'vue'
import ElementUI from 'element-ui'
import { VueUI, VueRenderPayload } from '@mikefeng110808/vue-ui'
import { SingleUIPayload } from '@mikefeng110808/instance'
import EventListVueUIComponent from './componnents/EventListVueUI.vue'
import ContainerVueUIComponent from './componnents/ContainerVueUI.vue'
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
    })
  }
}


export class ContainerVueUI extends VueUI{
  ui: UI
  constructor(params:SingleUIPayload) {
    super(params);
    this.ui = this.props.ui
  }
  renderInstance(render: VueRenderPayload) {
    return render.createElement(ContainerVueUIComponent, {
      props: {target: this}
    })
  }
}