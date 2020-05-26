import {Log} from '@mikefeng110808/instance'
import { errorCode } from '.';

export class VueLog extends Log {
  constructor () {
    super()
    var that = this
    console.log = (function (log) {
      return  (...rest: any) => {
        that.log(rest)
        log(rest)
      }
    })(console.log);
    console.warn = (function (log) {
      return  (...rest: any) => {
        that.warn(rest)
        log(rest)
      }
    })(console.warn);
    console.info = (function (log) {
      return  (...rest: any) => {
        that.info(rest)
        log(rest)
      }
    })(console.info);
    console.error = (function (log) {
      return  (...rest: any) => {
        that.error(rest)
        errorCode.collect(rest)
        log(rest)
      }
    })(console.error);
    console.debug = (function (log) {
      return  (...rest: any) => {
        that.debug(rest)
        log(rest)
      }
    })(console.debug);
  }
  
}
