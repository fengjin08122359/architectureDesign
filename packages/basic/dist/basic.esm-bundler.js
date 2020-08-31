class Auth {
    constructor() {
        this.judgeList = [];
    }
    /**
     *add
     *
     * @param {Judge} judge
     * @memberof Auth
     */
    add(judge) {
        this.judgeList.push(judge);
    }
    /**
     *add
     *
     * @param {string} name
     * @memberof Auth
     */
    remove(name) {
        this.judgeList = this.judgeList.filter((item) => item.name !== name);
    }
    /**
     *match
     *
     * @param {any[]} res[]
     * @returns {Promise}
     * @memberof Auth
     */
    match(...res) {
        var matchList = this.judgeList.map((current) => {
            return current.fun(res);
        }, []);
        var currentList = this.judgeList.map((item) => item);
        return new Promise((resolve) => {
            Promise.all(matchList).then((result) => {
                result.forEach((item, index) => {
                    if (item) {
                        resolve(currentList[index].name);
                    }
                });
                resolve("");
            });
        });
    }
}

class DataList {
    constructor() {
        this.datas = [];
    }
    /**
     *add
     *
     * @param {Data} data
     * @memberof DataList
     */
    add(data) {
        this.datas.push(data);
    }
    /**
     *remove
     *
     * @param {string} name
     * @memberof DataList
     */
    remove(name) {
        this.datas = this.datas.filter((data) => data.name !== name);
    }
    /**
     *clear
     *
     * @memberof DataList
     */
    clear() {
        this.datas = [];
    }
    /**
     *get
     *
     * @param {string} name
     * @memberof DataList
     */
    get(name = "") {
        return this.datas.filter((data) => name === "" || data.name === name);
    }
    /**
     *get
     *
     * @param {string} name
     * @return {any} any
     * @memberof DataList
     */
    find(name = "") {
        var target = this.datas.find((data) => data.name === name);
        var empty = this.datas.find((data) => data.name === '');
        return target ? target.data : empty ? empty.data : null;
    }
}

