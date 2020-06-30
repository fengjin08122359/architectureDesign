'use strict';

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

var basic = require('@mikefeng110808/basic');

var Position = /*#__PURE__*/function () {
  function Position(dom) {
    _classCallCheck(this, Position);

    this.dom = dom;
    this.left = dom.style.left;
    this.right = dom.style.right;
    this.top = dom.style.top;
    this.bottom = dom.style.bottom;
    this.position = dom.style.position;
    this.display = dom.style.display;
    this.zIndex = dom.style.zIndex;
    this.width = dom.style.width;
    this.height = dom.style.height;
    this.overflow = dom.style.overflow;
  }

  _createClass(Position, [{
    key: "setKeyValue",
    value: function setKeyValue(key, value) {
      this[key] = value;
      this.dom.style[key] = value;
    }
  }]);

  return Position;
}();

var Style = /*#__PURE__*/function () {
  function Style(dom) {
    _classCallCheck(this, Style);

    this.style = dom.style;
  }

  _createClass(Style, [{
    key: "setKeyValue",
    value: function setKeyValue(key, value) {
      this.style[key] = value;
    }
  }]);

  return Style;
}();

var EventBind = /*#__PURE__*/function () {
  function EventBind(dom) {
    _classCallCheck(this, EventBind);

    this.dom = dom;
    this.dataList = new basic.DataList();
  }

  _createClass(EventBind, [{
    key: "bind",
    value: function bind(key, event, options) {
      if (this.dataList.get(key).length > 0) {
        this.unbind(key);
      }

      this.dom.addEventListener(key, event, options);
      this.dataList.add({
        name: key,
        data: {
          event: event,
          options: options
        }
      });
    }
  }, {
    key: "unbind",
    value: function unbind(key) {
      var _this = this;

      this.dataList.get(key).forEach(function (item) {
        _this.dom.removeEventListener(key, item.data.event, item.data.options);
      });
      this.dataList.remove(key);
    }
  }]);

  return EventBind;
}();

var ContainerUI = function ContainerUI(dom) {
  _classCallCheck(this, ContainerUI);

  this.dom = dom || document.createElement('div');
  this.eventBind = new EventBind(this.dom);
  this.position = new Position(this.dom);
};

var gennerateUUID = function gennerateUUID() {
  return new Date().getTime().toString();
};

var ComponentSingleUI = function ComponentSingleUI(dom) {
  _classCallCheck(this, ComponentSingleUI);

  this.dom = dom;
  this.style = new Style(dom);
  this.eventBind = new EventBind(dom);
  this.position = new Position(dom);
};

var ComponentMultipleUI = /*#__PURE__*/function (_ComponentSingleUI) {
  _inherits(ComponentMultipleUI, _ComponentSingleUI);

  var _super = _createSuper(ComponentMultipleUI);

  function ComponentMultipleUI(dom) {
    var _this2;

    _classCallCheck(this, ComponentMultipleUI);

    _this2 = _super.call(this, dom);
    _this2.id = gennerateUUID();
    _this2.children = new basic.DataList();
    _this2.selfProp = new SelfProp();
    return _this2;
  }

  _createClass(ComponentMultipleUI, [{
    key: "combi",
    value: function combi(ui) {
      if (this.findUI(ui).length > 0) {
        this.unCombi(ui);
      }

      this.children.add({
        name: ui.id,
        data: ui
      });
      this.dom.append(ui.dom);
    }
  }, {
    key: "unCombi",
    value: function unCombi(ui) {
      var _this3 = this;

      this.findUI(ui).forEach(function (item) {
        _this3.children.remove(item.name);
      });

      if (this.dom.parentElement) {
        this.dom.removeChild(ui.dom);
      }
    }
  }, {
    key: "findUI",
    value: function findUI(ui) {
      return this.children.get(ui.id);
    }
  }]);

  return ComponentMultipleUI;
}(ComponentSingleUI);

var SelfProp = function SelfProp() {
  _classCallCheck(this, SelfProp);
};

var gennerateUUID$1 = function gennerateUUID$1() {
  return new Date().getTime().toString();
};

exports.ComponentMultipleUI = ComponentMultipleUI;
exports.ComponentSingleUI = ComponentSingleUI;
exports.ContainerUI = ContainerUI;
exports.EventBind = EventBind;
exports.Position = Position;
exports.SelfProp = SelfProp;
exports.Style = Style;
exports.gennerateUUID = gennerateUUID$1;
