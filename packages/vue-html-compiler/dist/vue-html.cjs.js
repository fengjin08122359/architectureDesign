'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(require('vue'));
var uiLogic = require('@mikefeng110808/ui-logic');
var uiDesign = require('@mikefeng110808/ui-design');
var ElementUI = _interopDefault(require('element-ui'));

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
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

var global$1 = (typeof global !== "undefined" ? global :
            typeof self !== "undefined" ? self :
            typeof window !== "undefined" ? window : {});

// from https://github.com/kumavis/browser-process-hrtime/blob/master/index.js
var performance = global$1.performance || {};
var performanceNow =
  performance.now        ||
  performance.mozNow     ||
  performance.msNow      ||
  performance.oNow       ||
  performance.webkitNow  ||
  function(){ return (new Date()).getTime() };

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// The rational behind the verbose Reflect-feature check below is the fact that there are polyfills
// which add an implementation for Reflect.defineMetadata but not for Reflect.getOwnMetadataKeys.
// Without this check consumers will encounter hard to track down runtime errors.
function reflectionIsSupported() {
  return typeof Reflect !== 'undefined' && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
}
function copyReflectionMetadata(to, from) {
  forwardMetadata(to, from);
  Object.getOwnPropertyNames(from.prototype).forEach(function (key) {
    forwardMetadata(to.prototype, from.prototype, key);
  });
  Object.getOwnPropertyNames(from).forEach(function (key) {
    forwardMetadata(to, from, key);
  });
}

function forwardMetadata(to, from, propertyKey) {
  var metaKeys = propertyKey ? Reflect.getOwnMetadataKeys(from, propertyKey) : Reflect.getOwnMetadataKeys(from);
  metaKeys.forEach(function (metaKey) {
    var metadata = propertyKey ? Reflect.getOwnMetadata(metaKey, from, propertyKey) : Reflect.getOwnMetadata(metaKey, from);

    if (propertyKey) {
      Reflect.defineMetadata(metaKey, metadata, to, propertyKey);
    } else {
      Reflect.defineMetadata(metaKey, metadata, to);
    }
  });
}

var fakeArray = {
  __proto__: []
};
var hasProto = fakeArray instanceof Array;
function createDecorator(factory) {
  return function (target, key, index) {
    var Ctor = typeof target === 'function' ? target : target.constructor;

    if (!Ctor.__decorators__) {
      Ctor.__decorators__ = [];
    }

    if (typeof index !== 'number') {
      index = undefined;
    }

    Ctor.__decorators__.push(function (options) {
      return factory(options, key, index);
    });
  };
}
function isPrimitive(value) {
  var type = _typeof(value);

  return value == null || type !== 'object' && type !== 'function';
}
function warn(message) {
  if (typeof console !== 'undefined') {
    console.warn('[vue-class-component] ' + message);
  }
}

function collectDataFromConstructor(vm, Component) {
  // override _init to prevent to init as Vue instance
  var originalInit = Component.prototype._init;

  Component.prototype._init = function () {
    var _this = this;

    // proxy to actual vm
    var keys = Object.getOwnPropertyNames(vm); // 2.2.0 compat (props are no longer exposed as self properties)

    if (vm.$options.props) {
      for (var key in vm.$options.props) {
        if (!vm.hasOwnProperty(key)) {
          keys.push(key);
        }
      }
    }

    keys.forEach(function (key) {
      if (key.charAt(0) !== '_') {
        Object.defineProperty(_this, key, {
          get: function get() {
            return vm[key];
          },
          set: function set(value) {
            vm[key] = value;
          },
          configurable: true
        });
      }
    });
  }; // should be acquired class property values


  var data = new Component(); // restore original _init to avoid memory leak (#209)

  Component.prototype._init = originalInit; // create plain data object

  var plainData = {};
  Object.keys(data).forEach(function (key) {
    if (data[key] !== undefined) {
      plainData[key] = data[key];
    }
  });

  {
    if (!(Component.prototype instanceof Vue) && Object.keys(plainData).length > 0) {
      warn('Component class must inherit Vue or its descendant class ' + 'when class property is used.');
    }
  }

  return plainData;
}

