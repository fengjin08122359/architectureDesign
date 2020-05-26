import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import { httpIntercept } from '../basic'

export interface  HttpInstanceParam {
  baseURL: string;
}

export interface AxiosOpt {
  method?: string;
  url?: any;
  responseType?: any;
  data?: {};
  formData?: any
  timeout?: number
  [x: string]: any;
}


export class HttpInstance {
  baseURL: string
  constructor (param: HttpInstanceParam) {
    this.baseURL = param.baseURL || ''
    this.init()
  }
  private init () {
    axios.interceptors.request.use(config => {
      return this.convertRequest(config)
    },
    error => {
      return Promise.reject(error)
    })
    axios.interceptors.response.use(response => {
      return this.convertResponse(response)
    },
    error => {
      return Promise.reject(error)
    })
  }
  protected convertRequest (config: AxiosRequestConfig): AxiosRequestConfig {
    return config
  }
  protected convertResponse (config: AxiosResponse<any>): AxiosResponse<any> {
    return config
  }
  create(opts: AxiosOpt) {

    const publicParams = {
      ts: Date.now()
    }
    const method = (opts.method || 'get').toUpperCase()
    const httpDefaultOpts:any = {
      method,
      baseURL: this.baseURL,
      url: opts.url,
      responseType: opts.responseType || '',
      timeout: 20000
    }
    if (opts['meta']) {
      httpDefaultOpts.headers = opts['meta']
    }
  
    const dataRequest = ['PUT', 'POST', 'PATCH']
    if (dataRequest.includes(method)) {
      httpDefaultOpts.data = opts.data || {}
    } else {
      httpDefaultOpts.params = {
        ...publicParams,
        ...(opts.data || {})
      }
    }
  
    // formData转换
    if (opts.formData) {
      httpDefaultOpts.transformRequest = [(data: { [s: string]: string | Blob } | ArrayLike<string | Blob>) => {
        const formData = new FormData()
        if (data) {
          Object.entries(data).forEach(item => {
            formData.append(item[0], item[1])
          })
        }
        return formData
      }]
    }
  
    const promise = new Promise((resolve, reject) => {
      axios(httpDefaultOpts).then(response => {
        this.handleSuccess(response, resolve, opts)
      }).catch(error => {
        this.handleError(error, reject, opts)
      })
    })
    return promise
  }
  handleSuccess (response: AxiosResponse<any>, resolve: { (value?: unknown): void; (arg0: any): void }, opts: AxiosOpt) {
    httpIntercept.getIntercept({response,opts}, 'http-success')
    resolve(response)
  }
  handleError (error: any, reject: { (reason?: any): void; (arg0: any): void }, opts: AxiosOpt) {
    httpIntercept.getIntercept({error,opts}, 'http-error')
    reject(error)
  }
}

