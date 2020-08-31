import {
  DataList
} from "@mikefeng110808/basic";
import {
  gennerateUUID
} from "@mikefeng110808/utils";



type eventType = 'EventDispatcher' | 'ObserverSubject'

export interface EventPayload {
  id ? : string;
  name: string;
  type: eventType
}

export class Event {
  id: string;
  opt: EventPayload
  constructor(opt: EventPayload) {
    this.id = opt.id || gennerateUUID()
    this.opt = opt
  }
  fetch() {}
  setValue (val: any) {
    this.opt.id = val.id || this.opt.id
    this.opt.type = val.type || 'EventDispatcher'
    this.opt.name = val.name || ''
  }
}


export class EventList {
  list: DataList;
  constructor() {
    this.list = new DataList();
  }
  add(apiData: EventPayload) {
    var event = new Event(apiData)
    this.list.add({
      name: event.id,
      data: event
    });
    return event
  }
  remove (id: string){
    this.list.remove(id)
  }
  getList () {
    return this.list.get('').map(item => item.data)
  }
  clear () {
    this.list.clear()
  }
  save () {
  }
}