var $internalHooks = ['data', 'beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeDestroy', 'destroyed', 'beforeUpdate', 'updated', 'activated', 'deactivated', 'render', 'errorCaptured', 'serverPrefetch' // 2.6
];
function componentFactory(Component) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  options.name = options.name || Component._componentTag || Component.name; // prototype props.

  var proto = Component.prototype;
  Object.getOwnPropertyNames(proto).forEach(function (key) {
    if (key === 'constructor') {
      return;
    } // hooks


    if ($internalHooks.indexOf(key) > -1) {
      options[key] = proto[key];
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(proto, key);

    if (descriptor.value !== void 0) {
      // methods
      if (typeof descriptor.value === 'function') {
        (options.methods || (options.methods = {}))[key] = descriptor.value;
      } else {
        // typescript decorated data
        (options.mixins || (options.mixins = [])).push({
          data: function data() {
            return _defineProperty({}, key, descriptor.value);
          }
        });
      }
    } else if (descriptor.get || descriptor.set) {
      // computed properties
      (options.computed || (options.computed = {}))[key] = {
        get: descriptor.get,
        set: descriptor.set
      };
    }
  });
  (options.mixins || (options.mixins = [])).push({
    data: function data() {
      return collectDataFromConstructor(this, Component);
    }
  }); // decorate options

  var decorators = Component.__decorators__;

  if (decorators) {
    decorators.forEach(function (fn) {
      return fn(options);
    });
    delete Component.__decorators__;
  } // find super


  var superProto = Object.getPrototypeOf(Component.prototype);
  var Super = superProto instanceof Vue ? superProto.constructor : Vue;
  var Extended = Super.extend(options);
  forwardStaticMembers(Extended, Component, Super);

  if (reflectionIsSupported()) {
    copyReflectionMetadata(Extended, Component);
  }

  return Extended;
}
var reservedPropertyNames = [// Unique id
'cid', // Super Vue constructor
'super', // Component options that will be used by the component
'options', 'superOptions', 'extendOptions', 'sealedOptions', // Private assets
'component', 'directive', 'filter'];
var shouldIgnore = {
  prototype: true,
  arguments: true,
  callee: true,
  caller: true
};

