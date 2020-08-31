'use strict';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, '__esModule', {
  value: true
});

var basic = require('@mikefeng110808/basic');

var SingleUI = /*#__PURE__*/function () {
  function SingleUI(params) {
    _classCallCheck(this, SingleUI);

    this.key = params.key || ""; //键

    this.props = _objectSpread({
      label: "",
      required: "",
      data: [],
      disabled: false,
      show: true,
      placeholder: ""
    }, params.props); //属性列表包含其他属性

    this.valid = params.valid || []; //验证信息

    this.type = params.type || ""; // 类型

    this.value = typeof params.value == "undefined" ? "" : params.value; // 值

    this.children = params.children || []; //子节点

    this.rawData = params; //原始数据

    this.rawComponents = params.rawComponents || [];
    this.canRender = false;
  }
  /**
   *dataFind
   * @param {string | number} data
   * @memberof SingleUI
   */


  _createClass(SingleUI, [{
    key: "dataFind",
    value: function dataFind(data) {
      var result = null;
      (this.props.data || []).forEach(function (item) {
        if (typeof item[data] != "undefined") {
          result = item[data];
        }
      });
      return result;
    }
    /**
     *setValue
     * @param {any} value
     * @memberof SingleUI
     */

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
    }
    /**
     *getKey
     * @returns string
     * @memberof SingleUI
     */

  }, {
    key: "getKey",
    value: function getKey() {
      return this.key;
    }
    /**
     *getValue
     * @returns any
     * @memberof SingleUI
     */

  }, {
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
    /**
     *hasChange
     * @returns boolean
     * @memberof SingleUI
     */

  }, {
    key: "hasChange",
    value: function hasChange() {
      return !(this.getValue() == "");
    }
    /**
     *onChange
     * @param  ({val, oldVal})
     * @returns ({val, oldVal})
     * @memberof SingleUI
     */

  }, {
    key: "onChange",
    value: function onChange(_ref) {
      var val = _ref.val,
          oldVal = _ref.oldVal;
      return {
        val: val,
        oldVal: oldVal
      };
    }
    /**
     *getValid
     *
     * @returns Promise<validPayload>
     * @memberof SingleUI
     */

  }, {
    key: "getValid",
    value: function getValid() {
      var _this = this;

      var result = {
        success: true,
        message: "",
        type: "success"
      };
      return new Promise(function (resolve) {
        if (!_this.key) {
          resolve(result);
          return;
        }

        if (_this.props.required && !_this.hasChange()) {
          result = {
            success: false,
            message: _this.props.label || "",
            type: "requiredEmpty"
          };
        }

        resolve(result);
      });
    }
    /**
     *setDisabled
     * @param  {boolean} flag
     * @returns boolean
     * @memberof SingleUI
     */

  }, {
    key: "setDisabled",
    value: function setDisabled() {
      var flag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.props.disabled = flag;
      return this.props.disabled;
    }
    /**
     *getKeyValue
     * @returns SingleUIValuePayload
     * @memberof SingleUI
     */

  }, {
    key: "getKeyValue",
    value: function getKeyValue() {
      return {
        key: this.getKey(),
        value: this.getValue(),
        children: this.children.map(function (item) {
          return item.getKeyValue();
        })
      };
    }
    /**
     *setKeyValue
     * @param {SingleUIValuePayload} ({ key, value, children })
     * @memberof SingleUI
     */

  }, {
    key: "setKeyValue",
    value: function setKeyValue(_ref2) {
      var _this2 = this;

      var key = _ref2.key,
          value = _ref2.value,
          children = _ref2.children;

      if (this.getKey() != "" && this.getKey() == key) {
        this.setValue(value);
        children.forEach(function (item) {
          var target = _this2.children.find(function (target) {
            return item.key == target.getKey();
          });

          if (target) {
            target.setKeyValue(item);
          }
        });
      }
    }
    /**
     *setKeyValue
     * @returns SingleUI[]
     * @memberof SingleUI
     */

  }, {
    key: "getAllItems",
    value: function getAllItems() {
      return this.children.map(function (item) {
        return item.getAllItems();
      }).concat(this);
    }
    /**
     *getCanRender
     * @returns boolean
     * @memberof SingleUI
     */

  }, {
    key: "getCanRender",
    value: function getCanRender() {
      return this.canRender || this.rawComponents.length == 0;
    }
    /**
     *render
     *
     * @memberof SingleUI
     */

  }, {
    key: "render",
    value: function render() {
      return;
    }
  }]);

  return SingleUI;
}();

