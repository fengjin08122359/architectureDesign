(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@mikefeng110808/basic", "@mikefeng110808/logic"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@mikefeng110808/basic"), require("@mikefeng110808/logic"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.basic, global.logic);
    global.unknown = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _basic, _logic) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.keys(_basic).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(_exports, key, {
      enumerable: true,
      get: function get() {
        return _basic[key];
      }
    });
  });
  Object.keys(_logic).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(_exports, key, {
      enumerable: true,
      get: function get() {
        return _logic[key];
      }
    });
  });
});
