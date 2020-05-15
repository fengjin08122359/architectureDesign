function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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

var Basic = function (t) {
  "use strict";

  var e = /*#__PURE__*/function () {
    function e() {
      _classCallCheck(this, e);

      this.datas = [];
    }

    _createClass(e, [{
      key: "add",
      value: function add(t) {
        this.datas.push(t);
      }
    }, {
      key: "remove",
      value: function remove(t) {
        this.datas = this.datas.filter(function (e) {
          return e.name !== t;
        });
      }
    }, {
      key: "get",
      value: function get() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        return this.datas.filter(function (e) {
          return "" === t || e.name === t;
        });
      }
    }]);

    return e;
  }();

  var s = /*#__PURE__*/function () {
    function s() {
      _classCallCheck(this, s);

      this.handlers = [];
    }

    _createClass(s, [{
      key: "add",
      value: function add(t) {
        this.handlers.push(t);
      }
    }, {
      key: "remove",
      value: function remove(t) {
        this.handlers = this.handlers.filter(function (e) {
          return e.name !== t;
        });
      }
    }, {
      key: "get",
      value: function get(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        return this.handlers.filter(function (t) {
          return "" === e || t.name === e;
        }).map(function (e) {
          return {
            name: e.name,
            res: e.fun(t)
          };
        });
      }
    }]);

    return s;
  }();

  var a = /*#__PURE__*/function () {
    function a() {
      _classCallCheck(this, a);

      this.EventList = new Array();
    }

    _createClass(a, [{
      key: "addEventListener",
      value: function addEventListener(t, e) {
        this.EventList.push({
          name: t,
          listener: e
        });
      }
    }, {
      key: "removeEventListener",
      value: function removeEventListener(t) {
        this.EventList = this.EventList.filter(function (e) {
          return e.name !== t;
        });
      }
    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(t, e) {
        this.EventList.filter(function (e) {
          return e.name === t;
        }).map(function (t) {
          return t.listener;
        }).forEach(function (t) {
          return t(e);
        });
      }
    }], [{
      key: "getInstance",
      value: function getInstance() {
        return this.instance = this.instance || new a(), this.instance;
      }
    }]);

    return a;
  }();

  return t.Auth = /*#__PURE__*/function () {
    function _class() {
      _classCallCheck(this, _class);

      this.judgeList = [];
    }

    _createClass(_class, [{
      key: "add",
      value: function add(t) {
        this.judgeList.push(t);
      }
    }, {
      key: "remove",
      value: function remove(t) {
        this.judgeList = this.judgeList.filter(function (e) {
          return e.name !== t;
        });
      }
    }, {
      key: "match",
      value: function match() {
        for (var _len = arguments.length, t = new Array(_len), _key = 0; _key < _len; _key++) {
          t[_key] = arguments[_key];
        }

        var e = this.judgeList.map(function (e) {
          return e.fun(t);
        }, []),
            s = this.judgeList.map(function (t) {
          return t;
        });
        return new Promise(function (t) {
          Promise.all(e).then(function (e) {
            e.forEach(function (e, a) {
              e && t(s[a].name);
            }), t("");
          });
        });
      }
    }]);

    return _class;
  }(), t.DataList = e, t.ErrorCode = /*#__PURE__*/function () {
    function _class2() {
      _classCallCheck(this, _class2);

      this.dataList = new e();
    }

    _createClass(_class2, [{
      key: "collect",
      value: function collect(t) {
        this.dataList.add({
          name: "errorCode",
          data: t
        });
      }
    }, {
      key: "get",
      value: function get() {
        return this.dataList.get("errorCode").map(function (t) {
          return t.data;
        });
      }
    }]);

    return _class2;
  }(), t.EventDispatcher = a, t.HanderList = s, t.Intercept = /*#__PURE__*/function (_s) {
    _inherits(_class3, _s);

    var _super = _createSuper(_class3);

    function _class3() {
      var _this;

      _classCallCheck(this, _class3);

      _this = _super.call(this), _this.handlers = [];
      return _this;
    }

    _createClass(_class3, [{
      key: "addIntercept",
      value: function addIntercept(t) {
        this.add(t);
      }
    }, {
      key: "removeIntercept",
      value: function removeIntercept(t) {
        this.remove(t);
      }
    }, {
      key: "getIntercept",
      value: function getIntercept(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        return this.get(t, e).filter(function (t) {
          return t.res;
        }).map(function (t) {
          return t.name;
        });
      }
    }]);

    return _class3;
  }(s), t.Log = /*#__PURE__*/function () {
    function _class4() {
      _classCallCheck(this, _class4);

      this.dataList = new e();
    }

    _createClass(_class4, [{
      key: "log",
      value: function log() {
        for (var _len2 = arguments.length, t = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          t[_key2] = arguments[_key2];
        }

        this.dataList.add({
          name: "log",
          data: t
        });
      }
    }, {
      key: "error",
      value: function error() {
        for (var _len3 = arguments.length, t = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          t[_key3] = arguments[_key3];
        }

        this.dataList.add({
          name: "error",
          data: t
        });
      }
    }, {
      key: "debug",
      value: function debug() {
        for (var _len4 = arguments.length, t = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          t[_key4] = arguments[_key4];
        }

        this.dataList.add({
          name: "debug",
          data: t
        });
      }
    }, {
      key: "info",
      value: function info() {
        for (var _len5 = arguments.length, t = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          t[_key5] = arguments[_key5];
        }

        this.dataList.add({
          name: "info",
          data: t
        });
      }
    }, {
      key: "warn",
      value: function warn() {
        for (var _len6 = arguments.length, t = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          t[_key6] = arguments[_key6];
        }

        this.dataList.add({
          name: "warn",
          data: t
        });
      }
    }, {
      key: "get",
      value: function get() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        return this.dataList.get(t).map(function (t) {
          return t.data;
        });
      }
    }]);

    return _class4;
  }(), t.ObserverSubject = /*#__PURE__*/function () {
    function _class5() {
      _classCallCheck(this, _class5);

      this.observers = [];
    }

    _createClass(_class5, [{
      key: "registerObserver",
      value: function registerObserver(t) {
        this.observers.push(t);
      }
    }, {
      key: "removeObserver",
      value: function removeObserver(t) {
        var e = this.observers.indexOf(t);
        -1 !== e && this.observers.splice(e, 1);
      }
    }, {
      key: "notifyObservers",
      value: function notifyObservers(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.observers;

        var _iterator = _createForOfIteratorHelper(e),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _s2 = _step.value;

            _s2.update(t);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }]);

    return _class5;
  }(), t.Storage = /*#__PURE__*/function () {
    function _class6() {
      _classCallCheck(this, _class6);

      this.storage = {};
    }

    _createClass(_class6, [{
      key: "get",
      value: function get(t) {
        return this.storage[t];
      }
    }, {
      key: "set",
      value: function set(t, e) {
        this.storage[t] = e;
      }
    }, {
      key: "remove",
      value: function remove(t) {
        this.storage[t] = void 0;
      }
    }, {
      key: "clear",
      value: function clear() {
        this.storage = {};
      }
    }]);

    return _class6;
  }(), t;
}({});
