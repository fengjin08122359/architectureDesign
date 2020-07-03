/**
 *Data
 * @param {name} string
 * @param {data} any
 * @interface Data
 */
export interface DataPayload {
  name: string;
  data: any;
}

export class DataList {
  private datas: Array<DataPayload>;
  constructor() {
    this.datas = [];
  }
  /**
   *add
   *
   * @param {Data} data
   * @memberof DataList
   */
  add(data: DataPayload) {
    this.datas.push(data);
  }
  /**
   *remove
   *
   * @param {string} name
   * @memberof DataList
   */
  remove(name: string) {
    this.datas = this.datas.filter((data) => data.name !== name);
  }
  /**
   *get
   *
   * @param {string} name
   * @memberof DataList
   */
  get(name: string = "") {
    return this.datas.filter((data) => name === "" || data.name === name);
  }
  /**
   *get
   *
   * @param {string} name
   * @return {any} any
   * @memberof DataList
   */
  find (name: string = ""): any{
    var target = this.datas.find((data) => data.name === name)
    var empty = this.datas.find((data) => data.name === '')
    return target ? target.data : empty ? empty.data : null;
  }
}
