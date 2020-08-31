'use strict';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopDefault(ex) {
  return ex && _typeof(ex) === 'object' && 'default' in ex ? ex['default'] : ex;
}

require('axios');

var uiLogic = require('@mikefeng110808/ui-logic');

var Vue = _interopDefault(require('vue'));

var ElementUI = _interopDefault(require('element-ui'));

var vuePropertyDecorator = require('vue-property-decorator');

var DataList = /*#__PURE__*/function () {
  function DataList() {
    _classCallCheck(this, DataList);

    this.datas = [];
  }
  /**
   *add
   *
   * @param {Data} data
   * @memberof DataList
   */


  _createClass(DataList, [{
    key: "add",
    value: function add(data) {
      this.datas.push(data);
    }
    /**
     *remove
     *
     * @param {string} name
     * @memberof DataList
     */

  }, {
    key: "remove",
    value: function remove(name) {
      this.datas = this.datas.filter(function (data) {
        return data.name !== name;
      });
    }
    /**
     *clear
     *
     * @memberof DataList
     */

  }, {
    key: "clear",
    value: function clear() {
      this.datas = [];
    }
    /**
     *get
     *
     * @param {string} name
     * @memberof DataList
     */

  }, {
    key: "get",
    value: function get() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      return this.datas.filter(function (data) {
        return name === "" || data.name === name;
      });
    }
    /**
     *get
     *
     * @param {string} name
     * @return {any} any
     * @memberof DataList
     */

  }, {
    key: "find",
    value: function find() {
      var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      var target = this.datas.find(function (data) {
        return data.name === name;
      });
      var empty = this.datas.find(function (data) {
        return data.name === '';
      });
      return target ? target.data : empty ? empty.data : null;
    }
  }]);

  return DataList;
}();

var Storage = /*#__PURE__*/function () {
  function Storage() {
    _classCallCheck(this, Storage);

    this.storage = {};
  }
  /**
   *get
   *
   * @param {string} key
   * @memberof Storage
   */


  _createClass(Storage, [{
    key: "get",
    value: function get(key) {
      return this.storage[key];
    }
    /**
     *set
     *
     * @param {string} key
     * @param {any} value
     * @memberof Storage
     */

  }, {
    key: "set",
    value: function set(key, value) {
      this.storage[key] = value;
    }
    /**
     *remove
     *
     * @param {string} key
     * @memberof Storage
     */

  }, {
    key: "remove",
    value: function remove(key) {
      this.storage[key] = undefined;
    }
    /**
     *clear
     *
     * @memberof Storage
     */

  }, {
    key: "clear",
    value: function clear() {
      this.storage = {};
    }
  }]);

  return Storage;
}();
/**
 * Returns an array of HTML elements located under the point specified by x, y.
 * If the native elementsFromPoint function does not exist, a polyfill will be used.
 *
 * @param  {number} x : X position
 * @param  {number} y : Y position
 * @return {array} : Array of the elements under the point (x, y)
 */


var gennerateUUID = function gennerateUUID() {
  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
  return uuid;
};

var eventOptionsStr = "abort,animationcancel,animationend,animationiteration,animationstart,auxclick,blur,cancel,canplay,canplaythrough,change,click,close,contextmenu,cuechange,dblclick,drag,dragend,dragenter,dragexit,dragleave,dragover,dragstart,drop,durationchange,emptied,ended,error,focus,focusin,focusout,gotpointercapture,input,invalid,keydown,keypress,keyup,load,loadeddata,loadedmetadata,loadstart,lostpointercapture,mousedown,mouseenter,mouseleave,mousemove,mouseout,mouseover,mouseup,pause,play,playing,pointercancel,pointerdown,pointerenter,pointerleave,pointermove,pointerout,pointerover,pointerup,progress,ratechange,reset,resize,scroll,securitypolicyviolation,seeked,seeking,select,selectionchange,selectstart,stalled,submit,suspend,timeupdate,toggle,touchcancel,touchend,touchmove,touchstart,transitioncancel,transitionend,transitionrun,transitionstart,volumechange,waiting,wheel,fullscreenchange,fullscreenerror,copy,cut,paste";
var eventOptions = eventOptionsStr.split(',');

var Api = /*#__PURE__*/function () {
  function Api(opt) {
    _classCallCheck(this, Api);

    this.id = gennerateUUID();
    this.opt = opt;
    this.opt.id = opt.id || this.id;
  }

  _createClass(Api, [{
    key: "fetch",
    value: function fetch() {}
  }, {
    key: "setValue",
    value: function setValue(val) {
      this.opt.id = val.id || this.opt.id;
      this.opt.config = val.config || 'get';
      this.opt.name = val.name || '';
      this.opt.getParam = val.getParam || {};
      this.opt.postParam = val.postParam || {}; // this.uiList.setValue(val)
    }
  }]);

  return Api;
}();

