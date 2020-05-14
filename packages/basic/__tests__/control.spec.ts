import { Auth, ErrorCode, Log, Intercept } from "../src";

describe("basic: control auth init", () => {
  test("basic auth judgeList init", () => {
    var auth = new Auth();
    expect(auth.judgeList).toStrictEqual([]);
  });
  test("basic auth addList then match", () => {
    var auth = new Auth();
    auth.add({
      name: "test1",
      fun: (res: any[]) => {
        return new Promise((resolve) => {
          if (res.length == 1) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
      },
    });
    auth.match("1").then((data) => {
      expect(data).toBe("test1");
    });
    auth.match("1", "2").then((data) => {
      expect(data).toBe("");
    });
    auth.add({
      name: "test2",
      fun: (res: any[]) => {
        return new Promise((resolve) => {
          if (res.length == 2) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
      },
    });
    auth.match("1").then((data) => {
      expect(data).toBe("test1");
    });
    auth.match("1", "2").then((data) => {
      expect(data).toBe("test2");
    });
    auth.match("1", "2", "3").then((data) => {
      expect(data).toBe("");
    });
  });
  test("basic auth removeList then match", () => {
    var auth = new Auth();
    auth.add({
      name: "test1",
      fun: (res: any[]) => {
        return new Promise((resolve) => {
          if (res.length == 1) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
      },
    });
    auth.add({
      name: "test2",
      fun: (res: any[]) => {
        return new Promise((resolve) => {
          if (res.length == 2) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
      },
    });
    auth.match("1").then((data) => {
      expect(data).toBe("test1");
    });
    auth.match("1", "2").then((data) => {
      expect(data).toBe("test2");
    });
    auth.match("1", "2", "3").then((data) => {
      expect(data).toBe("");
    });
    auth.remove("test1");

    // auth.match('1').then(data => {
    //   expect(data).toBe('')
    // })
    // auth.match('1', '2').then(data => {
    //   expect(data).toBe('test2')
    // })
    // auth.match('1', '2', '3').then(data => {
    //   expect(data).toBe('')
    // })
  });
  test("basic auth mixin fun then match", () => {
    var auth = new Auth();
    auth.add({
      name: "test1",
      fun: (res: any[]) => {
        return new Promise((resolve) => {
          if (res.length == 1) {
            resolve(true);
          } else {
            resolve(false);
          }
        });
      },
    });
    auth.add({
      name: "test2",
      fun: (res: any[]) => {
        if (res.length == 2) {
          return true;
        } else {
          return false;
        }
      },
    });
    auth.match("1").then((data) => {
      expect(data).toBe("test1");
    });
    auth.match("1", "2").then((data) => {
      expect(data).toBe("test2");
    });
    auth.match("1", "2", "3").then((data) => {
      expect(data).toBe("");
    });
  });
});

describe("basic: control errorCode", () => {
  test("errorCode init", () => {
    var errorCode = new ErrorCode();
    expect(errorCode.get()).toEqual([]);
  });
  test("errorCode collect", () => {
    var errorCode = new ErrorCode();
    errorCode.collect("wtf");
    expect(errorCode.get()[0]).toEqual("wtf");
    errorCode.collect({ wtf: 0 });
    expect(errorCode.get().length).toBe(2);
    expect(errorCode.get()[1].wtf).toBe(0);
  });
});

describe("basic: control Intercept", () => {
  test("Intercept init", () => {
    var intercept = new Intercept();
    expect(intercept.getIntercept([2, 1])).toEqual([]);
  });
  test("Intercept addIntercept", () => {
    var intercept = new Intercept();
    intercept.addIntercept({
      name: "inter1",
      fun(message) {
        return message[0] > message[1];
      },
    });
    expect(intercept.getIntercept([2, 1])).toEqual(["inter1"]);
    intercept.addIntercept({
      name: "inter2",
      fun(message) {
        return message[0] >= message[1];
      },
    });
    expect(intercept.getIntercept([2, 1])).toEqual(["inter1", "inter2"]);
    expect(intercept.getIntercept([1, 1])).toEqual(["inter2"]);
  });
  test("Intercept removeIntercept", () => {
    var intercept = new Intercept();
    intercept.addIntercept({
      name: "inter1",
      fun(message) {
        return message[0] > message[1];
      },
    });
    intercept.addIntercept({
      name: "inter2",
      fun(message) {
        return message[0] >= message[1];
      },
    });
    expect(intercept.getIntercept([2, 1])).toEqual(["inter1", "inter2"]);
    expect(intercept.getIntercept([1, 1])).toEqual(["inter2"]);
    intercept.removeIntercept("inter1");
    expect(intercept.getIntercept([2, 1])).toEqual(["inter2"]);
    expect(intercept.getIntercept([1, 1])).toEqual(["inter2"]);
  });
});

describe("basic: control Log", () => {
  test("Log init", () => {
    var log = new Log();
    expect(log.get()).toEqual([]);
  });
  test("Log collect", () => {
    var log = new Log();
    log.debug("a", "b", "c");
    log.log("a", { b: 1 }, "c");
    log.info(["a"], { b: 1 }, "c");
    log.error("a");
    log.warn("d", "g");
    expect(log.get().length).toEqual(5);
    var debugInfos = log.get("debug");
    expect(debugInfos.length).toEqual(1);
    expect(debugInfos[0][0]).toEqual("a");
    expect(debugInfos[0][1]).toEqual("b");
    expect(debugInfos[0][2]).toEqual("c");
    var errorInfos = log.get("error");
    expect(errorInfos.length).toEqual(1);
    expect(errorInfos[0][0]).toEqual("a");
  });
});
