var vueUiComponentMerge = (function (exports, Vue, ElementUI, vuePropertyDecorator) {
  'use strict';

  Vue = Vue && Object.prototype.hasOwnProperty.call(Vue, 'default') ? Vue['default'] : Vue;
  ElementUI = ElementUI && Object.prototype.hasOwnProperty.call(ElementUI, 'default') ? ElementUI['default'] : ElementUI;

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

  let ArrayVueUI = class ArrayVueUI extends vuePropertyDecorator.Vue {
  };
  __decorate([
      vuePropertyDecorator.Prop()
  ], ArrayVueUI.prototype, "target", void 0);
  ArrayVueUI = __decorate([
      vuePropertyDecorator.Component({ template: `<div class='arrayVue' v-show='target.props.show'> <div>{{target.props.label}}</div> <el-row> <el-col v-for="(item,index) in target.value" :key="index"> <el-input v-model="item.value" > <template slot="append" > <span @click="target.addCol()" class='el-icon-circle-plus-outline'></span> <span v-if="index != 0" @click="target.delCol(index)" class='el-icon-remove-outline'></span> </template> </el-input> </el-col> </el-row> </div>` })
  ], ArrayVueUI);

  let ObjectVueUI = class ObjectVueUI extends vuePropertyDecorator.Vue {
  };
  __decorate([
      vuePropertyDecorator.Prop()
  ], ObjectVueUI.prototype, "target", void 0);
  ObjectVueUI = __decorate([
      vuePropertyDecorator.Component({ template: `<div class='objectVue' v-show='target.props.show'> <div>{{target.props.label}}</div> <el-row> <el-col v-for="(item,index) in target.props.objectArray" :key="index"> <el-col :span='10'> <el-input v-model="item.key" > <template slot='prepend'>key</template> </el-input> </el-col> <el-col :span='10'> <el-input v-model="item.value" > <template slot='prepend'>value</template> </el-input> </el-col> <el-col :span='4'> <span @click="target.addCol()" class='el-icon-circle-plus-outline'></span> <span v-if="index != 0" @click="target.delCol(index)" class='el-icon-remove-outline'></span> </el-col> </el-col> </el-row> </div>` })
  ], ObjectVueUI);

  let MulSelectVueUI = class MulSelectVueUI extends vuePropertyDecorator.Vue {
  };
  __decorate([
      vuePropertyDecorator.Prop()
  ], MulSelectVueUI.prototype, "target", void 0);
  MulSelectVueUI = __decorate([
      vuePropertyDecorator.Component({ template: `<div class='mulSelectVue' v-show='target.props.show'> <div>{{target.props.label}}</div> <div v-if='target.props.configVisible'> <span>选项:</span> <el-row> <el-col v-for="(item,index) in target.props.optionsArray" :key="index"> <el-col :span='10'> <el-input v-model="item.key" > <template slot='prepend'>key</template> </el-input> </el-col> <el-col :span='10'> <el-input v-model="item.value" > <template slot='prepend'>value</template> </el-input> </el-col> <el-col :span='4'> <span @click="target.addCol()" class='el-icon-circle-plus-outline'></span> <span v-if="index != 0" @click="target.delCol(index)" class='el-icon-remove-outline'></span> </el-col> </el-col> </el-row> </div> <span v-if='target.props.configVisible'>结果:</span> <el-select v-model="target.value" multiple filterable clearable> <el-option v-for="(item, index) in target.props.optionsArray" :value="item.key" :label='item.value' :key="index"> </el-option> </el-select></div>` })
  ], MulSelectVueUI);

  let SelectVueUI = class SelectVueUI extends vuePropertyDecorator.Vue {
  };
  __decorate([
      vuePropertyDecorator.Prop()
  ], SelectVueUI.prototype, "target", void 0);
  SelectVueUI = __decorate([
      vuePropertyDecorator.Component({ template: `<div class='selectVue' v-show='target.props.show'> <div>{{target.props.label}}</div> <div v-if='target.props.configVisible'> <span>选项:</span> <el-row > <el-col v-for="(item,index) in target.props.optionsArray" :key="index"> <el-col :span='10'> <el-input v-model="item.key" > <template slot='prepend'>key</template> </el-input> </el-col> <el-col :span='10'> <el-input v-model="item.value" > <template slot='prepend'>value</template> </el-input> </el-col> <el-col :span='4'> <span @click="target.addCol()" class='el-icon-circle-plus-outline'></span> <span v-if="index != 0" @click="target.delCol(index)" class='el-icon-remove-outline'></span> </el-col> </el-col> </el-row> </div> <span v-if='target.props.configVisible'>结果:</span> <el-select v-model="target.value" filterable clearable> <el-option v-for="(item, index) in target.props.optionsArray" :value="item.key" :label='item.value' :key="index"> </el-option> </el-select></div>` })
  ], SelectVueUI);

  let NumberVueUI = class NumberVueUI extends vuePropertyDecorator.Vue {
  };
  __decorate([
      vuePropertyDecorator.Prop()
  ], NumberVueUI.prototype, "target", void 0);
  NumberVueUI = __decorate([
      vuePropertyDecorator.Component({ template: `<div class='numberVue' v-show='target.props.show'> <div>{{target.props.label}}</div> <el-input-number v-model="target.value" :disabled='target.props.disabled' ></el-input-number></div>` })
  ], NumberVueUI);

  let InputVueUI$1 = class InputVueUI extends vuePropertyDecorator.Vue {
  };
  __decorate([
      vuePropertyDecorator.Prop()
  ], InputVueUI$1.prototype, "target", void 0);
  InputVueUI$1 = __decorate([
      vuePropertyDecorator.Component({ template: `<div class='BooleanVueUI' v-show='target.props.show'> <el-checkbox v-model="target.value">是否选中</el-checkbox> </div>` })
  ], InputVueUI$1);

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

  Vue.use(ElementUI);

  let NormalVue = class NormalVue extends vuePropertyDecorator.Vue {
      constructor() {
          super(...arguments);
          this.template = "<div></div>";
      }
      mounted() {
          if (this.target.lifeCycle) {
              this.target.lifeCycle.mounted();
          }
          this.resetProps();
          this.template = this.target.renderTemplate;
      }
      resetProps(props = this.target.props) {
      }
      resetRenderTemplate(renderTemplate = this.target.renderTemplate) {
          if (this.needRender) {
              if (renderTemplate) {
                  this.template = renderTemplate || '';
              }
              else {
                  this.template = '';
              }
          }
      }
      render(h) {
          return vuePropertyDecorator.Vue.compile(this.template).render.apply(this, h);
      }
      watchTab(val) {
          this.resetProps(val);
      }
      watchRenderTemplate(val) {
          this.resetRenderTemplate(val);
      }
  };
  __decorate([
      vuePropertyDecorator.Prop()
  ], NormalVue.prototype, "target", void 0);
  __decorate([
      vuePropertyDecorator.Prop()
  ], NormalVue.prototype, "needRender", void 0);
  __decorate([
      vuePropertyDecorator.Watch('target.props')
  ], NormalVue.prototype, "watchTab", null);
  __decorate([
      vuePropertyDecorator.Watch('target.renderTemplate')
  ], NormalVue.prototype, "watchRenderTemplate", null);
  NormalVue = __decorate([
      vuePropertyDecorator.Component
  ], NormalVue);
  var NormalVue$1 = NormalVue;

  let DoubleTitleComponent = class DoubleTitleComponent extends NormalVue$1 {
      constructor() {
          super(...arguments);
          this.title1 = '';
          this.title2 = '';
          this.template = "";
      }
      resetProps(props = this.target.props) {
          this.title1 = props.title1;
          this.title2 = props.title2;
      }
  };
  DoubleTitleComponent = __decorate([
      vuePropertyDecorator.Component({ template: `` })
  ], DoubleTitleComponent);
  var DoubleTitleComp = DoubleTitleComponent;

  class MergeVueUI extends VueUI {
      constructor(params) {
          super(params);
          this.renderTemplate = params.props ? params.props.renderTemplate : '<div></div>';
      }
      staticRender(renderTarget) {
          return this.render(renderTarget, {
              needRender: false
          });
      }
      normalRender(renderTarget) {
          return this.render(renderTarget, {
              needRender: true
          });
      }
  }
  class DoubleTitle extends MergeVueUI {
      constructor(params) {
          super(params);
          this.renderComponent = DoubleTitleComp;
          this.props.title1 = params.props ? params.props.title1 : '';
          this.props.title2 = params.props ? params.props.title2 : '';
      }
  }

  let DoubleTitleExample = {
      key: 'example',
      props: {
          title1: '11',
          title2: '1222',
          renderTemplate: "<div class='DoubleTitle'><div>{{title1}}</div><div>{{title2}}</div></div>"
      },
      valid: [],
      type: 'example',
  };

  class CompMergeInstance {
      constructor() {
          this.view = '';
          this.logic = DoubleTitle;
          this.db = DoubleTitleExample;
          this.getInstance();
      }
      getInstance() {
          this.instance = new this.logic(this.db);
      }
      renderInstance(render) {
          this.renderResult = this.instance ? this.instance.normalRender(render) : render.createElement('div', // 标签名称
          {
              ...render.context,
              props: {
                  target: this
              },
          }, [render.vueRoot.$slots.default]);
          return this.renderResult;
      }
      renderStaticInstance(render) {
          console.log('renderStaticInstance');
          this.renderResult = this.instance ? this.instance.staticRender(render) : render.createElement('div', // 标签名称
          {
              ...render.context,
              props: {
                  target: this
              }
          }, [render.vueRoot.$slots.default]);
          return this.renderResult;
      }
  }

  exports.CompMergeInstance = CompMergeInstance;

  return exports;

}({}, Vue, ElementUI, VueClassComponent));
