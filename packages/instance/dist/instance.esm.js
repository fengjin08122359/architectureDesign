(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.unknown = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.UIList = _exports.Storage = _exports.SingleUI = _exports.ObserverSubject = _exports.Log = _exports.Intercept = _exports.HanderList = _exports.EventDispatcher = _exports.ErrorCode = _exports.DataList = _exports.Auth = void 0;

  function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

  var Auth = /*#__PURE__*/function () {
    function Auth() {
      _classCallCheck(this, Auth);

      this.judgeList = [];
    }
    /**
     *add
     *
     * @param {Judge} judge
     * @memberof Auth
     */


    _createClass(Auth, [{
      key: "add",
      value: function add(judge) {
        this.judgeList.push(judge);
      }
      /**
       *add
       *
       * @param {string} name
       * @memberof Auth
       */

    }, {
      key: "remove",
      value: function remove(name) {
        this.judgeList = this.judgeList.filter(function (item) {
          return item.name !== name;
        });
      }
      /**
       *match
       *
       * @param {any[]} res[]
       * @returns {Promise}
       * @memberof Auth
       */

    }, {
      key: "match",
      value: function match() {
        for (var _len = arguments.length, res = new Array(_len), _key = 0; _key < _len; _key++) {
          res[_key] = arguments[_key];
        }

        var matchList = this.judgeList.map(function (current) {
          return current.fun(res);
        }, []);
        var currentList = this.judgeList.map(function (item) {
          return item;
        });
        return new Promise(function (resolve) {
          Promise.all(matchList).then(function (result) {
            result.forEach(function (item, index) {
              if (item) {
                resolve(currentList[index].name);
              }
            });
            resolve("");
          });
        });
      }
    }]);

    return Auth;
  }();

  _exports.Auth = Auth;

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
    }]);

    return DataList;
  }();

  _exports.DataList = DataList;

  var ErrorCode = /*#__PURE__*/function () {
    function ErrorCode() {
      _classCallCheck(this, ErrorCode);

      this.dataList = new DataList();
    }
    /**
     *collect
     *
     * @param {any} data
     * @memberof ErrorCode
     */


    _createClass(ErrorCode, [{
      key: "collect",
      value: function collect(data) {
        this.dataList.add({
          name: "errorCode",
          data: data
        });
      }
      /**
       *get
       *
       * @memberof ErrorCode
       */

    }, {
      key: "get",
      value: function get() {
        return this.dataList.get("errorCode").map(function (item) {
          return item.data;
        });
      }
    }]);

    return ErrorCode;
  }();

  _exports.ErrorCode = ErrorCode;

  var HanderList = /*#__PURE__*/function () {
    function HanderList() {
      _classCallCheck(this, HanderList);

      this.handlers = [];
    }
    /**
     *add
     *
     * @param {Handler} handler
     * @memberof HanderList
     */


    _createClass(HanderList, [{
      key: "add",
      value: function add(handler) {
        this.handlers.push(handler);
      }
      /**
       *remove
       *
       * @param {string} name
       * @memberof HanderList
       */

    }, {
      key: "remove",
      value: function remove(name) {
        this.handlers = this.handlers.filter(function (handler) {
          return handler.name !== name;
        });
      }
      /**
       *get
       *
       * @param {any} input
       * @returns {HandlerRes[]}
       * @memberof HanderList
       */

    }, {
      key: "get",
      value: function get(input) {
        var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        return this.handlers.filter(function (handler) {
          return name === "" || handler.name === name;
        }).map(function (handler) {
          return {
            name: handler.name,
            res: handler.fun(input)
          };
        });
      }
    }]);

    return HanderList;
  }();

  _exports.HanderList = HanderList;

  var Intercept = /*#__PURE__*/function (_HanderList) {
    _inherits(Intercept, _HanderList);

    var _super = _createSuper(Intercept);

    function Intercept() {
      var _this;

      _classCallCheck(this, Intercept);

      _this = _super.call(this);
      _this.handlers = [];
      return _this;
    }
    /**
     *addIntercept
     *
     * @param {InterceptHandler} handler
     * @memberof Intercept
     */


    _createClass(Intercept, [{
      key: "addIntercept",
      value: function addIntercept(handler) {
        this.add(handler);
      }
      /**
       *removeIntercept
       *
       * @param {string} name
       * @memberof Intercept
       */

    }, {
      key: "removeIntercept",
      value: function removeIntercept(name) {
        this.remove(name);
      }
      /**
       *getIntercept
       *
       * @param {any} input
       * @memberof Intercept
       */

    }, {
      key: "getIntercept",
      value: function getIntercept(input) {
        var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        return this.get(input, name).filter(function (target) {
          return target.res;
        }).map(function (target) {
          return target.name;
        });
      }
    }]);

    return Intercept;
  }(HanderList);

  _exports.Intercept = Intercept;

  var Log = /*#__PURE__*/function () {
    function Log() {
      _classCallCheck(this, Log);

      this.dataList = new DataList();
    }
    /**
     *log
     *
     * @param {any[]} rest[]
     * @memberof Log
     */


    _createClass(Log, [{
      key: "log",
      value: function log() {
        for (var _len2 = arguments.length, rest = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          rest[_key2] = arguments[_key2];
        }

        this.dataList.add({
          name: "log",
          data: rest
        });
      }
      /**
       *error
       *
       * @param {any[]} rest[]
       * @memberof Log
       */

    }, {
      key: "error",
      value: function error() {
        for (var _len3 = arguments.length, rest = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          rest[_key3] = arguments[_key3];
        }

        this.dataList.add({
          name: "error",
          data: rest
        });
      }
      /**
       *debug
       *
       * @param {any[]} rest[]
       * @memberof Log
       */

    }, {
      key: "debug",
      value: function debug() {
        for (var _len4 = arguments.length, rest = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          rest[_key4] = arguments[_key4];
        }

        this.dataList.add({
          name: "debug",
          data: rest
        });
      }
      /**
       *info
       *
       * @param {any[]} rest[]
       * @memberof Log
       */

    }, {
      key: "info",
      value: function info() {
        for (var _len5 = arguments.length, rest = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          rest[_key5] = arguments[_key5];
        }

        this.dataList.add({
          name: "info",
          data: rest
        });
      }
      /**
       *warn
       *
       * @param {any[]} rest[]
       * @memberof Log
       */

    }, {
      key: "warn",
      value: function warn() {
        for (var _len6 = arguments.length, rest = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          rest[_key6] = arguments[_key6];
        }

        this.dataList.add({
          name: "warn",
          data: rest
        });
      }
      /**
       *error
       *
       * @param {string} name
       * @memberof Log
       */

    }, {
      key: "get",
      value: function get() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        return this.dataList.get(name).map(function (item) {
          return item.data;
        });
      }
    }]);

    return Log;
  }();

  _exports.Log = Log;

  var EventDispatcher = /*#__PURE__*/function () {
    function EventDispatcher() {
      _classCallCheck(this, EventDispatcher);

      this.EventList = new Array();
    }
    /**
     *EventDispatcher
     *
     * @static
     * @returns {EventDispatcher}
     * @memberof EventDispatcher
     */


    _createClass(EventDispatcher, [{
      key: "addEventListener",

      /**
       *addEventListener
       *
       * @param {string} name
       * @param {Listener} listener
       * @memberof EventDispatcher
       */
      value: function addEventListener(name, listener) {
        this.EventList.push({
          name: name,
          listener: listener
        });
      }
      /**
       *removeEventListener
       *
       * @param {string} name
       * @memberof EventDispatcher
       */

    }, {
      key: "removeEventListener",
      value: function removeEventListener(name) {
        this.EventList = this.EventList.filter(function (event) {
          return event.name !== name;
        });
      }
      /**
       *dispatchEvent
       *
       * @param {string} name
       * @param {*} [message]
       * @memberof EventDispatcher
       */

    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(name, message) {
        this.EventList.filter(function (event) {
          return event.name === name;
        }).map(function (event) {
          return event.listener;
        }).forEach(function (listener) {
          return listener(message);
        });
      }
    }], [{
      key: "getInstance",
      value: function getInstance() {
        this.instance = this.instance || new EventDispatcher();
        return this.instance;
      }
    }]);

    return EventDispatcher;
  }();

  _exports.EventDispatcher = EventDispatcher;

  var ObserverSubject = /*#__PURE__*/function () {
    function ObserverSubject() {
      _classCallCheck(this, ObserverSubject);

      this.observers = [];
    }
    /**
     *registerObserver
     *
     * @param {Observer} observer
     * @memberof ObserverSubject
     */


    _createClass(ObserverSubject, [{
      key: "registerObserver",
      value: function registerObserver(observer) {
        //注册观察者
        this.observers.push(observer);
      }
      /**
       *removeObserver
       *
       * @param {Observer} observer
       * @memberof ObserverSubject
       */

    }, {
      key: "removeObserver",
      value: function removeObserver(observer) {
        //注销观察者
        var index = this.observers.indexOf(observer);

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

    }, {
      key: "notifyObservers",
      value: function notifyObservers(target) {
        var observers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.observers;

        // 通知观察者
        var _iterator = _createForOfIteratorHelper(observers),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var observer = _step.value;
            observer.update(target); // 更新
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }]);

    return ObserverSubject;
  }();

  _exports.ObserverSubject = ObserverSubject;

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

  _exports.Storage = Storage;

  var SingleUI = /*#__PURE__*/function () {
    function SingleUI(params) {
      _classCallCheck(this, SingleUI);

      this.key = params.key || ""; //键

      this.props = params.props || {
        label: "",
        required: "",
        data: [],
        disabled: false,
        show: true,
        placeholder: ""
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
       *save
       * @param {string} value
       * @memberof SingleUI
       */

    }, {
      key: "save",
      value: function save(value) {
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
        var _this2 = this;

        var result = {
          success: true,
          message: "",
          type: "success"
        };
        return new Promise(function (resolve) {
          if (!_this2.key) {
            resolve(result);
            return;
          }

          if (_this2.props.required && !_this2.hasChange()) {
            result = {
              success: false,
              message: _this2.props.label || "",
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
        var _this3 = this;

        var key = _ref2.key,
            value = _ref2.value,
            children = _ref2.children;

        if (this.getKey() != "" && this.getKey() == key) {
          this.save(value);
          children.forEach(function (item) {
            var target = _this3.children.find(function (target) {
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

  _exports.SingleUI = SingleUI;

  var UIList = /*#__PURE__*/function () {
    function UIList(list, options) {
      _classCallCheck(this, UIList);

      this.options = options || {
        needValidHidden: false
      };
      this.needValidHidden = this.options.needValidHidden;
      this.rawList = list;
      this.list = [];
      this.templateList = [];
      this.reset();
    }
    /**
     *reset
     *
     * @memberof UIList
     */


    _createClass(UIList, [{
      key: "reset",
      value: function reset() {
        var _this4 = this;

        this.list = this.rawList.map(function (item) {
          var target = _this4.convert(item); // 需要根据类型判断使用的


          if (target.children) {
            target.children = new UIList(target.children, _this4.options).list;
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
       * @protected
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
          return new SingleUI(item);
        }
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
        var _this5 = this;

        // 子节点查询
        var valid = this.getAllItems().filter(function (item) {
          return _this5.needValidHidden || item.props.show != false;
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
       *save
       * @param {SingleUIValuePayload} data
       * @memberof UIList
       */

    }, {
      key: "save",
      value: function save(data) {
        var _this6 = this;

        // [{key:"",value:"", children: [{key:"",value:"", children:[]}]}]
        data.forEach(function (item) {
          var target = _this6.list.find(function (target) {
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
        return new Promise(function (resolve) {
          resolve();
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
        var _this7 = this;

        return this.loadComponents().then(function () {
          _this7.getAllItems().forEach(function (item) {
            item.canRender = true;
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
    }]);

    return UIList;
  }();

  _exports.UIList = UIList;
});
