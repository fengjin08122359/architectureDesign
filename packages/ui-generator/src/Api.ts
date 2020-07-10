import { DataList } from "@mikefeng110808/basic";
import {
  HttpInstance,
  HttpInstanceParam,
  AxiosOpt,
  AxiosRequestConfig,
  AxiosResponse,
} from "@mikefeng110808/utils-api";

class Http extends HttpInstance {
  requestFilter: any;
  responseFilter: any;
  constructor(opt: HttpInstanceParam,requestFilter:any, responseFilter:any) {
    super(opt);
    this.requestFilter  = requestFilter
    this.responseFilter = responseFilter
  }
  convertRequest(config: AxiosRequestConfig) {
    return this.requestFilter(config);
  }
  convertResponse(config: AxiosResponse<any>) {
    return this.responseFilter(config);
  }
}
class Api {
  opt: AxiosOpt;
  description: string;
  headers: {};
  postParams: [];
  getParams: [];
  method: string;
  baseURL: string;
  url: string;
  responseType?: any;
  data?: {};
  formData?: any;
  timeout?: number;
  http: Http;
  constructor() {
    this.headers = {};
    this.postParams = [];
    this.getParams = [];
    this.method = "GET";
    this.description = "";
    this.url = "";
    this.baseURL = "";
    this.opt = {
      method: "GET",
      url: '/api'
    };
    this.http  = new Http({ baseURL: this.baseURL }, (config: any) => {
      return config
    }, (config: any) => {
      return config
    });
  }
  setParam () {
    
  }
  fetch(opt: AxiosOpt) {
    return this.http 
      .create({
        ...this.opt,
        opt
      })
      .then((res) => {return res})
      .catch((res) => {return res});
  }
}

export class ApiList {
  list: DataList;
  constructor() {
    this.list = new DataList();
  }
  add() {
    this.list.add({
      name: "",
      data: "",
    });
  }
}
