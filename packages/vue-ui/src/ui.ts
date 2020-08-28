import {UIList, SingleUI, SingleUIPayload, optionsPayload} from '@mikefeng110808/instance'
import Vue, { CreateElement, RenderContext, VueConstructor } from 'vue'
import { LifeCycle } from './lifeCycle'


export interface VueRenderPayload {
  createElement:CreateElement
  vueRoot:Vue
  context:RenderContext<Record<never, any>>
  [x:string]: any
}

export class VueUI extends SingleUI{
  renderComponent?: VueConstructor<Vue>
  lifeCycle?: LifeCycle
  constructor(params: SingleUIPayload) {
    super(params)
    this.renderComponent = undefined
    this.lifeCycle = new LifeCycle(params.props ? params.props.lifeCycle : {})
  }
  render(render: VueRenderPayload, props?:any) {
    if (!this.getCanRender()) {
      return render.createElement()
    } else {
      return this.renderInstance(render, props)
    }
  }
  renderInstance(render: VueRenderPayload, props?:any) {
    return render.createElement(
      this.renderComponent || 'div',   // 标签名称
      {
        ...render.context,
        props: {target: this,...props}
      },
      [render.vueRoot.$slots.default]
    )
  }
}


export class VueUIList extends UIList {
  constructor (list: any[] = [], options?: optionsPayload) {
    super(list, options)
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
