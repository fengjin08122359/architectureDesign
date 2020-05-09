class Storage {
  storage: any
  constructor () {
    this.storage = []
  }
  /**
   *get
   *
   * @param {string} key
   * @memberof Storage
   */
  public get (key) {
    return this.storage[key]
  }
  /**
   *set
   *
   * @param {string} key
   * @param {any} value
   * @memberof Storage
   */
  public set (key, value) {
    this.storage[key] = value
  }
  /**
   *remove
   *
   * @param {string} key
   * @memberof Storage
   */
  public remove (key) {
    this.storage[key] = undefined
  }
  /**
   *clear
   *
   * @memberof Storage
   */
  public clear () {
    this.storage = []
  }
}
export {
  Storage
}