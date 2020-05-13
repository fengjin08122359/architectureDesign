export interface Handler {
  name: string
  fun: (input:any) => any
}

export interface HandlerRes {
  name: string
  res: any
}

export class HanderList {
  handlers: Array<Handler>
  constructor() {
    this.handlers = []
  }
  add (handler: Handler){
    this.handlers.push(handler);
  }
  remove (name:string) {
    this.handlers = this.handlers.filter((handler) => handler.name !== name);
  }
  get (input:any) {
    return this.handlers.map((handler) => {
      return {
        name: handler.name,
        res: handler.fun(input)
      }
    })
  }
}