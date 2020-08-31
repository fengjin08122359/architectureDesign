import {
  ContainerVueUI,
  EventListVueUI,
  CardContainerVueUI,
  DialogContainerVueUI,
  ButtonVueUI,
  InputVueUI as InputCompVueUI,
  NumberVueUI as NumberCompVueUI,
  TimePickerVueUI,
  TimeGroupVueUI,
  SelectVueUI as SelectCompVueUI, CheckBoxVueUI, CheckBoxGroupVueUI, RadioVueUI,
  MulSelectVueUI as MulSelectCompVueUI,
  IframeVueUI, TableVueUI,
  TableDataConfigVueUI
} from "@mikefeng110808/ui-components";

import { ModuleUI } from '@mikefeng110808/ui-module'
import {
  apiParams,
  eventParams,
  inParams,
  outParams
} from "./constants/generate";
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
  VueRenderPayload, BooleanVueUI
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
    this.uiList.addTemplate({
      key: 'boolean',
      value: BooleanVueUI,
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
  getValue() {
    return this.uiList.getValue()
  }
}


export class ModuleGenrate extends GeneratePiece {
  isCompiler: boolean
  constructor() {
    super()
    this.isCompiler = false
    this.uiList.clearTemplate()
    this.add({
      key: '1',
      value: ContainerVueUI
    })
    this.add({
      key: '2',
      value: CardContainerVueUI
    })
    this.add({
      key: '3',
      value: DialogContainerVueUI
    })
    this.add({
      key: '4',
      value: ButtonVueUI
    })
    this.add({
      key: '5',
      value: InputCompVueUI
    })

    this.add({
      key: '6',
      value: NumberCompVueUI
    })
    this.add({
      key: '7',
      value: TimePickerVueUI
    })
    this.add({
      key: '8',
      value: TimeGroupVueUI
    })
    this.add({
      key: '9',
      value: SelectCompVueUI
    })
    this.add({
      key: '10',
      value: CheckBoxVueUI
    })
    this.add({
      key: '11',
      value: CheckBoxGroupVueUI
    })
    this.add({
      key: '12',
      value: RadioVueUI
    })
    this.add({
      key: '13',
      value: MulSelectCompVueUI
    })

    this.add({
      key: '17',
      value: TableVueUI
    })
    this.add({
      key: '18',
      value: IframeVueUI
    })
  }
  setTarget(ui: ModuleUI, ) {
    this.uiList.setList([{
      key: ui.id,
      props: {
        ui,
        isCompiler: this.isCompiler
      },
      type: ui.typeId
    }])
  }
}

export class ApiGenerate extends GeneratePiece {
  constructor() {
    super()
    this.generate(apiParams)
  }
}

export class EventGenerate extends GeneratePiece {
  constructor() {
    super()
    this.generate(eventParams)
  }
}



export class InEventGenerate extends GeneratePiece {
  constructor() {
    super()
    this.add({
      key: 'eventList',
      value: EventListVueUI
    })
    this.generate(inParams)
  }
}


export class OutEventGenerate extends GeneratePiece {
  constructor() {
    super()
    this.add({
      key: 'eventList',
      value: EventListVueUI
    })
    this.generate(outParams)
  }
}

export class PropGeneratePiece extends GeneratePiece {
  constructor() {
    super()
    this.add({
      key:'tableDataConfig',
      value:TableDataConfigVueUI
    })
    this.generate(outParams)
  }
}
