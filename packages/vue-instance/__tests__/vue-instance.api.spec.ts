import {keyFrame, HttpInstance, HttpInstanceParam, AxiosOpt} from '../src/'
import { AxiosRequestConfig, AxiosResponse } from 'axios'

describe("vue-instance: api", () => {
  test("api keyFrame add and remove", () => {
    var execTime = 0
    keyFrame.addEventListener('spec-keyFrame', (message) => {
      expect(message).toEqual('spec-keyFrame-msg')
      execTime++   
    })
    keyFrame.dispatchEvent('spec-keyFrame', 'spec-keyFrame-msg')
    expect(execTime).toEqual(1)
    keyFrame.removeEventListener('spec-keyFrame')
    keyFrame.dispatchEvent('spec-keyFrame', 'spec-keyFrame-msg2')
    expect(execTime).toEqual(1)
  })
  test("HttpInstance fetch", () => {
    class Http extends HttpInstance {
      constructor(opt: HttpInstanceParam) {
        super(opt)
      }
      convertRequest(config: AxiosRequestConfig) {
        return config
      }
      convertResponse(config: AxiosResponse<any> ){
        return config
      }
      handleError (error: any, reject: { (reason?: any): void; (arg0: any): void }, opt: AxiosOpt) {
        reject('error')
      }
      handleSuccess (reponse: AxiosResponse<any>, resolve: { (value?: unknown): void; (arg0: any): void }, opt: AxiosOpt) {
        resolve(reponse)
      }
    } 
    var http = new Http({baseURL: 'http:127.0.0.1'})
    http.create({url: '/api',method:'GET'}).then((res) => {
    }).catch(res => {
      expect(res).toEqual('error')
    })
  })
  // test.only("WsInstance fetch", async () => {
  //   var wsInstance = new WebSocketInstance()
  //   wsIntercept.addIntercept({
  //     name: 'ws-error',
  //     fun: (data) => {
  //       expect(data.data.type).toEqual('error')
  //       return false
  //     }
  //   })
  //   wsIntercept.addIntercept({
  //     name: 'ws-close',
  //     fun: (data) => {
  //       expect(data.data.code).toEqual(1006)
  //       expect(data.data.reason).toEqual('connection failed')
  //       return false
  //     }
  //   })
  //   wsInstance.start('ws://127.0.0.1')
  //   // wsInstance.end()
  // })
})