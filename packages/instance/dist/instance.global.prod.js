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

var Istance = function (e) {
  "use strict";

  var t = /*#__PURE__*/function () {
    function t() {
      _classCallCheck(this, t);

      this.datas = [];
    }

    _createClass(t, [{
      key: "add",
      value: function add(e) {
        this.datas.push(e);
      }
    }, {
      key: "remove",
      value: function remove(e) {
        this.datas = this.datas.filter(function (t) {
          return t.name !== e;
        });
      }
    }, {
      key: "get",
      value: function get() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        return this.datas.filter(function (t) {
          return "" === e || t.name === e;
        });
      }
    }]);

    return t;
  }();

  var s = /*#__PURE__*/function () {
    function s() {
      _classCallCheck(this, s);

      this.handlers = [];
    }

    _createClass(s, [{
      key: "add",
      value: function add(e) {
        this.handlers.push(e);
      }
    }, {
      key: "remove",
      value: function remove(e) {
        this.handlers = this.handlers.filter(function (t) {
          return t.name !== e;
        });
      }
    }, {
      key: "get",
      value: function get(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        return this.handlers.filter(function (e) {
          return "" === t || e.name === t;
        }).map(function (t) {
          return {
            name: t.name,
            res: t.fun(e)
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
      value: function addEventListener(e, t) {
        this.EventList.push({
          name: e,
          listener: t
        });
      }
    }, {
      key: "removeEventListener",
      value: function removeEventListener(e) {
        this.EventList = this.EventList.filter(function (t) {
          return t.name !== e;
        });
      }
    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(e, t) {
        this.EventList.filter(function (t) {
          return t.name === e;
        }).map(function (e) {
          return e.listener;
        }).forEach(function (e) {
          return e(t);
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

  var r = /*#__PURE__*/function () {
    function r(e) {
      _classCallCheck(this, r);

      this.key = e.key || "", this.props = e.props || {
        label: "",
        required: "",
        data: [],
        disabled: !1,
        show: !0,
        placeholder: ""
      }, this.valid = e.valid || [], this.type = e.type || "", this.value = void 0 === e.value ? "" : e.value, this.children = e.children || [], this.rawData = e, this.rawComponents = e.rawComponents || [], this.canRender = !1;
    }

    _createClass(r, [{
      key: "dataFind",
      value: function dataFind(e) {
        var t = null;
        return (this.props.data || []).forEach(function (s) {
          void 0 !== s[e] && (t = s[e]);
        }), t;
      }
    }, {
      key: "save",
      value: function save(e) {
        var t = this.value;
        this.value = e, t != this.value && this.onChange({
          val: this.value,
          oldVal: t
        });
      }
    }, {
      key: "getKey",
      value: function getKey() {
        return this.key;
      }
    }, {
      key: "getValue",
      value: function getValue() {
        return this.value;
      }
    }, {
      key: "hasChange",
      value: function hasChange() {
        return !("" == this.getValue());
      }
    }, {
      key: "onChange",
      value: function onChange(_ref) {
        var e = _ref.val,
            t = _ref.oldVal;
        return {
          val: e,
          oldVal: t
        };
      }
    }, {
      key: "getValid",
      value: function getValid() {
        var _this = this;

        var e = {
          success: !0,
          message: "",
          type: "success"
        };
        return new Promise(function (t) {
          _this.key ? (_this.props.required && !_this.hasChange() && (e = {
            success: !1,
            message: _this.props.label || "",
            type: "requiredEmpty"
          }), t(e)) : t(e);
        });
      }
    }, {
      key: "setDisabled",
      value: function setDisabled() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        return this.props.disabled = e, this.props.disabled;
      }
    }, {
      key: "getKeyValue",
      value: function getKeyValue() {
        return {
          key: this.getKey(),
          value: this.getValue(),
          children: this.children.map(function (e) {
            return e.getKeyValue();
          })
        };
      }
    }, {
      key: "setKeyValue",
      value: function setKeyValue(_ref2) {
        var _this2 = this;

        var e = _ref2.key,
            t = _ref2.value,
            s = _ref2.children;
        "" != this.getKey() && this.getKey() == e && (this.save(t), s.forEach(function (e) {
          var t = _this2.children.find(function (t) {
            return e.key == t.getKey();
          });

          t && t.setKeyValue(e);
        }));
      }
    }, {
      key: "getAllItems",
      value: function getAllItems() {
        return this.children.map(function (e) {
          return e.getAllItems();
        }).concat(this);
      }
    }, {
      key: "getCanRender",
      value: function getCanRender() {
        return this.canRender || 0 == this.rawComponents.length;
      }
    }, {
      key: "render",
      value: function render() {}
    }]);

    return r;
  }();

  var i = /*#__PURE__*/function () {
    function i(e, t) {
      _classCallCheck(this, i);

      this.options = t || {
        needValidHidden: !1
      }, this.needValidHidden = this.options.needValidHidden, this.rawList = e, this.list = [], this.templateList = [], this.reset();
    }

    _createClass(i, [{
      key: "reset",
      value: function reset() {
        var _this3 = this;

        this.list = this.rawList.map(function (e) {
          var t = _this3.convert(e);

          return t.children && (t.children = new i(t.children, _this3.options).list), t;
        }, []);
      }
    }, {
      key: "addTemplate",
      value: function addTemplate(_ref3) {
        var e = _ref3.key,
            t = _ref3.value;
        var s = this.templateList.find(function (t) {
          return t.key == e;
        });
        s ? s.value = t : this.templateList.push({
          key: e,
          value: t
        });
      }
    }, {
      key: "getTemplate",
      value: function getTemplate() {
        return this.templateList;
      }
    }, {
      key: "convert",
      value: function convert(e) {
        var t = this.templateList.find(function (t) {
          return t.key == e.type;
        });
        return t && t.value ? new t.value(e) : new r(e);
      }
    }, {
      key: "getValid",
      value: function getValid() {
        var _this4 = this;

        var e = this.getAllItems().filter(function (e) {
          return _this4.needValidHidden || 0 != e.props.show;
        }).map(function (e) {
          return e.getValid();
        }, []);
        return new Promise(function (t) {
          Promise.all(e).then(function (e) {
            var s = e.filter(function (e) {
              return !e.success;
            });
            t({
              success: 0 == s.length,
              message: s.length > 0 ? s[0].message : "",
              type: s.length > 0 ? s[0].type : "success"
            });
          });
        });
      }
    }, {
      key: "save",
      value: function save(e) {
        var _this5 = this;

        e.forEach(function (e) {
          var t = _this5.list.find(function (t) {
            return e.key == t.getKey();
          });

          t && t.setKeyValue(e);
        });
      }
    }, {
      key: "getValue",
      value: function getValue() {
        return this.list.map(function (e) {
          return e.getKeyValue();
        });
      }
    }, {
      key: "getAllItems",
      value: function getAllItems() {
        return this.list.reduce(function (e, t) {
          return e = e.concat(t);
        }, []);
      }
    }, {
      key: "loadComponents",
      value: function loadComponents() {
        return new Promise(function (e) {
          e();
        });
      }
    }, {
      key: "getNeedRender",
      value: function getNeedRender() {
        return Array.from(new Set(this.getAllItems().reduce(function (e, t) {
          return e = e.concat(t.getCanRender() ? [] : t.rawComponents);
        }, [])));
      }
    }, {
      key: "load",
      value: function load() {
        var _this6 = this;

        return this.loadComponents().then(function () {
          _this6.getAllItems().forEach(function (e) {
            e.canRender = !0;
          });
        });
      }
    }, {
      key: "render",
      value: function render() {
        return this.getAllItems().map(function (e) {
          return e.render();
        });
      }
    }]);

    return i;
  }();

  return e.Auth = /*#__PURE__*/function () {
    function _class() {
      _classCallCheck(this, _class);

      this.judgeList = [];
    }

    _createClass(_class, [{
      key: "add",
      value: function add(e) {
        this.judgeList.push(e);
      }
    }, {
      key: "remove",
      value: function remove(e) {
        this.judgeList = this.judgeList.filter(function (t) {
          return t.name !== e;
        });
      }
    }, {
      key: "match",
      value: function match() {
        for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
          e[_key] = arguments[_key];
        }

        var t = this.judgeList.map(function (t) {
          return t.fun(e);
        }, []),
            s = this.judgeList.map(function (e) {
          return e;
        });
        return new Promise(function (e) {
          Promise.all(t).then(function (t) {
            t.forEach(function (t, a) {
              t && e(s[a].name);
            }), e("");
          });
        });
      }
    }]);

    return _class;
  }(), e.DataList = t, e.ErrorCode = /*#__PURE__*/function () {
    function _class2() {
      _classCallCheck(this, _class2);

      this.dataList = new t();
    }

    _createClass(_class2, [{
      key: "collect",
      value: function collect(e) {
        this.dataList.add({
          name: "errorCode",
          data: e
        });
      }
    }, {
      key: "get",
      value: function get() {
        return this.dataList.get("errorCode").map(function (e) {
          return e.data;
        });
      }
    }]);

    return _class2;
  }(), e.EventDispatcher = a, e.HanderList = s, e.Intercept = /*#__PURE__*/function (_s) {
    _inherits(_class3, _s);

    var _super = _createSuper(_class3);

    function _class3() {
      var _this7;

      _classCallCheck(this, _class3);

      _this7 = _super.call(this), _this7.handlers = [];
      return _this7;
    }

    _createClass(_class3, [{
      key: "addIntercept",
      value: function addIntercept(e) {
        this.add(e);
      }
    }, {
      key: "removeIntercept",
      value: function removeIntercept(e) {
        this.remove(e);
      }
    }, {
      key: "getIntercept",
      value: function getIntercept(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        return this.get(e, t).filter(function (e) {
          return e.res;
        }).map(function (e) {
          return e.name;
        });
      }
    }]);

    return _class3;
  }(s), e.Log = /*#__PURE__*/function () {
    function _class4() {
      _classCallCheck(this, _class4);

      this.dataList = new t();
    }

    _createClass(_class4, [{
      key: "log",
      value: function log() {
        for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          e[_key2] = arguments[_key2];
        }

        this.dataList.add({
          name: "log",
          data: e
        });
      }
    }, {
      key: "error",
      value: function error() {
        for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          e[_key3] = arguments[_key3];
        }

        this.dataList.add({
          name: "error",
          data: e
        });
      }
    }, {
      key: "debug",
      value: function debug() {
        for (var _len4 = arguments.length, e = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          e[_key4] = arguments[_key4];
        }

        this.dataList.add({
          name: "debug",
          data: e
        });
      }
    }, {
      key: "info",
      value: function info() {
        for (var _len5 = arguments.length, e = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          e[_key5] = arguments[_key5];
        }

        this.dataList.add({
          name: "info",
          data: e
        });
      }
    }, {
      key: "warn",
      value: function warn() {
        for (var _len6 = arguments.length, e = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          e[_key6] = arguments[_key6];
        }

        this.dataList.add({
          name: "warn",
          data: e
        });
      }
    }, {
      key: "get",
      value: function get() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        return this.dataList.get(e).map(function (e) {
          return e.data;
        });
      }
    }]);

    return _class4;
  }(), e.ObserverSubject = /*#__PURE__*/function () {
    function _class5() {
      _classCallCheck(this, _class5);

      this.observers = [];
    }

    _createClass(_class5, [{
      key: "registerObserver",
      value: function registerObserver(e) {
        this.observers.push(e);
      }
    }, {
      key: "removeObserver",
      value: function removeObserver(e) {
        var t = this.observers.indexOf(e);
        -1 !== t && this.observers.splice(t, 1);
      }
    }, {
      key: "notifyObservers",
      value: function notifyObservers(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.observers;

        var _iterator = _createForOfIteratorHelper(t),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var _s2 = _step.value;

            _s2.update(e);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    }]);

    return _class5;
  }(), e.SingleUI = r, e.Storage = /*#__PURE__*/function () {
    function _class6() {
      _classCallCheck(this, _class6);

      this.storage = {};
    }

    _createClass(_class6, [{
      key: "get",
      value: function get(e) {
        return this.storage[e];
      }
    }, {
      key: "set",
      value: function set(e, t) {
        this.storage[e] = t;
      }
    }, {
      key: "remove",
      value: function remove(e) {
        this.storage[e] = void 0;
      }
    }, {
      key: "clear",
      value: function clear() {
        this.storage = {};
      }
    }]);

    return _class6;
  }(), e.UIList = i, e;
}({});
