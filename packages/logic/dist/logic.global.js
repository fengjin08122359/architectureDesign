var Logic = (function (exports) {
  'use strict';

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

  exports.SingleUI = SingleUI;
  exports.UIList = UIList;

  return exports;

}({}));
