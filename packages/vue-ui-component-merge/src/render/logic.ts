import { SingleUIPayload } from "@mikefeng110808/logic";
import { VueUI } from "@mikefeng110808/vue-ui";
import { VueRenderPayload } from "@mikefeng110808/vue-instance";
import DoubleTitleComp from '../template/doubleTitle.vue'

export class MergeVueUI extends VueUI{
  [x: string]: any;
  renderTemplate: string
  constructor (params: SingleUIPayload) {
    super(params);
    this.renderTemplate = params.props ? params.props.renderTemplate : '<div></div>'
  }
  staticRender(renderTarget: VueRenderPayload) {
    return this.render(renderTarget, {
      needRender: false
    })
  }
  normalRender(renderTarget: VueRenderPayload) {
    return this.render(renderTarget, {
      needRender: true
    })
  }
}


export class DoubleTitle extends MergeVueUI{
  constructor (params: SingleUIPayload) {
    super(params);
    this.renderComponent = DoubleTitleComp
    this.props.title1 = params.props ? params.props.title1 : ''
    this.props.title2 = params.props ? params.props.title2 : ''
  }
}
