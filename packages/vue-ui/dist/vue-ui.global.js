var vueUi = (function (exports, Vue, ElementUI, vuePropertyDecorator) {
  'use strict';

  Vue = Vue && Object.prototype.hasOwnProperty.call(Vue, 'default') ? Vue['default'] : Vue;
  ElementUI = ElementUI && Object.prototype.hasOwnProperty.call(ElementUI, 'default') ? ElementUI['default'] : ElementUI;

  class DataList {
      constructor() {
          this.datas = [];
      }
      /**
       *add
       *
       * @param {Data} data
       * @memberof DataList
       */
      add(data) {
          this.datas.push(data);
      }
      /**
       *remove
       *
       * @param {string} name
       * @memberof DataList
       */
      remove(name) {
          this.datas = this.datas.filter((data) => data.name !== name);
      }
      /**
       *clear
       *
       * @memberof DataList
       */
      clear() {
          this.datas = [];
      }
      /**
       *get
       *
       * @param {string} name
       * @memberof DataList
       */
      get(name = "") {
          return this.datas.filter((data) => name === "" || data.name === name);
      }
      /**
       *get
       *
       * @param {string} name
       * @return {any} any
       * @memberof DataList
       */
      find(name = "") {
          var target = this.datas.find((data) => data.name === name);
          var empty = this.datas.find((data) => data.name === '');
          return target ? target.data : empty ? empty.data : null;
      }
  }

  class SingleUI {
      constructor(params) {
          this.key = params.key || ""; //键
          this.props = {
              label: "",
              required: "",
              data: [],
              disabled: false,
              show: true,
              placeholder: "",
              ...params.props,
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
      dataFind(data) {
          var result = null;
          (this.props.data || []).forEach((item) => {
              if (typeof item[data] != "undefined") {
                  result = item[data];
              }
          });
          return result;
      }
      /**
       *setValue
       * @param {any} value
       * @memberof SingleUI
       */
      setValue(value) {
          var oldValue = this.value;
          this.value = value;
          if (oldValue != this.value) {
              this.onChange({
                  val: this.value,
                  oldVal: oldValue,
              });
          }
      }
      /**
       *getKey
       * @returns string
       * @memberof SingleUI
       */
      getKey() {
          return this.key;
      }
      /**
       *getValue
       * @returns any
       * @memberof SingleUI
       */
      getValue() {
          return this.value;
      }
      /**
       *hasChange
       * @returns boolean
       * @memberof SingleUI
       */
      hasChange() {
          return !(this.getValue() == "");
      }
      /**
       *onChange
       * @param  ({val, oldVal})
       * @returns ({val, oldVal})
       * @memberof SingleUI
       */
      onChange({ val, oldVal }) {
          return { val, oldVal };
      }
      /**
       *getValid
       *
       * @returns Promise<validPayload>
       * @memberof SingleUI
       */
      getValid() {
          var result = {
              success: true,
              message: "",
              type: "success",
          };
          return new Promise((resolve) => {
              if (!this.key) {
                  resolve(result);
                  return;
              }
              if (this.props.required && !this.hasChange()) {
                  result = {
                      success: false,
                      message: this.props.label || "",
                      type: "requiredEmpty",
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
      setDisabled(flag = false) {
          this.props.disabled = flag;
          return this.props.disabled;
      }
      /**
       *getKeyValue
       * @returns SingleUIValuePayload
       * @memberof SingleUI
       */
      getKeyValue() {
          return {
              key: this.getKey(),
              value: this.getValue(),
              children: this.children.map((item) => {
                  return item.getKeyValue();
              }),
          };
      }
      /**
       *setKeyValue
       * @param {SingleUIValuePayload} ({ key, value, children })
       * @memberof SingleUI
       */
      setKeyValue({ key, value, children }) {
          if (this.getKey() != "" && this.getKey() == key) {
              this.setValue(value);
              children.forEach((item) => {
                  var target = this.children.find((target) => item.key == target.getKey());
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
      getAllItems() {
          return this.children
              .map((item) => {
              return item.getAllItems();
          })
              .concat(this);
      }
      /**
       *getCanRender
       * @returns boolean
       * @memberof SingleUI
       */
      getCanRender() {
          return this.canRender || this.rawComponents.length == 0;
      }
      /**
       *render
       *
       * @memberof SingleUI
       */
      render(...res) {
          return;
      }
  }

  class UIList {
      constructor(list = [], options) {
          this.options = options || { needValidHidden: false };
          this.needValidHidden = this.options.needValidHidden;
          this.rawList = list;
          this.list = [];
          this.templateList = [];
          this.componentHasRendered = new DataList();
          this.classTarget = new.target;
          this.reset();
      }
      /**
       *reset
       * @param {SingleUIPayload} list
       * @memberof UIList
       */
      setList(list) {
          this.rawList = list;
          this.list = [];
          this.reset();
      }
      /**
       *reset
       *
       * @memberof UIList
       */
      reset() {
          this.list = this.rawList.map((item) => {
              var target = this.convert(item); // 需要根据类型判断使用的
              if (target.children) {
                  target.children = new this.classTarget(target.children, this.options).list;
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
      addTemplate({ key, value }) {
          var rawValue = this.getValue();
          var target = this.templateList.find((item) => item.key == key);
          if (target) {
              target.value = value;
          }
          else {
              this.templateList.push({
                  key,
                  value,
              });
          }
          this.reset();
          this.setValue(rawValue);
      }
      /**
       *removeTemplate
       *
       * @param {string} key
       * @memberof UIList
       */
      removeTemplate(key) {
          var rawValue = this.getValue();
          this.templateList = this.templateList.filter((item) => item.key !== key);
          this.reset();
          this.setValue(rawValue);
      }
      /**
       *clearTemplate
       *
       * @memberof UIList
       */
      clearTemplate() {
          var rawValue = this.getValue();
          this.templateList = [];
          this.reset();
          this.setValue(rawValue);
      }
      /**
       *getTemplate
       * @returns templatePayload[]
       * @memberof UIList
       */
      getTemplate() {
          return this.templateList;
      }
      /**
       *convert
       * @private
       * @param {SingleUIPayload} item
       * @memberof UIList
       */
      convert(item) {
          var target = this.templateList.find((i) => i.key == item.type);
          if (target && target.value) {
              return new target.value(item);
          }
          else {
              return this.convertSinlgeUI(item);
          }
      }
      convertSinlgeUI(item) {
          return new SingleUI(item);
      }
      /**
       *getValid
       *
       * @returns Promise<validPayload>
       * @memberof UIList
       */
      getValid() {
          // 子节点查询
          var valid = this.getAllItems()
              .filter((item) => this.needValidHidden || item.props.show != false)
              .map((item) => item.getValid(), []);
          return new Promise((resolve) => {
              Promise.all(valid).then((res) => {
                  var fails = res.filter((target) => !target.success);
                  resolve({
                      success: fails.length == 0,
                      message: fails.length > 0 ? fails[0].message : "",
                      type: fails.length > 0 ? fails[0].type : "success",
                  });
              });
          });
      }
      /**
       *setValue
       * @param {SingleUIValuePayload} data
       * @memberof UIList
       */
      setValue(data) {
          // [{key:"",value:"", children: [{key:"",value:"", children:[]}]}]
          data.forEach((item) => {
              var target = this.list.find((target) => item.key == target.getKey());
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
      getValue() {
          // [{key:"",value:"", children: [{key:"",value:"", children:[]}]}]
          return this.list.map((item) => {
              return item.getKeyValue();
          });
      }
      /**
       *getAllItems
       * @returns SingleUI[]
       * @memberof UIList
       */
      getAllItems() {
          return this.list.reduce((total, item) => {
              total = total.concat(item);
              return total;
          }, []);
      }
      /**
       *loadComponents
       * @returns Promise
       * @memberof UIList
       */
      loadComponents() {
          return new Promise(resolve => {
              var needRender = this.getNeedRender();
              Promise.all(needRender.map(key => {
                  return this.handleComponentKey(key);
              })).then(() => {
                  resolve();
              });
          });
      }
      /**
       *getNeedRender
       * @returns string[]
       * @memberof UIList
       */
      getNeedRender() {
          return Array.from(new Set(this.getAllItems().reduce((total, item) => {
              total = total.concat(item.getCanRender() ? [] : item.rawComponents);
              return total;
          }, [])));
      }
      /**
       *render
       * @returns Promise
       * @memberof UIList
       */
      load() {
          return this.loadComponents().then(() => {
              var keys = this.componentHasRendered.get('key').map(item => item.data);
              this.getAllItems().forEach((item) => {
                  if (item.canRender === false) {
                      item.canRender = item.rawComponents.map((target) => {
                          return keys.includes(target);
                      }).reduce((total, current) => total && current, true);
                  }
              });
          });
      }
      render() {
          return this.getAllItems().map((item) => item.render());
      }
      /**
       *handleComponentKey
       * @param {any} key
       * @returns Promise
       * @memberof UIList
       */
      handleComponentKey(key) {
          return new Promise(resolve => {
              this.componentHasRendered.add({
                  name: 'key',
                  data: key
              });
              resolve();
          });
      }
  }

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

  let InputVueUI = class InputVueUI extends vuePropertyDecorator.Vue {
  };
  __decorate([
      vuePropertyDecorator.Prop()
  ], InputVueUI.prototype, "target", void 0);
  InputVueUI = __decorate([
      vuePropertyDecorator.Component({ template: `<div class='inputVue' v-show='target.props.show'> <el-input v-model="target.value" :disabled='target.props.disabled' clearable :type='target.props.inputType'> <template slot='append' v-if='target.props.append'>{{target.props.append}}</template> <template slot="prepend" v-if='target.props.label'>{{target.props.label}}</template> </el-input> </div>` })
  ], InputVueUI);
  var InputVueUIComp = InputVueUI;

  let ArrayVueUI = class ArrayVueUI extends vuePropertyDecorator.Vue {
  };
  __decorate([
      vuePropertyDecorator.Prop()
  ], ArrayVueUI.prototype, "target", void 0);
  ArrayVueUI = __decorate([
      vuePropertyDecorator.Component({ template: `<div class='arrayVue' v-show='target.props.show'> <div>{{target.props.label}}</div> <el-row> <el-col v-for="(item,index) in target.value" :key="index"> <el-input v-model="item.value" > <template slot="append" > <span @click="target.addCol()" class='el-icon-circle-plus-outline'></span> <span v-if="index != 0" @click="target.delCol(index)" class='el-icon-remove-outline'></span> </template> </el-input> </el-col> </el-row> </div>` })
  ], ArrayVueUI);
  var ArrayVueUIComp = ArrayVueUI;

  let ObjectVueUI = class ObjectVueUI extends vuePropertyDecorator.Vue {
  };
  __decorate([
      vuePropertyDecorator.Prop()
  ], ObjectVueUI.prototype, "target", void 0);
  ObjectVueUI = __decorate([
      vuePropertyDecorator.Component({ template: `<div class='objectVue' v-show='target.props.show'> <div>{{target.props.label}}</div> <el-row> <el-col v-for="(item,index) in target.props.objectArray" :key="index"> <el-col :span='10'> <el-input v-model="item.key" > <template slot='prepend'>key</template> </el-input> </el-col> <el-col :span='10'> <el-input v-model="item.value" > <template slot='prepend'>value</template> </el-input> </el-col> <el-col :span='4'> <span @click="target.addCol()" class='el-icon-circle-plus-outline'></span> <span v-if="index != 0" @click="target.delCol(index)" class='el-icon-remove-outline'></span> </el-col> </el-col> </el-row> </div>` })
  ], ObjectVueUI);
  var ObjectVueUIComp = ObjectVueUI;

  let MulSelectVueUI = class MulSelectVueUI extends vuePropertyDecorator.Vue {
  };
  __decorate([
      vuePropertyDecorator.Prop()
  ], MulSelectVueUI.prototype, "target", void 0);
  MulSelectVueUI = __decorate([
      vuePropertyDecorator.Component({ template: `<div class='mulSelectVue' v-show='target.props.show'> <div>{{target.props.label}}</div> <div v-if='target.props.configVisible'> <span>选项:</span> <el-row> <el-col v-for="(item,index) in target.props.optionsArray" :key="index"> <el-col :span='10'> <el-input v-model="item.key" > <template slot='prepend'>key</template> </el-input> </el-col> <el-col :span='10'> <el-input v-model="item.value" > <template slot='prepend'>value</template> </el-input> </el-col> <el-col :span='4'> <span @click="target.addCol()" class='el-icon-circle-plus-outline'></span> <span v-if="index != 0" @click="target.delCol(index)" class='el-icon-remove-outline'></span> </el-col> </el-col> </el-row> </div> <span v-if='target.props.configVisible'>结果:</span> <el-select v-model="target.value" multiple filterable clearable> <el-option v-for="(item, index) in target.props.optionsArray" :value="item.key" :label='item.value' :key="index"> </el-option> </el-select></div>` })
  ], MulSelectVueUI);
  var MulSelectVueUIComp = MulSelectVueUI;

  let SelectVueUI = class SelectVueUI extends vuePropertyDecorator.Vue {
  };
  __decorate([
      vuePropertyDecorator.Prop()
  ], SelectVueUI.prototype, "target", void 0);
  SelectVueUI = __decorate([
      vuePropertyDecorator.Component({ template: `<div class='selectVue' v-show='target.props.show'> <div>{{target.props.label}}</div> <div v-if='target.props.configVisible'> <span>选项:</span> <el-row > <el-col v-for="(item,index) in target.props.optionsArray" :key="index"> <el-col :span='10'> <el-input v-model="item.key" > <template slot='prepend'>key</template> </el-input> </el-col> <el-col :span='10'> <el-input v-model="item.value" > <template slot='prepend'>value</template> </el-input> </el-col> <el-col :span='4'> <span @click="target.addCol()" class='el-icon-circle-plus-outline'></span> <span v-if="index != 0" @click="target.delCol(index)" class='el-icon-remove-outline'></span> </el-col> </el-col> </el-row> </div> <span v-if='target.props.configVisible'>结果:</span> <el-select v-model="target.value" filterable clearable> <el-option v-for="(item, index) in target.props.optionsArray" :value="item.key" :label='item.value' :key="index"> </el-option> </el-select></div>` })
  ], SelectVueUI);
  var SelectVueUIComp = SelectVueUI;

  let NumberVueUI = class NumberVueUI extends vuePropertyDecorator.Vue {
  };
  __decorate([
      vuePropertyDecorator.Prop()
  ], NumberVueUI.prototype, "target", void 0);
  NumberVueUI = __decorate([
      vuePropertyDecorator.Component({ template: `<div class='numberVue' v-show='target.props.show'> <div>{{target.props.label}}</div> <el-input-number v-model="target.value" :disabled='target.props.disabled' ></el-input-number></div>` })
  ], NumberVueUI);
  var NumberVueUIComp = NumberVueUI;

  let InputVueUI$1 = class InputVueUI extends vuePropertyDecorator.Vue {
  };
  __decorate([
      vuePropertyDecorator.Prop()
  ], InputVueUI$1.prototype, "target", void 0);
  InputVueUI$1 = __decorate([
      vuePropertyDecorator.Component({ template: `<div class='BooleanVueUI' v-show='target.props.show'> <el-checkbox v-model="target.value">是否选中</el-checkbox> </div>` })
  ], InputVueUI$1);
  var BooleanVueUIComp = InputVueUI$1;

  let SimulateVueUIComponent = class SimulateVueUIComponent extends vuePropertyDecorator.Vue {
      watchSimulate(val) {
          this.target.simulate();
      }
  };
  __decorate([
      vuePropertyDecorator.Prop()
  ], SimulateVueUIComponent.prototype, "target", void 0);
  __decorate([
      vuePropertyDecorator.Watch('target.value')
  ], SimulateVueUIComponent.prototype, "watchSimulate", null);
  SimulateVueUIComponent = __decorate([
      vuePropertyDecorator.Component({ template: `<div class='SimulateVue' v-show='target.props.show'> <el-input type="textarea" :rows="5" placeholder="模拟框" v-model="target.value"> </el-input> <div>{{target.error}}</div> <div>{{target.simulateValueToString()}}</div> </div>` })
  ], SimulateVueUIComponent);
  var SimulateVueUIComp = SimulateVueUIComponent;

  Vue.use(ElementUI);
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

  exports.ArrayVueUI = ArrayVueUI$1;
  exports.BooleanVueUI = BooleanVueUI;
  exports.InputVueUI = InputVueUI$2;
  exports.MulSelectVueUI = MulSelectVueUI$1;
  exports.NumberVueUI = NumberVueUI$1;
  exports.ObjectVueUI = ObjectVueUI$1;
  exports.SelectVueUI = SelectVueUI$1;
  exports.SimulateVueUI = SimulateVueUI;
  exports.VueUI = VueUI;
  exports.VueUIList = VueUIList;

  return exports;

}({}, Vue, ElementUI, VueClassComponent));
