import {
  SingleItem,
  SingleItemPayload,
  SingleItemValuePayload,
  validPayload,
} from "./SingleItem";

export interface templatePayload {
  key: string;
  value: typeof SingleItem;
}
export interface optionsPayload {
  needValidHidden: boolean;
}

export const template: templatePayload[] = [];

export class ItemList {
  options: optionsPayload;
  needValidHidden: any;
  rawList: SingleItemPayload[];
  list: any[];
  templateList: templatePayload[];
  constructor(list: any[], options: optionsPayload) {
    this.options = options;
    this.needValidHidden = this.options.needValidHidden || false;
    this.rawList = list;
    this.list = [];
    this.templateList = template;
    this.reset();
  }
  reset() {
    this.list = this.rawList.map((item) => {
      var target = this.convert(item); // 需要根据类型判断使用的
      if (target.children) {
        target.children = new ItemList(target.children, this.options).list;
      }
      return target;
    }, []);
  }
  addTemplate({ key, value }: templatePayload) {
    var target = this.templateList.find((item) => item.key == key);
    if (target) {
      target.value = value;
    } else {
      this.templateList.push({
        key,
        value,
      });
    }
  }
  convert(item: SingleItemPayload) {
    var target = this.templateList.find((i) => i.key == item.type);
    if (target && target.value) {
      return new target.value(item);
    } else {
      return new SingleItem(item);
    }
  }
  getValid() {
    // 子节点查询
    var valid = this.getAllItems()
      .filter((item) => this.needValidHidden || item.props.show != false)
      .map((item) => item.getValid(), []);
    return new Promise((resolve) => {
      Promise.all(valid).then((res: any) => {
        var fails: validPayload[] = res.filter(
          (target: validPayload) => !target.success
        );
        resolve({
          success: fails.length == 0,
          errmsg: fails.length > 0 ? fails[0].message : "",
          type: fails.length > 0 ? fails[0].type : "success",
        });
      });
    });
  }
  save(data: SingleItemValuePayload[]) {
    // [{key:"",value:"", children: [{key:"",value:"", children:[]}]}]
    data.forEach((item) => {
      var target = this.list.find((target) => item.key == target.getKey());
      if (target) {
        target.setKeyValue(item);
      }
    });
  }
  getValue(): SingleItemValuePayload[] {
    // [{key:"",value:"", children: [{key:"",value:"", children:[]}]}]
    return this.list.map((item) => {
      return item.getKeyValue();
    });
  }
  getAllItems(): SingleItem[] {
    return this.list.reduce((total, item) => {
      total = total.concat(item);
      return total;
    }, []);
  }
  loadComponents() {
    return new Promise((resolve) => {
      resolve();
    });
  }
  getNeedRender() {
    return Array.from(
      new Set(
        this.getAllItems().reduce((total: string[], item) => {
          total = total.concat(item.rawComponents);
          return total;
        }, [])
      )
    );
  }
  render() {
    this.loadComponents().then(() => {
      this.getAllItems().forEach((item) => {
        item.canRender = true;
      });
    });
  }
}
