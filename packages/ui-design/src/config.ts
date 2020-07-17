import { ApiList, EventList } from "@mikefeng110808/ui-generator/";

export let apiList = new ApiList();

export let eventList = new EventList();


export let  addApi = () => {
  return apiList.add({
    config: "get",
    name: '',
    getParam: [],
    postParam: []
  })
   
}

export let removeApi = (id:string) => {
  apiList.remove(id)
}

export let  addEvent = () => {
  return eventList.add({
    name: '',
    type: 'EventDispatcher'
  })
}

export let removeEvent = (id:string) => {
  eventList.remove(id)
}