'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var uiLogic = require('@mikefeng110808/ui-logic');
var utils = require('@mikefeng110808/utils');

class ModuleUI extends uiLogic.UI {
    constructor() {
        super();
        this.id = utils.gennerateUUID();
        this.moduleIdList = [];
        this.editable = true;
        this.insertable = true;
        this.selfProp = new ModuleSelfProp();
    }
    getValue() {
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
    setDom(dom) {
        this.dom = dom;
    }
    setId(id) {
        this.id = id || utils.gennerateUUID();
    }
    filterChildren(instance) {
        return this.moduleIdList.find(item => item == instance.moduleId);
    }
    addModuleId(moduleId) {
        this.moduleIdList.push(moduleId);
    }
    removeModuleId(moduleId) {
        this.moduleIdList = this.moduleIdList.filter(item => item != moduleId);
    }
}
class ModuleSelfProp extends uiLogic.SelfProp {
    constructor() {
        super();
    }
    getStyle() {
        return {
            width: 100,
            height: 100
        };
    }
    getRelativeStyle() {
        return {
            position: 'relative',
            top: 'auto',
            bottom: 'auto',
            right: 'auto',
            left: 'auto',
        };
    }
}

class ContainerUI extends ModuleUI {
    constructor() {
        super();
        this.insertable = true;
    }
}

class ComponentSingleUI extends ModuleUI {
    constructor() {
        super();
        this.insertable = false;
    }
}
class ComponentMultipleUI extends ComponentSingleUI {
    constructor() {
        super();
        this.insertable = false;
    }
}

class ModuleInstance extends uiLogic.UIInstance {
    constructor() {
        super();
        this.moduleId = utils.gennerateUUID();
        this.children = [];
        this.target = new ModuleUI();
        this.canDrag = true;
    }
    setTarget(target) {
        this.target = target;
    }
    combi(target) {
        var module = new ModuleInstance();
        module.setTarget(target);
        this.children.push(module);
        this.target.addModuleId(module.moduleId);
        return module;
    }
    unCombi(moduleId) {
        var module = this.findContainUI(this, moduleId);
        console.log(module);
        if (module) {
            module.target.removeModuleId(moduleId);
            module.children = module.children.filter(t => t.moduleId != moduleId);
        }
    }
    findContainUI(tree, moduleId) {
        if (tree.children.find(item => item.moduleId == moduleId)) {
            return tree;
        }
        else if (tree.children.length > 0) {
            var target = null;
            tree.children.forEach(item => {
                target = this.findContainUI(item, moduleId) || target;
            });
            return target;
        }
        else {
            return null;
        }
    }
    resetRelativeStyle() {
        var style = this.target.selfProp.getRelativeStyle();
        for (let [key, value] of Object.entries(style)) {
            this.target.style[key] = value;
        }
    }
    getChildren() {
        return this.children.filter(item => this.target.filterChildren(item));
    }
    setValue(data) {
    }
}

exports.ComponentMultipleUI = ComponentMultipleUI;
exports.ComponentSingleUI = ComponentSingleUI;
exports.ContainerUI = ContainerUI;
exports.ModuleInstance = ModuleInstance;
exports.ModuleSelfProp = ModuleSelfProp;
exports.ModuleUI = ModuleUI;
