import { DataList } from '@mikefeng110808/basic';
import 'axios';

class Drag {
    constructor(param) {
        this.target = param.target;
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

export { Api, ApiList, AutoConfig, ConfigList, Drag, Event, EventList, GetConfig, PostConfig, PostfileConfig, PostformConfig, PostjsonConfig };
