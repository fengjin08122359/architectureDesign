import 'axios';
import { UI, SelfProp, UIInstance } from '@mikefeng110808/ui-logic';
import Vue$1 from 'vue';
import ElementUI from 'element-ui';
import { Prop, Component, Vue, Watch } from 'vue-property-decorator';

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
let eventOptionsStr = "abort,animationcancel,animationend,animationiteration,animationstart,auxclick,blur,cancel,canplay,canplaythrough,change,click,close,contextmenu,cuechange,dblclick,drag,dragend,dragenter,dragexit,dragleave,dragover,dragstart,drop,durationchange,emptied,ended,error,focus,focusin,focusout,gotpointercapture,input,invalid,keydown,keypress,keyup,load,loadeddata,loadedmetadata,loadstart,lostpointercapture,mousedown,mouseenter,mouseleave,mousemove,mouseout,mouseover,mouseup,pause,play,playing,pointercancel,pointerdown,pointerenter,pointerleave,pointermove,pointerout,pointerover,pointerup,progress,ratechange,reset,resize,scroll,securitypolicyviolation,seeked,seeking,select,selectionchange,selectstart,stalled,submit,suspend,timeupdate,toggle,touchcancel,touchend,touchmove,touchstart,transitioncancel,transitionend,transitionrun,transitionstart,volumechange,waiting,wheel,fullscreenchange,fullscreenerror,copy,cut,paste";
let eventOptions = eventOptionsStr.split(',');

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

let apiList = new ApiList();
let eventList = new EventList();
let addApi = () => {
    return apiList.add({
        config: "get",
        name: '',
        getParam: [],
        postParam: []
    });
};
let removeApi = (id) => {
    apiList.remove(id);
};
let addEvent = () => {
    return eventList.add({
        name: '',
        type: 'EventDispatcher'
    });
};
let removeEvent = (id) => {
    eventList.remove(id);
};

class ModuleUI extends UI {
    constructor() {
        super();
        this.id = gennerateUUID();
        this.moduleIdList = [];
        this.editable = true;
        this.insertable = true;
        this.selfProp = new ModuleSelfProp();
    }
    getValue() {
        return {
            typeId: this.typeId,
            id: this.id,
            insertable: this.insertable,
            editable: this.editable,
            moduleIdList: this.moduleIdList,
            eventBind: {
                value: this.eventBind.getValue()
            },
            selfProp: {
                value: this.selfProp.getValue()
            },
            style: {
                value: this.style.getValue()
            }
        };
    }
    setDom(dom) {
        this.dom = dom;
    }
    setId(id) {
        this.id = id || gennerateUUID();
    }
    filterChildren(instance) {
        return this.moduleIdList.find(item => item == instance.moduleId);
    }
    addModuleId(moduleId) {
        this.moduleIdList.push(moduleId);
    }
    removeModuleId(moduleId) {
        this.moduleIdList = this.moduleIdList.filter(item => item != moduleId);
    }
}
class ModuleSelfProp extends SelfProp {
    constructor() {
        super();
    }
    getStyle() {
        return {
            width: 100,
            height: 100
        };
    }
    getRelativeStyle() {
        return {
            position: 'relative',
            top: 'auto',
            bottom: 'auto',
            right: 'auto',
            left: 'auto',
        };
    }
}

class ContainerUI extends ModuleUI {
    constructor() {
        super();
        this.insertable = true;
    }
}

class ComponentSingleUI extends ModuleUI {
    constructor() {
        super();
        this.insertable = false;
    }
}
class ComponentMultipleUI extends ComponentSingleUI {
    constructor() {
        super();
        this.insertable = false;
    }
}

class ModuleInstance extends UIInstance {
    constructor() {
        super();
        this.moduleId = gennerateUUID();
        this.children = [];
        this.target = new ModuleUI();
        this.canDrag = true;
    }
    setTarget(target) {
        this.target = target;
    }
    combi(target) {
        var module = new ModuleInstance();
        module.setTarget(target);
        this.children.push(module);
        this.target.addModuleId(module.moduleId);
        return module;
    }
    unCombi(moduleId) {
        var module = this.findContainUI(this, moduleId);
        console.log(module);
        if (module) {
            module.target.removeModuleId(moduleId);
            module.children = module.children.filter(t => t.moduleId != moduleId);
        }
    }
    findContainUI(tree, moduleId) {
        if (tree.children.find(item => item.moduleId == moduleId)) {
            return tree;
        }
        else if (tree.children.length > 0) {
            var target = null;
            tree.children.forEach(item => {
                target = this.findContainUI(item, moduleId) || target;
            });
            return target;
        }
        else {
            return null;
        }
    }
    resetRelativeStyle() {
        var style = this.target.selfProp.getRelativeStyle();
        for (let [key, value] of Object.entries(style)) {
            this.target.style[key] = value;
        }
    }
    getChildren() {
        return this.children.filter(item => this.target.filterChildren(item));
    }
    setValue(data) {
    }
}

class ContainerSelfProp extends ModuleSelfProp {
    constructor() {
        super();
    }
    getStyle() {
        return {
            width: "100%",
            height: "200px",
            background: '',
            display: 'block',
            position: 'relative',
        };
    }
}
class BasicSelfProp extends ModuleSelfProp {
    constructor() {
        super();
    }
    getStyle() {
        return {
            width: "100%",
            height: "70px",
            background: '',
            display: 'inline-block'
        };
    }
}
class MergeSelfProp extends ModuleSelfProp {
    constructor() {
        super();
    }
    getStyle() {
        return {
            width: "100%",
            height: "500px",
            background: '',
            display: 'inline-block'
        };
    }
}
class CardContainerSelfProp extends ContainerSelfProp {
    constructor() {
        super();
        this.opt = {
            tab: ['选项1']
        };
    }
}
class CardContainerUI extends ContainerUI {
    constructor() {
        super();
        this.activeCard = '';
    }
    filterChildren(instance) {
        return this.moduleIdList.find(item => item.moduleId == instance.moduleId && this.activeCard == item.tab);
    }
    addModuleId(moduleId) {
        this.moduleIdList.push({
            moduleId,
            tab: this.activeCard
        });
    }
    removeModuleId(moduleId) {
        this.moduleIdList = this.moduleIdList.filter(item => item.moduleId != moduleId);
    }
}
class ButtonSelfProp extends BasicSelfProp {
    constructor() {
        super();
        this.opt = {
            label: '提取数据'
        };
    }
}
class InputSelfProp extends BasicSelfProp {
    constructor() {
        super();
        this.opt = {
            value: '测试',
            prepend: ''
        };
    }
}
class NumberSelfProp extends BasicSelfProp {
    constructor() {
        super();
        this.opt = {
            value: 0,
            label: ''
        };
    }
}
class TimePickerSelfProp extends BasicSelfProp {
    constructor() {
        super();
        this.opt = {
            value: 0,
            placeholder: '',
            type: 'datetime'
        };
    }
}
class TimeGroupSelfProp extends BasicSelfProp {
    constructor() {
        super();
        this.opt = {
            year: 2020,
            report: 1
        };
    }
}
class SelectSelfProp extends BasicSelfProp {
    constructor() {
        super();
        this.opt = {
            value: ''
        };
    }
}
class CheckboxSelfProp extends BasicSelfProp {
    constructor() {
        super();
        this.opt = {
            value: '',
            label: 'test'
        };
    }
}
class CheckBoxGroupSelfProp extends BasicSelfProp {
    constructor() {
        super();
        this.opt = {
            value: []
        };
    }
}
class RadioSelfProp extends BasicSelfProp {
    constructor() {
        super();
        this.opt = {
            value: ''
        };
    }
}
class MulSelectSelfProp extends BasicSelfProp {
    constructor() {
        super();
        this.opt = {
            value: ''
        };
    }
}
class IframeSelfProp extends MergeSelfProp {
    constructor() {
        super();
        this.opt = {
            src: ''
        };
    }
}

