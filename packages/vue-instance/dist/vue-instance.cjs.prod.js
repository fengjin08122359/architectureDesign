'use strict';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopDefault(ex) {
  return ex && _typeof(ex) === 'object' && 'default' in ex ? ex['default'] : ex;
}

var instance = require('@mikefeng110808/instance');

var axios = _interopDefault(require('axios'));

var websocket = _interopDefault(require('websocket'));

var VueLog = /*#__PURE__*/function (_instance$Log) {
  _inherits(VueLog, _instance$Log);

  var _super = _createSuper(VueLog);

  function VueLog() {
    _classCallCheck(this, VueLog);

    return _super.call(this);
  }

  _createClass(VueLog, [{
    key: "open",
    value: function open() {
      var that = this;

      console.log = function (log) {
        return function () {
          for (var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++) {
            rest[_key] = arguments[_key];
          }

          that.log(rest);
          log(rest);
        };
      }(console.log);

      console.warn = function (log) {
        return function () {
          for (var _len2 = arguments.length, rest = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            rest[_key2] = arguments[_key2];
          }

          that.warn(rest);
          log(rest);
        };
      }(console.warn);

      console.info = function (log) {
        return function () {
          for (var _len3 = arguments.length, rest = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            rest[_key3] = arguments[_key3];
          }

          that.info(rest);
          log(rest);
        };
      }(console.info);

      console.error = function (log) {
        return function () {
          for (var _len4 = arguments.length, rest = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            rest[_key4] = arguments[_key4];
          }

          that.error(rest);
          errorCode.collect(rest);
          log(rest);
        };
      }(console.error);

      console.debug = function (log) {
        return function () {
          for (var _len5 = arguments.length, rest = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            rest[_key5] = arguments[_key5];
          }

          that.debug(rest);
          log(rest);
        };
      }(console.debug);
    }
  }]);

  return VueLog;
}(instance.Log);

var log = new VueLog();
var errorCode = new instance.ErrorCode();
var keyFrame = new instance.EventDispatcher();
var httpIntercept = new instance.Intercept();
var wsIntercept = new instance.Intercept();
var routerIntercept = new instance.Intercept();

var HttpInstance = /*#__PURE__*/function () {
  function HttpInstance(param) {
    _classCallCheck(this, HttpInstance);

    this.baseURL = param.baseURL || '';
    this.init();
  }

  _createClass(HttpInstance, [{
    key: "init",
    value: function init() {
      var _this = this;

      axios.interceptors.request.use(function (config) {
        return _this.convertRequest(config);
      }, function (error) {
        return Promise.reject(error);
      });
      axios.interceptors.response.use(function (response) {
        return _this.convertResponse(response);
      }, function (error) {
        return Promise.reject(error);
      });
    }
  }, {
    key: "convertRequest",
    value: function convertRequest(config) {
      return config;
    }
  }, {
    key: "convertResponse",
    value: function convertResponse(config) {
      return config;
    }
  }, {
    key: "create",
    value: function create(opts) {
      var _this2 = this;

      var publicParams = {
        ts: Date.now()
      };
      var method = (opts.method || 'get').toUpperCase();
      var httpDefaultOpts = {
        method: method,
        baseURL: this.baseURL,
        url: opts.url,
        responseType: opts.responseType || '',
        timeout: 20000
      };

      if (opts['meta']) {
        httpDefaultOpts.headers = opts['meta'];
      }

      var dataRequest = ['PUT', 'POST', 'PATCH'];

      if (dataRequest.includes(method)) {
        httpDefaultOpts.data = opts.data || {};
      } else {
        httpDefaultOpts.params = _objectSpread(_objectSpread({}, publicParams), opts.data || {});
      } // formData转换


      if (opts.formData) {
        httpDefaultOpts.transformRequest = [function (data) {
          var formData = new FormData();

          if (data) {
            Object.entries(data).forEach(function (item) {
              formData.append(item[0], item[1]);
            });
          }

          return formData;
        }];
      }

      var promise = new Promise(function (resolve, reject) {
        axios(httpDefaultOpts).then(function (response) {
          _this2.handleSuccess(response, resolve, opts);
        })["catch"](function (error) {
          _this2.handleError(error, reject, opts);
        });
      });
      return promise;
    }
  }, {
    key: "handleSuccess",
    value: function handleSuccess(response, resolve, opts) {
      httpIntercept.getIntercept({
        response: response,
        opts: opts
      }, 'http-success');
      resolve(response);
    }
  }, {
    key: "handleError",
    value: function handleError(error, reject, opts) {
      httpIntercept.getIntercept({
        error: error,
        opts: opts
      }, 'http-error');
      reject(error);
    }
  }]);

  return HttpInstance;
}();

