import { ContainerUI, SelfProp } from "@mikefeng110808/ui-logic";


export class ContainerSelfProp extends SelfProp{
  constructor () {
      super()
  }
  getStyle (): any {
      return {
          width:"100%",
          height: "200px",
          background: '',
          display: 'block',
          position: 'relative',
      }
  }
}


export class BasicSelfProp extends SelfProp{
  constructor () {
      super()
  }
  getStyle (): any {
      return {
          width:"100%",
          height: "70px",
          background: '',
          display: 'inline-block'
      }
  }
}

export class MergeSelfProp extends SelfProp{
  constructor () {
      super()
  }
  getStyle (): any {
      return {
          width:"100px",
          height: "100px",
          background: '',
          display: 'inline-block'
      }
  }
}


export class CardContainerSelfProp extends ContainerSelfProp {
  constructor () {
    super()
    this.opt = {
      tab: ['选项1']
    }
  }
}


export class CardContainerUI extends ContainerUI {
  activeCard: string
  constructor () {
    super()
    this.activeCard = ''
  }
  filterChildren (instance:any):boolean {
    return this.moduleIdList.find(item => item.moduleId == instance.moduleId && this.activeCard == item.tab)
  }
  addModuleId(moduleId:string) {
    this.moduleIdList.push({
      moduleId,
      tab: this.activeCard
    })
  }
  removeModuleId(moduleId:string) {
    this.moduleIdList = this.moduleIdList.filter(item => item.moduleId!=moduleId)
  }
} 


export class ButtonSelfProp extends BasicSelfProp {
  constructor () {
    super()
    this.opt = {
      label: '提取数据'
    }
  }
}