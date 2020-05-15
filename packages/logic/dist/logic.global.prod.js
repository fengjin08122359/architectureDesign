function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Logic = function (e) {
  "use strict";

  var t = /*#__PURE__*/function () {
    function t(e) {
      _classCallCheck(this, t);

      this.key = e.key || "", this.props = e.props || {
        label: "",
        required: "",
        data: [],
        disabled: !1,
        show: !0,
        placeholder: ""
      }, this.valid = e.valid || [], this.type = e.type || "", this.value = void 0 === e.value ? "" : e.value, this.children = e.children || [], this.rawData = e, this.rawComponents = e.rawComponents || [], this.canRender = !1;
    }

    _createClass(t, [{
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

    return t;
  }();

  var s = /*#__PURE__*/function () {
    function s(e, t) {
      _classCallCheck(this, s);

      this.options = t || {
        needValidHidden: !1
      }, this.needValidHidden = this.options.needValidHidden, this.rawList = e, this.list = [], this.templateList = [], this.reset();
    }

    _createClass(s, [{
      key: "reset",
      value: function reset() {
        var _this3 = this;

        this.list = this.rawList.map(function (e) {
          var t = _this3.convert(e);

          return t.children && (t.children = new s(t.children, _this3.options).list), t;
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
        var s = this.templateList.find(function (t) {
          return t.key == e.type;
        });
        return s && s.value ? new s.value(e) : new t(e);
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

    return s;
  }();

  return e.SingleUI = t, e.UIList = s, e;
}({});