function forwardStaticMembers(Extended, Original, Super) {
  // We have to use getOwnPropertyNames since Babel registers methods as non-enumerable
  Object.getOwnPropertyNames(Original).forEach(function (key) {
    // Skip the properties that should not be overwritten
    if (shouldIgnore[key]) {
      return;
    } // Some browsers does not allow reconfigure built-in properties


    var extendedDescriptor = Object.getOwnPropertyDescriptor(Extended, key);

    if (extendedDescriptor && !extendedDescriptor.configurable) {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(Original, key); // If the user agent does not support `__proto__` or its family (IE <= 10),
    // the sub class properties may be inherited properties from the super class in TypeScript.
    // We need to exclude such properties to prevent to overwrite
    // the component options object which stored on the extended constructor (See #192).
    // If the value is a referenced value (object or function),
    // we can check equality of them and exclude it if they have the same reference.
    // If it is a primitive value, it will be forwarded for safety.

    if (!hasProto) {
      // Only `cid` is explicitly exluded from property forwarding
      // because we cannot detect whether it is a inherited property or not
      // on the no `__proto__` environment even though the property is reserved.
      if (key === 'cid') {
        return;
      }

      var superDescriptor = Object.getOwnPropertyDescriptor(Super, key);

      if (!isPrimitive(descriptor.value) && superDescriptor && superDescriptor.value === descriptor.value) {
        return;
      }
    } // Warn if the users manually declare reserved properties


    if ( reservedPropertyNames.indexOf(key) >= 0) {
      warn("Static property name '".concat(key, "' declared on class '").concat(Original.name, "' ") + 'conflicts with reserved property name of Vue internal. ' + 'It may cause unexpected behavior of the component. Consider renaming the property.');
    }

    Object.defineProperty(Extended, key, descriptor);
  });
}

function Component(options) {
  if (typeof options === 'function') {
    return componentFactory(options);
  }

  return function (Component) {
    return componentFactory(Component, options);
  };
}

Component.registerHooks = function registerHooks(keys) {
  $internalHooks.push.apply($internalHooks, _toConsumableArray(keys));
};

/** vue-property-decorator verson 9.0.0 MIT LICENSE copyright 2020 kaorun343 */
/** @see {@link https://github.com/vuejs/vue-class-component/blob/master/src/reflect.ts} */
var reflectMetadataIsSupported = typeof Reflect !== 'undefined' && typeof Reflect.getMetadata !== 'undefined';
function applyMetadata(options, target, key) {
    if (reflectMetadataIsSupported) {
        if (!Array.isArray(options) &&
            typeof options !== 'function' &&
            typeof options.type === 'undefined') {
            var type = Reflect.getMetadata('design:type', target, key);
            if (type !== Object) {
                options.type = type;
            }
        }
    }
}
/**
 * decorator of a prop
 * @param  options the options for the prop
 * @return PropertyDecorator | void
 */
function Prop(options) {
    if (options === void 0) { options = {}; }
    return function (target, key) {
        applyMetadata(options, target, key);
        createDecorator(function (componentOptions, k) {
            (componentOptions.props || (componentOptions.props = {}))[k] = options;
        })(target, key);
    };
}

let ToolBar = class ToolBar extends Vue {
    constructor() {
        super(...arguments);
        this.basicModules = uiDesign.basicModules;
        this.continerModules = uiDesign.continerModules;
        this.mergeModules = uiDesign.mergeModules;
    }
};
ToolBar = __decorate([
    Component
], ToolBar);
var script = ToolBar;
console.log(uiDesign.basicModules);

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "toolBarList" },
    [
      _c("div", { staticClass: "toolTitle" }, [_vm._v("容器组件（拖拽操作）")]),
      _vm._v(" "),
      _c(
        "el-row",
        _vm._l(_vm.continerModules, function(item, index) {
          return _c("el-col", { key: index, attrs: { span: 12 } }, [
            _vm._v("\n      " + _vm._s(item.name) + "\n    ")
          ])
        }),
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "toolTitle" }, [_vm._v("表单组件（拖拽操作）")]),
      _vm._v(" "),
      _c(
        "el-row",
        _vm._l(_vm.basicModules, function(item, index) {
          return _c("el-col", { key: index, attrs: { span: 12 } }, [
            _vm._v("\n      " + _vm._s(item.name) + "\n    ")
          ])
        }),
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "toolTitle" }, [_vm._v("复杂组件（拖拽操作）")]),
      _vm._v(" "),
      _c(
        "el-row",
        _vm._l(_vm.mergeModules, function(item, index) {
          return _c("el-col", { key: index, attrs: { span: 12 } }, [
            _vm._v("\n      " + _vm._s(item.name) + "\n    ")
          ])
        }),
        1
      )
    ],
    1
  )
};
var __vue_staticRenderFns__ = [];
__vue_render__._withStripped = true;

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = "data-v-1d7409b9";
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__ = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    false,
    undefined,
    undefined,
    undefined
  );

let Editor = class Editor extends Vue {
};
__decorate([
    Prop()
], Editor.prototype, "msg", void 0);
Editor = __decorate([
    Component
], Editor);
var script$1 = Editor;

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("el-row", [_c("el-col", [_vm._v("123123")])], 1)
};
var __vue_staticRenderFns__$1 = [];
__vue_render__$1._withStripped = true;

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$1 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    false,
    undefined,
    undefined,
    undefined
  );

let ModuleConfig = class ModuleConfig extends Vue {
};
__decorate([
    Prop()
], ModuleConfig.prototype, "msg", void 0);
ModuleConfig = __decorate([
    Component
], ModuleConfig);
var script$2 = ModuleConfig;

/* script */
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div")
};
var __vue_staticRenderFns__$2 = [];
__vue_render__$2._withStripped = true;

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$2 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    false,
    undefined,
    undefined,
    undefined
  );

let EditorTemplate = class EditorTemplate extends Vue {
};
EditorTemplate = __decorate([
    Component({ components: { ToolBar: __vue_component__, Editor: __vue_component__$1, ModuleConfig: __vue_component__$2 } })
], EditorTemplate);
var script$3 = EditorTemplate;

