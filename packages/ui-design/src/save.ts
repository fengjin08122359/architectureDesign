import {containerModules} from './editor'
import {addApi, addEvent, apiList, eventList} from './config'
import { ModuleInstance } from '@mikefeng110808/ui-generator'
import { ContainerUI, EventBind, SelfProp, Style } from '@mikefeng110808/ui-logic'
import { storage } from './storage'
import { basic, container, merge } from "./constants/module"

export let saveFromEdit = () => {
  storage.set('saveedit', containerModules.getValue())
}

export let restoreFromEdit = () => {
  var res = storage.get('saveedit')
  restoreInstance(containerModules, res)
}


export let restoreInstance = (instance: ModuleInstance, res:any) => {
  instance.moduleId = res.moduleId
  instance.canDrag = res.canDrag
  
  let tc = basic.concat(container, merge).find(item => item.id == res.target.typeId)
  
  let TargetConstructor = tc ? tc : {
    name: "外层",
    selfProp: SelfProp,
    UI: ContainerUI,
    params: []
  }
  instance.target = new TargetConstructor.UI()
  instance.target.editable = res.target.editable;
  instance.target.id = res.target.id;
  instance.target.typeId = res.target.typeId;
  instance.target.insertable = res.target.insertable;
  instance.target.moduleIdList = res.target.moduleIdList;
  (res.target.eventBind.inValue || []).forEach((item:any) => {
    var event =instance.target.eventBind.addIn()
    event.setValue(item)
  });
  (res.target.eventBind.outValue || []).forEach((item:any) => {
    var event =instance.target.eventBind.addOut()
    event.setValue(item)
  });
  instance.target.eventBind.save()
  instance.target.selfProp = new TargetConstructor.selfProp()
  instance.target.selfProp.setParam(TargetConstructor.params || [])
  instance.target.selfProp.setValue(res.target.selfProp.value)

  instance.target.style.setValue(res.target.style.value)
  
  // container.target = new ContainerUI()
  instance.children = res.children.map((item:any) => {
    var module = restoreInstance(new ModuleInstance(), item)
    return module
  })
  return instance
}


export let saveFromConfig = () => {
  var apiValue = apiList.getList().map(item => item.opt)
  var eventValue = eventList.getList().map(item => item.opt)
  storage.set('saveConfig', {
    apiValue, eventValue
  })
}
export let restoreFromConfig = () => {
  var res:any = storage.get('saveConfig');
  apiList.clear()
  eventList.clear()
  res = res ? res : {apiValue: [],eventValue: []};
  (res.apiValue || []).forEach((item:any) => {
    var api = addApi()
    api.setValue(item)
  });
  (res.eventValue || []).forEach((item:any) => {
    var event = addEvent()
    event.setValue(item)
  });
}
export {

}