class ErrorCode {
    constructor() {
        this.dataList = new DataList();
    }
    /**
     *collect
     *
     * @param {any} data
     * @memberof ErrorCode
     */
    collect(data) {
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

class HanderList {
    constructor() {
        this.handlers = [];
    }
    /**
     *add
     *
     * @param {Handler} handler
     * @memberof HanderList
     */
    add(handler) {
        this.handlers.push(handler);
    }
    /**
     *remove
     *
     * @param {string} name
     * @memberof HanderList
     */
    remove(name) {
        this.handlers = this.handlers.filter((handler) => handler.name !== name);
    }
    /**
     *get
     *
     * @param {any} input
     * @returns {HandlerRes[]}
     * @memberof HanderList
     */
    get(input, name = "") {
        return this.handlers
            .filter((handler) => name === "" || handler.name === name)
            .map((handler) => {
            return {
                name: handler.name,
                res: handler.fun(input),
            };
        });
    }
}

class Intercept extends HanderList {
    constructor() {
        super();
        this.handlers = [];
    }
    /**
     *addIntercept
     *
     * @param {InterceptHandler} handler
     * @memberof Intercept
     */
    addIntercept(handler) {
        this.add(handler);
    }
    /**
     *removeIntercept
     *
     * @param {string} name
     * @memberof Intercept
     */
    removeIntercept(name) {
        this.remove(name);
    }
    /**
     *getIntercept
     *
     * @param {any} input
     * @memberof Intercept
     */
    getIntercept(input, name = "") {
        return this.get(input, name)
            .filter((target) => target.res)
            .map((target) => target.name);
    }
}

class Log {
    constructor() {
        this.dataList = new DataList();
    }
    /**
     *log
     *
     * @param {any[]} rest[]
     * @memberof Log
     */
    log(...rest) {
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
    error(...rest) {
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
    debug(...rest) {
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
    info(...rest) {
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
    warn(...rest) {
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
    get(name = "") {
        return this.dataList.get(name).map((item) => item.data);
    }
}

class Debounce {
    constructor() {
        this.timeout = null;
    }
    do(handle, wait) {
        if (this.timeout !== null) {
            clearTimeout(this.timeout);
        }
        this.timeout = setTimeout(() => {
            handle.apply(this, arguments);
            this.timeout = null;
        }, wait);
    }
}
class Throttle {
    constructor() {
        this.timeout = null;
        this.lastTriggerTime = null;
        this.lastExecutedTime = null;
        this.executeOncePerWait = false;
        this.immediate = false;
    }
    do(handle, wait) {
        !this.executeOncePerWait && (this.lastTriggerTime = Date.now());
        const callNow = this.immediate && !this.timeout;
        if (!this.timeout) {
            this.executeOncePerWait && (this.lastExecutedTime = Date.now());
            this.timeout = setTimeout(() => {
                this.later(handle, wait, arguments);
            }, wait);
        }
        if (callNow) {
            this.executeOncePerWait && (this.lastExecutedTime = Date.now());
            handle.apply(this, arguments);
        }
    }
    later(handle, wait, args) {
        const last = Date.now() - ((this.executeOncePerWait ? this.lastExecutedTime : this.lastTriggerTime) || 0);
        if (last < wait && last > 0) {
            setTimeout(() => {
                this.later(handle, wait, args);
            }, wait - last);
        }
        else {
            if (!this.immediate) {
                this.executeOncePerWait && (this.lastExecutedTime = Date.now());
                handle.apply(this, args);
            }
            this.timeout = null;
        }
    }
}

class EventDispatcher {
    constructor() {
        this.EventList = new Array();
    }
    /**
     *EventDispatcher
     *
     * @static
     * @returns {EventDispatcher}
     * @memberof EventDispatcher
     */
    static getInstance() {
        this.instance = this.instance || new EventDispatcher();
        return this.instance;
    }
    /**
     *addEventListener
     *
     * @param {string} name
     * @param {Listener} listener
     * @memberof EventDispatcher
     */
    addEventListener(name, listener) {
        this.EventList.push({ name: name, listener: listener });
    }
    /**
     *removeEventListener
     *
     * @param {string} name
     * @memberof EventDispatcher
     */
    removeEventListener(name) {
        this.EventList = this.EventList.filter((event) => event.name !== name);
    }
    /**
     *dispatchEvent
     *
     * @param {string} name
     * @param {*} [message]
     * @memberof EventDispatcher
     */
    dispatchEvent(name, message) {
        this.EventList.filter((event) => event.name === name)
            .map((event) => event.listener)
            .forEach((listener) => listener(message));
    }
}

class ObserverSubject {
    constructor() {
        this.observers = [];
    }
    /**
     *registerObserver
     *
     * @param {Observer} observer
     * @memberof ObserverSubject
     */
    registerObserver(observer) {
        //注册观察者
        this.observers.push(observer);
    }
    /**
     *removeObserver
     *
     * @param {Observer} observer
     * @memberof ObserverSubject
     */
    removeObserver(observer) {
        //注销观察者
        let index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }
    /**
     *notifyObservers
     *
     * @param {any} target
     * @param {Array<Observer>} observers
     * @memberof ObserverSubject
     */
    notifyObservers(target, observers = this.observers) {
        // 通知观察者
        for (let observer of observers) {
            observer.update(target); // 更新
        }
    }
}

class Storage {
    constructor() {
        this.storage = {};
    }
    /**
     *get
     *
     * @param {string} key
     * @memberof Storage
     */
    get(key) {
        return this.storage[key];
    }
    /**
     *set
     *
     * @param {string} key
     * @param {any} value
     * @memberof Storage
     */
    set(key, value) {
        this.storage[key] = value;
    }
    /**
     *remove
     *
     * @param {string} key
     * @memberof Storage
     */
    remove(key) {
        this.storage[key] = undefined;
    }
    /**
     *clear
     *
     * @memberof Storage
     */
    clear() {
        this.storage = {};
    }
}

export { Auth, DataList, Debounce, ErrorCode, EventDispatcher, HanderList, Intercept, Log, ObserverSubject, Storage, Throttle };
