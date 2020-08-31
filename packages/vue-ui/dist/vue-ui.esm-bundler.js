import { SingleUI, UIList } from '@mikefeng110808/instance';
import Vue$1 from 'vue';
import ElementUI from 'element-ui';
import { Prop, Component, Vue, Watch } from 'vue-property-decorator';

class LifeCycle {
    constructor(lifeCycle) {
    }
    mounted() {
    }
}

class VueUI extends SingleUI {
    constructor(params) {
        super(params);
        this.renderComponent = undefined;
        this.lifeCycle = new LifeCycle(params.props ? params.props.lifeCycle : {});
    }
    render(render, props) {
        if (!this.getCanRender()) {
            return render.createElement();
        }
        else {
            return this.renderInstance(render, props);
        }
    }
    renderInstance(render, props) {
        return render.createElement(this.renderComponent || 'div', // 标签名称
        {
            ...render.context,
            props: { target: this, ...props }
        }, [render.vueRoot.$slots.default]);
    }
}
class VueUIList extends UIList {
    constructor(list = [], options) {
        super(list, options);
    }
    convertSinlgeUI(item) {
        return new VueUI(item);
    }
    handleComponentKey(key) {
        return new Promise(resolve => {
            this.componentHasRendered.add({
                name: 'key',
                data: key
            });
            resolve();
        });
    }
    getRenderList(render) {
        return this.getAllItems().map(item => item.render(render));
    }
}

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

let InputVueUI = class InputVueUI extends Vue {
};
__decorate([
    Prop()
], InputVueUI.prototype, "target", void 0);
InputVueUI = __decorate([
    Component({ template: `<div class='inputVue' v-show='target.props.show'> <el-input v-model="target.value" :disabled='target.props.disabled' clearable :type='target.props.inputType'> <template slot='append' v-if='target.props.append'>{{target.props.append}}</template> <template slot="prepend" v-if='target.props.label'>{{target.props.label}}</template> </el-input> </div>` })
], InputVueUI);
var InputVueUIComp = InputVueUI;

let ArrayVueUI = class ArrayVueUI extends Vue {
};
__decorate([
    Prop()
], ArrayVueUI.prototype, "target", void 0);
ArrayVueUI = __decorate([
    Component({ template: `<div class='arrayVue' v-show='target.props.show'> <div>{{target.props.label}}</div> <el-row> <el-col v-for="(item,index) in target.value" :key="index"> <el-input v-model="item.value" > <template slot="append" > <span @click="target.addCol()" class='el-icon-circle-plus-outline'></span> <span v-if="index != 0" @click="target.delCol(index)" class='el-icon-remove-outline'></span> </template> </el-input> </el-col> </el-row> </div>` })
], ArrayVueUI);
var ArrayVueUIComp = ArrayVueUI;

let ObjectVueUI = class ObjectVueUI extends Vue {
};
__decorate([
    Prop()
], ObjectVueUI.prototype, "target", void 0);
ObjectVueUI = __decorate([
    Component({ template: `<div class='objectVue' v-show='target.props.show'> <div>{{target.props.label}}</div> <el-row> <el-col v-for="(item,index) in target.props.objectArray" :key="index"> <el-col :span='10'> <el-input v-model="item.key" > <template slot='prepend'>key</template> </el-input> </el-col> <el-col :span='10'> <el-input v-model="item.value" > <template slot='prepend'>value</template> </el-input> </el-col> <el-col :span='4'> <span @click="target.addCol()" class='el-icon-circle-plus-outline'></span> <span v-if="index != 0" @click="target.delCol(index)" class='el-icon-remove-outline'></span> </el-col> </el-col> </el-row> </div>` })
], ObjectVueUI);
var ObjectVueUIComp = ObjectVueUI;

