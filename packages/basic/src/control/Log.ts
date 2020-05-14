import { DataList } from "../data/stored/DataList";
export class Log {
  private dataList: DataList;
  constructor() {
    this.dataList = new DataList();
  }
  /**
   *log
   *
   * @param {any[]} rest[]
   * @memberof Log
   */
  log(...rest: any[]) {
    this.dataList.add({
      name: "log",
      data: rest,
    });
  }
  /**
   *error
   *
   * @param {any[]} rest[]
   * @memberof Log
   */
  error(...rest: any[]) {
    this.dataList.add({
      name: "error",
      data: rest,
    });
  }
  /**
   *debug
   *
   * @param {any[]} rest[]
   * @memberof Log
   */
  debug(...rest: any[]) {
    this.dataList.add({
      name: "debug",
      data: rest,
    });
  }
  /**
   *info
   *
   * @param {any[]} rest[]
   * @memberof Log
   */
  info(...rest: any[]) {
    this.dataList.add({
      name: "info",
      data: rest,
    });
  }
  /**
   *warn
   *
   * @param {any[]} rest[]
   * @memberof Log
   */
  warn(...rest: any[]) {
    this.dataList.add({
      name: "warn",
      data: rest,
    });
  }
  /**
   *error
   *
   * @param {string} name
   * @memberof Log
   */
  get(name: string = "") {
    return this.dataList.get(name).map((item) => item.data);
  }
}
