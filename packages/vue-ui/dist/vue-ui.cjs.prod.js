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

var instance = require('@mikefeng110808/instance');

var Vue = _interopDefault(require('vue'));

var ElementUI = _interopDefault(require('element-ui'));

var vuePropertyDecorator = require('vue-property-decorator');

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

var VueUI = /*#__PURE__*/function (_instance$SingleUI) {
  _inherits(VueUI, _instance$SingleUI);

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
}(instance.SingleUI);

var VueUIList = /*#__PURE__*/function (_instance$UIList) {
  _inherits(VueUIList, _instance$UIList);

  var _super2 = _createSuper(VueUIList);

  function VueUIList() {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var options = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, VueUIList);

    return _super2.call(this, list, options);
  }

  _createClass(VueUIList, [{
    key: "convertSinlgeUI",
    value: function convertSinlgeUI(item) {
      return new VueUI(item);
    }
  }, {
    key: "handleComponentKey",
    value: function handleComponentKey(key) {
      var _this2 = this;

      return new Promise(function (resolve) {
        _this2.componentHasRendered.add({
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

  var _super3 = _createSuper(InputVueUI);

  function InputVueUI() {
    _classCallCheck(this, InputVueUI);

    return _super3.apply(this, arguments);
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

  var _super4 = _createSuper(ArrayVueUI);

  function ArrayVueUI() {
    _classCallCheck(this, ArrayVueUI);

    return _super4.apply(this, arguments);
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

  var _super5 = _createSuper(ObjectVueUI);

  function ObjectVueUI() {
    _classCallCheck(this, ObjectVueUI);

    return _super5.apply(this, arguments);
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

  var _super6 = _createSuper(MulSelectVueUI);

  function MulSelectVueUI() {
    _classCallCheck(this, MulSelectVueUI);

    return _super6.apply(this, arguments);
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

  var _super7 = _createSuper(SelectVueUI);

  function SelectVueUI() {
    _classCallCheck(this, SelectVueUI);

    return _super7.apply(this, arguments);
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

  var _super8 = _createSuper(NumberVueUI);

  function NumberVueUI() {
    _classCallCheck(this, NumberVueUI);

    return _super8.apply(this, arguments);
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

  var _super9 = _createSuper(InputVueUI);

  function InputVueUI() {
    _classCallCheck(this, InputVueUI);

    return _super9.apply(this, arguments);
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

  var _super10 = _createSuper(SimulateVueUIComponent);

  function SimulateVueUIComponent() {
    _classCallCheck(this, SimulateVueUIComponent);

    return _super10.apply(this, arguments);
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

  var _super11 = _createSuper(InputVueUI$2);

  function InputVueUI$2(params) {
    var _this3;

    _classCallCheck(this, InputVueUI$2);

    _this3 = _super11.call(this, params);
    _this3.renderComponent = InputVueUIComp;
    return _this3;
  }

  return InputVueUI$2;
}(VueUI);

var ArrayVueUI$1 = /*#__PURE__*/function (_VueUI2) {
  _inherits(ArrayVueUI$1, _VueUI2);

  var _super12 = _createSuper(ArrayVueUI$1);

  function ArrayVueUI$1(params) {
    var _this4;

    _classCallCheck(this, ArrayVueUI$1);

    _this4 = _super12.call(this, params);

    if (!Array.isArray(_this4.value)) {
      _this4.value = [];
    }

    if (_this4.value.length == 0) {
      _this4.addCol();
    }

    _this4.renderComponent = ArrayVueUIComp;
    return _this4;
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

  var _super13 = _createSuper(ObjectVueUI$1);

  function ObjectVueUI$1(params) {
    var _this5;

    _classCallCheck(this, ObjectVueUI$1);

    _this5 = _super13.call(this, params);
    _this5.props.objectArray = _this5.props.objectArray || [];

    _this5.setValue(_this5.value || {});

    if (_this5.props.objectArray.length == 0) {
      _this5.addCol();
    }

    _this5.renderComponent = ObjectVueUIComp;
    return _this5;
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

      for (var _i = 0, _Object$entries = Object.entries(this.value); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

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

  var _super14 = _createSuper(MulSelectVueUI$1);

  function MulSelectVueUI$1(params) {
    var _this6;

    _classCallCheck(this, MulSelectVueUI$1);

    _this6 = _super14.call(this, params);
    _this6.props.configVisible = _this6.props.configVisible || [];
    _this6.props.optionsArray = _this6.props.optionsArray || [];

    _this6.setValue(_this6.value || '');

    if (_this6.props.optionsArray.length == 0) {
      _this6.addCol();
    }

    _this6.renderComponent = MulSelectVueUIComp;
    return _this6;
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

  var _super15 = _createSuper(SelectVueUI$1);

  function SelectVueUI$1(params) {
    var _this7;

    _classCallCheck(this, SelectVueUI$1);

    _this7 = _super15.call(this, params);
    _this7.props.configVisible = _this7.props.configVisible || [];
    _this7.props.optionsArray = _this7.props.optionsArray || [];

    _this7.setValue(_this7.value || []);

    if (_this7.props.optionsArray.length == 0) {
      _this7.addCol();
    }

    _this7.renderComponent = SelectVueUIComp;
    return _this7;
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

  var _super16 = _createSuper(NumberVueUI$1);

  function NumberVueUI$1(params) {
    var _this8;

    _classCallCheck(this, NumberVueUI$1);

    _this8 = _super16.call(this, params);
    _this8.renderComponent = NumberVueUIComp;
    return _this8;
  }

  return NumberVueUI$1;
}(VueUI);

var BooleanVueUI = /*#__PURE__*/function (_VueUI7) {
  _inherits(BooleanVueUI, _VueUI7);

  var _super17 = _createSuper(BooleanVueUI);

  function BooleanVueUI(params) {
    var _this9;

    _classCallCheck(this, BooleanVueUI);

    _this9 = _super17.call(this, params);
    _this9.value = !!_this9.value;
    _this9.renderComponent = BooleanVueUIComp;
    return _this9;
  }

  return BooleanVueUI;
}(VueUI);

var SimulateVueUI = /*#__PURE__*/function (_VueUI8) {
  _inherits(SimulateVueUI, _VueUI8);

  var _super18 = _createSuper(SimulateVueUI);

  function SimulateVueUI(params) {
    var _this10;

    _classCallCheck(this, SimulateVueUI);

    _this10 = _super18.call(this, params);
    _this10.simulateValue = '';
    _this10.error = '';

    _this10.simulate();

    _this10.renderComponent = SimulateVueUIComp;
    return _this10;
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

exports.ArrayVueUI = ArrayVueUI$1;
exports.BooleanVueUI = BooleanVueUI;
exports.InputVueUI = InputVueUI$2;
exports.MulSelectVueUI = MulSelectVueUI$1;
exports.NumberVueUI = NumberVueUI$1;
exports.ObjectVueUI = ObjectVueUI$1;
exports.SelectVueUI = SelectVueUI$1;
exports.SimulateVueUI = SimulateVueUI;
exports.VueUI = VueUI;
exports.VueUIList = VueUIList;
