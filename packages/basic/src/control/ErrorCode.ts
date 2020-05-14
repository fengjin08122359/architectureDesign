import { DataList } from "../data/stored/DataList";
export class ErrorCode {
  private dataList: DataList;
  constructor() {
    this.dataList = new DataList();
  }
  /**
   *collect
   *
   * @param {any} data
   * @memberof ErrorCode
   */
  collect(data: any) {
    this.dataList.add({
      name: "errorCode",
      data: data,
    });
  }
  /**
   *get
   *
   * @memberof ErrorCode
   */
  get() {
    return this.dataList.get("errorCode").map((item) => item.data);
  }
}
