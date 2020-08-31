'use strict';

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

var Vue = _interopDefault(require('vue'));

var ElementUI = _interopDefault(require('element-ui'));

var basic$1 = require('@mikefeng110808/basic');

require('@mikefeng110808/logic');

var vuePropertyDecorator = require('vue-property-decorator');

require('axios');

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

var VueUI = /*#__PURE__*/function (_basic$1$SingleUI) {
  _inherits(VueUI, _basic$1$SingleUI);

  var _super = _createSuper(VueUI);

  function VueUI(params) {
    var _this;

    _classCallCheck(this, VueUI);

    _this = _super.call(this, params);
    _this.renderComponent = undefined;
    _this.lifeCycle = new LifeCycle(params.props ? params.props.lifeCycle : {});
    return _this;
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
}(basic$1.SingleUI);
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

  var _super2 = _createSuper(InputVueUI);

  function InputVueUI() {
    _classCallCheck(this, InputVueUI);

    return _super2.apply(this, arguments);
  }

  return InputVueUI;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], InputVueUI.prototype, "target", void 0);

InputVueUI = __decorate([vuePropertyDecorator.Component({
  template: "<div class='inputVue' v-show='target.props.show'> <el-input v-model=\"target.value\" :disabled='target.props.disabled' clearable :type='target.props.inputType'> <template slot='append' v-if='target.props.append'>{{target.props.append}}</template> <template slot=\"prepend\" v-if='target.props.label'>{{target.props.label}}</template> </el-input> </div>"
})], InputVueUI);

var ArrayVueUI = /*#__PURE__*/function (_vuePropertyDecorator2) {
  _inherits(ArrayVueUI, _vuePropertyDecorator2);

  var _super3 = _createSuper(ArrayVueUI);

  function ArrayVueUI() {
    _classCallCheck(this, ArrayVueUI);

    return _super3.apply(this, arguments);
  }

  return ArrayVueUI;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], ArrayVueUI.prototype, "target", void 0);

ArrayVueUI = __decorate([vuePropertyDecorator.Component({
  template: "<div class='arrayVue' v-show='target.props.show'> <div>{{target.props.label}}</div> <el-row> <el-col v-for=\"(item,index) in target.value\" :key=\"index\"> <el-input v-model=\"item.value\" > <template slot=\"append\" > <span @click=\"target.addCol()\" class='el-icon-circle-plus-outline'></span> <span v-if=\"index != 0\" @click=\"target.delCol(index)\" class='el-icon-remove-outline'></span> </template> </el-input> </el-col> </el-row> </div>"
})], ArrayVueUI);

var ObjectVueUI = /*#__PURE__*/function (_vuePropertyDecorator3) {
  _inherits(ObjectVueUI, _vuePropertyDecorator3);

  var _super4 = _createSuper(ObjectVueUI);

  function ObjectVueUI() {
    _classCallCheck(this, ObjectVueUI);

    return _super4.apply(this, arguments);
  }

  return ObjectVueUI;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], ObjectVueUI.prototype, "target", void 0);

ObjectVueUI = __decorate([vuePropertyDecorator.Component({
  template: "<div class='objectVue' v-show='target.props.show'> <div>{{target.props.label}}</div> <el-row> <el-col v-for=\"(item,index) in target.props.objectArray\" :key=\"index\"> <el-col :span='10'> <el-input v-model=\"item.key\" > <template slot='prepend'>key</template> </el-input> </el-col> <el-col :span='10'> <el-input v-model=\"item.value\" > <template slot='prepend'>value</template> </el-input> </el-col> <el-col :span='4'> <span @click=\"target.addCol()\" class='el-icon-circle-plus-outline'></span> <span v-if=\"index != 0\" @click=\"target.delCol(index)\" class='el-icon-remove-outline'></span> </el-col> </el-col> </el-row> </div>"
})], ObjectVueUI);

var MulSelectVueUI = /*#__PURE__*/function (_vuePropertyDecorator4) {
  _inherits(MulSelectVueUI, _vuePropertyDecorator4);

  var _super5 = _createSuper(MulSelectVueUI);

  function MulSelectVueUI() {
    _classCallCheck(this, MulSelectVueUI);

    return _super5.apply(this, arguments);
  }

  return MulSelectVueUI;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], MulSelectVueUI.prototype, "target", void 0);

MulSelectVueUI = __decorate([vuePropertyDecorator.Component({
  template: "<div class='mulSelectVue' v-show='target.props.show'> <div>{{target.props.label}}</div> <div v-if='target.props.configVisible'> <span>\u9009\u9879:</span> <el-row> <el-col v-for=\"(item,index) in target.props.optionsArray\" :key=\"index\"> <el-col :span='10'> <el-input v-model=\"item.key\" > <template slot='prepend'>key</template> </el-input> </el-col> <el-col :span='10'> <el-input v-model=\"item.value\" > <template slot='prepend'>value</template> </el-input> </el-col> <el-col :span='4'> <span @click=\"target.addCol()\" class='el-icon-circle-plus-outline'></span> <span v-if=\"index != 0\" @click=\"target.delCol(index)\" class='el-icon-remove-outline'></span> </el-col> </el-col> </el-row> </div> <span v-if='target.props.configVisible'>\u7ED3\u679C:</span> <el-select v-model=\"target.value\" multiple filterable clearable> <el-option v-for=\"(item, index) in target.props.optionsArray\" :value=\"item.key\" :label='item.value' :key=\"index\"> </el-option> </el-select></div>"
})], MulSelectVueUI);

var SelectVueUI = /*#__PURE__*/function (_vuePropertyDecorator5) {
  _inherits(SelectVueUI, _vuePropertyDecorator5);

  var _super6 = _createSuper(SelectVueUI);

  function SelectVueUI() {
    _classCallCheck(this, SelectVueUI);

    return _super6.apply(this, arguments);
  }

  return SelectVueUI;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], SelectVueUI.prototype, "target", void 0);

SelectVueUI = __decorate([vuePropertyDecorator.Component({
  template: "<div class='selectVue' v-show='target.props.show'> <div>{{target.props.label}}</div> <div v-if='target.props.configVisible'> <span>\u9009\u9879:</span> <el-row > <el-col v-for=\"(item,index) in target.props.optionsArray\" :key=\"index\"> <el-col :span='10'> <el-input v-model=\"item.key\" > <template slot='prepend'>key</template> </el-input> </el-col> <el-col :span='10'> <el-input v-model=\"item.value\" > <template slot='prepend'>value</template> </el-input> </el-col> <el-col :span='4'> <span @click=\"target.addCol()\" class='el-icon-circle-plus-outline'></span> <span v-if=\"index != 0\" @click=\"target.delCol(index)\" class='el-icon-remove-outline'></span> </el-col> </el-col> </el-row> </div> <span v-if='target.props.configVisible'>\u7ED3\u679C:</span> <el-select v-model=\"target.value\" filterable clearable> <el-option v-for=\"(item, index) in target.props.optionsArray\" :value=\"item.key\" :label='item.value' :key=\"index\"> </el-option> </el-select></div>"
})], SelectVueUI);