let container = [{
        id: '1',
        name: "基本容器",
        selfProp: ContainerSelfProp,
        UI: ContainerUI,
        params: [{
                type: 'input',
                key: 'input',
                props: { label: 'input' },
                value: ''
            }, {
                type: 'array',
                key: 'array',
                props: { label: 'array' },
                value: []
            }, {
                type: 'object',
                key: 'object',
                props: { label: 'object' },
                value: {}
            }, {
                type: 'number',
                key: 'number',
                props: { label: 'number' },
                value: 0
            }, {
                type: 'select',
                key: 'select',
                props: { label: 'select' },
                value: ''
            }, {
                type: 'mulSelect',
                key: 'mulSelect',
                props: { label: 'mulSelect' },
                value: []
            },]
    }, {
        name: "选项卡",
        id: '2',
        selfProp: CardContainerSelfProp,
        UI: CardContainerUI,
        params: [{
                type: 'array',
                key: 'tab',
                props: { label: '选项卡' },
            }]
    }, {
        name: "弹窗",
        id: '3',
        selfProp: ContainerSelfProp,
        UI: ContainerUI
    }];
let basic = [{
        name: "按钮",
        id: '4',
        selfProp: ButtonSelfProp,
        UI: ComponentSingleUI,
        params: [{
                type: 'input',
                key: 'label',
                props: { label: '描述' },
            }]
    }, {
        name: "输入框",
        id: '5',
        selfProp: InputSelfProp,
        UI: ComponentSingleUI,
        params: [{
                type: 'input',
                key: 'value',
                props: { label: '值' },
            }, {
                type: 'input',
                key: 'prepend',
                props: { label: '前缀' },
            }]
    }, {
        name: "数字输入框",
        id: '6',
        selfProp: NumberSelfProp,
        UI: ComponentSingleUI,
        params: [{
                type: 'input',
                key: 'value',
                props: { label: '值' },
            }, {
                type: 'input',
                key: 'label',
                props: { label: '标签' },
            }]
    }, {
        name: "日期选择",
        id: '7',
        selfProp: TimePickerSelfProp,
        UI: ComponentSingleUI,
        params: [{
                type: 'input',
                key: 'value',
                props: { label: '值' },
            }, {
                type: 'input',
                key: 'placeholder',
                props: { label: 'placeholder' },
            }, {
                type: 'select',
                key: 'type',
                props: { label: '日期类型', optionsArray: [{
                            key: 'year',
                            value: 'year'
                        }, {
                            key: 'month',
                            value: 'month'
                        }, {
                            key: 'date',
                            value: 'date'
                        }, {
                            key: 'week',
                            value: 'week'
                        }, {
                            key: 'datetime',
                            value: 'datetime'
                        }, {
                            key: 'datetimerange',
                            value: 'datetimerange'
                        }, {
                            key: 'daterange',
                            value: 'daterange'
                        },],
                    configVisible: false
                }
            }]
    }, {
        name: "时间选择",
        id: '8',
        selfProp: TimeGroupSelfProp,
        UI: ComponentSingleUI,
        params: [{
                type: 'select',
                key: 'year',
                props: { label: '日期类型', optionsArray: new Array(21).fill(2020).map((item, index) => item - index).map(item => {
                        return {
                            key: item,
                            value: item
                        };
                    }),
                    configVisible: false
                }
            }, {
                type: 'select',
                key: 'report',
                props: { label: '日期类型', optionsArray: [{
                            key: 1,
                            value: '年报'
                        }, {
                            key: 2,
                            value: '三季'
                        }, {
                            key: 3,
                            value: '中期'
                        }, {
                            key: 4,
                            value: '一季'
                        }],
                    configVisible: false
                }
            }]
    }, {
        name: "下拉选择",
        id: '9',
        selfProp: SelectSelfProp,
        UI: ComponentSingleUI,
        params: [{
                type: 'select',
                key: 'value',
                props: { label: '日期类型', optionsArray: [{
                            key: 1,
                            value: '选项一'
                        }, {
                            key: 2,
                            value: '选项二'
                        }, {
                            key: 3,
                            value: '选项三'
                        }],
                    configVisible: true
                }
            }]
    }, {
        name: "多选框",
        id: '10',
        selfProp: CheckboxSelfProp,
        UI: ComponentSingleUI,
        params: [{
                type: 'boolean',
                key: 'value',
            }, {
                type: 'input',
                key: 'label',
            }]
    }, {
        name: "多选框组",
        id: '11',
        selfProp: CheckBoxGroupSelfProp,
        UI: ComponentSingleUI,
        params: [{
                type: 'mulSelect',
                key: 'value',
                props: { optionsArray: [{
                            key: 1,
                            value: '选项一'
                        }, {
                            key: 2,
                            value: '选项二'
                        }, {
                            key: 3,
                            value: '选项三'
                        }],
                    configVisible: true
                },
            }]
    }, {
        name: "单选框组",
        id: '12',
        selfProp: RadioSelfProp,
        UI: ComponentSingleUI,
        params: [{
                type: 'select',
                key: 'value',
                props: { label: '日期类型', optionsArray: [{
                            key: 1,
                            value: '选项一'
                        }, {
                            key: 2,
                            value: '选项二'
                        }, {
                            key: 3,
                            value: '选项三'
                        }],
                    configVisible: true
                }
            }]
    }, {
        name: "下拉框",
        id: '13',
        selfProp: MulSelectSelfProp,
        UI: ComponentSingleUI,
        params: [{
                type: 'mulSelect',
                key: 'value',
                props: { optionsArray: [{
                            key: 1,
                            value: '选项一'
                        }, {
                            key: 2,
                            value: '选项二'
                        }, {
                            key: 3,
                            value: '选项三'
                        }],
                    configVisible: true
                },
            }]
    }];
let merge = [{
        name: "柱状折现图",
        id: '15',
        selfProp: MergeSelfProp,
        UI: ComponentMultipleUI
    }, {
        name: "饼图",
        id: '16',
        selfProp: MergeSelfProp,
        UI: ComponentMultipleUI
    }, {
        name: "表格",
        id: '17',
        selfProp: MergeSelfProp,
        UI: ComponentMultipleUI,
        params: [{
                type: 'tableDataConfig',
                key: 'config',
            }]
    }, {
        name: "嵌入式页面",
        id: '18',
        selfProp: IframeSelfProp,
        UI: ComponentMultipleUI,
        params: [{
                type: 'input',
                key: 'src',
            }]
    }];

let basicModules = [];
let continerModules = [];
let mergeModules = [];
var addBasic = (props) => {
    basicModules.push(props);
};
var addContiner = (props) => {
    continerModules.push(props);
};
var addMerge = (props) => {
    mergeModules.push(props);
};
basic.forEach((item) => {
    addBasic(item);
});
container.forEach((item) => {
    addContiner(item);
});
merge.forEach((item) => {
    addMerge(item);
});
let generateModule = (props) => {
    let target = new props.UI();
    target.typeId = props.id;
    target.setSelfProp(new props.selfProp());
    var style = target.selfProp.getStyle();
    for (let [key, value] of Object.entries(style)) {
        target.style[key] = value;
    }
    target.selfProp.setParam(props.params);
    return target;
};

let currentEl = null;
let setCurrentModule = (target) => {
    currentEl = target;
};
let clearCurrentEl = () => {
    currentEl = null;
};
class EditorInstance {
    constructor() {
        this.active = undefined;
        this.isRelative = true;
        this.borderColor = '#bdbdbd';
    }
    setActive(instance) {
        this.active = instance;
    }
    deleteActive() {
        if (this.active) {
            containerModules.unCombi(this.active.moduleId);
        }
    }
}
let editorInstance = new EditorInstance();
let setEditorInstance = (instance) => {
    editorInstance.setActive(instance);
};
let containerModules = new ModuleInstance();
containerModules.canDrag = false;
containerModules.target.style.width = "100%";
containerModules.target.style.height = "100%";
containerModules.target.style.overflow = 'auto';

class LocalStorage extends Storage {
    constructor() {
        super();
        this.storage = localStorage;
    }
    /**
     *get
     *
     * @param {string} key
     * @memberof Storage
     */
    get(key) {
        let value = this.storage.getItem(key);
        if (value) {
            value = decodeURIComponent(value);
        }
        try {
            value = JSON.parse(value);
        }
        catch (e) { }
        if (value == 'undefined') {
            value = undefined;
        }
        return value;
    }
    /**
     *set
     *
     * @param {string} key
     * @param {any} value
     * @memberof Storage
     */
    set(key, value) {
        if (typeof value == "object") {
            value = JSON.stringify(value);
        }
        try {
            value = encodeURIComponent(value);
        }
        catch (e) { }
        this.storage.setItem(key, value);
    }
    /**
     *remove
     *
     * @param {string} key
     * @memberof Storage
     */
    remove(key) {
        this.storage.setItem(key, undefined);
    }
    /**
     *clear
     *
     * @memberof Storage
     */
    clear() {
        this.storage.clear();
    }
}
let storage = new LocalStorage();

