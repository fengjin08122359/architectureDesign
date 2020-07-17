import { Storage } from '@mikefeng110808/basic'

class LocalStorage extends Storage {
  constructor() {
    super()
    this.storage = localStorage
  }
  /**
   *get
   *
   * @param {string} key
   * @memberof Storage
   */
  public get(key: string | number) {
    let value = this.storage.getItem(key);
    if (value) {
      value = decodeURIComponent(value);
    }
    try {
      value = JSON.parse(value)
    } catch (e) {}
    if (value == 'undefined') {
      value = undefined
    }
    return value
  }
  /**
   *set
   *
   * @param {string} key
   * @param {any} value
   * @memberof Storage
   */
  public set(key: string | number, value: any) {
    if (typeof value == "object") {
      value = JSON.stringify(value);
    }
    try {
      value = encodeURIComponent(value)
    } catch (e) {}
    this.storage.setItem(key, value);
  }
  /**
   *remove
   *
   * @param {string} key
   * @memberof Storage
   */
  public remove(key: string | number) {
    this.storage.setItem(key, undefined);
  }
  /**
   *clear
   *
   * @memberof Storage
   */
  public clear() {
    this.storage.clear()
  }
}

export let storage = new LocalStorage()