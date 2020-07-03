'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, '__esModule', {
  value: true
});

var Module = /*#__PURE__*/function () {
  function Module() {
    _classCallCheck(this, Module);

    this.width = 100;
    this.height = 100;
    this.children = [];
  }

  _createClass(Module, [{
    key: "changeSize",
    value: function changeSize(_ref) {
      var _ref$width = _ref.width,
          width = _ref$width === void 0 ? this.width : _ref$width,
          _ref$height = _ref.height,
          height = _ref$height === void 0 ? this.height : _ref$height;
      this.width = width;
      this.height = height;
    }
  }]);

  return Module;
}();

var gennerateUUID = function gennerateUUID() {
  return new Date().getTime().toString();
};

exports.Module = Module;
exports.gennerateUUID = gennerateUUID;
