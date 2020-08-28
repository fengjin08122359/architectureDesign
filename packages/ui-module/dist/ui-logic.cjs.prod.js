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

var ContainerUI = /*#__PURE__*/function (_UI) {
  _inherits(ContainerUI, _UI);

  var _super = _createSuper(ContainerUI);

  function ContainerUI(dom) {
    var _this2;

    _classCallCheck(this, ContainerUI);

    var d = dom || document.createElement('div');
    _this2 = _super.call(this, d);
    _this2.editable = false;
    _this2.insertable = true;
    return _this2;
  }

  return ContainerUI;
}(UI);

var ComponentSingleUI = /*#__PURE__*/function (_UI2) {
  _inherits(ComponentSingleUI, _UI2);

  var _super2 = _createSuper(ComponentSingleUI);

  function ComponentSingleUI(dom) {
    var _this3;

    _classCallCheck(this, ComponentSingleUI);

    var d = dom || document.createElement('div');
    _this3 = _super2.call(this, d);
    _this3.editable = true;
    _this3.insertable = false;
    return _this3;
  }

  return ComponentSingleUI;
}(UI);

var ComponentMultipleUI = /*#__PURE__*/function (_ComponentSingleUI) {
  _inherits(ComponentMultipleUI, _ComponentSingleUI);

  var _super3 = _createSuper(ComponentMultipleUI);

  function ComponentMultipleUI(dom) {
    var _this4;

    _classCallCheck(this, ComponentMultipleUI);

    var d = dom || document.createElement('div');
    _this4 = _super3.call(this, d);
    _this4.children = new basic.DataList();
    return _this4;
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
      var _this5 = this;

      this.findUI(ui).forEach(function (item) {
        _this5.children.remove(item.name);
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

var gennerateUUID = function gennerateUUID() {
  return new Date().getTime().toString();
};

var UI = /*#__PURE__*/function () {
  function UI(dom) {
    _classCallCheck(this, UI);

    this.id = gennerateUUID();
    this.dom = dom;
    this.eventBind = new EventBind(this.dom);
    this.position = new Position(this.dom);
    this.style = new Style(this.dom);
    this.selfProp = new SelfProp();
  }

  _createClass(UI, [{
    key: "setDom",
    value: function setDom(dom) {
      this.dom = dom;
      this.eventBind = new EventBind(this.dom);
      this.position = new Position(this.dom);
      this.style = new Style(this.dom);
    }
  }]);

  return UI;
}();

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
