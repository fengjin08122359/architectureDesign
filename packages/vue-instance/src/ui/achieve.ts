
import { VueUI, VueRenderPayload } from '.'
import { SingleUIPayload } from '@mikefeng110808/instance'
import InputVueUIComp from './components/InputVueUI.vue'

export class InputVueUI extends VueUI{
  constructor(params:SingleUIPayload) {
    super(params);
  }
  renderInstance(render: VueRenderPayload) {
    return render.createElement(InputVueUIComp, {
      props: this
    })
  }
}