const isOldIE = typeof navigator !== 'undefined' &&
    /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
    return (id, style) => addStyle(id, style);
}
let HEAD;
const styles = {};
function addStyle(id, css) {
    const group = isOldIE ? css.media || 'default' : id;
    const style = styles[group] || (styles[group] = { ids: new Set(), styles: [] });
    if (!style.ids.has(id)) {
        style.ids.add(id);
        let code = css.source;
        if (css.map) {
            // https://developer.chrome.com/devtools/docs/javascript-debugging
            // this makes source maps inside style tags work properly in Chrome
            code += '\n/*# sourceURL=' + css.map.sources[0] + ' */';
            // http://stackoverflow.com/a/26603875
            code +=
                '\n/*# sourceMappingURL=data:application/json;base64,' +
                    btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) +
                    ' */';
        }
        if (!style.element) {
            style.element = document.createElement('style');
            style.element.type = 'text/css';
            if (css.media)
                style.element.setAttribute('media', css.media);
            if (HEAD === undefined) {
                HEAD = document.head || document.getElementsByTagName('head')[0];
            }
            HEAD.appendChild(style.element);
        }
        if ('styleSheet' in style.element) {
            style.styles.push(code);
            style.element.styleSheet.cssText = style.styles
                .filter(Boolean)
                .join('\n');
        }
        else {
            const index = style.ids.size - 1;
            const textNode = document.createTextNode(code);
            const nodes = style.element.childNodes;
            if (nodes[index])
                style.element.removeChild(nodes[index]);
            if (nodes.length)
                style.element.insertBefore(textNode, nodes[index]);
            else
                style.element.appendChild(textNode);
        }
    }
}

/* script */
const __vue_script__$3 = script$3;

/* template */
var __vue_render__$3 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "div",
    { staticClass: "editorTemplate" },
    [
      _c("ToolBar", { staticClass: "ToolBar" }),
      _vm._v(" "),
      _c("Editor", { staticClass: "Editor" }),
      _vm._v(" "),
      _c("ModuleConfig", { staticClass: "ModuleConfig" })
    ],
    1
  )
};
var __vue_staticRenderFns__$3 = [];
__vue_render__$3._withStripped = true;

  /* style */
  const __vue_inject_styles__$3 = function (inject) {
    if (!inject) return
    inject("data-v-51cf2592_0", { source: ".editorTemplate[data-v-51cf2592] {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  overflow: hidden;\n}\n.editorTemplate .ToolBar[data-v-51cf2592] {\n  position: absolute;\n  left: 0;\n  width: 200px;\n  bottom: 0;\n  top: 0;\n  overflow: auto;\n}\n.editorTemplate .Editor[data-v-51cf2592] {\n  position: absolute;\n  left: 200px;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  overflow: auto;\n}\n.editorTemplate .ModuleConfig[data-v-51cf2592] {\n  position: absolute;\n  right: 0;\n  width: 60vw;\n  bottom: 0;\n  top: 0;\n  display: none;\n}\n", map: {"version":3,"sources":["EditorTemplate.vue","E:\\fengjin\\test\\architectureDesign\\packages\\vue-html\\src\\pages\\EditorTemplate.vue"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,OAAO;EACP,QAAQ;EACR,SAAS;EACT,MAAM;EACN,gBAAgB;AAClB;AACA;EACE,kBAAkB;EAClB,OAAO;EACP,YAAY;EACZ,SAAS;EACT,MAAM;EACN,cAAc;AAChB;AACA;EACE,kBAAkB;EAClB,WAAW;EACX,QAAQ;ECCV,SAAA;EACA,MAAA;EACA,cAAA;AACA;AACA;EACA,kBAAA;EACA,QAAA;EACA,WAAA;EACA,SAAA;EACA,MAAA;EACA,aAAA;AACA","file":"EditorTemplate.vue","sourcesContent":[".editorTemplate {\n  position: fixed;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  overflow: hidden;\n}\n.editorTemplate .ToolBar {\n  position: absolute;\n  left: 0;\n  width: 200px;\n  bottom: 0;\n  top: 0;\n  overflow: auto;\n}\n.editorTemplate .Editor {\n  position: absolute;\n  left: 200px;\n  right: 0;\n  bottom: 0;\n  top: 0;\n  overflow: auto;\n}\n.editorTemplate .ModuleConfig {\n  position: absolute;\n  right: 0;\n  width: 60vw;\n  bottom: 0;\n  top: 0;\n  display: none;\n}\n","<template>\r\n  <div class=\"editorTemplate\">\r\n    <ToolBar class='ToolBar'></ToolBar>\r\n    <Editor class='Editor'></Editor>\r\n    <ModuleConfig class='ModuleConfig'></ModuleConfig>\r\n  </div>\r\n</template>\r\n<script lang=\"ts\">\r\nimport ToolBar from \"../components/ToolBar.vue\";\r\nimport Editor from \"../components/Editor.vue\";\r\nimport ModuleConfig from \"../components/ModuleConfig.vue\";\r\nimport { Component, Vue } from \"vue-property-decorator\";\r\n\r\n@Component({components: {ToolBar,Editor, ModuleConfig }})\r\nexport default class EditorTemplate extends Vue {\r\n \r\n}\r\n</script>\r\n\r\n<style lang=\"less\" scoped>\r\n@toolWidth:200px;\r\n.editorTemplate {\r\n  position: fixed;\r\n  left:0;\r\n  right:0;\r\n  bottom:0;\r\n  top:0;\r\n  overflow: hidden;\r\n  .ToolBar{\r\n    position: absolute;\r\n    left:0;\r\n    width:@toolWidth;\r\n    bottom:0;\r\n    top:0;\r\n    overflow: auto;\r\n  }\r\n  .Editor{\r\n    position: absolute;\r\n    left:@toolWidth;\r\n    right:0;\r\n    bottom:0;\r\n    top:0;\r\n    overflow: auto;\r\n  }\r\n  .ModuleConfig{\r\n    position: absolute;\r\n    right: 0;\r\n    width: 60vw;\r\n    bottom:0;\r\n    top:0;\r\n    display: none;\r\n  }\r\n}\r\n</style>"]}, media: undefined });

  };
  /* scoped */
  const __vue_scope_id__$3 = "data-v-51cf2592";
  /* module identifier */
  const __vue_module_identifier__$3 = undefined;
  /* functional template */
  const __vue_is_functional_template__$3 = false;
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$3 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$3, staticRenderFns: __vue_staticRenderFns__$3 },
    __vue_inject_styles__$3,
    __vue_script__$3,
    __vue_scope_id__$3,
    __vue_is_functional_template__$3,
    __vue_module_identifier__$3,
    false,
    createInjector,
    undefined,
    undefined
  );

