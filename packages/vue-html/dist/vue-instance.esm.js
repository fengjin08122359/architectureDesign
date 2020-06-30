import axios from 'axios';
import websocket from 'websocket';

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
     *get
     *
     * @param {string} name
     * @memberof DataList
     */
    get(name = "") {
        return this.datas.filter((data) => name === "" || data.name === name);
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

class SingleUI {
    constructor(params) {
        this.key = params.key || ""; //键
        this.props = params.props || {
            label: "",
            required: "",
            data: [],
            disabled: false,
            show: true,
            placeholder: "",
        }; //属性列表包含其他属性
        this.valid = params.valid || []; //验证信息
        this.type = params.type || ""; // 类型
        this.value = typeof params.value == "undefined" ? "" : params.value; // 值
        this.children = params.children || []; //子节点
        this.rawData = params; //原始数据
        this.rawComponents = params.rawComponents || [];
        this.canRender = false;
    }
    /**
     *dataFind
     * @param {string | number} data
     * @memberof SingleUI
     */
    dataFind(data) {
        var result = null;
        (this.props.data || []).forEach((item) => {
            if (typeof item[data] != "undefined") {
                result = item[data];
            }
        });
        return result;
    }
    /**
     *save
     * @param {string} value
     * @memberof SingleUI
     */
    save(value) {
        var oldValue = this.value;
        this.value = value;
        if (oldValue != this.value) {
            this.onChange({
                val: this.value,
                oldVal: oldValue,
            });
        }
    }
    /**
     *getKey
     * @returns string
     * @memberof SingleUI
     */
    getKey() {
        return this.key;
    }
    /**
     *getValue
     * @returns any
     * @memberof SingleUI
     */
    getValue() {
        return this.value;
    }
    /**
     *hasChange
     * @returns boolean
     * @memberof SingleUI
     */
    hasChange() {
        return !(this.getValue() == "");
    }
    /**
     *onChange
     * @param  ({val, oldVal})
     * @returns ({val, oldVal})
     * @memberof SingleUI
     */
    onChange({ val, oldVal }) {
        return { val, oldVal };
    }
    /**
     *getValid
     *
     * @returns Promise<validPayload>
     * @memberof SingleUI
     */
    getValid() {
        var result = {
            success: true,
            message: "",
            type: "success",
        };
        return new Promise((resolve) => {
            if (!this.key) {
                resolve(result);
                return;
            }
            if (this.props.required && !this.hasChange()) {
                result = {
                    success: false,
                    message: this.props.label || "",
                    type: "requiredEmpty",
                };
            }
            resolve(result);
        });
    }
    /**
     *setDisabled
     * @param  {boolean} flag
     * @returns boolean
     * @memberof SingleUI
     */
    setDisabled(flag = false) {
        this.props.disabled = flag;
        return this.props.disabled;
    }
    /**
     *getKeyValue
     * @returns SingleUIValuePayload
     * @memberof SingleUI
     */
    getKeyValue() {
        return {
            key: this.getKey(),
            value: this.getValue(),
            children: this.children.map((item) => {
                return item.getKeyValue();
            }),
        };
    }
    /**
     *setKeyValue
     * @param {SingleUIValuePayload} ({ key, value, children })
     * @memberof SingleUI
     */
    setKeyValue({ key, value, children }) {
        if (this.getKey() != "" && this.getKey() == key) {
            this.save(value);
            children.forEach((item) => {
                var target = this.children.find((target) => item.key == target.getKey());
                if (target) {
                    target.setKeyValue(item);
                }
            });
        }
    }
    /**
     *setKeyValue
     * @returns SingleUI[]
     * @memberof SingleUI
     */
    getAllItems() {
        return this.children
            .map((item) => {
            return item.getAllItems();
        })
            .concat(this);
    }
    /**
     *getCanRender
     * @returns boolean
     * @memberof SingleUI
     */
    getCanRender() {
        return this.canRender || this.rawComponents.length == 0;
    }
    /**
     *render
     *
     * @memberof SingleUI
     */
    render(...res) {
        return;
    }
}

class UIList {
    constructor(list, options) {
        this.options = options || { needValidHidden: false };
        this.needValidHidden = this.options.needValidHidden;
        this.rawList = list;
        this.list = [];
        this.templateList = [];
        this.componentHasRendered = new DataList();
        this.classTarget = new.target;
        this.reset();
    }
    /**
     *reset
     *
     * @memberof UIList
     */
    reset() {
        this.list = this.rawList.map((item) => {
            var target = this.convert(item); // 需要根据类型判断使用的
            if (target.children) {
                target.children = new this.classTarget(target.children, this.options).list;
            }
            return target;
        }, []);
    }
    /**
     *addTemplate
     *
     * @param {templatePayload} template
     * @memberof UIList
     */
    addTemplate({ key, value }) {
        var target = this.templateList.find((item) => item.key == key);
        if (target) {
            target.value = value;
        }
        else {
            this.templateList.push({
                key,
                value,
            });
        }
    }
    /**
     *getTemplate
     * @returns templatePayload[]
     * @memberof UIList
     */
    getTemplate() {
        return this.templateList;
    }
    /**
     *convert
     * @private
     * @param {SingleUIPayload} item
     * @memberof UIList
     */
    convert(item) {
        var target = this.templateList.find((i) => i.key == item.type);
        if (target && target.value) {
            return new target.value(item);
        }
        else {
            return this.convertSinlgeUI(item);
        }
    }
    convertSinlgeUI(item) {
        return new SingleUI(item);
    }
    /**
     *getValid
     *
     * @returns Promise<validPayload>
     * @memberof UIList
     */
    getValid() {
        // 子节点查询
        var valid = this.getAllItems()
            .filter((item) => this.needValidHidden || item.props.show != false)
            .map((item) => item.getValid(), []);
        return new Promise((resolve) => {
            Promise.all(valid).then((res) => {
                var fails = res.filter((target) => !target.success);
                resolve({
                    success: fails.length == 0,
                    message: fails.length > 0 ? fails[0].message : "",
                    type: fails.length > 0 ? fails[0].type : "success",
                });
            });
        });
    }
    /**
     *save
     * @param {SingleUIValuePayload} data
     * @memberof UIList
     */
    save(data) {
        // [{key:"",value:"", children: [{key:"",value:"", children:[]}]}]
        data.forEach((item) => {
            var target = this.list.find((target) => item.key == target.getKey());
            if (target) {
                target.setKeyValue(item);
            }
        });
    }
    /**
     *getValue
     * @returns SingleUIValuePayload[]
     * @memberof UIList
     */
    getValue() {
        // [{key:"",value:"", children: [{key:"",value:"", children:[]}]}]
        return this.list.map((item) => {
            return item.getKeyValue();
        });
    }
    /**
     *getAllItems
     * @returns SingleUI[]
     * @memberof UIList
     */
    getAllItems() {
        return this.list.reduce((total, item) => {
            total = total.concat(item);
            return total;
        }, []);
    }
    /**
     *loadComponents
     * @returns Promise
     * @memberof UIList
     */
    loadComponents() {
        return new Promise(resolve => {
            var needRender = this.getNeedRender();
            Promise.all(needRender.map(key => {
                return this.handleComponentKey(key);
            })).then(() => {
                resolve();
            });
        });
    }
    /**
     *getNeedRender
     * @returns string[]
     * @memberof UIList
     */
    getNeedRender() {
        return Array.from(new Set(this.getAllItems().reduce((total, item) => {
            total = total.concat(item.getCanRender() ? [] : item.rawComponents);
            return total;
        }, [])));
    }
    /**
     *render
     * @returns Promise
     * @memberof UIList
     */
    load() {
        return this.loadComponents().then(() => {
            var keys = this.componentHasRendered.get('key').map(item => item.data);
            this.getAllItems().forEach((item) => {
                if (item.canRender === false) {
                    item.canRender = item.rawComponents.map((target) => {
                        return keys.includes(target);
                    }).reduce((total, current) => total && current, true);
                }
            });
        });
    }
    render() {
        return this.getAllItems().map((item) => item.render());
    }
    /**
     *handleComponentKey
     * @param {any} key
     * @returns Promise
     * @memberof UIList
     */
    handleComponentKey(key) {
        return new Promise(resolve => {
            this.componentHasRendered.add({
                name: 'key',
                data: key
            });
            resolve();
        });
    }
}

class VueLog extends Log {
    constructor() {
        super();
        var that = this;
        console.log = (function (log) {
            return (...rest) => {
                that.log(rest);
                log(rest);
            };
        })(console.log);
        console.warn = (function (log) {
            return (...rest) => {
                that.warn(rest);
                log(rest);
            };
        })(console.warn);
        console.info = (function (log) {
            return (...rest) => {
                that.info(rest);
                log(rest);
            };
        })(console.info);
        console.error = (function (log) {
            return (...rest) => {
                that.error(rest);
                errorCode.collect(rest);
                log(rest);
            };
        })(console.error);
        console.debug = (function (log) {
            return (...rest) => {
                that.debug(rest);
                log(rest);
            };
        })(console.debug);
    }
}

const log = new VueLog();
const errorCode = new ErrorCode();
const keyFrame = new EventDispatcher();
const httpIntercept = new Intercept();
const wsIntercept = new Intercept();
const routerIntercept = new Intercept();

class HttpInstance {
    constructor(param) {
        this.baseURL = param.baseURL || '';
        this.init();
    }
    init() {
        axios.interceptors.request.use(config => {
            return this.convertRequest(config);
        }, error => {
            return Promise.reject(error);
        });
        axios.interceptors.response.use(response => {
            return this.convertResponse(response);
        }, error => {
            return Promise.reject(error);
        });
    }
    convertRequest(config) {
        return config;
    }
    convertResponse(config) {
        return config;
    }
    create(opts) {
        const publicParams = {
            ts: Date.now()
        };
        const method = (opts.method || 'get').toUpperCase();
        const httpDefaultOpts = {
            method,
            baseURL: this.baseURL,
            url: opts.url,
            responseType: opts.responseType || '',
            timeout: 20000
        };
        if (opts['meta']) {
            httpDefaultOpts.headers = opts['meta'];
        }
        const dataRequest = ['PUT', 'POST', 'PATCH'];
        if (dataRequest.includes(method)) {
            httpDefaultOpts.data = opts.data || {};
        }
        else {
            httpDefaultOpts.params = {
                ...publicParams,
                ...(opts.data || {})
            };
        }
        // formData转换
        if (opts.formData) {
            httpDefaultOpts.transformRequest = [(data) => {
                    const formData = new FormData();
                    if (data) {
                        Object.entries(data).forEach(item => {
                            formData.append(item[0], item[1]);
                        });
                    }
                    return formData;
                }];
        }
        const promise = new Promise((resolve, reject) => {
            axios(httpDefaultOpts).then(response => {
                this.handleSuccess(response, resolve, opts);
            }).catch(error => {
                this.handleError(error, reject, opts);
            });
        });
        return promise;
    }
    handleSuccess(response, resolve, opts) {
        httpIntercept.getIntercept({ response, opts }, 'http-success');
        resolve(response);
    }
    handleError(error, reject, opts) {
        httpIntercept.getIntercept({ error, opts }, 'http-error');
        reject(error);
    }
}

class KeepAlive {
    constructor(opt) {
        this.ws = opt.ws;
        this.pong = 0;
        this.checkTime = 3;
        this.reconnectTime = 20;
        this.connnectNumber = 0;
        this.connectLimit = 1;
        this.keepAliveModel = true;
    }
    init() {
        this.pong = 0;
        this.connnectNumber = 0;
        if (this.interval) {
            clearInterval(this.interval);
        }
        this.check();
        this.interval = setInterval(() => {
            this.check();
        }, this.checkTime * 1000);
    }
    setConnectLimit(data) {
        this.connectLimit = data;
    }
    setPong() {
        this.connnectNumber = 0;
        this.pong = new Date().getTime();
    }
    check() {
        if (navigator && navigator.onLine == false) {
            this.endTimeout();
            return;
        }
        if (this.ws.isClosed()) {
            this.endTimeout();
            return;
        }
        if (this.pong && new Date().getTime() - this.pong > this.reconnectTime * 1000) {
            this.endTimeout();
            return;
        }
    }
    endTimeout() {
        if (this.keepAliveModel) {
            this.end();
        }
        if (this.reconnect()) {
            return;
        }
        if (this.interval) {
            clearInterval(this.interval);
        }
        wsIntercept.getIntercept('close', 'keepalive');
    }
    close() {
        if (this.interval) {
            clearInterval(this.interval);
        }
        wsIntercept.getIntercept('close', 'keepalive');
    }
    end() {
        this.ws.endClient();
    }
    reconnect() {
        var isReconnect = false;
        if (this.connnectNumber <= this.connectLimit) {
            isReconnect = true;
            if (this.ws.canReconnected()) {
                this.connnectNumber++;
            }
            wsIntercept.getIntercept('reconnect', 'keepalive');
        }
        return isReconnect;
    }
}

class WebSocketInstance {
    constructor() {
        this.client = null;
        this.keepAlive = new KeepAlive({ ws: this });
    }
    isClosed() {
        return !this.client || this.client.readyState === this.client.CLOSED;
    }
    canReconnected() {
        var can = this.client && this.client.readyState == this.client.CLOSED;
        if (can) {
            this.start(this.url);
        }
        return can;
    }
    endClient() {
        if (this.client && this.client.readyState == this.client.OPEN) {
            this.client.close();
        }
    }
    start(url) {
        this.url = url;
        this.client = new websocket.w3cwebsocket(url, 'echo-protocol');
        this.client.onerror = function (res) {
            console.log('Connection Error');
            wsIntercept.getIntercept({
                client: this.client,
                data: res
            }, 'ws-error');
        };
        this.client.onopen = function (res) {
            console.log('WebSocket Client Connected');
            wsIntercept.getIntercept({
                client: this.client,
                data: res
            }, 'ws-open');
            this.keepalive.init();
        };
        this.client.onclose = function (res) {
            console.log('echo-protocol Client Closed');
            wsIntercept.getIntercept({
                client: this.client,
                data: res
            }, 'ws-close');
        };
        this.client.onmessage = function (e) {
            wsIntercept.getIntercept({
                client: this.client,
                data: e.data
            }, 'ws-message');
            this.keepAlive.setPong();
        };
    }
    setConnectLimit(data) {
        this.keepAlive.setConnectLimit(data);
    }
    send(msg) {
        this.client && this.client.send(msg);
    }
    end() {
        this.client.close();
    }
}

class VueUI extends SingleUI {
    constructor(params) {
        super(params);
    }
    render(render) {
        if (!this.getCanRender()) {
            return render.createElement();
        }
        else {
            return this.renderInstance(render);
        }
    }
    renderInstance(render) {
        return render.createElement('div', // 标签名称
        {
            ...render.context,
            attrs: this
        }, [this.props.label, render.vueRoot.$slots.default]);
    }
}
class VueUIList extends UIList {
    constructor(list, options) {
        super(list, options);
        this.componentHasRendered = new DataList();
    }
    convertSinlgeUI(item) {
        return new VueUI(item);
    }
    handleComponentKey(key) {
        return new Promise(resolve => {
            this.componentHasRendered.add({
                name: 'key',
                data: key
            });
            resolve();
        });
    }
    getRenderList(render) {
        return this.getAllItems().map(item => item.render(render));
    }
}

export { Auth, DataList, Debounce, ErrorCode, EventDispatcher, HanderList, HttpInstance, Intercept, Log, ObserverSubject, SingleUI, Storage, Throttle, UIList, VueUI, VueUIList, WebSocketInstance, errorCode, httpIntercept, keyFrame, log, routerIntercept, wsIntercept };