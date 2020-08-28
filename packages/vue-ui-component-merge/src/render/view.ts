import { VueRenderPayload } from "@mikefeng110808/vue-ui";
import { SingleUIPayload } from "@mikefeng110808/logic";
import {DoubleTitle} from './logic'
import {DoubleTitleExample} from './db'
import {
  MergeVueUI
} from './logic'

export class CompMergeInstance {
  view: String
  logic:typeof MergeVueUI
  instance?: MergeVueUI
  db: SingleUIPayload
  renderResult: any
  constructor () {
    this.view = ''
    this.logic = DoubleTitle
    this.db = DoubleTitleExample
    this.getInstance()
  }
  getInstance () {
    this.instance = new this.logic(this.db)
  }
  renderInstance(render: VueRenderPayload) {
    this.renderResult =  this.instance ? this.instance.normalRender(render) : render.createElement(
      'div',   // 标签名称
      {
        ...render.context,
        props: {
          target: this
        },
      },
      [render.vueRoot.$slots.default],
    )
    return this.renderResult
  }
  renderStaticInstance(render: VueRenderPayload) {
    console.log('renderStaticInstance')
    this.renderResult =  this.instance ? this.instance.staticRender(render) : render.createElement(
      'div',   // 标签名称
      {
        ...render.context,
        props: {
          target: this
        }
      },
      [render.vueRoot.$slots.default],
    )
    return this.renderResult
  }
}
