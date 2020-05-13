class Auth {
    constructor() {
        this.judgeList = [];
    }
    add(judge) {
        this.judgeList.push(judge);
    }
    remove(name) {
        this.judgeList = this.judgeList.filter((item) => item.name !== name);
    }
    match(...res) {
        var matchList = this.judgeList.map((current) => {
            return current.fun(res);
        }, []);
        var currentList = this.judgeList.map(item => item);
        return new Promise(resolve => {
            Promise.all(matchList).then((result) => {
                result.forEach((item, index) => {
                    if (item) {
                        resolve(currentList[index].name);
                    }
                });
                resolve('');
            });
        });
    }
}

class Error {
}

class Intercept {
}

class Log {
}

class Storage {
    constructor() {
        this.storage = [];
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
        this.storage = [];
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
        this.EventList = this.EventList.filter(event => event.name !== name);
    }
    /**
     *dispatchEvent
     *
     * @param {string} name
     * @param {*} [message]
     * @memberof EventDispatcher
     */
    dispatchEvent(name, message) {
        this.EventList.filter(event => event.name === name)
            .map(event => event.listener)
            .forEach(listener => listener(message));
    }
}

class ObserverSubject {
    constructor() {
        this.observers = [];
    }
    registerObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        let index = this.observers.indexOf(observer);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }
    notifyObservers(target, observers = this.observers) {
        for (let observer of observers) {
            observer.update(target); // 更新
        }
    }
}

export { Auth, Error, EventDispatcher, Intercept, Log, ObserverSubject, Storage };
