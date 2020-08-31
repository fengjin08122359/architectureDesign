'use strict';

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, '__esModule', {
  value: true
});

var basic = require('@mikefeng110808/basic');

require('axios');

var Drag = function Drag(param) {
  _classCallCheck(this, Drag);

  this.target = param.target;
};
/**
 * Returns an array of HTML elements located under the point specified by x, y.
 * If the native elementsFromPoint function does not exist, a polyfill will be used.
 *
 * @param  {number} x : X position
 * @param  {number} y : Y position
 * @return {array} : Array of the elements under the point (x, y)
 */


var gennerateUUID = function gennerateUUID() {
  var d = new Date().getTime();
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
  });
  return uuid;
};

var GetConfig = {};
var PostConfig = {};
var PostformConfig = {};
var PostjsonConfig = {};
var PostfileConfig = {};
var AutoConfig = {};
var ConfigList = [{
  name: 'get',
  config: GetConfig
}, {
  name: 'post',
  config: PostConfig
}, {
  name: 'postform',
  config: PostformConfig
}, {
  name: 'postjson',
  config: PostjsonConfig
}, {
  name: 'postfile',
  config: PostfileConfig
}, {
  name: 'auto',
  config: AutoConfig
}];

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

    this.list = new basic.DataList();
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

    this.list = new basic.DataList();
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

exports.Api = Api;
exports.ApiList = ApiList;
exports.AutoConfig = AutoConfig;
exports.ConfigList = ConfigList;
exports.Drag = Drag;
exports.Event = Event;
exports.EventList = EventList;
exports.GetConfig = GetConfig;
exports.PostConfig = PostConfig;
exports.PostfileConfig = PostfileConfig;
exports.PostformConfig = PostformConfig;
exports.PostjsonConfig = PostjsonConfig;
