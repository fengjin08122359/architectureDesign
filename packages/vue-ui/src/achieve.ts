import { VueUI, VueRenderPayload } from './ui'
import { SingleUIPayload } from '@mikefeng110808/instance'
import InputVueUIComp from './componnents/InputVueUI.vue'

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