let saveFromEdit = () => {
    storage.set('saveedit', containerModules.getValue());
};
let restoreFromEdit = () => {
    var res = storage.get('saveedit');
    restoreInstance(containerModules, res);
};
let restoreInstance = (instance, res) => {
    instance.moduleId = res.moduleId;
    instance.canDrag = res.canDrag;
    let tc = basic.concat(container, merge).find(item => item.id == res.target.typeId);
    let TargetConstructor = tc ? tc : {
        name: "外层",
        selfProp: ModuleSelfProp,
        UI: ContainerUI,
        params: []
    };
    instance.target = new TargetConstructor.UI();
    instance.target.editable = res.target.editable;
    instance.target.id = res.target.id;
    instance.target.typeId = res.target.typeId;
    instance.target.insertable = res.target.insertable;
    instance.target.moduleIdList = res.target.moduleIdList;
    (res.target.eventBind.inValue || []).forEach((item) => {
        var event = instance.target.eventBind.addIn();
        event.setValue(item);
    });
    (res.target.eventBind.outValue || []).forEach((item) => {
        var event = instance.target.eventBind.addOut();
        event.setValue(item);
    });
    instance.target.eventBind.save();
    instance.target.selfProp = new TargetConstructor.selfProp();
    instance.target.selfProp.setParam(TargetConstructor.params || []);
    instance.target.selfProp.setValue(res.target.selfProp.value);
    instance.target.style.setValue(res.target.style.value);
    // container.target = new ContainerUI()
    instance.children = res.children.map((item) => {
        var module = restoreInstance(new ModuleInstance(), item);
        return module;
    });
    return instance;
};
let saveFromConfig = () => {
    var apiValue = apiList.getList().map(item => item.opt);
    var eventValue = eventList.getList().map(item => item.opt);
    storage.set('saveConfig', {
        apiValue, eventValue
    });
};
let restoreFromConfig = () => {
    var res = storage.get('saveConfig');
    apiList.clear();
    eventList.clear();
    res = res ? res : { apiValue: [], eventValue: [] };
    (res.apiValue || []).forEach((item) => {
        var api = addApi();
        api.setValue(item);
    });
    (res.eventValue || []).forEach((item) => {
        var event = addEvent();
        event.setValue(item);
    });
};

let compilerInstance = new ModuleInstance();
var res = storage.get('saveedit');
if (res) {
    restoreInstance(compilerInstance, res);
}

