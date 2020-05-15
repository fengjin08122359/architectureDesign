function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Logic = function (exports) {
  'use strict';

  var SingleUI = /*#__PURE__*/function () {
    function SingleUI(params) {
      _classCallCheck(this, SingleUI);

      this.key = params.key || ""; //键

      this.props = params.props || {
        label: "",
        required: "",
        data: [],
        disabled: false,
        show: true,
        placeholder: ""
      }; //属性列表包含其他属性

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
       *save
       * @param {string} value
       * @memberof SingleUI
       */

    }, {
      key: "save",
      value: function save(value) {
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
          this.save(value);
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
    function UIList(list, options) {
      _classCallCheck(this, UIList);

      this.options = options || {
        needValidHidden: false
      };
      this.needValidHidden = this.options.needValidHidden;
      this.rawList = list;
      this.list = [];
      this.templateList = [];
      this.reset();
    }
    /**
     *reset
     *
     * @memberof UIList
     */


    _createClass(UIList, [{
      key: "reset",
      value: function reset() {
        var _this3 = this;

        this.list = this.rawList.map(function (item) {
          var target = _this3.convert(item); // 需要根据类型判断使用的


          if (target.children) {
            target.children = new UIList(target.children, _this3.options).list;
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
       * @protected
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
          return new SingleUI(item);
        }
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
       *save
       * @param {SingleUIValuePayload} data
       * @memberof UIList
       */

    }, {
      key: "save",
      value: function save(data) {
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
        return new Promise(function (resolve) {
          resolve();
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
        var _this6 = this;

        return this.loadComponents().then(function () {
          _this6.getAllItems().forEach(function (item) {
            item.canRender = true;
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
    }]);

    return UIList;
  }();

  exports.SingleUI = SingleUI;
  exports.UIList = UIList;
  return exports;
}({});