var NumberVueUI = /*#__PURE__*/function (_vuePropertyDecorator6) {
  _inherits(NumberVueUI, _vuePropertyDecorator6);

  var _super7 = _createSuper(NumberVueUI);

  function NumberVueUI() {
    _classCallCheck(this, NumberVueUI);

    return _super7.apply(this, arguments);
  }

  return NumberVueUI;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], NumberVueUI.prototype, "target", void 0);

NumberVueUI = __decorate([vuePropertyDecorator.Component({
  template: "<div class='numberVue' v-show='target.props.show'> <div>{{target.props.label}}</div> <el-input-number v-model=\"target.value\" :disabled='target.props.disabled' ></el-input-number></div>"
})], NumberVueUI);

var InputVueUI$1 = /*#__PURE__*/function (_vuePropertyDecorator7) {
  _inherits(InputVueUI, _vuePropertyDecorator7);

  var _super8 = _createSuper(InputVueUI);

  function InputVueUI() {
    _classCallCheck(this, InputVueUI);

    return _super8.apply(this, arguments);
  }

  return InputVueUI;
}(vuePropertyDecorator.Vue);

__decorate([vuePropertyDecorator.Prop()], InputVueUI$1.prototype, "target", void 0);

InputVueUI$1 = __decorate([vuePropertyDecorator.Component({
  template: "<div class='BooleanVueUI' v-show='target.props.show'> <el-checkbox v-model=\"target.value\">\u662F\u5426\u9009\u4E2D</el-checkbox> </div>"
})], InputVueUI$1);

