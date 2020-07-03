var uiLogic = (function (exports) {
  'use strict';

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

  class EventBind {
      constructor(dom) {
          this.dom = dom;
          this.dataList = new DataList();
      }
      bind(key, event, options) {
          if (this.dataList.get(key).length > 0) {
              this.unbind(key);
          }
          this.dom.addEventListener(key, event, options);
          this.dataList.add({
              name: key,
              data: {
                  event,
                  options
              }
          });
      }
      unbind(key) {
          this.dataList.get(key).forEach((item) => {
              this.dom.removeEventListener(key, item.data.event, item.data.options);
          });
          this.dataList.remove(key);
      }
  }

  class Position {
      constructor(dom) {
          this.dom = dom;
          this.left = dom.style.left;
          this.right = dom.style.right;
          this.top = dom.style.top;
          this.bottom = dom.style.bottom;
          this.position = dom.style.position;
          this.display = dom.style.display;
          this.zIndex = dom.style.zIndex;
          this.width = dom.style.width;
          this.height = dom.style.height;
          this.overflow = dom.style.overflow;
      }
      setKeyValue(key, value) {
          this[key] = value;
          this.dom.style[key] = value;
      }
  }

  class Style {
      constructor(dom) {
          this.style = dom.style;
      }
      setKeyValue(key, value) {
          this.style[key] = value;
      }
  }

  class ContainerUI extends UI {
      constructor(dom) {
          var d = dom || document.createElement('div');
          super(d);
          this.editable = false;
          this.insertable = true;
      }
  }

  class ComponentSingleUI extends UI {
      constructor(dom) {
          var d = dom || document.createElement('div');
          super(d);
          this.editable = true;
          this.insertable = false;
      }
  }
  class ComponentMultipleUI extends ComponentSingleUI {
      constructor(dom) {
          var d = dom || document.createElement('div');
          super(d);
          this.children = new DataList();
      }
      combi(ui) {
          if (this.findUI(ui).length > 0) {
              this.unCombi(ui);
          }
          this.children.add({ name: ui.id, data: ui });
          this.dom.append(ui.dom);
      }
      unCombi(ui) {
          this.findUI(ui).forEach((item) => {
              this.children.remove(item.name);
          });
          if (this.dom.parentElement) {
              this.dom.removeChild(ui.dom);
          }
      }
      findUI(ui) {
          return this.children.get(ui.id);
      }
  }

  let gennerateUUID = () => {
      return new Date().getTime().toString();
  };

  class UI {
      constructor(dom) {
          this.id = gennerateUUID();
          this.dom = dom;
          this.eventBind = new EventBind(this.dom);
          this.position = new Position(this.dom);
          this.style = new Style(this.dom);
          this.selfProp = new SelfProp();
      }
      setDom(dom) {
          this.dom = dom;
          this.eventBind = new EventBind(this.dom);
          this.position = new Position(this.dom);
          this.style = new Style(this.dom);
      }
  }
  class SelfProp {
      constructor() {
      }
  }

  let gennerateUUID$1 = () => {
      return new Date().getTime().toString();
  };

  exports.ComponentMultipleUI = ComponentMultipleUI;
  exports.ComponentSingleUI = ComponentSingleUI;
  exports.ContainerUI = ContainerUI;
  exports.EventBind = EventBind;
  exports.Position = Position;
  exports.SelfProp = SelfProp;
  exports.Style = Style;
  exports.gennerateUUID = gennerateUUID$1;

  return exports;

}({}));
