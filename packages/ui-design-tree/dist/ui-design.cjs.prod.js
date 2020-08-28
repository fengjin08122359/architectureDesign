'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var uiLogic = require('@mikefeng110808/ui-logic');

var container = [{
  name: "外层",
  selfProp: new uiLogic.SelfProp()
}, {
  name: "基本容器",
  selfProp: new uiLogic.SelfProp()
}, {
  name: "线性容器",
  selfProp: new uiLogic.SelfProp()
}, {
  name: "弹窗",
  selfProp: new uiLogic.SelfProp()
}];
var basic = [{
  name: "按钮",
  selfProp: new uiLogic.SelfProp()
}, {
  name: "输入框",
  selfProp: new uiLogic.SelfProp()
}, {
  name: "日期选择",
  selfProp: new uiLogic.SelfProp()
}, {
  name: "时间选择",
  selfProp: new uiLogic.SelfProp()
}, {
  name: "下拉选择",
  selfProp: new uiLogic.SelfProp()
}, {
  name: "多选框",
  selfProp: new uiLogic.SelfProp()
}, {
  name: "多选框组",
  selfProp: new uiLogic.SelfProp()
}, {
  name: "单选框组",
  selfProp: new uiLogic.SelfProp()
}, {
  name: "下拉框",
  selfProp: new uiLogic.SelfProp()
}, {
  name: "时间选择框",
  selfProp: new uiLogic.SelfProp()
}];
var merge = [{
  name: "柱状折现图",
  selfProp: new uiLogic.SelfProp()
}, {
  name: "饼图",
  selfProp: new uiLogic.SelfProp()
}, {
  name: "表格",
  selfProp: new uiLogic.SelfProp()
}, {
  name: "嵌入式页面",
  selfProp: new uiLogic.SelfProp()
}, {
  name: "缩放工具页面",
  selfProp: new uiLogic.SelfProp()
}];
var basicModules = [];
var continerModules = [];
var mergeModules = [];

var addBasic = function addBasic(props) {
  var target = new uiLogic.ContainerUI();
  target.name = props.name;
  target.selfProp = props.selfProp;
  basicModules.push(target);
};

var addContiner = function addContiner(props) {
  var target = new uiLogic.ComponentSingleUI();
  target.name = props.name;
  target.selfProp = props.selfProp;
  continerModules.push(target);
};

var addMerge = function addMerge(props) {
  var target = new uiLogic.ComponentMultipleUI();
  target.name = props.name;
  target.selfProp = props.selfProp;
  mergeModules.push(target);
};

basic.forEach(function (item) {
  addBasic(item);
});
container.forEach(function (item) {
  addContiner(item);
});
merge.forEach(function (item) {
  addMerge(item);
});
exports.basicModules = basicModules;
exports.continerModules = continerModules;
exports.mergeModules = mergeModules;
