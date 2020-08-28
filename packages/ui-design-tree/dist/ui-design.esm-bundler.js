import { SelfProp, ContainerUI, ComponentSingleUI, ComponentMultipleUI } from '@mikefeng110808/ui-logic';

let container = [{
        name: "外层",
        selfProp: new SelfProp()
    }, {
        name: "基本容器",
        selfProp: new SelfProp()
    }, {
        name: "线性容器",
        selfProp: new SelfProp()
    }, {
        name: "弹窗",
        selfProp: new SelfProp()
    }];
let basic = [{
        name: "按钮",
        selfProp: new SelfProp()
    }, {
        name: "输入框",
        selfProp: new SelfProp()
    }, {
        name: "日期选择",
        selfProp: new SelfProp()
    }, {
        name: "时间选择",
        selfProp: new SelfProp()
    }, {
        name: "下拉选择",
        selfProp: new SelfProp()
    }, {
        name: "多选框",
        selfProp: new SelfProp()
    }, {
        name: "多选框组",
        selfProp: new SelfProp()
    }, {
        name: "单选框组",
        selfProp: new SelfProp()
    }, {
        name: "下拉框",
        selfProp: new SelfProp()
    }, {
        name: "时间选择框",
        selfProp: new SelfProp()
    }];
let merge = [{
        name: "柱状折现图",
        selfProp: new SelfProp()
    }, {
        name: "饼图",
        selfProp: new SelfProp()
    }, {
        name: "表格",
        selfProp: new SelfProp()
    }, {
        name: "嵌入式页面",
        selfProp: new SelfProp()
    }, {
        name: "缩放工具页面",
        selfProp: new SelfProp()
    }];

let basicModules = [];
let continerModules = [];
let mergeModules = [];
var addBasic = (props) => {
    let target = new ContainerUI();
    target.name = props.name;
    target.selfProp = props.selfProp;
    basicModules.push(target);
};
var addContiner = (props) => {
    let target = new ComponentSingleUI();
    target.name = props.name;
    target.selfProp = props.selfProp;
    continerModules.push(target);
};
var addMerge = (props) => {
    let target = new ComponentMultipleUI();
    target.name = props.name;
    target.selfProp = props.selfProp;
    mergeModules.push(target);
};
basic.forEach((item) => {
    addBasic(item);
});
container.forEach((item) => {
    addContiner(item);
});
merge.forEach((item) => {
    addMerge(item);
});

export { basicModules, continerModules, mergeModules };
