import { Log, ErrorCode, EventDispatcher, Intercept, SingleUI, UIList } from '@mikefeng110808/instance';
import axios from 'axios';
import websocket from 'websocket';

class VueLog extends Log {
    constructor() {
        super();
    }
    open() {
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
    constructor(list = [], options) {
        super(list, options);
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

export { HttpInstance, VueUI, VueUIList, WebSocketInstance, errorCode, httpIntercept, keyFrame, log, routerIntercept, wsIntercept };
