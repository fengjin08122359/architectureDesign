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

var vueUi = require('@mikefeng110808/vue-ui');

var vuePropertyDecorator = require('vue-property-decorator');
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

var NormalVue = /*#__PURE__*/function (_vuePropertyDecorator) {
  _inherits(NormalVue, _vuePropertyDecorator);

  var _super = _createSuper(NormalVue);

  function NormalVue() {
    var _this;

    _classCallCheck(this, NormalVue);

    _this = _super.apply(this, arguments);
    _this.template = "<div></div>";
    return _this;
  }

  _createClass(NormalVue, [{
    key: "mounted",
    value: function mounted() {
      if (this.target.lifeCycle) {
        this.target.lifeCycle.mounted();
      }

      this.resetProps();
      this.template = this.target.renderTemplate;
    }
  }, {
    key: "resetProps",
    value: function resetProps() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.target.props;
    }
  }, {
    key: "resetRenderTemplate",
    value: function resetRenderTemplate() {
      var renderTemplate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.target.renderTemplate;

      if (this.needRender) {
        if (renderTemplate) {
          this.template = renderTemplate || '';
        } else {
          this.template = '';
        }
      }
    }
  }, {
    key: "render",
    value: function render(h) {
      return vuePropertyDecorator.Vue.compile(this.template).render.apply(this, h);
    }
  }, {
    key: "watchTab",
    value: function watchTab(val) {
      this.resetProps(val);
    }
  }, {
    key: "watchRenderTemplate",
    value: function watchRenderTemplate(val) {
      this.resetRenderTemplate(val);
    }
  }]);

  return NormalVue;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], NormalVue.prototype, "target", void 0);

__decorate([vuePropertyDecorator.Prop()], NormalVue.prototype, "needRender", void 0);

__decorate([vuePropertyDecorator.Watch('target.props')], NormalVue.prototype, "watchTab", null);

__decorate([vuePropertyDecorator.Watch('target.renderTemplate')], NormalVue.prototype, "watchRenderTemplate", null);

NormalVue = __decorate([vuePropertyDecorator.Component], NormalVue);
var NormalVue$1 = NormalVue;

var DoubleTitleComponent = /*#__PURE__*/function (_NormalVue$) {
  _inherits(DoubleTitleComponent, _NormalVue$);

  var _super2 = _createSuper(DoubleTitleComponent);

  function DoubleTitleComponent() {
    var _this2;

    _classCallCheck(this, DoubleTitleComponent);

    _this2 = _super2.apply(this, arguments);
    _this2.title1 = '';
    _this2.title2 = '';
    _this2.template = "";
    return _this2;
  }

  _createClass(DoubleTitleComponent, [{
    key: "resetProps",
    value: function resetProps() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.target.props;
      this.title1 = props.title1;
      this.title2 = props.title2;
    }
  }]);

  return DoubleTitleComponent;
}(NormalVue$1);

DoubleTitleComponent = __decorate([vuePropertyDecorator.Component({
  template: ""
})], DoubleTitleComponent);
var DoubleTitleComp = DoubleTitleComponent;

var MergeVueUI = /*#__PURE__*/function (_vueUi$VueUI) {
  _inherits(MergeVueUI, _vueUi$VueUI);

  var _super3 = _createSuper(MergeVueUI);

  function MergeVueUI(params) {
    var _this3;

    _classCallCheck(this, MergeVueUI);

    _this3 = _super3.call(this, params);
    _this3.renderTemplate = params.props ? params.props.renderTemplate : '<div></div>';
    return _this3;
  }

  _createClass(MergeVueUI, [{
    key: "staticRender",
    value: function staticRender(renderTarget) {
      return this.render(renderTarget, {
        needRender: false
      });
    }
  }, {
    key: "normalRender",
    value: function normalRender(renderTarget) {
      return this.render(renderTarget, {
        needRender: true
      });
    }
  }]);

  return MergeVueUI;
}(vueUi.VueUI);

var DoubleTitle = /*#__PURE__*/function (_MergeVueUI) {
  _inherits(DoubleTitle, _MergeVueUI);

  var _super4 = _createSuper(DoubleTitle);

  function DoubleTitle(params) {
    var _this4;

    _classCallCheck(this, DoubleTitle);

    _this4 = _super4.call(this, params);
    _this4.renderComponent = DoubleTitleComp;
    _this4.props.title1 = params.props ? params.props.title1 : '';
    _this4.props.title2 = params.props ? params.props.title2 : '';
    return _this4;
  }

  return DoubleTitle;
}(MergeVueUI);

var DoubleTitleExample = {
  key: 'example',
  props: {
    title1: '11',
    title2: '1222',
    renderTemplate: "<div class='DoubleTitle'><div>{{title1}}</div><div>{{title2}}</div></div>"
  },
  valid: [],
  type: 'example'
};

var CompMergeInstance = /*#__PURE__*/function () {
  function CompMergeInstance() {
    _classCallCheck(this, CompMergeInstance);

    this.view = '';
    this.logic = DoubleTitle;
    this.db = DoubleTitleExample;
    this.getInstance();
  }

  _createClass(CompMergeInstance, [{
    key: "getInstance",
    value: function getInstance() {
      this.instance = new this.logic(this.db);
    }
  }, {
    key: "renderInstance",
    value: function renderInstance(render) {
      this.renderResult = this.instance ? this.instance.normalRender(render) : render.createElement('div', // 标签名称
      _objectSpread(_objectSpread({}, render.context), {}, {
        props: {
          target: this
        }
      }), [render.vueRoot.$slots["default"]]);
      return this.renderResult;
    }
  }, {
    key: "renderStaticInstance",
    value: function renderStaticInstance(render) {
      console.log('renderStaticInstance');
      this.renderResult = this.instance ? this.instance.staticRender(render) : render.createElement('div', // 标签名称
      _objectSpread(_objectSpread({}, render.context), {}, {
        props: {
          target: this
        }
      }), [render.vueRoot.$slots["default"]]);
      return this.renderResult;
    }
  }]);

  return CompMergeInstance;
}();

exports.CompMergeInstance = CompMergeInstance;