class SingleUI {
    constructor(params) {
        this.key = params.key || ""; //键
        this.props = {
            label: "",
            required: "",
            data: [],
            disabled: false,
            show: true,
            placeholder: "",
            ...params.props,
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
     *setValue
     * @param {any} value
     * @memberof SingleUI
     */
    setValue(value) {
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
            this.setValue(value);
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
    constructor(list = [], options) {
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
     * @param {SingleUIPayload} list
     * @memberof UIList
     */
    setList(list) {
        this.rawList = list;
        this.list = [];
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
        var rawValue = this.getValue();
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
        this.reset();
        this.setValue(rawValue);
    }
    /**
     *removeTemplate
     *
     * @param {string} key
     * @memberof UIList
     */
    removeTemplate(key) {
        var rawValue = this.getValue();
        this.templateList = this.templateList.filter((item) => item.key !== key);
        this.reset();
        this.setValue(rawValue);
    }
    /**
     *clearTemplate
     *
     * @memberof UIList
     */
    clearTemplate() {
        var rawValue = this.getValue();
        this.templateList = [];
        this.reset();
        this.setValue(rawValue);
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
     *setValue
     * @param {SingleUIValuePayload} data
     * @memberof UIList
     */
    setValue(data) {
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

class LifeCycle {
    constructor(lifeCycle) {
    }
    mounted() {
    }
}

class VueUI extends SingleUI {
    constructor(params) {
        super(params);
        this.renderComponent = undefined;
        this.lifeCycle = new LifeCycle(params.props ? params.props.lifeCycle : {});
    }
    render(render, props) {
        if (!this.getCanRender()) {
            return render.createElement();
        }
        else {
            return this.renderInstance(render, props);
        }
    }
    renderInstance(render, props) {
        return render.createElement(this.renderComponent || 'div', // 标签名称
        {
            ...render.context,
            props: { target: this, ...props }
        }, [render.vueRoot.$slots.default]);
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

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

let InputVueUI = class InputVueUI extends Vue {
};
__decorate([
    Prop()
], InputVueUI.prototype, "target", void 0);
InputVueUI = __decorate([
    Component({ template: `<div class='inputVue' v-show='target.props.show'> <el-input v-model="target.value" :disabled='target.props.disabled' clearable :type='target.props.inputType'> <template slot='append' v-if='target.props.append'>{{target.props.append}}</template> <template slot="prepend" v-if='target.props.label'>{{target.props.label}}</template> </el-input> </div>` })
], InputVueUI);
var InputVueUIComp = InputVueUI;

let ArrayVueUI = class ArrayVueUI extends Vue {
};
__decorate([
    Prop()
], ArrayVueUI.prototype, "target", void 0);
ArrayVueUI = __decorate([
    Component({ template: `<div class='arrayVue' v-show='target.props.show'> <div>{{target.props.label}}</div> <el-row> <el-col v-for="(item,index) in target.value" :key="index"> <el-input v-model="item.value" > <template slot="append" > <span @click="target.addCol()" class='el-icon-circle-plus-outline'></span> <span v-if="index != 0" @click="target.delCol(index)" class='el-icon-remove-outline'></span> </template> </el-input> </el-col> </el-row> </div>` })
], ArrayVueUI);
var ArrayVueUIComp = ArrayVueUI;

let ObjectVueUI = class ObjectVueUI extends Vue {
};
__decorate([
    Prop()
], ObjectVueUI.prototype, "target", void 0);
ObjectVueUI = __decorate([
    Component({ template: `<div class='objectVue' v-show='target.props.show'> <div>{{target.props.label}}</div> <el-row> <el-col v-for="(item,index) in target.props.objectArray" :key="index"> <el-col :span='10'> <el-input v-model="item.key" > <template slot='prepend'>key</template> </el-input> </el-col> <el-col :span='10'> <el-input v-model="item.value" > <template slot='prepend'>value</template> </el-input> </el-col> <el-col :span='4'> <span @click="target.addCol()" class='el-icon-circle-plus-outline'></span> <span v-if="index != 0" @click="target.delCol(index)" class='el-icon-remove-outline'></span> </el-col> </el-col> </el-row> </div>` })
], ObjectVueUI);
var ObjectVueUIComp = ObjectVueUI;

let MulSelectVueUI = class MulSelectVueUI extends Vue {
};
__decorate([
    Prop()
], MulSelectVueUI.prototype, "target", void 0);
MulSelectVueUI = __decorate([
    Component({ template: `<div class='mulSelectVue' v-show='target.props.show'> <div>{{target.props.label}}</div> <div v-if='target.props.configVisible'> <span>选项:</span> <el-row> <el-col v-for="(item,index) in target.props.optionsArray" :key="index"> <el-col :span='10'> <el-input v-model="item.key" > <template slot='prepend'>key</template> </el-input> </el-col> <el-col :span='10'> <el-input v-model="item.value" > <template slot='prepend'>value</template> </el-input> </el-col> <el-col :span='4'> <span @click="target.addCol()" class='el-icon-circle-plus-outline'></span> <span v-if="index != 0" @click="target.delCol(index)" class='el-icon-remove-outline'></span> </el-col> </el-col> </el-row> </div> <span v-if='target.props.configVisible'>结果:</span> <el-select v-model="target.value" multiple filterable clearable> <el-option v-for="(item, index) in target.props.optionsArray" :value="item.key" :label='item.value' :key="index"> </el-option> </el-select></div>` })
], MulSelectVueUI);
var MulSelectVueUIComp = MulSelectVueUI;

let SelectVueUI = class SelectVueUI extends Vue {
};
__decorate([
    Prop()
], SelectVueUI.prototype, "target", void 0);
SelectVueUI = __decorate([
    Component({ template: `<div class='selectVue' v-show='target.props.show'> <div>{{target.props.label}}</div> <div v-if='target.props.configVisible'> <span>选项:</span> <el-row > <el-col v-for="(item,index) in target.props.optionsArray" :key="index"> <el-col :span='10'> <el-input v-model="item.key" > <template slot='prepend'>key</template> </el-input> </el-col> <el-col :span='10'> <el-input v-model="item.value" > <template slot='prepend'>value</template> </el-input> </el-col> <el-col :span='4'> <span @click="target.addCol()" class='el-icon-circle-plus-outline'></span> <span v-if="index != 0" @click="target.delCol(index)" class='el-icon-remove-outline'></span> </el-col> </el-col> </el-row> </div> <span v-if='target.props.configVisible'>结果:</span> <el-select v-model="target.value" filterable clearable> <el-option v-for="(item, index) in target.props.optionsArray" :value="item.key" :label='item.value' :key="index"> </el-option> </el-select></div>` })
], SelectVueUI);
var SelectVueUIComp = SelectVueUI;

let NumberVueUI = class NumberVueUI extends Vue {
};
__decorate([
    Prop()
], NumberVueUI.prototype, "target", void 0);
NumberVueUI = __decorate([
    Component({ template: `<div class='numberVue' v-show='target.props.show'> <div>{{target.props.label}}</div> <el-input-number v-model="target.value" :disabled='target.props.disabled' ></el-input-number></div>` })
], NumberVueUI);
var NumberVueUIComp = NumberVueUI;

let InputVueUI$1 = class InputVueUI extends Vue {
};
__decorate([
    Prop()
], InputVueUI$1.prototype, "target", void 0);
InputVueUI$1 = __decorate([
    Component({ template: `<div class='BooleanVueUI' v-show='target.props.show'> <el-checkbox v-model="target.value">是否选中</el-checkbox> </div>` })
], InputVueUI$1);
var BooleanVueUIComp = InputVueUI$1;

let SimulateVueUIComponent = class SimulateVueUIComponent extends Vue {
    watchSimulate(val) {
        this.target.simulate();
    }
};
__decorate([
    Prop()
], SimulateVueUIComponent.prototype, "target", void 0);
__decorate([
    Watch('target.value')
], SimulateVueUIComponent.prototype, "watchSimulate", null);
SimulateVueUIComponent = __decorate([
    Component({ template: `<div class='SimulateVue' v-show='target.props.show'> <el-input type="textarea" :rows="5" placeholder="模拟框" v-model="target.value"> </el-input> <div>{{target.error}}</div> <div>{{target.simulateValueToString()}}</div> </div>` })
], SimulateVueUIComponent);
var SimulateVueUIComp = SimulateVueUIComponent;

Vue$1.use(ElementUI);
class InputVueUI$2 extends VueUI {
    constructor(params) {
        super(params);
        this.renderComponent = InputVueUIComp;
    }
}
class ArrayVueUI$1 extends VueUI {
    constructor(params) {
        super(params);
        if (!Array.isArray(this.value)) {
            this.value = [];
        }
        if (this.value.length == 0) {
            this.addCol();
        }
        this.renderComponent = ArrayVueUIComp;
    }
    addCol() {
        this.value.push({
            value: ''
        });
    }
    delCol(index) {
        this.value.splice(index, 1);
    }
    getValue() {
        return this.value.map((item) => item.value);
    }
    setValue(val) {
        this.value = (val || []).map((item) => {
            return { value: item };
        });
        if (!Array.isArray(this.value)) {
            this.value = [];
        }
        if (this.value.length == 0) {
            this.addCol();
        }
    }
}
class ObjectVueUI$1 extends VueUI {
    constructor(params) {
        super(params);
        this.props.objectArray = this.props.objectArray || [];
        this.setValue(this.value || {});
        if (this.props.objectArray.length == 0) {
            this.addCol();
        }
        this.renderComponent = ObjectVueUIComp;
    }
    addCol() {
        this.props.objectArray.push({
            key: '',
            value: ''
        });
    }
    delCol(index) {
        this.props.objectArray.splice(index, 1);
    }
    getValue() {
        return this.props.objectArray.reduce((total, current) => {
            total[current.key] = current.value;
            return total;
        }, {});
    }
    setValue(val) {
        this.value = val || {};
        this.props.objectArray = [];
        for (let [key, value] of Object.entries(this.value)) {
            this.props.objectArray.push({
                key, value
            });
        }
        if (this.props.objectArray.length == 0) {
            this.addCol();
        }
    }
}
class MulSelectVueUI$1 extends VueUI {
    constructor(params) {
        super(params);
        this.props.configVisible = this.props.configVisible || [];
        this.props.optionsArray = this.props.optionsArray || [];
        this.setValue(this.value || '');
        if (this.props.optionsArray.length == 0) {
            this.addCol();
        }
        this.renderComponent = MulSelectVueUIComp;
    }
    addCol() {
        this.props.optionsArray.push({
            key: '',
            value: ''
        });
    }
    delCol(index) {
        this.props.optionsArray.splice(index, 1);
    }
}
class SelectVueUI$1 extends VueUI {
    constructor(params) {
        super(params);
        this.props.configVisible = this.props.configVisible || [];
        this.props.optionsArray = this.props.optionsArray || [];
        this.setValue(this.value || []);
        if (this.props.optionsArray.length == 0) {
            this.addCol();
        }
        this.renderComponent = SelectVueUIComp;
    }
    addCol() {
        this.props.optionsArray.push({
            key: '',
            value: ''
        });
    }
    delCol(index) {
        this.props.optionsArray.splice(index, 1);
    }
}
class NumberVueUI$1 extends VueUI {
    constructor(params) {
        super(params);
        this.renderComponent = NumberVueUIComp;
    }
}
class BooleanVueUI extends VueUI {
    constructor(params) {
        super(params);
        this.value = !!this.value;
        this.renderComponent = BooleanVueUIComp;
    }
}
class SimulateVueUI extends VueUI {
    constructor(params) {
        super(params);
        this.simulateValue = '';
        this.error = '';
        this.simulate();
        this.renderComponent = SimulateVueUIComp;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        var oldValue = this.value;
        this.value = value;
        if (oldValue != this.value) {
            this.onChange({
                val: this.value,
                oldVal: oldValue,
            });
        }
        this.simulate();
    }
    simulate() {
        this.simulateValue = this.value;
        this.error = '';
        try {
            this.simulateValue = JSON.parse(this.value);
        }
        catch (error) {
            this.error = error;
        }
    }
    simulateValueToString() {
        return typeof this.simulateValue == 'object' ? JSON.stringify(this.simulateValue) : this.simulateValue;
    }
}

let EventListVueUIComponent = class EventListVueUIComponent extends Vue {
    get options() {
        var list = this.target.apiList.getList().map(item => {
            return {
                key: item.opt.id,
                value: `api:${item.opt.name}`
            };
        }).concat(this.target.eventList.getList().map(item => {
            return {
                key: item.opt.id,
                value: `${item.opt.type}:${item.opt.name}`
            };
        }));
        return list;
    }
};
__decorate([
    Prop()
], EventListVueUIComponent.prototype, "target", void 0);
EventListVueUIComponent = __decorate([
    Component({ template: `<div class='eventListVue'> <div>{{target.props.label}}</div> <el-row> <el-col> <el-select v-model="target.value" filterable> <el-option v-for="(item, index) in options" :value="item.key" :label='item.value' :key="index"> </el-option> </el-select> </el-col> </el-row> </div>` })
], EventListVueUIComponent);
var EventListVueUIComponent$1 = EventListVueUIComponent;

let ContainerVueUIComponent = class ContainerVueUIComponent extends Vue {
    mounted() {
        console.log(this.target.ui);
    }
};
__decorate([
    Prop()
], ContainerVueUIComponent.prototype, "target", void 0);
ContainerVueUIComponent = __decorate([
    Component({ template: `<div class='ContainerVue'> <slot></slot> </div>` })
], ContainerVueUIComponent);
var ContainerVueUIComponent$1 = ContainerVueUIComponent;

let CardContainerVueUIComponent = class CardContainerVueUIComponent extends Vue {
    constructor() {
        super(...arguments);
        this.tabs = [];
        this.activeTab = '';
    }
    mounted() {
        console.log(this.target.ui);
        console.log(this.target.ui.selfProp.opt);
        this.resetTabs();
    }
    resetTabs(val = this.target.ui.selfProp.opt) {
        this.tabs = (val.tab).map((item, index) => {
            return {
                key: index.toString(),
                value: item.toString()
            };
        });
        this.target.ui.activeCard = this.target.ui.activeCard || this.tabs[0].key || '';
    }
    watchTab(val) {
        this.resetTabs(val);
    }
};
__decorate([
    Prop()
], CardContainerVueUIComponent.prototype, "target", void 0);
__decorate([
    Watch('target.ui.selfProp.opt')
], CardContainerVueUIComponent.prototype, "watchTab", null);
CardContainerVueUIComponent = __decorate([
    Component({ template: `<div class='CardContainerVue'> <el-tabs v-model="target.ui.activeCard" > <el-tab-pane v-for="(tab, index) in tabs" :key="index" :label="tab.value" :name="tab.key"> <slot></slot> </el-tab-pane> </el-tabs> </div>` })
], CardContainerVueUIComponent);
var CardContainerVueUIComponent$1 = CardContainerVueUIComponent;

let DialogContainerVueUIComponent = class DialogContainerVueUIComponent extends Vue {
    constructor() {
        super(...arguments);
        this.visible = false;
        this.title = '';
    }
    mounted() {
        console.log(this.target.ui);
    }
};
__decorate([
    Prop()
], DialogContainerVueUIComponent.prototype, "target", void 0);
DialogContainerVueUIComponent = __decorate([
    Component({ template: `<div class='DialogContainerVue'> <div class='DialogContainerVue-block' v-if='!target.isCompiler'> <slot></slot> </div> <el-dialog :visible.sync='visible' :append-to-body="true" :title="title" v-if='target.isCompiler'> <slot></slot> </el-dialog> </div>` })
], DialogContainerVueUIComponent);
var DialogContainerVueUIComponent$1 = DialogContainerVueUIComponent;

let ButtonVueUIComponent = class ButtonVueUIComponent extends Vue {
    constructor() {
        super(...arguments);
        this.label = '';
    }
    mounted() {
        console.log(this.target.ui);
        console.log(this.target.ui.selfProp.opt);
        this.resetOpt();
    }
    resetOpt(val = this.target.ui.selfProp.opt) {
        this.label = val.label || '';
    }
    watchTab(val) {
        this.resetOpt(val);
    }
};
__decorate([
    Prop()
], ButtonVueUIComponent.prototype, "target", void 0);
__decorate([
    Watch('target.ui.selfProp.opt')
], ButtonVueUIComponent.prototype, "watchTab", null);
ButtonVueUIComponent = __decorate([
    Component({ template: `<div class='ButtonVue'> <el-button >{{label}}</el-button> </div>` })
], ButtonVueUIComponent);
var ButtonVueUIComponent$1 = ButtonVueUIComponent;

let InputVueUIComponent = class InputVueUIComponent extends Vue {
    constructor() {
        super(...arguments);
        this.value = '';
        this.prepend = '';
    }
    mounted() {
        console.log(this.target.ui);
        console.log(this.target.ui.selfProp.opt);
        this.resetOpt();
    }
    resetOpt(val = this.target.ui.selfProp.opt) {
        this.value = val.value || '';
        this.prepend = val.prepend || '';
    }
    watchTab(val) {
        this.resetOpt(val);
    }
};
__decorate([
    Prop()
], InputVueUIComponent.prototype, "target", void 0);
__decorate([
    Watch('target.ui.selfProp.opt')
], InputVueUIComponent.prototype, "watchTab", null);
InputVueUIComponent = __decorate([
    Component({ template: `<div class='InputVue'> <el-input v-model='value'> <template slot='prepend' v-if="prepend"> {{prepend}} </template> </el-input> </div>` })
], InputVueUIComponent);
var InputVueUIComponent$1 = InputVueUIComponent;

let NumberVueUIComponent = class NumberVueUIComponent extends Vue {
    constructor() {
        super(...arguments);
        this.value = '';
        this.label = '';
    }
    mounted() {
        this.resetOpt();
    }
    resetOpt(val = this.target.ui.selfProp.opt) {
        this.value = val.value || '';
        this.label = val.label || '';
    }
    watchTab(val) {
        this.resetOpt(val);
    }
};
__decorate([
    Prop()
], NumberVueUIComponent.prototype, "target", void 0);
__decorate([
    Watch('target.ui.selfProp.opt')
], NumberVueUIComponent.prototype, "watchTab", null);
NumberVueUIComponent = __decorate([
    Component({ template: `<div class='NumberVue'> <el-row> <el-col :span='label ? 4 : 0'>{{label}}</el-col> <el-col :span='label ? 20 : 24'> <el-input-number v-model="value" :label='label'></el-input-number> </el-col> </el-row> </div>` })
], NumberVueUIComponent);
var NumberVueUIComponent$1 = NumberVueUIComponent;

let TimePickerVueUIComponent = class TimePickerVueUIComponent extends Vue {
    constructor() {
        super(...arguments);
        this.value = '';
        this.type = 'datetime';
        this.placeholder = '';
    }
    mounted() {
        this.resetOpt();
    }
    resetOpt(val = this.target.ui.selfProp.opt) {
        this.value = val.value || '';
        this.type = val.type || 'datetime';
        this.placeholder = val.placeholder || '';
    }
    watchTab(val) {
        this.resetOpt(val);
    }
};
__decorate([
    Prop()
], TimePickerVueUIComponent.prototype, "target", void 0);
__decorate([
    Watch('target.ui.selfProp.opt')
], TimePickerVueUIComponent.prototype, "watchTab", null);
TimePickerVueUIComponent = __decorate([
    Component({ template: `<div class='TimePickerVue'> <el-date-picker v-model="value" :type="type" :placeholder="placeholder"> </el-date-picker> </div>` })
], TimePickerVueUIComponent);
var TimePickerVueUIComponent$1 = TimePickerVueUIComponent;

let TimeGroupVueUIComponent = class TimeGroupVueUIComponent extends Vue {
    constructor() {
        super(...arguments);
        this.year = '2020';
        this.report = 1;
    }
    mounted() {
        this.resetOpt();
    }
    resetOpt(val = this.target.ui.selfProp.opt) {
        this.year = val.year || '2020';
        this.report = val.report || 1;
    }
    watchTab(val) {
        this.resetOpt(val);
    }
};
__decorate([
    Prop()
], TimeGroupVueUIComponent.prototype, "target", void 0);
__decorate([
    Watch('target.ui.selfProp.opt')
], TimeGroupVueUIComponent.prototype, "watchTab", null);
TimeGroupVueUIComponent = __decorate([
    Component({ template: `<div class='TimeGroupVue'> <el-select v-model="year" filterable> <el-option v-for="(item, index) in target.year" :value="item.key" :label='item.value' :key="index"> </el-option> </el-select> <el-select v-model="report" filterable> <el-option v-for="(item, index) in target.report" :value="item.key" :label='item.value' :key="index"> </el-option> </el-select> </div>` })
], TimeGroupVueUIComponent);
var TimeGroupVueUIComponent$1 = TimeGroupVueUIComponent;

let SelectVueUIComponent = class SelectVueUIComponent extends Vue {
    constructor() {
        super(...arguments);
        this.value = '';
        this.optionsArray = [];
    }
    mounted() {
        console.log(this.target.ui.selfProp);
        this.resetSelfProp();
    }
    resetSelfProp(val = this.target.ui.selfProp) {
        this.value = val.opt.value || '';
        this.optionsArray = val.params.find(item => item.key == 'value').props.optionsArray;
    }
    watchTab(val) {
        this.resetSelfProp(val);
    }
};
__decorate([
    Prop()
], SelectVueUIComponent.prototype, "target", void 0);
__decorate([
    Watch('target.ui.selfProp', { deep: true })
], SelectVueUIComponent.prototype, "watchTab", null);
SelectVueUIComponent = __decorate([
    Component({ template: `<div class='SelectVue'> <el-select v-model="value" filterable> <el-option v-for="(item, index) in optionsArray" :value="item.key" :label='item.value' :key="index"> </el-option> </el-select> </div>` })
], SelectVueUIComponent);
var SelectVueUIComponent$1 = SelectVueUIComponent;

let CheckBoxVueUIComponent = class CheckBoxVueUIComponent extends Vue {
    constructor() {
        super(...arguments);
        this.label = '';
        this.value = '';
    }
    mounted() {
        this.resetOpt();
    }
    resetOpt(val = this.target.ui.selfProp.opt) {
        this.value = val.value || '';
        this.label = val.label || '';
    }
    watchTab(val) {
        this.resetOpt(val);
    }
};
__decorate([
    Prop()
], CheckBoxVueUIComponent.prototype, "target", void 0);
__decorate([
    Watch('target.ui.selfProp.opt')
], CheckBoxVueUIComponent.prototype, "watchTab", null);
CheckBoxVueUIComponent = __decorate([
    Component({ template: `<div class='CheckBoxVueUI'> <el-checkbox v-model="value">{{label}}</el-checkbox> </div>` })
], CheckBoxVueUIComponent);
var CheckBoxVueUIComponent$1 = CheckBoxVueUIComponent;

let CheckBoxGroupVueUIComponent = class CheckBoxGroupVueUIComponent extends Vue {
    constructor() {
        super(...arguments);
        this.value = [];
        this.optionsArray = [];
    }
    mounted() {
        console.log(this.target.ui.selfProp);
        this.resetSelfProp();
    }
    resetSelfProp(val = this.target.ui.selfProp) {
        this.value = val.opt.value || [];
        this.optionsArray = val.params.find(item => item.key == 'value').props.optionsArray;
    }
    watchTab(val) {
        this.resetSelfProp(val);
    }
};
__decorate([
    Prop()
], CheckBoxGroupVueUIComponent.prototype, "target", void 0);
__decorate([
    Watch('target.ui.selfProp', { deep: true })
], CheckBoxGroupVueUIComponent.prototype, "watchTab", null);
CheckBoxGroupVueUIComponent = __decorate([
    Component({ template: `<div class='CheckBoxGroupVueUI'> <el-checkbox-group v-model="value"> <el-checkbox v-for="(item, index) in optionsArray" :key='index' :label="item.key"> {{item.value}} </el-checkbox> </el-checkbox-group> </div>` })
], CheckBoxGroupVueUIComponent);
var CheckBoxGroupVueUIComponent$1 = CheckBoxGroupVueUIComponent;

let RadioVueUIComponent = class RadioVueUIComponent extends Vue {
    constructor() {
        super(...arguments);
        this.value = '';
        this.optionsArray = [];
    }
    mounted() {
        console.log(this.target.ui.selfProp);
        this.resetSelfProp();
    }
    resetSelfProp(val = this.target.ui.selfProp) {
        this.value = val.opt.value || '';
        this.optionsArray = val.params.find(item => item.key == 'value').props.optionsArray;
    }
    watchTab(val) {
        this.resetSelfProp(val);
    }
};
__decorate([
    Prop()
], RadioVueUIComponent.prototype, "target", void 0);
__decorate([
    Watch('target.ui.selfProp', { deep: true })
], RadioVueUIComponent.prototype, "watchTab", null);
RadioVueUIComponent = __decorate([
    Component({ template: `<div class='RadioVueUI'> <el-radio-group v-model="value" > <el-radio v-for="(item, index) in optionsArray" :label='item.key' :key="index"> {{item.value}} </el-radio> </el-radio-group> </div>` })
], RadioVueUIComponent);
var RadioVueUIComponent$1 = RadioVueUIComponent;

let MulSelectVueUIComponent = class MulSelectVueUIComponent extends Vue {
    constructor() {
        super(...arguments);
        this.value = [];
        this.optionsArray = [];
    }
    mounted() {
        console.log(this.target.ui.selfProp);
        this.resetSelfProp();
    }
    resetSelfProp(val = this.target.ui.selfProp) {
        this.value = val.opt.value || [];
        this.optionsArray = val.params.find(item => item.key == 'value').props.optionsArray;
    }
    watchTab(val) {
        this.resetSelfProp(val);
    }
};
__decorate([
    Prop()
], MulSelectVueUIComponent.prototype, "target", void 0);
__decorate([
    Watch('target.ui.selfProp', { deep: true })
], MulSelectVueUIComponent.prototype, "watchTab", null);
MulSelectVueUIComponent = __decorate([
    Component({ template: `<div class='MulSelectVueUI'> <el-select v-model="value" multiple filterable clearable> <el-option v-for="(item, index) in optionsArray" :value="item.key" :label='item.value' :key="index"> </el-option> </el-select> </div>` })
], MulSelectVueUIComponent);
var MulSelectVueUIComponent$1 = MulSelectVueUIComponent;

let IframeVueUIComponent = class IframeVueUIComponent extends Vue {
    constructor() {
        super(...arguments);
        this.src = '';
    }
    mounted() {
        console.log(this.target.ui);
        console.log(this.target.ui.selfProp.opt);
        this.resetOpt();
    }
    resetOpt(val = this.target.ui.selfProp.opt) {
        this.src = val.src || '';
    }
    watchTab(val) {
        this.resetOpt(val);
    }
};
__decorate([
    Prop()
], IframeVueUIComponent.prototype, "target", void 0);
__decorate([
    Watch('target.ui.selfProp.opt')
], IframeVueUIComponent.prototype, "watchTab", null);
IframeVueUIComponent = __decorate([
    Component({ template: `<div class='IframeVueUI'> <div class='IframeVueUI-block' v-if='!target.isCompiler'></div> <iframe v-if='target.isCompiler' :src="src" frameborder="0"></iframe> </div>` })
], IframeVueUIComponent);
var IframeVueUIComponent$1 = IframeVueUIComponent;

let TabelColSlot = class TabelColSlot extends Vue {
    render(h, data) {
        return this.tableCol.render(h, data, this.row, this.propkey);
    }
};
__decorate([
    Prop()
], TabelColSlot.prototype, "tableCol", void 0);
__decorate([
    Prop()
], TabelColSlot.prototype, "row", void 0);
__decorate([
    Prop()
], TabelColSlot.prototype, "propkey", void 0);
TabelColSlot = __decorate([
    Component({ template: `<div class='TableVueUI'> <el-table class="list-table" size="mini" :data="target.mergetList" v-loading="target.loading" fit stripe :show-header="target.mergeShowHeader" style="width: 99.9%" > <template v-for="(item, index) in target.mergeCols"> <el-table-column :key="index" :type="item.type" :label="item.label" :prop="item.prop" :sortable="item.sortable" :class-name="item.className" :width="item.width" :min-width="item.minWidth" :fixed="item.fixed" :show-overflow-tooltip="item.showOverflowTooltip" > <template slot-scope="scope"> <TabelColSlot :tableCol="item" :propkey="target.getTableKey(scope, item)" :row="target.getTableRow(scope, item)"></TabelColSlot> </template> </el-table-column> </template> </el-table> </div>` })
], TabelColSlot);
let TableVueUIComponent = class TableVueUIComponent extends Vue {
    constructor() {
        super(...arguments);
        this.value = '';
        this.prepend = '';
    }
    mounted() {
        console.log(this.target);
        this.resetOpt();
    }
    resetOpt(val = this.target.ui.selfProp.opt) {
        this.value = val.value || '';
        this.prepend = val.prepend || '';
    }
    watchTab(val) {
        this.resetOpt(val);
    }
};
__decorate([
    Prop()
], TableVueUIComponent.prototype, "target", void 0);
__decorate([
    Watch('target.ui.selfProp.opt')
], TableVueUIComponent.prototype, "watchTab", null);
TableVueUIComponent = __decorate([
    Component({ components: { TabelColSlot } })
], TableVueUIComponent);
var TableVueUIComponent$1 = TableVueUIComponent;

let TableDataConfigVueUIComponent = class TableDataConfigVueUIComponent extends Vue {
    constructor() {
        super(...arguments);
        this.activeName = 'column';
        this.typeArray = [{
                key: '',
                value: '默认'
            }, {
                key: 'selection',
                value: 'selection'
            }, {
                key: 'index',
                value: 'index'
            }, {
                key: 'expand',
                value: 'expand'
            },];
    }
    mounted() {
        console.log(this.target);
    }
};
__decorate([
    Prop()
], TableDataConfigVueUIComponent.prototype, "target", void 0);
TableDataConfigVueUIComponent = __decorate([
    Component({ template: `<div class='TableVueUI'> <div></div> <el-tabs v-model="activeName"> <el-tab-pane label="column 管理" name="column"> <el-row v-for="(item, index) in target.cols" :key="index"> <el-col> type: <el-select v-model="item.type" filterable> <el-option v-for="(item, index) in typeArray" :value="item.key" :label='item.value' :key="index"> </el-option> </el-select> </el-col> <el-col> <el-input v-model="item.label"> <template slot='prepend'> label </template> </el-input> </el-col> <el-col> <el-input v-model="item.prop"> <template slot='prepend'> prop </template> </el-input> </el-col> <el-col> <el-checkbox v-model="item.sortable">sortable</el-checkbox> </el-col> <el-col> <el-input v-model="item.className"> <template slot='prepend'> className </template> </el-input> </el-col> <el-col> <el-input v-model="item.width"> <template slot='prepend'> width </template> </el-input> </el-col> <el-col> <el-input v-model="item.minWidth"> <template slot='prepend'> minWidth </template> </el-input> </el-col> <el-col> <el-checkbox v-model="item.fixed">fixed</el-checkbox> </el-col> <el-col> <el-checkbox v-model="item.showOverflowTooltip">showOverflowTooltip</el-checkbox> </el-col> <span @click="target.addCol()" class='el-icon-circle-plus-outline'></span> <span v-if="index != 0" @click="target.delCol(index)" class='el-icon-remove-outline'></span> </el-row> </el-tab-pane> <el-tab-pane label="tableData 管理" name="tableData"> <slot></slot> </el-tab-pane> </el-tabs> </div>` })
], TableDataConfigVueUIComponent);
var TableDataConfigVueUIComponent$1 = TableDataConfigVueUIComponent;

Vue$1.use(ElementUI);
class EventListVueUI extends VueUI {
    constructor(params) {
        super(params);
        this.apiList = apiList;
        this.eventList = eventList;
    }
    renderInstance(render) {
        return render.createElement(EventListVueUIComponent$1, {
            props: { target: this }
        }, [render.vueRoot.$slots.default]);
    }
}
class BasicVueUI extends VueUI {
    constructor(params) {
        super(params);
        this.ui = this.props.ui;
        this.isCompiler = this.props.isCompiler;
    }
    renderInstance(render) {
        return render.createElement('div', {
            props: { target: this }
        }, [render.vueRoot.$slots.default]);
    }
}
class ContainerVueUI extends BasicVueUI {
    constructor(params) {
        super(params);
    }
    renderInstance(render) {
        return render.createElement(ContainerVueUIComponent$1, {
            props: { target: this }
        }, [render.vueRoot.$slots.default]);
    }
}
class CardContainerVueUI extends BasicVueUI {
    constructor(params) {
        super(params);
    }
    renderInstance(render) {
        return render.createElement(CardContainerVueUIComponent$1, {
            props: { target: this }
        }, [render.vueRoot.$slots.default]);
    }
}
class DialogContainerVueUI extends BasicVueUI {
    constructor(params) {
        super(params);
    }
    renderInstance(render) {
        return render.createElement(DialogContainerVueUIComponent$1, {
            props: { target: this }
        }, [render.vueRoot.$slots.default]);
    }
}
class ButtonVueUI extends BasicVueUI {
    constructor(params) {
        super(params);
    }
    renderInstance(render) {
        return render.createElement(ButtonVueUIComponent$1, {
            props: { target: this }
        }, [render.vueRoot.$slots.default]);
    }
}
class InputVueUI$3 extends BasicVueUI {
    constructor(params) {
        super(params);
    }
    renderInstance(render) {
        return render.createElement(InputVueUIComponent$1, {
            props: { target: this }
        }, [render.vueRoot.$slots.default]);
    }
}
class NumberVueUI$2 extends BasicVueUI {
    constructor(params) {
        super(params);
    }
    renderInstance(render) {
        return render.createElement(NumberVueUIComponent$1, {
            props: { target: this }
        }, [render.vueRoot.$slots.default]);
    }
}
class TimePickerVueUI extends BasicVueUI {
    constructor(params) {
        super(params);
    }
    renderInstance(render) {
        return render.createElement(TimePickerVueUIComponent$1, {
            props: { target: this }
        }, [render.vueRoot.$slots.default]);
    }
}
class TimeGroupVueUI extends BasicVueUI {
    constructor(params) {
        super(params);
        this.year = new Array(21).fill(2020).map((item, index) => item - index).map(item => {
            return {
                key: item,
                value: item
            };
        });
        this.report = [{
                key: 1,
                value: '年报'
            }, {
                key: 2,
                value: '三季'
            }, {
                key: 3,
                value: '中期'
            }, {
                key: 4,
                value: '一季'
            }];
    }
    renderInstance(render) {
        return render.createElement(TimeGroupVueUIComponent$1, {
            props: { target: this }
        }, [render.vueRoot.$slots.default]);
    }
}
class SelectVueUI$2 extends BasicVueUI {
    constructor(params) {
        super(params);
    }
    renderInstance(render) {
        return render.createElement(SelectVueUIComponent$1, {
            props: { target: this }
        }, [render.vueRoot.$slots.default]);
    }
}
class CheckBoxVueUI extends BasicVueUI {
    constructor(params) {
        super(params);
    }
    renderInstance(render) {
        return render.createElement(CheckBoxVueUIComponent$1, {
            props: { target: this }
        }, [render.vueRoot.$slots.default]);
    }
}
class CheckBoxGroupVueUI extends BasicVueUI {
    constructor(params) {
        super(params);
    }
    renderInstance(render) {
        return render.createElement(CheckBoxGroupVueUIComponent$1, {
            props: { target: this }
        }, [render.vueRoot.$slots.default]);
    }
}
class RadioVueUI extends BasicVueUI {
    constructor(params) {
        super(params);
    }
    renderInstance(render) {
        return render.createElement(RadioVueUIComponent$1, {
            props: { target: this }
        }, [render.vueRoot.$slots.default]);
    }
}
class MulSelectVueUI$2 extends BasicVueUI {
    constructor(params) {
        super(params);
    }
    renderInstance(render) {
        return render.createElement(MulSelectVueUIComponent$1, {
            props: { target: this }
        }, [render.vueRoot.$slots.default]);
    }
}
class IframeVueUI extends BasicVueUI {
    constructor(params) {
        super(params);
    }
    renderInstance(render) {
        return render.createElement(IframeVueUIComponent$1, {
            props: { target: this }
        }, [render.vueRoot.$slots.default]);
    }
}
class TableCol {
    constructor(params) {
        this.prop = params.prop || '';
        this.type = params.type || '';
        this.label = params.label || '';
        this.sortable = params.sortable || false;
        this.className = params.className || '';
        this.width = params.width || '';
        this.minWidth = params.minWidth || '100px';
        this.fixed = params.fixed || false;
        this.convert = params.convert || false;
        this.showOverflowTooltip = params.showOverflowTooltip || false;
        this.children = (params.children || []).map((item) => new TableCol(item));
    }
    render(h, data, row, key = this.prop) {
        if (this.convert) {
            return h('span', {}, [this.convert(h, data, this, row)]);
        }
        else {
            return h('span', {}, [row[key]]);
        }
    }
}
class TableVueUI extends BasicVueUI {
    constructor(params) {
        super(params);
        this.list = [];
        this.loading = false;
        this.cols = [];
        this.direction = 'vertical';
        this.showHeader = true;
        this.mergetList = [];
        this.mergeCols = [];
        this.mergeShowHeader = false;
        this.setData();
    }
    setData() {
        this.cols.push(new TableCol({ label: 'test', prop: 'test' }));
        this.cols.push(new TableCol({ label: 'aaaaa', prop: 'test2' }));
        this.list = [{
                test: "a",
                test2: 'v'
            }, {
                test: "b",
                test2: 'q'
            },];
        this.merge();
    }
    merge() {
        if (this.direction === 'vertical') {
            this.mergeShowHeader = this.showHeader;
            this.mergetList = this.list.concat();
            this.mergeCols = this.cols.concat();
        }
        else {
            this.mergeShowHeader = false;
            this.mergetList = this.cols.map(item => {
                return {
                    prop: item.prop
                };
            });
            this.mergeCols = [new TableCol({ prop: 'homeTitle' })].concat(this.list.map((item, index) => {
                return new TableCol({ prop: index.toString() });
            }));
        }
    }
    getTableRow(scope, item) {
        if (this.direction === 'vertical') {
            return scope.row;
        }
        else {
            if (item.prop == "homeTitle") {
                var target = this.cols.find(t => t.prop == scope.row.prop);
                if (target) {
                    return {
                        [scope.row.prop]: target.label
                    };
                }
                else {
                    return {
                        [scope.row.prop]: ''
                    };
                }
            }
            return this.list[item.prop];
        }
    }
    getTableKey(scope, item) {
        if (this.direction === 'vertical') {
            return item.prop;
        }
        else {
            return scope.row.prop;
        }
    }
    renderInstance(render) {
        return render.createElement(TableVueUIComponent$1, {
            props: { target: this }
        }, [render.vueRoot.$slots.default]);
    }
}
class TableDataConfigVueUI extends VueUI {
    constructor(params) {
        super(params);
        this.cols = [];
        this.data = [];
        this.simulate = new SimulateVueUI({});
        this.check();
    }
    addCol() {
        this.cols.push(new TableCol({}));
    }
    delCol(index) {
        this.cols.splice(index, 1);
    }
    check() {
        if (this.cols.length == 0) {
            this.addCol();
        }
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        var oldValue = this.value;
        this.value = value;
        this.check();
        if (oldValue != this.value) {
            this.onChange({
                val: this.value,
                oldVal: oldValue,
            });
        }
    }
    renderInstance(render) {
        return render.createElement(TableDataConfigVueUIComponent$1, {
            props: { target: this }
        }, [render.vueRoot.$slots.default, this.simulate.render(render)]);
    }
}

let apiParams = [{
        type: 'id',
        key: 'id',
        props: { label: 'id', show: false }
    }, {
        type: 'input',
        key: 'name',
        props: { label: '名称' }
    }, {
        type: 'select',
        key: 'config',
        props: { label: '名称', optionsArray: [{
                    key: 'get',
                    value: 'get'
                }, {
                    key: 'post',
                    value: 'post'
                }, {
                    key: 'postform',
                    value: 'postform'
                }, {
                    key: 'postjson',
                    value: 'postjson'
                }, {
                    key: 'postfile',
                    value: 'postfile'
                }, {
                    key: 'auto',
                    value: 'auto'
                },],
            configVisible: false }
    }, {
        type: 'object',
        key: 'getParam',
        props: { label: 'get参数' }
    }, {
        type: 'object',
        key: 'postParam',
        props: { label: 'post参数' }
    }];
let eventParams = [{
        type: 'id',
        key: 'id',
        props: { label: 'id', show: false }
    }, {
        type: 'input',
        key: 'name',
        props: { label: '名称' }
    }, {
        type: 'select',
        key: 'type',
        props: { label: '事件类型', optionsArray: [{
                    key: 'EventDispatcher',
                    value: 'EventDispatcher'
                }, {
                    key: 'ObserverSubject',
                    value: 'ObserverSubject'
                }],
            configVisible: false }
    }];
let outParams = [{
        type: 'eventList',
        key: 'tid',
        props: {
            label: 'id',
        }
    }, {
        type: 'select',
        key: 'key',
        props: {
            label: '事件类型',
            optionsArray: eventOptions.map(item => {
                return {
                    key: item,
                    value: item
                };
            }),
            configVisible: false
        }
    }];
let inParams = [{
        type: 'eventList',
        key: 'tid',
        props: {
            label: 'id',
        }
    }];

class GeneratePiece {
    constructor() {
        this.uiList = new VueUIList();
        this.uiList.addTemplate({
            key: '',
            value: VueUI,
        });
        this.uiList.addTemplate({
            key: 'input',
            value: InputVueUI$2,
        });
        this.uiList.addTemplate({
            key: 'array',
            value: ArrayVueUI$1,
        });
        this.uiList.addTemplate({
            key: 'object',
            value: ObjectVueUI$1,
        });
        this.uiList.addTemplate({
            key: 'mulSelect',
            value: MulSelectVueUI$1,
        });
        this.uiList.addTemplate({
            key: 'select',
            value: SelectVueUI$1,
        });
        this.uiList.addTemplate({
            key: 'number',
            value: NumberVueUI$1,
        });
        this.uiList.addTemplate({
            key: 'boolean',
            value: BooleanVueUI,
        });
    }
    add({ key, value }) {
        if (!this.uiList.getTemplate().find(item => item.key == key)) {
            this.uiList.addTemplate({
                key: key,
                value: value,
            });
        }
    }
    remove(name) {
        this.uiList.removeTemplate(name);
    }
    generate(list) {
        this.uiList.setList(list);
        return this.uiList.list;
    }
    render(render) {
        return this.uiList.getRenderList(render);
    }
    getValue() {
        return this.uiList.getValue();
    }
}
class ModuleGenrate extends GeneratePiece {
    constructor() {
        super();
        this.isCompiler = false;
        this.uiList.clearTemplate();
        this.add({
            key: '1',
            value: ContainerVueUI
        });
        this.add({
            key: '2',
            value: CardContainerVueUI
        });
        this.add({
            key: '3',
            value: DialogContainerVueUI
        });
        this.add({
            key: '4',
            value: ButtonVueUI
        });
        this.add({
            key: '5',
            value: InputVueUI$3
        });
        this.add({
            key: '6',
            value: NumberVueUI$2
        });
        this.add({
            key: '7',
            value: TimePickerVueUI
        });
        this.add({
            key: '8',
            value: TimeGroupVueUI
        });
        this.add({
            key: '9',
            value: SelectVueUI$2
        });
        this.add({
            key: '10',
            value: CheckBoxVueUI
        });
        this.add({
            key: '11',
            value: CheckBoxGroupVueUI
        });
        this.add({
            key: '12',
            value: RadioVueUI
        });
        this.add({
            key: '13',
            value: MulSelectVueUI$2
        });
        this.add({
            key: '17',
            value: TableVueUI
        });
        this.add({
            key: '18',
            value: IframeVueUI
        });
    }
    setTarget(ui) {
        this.uiList.setList([{
                key: ui.id,
                props: {
                    ui,
                    isCompiler: this.isCompiler
                },
                type: ui.typeId
            }]);
    }
}
class ApiGenerate extends GeneratePiece {
    constructor() {
        super();
        this.generate(apiParams);
    }
}
class EventGenerate extends GeneratePiece {
    constructor() {
        super();
        this.generate(eventParams);
    }
}
class InEventGenerate extends GeneratePiece {
    constructor() {
        super();
        this.add({
            key: 'eventList',
            value: EventListVueUI
        });
        this.generate(inParams);
    }
}
class OutEventGenerate extends GeneratePiece {
    constructor() {
        super();
        this.add({
            key: 'eventList',
            value: EventListVueUI
        });
        this.generate(outParams);
    }
}
class PropGeneratePiece extends GeneratePiece {
    constructor() {
        super();
        this.add({
            key: 'tableDataConfig',
            value: TableDataConfigVueUI
        });
        this.generate(outParams);
    }
}

export { ApiGenerate, EventGenerate, GeneratePiece, InEventGenerate, ModuleGenrate, OutEventGenerate, PropGeneratePiece, addApi, addEvent, apiList, basicModules, clearCurrentEl, compilerInstance, containerModules, continerModules, currentEl, editorInstance, eventList, generateModule, mergeModules, removeApi, removeEvent, restoreFromConfig, restoreFromEdit, restoreInstance, saveFromConfig, saveFromEdit, setCurrentModule, setEditorInstance };