var UIList = /*#__PURE__*/function () {
  function UIList() {
    var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var options = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, UIList);

    this.options = options || {
      needValidHidden: false
    };
    this.needValidHidden = this.options.needValidHidden;
    this.rawList = list;
    this.list = [];
    this.templateList = [];
    this.componentHasRendered = new basic.DataList();
    this.classTarget = this instanceof UIList ? this.constructor : void 0;
    this.reset();
  }
  /**
   *reset
   * @param {SingleUIPayload} list
   * @memberof UIList
   */


  _createClass(UIList, [{
    key: "setList",
    value: function setList(list) {
      this.rawList = list;
      this.list = [];
      this.reset();
    }
    /**
     *reset
     *
     * @memberof UIList
     */

  }, {
    key: "reset",
    value: function reset() {
      var _this3 = this;

      this.list = this.rawList.map(function (item) {
        var target = _this3.convert(item); // 需要根据类型判断使用的


        if (target.children) {
          target.children = new _this3.classTarget(target.children, _this3.options).list;
        }

        return target;
      }, []);
    }
    /**
     *addTemplate
     *
     * @param {templatePayload} template
     * @memberof UIList
     */

  }, {
    key: "addTemplate",
    value: function addTemplate(_ref3) {
      var key = _ref3.key,
          value = _ref3.value;
      var rawValue = this.getValue();
      var target = this.templateList.find(function (item) {
        return item.key == key;
      });

      if (target) {
        target.value = value;
      } else {
        this.templateList.push({
          key: key,
          value: value
        });
      }

      this.reset();
      this.setValue(rawValue);
    }
    /**
     *removeTemplate
     *
     * @param {string} key
     * @memberof UIList
     */

  }, {
    key: "removeTemplate",
    value: function removeTemplate(key) {
      var rawValue = this.getValue();
      this.templateList = this.templateList.filter(function (item) {
        return item.key !== key;
      });
      this.reset();
      this.setValue(rawValue);
    }
    /**
     *clearTemplate
     *
     * @memberof UIList
     */

  }, {
    key: "clearTemplate",
    value: function clearTemplate() {
      var rawValue = this.getValue();
      this.templateList = [];
      this.reset();
      this.setValue(rawValue);
    }
    /**
     *getTemplate
     * @returns templatePayload[]
     * @memberof UIList
     */

  }, {
    key: "getTemplate",
    value: function getTemplate() {
      return this.templateList;
    }
    /**
     *convert
     * @private
     * @param {SingleUIPayload} item
     * @memberof UIList
     */

  }, {
    key: "convert",
    value: function convert(item) {
      var target = this.templateList.find(function (i) {
        return i.key == item.type;
      });

      if (target && target.value) {
        return new target.value(item);
      } else {
        return this.convertSinlgeUI(item);
      }
    }
  }, {
    key: "convertSinlgeUI",
    value: function convertSinlgeUI(item) {
      return new SingleUI(item);
    }
    /**
     *getValid
     *
     * @returns Promise<validPayload>
     * @memberof UIList
     */

  }, {
    key: "getValid",
    value: function getValid() {
      var _this4 = this;

      // 子节点查询
      var valid = this.getAllItems().filter(function (item) {
        return _this4.needValidHidden || item.props.show != false;
      }).map(function (item) {
        return item.getValid();
      }, []);
      return new Promise(function (resolve) {
        Promise.all(valid).then(function (res) {
          var fails = res.filter(function (target) {
            return !target.success;
          });
          resolve({
            success: fails.length == 0,
            message: fails.length > 0 ? fails[0].message : "",
            type: fails.length > 0 ? fails[0].type : "success"
          });
        });
      });
    }
    /**
     *setValue
     * @param {SingleUIValuePayload} data
     * @memberof UIList
     */

  }, {
    key: "setValue",
    value: function setValue(data) {
      var _this5 = this;

      // [{key:"",value:"", children: [{key:"",value:"", children:[]}]}]
      data.forEach(function (item) {
        var target = _this5.list.find(function (target) {
          return item.key == target.getKey();
        });

        if (target) {
          target.setKeyValue(item);
        }
      });
    }
    /**
     *getValue
     * @returns SingleUIValuePayload[]
     * @memberof UIList
     */

  }, {
    key: "getValue",
    value: function getValue() {
      // [{key:"",value:"", children: [{key:"",value:"", children:[]}]}]
      return this.list.map(function (item) {
        return item.getKeyValue();
      });
    }
    /**
     *getAllItems
     * @returns SingleUI[]
     * @memberof UIList
     */

  }, {
    key: "getAllItems",
    value: function getAllItems() {
      return this.list.reduce(function (total, item) {
        total = total.concat(item);
        return total;
      }, []);
    }
    /**
     *loadComponents
     * @returns Promise
     * @memberof UIList
     */

  }, {
    key: "loadComponents",
    value: function loadComponents() {
      var _this6 = this;

      return new Promise(function (resolve) {
        var needRender = _this6.getNeedRender();

        Promise.all(needRender.map(function (key) {
          return _this6.handleComponentKey(key);
        })).then(function () {
          resolve();
        });
      });
    }
    /**
     *getNeedRender
     * @returns string[]
     * @memberof UIList
     */

  }, {
    key: "getNeedRender",
    value: function getNeedRender() {
      return Array.from(new Set(this.getAllItems().reduce(function (total, item) {
        total = total.concat(item.getCanRender() ? [] : item.rawComponents);
        return total;
      }, [])));
    }
    /**
     *render
     * @returns Promise
     * @memberof UIList
     */

  }, {
    key: "load",
    value: function load() {
      var _this7 = this;

      return this.loadComponents().then(function () {
        var keys = _this7.componentHasRendered.get('key').map(function (item) {
          return item.data;
        });

        _this7.getAllItems().forEach(function (item) {
          if (item.canRender === false) {
            item.canRender = item.rawComponents.map(function (target) {
              return keys.includes(target);
            }).reduce(function (total, current) {
              return total && current;
            }, true);
          }
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return this.getAllItems().map(function (item) {
        return item.render();
      });
    }
    /**
     *handleComponentKey
     * @param {any} key
     * @returns Promise
     * @memberof UIList
     */

  }, {
    key: "handleComponentKey",
    value: function handleComponentKey(key) {
      var _this8 = this;

      return new Promise(function (resolve) {
        _this8.componentHasRendered.add({
          name: 'key',
          data: key
        });

        resolve();
      });
    }
  }]);

  return UIList;
}();

exports.SingleUI = SingleUI;
exports.UIList = UIList;
