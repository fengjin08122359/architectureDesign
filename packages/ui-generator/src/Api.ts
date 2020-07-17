import {
  DataList
} from "@mikefeng110808/basic";
import { gennerateUUID } from "@mikefeng110808/ui-logic";

export let GetConfig = {

} 

export let PostConfig = {
  
} 

export let PostformConfig = {
  
} 

export let PostjsonConfig = {
  
} 

export let PostfileConfig = {
  
} 

export let AutoConfig = {
  
} 

export interface ConfigPayload {
  name: string;
  config:any;
}

export const ConfigList = [{
  name: 'get',
  config: GetConfig
},{
  name: 'post',
  config: PostConfig
},{
  name: 'postform',
  config: PostformConfig
},{
  name: 'postjson',
  config: PostjsonConfig
},{
  name: 'postfile',
  config: PostfileConfig
},{
  name: 'auto',
  config: AutoConfig
},]

export class Api {
  id: string
  opt: ApiPayload
  constructor(opt: ApiPayload) {
    this.id = gennerateUUID()
    this.opt = opt
    this.opt.id = opt.id || this.id
  }
  fetch() {
  }
  setValue (val: any) {
    this.opt.id = val.id || this.opt.id
    this.opt.config = val.config || 'get'
    this.opt.name = val.name || ''
    this.opt.getParam = val.getParam || {}
    this.opt.postParam = val.postParam || {}
    
    // this.uiList.setValue(val)
  }
}

export interface ApiPayload {
  config: string;
  name: string;
  getParam: [];
  postParam: [];
  id?: string
}

export class ApiList {
  list: DataList;
  constructor() {
    this.list = new DataList();
  }
  add(apiData: ApiPayload) {
    var api = new Api(apiData)
    this.list.add({
      name: api.id ||'',
      data: api
    });
    return api
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
  save (val:any) {
  }
}
