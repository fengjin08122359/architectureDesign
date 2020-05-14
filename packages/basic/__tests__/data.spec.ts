import {
  ObserverSubject,
  EventDispatcher,
  DataList,
  HanderList,
  Storage,
} from "../src";

describe("basic: data manage EventDispatcher", () => {
  test("EventDispatcher test add one", () => {
    var eventDispatcher = new EventDispatcher();
    var res = 1;
    eventDispatcher.addEventListener("test1", (data: number) => {
      res = res + 1 + data;
    });
    eventDispatcher.addEventListener("test2", (data: number) => {
      res = res + 2 + data;
    });
    eventDispatcher.dispatchEvent("test1", 0);
    expect(res).toStrictEqual(2);
    eventDispatcher.dispatchEvent("test1", 1);
    expect(res).toStrictEqual(4);
    eventDispatcher.dispatchEvent("test2", 0);
    expect(res).toStrictEqual(6);
    eventDispatcher.dispatchEvent("test2", 1);
    expect(res).toStrictEqual(9);
  });
  test("EventDispatcher test remove", () => {
    var eventDispatcher = new EventDispatcher();
    var res = 1;
    eventDispatcher.addEventListener("test1", (data: number) => {
      res = res + 1 + data;
    });
    eventDispatcher.addEventListener("test2", (data: number) => {
      res = res + 2 + data;
    });
    eventDispatcher.dispatchEvent("test1", 0);
    expect(res).toStrictEqual(2);
    eventDispatcher.removeEventListener("test1");
    eventDispatcher.dispatchEvent("test1", 0);
    expect(res).toStrictEqual(2);
  });
});

describe("basic: data manage ObserverSubject", () => {
  test("ObserverSubject Observer add one ", () => {
    var result = "noData";
    var observerSubject = new ObserverSubject();
    var observer1 = {
      update(time: number = 0) {
        result = "first observer" + time;
      },
    };
    observerSubject.registerObserver(observer1);
    observerSubject.notifyObservers(1);
    expect(result).toStrictEqual("first observer1");
  });
  test("ObserverSubject Observer add two ", () => {
    var obTime = 0;
    var observerSubject = new ObserverSubject();
    var observer1 = {
      update(time: number = 0) {
        obTime += time;
      },
    };
    var observer2 = {
      update(time: number = 0) {
        obTime += time;
      },
    };
    observerSubject.registerObserver(observer1);
    observerSubject.registerObserver(observer2);
    observerSubject.notifyObservers(1);
    expect(obTime).toStrictEqual(2);
  });
  test("ObserverSubject Observer remove ", () => {
    var obTime = 0;
    var observerSubject = new ObserverSubject();
    var observer1 = {
      update(time: number = 0) {
        obTime += time;
      },
    };
    var observer2 = {
      update(time: number = 0) {
        obTime += time * 2;
      },
    };
    observerSubject.registerObserver(observer1);
    observerSubject.registerObserver(observer2);
    observerSubject.notifyObservers(1);
    expect(obTime).toStrictEqual(3);
    observerSubject.removeObserver(observer1);
    observerSubject.notifyObservers(1);
    expect(obTime).toStrictEqual(5);
  });
});

describe("basic: data stored DataList", () => {
  test("DataList init", () => {
    var datalist = new DataList();
    expect(datalist.get()).toEqual([]);
  });
  test("DataList add", () => {
    var datalist = new DataList();
    datalist.add({
      name: "data1",
      data: "2222",
    });
    expect(datalist.get().length).toEqual(1);
    expect(datalist.get("data2").length).toEqual(0);
    datalist.add({
      name: "data2",
      data: 2222,
    });
    expect(datalist.get().length).toEqual(2);
    expect(datalist.get("data2").length).toEqual(1);
  });
  test("DataList remove", () => {
    var datalist = new DataList();
    datalist.add({
      name: "data1",
      data: "2222",
    });
    datalist.add({
      name: "data2",
      data: 2222,
    });
    expect(datalist.get().length).toEqual(2);
    expect(datalist.get("data2").length).toEqual(1);
    datalist.remove("data2");
    expect(datalist.get().length).toEqual(1);
    expect(datalist.get("data2").length).toEqual(0);
  });
});

describe("basic: data stored HanderList", () => {
  test("HanderList init", () => {
    var handerList = new HanderList();
    expect(handerList.get()).toEqual([]);
  });
  test("HanderList add", () => {
    var handerList = new HanderList();
    handerList.add({
      name: "data1",
      fun: () => {
        return "a";
      },
    });
    expect(handerList.get().length).toEqual(1);
    expect(handerList.get({}, "data2").length).toEqual(0);
    handerList.add({
      name: "data2",
      fun: () => {
        return "b";
      },
    });
    expect(handerList.get().length).toEqual(2);
    expect(handerList.get({}, "data2").length).toEqual(1);
  });
  test("HanderList remove", () => {
    var handerList = new HanderList();
    handerList.add({
      name: "data1",
      fun: () => {
        return "b";
      },
    });
    handerList.add({
      name: "data2",
      fun: () => {
        return "b";
      },
    });
    expect(handerList.get({}).length).toEqual(2);
    expect(handerList.get({}, "data2").length).toEqual(1);
    handerList.remove("data2");
    expect(handerList.get({}).length).toEqual(1);
    expect(handerList.get({}, "data2").length).toEqual(0);
  });
});

describe("basic: data stored Storage", () => {
  test("Storage init", () => {
    var storage = new Storage();
    expect(storage.get("test")).toBe(undefined);
  });
  test("Storage set", () => {
    var storage = new Storage();
    storage.set("test", "a");
    expect(storage.get("test")).toEqual("a");
    storage.set("test1", "b");
    expect(storage.get("test1")).toEqual("b");
    storage.set("test", "c");
    expect(storage.get("test")).toEqual("c");
  });
  test("Storage remove", () => {
    var storage = new Storage();
    storage.set("test", "a");
    expect(storage.get("test")).toEqual("a");
    storage.remove("test");
    expect(storage.get("test")).toEqual(undefined);
  });
  test("Storage clear", () => {
    var storage = new Storage();
    storage.set("test", "a");
    expect(storage.get("test")).toEqual("a");
    storage.clear();
    expect(storage.get("test")).toEqual(undefined);
  });
});
