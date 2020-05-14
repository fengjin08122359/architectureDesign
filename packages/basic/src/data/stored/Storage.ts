class Storage {
  storage: any;
  constructor() {
    this.storage = {};
  }
  /**
   *get
   *
   * @param {string} key
   * @memberof Storage
   */
  public get(key: string | number) {
    return this.storage[key];
  }
  /**
   *set
   *
   * @param {string} key
   * @param {any} value
   * @memberof Storage
   */
  public set(key: string | number, value: any) {
    this.storage[key] = value;
  }
  /**
   *remove
   *
   * @param {string} key
   * @memberof Storage
   */
  public remove(key: string | number) {
    this.storage[key] = undefined;
  }
  /**
   *clear
   *
   * @memberof Storage
   */
  public clear() {
    this.storage = {};
  }
}
export { Storage };
