import {UIList, SingleUI, SingleUIPayload, DataList, optionsPayload} from '@mikefeng110808/instance'
import Vue, { CreateElement, RenderContext } from 'vue'

export interface VueRenderPayload {
  createElement:CreateElement
  vueRoot:Vue
  context:RenderContext<Record<never, any>>
}

export class VueUI extends SingleUI{
  constructor(params: SingleUIPayload) {
    super(params)
  }
  render(render: VueRenderPayload) {
    if (!this.getCanRender()) {
      return render.createElement()
    } else {
      return this.renderInstance(render)
    }
  }
  renderInstance(render: VueRenderPayload) {
    return render.createElement(
      'div',   // 标签名称
      {
        ...render.context,
        attrs: this
      },
      [this.props.label, render.vueRoot.$slots.default]
    )
  }
}


export class VueUIList extends UIList {
  componentHasRendered: DataList
  constructor (list: any[], options?: optionsPayload) {
    super(list, options)
    this.componentHasRendered = new DataList()
  }
  convertSinlgeUI(item: SingleUIPayload) {
    return new VueUI(item)
  }
  handleComponentKey (key:string) {
    return new Promise(resolve => {
      this.componentHasRendered.add({
        name: 'key',
        data: key
      })
      resolve() 
    })
  }
  getRenderList (render: VueRenderPayload) {
    return this.getAllItems().map(item => item.render(render))
  }
}