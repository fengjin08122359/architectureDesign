export interface Data {
  name: string
  data: any
}

export class DataList {
  datas: Array<Data>
  constructor() {
    this.datas = []
  }
  add (data: Data){
    this.datas.push(data);
  }
  remove (name:string) {
    this.datas = this.datas.filter((data) => data.name !== name);
  }
  get (name:string) {
    return this.datas.filter((data) => data.name === name)
  }
}