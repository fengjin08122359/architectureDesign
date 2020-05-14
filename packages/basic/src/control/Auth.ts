/**
 *Judge
 * @param {name} string
 * @param {(res: any[]) => Promise<boolean> | boolean;} fun
 * @interface Judge
 */
interface Judge {
  name: string;
  fun: (res: any[]) => Promise<boolean> | boolean;
}

class Auth {
  judgeList: Judge[];
  constructor() {
    this.judgeList = [];
  }
  /**
   *add
   *
   * @param {Judge} judge
   * @memberof Auth
   */
  add(judge: Judge) {
    this.judgeList.push(judge);
  }
  /**
   *add
   *
   * @param {string} name
   * @memberof Auth
   */
  remove(name: string) {
    this.judgeList = this.judgeList.filter((item: Judge) => item.name !== name);
  }
  /**
   *match
   *
   * @param {any[]} res[]
   * @returns {Promise}
   * @memberof Auth
   */
  match(...res: any[]) {
    var matchList = this.judgeList.map((current: Judge) => {
      return current.fun(res);
    }, []);
    var currentList = this.judgeList.map((item) => item);
    return new Promise((resolve) => {
      Promise.all(matchList).then((result) => {
        result.forEach((item: boolean, index: number) => {
          if (item) {
            resolve(currentList[index].name);
          }
        });
        resolve("");
      });
    });
  }
}

export { Auth };
