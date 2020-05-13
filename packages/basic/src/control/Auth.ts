interface Judge {
  name: string;
  fun: (res: any[]) => Promise<boolean> | boolean;
}

class Auth {
  judgeList: Judge[];
  constructor() {
    this.judgeList = [];
  }
  add(judge: Judge) {
    this.judgeList.push(judge);
  }
  remove(name: string) {
    this.judgeList = this.judgeList.filter((item: Judge) => item.name !== name);
  }
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
