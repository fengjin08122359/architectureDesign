import {
  SingleUIPayload,
  templatePayload
} from "@mikefeng110808/logic";

import {
  VueUIList,
  VueUI,
  InputVueUI,
  ArrayVueUI,
  VueRenderPayload
} from '@mikefeng110808/vue-ui'

export class GeneratePiece {
  uiList: VueUIList;
  constructor() {
    this.uiList = new VueUIList()
    this.uiList.addTemplate({
      key: '',
      value: VueUI,
    })
    this.uiList.addTemplate({
      key: 'input',
      value: InputVueUI,
    })
    this.uiList.addTemplate({
      key: 'array',
      value: ArrayVueUI,
    })
  }
  add({
    key,
    value
  }: templatePayload) {
    this.uiList.addTemplate({
      key: key,
      value: value,
    })
  }
  remove(name: string) {
    this.uiList.removeTemplate(name)
  }
  generate(list: SingleUIPayload[]): VueUI[] {
    this.uiList.setList(list)
    return this.uiList.list
  }
  render(render: VueRenderPayload) {
    return this.uiList.getRenderList(render)
  }
}