//

var script$4 = {
  name: "App",
  components:{
    EditorTemplate: __vue_component__$3
  }
};

/* script */
const __vue_script__$4 = script$4;

/* template */
var __vue_render__$4 = function() {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c("div", { attrs: { id: "app" } }, [_c("EditorTemplate")], 1)
};
var __vue_staticRenderFns__$4 = [];
__vue_render__$4._withStripped = true;

  /* style */
  const __vue_inject_styles__$4 = undefined;
  /* scoped */
  const __vue_scope_id__$4 = undefined;
  /* module identifier */
  const __vue_module_identifier__$4 = undefined;
  /* functional template */
  const __vue_is_functional_template__$4 = false;
  /* style inject */
  
  /* style inject SSR */
  
  /* style inject shadow dom */
  

  
  const __vue_component__$4 = /*#__PURE__*/normalizeComponent(
    { render: __vue_render__$4, staticRenderFns: __vue_staticRenderFns__$4 },
    __vue_inject_styles__$4,
    __vue_script__$4,
    __vue_scope_id__$4,
    __vue_is_functional_template__$4,
    __vue_module_identifier__$4,
    false,
    undefined,
    undefined,
    undefined
  );

Vue.component('UISlot', {
    data() {
        return {
            UI: new uiLogic.ContainerUI()
        };
    },
    render(h, data) {
        return h('div', {
            attrs: {
                id: 'UISlot'
            },
        });
    },
    mounted() {
        this.UI.setDom(this.$el);
        this.UI.style.setKeyValue('background', 'red');
        this.UI.position.setKeyValue('width', '100px');
        this.UI.position.setKeyValue('height', '100px');
        console.log(this.UI.position);
    },
});
Vue.component('MainSlot', {
    data() {
        return {
            containerUI: new uiLogic.ContainerUI(this.$el)
        };
    },
    render(h, data) {
        return h('UISlot', {});
    },
});
// export default new Vue({
//     render (h, context) {
//         return h('MainSlot',{
//         })
//     },
// }).$mount("#app");
Vue.use(ElementUI);
var index = new Vue({
    render(h) {
        return h(__vue_component__$4);
    },
}).$mount("#app");

module.exports = index;
