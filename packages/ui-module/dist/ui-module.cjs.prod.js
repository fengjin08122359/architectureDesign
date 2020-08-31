'use strict';

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

Object.defineProperty(exports, '__esModule', {
  value: true
});

var uiLogic = require('@mikefeng110808/ui-logic');

var utils = require('@mikefeng110808/utils');

var ModuleUI = /*#__PURE__*/function (_uiLogic$UI) {
  _inherits(ModuleUI, _uiLogic$UI);

  var _super = _createSuper(ModuleUI);

  function ModuleUI() {
    var _this;

    _classCallCheck(this, ModuleUI);

    _this = _super.call(this);
    _this.id = utils.gennerateUUID();
    _this.moduleIdList = [];
    _this.editable = true;
    _this.insertable = true;
    _this.selfProp = new ModuleSelfProp();
    return _this;
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
      this.id = id || utils.gennerateUUID();
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
}(uiLogic.UI);

var ModuleSelfProp = /*#__PURE__*/function (_uiLogic$SelfProp) {
  _inherits(ModuleSelfProp, _uiLogic$SelfProp);

  var _super2 = _createSuper(ModuleSelfProp);

  function ModuleSelfProp() {
    _classCallCheck(this, ModuleSelfProp);

    return _super2.call(this);
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
}(uiLogic.SelfProp);

var ContainerUI = /*#__PURE__*/function (_ModuleUI) {
  _inherits(ContainerUI, _ModuleUI);

  var _super3 = _createSuper(ContainerUI);

  function ContainerUI() {
    var _this2;

    _classCallCheck(this, ContainerUI);

    _this2 = _super3.call(this);
    _this2.insertable = true;
    return _this2;
  }

  return ContainerUI;
}(ModuleUI);

var ComponentSingleUI = /*#__PURE__*/function (_ModuleUI2) {
  _inherits(ComponentSingleUI, _ModuleUI2);

  var _super4 = _createSuper(ComponentSingleUI);

  function ComponentSingleUI() {
    var _this3;

    _classCallCheck(this, ComponentSingleUI);

    _this3 = _super4.call(this);
    _this3.insertable = false;
    return _this3;
  }

  return ComponentSingleUI;
}(ModuleUI);

var ComponentMultipleUI = /*#__PURE__*/function (_ComponentSingleUI) {
  _inherits(ComponentMultipleUI, _ComponentSingleUI);

  var _super5 = _createSuper(ComponentMultipleUI);

  function ComponentMultipleUI() {
    var _this4;

    _classCallCheck(this, ComponentMultipleUI);

    _this4 = _super5.call(this);
    _this4.insertable = false;
    return _this4;
  }

  return ComponentMultipleUI;
}(ComponentSingleUI);

var ModuleInstance = /*#__PURE__*/function (_uiLogic$UIInstance) {
  _inherits(ModuleInstance, _uiLogic$UIInstance);

  var _super6 = _createSuper(ModuleInstance);

  function ModuleInstance() {
    var _this5;

    _classCallCheck(this, ModuleInstance);

    _this5 = _super6.call(this);
    _this5.moduleId = utils.gennerateUUID();
    _this5.children = [];
    _this5.target = new ModuleUI();
    _this5.canDrag = true;
    return _this5;
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
      var _this6 = this;

      if (tree.children.find(function (item) {
        return item.moduleId == moduleId;
      })) {
        return tree;
      } else if (tree.children.length > 0) {
        var target = null;
        tree.children.forEach(function (item) {
          target = _this6.findContainUI(item, moduleId) || target;
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

      for (var _i = 0, _Object$entries = Object.entries(style); _i < _Object$entries.length; _i++) {
        var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
            key = _Object$entries$_i[0],
            value = _Object$entries$_i[1];

        this.target.style[key] = value;
      }
    }
  }, {
    key: "getChildren",
    value: function getChildren() {
      var _this7 = this;

      return this.children.filter(function (item) {
        return _this7.target.filterChildren(item);
      });
    }
  }, {
    key: "setValue",
    value: function setValue(data) {}
  }]);

  return ModuleInstance;
}(uiLogic.UIInstance);

exports.ComponentMultipleUI = ComponentMultipleUI;
exports.ComponentSingleUI = ComponentSingleUI;
exports.ContainerUI = ContainerUI;
exports.ModuleInstance = ModuleInstance;
exports.ModuleSelfProp = ModuleSelfProp;
exports.ModuleUI = ModuleUI;
