import {
  SingleUIPayload,
  templatePayload
} from "@mikefeng110808/logic";

import {
  VueUIList,
  VueUI,
  InputVueUI,
  ArrayVueUI,
  ObjectVueUI,
  MulSelectVueUI,
  SelectVueUI,
  NumberVueUI,
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
    this.uiList.addTemplate({
      key: 'object',
      value: ObjectVueUI,
    })
    this.uiList.addTemplate({
      key: 'mulSelect',
      value: MulSelectVueUI,
    })
    this.uiList.addTemplate({
      key: 'select',
      value: SelectVueUI,
    })
    this.uiList.addTemplate({
      key: 'number',
      value: NumberVueUI,
    })
  }
  add({
    key,
    value
  }: templatePayload) {
    if (!this.uiList.getTemplate().find(item => item.key == key)) {
      this.uiList.addTemplate({
        key: key,
        value: value,
      })
    }
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
  getValue () {
    return this.uiList.getValue()
  }
}
