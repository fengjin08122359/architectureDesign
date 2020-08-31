'use strict';

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

Object.defineProperty(exports, '__esModule', {
  value: true
});

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

var Debounce = /*#__PURE__*/function () {
  function Debounce() {
    _classCallCheck(this, Debounce);

    this.timeout = null;
  }

  _createClass(Debounce, [{
    key: "do",
    value: function _do(handle, wait) {
      var _arguments = arguments,
          _this2 = this;

      if (this.timeout !== null) {
        clearTimeout(this.timeout);
      }

      this.timeout = setTimeout(function () {
        handle.apply(_this2, _arguments);
        _this2.timeout = null;
      }, wait);
    }
  }]);

  return Debounce;
}();

var Throttle = /*#__PURE__*/function () {
  function Throttle() {
    _classCallCheck(this, Throttle);

    this.timeout = null;
    this.lastTriggerTime = null;
    this.lastExecutedTime = null;
    this.executeOncePerWait = false;
    this.immediate = false;
  }

  _createClass(Throttle, [{
    key: "do",
    value: function _do(handle, wait) {
      var _arguments2 = arguments,
          _this3 = this;

      !this.executeOncePerWait && (this.lastTriggerTime = Date.now());
      var callNow = this.immediate && !this.timeout;

      if (!this.timeout) {
        this.executeOncePerWait && (this.lastExecutedTime = Date.now());
        this.timeout = setTimeout(function () {
          _this3.later(handle, wait, _arguments2);
        }, wait);
      }

      if (callNow) {
        this.executeOncePerWait && (this.lastExecutedTime = Date.now());
        handle.apply(this, arguments);
      }
    }
  }, {
    key: "later",
    value: function later(handle, wait, args) {
      var _this4 = this;

      var last = Date.now() - ((this.executeOncePerWait ? this.lastExecutedTime : this.lastTriggerTime) || 0);

      if (last < wait && last > 0) {
        setTimeout(function () {
          _this4.later(handle, wait, args);
        }, wait - last);
      } else {
        if (!this.immediate) {
          this.executeOncePerWait && (this.lastExecutedTime = Date.now());
          handle.apply(this, args);
        }

        this.timeout = null;
      }
    }
  }]);

  return Throttle;
}();

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

exports.Auth = Auth;
exports.DataList = DataList;
exports.Debounce = Debounce;
exports.ErrorCode = ErrorCode;
exports.EventDispatcher = EventDispatcher;
exports.HanderList = HanderList;
exports.Intercept = Intercept;
exports.Log = Log;
exports.ObserverSubject = ObserverSubject;
exports.Storage = Storage;
exports.Throttle = Throttle;
