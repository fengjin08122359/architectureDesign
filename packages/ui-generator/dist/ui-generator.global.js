var uiGenerator = (function (exports, axios) {
    'use strict';

    axios = axios && Object.prototype.hasOwnProperty.call(axios, 'default') ? axios['default'] : axios;

    class Drag {
        constructor(param) {
            this.target = param.target;
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

    /**
     * Returns an array of HTML elements located under the point specified by x, y.
     * If the native elementsFromPoint function does not exist, a polyfill will be used.
     *
     * @param  {number} x : X position
     * @param  {number} y : Y position
     * @return {array} : Array of the elements under the point (x, y)
     */
    let gennerateUUID = () => {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    };

    let GetConfig = {};
    let PostConfig = {};
    let PostformConfig = {};
    let PostjsonConfig = {};
    let PostfileConfig = {};
    let AutoConfig = {};
    const ConfigList = [{
            name: 'get',
            config: GetConfig
        }, {
            name: 'post',
            config: PostConfig
        }, {
            name: 'postform',
            config: PostformConfig
        }, {
            name: 'postjson',
            config: PostjsonConfig
        }, {
            name: 'postfile',
            config: PostfileConfig
        }, {
            name: 'auto',
            config: AutoConfig
        },];
    class Api {
        constructor(opt) {
            this.id = gennerateUUID();
            this.opt = opt;
            this.opt.id = opt.id || this.id;
        }
        fetch() {
        }
        setValue(val) {
            this.opt.id = val.id || this.opt.id;
            this.opt.config = val.config || 'get';
            this.opt.name = val.name || '';
            this.opt.getParam = val.getParam || {};
            this.opt.postParam = val.postParam || {};
            // this.uiList.setValue(val)
        }
    }
    class ApiList {
        constructor() {
            this.list = new DataList();
        }
        add(apiData) {
            var api = new Api(apiData);
            this.list.add({
                name: api.id || '',
                data: api
            });
            return api;
        }
        remove(id) {
            this.list.remove(id);
        }
        getList() {
            return this.list.get('').map(item => item.data);
        }
        clear() {
            this.list.clear();
        }
        save(val) {
        }
    }

    class Event {
        constructor(opt) {
            this.id = opt.id || gennerateUUID();
            this.opt = opt;
        }
        fetch() { }
        setValue(val) {
            this.opt.id = val.id || this.opt.id;
            this.opt.type = val.type || 'EventDispatcher';
            this.opt.name = val.name || '';
        }
    }
    class EventList {
        constructor() {
            this.list = new DataList();
        }
        add(apiData) {
            var event = new Event(apiData);
            this.list.add({
                name: event.id,
                data: event
            });
            return event;
        }
        remove(id) {
            this.list.remove(id);
        }
        getList() {
            return this.list.get('').map(item => item.data);
        }
        clear() {
            this.list.clear();
        }
        save() {
        }
    }

    exports.Api = Api;
    exports.ApiList = ApiList;
    exports.AutoConfig = AutoConfig;
    exports.ConfigList = ConfigList;
    exports.Drag = Drag;
    exports.Event = Event;
    exports.EventList = EventList;
    exports.GetConfig = GetConfig;
    exports.PostConfig = PostConfig;
    exports.PostfileConfig = PostfileConfig;
    exports.PostformConfig = PostformConfig;
    exports.PostjsonConfig = PostjsonConfig;

    return exports;

}({}, axios));