let MulSelectVueUI = class MulSelectVueUI extends Vue {
};
__decorate([
    Prop()
], MulSelectVueUI.prototype, "target", void 0);
MulSelectVueUI = __decorate([
    Component({ template: `<div class='mulSelectVue' v-show='target.props.show'> <div>{{target.props.label}}</div> <div v-if='target.props.configVisible'> <span>选项:</span> <el-row> <el-col v-for="(item,index) in target.props.optionsArray" :key="index"> <el-col :span='10'> <el-input v-model="item.key" > <template slot='prepend'>key</template> </el-input> </el-col> <el-col :span='10'> <el-input v-model="item.value" > <template slot='prepend'>value</template> </el-input> </el-col> <el-col :span='4'> <span @click="target.addCol()" class='el-icon-circle-plus-outline'></span> <span v-if="index != 0" @click="target.delCol(index)" class='el-icon-remove-outline'></span> </el-col> </el-col> </el-row> </div> <span v-if='target.props.configVisible'>结果:</span> <el-select v-model="target.value" multiple filterable clearable> <el-option v-for="(item, index) in target.props.optionsArray" :value="item.key" :label='item.value' :key="index"> </el-option> </el-select></div>` })
], MulSelectVueUI);
var MulSelectVueUIComp = MulSelectVueUI;

let SelectVueUI = class SelectVueUI extends Vue {
};
__decorate([
    Prop()
], SelectVueUI.prototype, "target", void 0);
SelectVueUI = __decorate([
    Component({ template: `<div class='selectVue' v-show='target.props.show'> <div>{{target.props.label}}</div> <div v-if='target.props.configVisible'> <span>选项:</span> <el-row > <el-col v-for="(item,index) in target.props.optionsArray" :key="index"> <el-col :span='10'> <el-input v-model="item.key" > <template slot='prepend'>key</template> </el-input> </el-col> <el-col :span='10'> <el-input v-model="item.value" > <template slot='prepend'>value</template> </el-input> </el-col> <el-col :span='4'> <span @click="target.addCol()" class='el-icon-circle-plus-outline'></span> <span v-if="index != 0" @click="target.delCol(index)" class='el-icon-remove-outline'></span> </el-col> </el-col> </el-row> </div> <span v-if='target.props.configVisible'>结果:</span> <el-select v-model="target.value" filterable clearable> <el-option v-for="(item, index) in target.props.optionsArray" :value="item.key" :label='item.value' :key="index"> </el-option> </el-select></div>` })
], SelectVueUI);
var SelectVueUIComp = SelectVueUI;

let NumberVueUI = class NumberVueUI extends Vue {
};
__decorate([
    Prop()
], NumberVueUI.prototype, "target", void 0);
NumberVueUI = __decorate([
    Component({ template: `<div class='numberVue' v-show='target.props.show'> <div>{{target.props.label}}</div> <el-input-number v-model="target.value" :disabled='target.props.disabled' ></el-input-number></div>` })
], NumberVueUI);
var NumberVueUIComp = NumberVueUI;

let InputVueUI$1 = class InputVueUI extends Vue {
};
__decorate([
    Prop()
], InputVueUI$1.prototype, "target", void 0);
InputVueUI$1 = __decorate([
    Component({ template: `<div class='BooleanVueUI' v-show='target.props.show'> <el-checkbox v-model="target.value">是否选中</el-checkbox> </div>` })
], InputVueUI$1);
var BooleanVueUIComp = InputVueUI$1;

let SimulateVueUIComponent = class SimulateVueUIComponent extends Vue {
    watchSimulate(val) {
        this.target.simulate();
    }
};
__decorate([
    Prop()
], SimulateVueUIComponent.prototype, "target", void 0);
__decorate([
    Watch('target.value')
], SimulateVueUIComponent.prototype, "watchSimulate", null);
SimulateVueUIComponent = __decorate([
    Component({ template: `<div class='SimulateVue' v-show='target.props.show'> <el-input type="textarea" :rows="5" placeholder="模拟框" v-model="target.value"> </el-input> <div>{{target.error}}</div> <div>{{target.simulateValueToString()}}</div> </div>` })
], SimulateVueUIComponent);
var SimulateVueUIComp = SimulateVueUIComponent;