var KeepAlive = /*#__PURE__*/function () {
  function KeepAlive(opt) {
    _classCallCheck(this, KeepAlive);

    this.ws = opt.ws;
    this.pong = 0;
    this.checkTime = 3;
    this.reconnectTime = 20;
    this.connnectNumber = 0;
    this.connectLimit = 1;
    this.keepAliveModel = true;
  }

  _createClass(KeepAlive, [{
    key: "init",
    value: function init() {
      var _this3 = this;

      this.pong = 0;
      this.connnectNumber = 0;

      if (this.interval) {
        clearInterval(this.interval);
      }

      this.check();
      this.interval = setInterval(function () {
        _this3.check();
      }, this.checkTime * 1000);
    }
  }, {
    key: "setConnectLimit",
    value: function setConnectLimit(data) {
      this.connectLimit = data;
    }
  }, {
    key: "setPong",
    value: function setPong() {
      this.connnectNumber = 0;
      this.pong = new Date().getTime();
    }
  }, {
    key: "check",
    value: function check() {
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
  }, {
    key: "endTimeout",
    value: function endTimeout() {
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
  }, {
    key: "close",
    value: function close() {
      if (this.interval) {
        clearInterval(this.interval);
      }

      wsIntercept.getIntercept('close', 'keepalive');
    }
  }, {
    key: "end",
    value: function end() {
      this.ws.endClient();
    }
  }, {
    key: "reconnect",
    value: function reconnect() {
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
  }]);

  return KeepAlive;
}();

var WebSocketInstance = /*#__PURE__*/function () {
  function WebSocketInstance() {
    _classCallCheck(this, WebSocketInstance);

    this.client = null;
    this.keepAlive = new KeepAlive({
      ws: this
    });
  }

  _createClass(WebSocketInstance, [{
    key: "isClosed",
    value: function isClosed() {
      return !this.client || this.client.readyState === this.client.CLOSED;
    }
  }, {
    key: "canReconnected",
    value: function canReconnected() {
      var can = this.client && this.client.readyState == this.client.CLOSED;

      if (can) {
        this.start(this.url);
      }

      return can;
    }
  }, {
    key: "endClient",
    value: function endClient() {
      if (this.client && this.client.readyState == this.client.OPEN) {
        this.client.close();
      }
    }
  }, {
    key: "start",
    value: function start(url) {
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
  }, {
    key: "setConnectLimit",
    value: function setConnectLimit(data) {
      this.keepAlive.setConnectLimit(data);
    }
  }, {
    key: "send",
    value: function send(msg) {
      this.client && this.client.send(msg);
    }
  }, {
    key: "end",
    value: function end() {
      this.client.close();
    }
  }]);

  return WebSocketInstance;
}();

var VueUI = /*#__PURE__*/function (_instance$SingleUI) {
  _inherits(VueUI, _instance$SingleUI);

  var _super2 = _createSuper(VueUI);

  function VueUI(params) {
    _classCallCheck(this, VueUI);

    return _super2.call(this, params);
  }

  _createClass(VueUI, [{
    key: "render",
    value: function render(_render) {
      if (!this.getCanRender()) {
        return _render.createElement();
      } else {
        return this.renderInstance(_render);
      }
    }
  }, {
    key: "renderInstance",
    value: function renderInstance(render) {
      return render.createElement('div', // 标签名称
      _objectSpread(_objectSpread({}, render.context), {}, {
        attrs: this
      }), [this.props.label, render.vueRoot.$slots["default"]]);
    }
  }]);

  return VueUI;
}(instance.SingleUI);

var VueUIList = /*#__PURE__*/function (_instance$UIList) {
  _inherits(VueUIList, _instance$UIList);

  var _super3 = _createSuper(VueUIList);

  function VueUIList() {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var options = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, VueUIList);

    return _super3.call(this, list, options);
  }

  _createClass(VueUIList, [{
    key: "convertSinlgeUI",
    value: function convertSinlgeUI(item) {
      return new VueUI(item);
    }
  }, {
    key: "handleComponentKey",
    value: function handleComponentKey(key) {
      var _this4 = this;

      return new Promise(function (resolve) {
        _this4.componentHasRendered.add({
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
}(instance.UIList);

exports.HttpInstance = HttpInstance;
exports.VueUI = VueUI;
exports.VueUIList = VueUIList;
exports.WebSocketInstance = WebSocketInstance;
exports.errorCode = errorCode;
exports.httpIntercept = httpIntercept;
exports.keyFrame = keyFrame;
exports.log = log;
exports.routerIntercept = routerIntercept;
exports.wsIntercept = wsIntercept;
