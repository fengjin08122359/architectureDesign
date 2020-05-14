/**
 *Data
 * @param {name} string
 * @param {data} any
 * @interface Data
 */
export interface Data {
  name: string;
  data: any;
}

export class DataList {
  private datas: Array<Data>;
  constructor() {
    this.datas = [];
  }
  /**
   *add
   *
   * @param {Data} data
   * @memberof DataList
   */
  add(data: Data) {
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
}