var ApiList = /*#__PURE__*/function () {
  function ApiList() {
    _classCallCheck(this, ApiList);

    this.list = new DataList();
  }

  _createClass(ApiList, [{
    key: "add",
    value: function add(apiData) {
      var api = new Api(apiData);
      this.list.add({
        name: api.id || '',
        data: api
      });
      return api;
    }
  }, {
    key: "remove",
    value: function remove(id) {
      this.list.remove(id);
    }
  }, {
    key: "getList",
    value: function getList() {
      return this.list.get('').map(function (item) {
        return item.data;
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      this.list.clear();
    }
  }, {
    key: "save",
    value: function save(val) {}
  }]);

  return ApiList;
}();

var Event = /*#__PURE__*/function () {
  function Event(opt) {
    _classCallCheck(this, Event);

    this.id = opt.id || gennerateUUID();
    this.opt = opt;
  }

  _createClass(Event, [{
    key: "fetch",
    value: function fetch() {}
  }, {
    key: "setValue",
    value: function setValue(val) {
      this.opt.id = val.id || this.opt.id;
      this.opt.type = val.type || 'EventDispatcher';
      this.opt.name = val.name || '';
    }
  }]);

  return Event;
}();

var EventList = /*#__PURE__*/function () {
  function EventList() {
    _classCallCheck(this, EventList);

    this.list = new DataList();
  }

  _createClass(EventList, [{
    key: "add",
    value: function add(apiData) {
      var event = new Event(apiData);
      this.list.add({
        name: event.id,
        data: event
      });
      return event;
    }
  }, {
    key: "remove",
    value: function remove(id) {
      this.list.remove(id);
    }
  }, {
    key: "getList",
    value: function getList() {
      return this.list.get('').map(function (item) {
        return item.data;
      });
    }
  }, {
    key: "clear",
    value: function clear() {
      this.list.clear();
    }
  }, {
    key: "save",
    value: function save() {}
  }]);

  return EventList;
}();

var apiList = new ApiList();
var eventList = new EventList();

var addApi = function addApi() {
  return apiList.add({
    config: "get",
    name: '',
    getParam: [],
    postParam: []
  });
};

var removeApi = function removeApi(id) {
  apiList.remove(id);
};

var addEvent = function addEvent() {
  return eventList.add({
    name: '',
    type: 'EventDispatcher'
  });
};

var removeEvent = function removeEvent(id) {
  eventList.remove(id);
};

var ModuleUI = /*#__PURE__*/function (_uiLogic$UI) {
  _inherits(ModuleUI, _uiLogic$UI);

  var _super = _createSuper(ModuleUI);

  function ModuleUI() {
    var _this;

    _classCallCheck(this, ModuleUI);

    _this = _super.call(this);
    _this.id = gennerateUUID();
    _this.moduleIdList = [];
    _this.editable = true;
    _this.insertable = true;
    _this.selfProp = new ModuleSelfProp();
    return _this;
  }

  _createClass(ModuleUI, [{
    key: "getValue",
    value: function getValue() {
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
  }, {
    key: "setDom",
    value: function setDom(dom) {
      this.dom = dom;
    }
  }, {
    key: "setId",
    value: function setId(id) {
      this.id = id || gennerateUUID();
    }
  }, {
    key: "filterChildren",
    value: function filterChildren(instance) {
      return this.moduleIdList.find(function (item) {
        return item == instance.moduleId;
      });
    }
  }, {
    key: "addModuleId",
    value: function addModuleId(moduleId) {
      this.moduleIdList.push(moduleId);
    }
  }, {
    key: "removeModuleId",
    value: function removeModuleId(moduleId) {
      this.moduleIdList = this.moduleIdList.filter(function (item) {
        return item != moduleId;
      });
    }
  }]);

  return ModuleUI;
}(uiLogic.UI);

var ModuleSelfProp = /*#__PURE__*/function (_uiLogic$SelfProp) {
  _inherits(ModuleSelfProp, _uiLogic$SelfProp);

  var _super2 = _createSuper(ModuleSelfProp);

  function ModuleSelfProp() {
    _classCallCheck(this, ModuleSelfProp);

    return _super2.call(this);
  }

  _createClass(ModuleSelfProp, [{
    key: "getStyle",
    value: function getStyle() {
      return {
        width: 100,
        height: 100
      };
    }
  }, {
    key: "getRelativeStyle",
    value: function getRelativeStyle() {
      return {
        position: 'relative',
        top: 'auto',
        bottom: 'auto',
        right: 'auto',
        left: 'auto'
      };
    }
  }]);

  return ModuleSelfProp;
}(uiLogic.SelfProp);

var ContainerUI = /*#__PURE__*/function (_ModuleUI) {
  _inherits(ContainerUI, _ModuleUI);

  var _super3 = _createSuper(ContainerUI);

  function ContainerUI() {
    var _this2;

    _classCallCheck(this, ContainerUI);

    _this2 = _super3.call(this);
    _this2.insertable = true;
    return _this2;
  }

  return ContainerUI;
}(ModuleUI);

var ComponentSingleUI = /*#__PURE__*/function (_ModuleUI2) {
  _inherits(ComponentSingleUI, _ModuleUI2);

  var _super4 = _createSuper(ComponentSingleUI);

  function ComponentSingleUI() {
    var _this3;

    _classCallCheck(this, ComponentSingleUI);

    _this3 = _super4.call(this);
    _this3.insertable = false;
    return _this3;
  }

  return ComponentSingleUI;
}(ModuleUI);

var ComponentMultipleUI = /*#__PURE__*/function (_ComponentSingleUI) {
  _inherits(ComponentMultipleUI, _ComponentSingleUI);

  var _super5 = _createSuper(ComponentMultipleUI);

  function ComponentMultipleUI() {
    var _this4;

    _classCallCheck(this, ComponentMultipleUI);

    _this4 = _super5.call(this);
    _this4.insertable = false;
    return _this4;
  }

  return ComponentMultipleUI;
}(ComponentSingleUI);

var ModuleInstance = /*#__PURE__*/function (_uiLogic$UIInstance) {
  _inherits(ModuleInstance, _uiLogic$UIInstance);

  var _super6 = _createSuper(ModuleInstance);

  function ModuleInstance() {
    var _this5;

    _classCallCheck(this, ModuleInstance);

    _this5 = _super6.call(this);
    _this5.moduleId = gennerateUUID();
    _this5.children = [];
    _this5.target = new ModuleUI();
    _this5.canDrag = true;
    return _this5;
  }

  _createClass(ModuleInstance, [{
    key: "setTarget",
    value: function setTarget(target) {
      this.target = target;
    }
  }, {
    key: "combi",
    value: function combi(target) {
      var module = new ModuleInstance();
      module.setTarget(target);
      this.children.push(module);
      this.target.addModuleId(module.moduleId);
      return module;
    }
  }, {
    key: "unCombi",
    value: function unCombi(moduleId) {
      var module = this.findContainUI(this, moduleId);
      console.log(module);

      if (module) {
        module.target.removeModuleId(moduleId);
        module.children = module.children.filter(function (t) {
          return t.moduleId != moduleId;
        });
      }
    }
  }, {
    key: "findContainUI",
    value: function findContainUI(tree, moduleId) {
      var _this6 = this;

      if (tree.children.find(function (item) {
        return item.moduleId == moduleId;
      })) {
        return tree;
      } else if (tree.children.length > 0) {
        var target = null;
        tree.children.forEach(function (item) {
          target = _this6.findContainUI(item, moduleId) || target;
        });
        return target;
      } else {
        return null;
      }
    }
  }, {
    key: "resetRelativeStyle",
    value: function resetRelativeStyle() {
      var style = this.target.selfProp.getRelativeStyle();

      for (var _i = 0, _Object$entries = Object.entries(style); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        this.target.style[key] = value;
      }
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      var _this7 = this;

      return this.children.filter(function (item) {
        return _this7.target.filterChildren(item);
      });
    }
  }, {
    key: "setValue",
    value: function setValue(data) {}
  }]);

  return ModuleInstance;
}(uiLogic.UIInstance);

var ContainerSelfProp = /*#__PURE__*/function (_ModuleSelfProp) {
  _inherits(ContainerSelfProp, _ModuleSelfProp);

  var _super7 = _createSuper(ContainerSelfProp);

  function ContainerSelfProp() {
    _classCallCheck(this, ContainerSelfProp);

    return _super7.call(this);
  }

  _createClass(ContainerSelfProp, [{
    key: "getStyle",
    value: function getStyle() {
      return {
        width: "100%",
        height: "200px",
        background: '',
        display: 'block',
        position: 'relative'
      };
    }
  }]);

  return ContainerSelfProp;
}(ModuleSelfProp);

var BasicSelfProp = /*#__PURE__*/function (_ModuleSelfProp2) {
  _inherits(BasicSelfProp, _ModuleSelfProp2);

  var _super8 = _createSuper(BasicSelfProp);

  function BasicSelfProp() {
    _classCallCheck(this, BasicSelfProp);

    return _super8.call(this);
  }

  _createClass(BasicSelfProp, [{
    key: "getStyle",
    value: function getStyle() {
      return {
        width: "100%",
        height: "70px",
        background: '',
        display: 'inline-block'
      };
    }
  }]);

  return BasicSelfProp;
}(ModuleSelfProp);

var MergeSelfProp = /*#__PURE__*/function (_ModuleSelfProp3) {
  _inherits(MergeSelfProp, _ModuleSelfProp3);

  var _super9 = _createSuper(MergeSelfProp);

  function MergeSelfProp() {
    _classCallCheck(this, MergeSelfProp);

    return _super9.call(this);
  }

  _createClass(MergeSelfProp, [{
    key: "getStyle",
    value: function getStyle() {
      return {
        width: "100%",
        height: "500px",
        background: '',
        display: 'inline-block'
      };
    }
  }]);

  return MergeSelfProp;
}(ModuleSelfProp);

var CardContainerSelfProp = /*#__PURE__*/function (_ContainerSelfProp) {
  _inherits(CardContainerSelfProp, _ContainerSelfProp);

  var _super10 = _createSuper(CardContainerSelfProp);

  function CardContainerSelfProp() {
    var _this8;

    _classCallCheck(this, CardContainerSelfProp);

    _this8 = _super10.call(this);
    _this8.opt = {
      tab: ['选项1']
    };
    return _this8;
  }

  return CardContainerSelfProp;
}(ContainerSelfProp);

var CardContainerUI = /*#__PURE__*/function (_ContainerUI) {
  _inherits(CardContainerUI, _ContainerUI);

  var _super11 = _createSuper(CardContainerUI);

  function CardContainerUI() {
    var _this9;

    _classCallCheck(this, CardContainerUI);

    _this9 = _super11.call(this);
    _this9.activeCard = '';
    return _this9;
  }

  _createClass(CardContainerUI, [{
    key: "filterChildren",
    value: function filterChildren(instance) {
      var _this10 = this;

      return this.moduleIdList.find(function (item) {
        return item.moduleId == instance.moduleId && _this10.activeCard == item.tab;
      });
    }
  }, {
    key: "addModuleId",
    value: function addModuleId(moduleId) {
      this.moduleIdList.push({
        moduleId: moduleId,
        tab: this.activeCard
      });
    }
  }, {
    key: "removeModuleId",
    value: function removeModuleId(moduleId) {
      this.moduleIdList = this.moduleIdList.filter(function (item) {
        return item.moduleId != moduleId;
      });
    }
  }]);

  return CardContainerUI;
}(ContainerUI);

var ButtonSelfProp = /*#__PURE__*/function (_BasicSelfProp) {
  _inherits(ButtonSelfProp, _BasicSelfProp);

  var _super12 = _createSuper(ButtonSelfProp);

  function ButtonSelfProp() {
    var _this11;

    _classCallCheck(this, ButtonSelfProp);

    _this11 = _super12.call(this);
    _this11.opt = {
      label: '提取数据'
    };
    return _this11;
  }

  return ButtonSelfProp;
}(BasicSelfProp);

var InputSelfProp = /*#__PURE__*/function (_BasicSelfProp2) {
  _inherits(InputSelfProp, _BasicSelfProp2);

  var _super13 = _createSuper(InputSelfProp);

  function InputSelfProp() {
    var _this12;

    _classCallCheck(this, InputSelfProp);

    _this12 = _super13.call(this);
    _this12.opt = {
      value: '测试',
      prepend: ''
    };
    return _this12;
  }

  return InputSelfProp;
}(BasicSelfProp);

var NumberSelfProp = /*#__PURE__*/function (_BasicSelfProp3) {
  _inherits(NumberSelfProp, _BasicSelfProp3);

  var _super14 = _createSuper(NumberSelfProp);

  function NumberSelfProp() {
    var _this13;

    _classCallCheck(this, NumberSelfProp);

    _this13 = _super14.call(this);
    _this13.opt = {
      value: 0,
      label: ''
    };
    return _this13;
  }

  return NumberSelfProp;
}(BasicSelfProp);

var TimePickerSelfProp = /*#__PURE__*/function (_BasicSelfProp4) {
  _inherits(TimePickerSelfProp, _BasicSelfProp4);

  var _super15 = _createSuper(TimePickerSelfProp);

  function TimePickerSelfProp() {
    var _this14;

    _classCallCheck(this, TimePickerSelfProp);

    _this14 = _super15.call(this);
    _this14.opt = {
      value: 0,
      placeholder: '',
      type: 'datetime'
    };
    return _this14;
  }

  return TimePickerSelfProp;
}(BasicSelfProp);

var TimeGroupSelfProp = /*#__PURE__*/function (_BasicSelfProp5) {
  _inherits(TimeGroupSelfProp, _BasicSelfProp5);

  var _super16 = _createSuper(TimeGroupSelfProp);

  function TimeGroupSelfProp() {
    var _this15;

    _classCallCheck(this, TimeGroupSelfProp);

    _this15 = _super16.call(this);
    _this15.opt = {
      year: 2020,
      report: 1
    };
    return _this15;
  }

  return TimeGroupSelfProp;
}(BasicSelfProp);

var SelectSelfProp = /*#__PURE__*/function (_BasicSelfProp6) {
  _inherits(SelectSelfProp, _BasicSelfProp6);

  var _super17 = _createSuper(SelectSelfProp);

  function SelectSelfProp() {
    var _this16;

    _classCallCheck(this, SelectSelfProp);

    _this16 = _super17.call(this);
    _this16.opt = {
      value: ''
    };
    return _this16;
  }

  return SelectSelfProp;
}(BasicSelfProp);

var CheckboxSelfProp = /*#__PURE__*/function (_BasicSelfProp7) {
  _inherits(CheckboxSelfProp, _BasicSelfProp7);

  var _super18 = _createSuper(CheckboxSelfProp);

  function CheckboxSelfProp() {
    var _this17;

    _classCallCheck(this, CheckboxSelfProp);

    _this17 = _super18.call(this);
    _this17.opt = {
      value: '',
      label: 'test'
    };
    return _this17;
  }

  return CheckboxSelfProp;
}(BasicSelfProp);

var CheckBoxGroupSelfProp = /*#__PURE__*/function (_BasicSelfProp8) {
  _inherits(CheckBoxGroupSelfProp, _BasicSelfProp8);

  var _super19 = _createSuper(CheckBoxGroupSelfProp);

  function CheckBoxGroupSelfProp() {
    var _this18;

    _classCallCheck(this, CheckBoxGroupSelfProp);

    _this18 = _super19.call(this);
    _this18.opt = {
      value: []
    };
    return _this18;
  }

  return CheckBoxGroupSelfProp;
}(BasicSelfProp);

var RadioSelfProp = /*#__PURE__*/function (_BasicSelfProp9) {
  _inherits(RadioSelfProp, _BasicSelfProp9);

  var _super20 = _createSuper(RadioSelfProp);

  function RadioSelfProp() {
    var _this19;

    _classCallCheck(this, RadioSelfProp);

    _this19 = _super20.call(this);
    _this19.opt = {
      value: ''
    };
    return _this19;
  }

  return RadioSelfProp;
}(BasicSelfProp);

var MulSelectSelfProp = /*#__PURE__*/function (_BasicSelfProp10) {
  _inherits(MulSelectSelfProp, _BasicSelfProp10);

  var _super21 = _createSuper(MulSelectSelfProp);

  function MulSelectSelfProp() {
    var _this20;

    _classCallCheck(this, MulSelectSelfProp);

    _this20 = _super21.call(this);
    _this20.opt = {
      value: ''
    };
    return _this20;
  }

  return MulSelectSelfProp;
}(BasicSelfProp);

var IframeSelfProp = /*#__PURE__*/function (_MergeSelfProp) {
  _inherits(IframeSelfProp, _MergeSelfProp);

  var _super22 = _createSuper(IframeSelfProp);

  function IframeSelfProp() {
    var _this21;

    _classCallCheck(this, IframeSelfProp);

    _this21 = _super22.call(this);
    _this21.opt = {
      src: ''
    };
    return _this21;
  }

  return IframeSelfProp;
}(MergeSelfProp);

var container = [{
  id: '1',
  name: "基本容器",
  selfProp: ContainerSelfProp,
  UI: ContainerUI,
  params: [{
    type: 'input',
    key: 'input',
    props: {
      label: 'input'
    },
    value: ''
  }, {
    type: 'array',
    key: 'array',
    props: {
      label: 'array'
    },
    value: []
  }, {
    type: 'object',
    key: 'object',
    props: {
      label: 'object'
    },
    value: {}
  }, {
    type: 'number',
    key: 'number',
    props: {
      label: 'number'
    },
    value: 0
  }, {
    type: 'select',
    key: 'select',
    props: {
      label: 'select'
    },
    value: ''
  }, {
    type: 'mulSelect',
    key: 'mulSelect',
    props: {
      label: 'mulSelect'
    },
    value: []
  }]
}, {
  name: "选项卡",
  id: '2',
  selfProp: CardContainerSelfProp,
  UI: CardContainerUI,
  params: [{
    type: 'array',
    key: 'tab',
    props: {
      label: '选项卡'
    }
  }]
}, {
  name: "弹窗",
  id: '3',
  selfProp: ContainerSelfProp,
  UI: ContainerUI
}];
var basic = [{
  name: "按钮",
  id: '4',
  selfProp: ButtonSelfProp,
  UI: ComponentSingleUI,
  params: [{
    type: 'input',
    key: 'label',
    props: {
      label: '描述'
    }
  }]
}, {
  name: "输入框",
  id: '5',
  selfProp: InputSelfProp,
  UI: ComponentSingleUI,
  params: [{
    type: 'input',
    key: 'value',
    props: {
      label: '值'
    }
  }, {
    type: 'input',
    key: 'prepend',
    props: {
      label: '前缀'
    }
  }]
}, {
  name: "数字输入框",
  id: '6',
  selfProp: NumberSelfProp,
  UI: ComponentSingleUI,
  params: [{
    type: 'input',
    key: 'value',
    props: {
      label: '值'
    }
  }, {
    type: 'input',
    key: 'label',
    props: {
      label: '标签'
    }
  }]
}, {
  name: "日期选择",
  id: '7',
  selfProp: TimePickerSelfProp,
  UI: ComponentSingleUI,
  params: [{
    type: 'input',
    key: 'value',
    props: {
      label: '值'
    }
  }, {
    type: 'input',
    key: 'placeholder',
    props: {
      label: 'placeholder'
    }
  }, {
    type: 'select',
    key: 'type',
    props: {
      label: '日期类型',
      optionsArray: [{
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
      }],
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
    props: {
      label: '日期类型',
      optionsArray: new Array(21).fill(2020).map(function (item, index) {
        return item - index;
      }).map(function (item) {
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
    props: {
      label: '日期类型',
      optionsArray: [{
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
    props: {
      label: '日期类型',
      optionsArray: [{
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
    key: 'value'
  }, {
    type: 'input',
    key: 'label'
  }]
}, {
  name: "多选框组",
  id: '11',
  selfProp: CheckBoxGroupSelfProp,
  UI: ComponentSingleUI,
  params: [{
    type: 'mulSelect',
    key: 'value',
    props: {
      optionsArray: [{
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
  name: "单选框组",
  id: '12',
  selfProp: RadioSelfProp,
  UI: ComponentSingleUI,
  params: [{
    type: 'select',
    key: 'value',
    props: {
      label: '日期类型',
      optionsArray: [{
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
    props: {
      optionsArray: [{
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
}];
var merge = [{
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
    key: 'config'
  }]
}, {
  name: "嵌入式页面",
  id: '18',
  selfProp: IframeSelfProp,
  UI: ComponentMultipleUI,
  params: [{
    type: 'input',
    key: 'src'
  }]
}];
var basicModules = [];
var continerModules = [];
var mergeModules = [];

var addBasic = function addBasic(props) {
  basicModules.push(props);
};

var addContiner = function addContiner(props) {
  continerModules.push(props);
};

var addMerge = function addMerge(props) {
  mergeModules.push(props);
};

basic.forEach(function (item) {
  addBasic(item);
});
container.forEach(function (item) {
  addContiner(item);
});
merge.forEach(function (item) {
  addMerge(item);
});

var generateModule = function generateModule(props) {
  var target = new props.UI();
  target.typeId = props.id;
  target.setSelfProp(new props.selfProp());
  var style = target.selfProp.getStyle();

  for (var _i2 = 0, _Object$entries2 = Object.entries(style); _i2 < _Object$entries2.length; _i2++) {
    var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
        key = _Object$entries2$_i[0],
        value = _Object$entries2$_i[1];

    target.style[key] = value;
  }

  target.selfProp.setParam(props.params);
  return target;
};

exports.currentEl = null;

var setCurrentModule = function setCurrentModule(target) {
  exports.currentEl = target;
};

var clearCurrentEl = function clearCurrentEl() {
  exports.currentEl = null;
};

var EditorInstance = /*#__PURE__*/function () {
  function EditorInstance() {
    _classCallCheck(this, EditorInstance);

    this.active = undefined;
    this.isRelative = true;
    this.borderColor = '#bdbdbd';
  }

  _createClass(EditorInstance, [{
    key: "setActive",
    value: function setActive(instance) {
      this.active = instance;
    }
  }, {
    key: "deleteActive",
    value: function deleteActive() {
      if (this.active) {
        containerModules.unCombi(this.active.moduleId);
      }
    }
  }]);

  return EditorInstance;
}();

var editorInstance = new EditorInstance();

var setEditorInstance = function setEditorInstance(instance) {
  editorInstance.setActive(instance);
};

var containerModules = new ModuleInstance();
containerModules.canDrag = false;
containerModules.target.style.width = "100%";
containerModules.target.style.height = "100%";
containerModules.target.style.overflow = 'auto';

var LocalStorage = /*#__PURE__*/function (_Storage) {
  _inherits(LocalStorage, _Storage);

  var _super23 = _createSuper(LocalStorage);

  function LocalStorage() {
    var _this22;

    _classCallCheck(this, LocalStorage);

    _this22 = _super23.call(this);
    _this22.storage = localStorage;
    return _this22;
  }
  /**
   *get
   *
   * @param {string} key
   * @memberof Storage
   */


  _createClass(LocalStorage, [{
    key: "get",
    value: function get(key) {
      var value = this.storage.getItem(key);

      if (value) {
        value = decodeURIComponent(value);
      }

      try {
        value = JSON.parse(value);
      } catch (e) {}

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

  }, {
    key: "set",
    value: function set(key, value) {
      if (_typeof(value) == "object") {
        value = JSON.stringify(value);
      }

      try {
        value = encodeURIComponent(value);
      } catch (e) {}

      this.storage.setItem(key, value);
    }
    /**
     *remove
     *
     * @param {string} key
     * @memberof Storage
     */

  }, {
    key: "remove",
    value: function remove(key) {
      this.storage.setItem(key, undefined);
    }
    /**
     *clear
     *
     * @memberof Storage
     */

  }, {
    key: "clear",
    value: function clear() {
      this.storage.clear();
    }
  }]);

  return LocalStorage;
}(Storage);

var storage = new LocalStorage();

var saveFromEdit = function saveFromEdit() {
  storage.set('saveedit', containerModules.getValue());
};

var restoreFromEdit = function restoreFromEdit() {
  var res = storage.get('saveedit');
  restoreInstance(containerModules, res);
};

var restoreInstance = function restoreInstance(instance, res) {
  instance.moduleId = res.moduleId;
  instance.canDrag = res.canDrag;
  var tc = basic.concat(container, merge).find(function (item) {
    return item.id == res.target.typeId;
  });
  var TargetConstructor = tc ? tc : {
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
  (res.target.eventBind.inValue || []).forEach(function (item) {
    var event = instance.target.eventBind.addIn();
    event.setValue(item);
  });
  (res.target.eventBind.outValue || []).forEach(function (item) {
    var event = instance.target.eventBind.addOut();
    event.setValue(item);
  });
  instance.target.eventBind.save();
  instance.target.selfProp = new TargetConstructor.selfProp();
  instance.target.selfProp.setParam(TargetConstructor.params || []);
  instance.target.selfProp.setValue(res.target.selfProp.value);
  instance.target.style.setValue(res.target.style.value); // container.target = new ContainerUI()

  instance.children = res.children.map(function (item) {
    var module = restoreInstance(new ModuleInstance(), item);
    return module;
  });
  return instance;
};

var saveFromConfig = function saveFromConfig() {
  var apiValue = apiList.getList().map(function (item) {
    return item.opt;
  });
  var eventValue = eventList.getList().map(function (item) {
    return item.opt;
  });
  storage.set('saveConfig', {
    apiValue: apiValue,
    eventValue: eventValue
  });
};

var restoreFromConfig = function restoreFromConfig() {
  var res = storage.get('saveConfig');
  apiList.clear();
  eventList.clear();
  res = res ? res : {
    apiValue: [],
    eventValue: []
  };
  (res.apiValue || []).forEach(function (item) {
    var api = addApi();
    api.setValue(item);
  });
  (res.eventValue || []).forEach(function (item) {
    var event = addEvent();
    event.setValue(item);
  });
};

var compilerInstance = new ModuleInstance();
var res = storage.get('saveedit');

if (res) {
  restoreInstance(compilerInstance, res);
}

var SingleUI = /*#__PURE__*/function () {
  function SingleUI(params) {
    _classCallCheck(this, SingleUI);

    this.key = params.key || ""; //键

    this.props = _objectSpread({
      label: "",
      required: "",
      data: [],
      disabled: false,
      show: true,
      placeholder: ""
    }, params.props); //属性列表包含其他属性

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


  _createClass(SingleUI, [{
    key: "dataFind",
    value: function dataFind(data) {
      var result = null;
      (this.props.data || []).forEach(function (item) {
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

  }, {
    key: "setValue",
    value: function setValue(value) {
      var oldValue = this.value;
      this.value = value;

      if (oldValue != this.value) {
        this.onChange({
          val: this.value,
          oldVal: oldValue
        });
      }
    }
    /**
     *getKey
     * @returns string
     * @memberof SingleUI
     */

  }, {
    key: "getKey",
    value: function getKey() {
      return this.key;
    }
    /**
     *getValue
     * @returns any
     * @memberof SingleUI
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
    /**
     *hasChange
     * @returns boolean
     * @memberof SingleUI
     */

  }, {
    key: "hasChange",
    value: function hasChange() {
      return !(this.getValue() == "");
    }
    /**
     *onChange
     * @param  ({val, oldVal})
     * @returns ({val, oldVal})
     * @memberof SingleUI
     */

  }, {
    key: "onChange",
    value: function onChange(_ref) {
      var val = _ref.val,
          oldVal = _ref.oldVal;
      return {
        val: val,
        oldVal: oldVal
      };
    }
    /**
     *getValid
     *
     * @returns Promise<validPayload>
     * @memberof SingleUI
     */

  }, {
    key: "getValid",
    value: function getValid() {
      var _this23 = this;

      var result = {
        success: true,
        message: "",
        type: "success"
      };
      return new Promise(function (resolve) {
        if (!_this23.key) {
          resolve(result);
          return;
        }

        if (_this23.props.required && !_this23.hasChange()) {
          result = {
            success: false,
            message: _this23.props.label || "",
            type: "requiredEmpty"
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

  }, {
    key: "setDisabled",
    value: function setDisabled() {
      var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.props.disabled = flag;
      return this.props.disabled;
    }
    /**
     *getKeyValue
     * @returns SingleUIValuePayload
     * @memberof SingleUI
     */

  }, {
    key: "getKeyValue",
    value: function getKeyValue() {
      return {
        key: this.getKey(),
        value: this.getValue(),
        children: this.children.map(function (item) {
          return item.getKeyValue();
        })
      };
    }
    /**
     *setKeyValue
     * @param {SingleUIValuePayload} ({ key, value, children })
     * @memberof SingleUI
     */

  }, {
    key: "setKeyValue",
    value: function setKeyValue(_ref2) {
      var _this24 = this;

      var key = _ref2.key,
          value = _ref2.value,
          children = _ref2.children;

      if (this.getKey() != "" && this.getKey() == key) {
        this.setValue(value);
        children.forEach(function (item) {
          var target = _this24.children.find(function (target) {
            return item.key == target.getKey();
          });

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

  }, {
    key: "getAllItems",
    value: function getAllItems() {
      return this.children.map(function (item) {
        return item.getAllItems();
      }).concat(this);
    }
    /**
     *getCanRender
     * @returns boolean
     * @memberof SingleUI
     */

  }, {
    key: "getCanRender",
    value: function getCanRender() {
      return this.canRender || this.rawComponents.length == 0;
    }
    /**
     *render
     *
     * @memberof SingleUI
     */

  }, {
    key: "render",
    value: function render() {
      return;
    }
  }]);

  return SingleUI;
}();

var UIList = /*#__PURE__*/function () {
  function UIList() {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var options = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, UIList);

    this.options = options || {
      needValidHidden: false
    };
    this.needValidHidden = this.options.needValidHidden;
    this.rawList = list;
    this.list = [];
    this.templateList = [];
    this.componentHasRendered = new DataList();
    this.classTarget = this instanceof UIList ? this.constructor : void 0;
    this.reset();
  }
  /**
   *reset
   * @param {SingleUIPayload} list
   * @memberof UIList
   */


  _createClass(UIList, [{
    key: "setList",
    value: function setList(list) {
      this.rawList = list;
      this.list = [];
      this.reset();
    }
    /**
     *reset
     *
     * @memberof UIList
     */

  }, {
    key: "reset",
    value: function reset() {
      var _this25 = this;

      this.list = this.rawList.map(function (item) {
        var target = _this25.convert(item); // 需要根据类型判断使用的


        if (target.children) {
          target.children = new _this25.classTarget(target.children, _this25.options).list;
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

  }, {
    key: "addTemplate",
    value: function addTemplate(_ref3) {
      var key = _ref3.key,
          value = _ref3.value;
      var rawValue = this.getValue();
      var target = this.templateList.find(function (item) {
        return item.key == key;
      });

      if (target) {
        target.value = value;
      } else {
        this.templateList.push({
          key: key,
          value: value
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

  }, {
    key: "removeTemplate",
    value: function removeTemplate(key) {
      var rawValue = this.getValue();
      this.templateList = this.templateList.filter(function (item) {
        return item.key !== key;
      });
      this.reset();
      this.setValue(rawValue);
    }
    /**
     *clearTemplate
     *
     * @memberof UIList
     */

  }, {
    key: "clearTemplate",
    value: function clearTemplate() {
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

  }, {
    key: "getTemplate",
    value: function getTemplate() {
      return this.templateList;
    }
    /**
     *convert
     * @private
     * @param {SingleUIPayload} item
     * @memberof UIList
     */

  }, {
    key: "convert",
    value: function convert(item) {
      var target = this.templateList.find(function (i) {
        return i.key == item.type;
      });

      if (target && target.value) {
        return new target.value(item);
      } else {
        return this.convertSinlgeUI(item);
      }
    }
  }, {
    key: "convertSinlgeUI",
    value: function convertSinlgeUI(item) {
      return new SingleUI(item);
    }
    /**
     *getValid
     *
     * @returns Promise<validPayload>
     * @memberof UIList
     */

  }, {
    key: "getValid",
    value: function getValid() {
      var _this26 = this;

      // 子节点查询
      var valid = this.getAllItems().filter(function (item) {
        return _this26.needValidHidden || item.props.show != false;
      }).map(function (item) {
        return item.getValid();
      }, []);
      return new Promise(function (resolve) {
        Promise.all(valid).then(function (res) {
          var fails = res.filter(function (target) {
            return !target.success;
          });
          resolve({
            success: fails.length == 0,
            message: fails.length > 0 ? fails[0].message : "",
            type: fails.length > 0 ? fails[0].type : "success"
          });
        });
      });
    }
    /**
     *setValue
     * @param {SingleUIValuePayload} data
     * @memberof UIList
     */

  }, {
    key: "setValue",
    value: function setValue(data) {
      var _this27 = this;

      // [{key:"",value:"", children: [{key:"",value:"", children:[]}]}]
      data.forEach(function (item) {
        var target = _this27.list.find(function (target) {
          return item.key == target.getKey();
        });

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

  }, {
    key: "getValue",
    value: function getValue() {
      // [{key:"",value:"", children: [{key:"",value:"", children:[]}]}]
      return this.list.map(function (item) {
        return item.getKeyValue();
      });
    }
    /**
     *getAllItems
     * @returns SingleUI[]
     * @memberof UIList
     */

  }, {
    key: "getAllItems",
    value: function getAllItems() {
      return this.list.reduce(function (total, item) {
        total = total.concat(item);
        return total;
      }, []);
    }
    /**
     *loadComponents
     * @returns Promise
     * @memberof UIList
     */

  }, {
    key: "loadComponents",
    value: function loadComponents() {
      var _this28 = this;

      return new Promise(function (resolve) {
        var needRender = _this28.getNeedRender();

        Promise.all(needRender.map(function (key) {
          return _this28.handleComponentKey(key);
        })).then(function () {
          resolve();
        });
      });
    }
    /**
     *getNeedRender
     * @returns string[]
     * @memberof UIList
     */

  }, {
    key: "getNeedRender",
    value: function getNeedRender() {
      return Array.from(new Set(this.getAllItems().reduce(function (total, item) {
        total = total.concat(item.getCanRender() ? [] : item.rawComponents);
        return total;
      }, [])));
    }
    /**
     *render
     * @returns Promise
     * @memberof UIList
     */

  }, {
    key: "load",
    value: function load() {
      var _this29 = this;

      return this.loadComponents().then(function () {
        var keys = _this29.componentHasRendered.get('key').map(function (item) {
          return item.data;
        });

        _this29.getAllItems().forEach(function (item) {
          if (item.canRender === false) {
            item.canRender = item.rawComponents.map(function (target) {
              return keys.includes(target);
            }).reduce(function (total, current) {
              return total && current;
            }, true);
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.getAllItems().map(function (item) {
        return item.render();
      });
    }
    /**
     *handleComponentKey
     * @param {any} key
     * @returns Promise
     * @memberof UIList
     */

  }, {
    key: "handleComponentKey",
    value: function handleComponentKey(key) {
      var _this30 = this;

      return new Promise(function (resolve) {
        _this30.componentHasRendered.add({
          name: 'key',
          data: key
        });

        resolve();
      });
    }
  }]);

  return UIList;
}();

var LifeCycle = /*#__PURE__*/function () {
  function LifeCycle(lifeCycle) {
    _classCallCheck(this, LifeCycle);
  }

  _createClass(LifeCycle, [{
    key: "mounted",
    value: function mounted() {}
  }]);

  return LifeCycle;
}();

var VueUI = /*#__PURE__*/function (_SingleUI) {
  _inherits(VueUI, _SingleUI);

  var _super24 = _createSuper(VueUI);

  function VueUI(params) {
    var _this31;

    _classCallCheck(this, VueUI);

    _this31 = _super24.call(this, params);
    _this31.renderComponent = undefined;
    _this31.lifeCycle = new LifeCycle(params.props ? params.props.lifeCycle : {});
    return _this31;
  }

  _createClass(VueUI, [{
    key: "render",
    value: function render(_render, props) {
      if (!this.getCanRender()) {
        return _render.createElement();
      } else {
        return this.renderInstance(_render, props);
      }
    }
  }, {
    key: "renderInstance",
    value: function renderInstance(render, props) {
      return render.createElement(this.renderComponent || 'div', // 标签名称
      _objectSpread(_objectSpread({}, render.context), {}, {
        props: _objectSpread({
          target: this
        }, props)
      }), [render.vueRoot.$slots["default"]]);
    }
  }]);

  return VueUI;
}(SingleUI);

var VueUIList = /*#__PURE__*/function (_UIList) {
  _inherits(VueUIList, _UIList);

  var _super25 = _createSuper(VueUIList);

  function VueUIList() {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var options = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, VueUIList);

    return _super25.call(this, list, options);
  }

  _createClass(VueUIList, [{
    key: "convertSinlgeUI",
    value: function convertSinlgeUI(item) {
      return new VueUI(item);
    }
  }, {
    key: "handleComponentKey",
    value: function handleComponentKey(key) {
      var _this32 = this;

      return new Promise(function (resolve) {
        _this32.componentHasRendered.add({
          name: 'key',
          data: key
        });

        resolve();
      });
    }
  }, {
    key: "getRenderList",
    value: function getRenderList(render) {
      return this.getAllItems().map(function (item) {
        return item.render(render);
      });
    }
  }]);

  return VueUIList;
}(UIList);
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
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

var InputVueUI = /*#__PURE__*/function (_vuePropertyDecorator) {
  _inherits(InputVueUI, _vuePropertyDecorator);

  var _super26 = _createSuper(InputVueUI);

  function InputVueUI() {
    _classCallCheck(this, InputVueUI);

    return _super26.apply(this, arguments);
  }

  return InputVueUI;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], InputVueUI.prototype, "target", void 0);

InputVueUI = __decorate([vuePropertyDecorator.Component({
  template: "<div class='inputVue' v-show='target.props.show'> <el-input v-model=\"target.value\" :disabled='target.props.disabled' clearable :type='target.props.inputType'> <template slot='append' v-if='target.props.append'>{{target.props.append}}</template> <template slot=\"prepend\" v-if='target.props.label'>{{target.props.label}}</template> </el-input> </div>"
})], InputVueUI);
var InputVueUIComp = InputVueUI;

var ArrayVueUI = /*#__PURE__*/function (_vuePropertyDecorator2) {
  _inherits(ArrayVueUI, _vuePropertyDecorator2);

  var _super27 = _createSuper(ArrayVueUI);

  function ArrayVueUI() {
    _classCallCheck(this, ArrayVueUI);

    return _super27.apply(this, arguments);
  }

  return ArrayVueUI;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], ArrayVueUI.prototype, "target", void 0);

ArrayVueUI = __decorate([vuePropertyDecorator.Component({
  template: "<div class='arrayVue' v-show='target.props.show'> <div>{{target.props.label}}</div> <el-row> <el-col v-for=\"(item,index) in target.value\" :key=\"index\"> <el-input v-model=\"item.value\" > <template slot=\"append\" > <span @click=\"target.addCol()\" class='el-icon-circle-plus-outline'></span> <span v-if=\"index != 0\" @click=\"target.delCol(index)\" class='el-icon-remove-outline'></span> </template> </el-input> </el-col> </el-row> </div>"
})], ArrayVueUI);
var ArrayVueUIComp = ArrayVueUI;

var ObjectVueUI = /*#__PURE__*/function (_vuePropertyDecorator3) {
  _inherits(ObjectVueUI, _vuePropertyDecorator3);

  var _super28 = _createSuper(ObjectVueUI);

  function ObjectVueUI() {
    _classCallCheck(this, ObjectVueUI);

    return _super28.apply(this, arguments);
  }

  return ObjectVueUI;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], ObjectVueUI.prototype, "target", void 0);

ObjectVueUI = __decorate([vuePropertyDecorator.Component({
  template: "<div class='objectVue' v-show='target.props.show'> <div>{{target.props.label}}</div> <el-row> <el-col v-for=\"(item,index) in target.props.objectArray\" :key=\"index\"> <el-col :span='10'> <el-input v-model=\"item.key\" > <template slot='prepend'>key</template> </el-input> </el-col> <el-col :span='10'> <el-input v-model=\"item.value\" > <template slot='prepend'>value</template> </el-input> </el-col> <el-col :span='4'> <span @click=\"target.addCol()\" class='el-icon-circle-plus-outline'></span> <span v-if=\"index != 0\" @click=\"target.delCol(index)\" class='el-icon-remove-outline'></span> </el-col> </el-col> </el-row> </div>"
})], ObjectVueUI);
var ObjectVueUIComp = ObjectVueUI;

var MulSelectVueUI = /*#__PURE__*/function (_vuePropertyDecorator4) {
  _inherits(MulSelectVueUI, _vuePropertyDecorator4);

  var _super29 = _createSuper(MulSelectVueUI);

  function MulSelectVueUI() {
    _classCallCheck(this, MulSelectVueUI);

    return _super29.apply(this, arguments);
  }

  return MulSelectVueUI;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], MulSelectVueUI.prototype, "target", void 0);

MulSelectVueUI = __decorate([vuePropertyDecorator.Component({
  template: "<div class='mulSelectVue' v-show='target.props.show'> <div>{{target.props.label}}</div> <div v-if='target.props.configVisible'> <span>\u9009\u9879:</span> <el-row> <el-col v-for=\"(item,index) in target.props.optionsArray\" :key=\"index\"> <el-col :span='10'> <el-input v-model=\"item.key\" > <template slot='prepend'>key</template> </el-input> </el-col> <el-col :span='10'> <el-input v-model=\"item.value\" > <template slot='prepend'>value</template> </el-input> </el-col> <el-col :span='4'> <span @click=\"target.addCol()\" class='el-icon-circle-plus-outline'></span> <span v-if=\"index != 0\" @click=\"target.delCol(index)\" class='el-icon-remove-outline'></span> </el-col> </el-col> </el-row> </div> <span v-if='target.props.configVisible'>\u7ED3\u679C:</span> <el-select v-model=\"target.value\" multiple filterable clearable> <el-option v-for=\"(item, index) in target.props.optionsArray\" :value=\"item.key\" :label='item.value' :key=\"index\"> </el-option> </el-select></div>"
})], MulSelectVueUI);
var MulSelectVueUIComp = MulSelectVueUI;

var SelectVueUI = /*#__PURE__*/function (_vuePropertyDecorator5) {
  _inherits(SelectVueUI, _vuePropertyDecorator5);

  var _super30 = _createSuper(SelectVueUI);

  function SelectVueUI() {
    _classCallCheck(this, SelectVueUI);

    return _super30.apply(this, arguments);
  }

  return SelectVueUI;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], SelectVueUI.prototype, "target", void 0);

SelectVueUI = __decorate([vuePropertyDecorator.Component({
  template: "<div class='selectVue' v-show='target.props.show'> <div>{{target.props.label}}</div> <div v-if='target.props.configVisible'> <span>\u9009\u9879:</span> <el-row > <el-col v-for=\"(item,index) in target.props.optionsArray\" :key=\"index\"> <el-col :span='10'> <el-input v-model=\"item.key\" > <template slot='prepend'>key</template> </el-input> </el-col> <el-col :span='10'> <el-input v-model=\"item.value\" > <template slot='prepend'>value</template> </el-input> </el-col> <el-col :span='4'> <span @click=\"target.addCol()\" class='el-icon-circle-plus-outline'></span> <span v-if=\"index != 0\" @click=\"target.delCol(index)\" class='el-icon-remove-outline'></span> </el-col> </el-col> </el-row> </div> <span v-if='target.props.configVisible'>\u7ED3\u679C:</span> <el-select v-model=\"target.value\" filterable clearable> <el-option v-for=\"(item, index) in target.props.optionsArray\" :value=\"item.key\" :label='item.value' :key=\"index\"> </el-option> </el-select></div>"
})], SelectVueUI);
var SelectVueUIComp = SelectVueUI;

var NumberVueUI = /*#__PURE__*/function (_vuePropertyDecorator6) {
  _inherits(NumberVueUI, _vuePropertyDecorator6);

  var _super31 = _createSuper(NumberVueUI);

  function NumberVueUI() {
    _classCallCheck(this, NumberVueUI);

    return _super31.apply(this, arguments);
  }

  return NumberVueUI;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], NumberVueUI.prototype, "target", void 0);

NumberVueUI = __decorate([vuePropertyDecorator.Component({
  template: "<div class='numberVue' v-show='target.props.show'> <div>{{target.props.label}}</div> <el-input-number v-model=\"target.value\" :disabled='target.props.disabled' ></el-input-number></div>"
})], NumberVueUI);
var NumberVueUIComp = NumberVueUI;

var InputVueUI$1 = /*#__PURE__*/function (_vuePropertyDecorator7) {
  _inherits(InputVueUI, _vuePropertyDecorator7);

  var _super32 = _createSuper(InputVueUI);

  function InputVueUI() {
    _classCallCheck(this, InputVueUI);

    return _super32.apply(this, arguments);
  }

  return InputVueUI;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], InputVueUI$1.prototype, "target", void 0);

InputVueUI$1 = __decorate([vuePropertyDecorator.Component({
  template: "<div class='BooleanVueUI' v-show='target.props.show'> <el-checkbox v-model=\"target.value\">\u662F\u5426\u9009\u4E2D</el-checkbox> </div>"
})], InputVueUI$1);
var BooleanVueUIComp = InputVueUI$1;

var SimulateVueUIComponent = /*#__PURE__*/function (_vuePropertyDecorator8) {
  _inherits(SimulateVueUIComponent, _vuePropertyDecorator8);

  var _super33 = _createSuper(SimulateVueUIComponent);

  function SimulateVueUIComponent() {
    _classCallCheck(this, SimulateVueUIComponent);

    return _super33.apply(this, arguments);
  }

  _createClass(SimulateVueUIComponent, [{
    key: "watchSimulate",
    value: function watchSimulate(val) {
      this.target.simulate();
    }
  }]);

  return SimulateVueUIComponent;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], SimulateVueUIComponent.prototype, "target", void 0);

__decorate([vuePropertyDecorator.Watch('target.value')], SimulateVueUIComponent.prototype, "watchSimulate", null);

SimulateVueUIComponent = __decorate([vuePropertyDecorator.Component({
  template: "<div class='SimulateVue' v-show='target.props.show'> <el-input type=\"textarea\" :rows=\"5\" placeholder=\"\u6A21\u62DF\u6846\" v-model=\"target.value\"> </el-input> <div>{{target.error}}</div> <div>{{target.simulateValueToString()}}</div> </div>"
})], SimulateVueUIComponent);
var SimulateVueUIComp = SimulateVueUIComponent;
Vue.use(ElementUI);

var InputVueUI$2 = /*#__PURE__*/function (_VueUI) {
  _inherits(InputVueUI$2, _VueUI);

  var _super34 = _createSuper(InputVueUI$2);

  function InputVueUI$2(params) {
    var _this33;

    _classCallCheck(this, InputVueUI$2);

    _this33 = _super34.call(this, params);
    _this33.renderComponent = InputVueUIComp;
    return _this33;
  }

  return InputVueUI$2;
}(VueUI);

var ArrayVueUI$1 = /*#__PURE__*/function (_VueUI2) {
  _inherits(ArrayVueUI$1, _VueUI2);

  var _super35 = _createSuper(ArrayVueUI$1);

  function ArrayVueUI$1(params) {
    var _this34;

    _classCallCheck(this, ArrayVueUI$1);

    _this34 = _super35.call(this, params);

    if (!Array.isArray(_this34.value)) {
      _this34.value = [];
    }

    if (_this34.value.length == 0) {
      _this34.addCol();
    }

    _this34.renderComponent = ArrayVueUIComp;
    return _this34;
  }

  _createClass(ArrayVueUI$1, [{
    key: "addCol",
    value: function addCol() {
      this.value.push({
        value: ''
      });
    }
  }, {
    key: "delCol",
    value: function delCol(index) {
      this.value.splice(index, 1);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.value.map(function (item) {
        return item.value;
      });
    }
  }, {
    key: "setValue",
    value: function setValue(val) {
      this.value = (val || []).map(function (item) {
        return {
          value: item
        };
      });

      if (!Array.isArray(this.value)) {
        this.value = [];
      }

      if (this.value.length == 0) {
        this.addCol();
      }
    }
  }]);

  return ArrayVueUI$1;
}(VueUI);

var ObjectVueUI$1 = /*#__PURE__*/function (_VueUI3) {
  _inherits(ObjectVueUI$1, _VueUI3);

  var _super36 = _createSuper(ObjectVueUI$1);

  function ObjectVueUI$1(params) {
    var _this35;

    _classCallCheck(this, ObjectVueUI$1);

    _this35 = _super36.call(this, params);
    _this35.props.objectArray = _this35.props.objectArray || [];

    _this35.setValue(_this35.value || {});

    if (_this35.props.objectArray.length == 0) {
      _this35.addCol();
    }

    _this35.renderComponent = ObjectVueUIComp;
    return _this35;
  }

  _createClass(ObjectVueUI$1, [{
    key: "addCol",
    value: function addCol() {
      this.props.objectArray.push({
        key: '',
        value: ''
      });
    }
  }, {
    key: "delCol",
    value: function delCol(index) {
      this.props.objectArray.splice(index, 1);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.props.objectArray.reduce(function (total, current) {
        total[current.key] = current.value;
        return total;
      }, {});
    }
  }, {
    key: "setValue",
    value: function setValue(val) {
      this.value = val || {};
      this.props.objectArray = [];

      for (var _i3 = 0, _Object$entries3 = Object.entries(this.value); _i3 < _Object$entries3.length; _i3++) {
        var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i3], 2),
            key = _Object$entries3$_i[0],
            value = _Object$entries3$_i[1];

        this.props.objectArray.push({
          key: key,
          value: value
        });
      }

      if (this.props.objectArray.length == 0) {
        this.addCol();
      }
    }
  }]);

  return ObjectVueUI$1;
}(VueUI);

var MulSelectVueUI$1 = /*#__PURE__*/function (_VueUI4) {
  _inherits(MulSelectVueUI$1, _VueUI4);

  var _super37 = _createSuper(MulSelectVueUI$1);

  function MulSelectVueUI$1(params) {
    var _this36;

    _classCallCheck(this, MulSelectVueUI$1);

    _this36 = _super37.call(this, params);
    _this36.props.configVisible = _this36.props.configVisible || [];
    _this36.props.optionsArray = _this36.props.optionsArray || [];

    _this36.setValue(_this36.value || '');

    if (_this36.props.optionsArray.length == 0) {
      _this36.addCol();
    }

    _this36.renderComponent = MulSelectVueUIComp;
    return _this36;
  }

  _createClass(MulSelectVueUI$1, [{
    key: "addCol",
    value: function addCol() {
      this.props.optionsArray.push({
        key: '',
        value: ''
      });
    }
  }, {
    key: "delCol",
    value: function delCol(index) {
      this.props.optionsArray.splice(index, 1);
    }
  }]);

  return MulSelectVueUI$1;
}(VueUI);

var SelectVueUI$1 = /*#__PURE__*/function (_VueUI5) {
  _inherits(SelectVueUI$1, _VueUI5);

  var _super38 = _createSuper(SelectVueUI$1);

  function SelectVueUI$1(params) {
    var _this37;

    _classCallCheck(this, SelectVueUI$1);

    _this37 = _super38.call(this, params);
    _this37.props.configVisible = _this37.props.configVisible || [];
    _this37.props.optionsArray = _this37.props.optionsArray || [];

    _this37.setValue(_this37.value || []);

    if (_this37.props.optionsArray.length == 0) {
      _this37.addCol();
    }

    _this37.renderComponent = SelectVueUIComp;
    return _this37;
  }

  _createClass(SelectVueUI$1, [{
    key: "addCol",
    value: function addCol() {
      this.props.optionsArray.push({
        key: '',
        value: ''
      });
    }
  }, {
    key: "delCol",
    value: function delCol(index) {
      this.props.optionsArray.splice(index, 1);
    }
  }]);

  return SelectVueUI$1;
}(VueUI);

var NumberVueUI$1 = /*#__PURE__*/function (_VueUI6) {
  _inherits(NumberVueUI$1, _VueUI6);

  var _super39 = _createSuper(NumberVueUI$1);

  function NumberVueUI$1(params) {
    var _this38;

    _classCallCheck(this, NumberVueUI$1);

    _this38 = _super39.call(this, params);
    _this38.renderComponent = NumberVueUIComp;
    return _this38;
  }

  return NumberVueUI$1;
}(VueUI);

var BooleanVueUI = /*#__PURE__*/function (_VueUI7) {
  _inherits(BooleanVueUI, _VueUI7);

  var _super40 = _createSuper(BooleanVueUI);

  function BooleanVueUI(params) {
    var _this39;

    _classCallCheck(this, BooleanVueUI);

    _this39 = _super40.call(this, params);
    _this39.value = !!_this39.value;
    _this39.renderComponent = BooleanVueUIComp;
    return _this39;
  }

  return BooleanVueUI;
}(VueUI);

var SimulateVueUI = /*#__PURE__*/function (_VueUI8) {
  _inherits(SimulateVueUI, _VueUI8);

  var _super41 = _createSuper(SimulateVueUI);

  function SimulateVueUI(params) {
    var _this40;

    _classCallCheck(this, SimulateVueUI);

    _this40 = _super41.call(this, params);
    _this40.simulateValue = '';
    _this40.error = '';

    _this40.simulate();

    _this40.renderComponent = SimulateVueUIComp;
    return _this40;
  }

  _createClass(SimulateVueUI, [{
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      var oldValue = this.value;
      this.value = value;

      if (oldValue != this.value) {
        this.onChange({
          val: this.value,
          oldVal: oldValue
        });
      }

      this.simulate();
    }
  }, {
    key: "simulate",
    value: function simulate() {
      this.simulateValue = this.value;
      this.error = '';

      try {
        this.simulateValue = JSON.parse(this.value);
      } catch (error) {
        this.error = error;
      }
    }
  }, {
    key: "simulateValueToString",
    value: function simulateValueToString() {
      return _typeof(this.simulateValue) == 'object' ? JSON.stringify(this.simulateValue) : this.simulateValue;
    }
  }]);

  return SimulateVueUI;
}(VueUI);

var EventListVueUIComponent = /*#__PURE__*/function (_vuePropertyDecorator9) {
  _inherits(EventListVueUIComponent, _vuePropertyDecorator9);

  var _super42 = _createSuper(EventListVueUIComponent);

  function EventListVueUIComponent() {
    _classCallCheck(this, EventListVueUIComponent);

    return _super42.apply(this, arguments);
  }

  _createClass(EventListVueUIComponent, [{
    key: "options",
    get: function get() {
      var list = this.target.apiList.getList().map(function (item) {
        return {
          key: item.opt.id,
          value: "api:".concat(item.opt.name)
        };
      }).concat(this.target.eventList.getList().map(function (item) {
        return {
          key: item.opt.id,
          value: "".concat(item.opt.type, ":").concat(item.opt.name)
        };
      }));
      return list;
    }
  }]);

  return EventListVueUIComponent;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], EventListVueUIComponent.prototype, "target", void 0);

EventListVueUIComponent = __decorate([vuePropertyDecorator.Component({
  template: "<div class='eventListVue'> <div>{{target.props.label}}</div> <el-row> <el-col> <el-select v-model=\"target.value\" filterable> <el-option v-for=\"(item, index) in options\" :value=\"item.key\" :label='item.value' :key=\"index\"> </el-option> </el-select> </el-col> </el-row> </div>"
})], EventListVueUIComponent);
var EventListVueUIComponent$1 = EventListVueUIComponent;

var ContainerVueUIComponent = /*#__PURE__*/function (_vuePropertyDecorator10) {
  _inherits(ContainerVueUIComponent, _vuePropertyDecorator10);

  var _super43 = _createSuper(ContainerVueUIComponent);

  function ContainerVueUIComponent() {
    _classCallCheck(this, ContainerVueUIComponent);

    return _super43.apply(this, arguments);
  }

  _createClass(ContainerVueUIComponent, [{
    key: "mounted",
    value: function mounted() {
      console.log(this.target.ui);
    }
  }]);

  return ContainerVueUIComponent;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], ContainerVueUIComponent.prototype, "target", void 0);

ContainerVueUIComponent = __decorate([vuePropertyDecorator.Component({
  template: "<div class='ContainerVue'> <slot></slot> </div>"
})], ContainerVueUIComponent);
var ContainerVueUIComponent$1 = ContainerVueUIComponent;

var CardContainerVueUIComponent = /*#__PURE__*/function (_vuePropertyDecorator11) {
  _inherits(CardContainerVueUIComponent, _vuePropertyDecorator11);

  var _super44 = _createSuper(CardContainerVueUIComponent);

  function CardContainerVueUIComponent() {
    var _this41;

    _classCallCheck(this, CardContainerVueUIComponent);

    _this41 = _super44.apply(this, arguments);
    _this41.tabs = [];
    _this41.activeTab = '';
    return _this41;
  }

  _createClass(CardContainerVueUIComponent, [{
    key: "mounted",
    value: function mounted() {
      console.log(this.target.ui);
      console.log(this.target.ui.selfProp.opt);
      this.resetTabs();
    }
  }, {
    key: "resetTabs",
    value: function resetTabs() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.target.ui.selfProp.opt;
      this.tabs = val.tab.map(function (item, index) {
        return {
          key: index.toString(),
          value: item.toString()
        };
      });
      this.target.ui.activeCard = this.target.ui.activeCard || this.tabs[0].key || '';
    }
  }, {
    key: "watchTab",
    value: function watchTab(val) {
      this.resetTabs(val);
    }
  }]);

  return CardContainerVueUIComponent;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], CardContainerVueUIComponent.prototype, "target", void 0);

__decorate([vuePropertyDecorator.Watch('target.ui.selfProp.opt')], CardContainerVueUIComponent.prototype, "watchTab", null);

CardContainerVueUIComponent = __decorate([vuePropertyDecorator.Component({
  template: "<div class='CardContainerVue'> <el-tabs v-model=\"target.ui.activeCard\" > <el-tab-pane v-for=\"(tab, index) in tabs\" :key=\"index\" :label=\"tab.value\" :name=\"tab.key\"> <slot></slot> </el-tab-pane> </el-tabs> </div>"
})], CardContainerVueUIComponent);
var CardContainerVueUIComponent$1 = CardContainerVueUIComponent;

var DialogContainerVueUIComponent = /*#__PURE__*/function (_vuePropertyDecorator12) {
  _inherits(DialogContainerVueUIComponent, _vuePropertyDecorator12);

  var _super45 = _createSuper(DialogContainerVueUIComponent);

  function DialogContainerVueUIComponent() {
    var _this42;

    _classCallCheck(this, DialogContainerVueUIComponent);

    _this42 = _super45.apply(this, arguments);
    _this42.visible = false;
    _this42.title = '';
    return _this42;
  }

  _createClass(DialogContainerVueUIComponent, [{
    key: "mounted",
    value: function mounted() {
      console.log(this.target.ui);
    }
  }]);

  return DialogContainerVueUIComponent;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], DialogContainerVueUIComponent.prototype, "target", void 0);

DialogContainerVueUIComponent = __decorate([vuePropertyDecorator.Component({
  template: "<div class='DialogContainerVue'> <div class='DialogContainerVue-block' v-if='!target.isCompiler'> <slot></slot> </div> <el-dialog :visible.sync='visible' :append-to-body=\"true\" :title=\"title\" v-if='target.isCompiler'> <slot></slot> </el-dialog> </div>"
})], DialogContainerVueUIComponent);
var DialogContainerVueUIComponent$1 = DialogContainerVueUIComponent;

var ButtonVueUIComponent = /*#__PURE__*/function (_vuePropertyDecorator13) {
  _inherits(ButtonVueUIComponent, _vuePropertyDecorator13);

  var _super46 = _createSuper(ButtonVueUIComponent);

  function ButtonVueUIComponent() {
    var _this43;

    _classCallCheck(this, ButtonVueUIComponent);

    _this43 = _super46.apply(this, arguments);
    _this43.label = '';
    return _this43;
  }

  _createClass(ButtonVueUIComponent, [{
    key: "mounted",
    value: function mounted() {
      console.log(this.target.ui);
      console.log(this.target.ui.selfProp.opt);
      this.resetOpt();
    }
  }, {
    key: "resetOpt",
    value: function resetOpt() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.target.ui.selfProp.opt;
      this.label = val.label || '';
    }
  }, {
    key: "watchTab",
    value: function watchTab(val) {
      this.resetOpt(val);
    }
  }]);

  return ButtonVueUIComponent;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], ButtonVueUIComponent.prototype, "target", void 0);

__decorate([vuePropertyDecorator.Watch('target.ui.selfProp.opt')], ButtonVueUIComponent.prototype, "watchTab", null);

ButtonVueUIComponent = __decorate([vuePropertyDecorator.Component({
  template: "<div class='ButtonVue'> <el-button >{{label}}</el-button> </div>"
})], ButtonVueUIComponent);
var ButtonVueUIComponent$1 = ButtonVueUIComponent;

var InputVueUIComponent = /*#__PURE__*/function (_vuePropertyDecorator14) {
  _inherits(InputVueUIComponent, _vuePropertyDecorator14);

  var _super47 = _createSuper(InputVueUIComponent);

  function InputVueUIComponent() {
    var _this44;

    _classCallCheck(this, InputVueUIComponent);

    _this44 = _super47.apply(this, arguments);
    _this44.value = '';
    _this44.prepend = '';
    return _this44;
  }

  _createClass(InputVueUIComponent, [{
    key: "mounted",
    value: function mounted() {
      console.log(this.target.ui);
      console.log(this.target.ui.selfProp.opt);
      this.resetOpt();
    }
  }, {
    key: "resetOpt",
    value: function resetOpt() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.target.ui.selfProp.opt;
      this.value = val.value || '';
      this.prepend = val.prepend || '';
    }
  }, {
    key: "watchTab",
    value: function watchTab(val) {
      this.resetOpt(val);
    }
  }]);

  return InputVueUIComponent;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], InputVueUIComponent.prototype, "target", void 0);

__decorate([vuePropertyDecorator.Watch('target.ui.selfProp.opt')], InputVueUIComponent.prototype, "watchTab", null);

InputVueUIComponent = __decorate([vuePropertyDecorator.Component({
  template: "<div class='InputVue'> <el-input v-model='value'> <template slot='prepend' v-if=\"prepend\"> {{prepend}} </template> </el-input> </div>"
})], InputVueUIComponent);
var InputVueUIComponent$1 = InputVueUIComponent;

var NumberVueUIComponent = /*#__PURE__*/function (_vuePropertyDecorator15) {
  _inherits(NumberVueUIComponent, _vuePropertyDecorator15);

  var _super48 = _createSuper(NumberVueUIComponent);

  function NumberVueUIComponent() {
    var _this45;

    _classCallCheck(this, NumberVueUIComponent);

    _this45 = _super48.apply(this, arguments);
    _this45.value = '';
    _this45.label = '';
    return _this45;
  }

  _createClass(NumberVueUIComponent, [{
    key: "mounted",
    value: function mounted() {
      this.resetOpt();
    }
  }, {
    key: "resetOpt",
    value: function resetOpt() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.target.ui.selfProp.opt;
      this.value = val.value || '';
      this.label = val.label || '';
    }
  }, {
    key: "watchTab",
    value: function watchTab(val) {
      this.resetOpt(val);
    }
  }]);

  return NumberVueUIComponent;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], NumberVueUIComponent.prototype, "target", void 0);

__decorate([vuePropertyDecorator.Watch('target.ui.selfProp.opt')], NumberVueUIComponent.prototype, "watchTab", null);

NumberVueUIComponent = __decorate([vuePropertyDecorator.Component({
  template: "<div class='NumberVue'> <el-row> <el-col :span='label ? 4 : 0'>{{label}}</el-col> <el-col :span='label ? 20 : 24'> <el-input-number v-model=\"value\" :label='label'></el-input-number> </el-col> </el-row> </div>"
})], NumberVueUIComponent);
var NumberVueUIComponent$1 = NumberVueUIComponent;

var TimePickerVueUIComponent = /*#__PURE__*/function (_vuePropertyDecorator16) {
  _inherits(TimePickerVueUIComponent, _vuePropertyDecorator16);

  var _super49 = _createSuper(TimePickerVueUIComponent);

  function TimePickerVueUIComponent() {
    var _this46;

    _classCallCheck(this, TimePickerVueUIComponent);

    _this46 = _super49.apply(this, arguments);
    _this46.value = '';
    _this46.type = 'datetime';
    _this46.placeholder = '';
    return _this46;
  }

  _createClass(TimePickerVueUIComponent, [{
    key: "mounted",
    value: function mounted() {
      this.resetOpt();
    }
  }, {
    key: "resetOpt",
    value: function resetOpt() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.target.ui.selfProp.opt;
      this.value = val.value || '';
      this.type = val.type || 'datetime';
      this.placeholder = val.placeholder || '';
    }
  }, {
    key: "watchTab",
    value: function watchTab(val) {
      this.resetOpt(val);
    }
  }]);

  return TimePickerVueUIComponent;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], TimePickerVueUIComponent.prototype, "target", void 0);

__decorate([vuePropertyDecorator.Watch('target.ui.selfProp.opt')], TimePickerVueUIComponent.prototype, "watchTab", null);

TimePickerVueUIComponent = __decorate([vuePropertyDecorator.Component({
  template: "<div class='TimePickerVue'> <el-date-picker v-model=\"value\" :type=\"type\" :placeholder=\"placeholder\"> </el-date-picker> </div>"
})], TimePickerVueUIComponent);
var TimePickerVueUIComponent$1 = TimePickerVueUIComponent;

var TimeGroupVueUIComponent = /*#__PURE__*/function (_vuePropertyDecorator17) {
  _inherits(TimeGroupVueUIComponent, _vuePropertyDecorator17);

  var _super50 = _createSuper(TimeGroupVueUIComponent);

  function TimeGroupVueUIComponent() {
    var _this47;

    _classCallCheck(this, TimeGroupVueUIComponent);

    _this47 = _super50.apply(this, arguments);
    _this47.year = '2020';
    _this47.report = 1;
    return _this47;
  }

  _createClass(TimeGroupVueUIComponent, [{
    key: "mounted",
    value: function mounted() {
      this.resetOpt();
    }
  }, {
    key: "resetOpt",
    value: function resetOpt() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.target.ui.selfProp.opt;
      this.year = val.year || '2020';
      this.report = val.report || 1;
    }
  }, {
    key: "watchTab",
    value: function watchTab(val) {
      this.resetOpt(val);
    }
  }]);

  return TimeGroupVueUIComponent;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], TimeGroupVueUIComponent.prototype, "target", void 0);

__decorate([vuePropertyDecorator.Watch('target.ui.selfProp.opt')], TimeGroupVueUIComponent.prototype, "watchTab", null);

TimeGroupVueUIComponent = __decorate([vuePropertyDecorator.Component({
  template: "<div class='TimeGroupVue'> <el-select v-model=\"year\" filterable> <el-option v-for=\"(item, index) in target.year\" :value=\"item.key\" :label='item.value' :key=\"index\"> </el-option> </el-select> <el-select v-model=\"report\" filterable> <el-option v-for=\"(item, index) in target.report\" :value=\"item.key\" :label='item.value' :key=\"index\"> </el-option> </el-select> </div>"
})], TimeGroupVueUIComponent);
var TimeGroupVueUIComponent$1 = TimeGroupVueUIComponent;

var SelectVueUIComponent = /*#__PURE__*/function (_vuePropertyDecorator18) {
  _inherits(SelectVueUIComponent, _vuePropertyDecorator18);

  var _super51 = _createSuper(SelectVueUIComponent);

  function SelectVueUIComponent() {
    var _this48;

    _classCallCheck(this, SelectVueUIComponent);

    _this48 = _super51.apply(this, arguments);
    _this48.value = '';
    _this48.optionsArray = [];
    return _this48;
  }

  _createClass(SelectVueUIComponent, [{
    key: "mounted",
    value: function mounted() {
      console.log(this.target.ui.selfProp);
      this.resetSelfProp();
    }
  }, {
    key: "resetSelfProp",
    value: function resetSelfProp() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.target.ui.selfProp;
      this.value = val.opt.value || '';
      this.optionsArray = val.params.find(function (item) {
        return item.key == 'value';
      }).props.optionsArray;
    }
  }, {
    key: "watchTab",
    value: function watchTab(val) {
      this.resetSelfProp(val);
    }
  }]);

  return SelectVueUIComponent;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], SelectVueUIComponent.prototype, "target", void 0);

__decorate([vuePropertyDecorator.Watch('target.ui.selfProp', {
  deep: true
})], SelectVueUIComponent.prototype, "watchTab", null);

SelectVueUIComponent = __decorate([vuePropertyDecorator.Component({
  template: "<div class='SelectVue'> <el-select v-model=\"value\" filterable> <el-option v-for=\"(item, index) in optionsArray\" :value=\"item.key\" :label='item.value' :key=\"index\"> </el-option> </el-select> </div>"
})], SelectVueUIComponent);
var SelectVueUIComponent$1 = SelectVueUIComponent;

var CheckBoxVueUIComponent = /*#__PURE__*/function (_vuePropertyDecorator19) {
  _inherits(CheckBoxVueUIComponent, _vuePropertyDecorator19);

  var _super52 = _createSuper(CheckBoxVueUIComponent);

  function CheckBoxVueUIComponent() {
    var _this49;

    _classCallCheck(this, CheckBoxVueUIComponent);

    _this49 = _super52.apply(this, arguments);
    _this49.label = '';
    _this49.value = '';
    return _this49;
  }

  _createClass(CheckBoxVueUIComponent, [{
    key: "mounted",
    value: function mounted() {
      this.resetOpt();
    }
  }, {
    key: "resetOpt",
    value: function resetOpt() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.target.ui.selfProp.opt;
      this.value = val.value || '';
      this.label = val.label || '';
    }
  }, {
    key: "watchTab",
    value: function watchTab(val) {
      this.resetOpt(val);
    }
  }]);

  return CheckBoxVueUIComponent;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], CheckBoxVueUIComponent.prototype, "target", void 0);

__decorate([vuePropertyDecorator.Watch('target.ui.selfProp.opt')], CheckBoxVueUIComponent.prototype, "watchTab", null);

CheckBoxVueUIComponent = __decorate([vuePropertyDecorator.Component({
  template: "<div class='CheckBoxVueUI'> <el-checkbox v-model=\"value\">{{label}}</el-checkbox> </div>"
})], CheckBoxVueUIComponent);
var CheckBoxVueUIComponent$1 = CheckBoxVueUIComponent;

var CheckBoxGroupVueUIComponent = /*#__PURE__*/function (_vuePropertyDecorator20) {
  _inherits(CheckBoxGroupVueUIComponent, _vuePropertyDecorator20);

  var _super53 = _createSuper(CheckBoxGroupVueUIComponent);

  function CheckBoxGroupVueUIComponent() {
    var _this50;

    _classCallCheck(this, CheckBoxGroupVueUIComponent);

    _this50 = _super53.apply(this, arguments);
    _this50.value = [];
    _this50.optionsArray = [];
    return _this50;
  }

  _createClass(CheckBoxGroupVueUIComponent, [{
    key: "mounted",
    value: function mounted() {
      console.log(this.target.ui.selfProp);
      this.resetSelfProp();
    }
  }, {
    key: "resetSelfProp",
    value: function resetSelfProp() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.target.ui.selfProp;
      this.value = val.opt.value || [];
      this.optionsArray = val.params.find(function (item) {
        return item.key == 'value';
      }).props.optionsArray;
    }
  }, {
    key: "watchTab",
    value: function watchTab(val) {
      this.resetSelfProp(val);
    }
  }]);

  return CheckBoxGroupVueUIComponent;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], CheckBoxGroupVueUIComponent.prototype, "target", void 0);

__decorate([vuePropertyDecorator.Watch('target.ui.selfProp', {
  deep: true
})], CheckBoxGroupVueUIComponent.prototype, "watchTab", null);

CheckBoxGroupVueUIComponent = __decorate([vuePropertyDecorator.Component({
  template: "<div class='CheckBoxGroupVueUI'> <el-checkbox-group v-model=\"value\"> <el-checkbox v-for=\"(item, index) in optionsArray\" :key='index' :label=\"item.key\"> {{item.value}} </el-checkbox> </el-checkbox-group> </div>"
})], CheckBoxGroupVueUIComponent);
var CheckBoxGroupVueUIComponent$1 = CheckBoxGroupVueUIComponent;

var RadioVueUIComponent = /*#__PURE__*/function (_vuePropertyDecorator21) {
  _inherits(RadioVueUIComponent, _vuePropertyDecorator21);

  var _super54 = _createSuper(RadioVueUIComponent);

  function RadioVueUIComponent() {
    var _this51;

    _classCallCheck(this, RadioVueUIComponent);

    _this51 = _super54.apply(this, arguments);
    _this51.value = '';
    _this51.optionsArray = [];
    return _this51;
  }

  _createClass(RadioVueUIComponent, [{
    key: "mounted",
    value: function mounted() {
      console.log(this.target.ui.selfProp);
      this.resetSelfProp();
    }
  }, {
    key: "resetSelfProp",
    value: function resetSelfProp() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.target.ui.selfProp;
      this.value = val.opt.value || '';
      this.optionsArray = val.params.find(function (item) {
        return item.key == 'value';
      }).props.optionsArray;
    }
  }, {
    key: "watchTab",
    value: function watchTab(val) {
      this.resetSelfProp(val);
    }
  }]);

  return RadioVueUIComponent;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], RadioVueUIComponent.prototype, "target", void 0);

__decorate([vuePropertyDecorator.Watch('target.ui.selfProp', {
  deep: true
})], RadioVueUIComponent.prototype, "watchTab", null);

RadioVueUIComponent = __decorate([vuePropertyDecorator.Component({
  template: "<div class='RadioVueUI'> <el-radio-group v-model=\"value\" > <el-radio v-for=\"(item, index) in optionsArray\" :label='item.key' :key=\"index\"> {{item.value}} </el-radio> </el-radio-group> </div>"
})], RadioVueUIComponent);
var RadioVueUIComponent$1 = RadioVueUIComponent;

var MulSelectVueUIComponent = /*#__PURE__*/function (_vuePropertyDecorator22) {
  _inherits(MulSelectVueUIComponent, _vuePropertyDecorator22);

  var _super55 = _createSuper(MulSelectVueUIComponent);

  function MulSelectVueUIComponent() {
    var _this52;

    _classCallCheck(this, MulSelectVueUIComponent);

    _this52 = _super55.apply(this, arguments);
    _this52.value = [];
    _this52.optionsArray = [];
    return _this52;
  }

  _createClass(MulSelectVueUIComponent, [{
    key: "mounted",
    value: function mounted() {
      console.log(this.target.ui.selfProp);
      this.resetSelfProp();
    }
  }, {
    key: "resetSelfProp",
    value: function resetSelfProp() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.target.ui.selfProp;
      this.value = val.opt.value || [];
      this.optionsArray = val.params.find(function (item) {
        return item.key == 'value';
      }).props.optionsArray;
    }
  }, {
    key: "watchTab",
    value: function watchTab(val) {
      this.resetSelfProp(val);
    }
  }]);

  return MulSelectVueUIComponent;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], MulSelectVueUIComponent.prototype, "target", void 0);

__decorate([vuePropertyDecorator.Watch('target.ui.selfProp', {
  deep: true
})], MulSelectVueUIComponent.prototype, "watchTab", null);

MulSelectVueUIComponent = __decorate([vuePropertyDecorator.Component({
  template: "<div class='MulSelectVueUI'> <el-select v-model=\"value\" multiple filterable clearable> <el-option v-for=\"(item, index) in optionsArray\" :value=\"item.key\" :label='item.value' :key=\"index\"> </el-option> </el-select> </div>"
})], MulSelectVueUIComponent);
var MulSelectVueUIComponent$1 = MulSelectVueUIComponent;

var IframeVueUIComponent = /*#__PURE__*/function (_vuePropertyDecorator23) {
  _inherits(IframeVueUIComponent, _vuePropertyDecorator23);

  var _super56 = _createSuper(IframeVueUIComponent);

  function IframeVueUIComponent() {
    var _this53;

    _classCallCheck(this, IframeVueUIComponent);

    _this53 = _super56.apply(this, arguments);
    _this53.src = '';
    return _this53;
  }

  _createClass(IframeVueUIComponent, [{
    key: "mounted",
    value: function mounted() {
      console.log(this.target.ui);
      console.log(this.target.ui.selfProp.opt);
      this.resetOpt();
    }
  }, {
    key: "resetOpt",
    value: function resetOpt() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.target.ui.selfProp.opt;
      this.src = val.src || '';
    }
  }, {
    key: "watchTab",
    value: function watchTab(val) {
      this.resetOpt(val);
    }
  }]);

  return IframeVueUIComponent;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], IframeVueUIComponent.prototype, "target", void 0);

__decorate([vuePropertyDecorator.Watch('target.ui.selfProp.opt')], IframeVueUIComponent.prototype, "watchTab", null);

IframeVueUIComponent = __decorate([vuePropertyDecorator.Component({
  template: "<div class='IframeVueUI'> <div class='IframeVueUI-block' v-if='!target.isCompiler'></div> <iframe v-if='target.isCompiler' :src=\"src\" frameborder=\"0\"></iframe> </div>"
})], IframeVueUIComponent);
var IframeVueUIComponent$1 = IframeVueUIComponent;

var TabelColSlot = /*#__PURE__*/function (_vuePropertyDecorator24) {
  _inherits(TabelColSlot, _vuePropertyDecorator24);

  var _super57 = _createSuper(TabelColSlot);

  function TabelColSlot() {
    _classCallCheck(this, TabelColSlot);

    return _super57.apply(this, arguments);
  }

  _createClass(TabelColSlot, [{
    key: "render",
    value: function render(h, data) {
      return this.tableCol.render(h, data, this.row, this.propkey);
    }
  }]);

  return TabelColSlot;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], TabelColSlot.prototype, "tableCol", void 0);

__decorate([vuePropertyDecorator.Prop()], TabelColSlot.prototype, "row", void 0);

__decorate([vuePropertyDecorator.Prop()], TabelColSlot.prototype, "propkey", void 0);

TabelColSlot = __decorate([vuePropertyDecorator.Component({
  template: "<div class='TableVueUI'> <el-table class=\"list-table\" size=\"mini\" :data=\"target.mergetList\" v-loading=\"target.loading\" fit stripe :show-header=\"target.mergeShowHeader\" style=\"width: 99.9%\" > <template v-for=\"(item, index) in target.mergeCols\"> <el-table-column :key=\"index\" :type=\"item.type\" :label=\"item.label\" :prop=\"item.prop\" :sortable=\"item.sortable\" :class-name=\"item.className\" :width=\"item.width\" :min-width=\"item.minWidth\" :fixed=\"item.fixed\" :show-overflow-tooltip=\"item.showOverflowTooltip\" > <template slot-scope=\"scope\"> <TabelColSlot :tableCol=\"item\" :propkey=\"target.getTableKey(scope, item)\" :row=\"target.getTableRow(scope, item)\"></TabelColSlot> </template> </el-table-column> </template> </el-table> </div>"
})], TabelColSlot);

var TableVueUIComponent = /*#__PURE__*/function (_vuePropertyDecorator25) {
  _inherits(TableVueUIComponent, _vuePropertyDecorator25);

  var _super58 = _createSuper(TableVueUIComponent);

  function TableVueUIComponent() {
    var _this54;

    _classCallCheck(this, TableVueUIComponent);

    _this54 = _super58.apply(this, arguments);
    _this54.value = '';
    _this54.prepend = '';
    return _this54;
  }

  _createClass(TableVueUIComponent, [{
    key: "mounted",
    value: function mounted() {
      console.log(this.target);
      this.resetOpt();
    }
  }, {
    key: "resetOpt",
    value: function resetOpt() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.target.ui.selfProp.opt;
      this.value = val.value || '';
      this.prepend = val.prepend || '';
    }
  }, {
    key: "watchTab",
    value: function watchTab(val) {
      this.resetOpt(val);
    }
  }]);

  return TableVueUIComponent;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], TableVueUIComponent.prototype, "target", void 0);

__decorate([vuePropertyDecorator.Watch('target.ui.selfProp.opt')], TableVueUIComponent.prototype, "watchTab", null);

TableVueUIComponent = __decorate([vuePropertyDecorator.Component({
  components: {
    TabelColSlot: TabelColSlot
  }
})], TableVueUIComponent);
var TableVueUIComponent$1 = TableVueUIComponent;

var TableDataConfigVueUIComponent = /*#__PURE__*/function (_vuePropertyDecorator26) {
  _inherits(TableDataConfigVueUIComponent, _vuePropertyDecorator26);

  var _super59 = _createSuper(TableDataConfigVueUIComponent);

  function TableDataConfigVueUIComponent() {
    var _this55;

    _classCallCheck(this, TableDataConfigVueUIComponent);

    _this55 = _super59.apply(this, arguments);
    _this55.activeName = 'column';
    _this55.typeArray = [{
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
    }];
    return _this55;
  }

  _createClass(TableDataConfigVueUIComponent, [{
    key: "mounted",
    value: function mounted() {
      console.log(this.target);
    }
  }]);

  return TableDataConfigVueUIComponent;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], TableDataConfigVueUIComponent.prototype, "target", void 0);

TableDataConfigVueUIComponent = __decorate([vuePropertyDecorator.Component({
  template: "<div class='TableVueUI'> <div></div> <el-tabs v-model=\"activeName\"> <el-tab-pane label=\"column \u7BA1\u7406\" name=\"column\"> <el-row v-for=\"(item, index) in target.cols\" :key=\"index\"> <el-col> type: <el-select v-model=\"item.type\" filterable> <el-option v-for=\"(item, index) in typeArray\" :value=\"item.key\" :label='item.value' :key=\"index\"> </el-option> </el-select> </el-col> <el-col> <el-input v-model=\"item.label\"> <template slot='prepend'> label </template> </el-input> </el-col> <el-col> <el-input v-model=\"item.prop\"> <template slot='prepend'> prop </template> </el-input> </el-col> <el-col> <el-checkbox v-model=\"item.sortable\">sortable</el-checkbox> </el-col> <el-col> <el-input v-model=\"item.className\"> <template slot='prepend'> className </template> </el-input> </el-col> <el-col> <el-input v-model=\"item.width\"> <template slot='prepend'> width </template> </el-input> </el-col> <el-col> <el-input v-model=\"item.minWidth\"> <template slot='prepend'> minWidth </template> </el-input> </el-col> <el-col> <el-checkbox v-model=\"item.fixed\">fixed</el-checkbox> </el-col> <el-col> <el-checkbox v-model=\"item.showOverflowTooltip\">showOverflowTooltip</el-checkbox> </el-col> <span @click=\"target.addCol()\" class='el-icon-circle-plus-outline'></span> <span v-if=\"index != 0\" @click=\"target.delCol(index)\" class='el-icon-remove-outline'></span> </el-row> </el-tab-pane> <el-tab-pane label=\"tableData \u7BA1\u7406\" name=\"tableData\"> <slot></slot> </el-tab-pane> </el-tabs> </div>"
})], TableDataConfigVueUIComponent);
var TableDataConfigVueUIComponent$1 = TableDataConfigVueUIComponent;
Vue.use(ElementUI);

var EventListVueUI = /*#__PURE__*/function (_VueUI9) {
  _inherits(EventListVueUI, _VueUI9);

  var _super60 = _createSuper(EventListVueUI);

  function EventListVueUI(params) {
    var _this56;

    _classCallCheck(this, EventListVueUI);

    _this56 = _super60.call(this, params);
    _this56.apiList = apiList;
    _this56.eventList = eventList;
    return _this56;
  }

  _createClass(EventListVueUI, [{
    key: "renderInstance",
    value: function renderInstance(render) {
      return render.createElement(EventListVueUIComponent$1, {
        props: {
          target: this
        }
      }, [render.vueRoot.$slots["default"]]);
    }
  }]);

  return EventListVueUI;
}(VueUI);

var BasicVueUI = /*#__PURE__*/function (_VueUI10) {
  _inherits(BasicVueUI, _VueUI10);

  var _super61 = _createSuper(BasicVueUI);

  function BasicVueUI(params) {
    var _this57;

    _classCallCheck(this, BasicVueUI);

    _this57 = _super61.call(this, params);
    _this57.ui = _this57.props.ui;
    _this57.isCompiler = _this57.props.isCompiler;
    return _this57;
  }

  _createClass(BasicVueUI, [{
    key: "renderInstance",
    value: function renderInstance(render) {
      return render.createElement('div', {
        props: {
          target: this
        }
      }, [render.vueRoot.$slots["default"]]);
    }
  }]);

  return BasicVueUI;
}(VueUI);

var ContainerVueUI = /*#__PURE__*/function (_BasicVueUI) {
  _inherits(ContainerVueUI, _BasicVueUI);

  var _super62 = _createSuper(ContainerVueUI);

  function ContainerVueUI(params) {
    _classCallCheck(this, ContainerVueUI);

    return _super62.call(this, params);
  }

  _createClass(ContainerVueUI, [{
    key: "renderInstance",
    value: function renderInstance(render) {
      return render.createElement(ContainerVueUIComponent$1, {
        props: {
          target: this
        }
      }, [render.vueRoot.$slots["default"]]);
    }
  }]);

  return ContainerVueUI;
}(BasicVueUI);

var CardContainerVueUI = /*#__PURE__*/function (_BasicVueUI2) {
  _inherits(CardContainerVueUI, _BasicVueUI2);

  var _super63 = _createSuper(CardContainerVueUI);

  function CardContainerVueUI(params) {
    _classCallCheck(this, CardContainerVueUI);

    return _super63.call(this, params);
  }

  _createClass(CardContainerVueUI, [{
    key: "renderInstance",
    value: function renderInstance(render) {
      return render.createElement(CardContainerVueUIComponent$1, {
        props: {
          target: this
        }
      }, [render.vueRoot.$slots["default"]]);
    }
  }]);

  return CardContainerVueUI;
}(BasicVueUI);

var DialogContainerVueUI = /*#__PURE__*/function (_BasicVueUI3) {
  _inherits(DialogContainerVueUI, _BasicVueUI3);

  var _super64 = _createSuper(DialogContainerVueUI);

  function DialogContainerVueUI(params) {
    _classCallCheck(this, DialogContainerVueUI);

    return _super64.call(this, params);
  }

  _createClass(DialogContainerVueUI, [{
    key: "renderInstance",
    value: function renderInstance(render) {
      return render.createElement(DialogContainerVueUIComponent$1, {
        props: {
          target: this
        }
      }, [render.vueRoot.$slots["default"]]);
    }
  }]);

  return DialogContainerVueUI;
}(BasicVueUI);

var ButtonVueUI = /*#__PURE__*/function (_BasicVueUI4) {
  _inherits(ButtonVueUI, _BasicVueUI4);

  var _super65 = _createSuper(ButtonVueUI);

  function ButtonVueUI(params) {
    _classCallCheck(this, ButtonVueUI);

    return _super65.call(this, params);
  }

  _createClass(ButtonVueUI, [{
    key: "renderInstance",
    value: function renderInstance(render) {
      return render.createElement(ButtonVueUIComponent$1, {
        props: {
          target: this
        }
      }, [render.vueRoot.$slots["default"]]);
    }
  }]);

  return ButtonVueUI;
}(BasicVueUI);

var InputVueUI$3 = /*#__PURE__*/function (_BasicVueUI5) {
  _inherits(InputVueUI$3, _BasicVueUI5);

  var _super66 = _createSuper(InputVueUI$3);

  function InputVueUI$3(params) {
    _classCallCheck(this, InputVueUI$3);

    return _super66.call(this, params);
  }

  _createClass(InputVueUI$3, [{
    key: "renderInstance",
    value: function renderInstance(render) {
      return render.createElement(InputVueUIComponent$1, {
        props: {
          target: this
        }
      }, [render.vueRoot.$slots["default"]]);
    }
  }]);

  return InputVueUI$3;
}(BasicVueUI);

var NumberVueUI$2 = /*#__PURE__*/function (_BasicVueUI6) {
  _inherits(NumberVueUI$2, _BasicVueUI6);

  var _super67 = _createSuper(NumberVueUI$2);

  function NumberVueUI$2(params) {
    _classCallCheck(this, NumberVueUI$2);

    return _super67.call(this, params);
  }

  _createClass(NumberVueUI$2, [{
    key: "renderInstance",
    value: function renderInstance(render) {
      return render.createElement(NumberVueUIComponent$1, {
        props: {
          target: this
        }
      }, [render.vueRoot.$slots["default"]]);
    }
  }]);

  return NumberVueUI$2;
}(BasicVueUI);

var TimePickerVueUI = /*#__PURE__*/function (_BasicVueUI7) {
  _inherits(TimePickerVueUI, _BasicVueUI7);

  var _super68 = _createSuper(TimePickerVueUI);

  function TimePickerVueUI(params) {
    _classCallCheck(this, TimePickerVueUI);

    return _super68.call(this, params);
  }

  _createClass(TimePickerVueUI, [{
    key: "renderInstance",
    value: function renderInstance(render) {
      return render.createElement(TimePickerVueUIComponent$1, {
        props: {
          target: this
        }
      }, [render.vueRoot.$slots["default"]]);
    }
  }]);

  return TimePickerVueUI;
}(BasicVueUI);

var TimeGroupVueUI = /*#__PURE__*/function (_BasicVueUI8) {
  _inherits(TimeGroupVueUI, _BasicVueUI8);

  var _super69 = _createSuper(TimeGroupVueUI);

  function TimeGroupVueUI(params) {
    var _this58;

    _classCallCheck(this, TimeGroupVueUI);

    _this58 = _super69.call(this, params);
    _this58.year = new Array(21).fill(2020).map(function (item, index) {
      return item - index;
    }).map(function (item) {
      return {
        key: item,
        value: item
      };
    });
    _this58.report = [{
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
    return _this58;
  }

  _createClass(TimeGroupVueUI, [{
    key: "renderInstance",
    value: function renderInstance(render) {
      return render.createElement(TimeGroupVueUIComponent$1, {
        props: {
          target: this
        }
      }, [render.vueRoot.$slots["default"]]);
    }
  }]);

  return TimeGroupVueUI;
}(BasicVueUI);

var SelectVueUI$2 = /*#__PURE__*/function (_BasicVueUI9) {
  _inherits(SelectVueUI$2, _BasicVueUI9);

  var _super70 = _createSuper(SelectVueUI$2);

  function SelectVueUI$2(params) {
    _classCallCheck(this, SelectVueUI$2);

    return _super70.call(this, params);
  }

  _createClass(SelectVueUI$2, [{
    key: "renderInstance",
    value: function renderInstance(render) {
      return render.createElement(SelectVueUIComponent$1, {
        props: {
          target: this
        }
      }, [render.vueRoot.$slots["default"]]);
    }
  }]);

  return SelectVueUI$2;
}(BasicVueUI);

var CheckBoxVueUI = /*#__PURE__*/function (_BasicVueUI10) {
  _inherits(CheckBoxVueUI, _BasicVueUI10);

  var _super71 = _createSuper(CheckBoxVueUI);

  function CheckBoxVueUI(params) {
    _classCallCheck(this, CheckBoxVueUI);

    return _super71.call(this, params);
  }

  _createClass(CheckBoxVueUI, [{
    key: "renderInstance",
    value: function renderInstance(render) {
      return render.createElement(CheckBoxVueUIComponent$1, {
        props: {
          target: this
        }
      }, [render.vueRoot.$slots["default"]]);
    }
  }]);

  return CheckBoxVueUI;
}(BasicVueUI);

var CheckBoxGroupVueUI = /*#__PURE__*/function (_BasicVueUI11) {
  _inherits(CheckBoxGroupVueUI, _BasicVueUI11);

  var _super72 = _createSuper(CheckBoxGroupVueUI);

  function CheckBoxGroupVueUI(params) {
    _classCallCheck(this, CheckBoxGroupVueUI);

    return _super72.call(this, params);
  }

  _createClass(CheckBoxGroupVueUI, [{
    key: "renderInstance",
    value: function renderInstance(render) {
      return render.createElement(CheckBoxGroupVueUIComponent$1, {
        props: {
          target: this
        }
      }, [render.vueRoot.$slots["default"]]);
    }
  }]);

  return CheckBoxGroupVueUI;
}(BasicVueUI);

var RadioVueUI = /*#__PURE__*/function (_BasicVueUI12) {
  _inherits(RadioVueUI, _BasicVueUI12);

  var _super73 = _createSuper(RadioVueUI);

  function RadioVueUI(params) {
    _classCallCheck(this, RadioVueUI);

    return _super73.call(this, params);
  }

  _createClass(RadioVueUI, [{
    key: "renderInstance",
    value: function renderInstance(render) {
      return render.createElement(RadioVueUIComponent$1, {
        props: {
          target: this
        }
      }, [render.vueRoot.$slots["default"]]);
    }
  }]);

  return RadioVueUI;
}(BasicVueUI);

var MulSelectVueUI$2 = /*#__PURE__*/function (_BasicVueUI13) {
  _inherits(MulSelectVueUI$2, _BasicVueUI13);

  var _super74 = _createSuper(MulSelectVueUI$2);

  function MulSelectVueUI$2(params) {
    _classCallCheck(this, MulSelectVueUI$2);

    return _super74.call(this, params);
  }

  _createClass(MulSelectVueUI$2, [{
    key: "renderInstance",
    value: function renderInstance(render) {
      return render.createElement(MulSelectVueUIComponent$1, {
        props: {
          target: this
        }
      }, [render.vueRoot.$slots["default"]]);
    }
  }]);

  return MulSelectVueUI$2;
}(BasicVueUI);

var IframeVueUI = /*#__PURE__*/function (_BasicVueUI14) {
  _inherits(IframeVueUI, _BasicVueUI14);

  var _super75 = _createSuper(IframeVueUI);

  function IframeVueUI(params) {
    _classCallCheck(this, IframeVueUI);

    return _super75.call(this, params);
  }

  _createClass(IframeVueUI, [{
    key: "renderInstance",
    value: function renderInstance(render) {
      return render.createElement(IframeVueUIComponent$1, {
        props: {
          target: this
        }
      }, [render.vueRoot.$slots["default"]]);
    }
  }]);

  return IframeVueUI;
}(BasicVueUI);

var TableCol = /*#__PURE__*/function () {
  function TableCol(params) {
    _classCallCheck(this, TableCol);

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
    this.children = (params.children || []).map(function (item) {
      return new TableCol(item);
    });
  }

  _createClass(TableCol, [{
    key: "render",
    value: function render(h, data, row) {
      var key = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.prop;

      if (this.convert) {
        return h('span', {}, [this.convert(h, data, this, row)]);
      } else {
        return h('span', {}, [row[key]]);
      }
    }
  }]);

  return TableCol;
}();

var TableVueUI = /*#__PURE__*/function (_BasicVueUI15) {
  _inherits(TableVueUI, _BasicVueUI15);

  var _super76 = _createSuper(TableVueUI);

  function TableVueUI(params) {
    var _this59;

    _classCallCheck(this, TableVueUI);

    _this59 = _super76.call(this, params);
    _this59.list = [];
    _this59.loading = false;
    _this59.cols = [];
    _this59.direction = 'vertical';
    _this59.showHeader = true;
    _this59.mergetList = [];
    _this59.mergeCols = [];
    _this59.mergeShowHeader = false;

    _this59.setData();

    return _this59;
  }

  _createClass(TableVueUI, [{
    key: "setData",
    value: function setData() {
      this.cols.push(new TableCol({
        label: 'test',
        prop: 'test'
      }));
      this.cols.push(new TableCol({
        label: 'aaaaa',
        prop: 'test2'
      }));
      this.list = [{
        test: "a",
        test2: 'v'
      }, {
        test: "b",
        test2: 'q'
      }];
      this.merge();
    }
  }, {
    key: "merge",
    value: function merge() {
      if (this.direction === 'vertical') {
        this.mergeShowHeader = this.showHeader;
        this.mergetList = this.list.concat();
        this.mergeCols = this.cols.concat();
      } else {
        this.mergeShowHeader = false;
        this.mergetList = this.cols.map(function (item) {
          return {
            prop: item.prop
          };
        });
        this.mergeCols = [new TableCol({
          prop: 'homeTitle'
        })].concat(this.list.map(function (item, index) {
          return new TableCol({
            prop: index.toString()
          });
        }));
      }
    }
  }, {
    key: "getTableRow",
    value: function getTableRow(scope, item) {
      if (this.direction === 'vertical') {
        return scope.row;
      } else {
        if (item.prop == "homeTitle") {
          var target = this.cols.find(function (t) {
            return t.prop == scope.row.prop;
          });

          if (target) {
            return _defineProperty({}, scope.row.prop, target.label);
          } else {
            return _defineProperty({}, scope.row.prop, '');
          }
        }

        return this.list[item.prop];
      }
    }
  }, {
    key: "getTableKey",
    value: function getTableKey(scope, item) {
      if (this.direction === 'vertical') {
        return item.prop;
      } else {
        return scope.row.prop;
      }
    }
  }, {
    key: "renderInstance",
    value: function renderInstance(render) {
      return render.createElement(TableVueUIComponent$1, {
        props: {
          target: this
        }
      }, [render.vueRoot.$slots["default"]]);
    }
  }]);

  return TableVueUI;
}(BasicVueUI);

var TableDataConfigVueUI = /*#__PURE__*/function (_VueUI11) {
  _inherits(TableDataConfigVueUI, _VueUI11);

  var _super77 = _createSuper(TableDataConfigVueUI);

  function TableDataConfigVueUI(params) {
    var _this60;

    _classCallCheck(this, TableDataConfigVueUI);

    _this60 = _super77.call(this, params);
    _this60.cols = [];
    _this60.data = [];
    _this60.simulate = new SimulateVueUI({});

    _this60.check();

    return _this60;
  }

  _createClass(TableDataConfigVueUI, [{
    key: "addCol",
    value: function addCol() {
      this.cols.push(new TableCol({}));
    }
  }, {
    key: "delCol",
    value: function delCol(index) {
      this.cols.splice(index, 1);
    }
  }, {
    key: "check",
    value: function check() {
      if (this.cols.length == 0) {
        this.addCol();
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      var oldValue = this.value;
      this.value = value;
      this.check();

      if (oldValue != this.value) {
        this.onChange({
          val: this.value,
          oldVal: oldValue
        });
      }
    }
  }, {
    key: "renderInstance",
    value: function renderInstance(render) {
      return render.createElement(TableDataConfigVueUIComponent$1, {
        props: {
          target: this
        }
      }, [render.vueRoot.$slots["default"], this.simulate.render(render)]);
    }
  }]);

  return TableDataConfigVueUI;
}(VueUI);

var apiParams = [{
  type: 'id',
  key: 'id',
  props: {
    label: 'id',
    show: false
  }
}, {
  type: 'input',
  key: 'name',
  props: {
    label: '名称'
  }
}, {
  type: 'select',
  key: 'config',
  props: {
    label: '名称',
    optionsArray: [{
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
    }],
    configVisible: false
  }
}, {
  type: 'object',
  key: 'getParam',
  props: {
    label: 'get参数'
  }
}, {
  type: 'object',
  key: 'postParam',
  props: {
    label: 'post参数'
  }
}];
var eventParams = [{
  type: 'id',
  key: 'id',
  props: {
    label: 'id',
    show: false
  }
}, {
  type: 'input',
  key: 'name',
  props: {
    label: '名称'
  }
}, {
  type: 'select',
  key: 'type',
  props: {
    label: '事件类型',
    optionsArray: [{
      key: 'EventDispatcher',
      value: 'EventDispatcher'
    }, {
      key: 'ObserverSubject',
      value: 'ObserverSubject'
    }],
    configVisible: false
  }
}];
var outParams = [{
  type: 'eventList',
  key: 'tid',
  props: {
    label: 'id'
  }
}, {
  type: 'select',
  key: 'key',
  props: {
    label: '事件类型',
    optionsArray: eventOptions.map(function (item) {
      return {
        key: item,
        value: item
      };
    }),
    configVisible: false
  }
}];
var inParams = [{
  type: 'eventList',
  key: 'tid',
  props: {
    label: 'id'
  }
}];

var GeneratePiece = /*#__PURE__*/function () {
  function GeneratePiece() {
    _classCallCheck(this, GeneratePiece);

    this.uiList = new VueUIList();
    this.uiList.addTemplate({
      key: '',
      value: VueUI
    });
    this.uiList.addTemplate({
      key: 'input',
      value: InputVueUI$2
    });
    this.uiList.addTemplate({
      key: 'array',
      value: ArrayVueUI$1
    });
    this.uiList.addTemplate({
      key: 'object',
      value: ObjectVueUI$1
    });
    this.uiList.addTemplate({
      key: 'mulSelect',
      value: MulSelectVueUI$1
    });
    this.uiList.addTemplate({
      key: 'select',
      value: SelectVueUI$1
    });
    this.uiList.addTemplate({
      key: 'number',
      value: NumberVueUI$1
    });
    this.uiList.addTemplate({
      key: 'boolean',
      value: BooleanVueUI
    });
  }

  _createClass(GeneratePiece, [{
    key: "add",
    value: function add(_ref6) {
      var key = _ref6.key,
          value = _ref6.value;

      if (!this.uiList.getTemplate().find(function (item) {
        return item.key == key;
      })) {
        this.uiList.addTemplate({
          key: key,
          value: value
        });
      }
    }
  }, {
    key: "remove",
    value: function remove(name) {
      this.uiList.removeTemplate(name);
    }
  }, {
    key: "generate",
    value: function generate(list) {
      this.uiList.setList(list);
      return this.uiList.list;
    }
  }, {
    key: "render",
    value: function render(_render2) {
      return this.uiList.getRenderList(_render2);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.uiList.getValue();
    }
  }]);

  return GeneratePiece;
}();

var ModuleGenrate = /*#__PURE__*/function (_GeneratePiece) {
  _inherits(ModuleGenrate, _GeneratePiece);

  var _super78 = _createSuper(ModuleGenrate);

  function ModuleGenrate() {
    var _this61;

    _classCallCheck(this, ModuleGenrate);

    _this61 = _super78.call(this);
    _this61.isCompiler = false;

    _this61.uiList.clearTemplate();

    _this61.add({
      key: '1',
      value: ContainerVueUI
    });

    _this61.add({
      key: '2',
      value: CardContainerVueUI
    });

    _this61.add({
      key: '3',
      value: DialogContainerVueUI
    });

    _this61.add({
      key: '4',
      value: ButtonVueUI
    });

    _this61.add({
      key: '5',
      value: InputVueUI$3
    });

    _this61.add({
      key: '6',
      value: NumberVueUI$2
    });

    _this61.add({
      key: '7',
      value: TimePickerVueUI
    });

    _this61.add({
      key: '8',
      value: TimeGroupVueUI
    });

    _this61.add({
      key: '9',
      value: SelectVueUI$2
    });

    _this61.add({
      key: '10',
      value: CheckBoxVueUI
    });

    _this61.add({
      key: '11',
      value: CheckBoxGroupVueUI
    });

    _this61.add({
      key: '12',
      value: RadioVueUI
    });

    _this61.add({
      key: '13',
      value: MulSelectVueUI$2
    });

    _this61.add({
      key: '17',
      value: TableVueUI
    });

    _this61.add({
      key: '18',
      value: IframeVueUI
    });

    return _this61;
  }

  _createClass(ModuleGenrate, [{
    key: "setTarget",
    value: function setTarget(ui) {
      this.uiList.setList([{
        key: ui.id,
        props: {
          ui: ui,
          isCompiler: this.isCompiler
        },
        type: ui.typeId
      }]);
    }
  }]);

  return ModuleGenrate;
}(GeneratePiece);

var ApiGenerate = /*#__PURE__*/function (_GeneratePiece2) {
  _inherits(ApiGenerate, _GeneratePiece2);

  var _super79 = _createSuper(ApiGenerate);

  function ApiGenerate() {
    var _this62;

    _classCallCheck(this, ApiGenerate);

    _this62 = _super79.call(this);

    _this62.generate(apiParams);

    return _this62;
  }

  return ApiGenerate;
}(GeneratePiece);

var EventGenerate = /*#__PURE__*/function (_GeneratePiece3) {
  _inherits(EventGenerate, _GeneratePiece3);

  var _super80 = _createSuper(EventGenerate);

  function EventGenerate() {
    var _this63;

    _classCallCheck(this, EventGenerate);

    _this63 = _super80.call(this);

    _this63.generate(eventParams);

    return _this63;
  }

  return EventGenerate;
}(GeneratePiece);

var InEventGenerate = /*#__PURE__*/function (_GeneratePiece4) {
  _inherits(InEventGenerate, _GeneratePiece4);

  var _super81 = _createSuper(InEventGenerate);

  function InEventGenerate() {
    var _this64;

    _classCallCheck(this, InEventGenerate);

    _this64 = _super81.call(this);

    _this64.add({
      key: 'eventList',
      value: EventListVueUI
    });

    _this64.generate(inParams);

    return _this64;
  }

  return InEventGenerate;
}(GeneratePiece);

var OutEventGenerate = /*#__PURE__*/function (_GeneratePiece5) {
  _inherits(OutEventGenerate, _GeneratePiece5);

  var _super82 = _createSuper(OutEventGenerate);

  function OutEventGenerate() {
    var _this65;

    _classCallCheck(this, OutEventGenerate);

    _this65 = _super82.call(this);

    _this65.add({
      key: 'eventList',
      value: EventListVueUI
    });

    _this65.generate(outParams);

    return _this65;
  }

  return OutEventGenerate;
}(GeneratePiece);

var PropGeneratePiece = /*#__PURE__*/function (_GeneratePiece6) {
  _inherits(PropGeneratePiece, _GeneratePiece6);

  var _super83 = _createSuper(PropGeneratePiece);

  function PropGeneratePiece() {
    var _this66;

    _classCallCheck(this, PropGeneratePiece);

    _this66 = _super83.call(this);

    _this66.add({
      key: 'tableDataConfig',
      value: TableDataConfigVueUI
    });

    _this66.generate(outParams);

    return _this66;
  }

  return PropGeneratePiece;
}(GeneratePiece);

exports.ApiGenerate = ApiGenerate;
exports.EventGenerate = EventGenerate;
exports.GeneratePiece = GeneratePiece;
exports.InEventGenerate = InEventGenerate;
exports.ModuleGenrate = ModuleGenrate;
exports.OutEventGenerate = OutEventGenerate;
exports.PropGeneratePiece = PropGeneratePiece;
exports.addApi = addApi;
exports.addEvent = addEvent;
exports.apiList = apiList;
exports.basicModules = basicModules;
exports.clearCurrentEl = clearCurrentEl;
exports.compilerInstance = compilerInstance;
exports.containerModules = containerModules;
exports.continerModules = continerModules;
exports.editorInstance = editorInstance;
exports.eventList = eventList;
exports.generateModule = generateModule;
exports.mergeModules = mergeModules;
exports.removeApi = removeApi;
exports.removeEvent = removeEvent;
exports.restoreFromConfig = restoreFromConfig;
exports.restoreFromEdit = restoreFromEdit;
exports.restoreInstance = restoreInstance;
exports.saveFromConfig = saveFromConfig;
exports.saveFromEdit = saveFromEdit;
exports.setCurrentModule = setCurrentModule;
exports.setEditorInstance = setEditorInstance;
