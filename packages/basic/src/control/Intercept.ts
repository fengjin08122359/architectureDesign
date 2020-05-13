import {HanderList, HandlerRes} from '../data/stored/HanderList'
export class Intercept extends HanderList {
  constructor() {
    super()
  }
  getIntercept (input:any) {
    return this.get(input).filter((target: HandlerRes) => target.res)
    .map((target: HandlerRes) => target.name)
  }
}