var SimulateVueUIComponent = /*#__PURE__*/function (_vuePropertyDecorator8) {
  _inherits(SimulateVueUIComponent, _vuePropertyDecorator8);

  var _super9 = _createSuper(SimulateVueUIComponent);

  function SimulateVueUIComponent() {
    _classCallCheck(this, SimulateVueUIComponent);

    return _super9.apply(this, arguments);
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

var SimulateVueUI = /*#__PURE__*/function (_VueUI) {
  _inherits(SimulateVueUI, _VueUI);

  var _super10 = _createSuper(SimulateVueUI);

  function SimulateVueUI(params) {
    var _this2;

    _classCallCheck(this, SimulateVueUI);

    _this2 = _super10.call(this, params);
    _this2.simulateValue = '';
    _this2.error = '';

    _this2.simulate();

    _this2.renderComponent = SimulateVueUIComp;
    return _this2;
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

  var _super11 = _createSuper(EventListVueUIComponent);

  function EventListVueUIComponent() {
    _classCallCheck(this, EventListVueUIComponent);

    return _super11.apply(this, arguments);
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

  var _super12 = _createSuper(ContainerVueUIComponent);

  function ContainerVueUIComponent() {
    _classCallCheck(this, ContainerVueUIComponent);

    return _super12.apply(this, arguments);
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

  var _super13 = _createSuper(CardContainerVueUIComponent);

  function CardContainerVueUIComponent() {
    var _this3;

    _classCallCheck(this, CardContainerVueUIComponent);

    _this3 = _super13.apply(this, arguments);
    _this3.tabs = [];
    _this3.activeTab = '';
    return _this3;
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

  var _super14 = _createSuper(DialogContainerVueUIComponent);

  function DialogContainerVueUIComponent() {
    var _this4;

    _classCallCheck(this, DialogContainerVueUIComponent);

    _this4 = _super14.apply(this, arguments);
    _this4.visible = false;
    _this4.title = '';
    return _this4;
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

  var _super15 = _createSuper(ButtonVueUIComponent);

  function ButtonVueUIComponent() {
    var _this5;

    _classCallCheck(this, ButtonVueUIComponent);

    _this5 = _super15.apply(this, arguments);
    _this5.label = '';
    return _this5;
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

  var _super16 = _createSuper(InputVueUIComponent);

  function InputVueUIComponent() {
    var _this6;

    _classCallCheck(this, InputVueUIComponent);

    _this6 = _super16.apply(this, arguments);
    _this6.value = '';
    _this6.prepend = '';
    return _this6;
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

  var _super17 = _createSuper(NumberVueUIComponent);

  function NumberVueUIComponent() {
    var _this7;

    _classCallCheck(this, NumberVueUIComponent);

    _this7 = _super17.apply(this, arguments);
    _this7.value = '';
    _this7.label = '';
    return _this7;
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

  var _super18 = _createSuper(TimePickerVueUIComponent);

  function TimePickerVueUIComponent() {
    var _this8;

    _classCallCheck(this, TimePickerVueUIComponent);

    _this8 = _super18.apply(this, arguments);
    _this8.value = '';
    _this8.type = 'datetime';
    _this8.placeholder = '';
    return _this8;
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

  var _super19 = _createSuper(TimeGroupVueUIComponent);

  function TimeGroupVueUIComponent() {
    var _this9;

    _classCallCheck(this, TimeGroupVueUIComponent);

    _this9 = _super19.apply(this, arguments);
    _this9.year = '2020';
    _this9.report = 1;
    return _this9;
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

  var _super20 = _createSuper(SelectVueUIComponent);

  function SelectVueUIComponent() {
    var _this10;

    _classCallCheck(this, SelectVueUIComponent);

    _this10 = _super20.apply(this, arguments);
    _this10.value = '';
    _this10.optionsArray = [];
    return _this10;
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

  var _super21 = _createSuper(CheckBoxVueUIComponent);

  function CheckBoxVueUIComponent() {
    var _this11;

    _classCallCheck(this, CheckBoxVueUIComponent);

    _this11 = _super21.apply(this, arguments);
    _this11.label = '';
    _this11.value = '';
    return _this11;
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

  var _super22 = _createSuper(CheckBoxGroupVueUIComponent);

  function CheckBoxGroupVueUIComponent() {
    var _this12;

    _classCallCheck(this, CheckBoxGroupVueUIComponent);

    _this12 = _super22.apply(this, arguments);
    _this12.value = [];
    _this12.optionsArray = [];
    return _this12;
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

  var _super23 = _createSuper(RadioVueUIComponent);

  function RadioVueUIComponent() {
    var _this13;

    _classCallCheck(this, RadioVueUIComponent);

    _this13 = _super23.apply(this, arguments);
    _this13.value = '';
    _this13.optionsArray = [];
    return _this13;
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

  var _super24 = _createSuper(MulSelectVueUIComponent);

  function MulSelectVueUIComponent() {
    var _this14;

    _classCallCheck(this, MulSelectVueUIComponent);

    _this14 = _super24.apply(this, arguments);
    _this14.value = [];
    _this14.optionsArray = [];
    return _this14;
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

  var _super25 = _createSuper(IframeVueUIComponent);

  function IframeVueUIComponent() {
    var _this15;

    _classCallCheck(this, IframeVueUIComponent);

    _this15 = _super25.apply(this, arguments);
    _this15.src = '';
    return _this15;
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

  var _super26 = _createSuper(TabelColSlot);

  function TabelColSlot() {
    _classCallCheck(this, TabelColSlot);

    return _super26.apply(this, arguments);
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

  var _super27 = _createSuper(TableVueUIComponent);

  function TableVueUIComponent() {
    var _this16;

    _classCallCheck(this, TableVueUIComponent);

    _this16 = _super27.apply(this, arguments);
    _this16.value = '';
    _this16.prepend = '';
    return _this16;
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

  var _super28 = _createSuper(TableDataConfigVueUIComponent);

  function TableDataConfigVueUIComponent() {
    var _this17;

    _classCallCheck(this, TableDataConfigVueUIComponent);

    _this17 = _super28.apply(this, arguments);
    _this17.activeName = 'column';
    _this17.typeArray = [{
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
    return _this17;
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
/**
 * Returns an array of HTML elements located under the point specified by x, y.
 * If the native elementsFromPoint function does not exist, a polyfill will be used.
 *
 * @param  {number} x : X position
 * @param  {number} y : Y position
 * @return {array} : Array of the elements under the point (x, y)
 */

var setPx = function setPx(num) {
  var pre = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "px";

  if (typeof num == "number") {
    return num + pre;
  } else {
    return num;
  }
};

var convertPx = function convertPx(str) {
  if (typeof str == "number") {
    return str;
  } else if (typeof str == "undefined") {
    return 0;
  } else if (str == 'auto') {
    return 0;
  } else if (str.indexOf('px') > -1) {
    return parseFloat(str);
  } else if (str.indexOf('%') > -1) {
    return str;
  } else if (!isNaN(parseFloat(str))) {
    return parseFloat(str);
  } else {
    return str;
  }
};

var gennerateUUID = function gennerateUUID() {
  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
  return uuid;
};

var styleOptionsStr = "alignContent,alignItems,alignSelf,alignmentBaseline,all,animation,animationDelay,animationDirection,animationDuration,animationFillMode,animationIterationCount,animationName,animationPlayState,animationTimingFunction,backdropFilter,backfaceVisibility,background,backgroundAttachment,backgroundBlendMode,backgroundClip,backgroundColor,backgroundImage,backgroundOrigin,backgroundPosition,backgroundPositionX,backgroundPositionY,backgroundRepeat,backgroundRepeatX,backgroundRepeatY,backgroundSize,baselineShift,blockSize,border,borderBlockEnd,borderBlockEndColor,borderBlockEndStyle,borderBlockEndWidth,borderBlockStart,borderBlockStartColor,borderBlockStartStyle,borderBlockStartWidth,borderBottom,borderBottomColor,borderBottomLeftRadius,borderBottomRightRadius,borderBottomStyle,borderBottomWidth,borderCollapse,borderColor,borderImage,borderImageOutset,borderImageRepeat,borderImageSlice,borderImageSource,borderImageWidth,borderInlineEnd,borderInlineEndColor,borderInlineEndStyle,borderInlineEndWidth,borderInlineStart,borderInlineStartColor,borderInlineStartStyle,borderInlineStartWidth,borderLeft,borderLeftColor,borderLeftStyle,borderLeftWidth,borderRadius,borderRight,borderRightColor,borderRightStyle,borderRightWidth,borderSpacing,borderStyle,borderTop,borderTopColor,borderTopLeftRadius,borderTopRightRadius,borderTopStyle,borderTopWidth,borderWidth,bottom,boxShadow,boxSizing,breakAfter,breakBefore,breakInside,bufferedRendering,captionSide,caretColor,clear,clip,clipPath,clipRule,color,colorInterpolation,colorInterpolationFilters,colorRendering,colorScheme,columnCount,columnFill,columnGap,columnRule,columnRuleColor,columnRuleStyle,columnRuleWidth,columnSpan,columnWidth,columns,contain,containIntrinsicSize,content,counterIncrement,counterReset,cursor,cx,cy,d,direction,display,dominantBaseline,emptyCells,fill,fillOpacity,fillRule,filter,flex,flexBasis,flexDirection,flexFlow,flexGrow,flexShrink,flexWrap,float,floodColor,floodOpacity,font,fontDisplay,fontFamily,fontFeatureSettings,fontKerning,fontOpticalSizing,fontSize,fontStretch,fontStyle,fontVariant,fontVariantCaps,fontVariantEastAsian,fontVariantLigatures,fontVariantNumeric,fontVariationSettings,fontWeight,gap,grid,gridArea,gridAutoColumns,gridAutoFlow,gridAutoRows,gridColumn,gridColumnEnd,gridColumnGap,gridColumnStart,gridGap,gridRow,gridRowEnd,gridRowGap,gridRowStart,gridTemplate,gridTemplateAreas,gridTemplateColumns,gridTemplateRows,height,hyphens,imageOrientation,imageRendering,inlineSize,isolation,justifyContent,justifyItems,justifySelf,left,letterSpacing,lightingColor,lineBreak,lineHeight,listStyle,listStyleImage,listStylePosition,listStyleType,margin,marginBlockEnd,marginBlockStart,marginBottom,marginInlineEnd,marginInlineStart,marginLeft,marginRight,marginTop,marker,markerEnd,markerMid,markerStart,mask,maskType,maxBlockSize,maxHeight,maxInlineSize,maxWidth,maxZoom,minBlockSize,minHeight,minInlineSize,minWidth,minZoom,mixBlendMode,objectFit,objectPosition,offset,offsetDistance,offsetPath,offsetRotate,opacity,order,orientation,orphans,outline,outlineColor,outlineOffset,outlineStyle,outlineWidth,overflow,overflowAnchor,overflowWrap,overflowX,overflowY,overscrollBehavior,overscrollBehaviorBlock,overscrollBehaviorInline,overscrollBehaviorX,overscrollBehaviorY,padding,paddingBlockEnd,paddingBlockStart,paddingBottom,paddingInlineEnd,paddingInlineStart,paddingLeft,paddingRight,paddingTop,pageBreakAfter,pageBreakBefore,pageBreakInside,paintOrder,perspective,perspectiveOrigin,placeContent,placeItems,placeSelf,pointerEvents,position,quotes,r,resize,right,rowGap,rx,ry,scrollBehavior,scrollMargin,scrollMarginBlock,scrollMarginBlockEnd,scrollMarginBlockStart,scrollMarginBottom,scrollMarginInline,scrollMarginInlineEnd,scrollMarginInlineStart,scrollMarginLeft,scrollMarginRight,scrollMarginTop,scrollPadding,scrollPaddingBlock,scrollPaddingBlockEnd,scrollPaddingBlockStart,scrollPaddingBottom,scrollPaddingInline,scrollPaddingInlineEnd,scrollPaddingInlineStart,scrollPaddingLeft,scrollPaddingRight,scrollPaddingTop,scrollSnapAlign,scrollSnapStop,scrollSnapType,shapeImageThreshold,shapeMargin,shapeOutside,shapeRendering,size,speak,src,stopColor,stopOpacity,stroke,strokeDasharray,strokeDashoffset,strokeLinecap,strokeLinejoin,strokeMiterlimit,strokeOpacity,strokeWidth,tabSize,tableLayout,textAlign,textAlignLast,textAnchor,textCombineUpright,textDecoration,textDecorationColor,textDecorationLine,textDecorationSkipInk,textDecorationStyle,textIndent,textOrientation,textOverflow,textRendering,textShadow,textSizeAdjust,textTransform,textUnderlinePosition,top,touchAction,transform,transformBox,transformOrigin,transformStyle,transition,transitionDelay,transitionDuration,transitionProperty,transitionTimingFunction,unicodeBidi,unicodeRange,userSelect,userZoom,vectorEffect,verticalAlign,visibility,webkitAlignContent,webkitAlignItems,webkitAlignSelf,webkitAnimation,webkitAnimationDelay,webkitAnimationDirection,webkitAnimationDuration,webkitAnimationFillMode,webkitAnimationIterationCount,webkitAnimationName,webkitAnimationPlayState,webkitAnimationTimingFunction,webkitAppRegion,webkitAppearance,webkitBackfaceVisibility,webkitBackgroundClip,webkitBackgroundOrigin,webkitBackgroundSize,webkitBorderAfter,webkitBorderAfterColor,webkitBorderAfterStyle,webkitBorderAfterWidth,webkitBorderBefore,webkitBorderBeforeColor,webkitBorderBeforeStyle,webkitBorderBeforeWidth,webkitBorderBottomLeftRadius,webkitBorderBottomRightRadius,webkitBorderEnd,webkitBorderEndColor,webkitBorderEndStyle,webkitBorderEndWidth,webkitBorderHorizontalSpacing,webkitBorderImage,webkitBorderRadius,webkitBorderStart,webkitBorderStartColor,webkitBorderStartStyle,webkitBorderStartWidth,webkitBorderTopLeftRadius,webkitBorderTopRightRadius,webkitBorderVerticalSpacing,webkitBoxAlign,webkitBoxDecorationBreak,webkitBoxDirection,webkitBoxFlex,webkitBoxOrdinalGroup,webkitBoxOrient,webkitBoxPack,webkitBoxReflect,webkitBoxShadow,webkitBoxSizing,webkitClipPath,webkitColumnBreakAfter,webkitColumnBreakBefore,webkitColumnBreakInside,webkitColumnCount,webkitColumnGap,webkitColumnRule,webkitColumnRuleColor,webkitColumnRuleStyle,webkitColumnRuleWidth,webkitColumnSpan,webkitColumnWidth,webkitColumns,webkitFilter,webkitFlex,webkitFlexBasis,webkitFlexDirection,webkitFlexFlow,webkitFlexGrow,webkitFlexShrink,webkitFlexWrap,webkitFontFeatureSettings,webkitFontSizeDelta,webkitFontSmoothing,webkitHighlight,webkitHyphenateCharacter,webkitJustifyContent,webkitLineBreak,webkitLineClamp,webkitLocale,webkitLogicalHeight,webkitLogicalWidth,webkitMarginAfter,webkitMarginBefore,webkitMarginEnd,webkitMarginStart,webkitMask,webkitMaskBoxImage,webkitMaskBoxImageOutset,webkitMaskBoxImageRepeat,webkitMaskBoxImageSlice,webkitMaskBoxImageSource,webkitMaskBoxImageWidth,webkitMaskClip,webkitMaskComposite,webkitMaskImage,webkitMaskOrigin,webkitMaskPosition,webkitMaskPositionX,webkitMaskPositionY,webkitMaskRepeat,webkitMaskRepeatX,webkitMaskRepeatY,webkitMaskSize,webkitMaxLogicalHeight,webkitMaxLogicalWidth,webkitMinLogicalHeight,webkitMinLogicalWidth,webkitOpacity,webkitOrder,webkitPaddingAfter,webkitPaddingBefore,webkitPaddingEnd,webkitPaddingStart,webkitPerspective,webkitPerspectiveOrigin,webkitPerspectiveOriginX,webkitPerspectiveOriginY,webkitPrintColorAdjust,webkitRtlOrdering,webkitRubyPosition,webkitShapeImageThreshold,webkitShapeMargin,webkitShapeOutside,webkitTapHighlightColor,webkitTextCombine,webkitTextDecorationsInEffect,webkitTextEmphasis,webkitTextEmphasisColor,webkitTextEmphasisPosition,webkitTextEmphasisStyle,webkitTextFillColor,webkitTextOrientation,webkitTextSecurity,webkitTextSizeAdjust,webkitTextStroke,webkitTextStrokeColor,webkitTextStrokeWidth,webkitTransform,webkitTransformOrigin,webkitTransformOriginX,webkitTransformOriginY,webkitTransformOriginZ,webkitTransformStyle,webkitTransition,webkitTransitionDelay,webkitTransitionDuration,webkitTransitionProperty,webkitTransitionTimingFunction,webkitUserDrag,webkitUserModify,webkitUserSelect,webkitWritingMode,whiteSpace,widows,width,willChange,wordBreak,wordSpacing,wordWrap,writingMode,x,y,zIndex,zoom";
var styleOptions = styleOptionsStr.split(',');

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

    this.list = new basic$1.DataList();
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

    this.list = new basic$1.DataList();
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

var InEventBind = /*#__PURE__*/function () {
  function InEventBind(opt) {
    _classCallCheck(this, InEventBind);

    this.opt = opt;
    this.id = gennerateUUID();
  }

  _createClass(InEventBind, [{
    key: "setValue",
    value: function setValue(val) {
      this.opt.tid = val.tid || '';
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.opt;
    }
  }]);

  return InEventBind;
}();

var OutEventBind = /*#__PURE__*/function () {
  function OutEventBind(opt) {
    _classCallCheck(this, OutEventBind);

    this.opt = opt;
    this.id = gennerateUUID();
  }

  _createClass(OutEventBind, [{
    key: "setValue",
    value: function setValue(val) {
      this.opt.tid = val.tid || '';
      this.opt.key = val.key || '';
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.opt;
    }
  }]);

  return OutEventBind;
}();

var EventBind = /*#__PURE__*/function () {
  function EventBind() {
    _classCallCheck(this, EventBind);

    this.inList = new basic$1.DataList();
    this.outList = new basic$1.DataList();
  }

  _createClass(EventBind, [{
    key: "addIn",
    value: function addIn(data) {
      var event = new InEventBind(data || {
        tid: ''
      });
      this.inList.add({
        name: event.id,
        data: event
      });
      return event;
    }
  }, {
    key: "addOut",
    value: function addOut(data) {
      var event = new OutEventBind(data || {
        tid: '',
        key: 'click'
      });
      this.outList.add({
        name: event.id,
        data: event
      });
      return event;
    }
  }, {
    key: "removeIn",
    value: function removeIn(id) {
      this.inList.remove(id);
    }
  }, {
    key: "removeOut",
    value: function removeOut(id) {
      this.outList.remove(id);
    }
  }, {
    key: "getInList",
    value: function getInList() {
      return this.inList.get('').map(function (item) {
        return item.data;
      });
    }
  }, {
    key: "getOutList",
    value: function getOutList() {
      return this.outList.get('').map(function (item) {
        return item.data;
      });
    }
  }, {
    key: "clearIn",
    value: function clearIn() {
      this.inList.clear();
    }
  }, {
    key: "clearOut",
    value: function clearOut() {
      this.outList.clear();
    }
  }, {
    key: "save",
    value: function save() {}
  }, {
    key: "getValue",
    value: function getValue() {
      return {
        inValue: this.getInList().map(function (item) {
          return item.getValue();
        }),
        outValue: this.getOutList().map(function (item) {
          return item.getValue();
        })
      };
    }
  }]);

  return EventBind;
}();

var Style = /*#__PURE__*/function () {
  function Style() {
    _classCallCheck(this, Style);

    this.changed = 0;
  }

  _createClass(Style, [{
    key: "setKeyValue",
    value: function setKeyValue(key, value) {
      this[key] = value;
      this.changed++;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return Object.assign({}, this);
    }
  }, {
    key: "setValue",
    value: function setValue(val) {
      for (var _i = 0, _Object$entries = Object.entries(val); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        try {
          this.setKeyValue(key, value);
        } catch (error) {}
      }
    }
  }, {
    key: "clear",
    value: function clear() {
      var _this18 = this;

      var _loop = function _loop() {
        var key = _Object$keys[_i2];

        if (styleOptions.find(function (item) {
          return item == key;
        })) {
          delete _this18[key];
        }
      };

      for (var _i2 = 0, _Object$keys = Object.keys(this); _i2 < _Object$keys.length; _i2++) {
        _loop();
      }
    }
  }, {
    key: "move",
    value: function move(x, y) {
      var left = convertPx(this.target.style.left) + x;
      var top = convertPx(this.target.style.top) + y;
      this.target.style.setKeyValue('left', setPx(left));
      this.target.style.setKeyValue('top', setPx(top));
    }
  }]);

  return Style;
}();

var UI = /*#__PURE__*/function () {
  function UI() {
    _classCallCheck(this, UI);

    this.eventBind = new EventBind();
    this.style = new Style();
    this.selfProp = new SelfProp();
  }

  _createClass(UI, [{
    key: "setSelfProp",
    value: function setSelfProp(selfProp) {
      this.selfProp = selfProp;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return {
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
  }]);

  return UI;
}();

var SelfProp = /*#__PURE__*/function () {
  function SelfProp() {
    _classCallCheck(this, SelfProp);

    this.opt = {};
    this.params = [];
  }

  _createClass(SelfProp, [{
    key: "setParam",
    value: function setParam() {
      var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.params = data;
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.opt;
    }
  }, {
    key: "setValue",
    value: function setValue(value) {
      this.opt = value || {};
    }
  }]);

  return SelfProp;
}();

var UIInstance = /*#__PURE__*/function () {
  function UIInstance() {
    _classCallCheck(this, UIInstance);

    this.moduleId = gennerateUUID();
    this.children = [];
    this.target = new UI();
    this.canDrag = true;
  }

  _createClass(UIInstance, [{
    key: "canDragFilter",
    value: function canDragFilter() {
      return this.canDrag && this.target.style.position && (this.target.style.position == 'absolute' || this.target.style.position == 'fixed');
    }
  }, {
    key: "setTarget",
    value: function setTarget(target) {
      this.target = target;
    }
  }, {
    key: "combi",
    value: function combi(target) {
      var module = new UIInstance();
      module.setTarget(target);
      this.children.push(module);
      return module;
    }
  }, {
    key: "unCombi",
    value: function unCombi(moduleId) {
      var module = this.findContainUI(this, moduleId);
      console.log(module);

      if (module) {
        module.children = module.children.filter(function (t) {
          return t.moduleId != moduleId;
        });
      }
    }
  }, {
    key: "findContainUI",
    value: function findContainUI(tree, moduleId) {
      var _this19 = this;

      if (tree.children.find(function (item) {
        return item.moduleId == moduleId;
      })) {
        return tree;
      } else if (tree.children.length > 0) {
        var target = null;
        tree.children.forEach(function (item) {
          target = _this19.findContainUI(item, moduleId) || target;
        });
        return target;
      } else {
        return null;
      }
    }
  }, {
    key: "move",
    value: function move(x, y) {
      this.target.style.move(x, y);
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return {
        moduleId: this.moduleId,
        canDrag: this.canDrag,
        target: this.target.getValue(),
        children: this.children.map(function (item) {
          return item.getValue();
        })
      };
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      return this.children;
    }
  }]);

  return UIInstance;
}();

var ModuleUI = /*#__PURE__*/function (_UI) {
  _inherits(ModuleUI, _UI);

  var _super29 = _createSuper(ModuleUI);

  function ModuleUI() {
    var _this20;

    _classCallCheck(this, ModuleUI);

    _this20 = _super29.call(this);
    _this20.id = gennerateUUID();
    _this20.moduleIdList = [];
    _this20.editable = true;
    _this20.insertable = true;
    _this20.selfProp = new ModuleSelfProp();
    return _this20;
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
}(UI);

var ModuleSelfProp = /*#__PURE__*/function (_SelfProp) {
  _inherits(ModuleSelfProp, _SelfProp);

  var _super30 = _createSuper(ModuleSelfProp);

  function ModuleSelfProp() {
    _classCallCheck(this, ModuleSelfProp);

    return _super30.call(this);
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
}(SelfProp);

var ContainerUI = /*#__PURE__*/function (_ModuleUI) {
  _inherits(ContainerUI, _ModuleUI);

  var _super31 = _createSuper(ContainerUI);

  function ContainerUI() {
    var _this21;

    _classCallCheck(this, ContainerUI);

    _this21 = _super31.call(this);
    _this21.insertable = true;
    return _this21;
  }

  return ContainerUI;
}(ModuleUI);

var ComponentSingleUI = /*#__PURE__*/function (_ModuleUI2) {
  _inherits(ComponentSingleUI, _ModuleUI2);

  var _super32 = _createSuper(ComponentSingleUI);

  function ComponentSingleUI() {
    var _this22;

    _classCallCheck(this, ComponentSingleUI);

    _this22 = _super32.call(this);
    _this22.insertable = false;
    return _this22;
  }

  return ComponentSingleUI;
}(ModuleUI);

var ComponentMultipleUI = /*#__PURE__*/function (_ComponentSingleUI) {
  _inherits(ComponentMultipleUI, _ComponentSingleUI);

  var _super33 = _createSuper(ComponentMultipleUI);

  function ComponentMultipleUI() {
    var _this23;

    _classCallCheck(this, ComponentMultipleUI);

    _this23 = _super33.call(this);
    _this23.insertable = false;
    return _this23;
  }

  return ComponentMultipleUI;
}(ComponentSingleUI);

var ModuleInstance = /*#__PURE__*/function (_UIInstance) {
  _inherits(ModuleInstance, _UIInstance);

  var _super34 = _createSuper(ModuleInstance);

  function ModuleInstance() {
    var _this24;

    _classCallCheck(this, ModuleInstance);

    _this24 = _super34.call(this);
    _this24.moduleId = gennerateUUID();
    _this24.children = [];
    _this24.target = new ModuleUI();
    _this24.canDrag = true;
    return _this24;
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
      var _this25 = this;

      if (tree.children.find(function (item) {
        return item.moduleId == moduleId;
      })) {
        return tree;
      } else if (tree.children.length > 0) {
        var target = null;
        tree.children.forEach(function (item) {
          target = _this25.findContainUI(item, moduleId) || target;
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

      for (var _i3 = 0, _Object$entries2 = Object.entries(style); _i3 < _Object$entries2.length; _i3++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i3], 2),
            key = _Object$entries2$_i[0],
            value = _Object$entries2$_i[1];

        this.target.style[key] = value;
      }
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      var _this26 = this;

      return this.children.filter(function (item) {
        return _this26.target.filterChildren(item);
      });
    }
  }, {
    key: "setValue",
    value: function setValue(data) {}
  }]);

  return ModuleInstance;
}(UIInstance);

var ContainerSelfProp = /*#__PURE__*/function (_ModuleSelfProp) {
  _inherits(ContainerSelfProp, _ModuleSelfProp);

  var _super35 = _createSuper(ContainerSelfProp);

  function ContainerSelfProp() {
    _classCallCheck(this, ContainerSelfProp);

    return _super35.call(this);
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

  var _super36 = _createSuper(BasicSelfProp);

  function BasicSelfProp() {
    _classCallCheck(this, BasicSelfProp);

    return _super36.call(this);
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

  var _super37 = _createSuper(MergeSelfProp);

  function MergeSelfProp() {
    _classCallCheck(this, MergeSelfProp);

    return _super37.call(this);
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

  var _super38 = _createSuper(CardContainerSelfProp);

  function CardContainerSelfProp() {
    var _this27;

    _classCallCheck(this, CardContainerSelfProp);

    _this27 = _super38.call(this);
    _this27.opt = {
      tab: ['选项1']
    };
    return _this27;
  }

  return CardContainerSelfProp;
}(ContainerSelfProp);

var CardContainerUI = /*#__PURE__*/function (_ContainerUI) {
  _inherits(CardContainerUI, _ContainerUI);

  var _super39 = _createSuper(CardContainerUI);

  function CardContainerUI() {
    var _this28;

    _classCallCheck(this, CardContainerUI);

    _this28 = _super39.call(this);
    _this28.activeCard = '';
    return _this28;
  }

  _createClass(CardContainerUI, [{
    key: "filterChildren",
    value: function filterChildren(instance) {
      var _this29 = this;

      return this.moduleIdList.find(function (item) {
        return item.moduleId == instance.moduleId && _this29.activeCard == item.tab;
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

  var _super40 = _createSuper(ButtonSelfProp);

  function ButtonSelfProp() {
    var _this30;

    _classCallCheck(this, ButtonSelfProp);

    _this30 = _super40.call(this);
    _this30.opt = {
      label: '提取数据'
    };
    return _this30;
  }

  return ButtonSelfProp;
}(BasicSelfProp);

var InputSelfProp = /*#__PURE__*/function (_BasicSelfProp2) {
  _inherits(InputSelfProp, _BasicSelfProp2);

  var _super41 = _createSuper(InputSelfProp);

  function InputSelfProp() {
    var _this31;

    _classCallCheck(this, InputSelfProp);

    _this31 = _super41.call(this);
    _this31.opt = {
      value: '测试',
      prepend: ''
    };
    return _this31;
  }

  return InputSelfProp;
}(BasicSelfProp);

var NumberSelfProp = /*#__PURE__*/function (_BasicSelfProp3) {
  _inherits(NumberSelfProp, _BasicSelfProp3);

  var _super42 = _createSuper(NumberSelfProp);

  function NumberSelfProp() {
    var _this32;

    _classCallCheck(this, NumberSelfProp);

    _this32 = _super42.call(this);
    _this32.opt = {
      value: 0,
      label: ''
    };
    return _this32;
  }

  return NumberSelfProp;
}(BasicSelfProp);

var TimePickerSelfProp = /*#__PURE__*/function (_BasicSelfProp4) {
  _inherits(TimePickerSelfProp, _BasicSelfProp4);

  var _super43 = _createSuper(TimePickerSelfProp);

  function TimePickerSelfProp() {
    var _this33;

    _classCallCheck(this, TimePickerSelfProp);

    _this33 = _super43.call(this);
    _this33.opt = {
      value: 0,
      placeholder: '',
      type: 'datetime'
    };
    return _this33;
  }

  return TimePickerSelfProp;
}(BasicSelfProp);

var TimeGroupSelfProp = /*#__PURE__*/function (_BasicSelfProp5) {
  _inherits(TimeGroupSelfProp, _BasicSelfProp5);

  var _super44 = _createSuper(TimeGroupSelfProp);

  function TimeGroupSelfProp() {
    var _this34;

    _classCallCheck(this, TimeGroupSelfProp);

    _this34 = _super44.call(this);
    _this34.opt = {
      year: 2020,
      report: 1
    };
    return _this34;
  }

  return TimeGroupSelfProp;
}(BasicSelfProp);

var SelectSelfProp = /*#__PURE__*/function (_BasicSelfProp6) {
  _inherits(SelectSelfProp, _BasicSelfProp6);

  var _super45 = _createSuper(SelectSelfProp);

  function SelectSelfProp() {
    var _this35;

    _classCallCheck(this, SelectSelfProp);

    _this35 = _super45.call(this);
    _this35.opt = {
      value: ''
    };
    return _this35;
  }

  return SelectSelfProp;
}(BasicSelfProp);

var CheckboxSelfProp = /*#__PURE__*/function (_BasicSelfProp7) {
  _inherits(CheckboxSelfProp, _BasicSelfProp7);

  var _super46 = _createSuper(CheckboxSelfProp);

  function CheckboxSelfProp() {
    var _this36;

    _classCallCheck(this, CheckboxSelfProp);

    _this36 = _super46.call(this);
    _this36.opt = {
      value: '',
      label: 'test'
    };
    return _this36;
  }

  return CheckboxSelfProp;
}(BasicSelfProp);

var CheckBoxGroupSelfProp = /*#__PURE__*/function (_BasicSelfProp8) {
  _inherits(CheckBoxGroupSelfProp, _BasicSelfProp8);

  var _super47 = _createSuper(CheckBoxGroupSelfProp);

  function CheckBoxGroupSelfProp() {
    var _this37;

    _classCallCheck(this, CheckBoxGroupSelfProp);

    _this37 = _super47.call(this);
    _this37.opt = {
      value: []
    };
    return _this37;
  }

  return CheckBoxGroupSelfProp;
}(BasicSelfProp);

var RadioSelfProp = /*#__PURE__*/function (_BasicSelfProp9) {
  _inherits(RadioSelfProp, _BasicSelfProp9);

  var _super48 = _createSuper(RadioSelfProp);

  function RadioSelfProp() {
    var _this38;

    _classCallCheck(this, RadioSelfProp);

    _this38 = _super48.call(this);
    _this38.opt = {
      value: ''
    };
    return _this38;
  }

  return RadioSelfProp;
}(BasicSelfProp);

var MulSelectSelfProp = /*#__PURE__*/function (_BasicSelfProp10) {
  _inherits(MulSelectSelfProp, _BasicSelfProp10);

  var _super49 = _createSuper(MulSelectSelfProp);

  function MulSelectSelfProp() {
    var _this39;

    _classCallCheck(this, MulSelectSelfProp);

    _this39 = _super49.call(this);
    _this39.opt = {
      value: ''
    };
    return _this39;
  }

  return MulSelectSelfProp;
}(BasicSelfProp);

var IframeSelfProp = /*#__PURE__*/function (_MergeSelfProp) {
  _inherits(IframeSelfProp, _MergeSelfProp);

  var _super50 = _createSuper(IframeSelfProp);

  function IframeSelfProp() {
    var _this40;

    _classCallCheck(this, IframeSelfProp);

    _this40 = _super50.call(this);
    _this40.opt = {
      src: ''
    };
    return _this40;
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
var containerModules = new ModuleInstance();
containerModules.canDrag = false;
containerModules.target.style.width = "100%";
containerModules.target.style.height = "100%";
containerModules.target.style.overflow = 'auto';

var LocalStorage = /*#__PURE__*/function (_basic$1$Storage) {
  _inherits(LocalStorage, _basic$1$Storage);

  var _super51 = _createSuper(LocalStorage);

  function LocalStorage() {
    var _this41;

    _classCallCheck(this, LocalStorage);

    _this41 = _super51.call(this);
    _this41.storage = localStorage;
    return _this41;
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
}(basic$1.Storage);

var storage = new LocalStorage();

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

var compilerInstance = new ModuleInstance();
var res = storage.get('saveedit');

if (res) {
  restoreInstance(compilerInstance, res);
}

Vue.use(ElementUI);

var EventListVueUI = /*#__PURE__*/function (_VueUI2) {
  _inherits(EventListVueUI, _VueUI2);

  var _super52 = _createSuper(EventListVueUI);

  function EventListVueUI(params) {
    var _this42;

    _classCallCheck(this, EventListVueUI);

    _this42 = _super52.call(this, params);
    _this42.apiList = apiList;
    _this42.eventList = eventList;
    return _this42;
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

var BasicVueUI = /*#__PURE__*/function (_VueUI3) {
  _inherits(BasicVueUI, _VueUI3);

  var _super53 = _createSuper(BasicVueUI);

  function BasicVueUI(params) {
    var _this43;

    _classCallCheck(this, BasicVueUI);

    _this43 = _super53.call(this, params);
    _this43.ui = _this43.props.ui;
    _this43.isCompiler = _this43.props.isCompiler;
    return _this43;
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

  var _super54 = _createSuper(ContainerVueUI);

  function ContainerVueUI(params) {
    _classCallCheck(this, ContainerVueUI);

    return _super54.call(this, params);
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

  var _super55 = _createSuper(CardContainerVueUI);

  function CardContainerVueUI(params) {
    _classCallCheck(this, CardContainerVueUI);

    return _super55.call(this, params);
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

  var _super56 = _createSuper(DialogContainerVueUI);

  function DialogContainerVueUI(params) {
    _classCallCheck(this, DialogContainerVueUI);

    return _super56.call(this, params);
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

  var _super57 = _createSuper(ButtonVueUI);

  function ButtonVueUI(params) {
    _classCallCheck(this, ButtonVueUI);

    return _super57.call(this, params);
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

var InputVueUI$2 = /*#__PURE__*/function (_BasicVueUI5) {
  _inherits(InputVueUI$2, _BasicVueUI5);

  var _super58 = _createSuper(InputVueUI$2);

  function InputVueUI$2(params) {
    _classCallCheck(this, InputVueUI$2);

    return _super58.call(this, params);
  }

  _createClass(InputVueUI$2, [{
    key: "renderInstance",
    value: function renderInstance(render) {
      return render.createElement(InputVueUIComponent$1, {
        props: {
          target: this
        }
      }, [render.vueRoot.$slots["default"]]);
    }
  }]);

  return InputVueUI$2;
}(BasicVueUI);

var NumberVueUI$1 = /*#__PURE__*/function (_BasicVueUI6) {
  _inherits(NumberVueUI$1, _BasicVueUI6);

  var _super59 = _createSuper(NumberVueUI$1);

  function NumberVueUI$1(params) {
    _classCallCheck(this, NumberVueUI$1);

    return _super59.call(this, params);
  }

  _createClass(NumberVueUI$1, [{
    key: "renderInstance",
    value: function renderInstance(render) {
      return render.createElement(NumberVueUIComponent$1, {
        props: {
          target: this
        }
      }, [render.vueRoot.$slots["default"]]);
    }
  }]);

  return NumberVueUI$1;
}(BasicVueUI);

var TimePickerVueUI = /*#__PURE__*/function (_BasicVueUI7) {
  _inherits(TimePickerVueUI, _BasicVueUI7);

  var _super60 = _createSuper(TimePickerVueUI);

  function TimePickerVueUI(params) {
    _classCallCheck(this, TimePickerVueUI);

    return _super60.call(this, params);
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

  var _super61 = _createSuper(TimeGroupVueUI);

  function TimeGroupVueUI(params) {
    var _this44;

    _classCallCheck(this, TimeGroupVueUI);

    _this44 = _super61.call(this, params);
    _this44.year = new Array(21).fill(2020).map(function (item, index) {
      return item - index;
    }).map(function (item) {
      return {
        key: item,
        value: item
      };
    });
    _this44.report = [{
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
    return _this44;
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

var SelectVueUI$1 = /*#__PURE__*/function (_BasicVueUI9) {
  _inherits(SelectVueUI$1, _BasicVueUI9);

  var _super62 = _createSuper(SelectVueUI$1);

  function SelectVueUI$1(params) {
    _classCallCheck(this, SelectVueUI$1);

    return _super62.call(this, params);
  }

  _createClass(SelectVueUI$1, [{
    key: "renderInstance",
    value: function renderInstance(render) {
      return render.createElement(SelectVueUIComponent$1, {
        props: {
          target: this
        }
      }, [render.vueRoot.$slots["default"]]);
    }
  }]);

  return SelectVueUI$1;
}(BasicVueUI);

var CheckBoxVueUI = /*#__PURE__*/function (_BasicVueUI10) {
  _inherits(CheckBoxVueUI, _BasicVueUI10);

  var _super63 = _createSuper(CheckBoxVueUI);

  function CheckBoxVueUI(params) {
    _classCallCheck(this, CheckBoxVueUI);

    return _super63.call(this, params);
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

  var _super64 = _createSuper(CheckBoxGroupVueUI);

  function CheckBoxGroupVueUI(params) {
    _classCallCheck(this, CheckBoxGroupVueUI);

    return _super64.call(this, params);
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

  var _super65 = _createSuper(RadioVueUI);

  function RadioVueUI(params) {
    _classCallCheck(this, RadioVueUI);

    return _super65.call(this, params);
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

var MulSelectVueUI$1 = /*#__PURE__*/function (_BasicVueUI13) {
  _inherits(MulSelectVueUI$1, _BasicVueUI13);

  var _super66 = _createSuper(MulSelectVueUI$1);

  function MulSelectVueUI$1(params) {
    _classCallCheck(this, MulSelectVueUI$1);

    return _super66.call(this, params);
  }

  _createClass(MulSelectVueUI$1, [{
    key: "renderInstance",
    value: function renderInstance(render) {
      return render.createElement(MulSelectVueUIComponent$1, {
        props: {
          target: this
        }
      }, [render.vueRoot.$slots["default"]]);
    }
  }]);

  return MulSelectVueUI$1;
}(BasicVueUI);

var IframeVueUI = /*#__PURE__*/function (_BasicVueUI14) {
  _inherits(IframeVueUI, _BasicVueUI14);

  var _super67 = _createSuper(IframeVueUI);

  function IframeVueUI(params) {
    _classCallCheck(this, IframeVueUI);

    return _super67.call(this, params);
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

  var _super68 = _createSuper(TableVueUI);

  function TableVueUI(params) {
    var _this45;

    _classCallCheck(this, TableVueUI);

    _this45 = _super68.call(this, params);
    _this45.list = [];
    _this45.loading = false;
    _this45.cols = [];
    _this45.direction = 'vertical';
    _this45.showHeader = true;
    _this45.mergetList = [];
    _this45.mergeCols = [];
    _this45.mergeShowHeader = false;

    _this45.setData();

    return _this45;
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

var TableDataConfigVueUI = /*#__PURE__*/function (_VueUI4) {
  _inherits(TableDataConfigVueUI, _VueUI4);

  var _super69 = _createSuper(TableDataConfigVueUI);

  function TableDataConfigVueUI(params) {
    var _this46;

    _classCallCheck(this, TableDataConfigVueUI);

    _this46 = _super69.call(this, params);
    _this46.cols = [];
    _this46.data = [];
    _this46.simulate = new SimulateVueUI({});

    _this46.check();

    return _this46;
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

exports.BasicVueUI = BasicVueUI;
exports.ButtonVueUI = ButtonVueUI;
exports.CardContainerVueUI = CardContainerVueUI;
exports.CheckBoxGroupVueUI = CheckBoxGroupVueUI;
exports.CheckBoxVueUI = CheckBoxVueUI;
exports.ContainerVueUI = ContainerVueUI;
exports.DialogContainerVueUI = DialogContainerVueUI;
exports.EventListVueUI = EventListVueUI;
exports.IframeVueUI = IframeVueUI;
exports.InputVueUI = InputVueUI$2;
exports.MulSelectVueUI = MulSelectVueUI$1;
exports.NumberVueUI = NumberVueUI$1;
exports.RadioVueUI = RadioVueUI;
exports.SelectVueUI = SelectVueUI$1;
exports.TableCol = TableCol;
exports.TableDataConfigVueUI = TableDataConfigVueUI;
exports.TableVueUI = TableVueUI;
exports.TimeGroupVueUI = TimeGroupVueUI;
exports.TimePickerVueUI = TimePickerVueUI;