Vue$1.use(ElementUI);
class InputVueUI$2 extends VueUI {
    constructor(params) {
        super(params);
        this.renderComponent = InputVueUIComp;
    }
}
class ArrayVueUI$1 extends VueUI {
    constructor(params) {
        super(params);
        if (!Array.isArray(this.value)) {
            this.value = [];
        }
        if (this.value.length == 0) {
            this.addCol();
        }
        this.renderComponent = ArrayVueUIComp;
    }
    addCol() {
        this.value.push({
            value: ''
        });
    }
    delCol(index) {
        this.value.splice(index, 1);
    }
    getValue() {
        return this.value.map((item) => item.value);
    }
    setValue(val) {
        this.value = (val || []).map((item) => {
            return { value: item };
        });
        if (!Array.isArray(this.value)) {
            this.value = [];
        }
        if (this.value.length == 0) {
            this.addCol();
        }
    }
}
class ObjectVueUI$1 extends VueUI {
    constructor(params) {
        super(params);
        this.props.objectArray = this.props.objectArray || [];
        this.setValue(this.value || {});
        if (this.props.objectArray.length == 0) {
            this.addCol();
        }
        this.renderComponent = ObjectVueUIComp;
    }
    addCol() {
        this.props.objectArray.push({
            key: '',
            value: ''
        });
    }
    delCol(index) {
        this.props.objectArray.splice(index, 1);
    }
    getValue() {
        return this.props.objectArray.reduce((total, current) => {
            total[current.key] = current.value;
            return total;
        }, {});
    }
    setValue(val) {
        this.value = val || {};
        this.props.objectArray = [];
        for (let [key, value] of Object.entries(this.value)) {
            this.props.objectArray.push({
                key, value
            });
        }
        if (this.props.objectArray.length == 0) {
            this.addCol();
        }
    }
}
class MulSelectVueUI$1 extends VueUI {
    constructor(params) {
        super(params);
        this.props.configVisible = this.props.configVisible || [];
        this.props.optionsArray = this.props.optionsArray || [];
        this.setValue(this.value || '');
        if (this.props.optionsArray.length == 0) {
            this.addCol();
        }
        this.renderComponent = MulSelectVueUIComp;
    }
    addCol() {
        this.props.optionsArray.push({
            key: '',
            value: ''
        });
    }
    delCol(index) {
        this.props.optionsArray.splice(index, 1);
    }
}
class SelectVueUI$1 extends VueUI {
    constructor(params) {
        super(params);
        this.props.configVisible = this.props.configVisible || [];
        this.props.optionsArray = this.props.optionsArray || [];
        this.setValue(this.value || []);
        if (this.props.optionsArray.length == 0) {
            this.addCol();
        }
        this.renderComponent = SelectVueUIComp;
    }
    addCol() {
        this.props.optionsArray.push({
            key: '',
            value: ''
        });
    }
    delCol(index) {
        this.props.optionsArray.splice(index, 1);
    }
}
class NumberVueUI$1 extends VueUI {
    constructor(params) {
        super(params);
        this.renderComponent = NumberVueUIComp;
    }
}
class BooleanVueUI extends VueUI {
    constructor(params) {
        super(params);
        this.value = !!this.value;
        this.renderComponent = BooleanVueUIComp;
    }
}
class SimulateVueUI extends VueUI {
    constructor(params) {
        super(params);
        this.simulateValue = '';
        this.error = '';
        this.simulate();
        this.renderComponent = SimulateVueUIComp;
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        var oldValue = this.value;
        this.value = value;
        if (oldValue != this.value) {
            this.onChange({
                val: this.value,
                oldVal: oldValue,
            });
        }
        this.simulate();
    }
    simulate() {
        this.simulateValue = this.value;
        this.error = '';
        try {
            this.simulateValue = JSON.parse(this.value);
        }
        catch (error) {
            this.error = error;
        }
    }
    simulateValueToString() {
        return typeof this.simulateValue == 'object' ? JSON.stringify(this.simulateValue) : this.simulateValue;
    }
}

export { ArrayVueUI$1 as ArrayVueUI, BooleanVueUI, InputVueUI$2 as InputVueUI, MulSelectVueUI$1 as MulSelectVueUI, NumberVueUI$1 as NumberVueUI, ObjectVueUI$1 as ObjectVueUI, SelectVueUI$1 as SelectVueUI, SimulateVueUI, VueUI, VueUIList };
