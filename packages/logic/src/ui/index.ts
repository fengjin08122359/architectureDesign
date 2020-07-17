import {
  SingleUI,
  SingleUIPayload,
  SingleUIValuePayload,
  validPayload,
} from "./SingleUI";
import { DataList } from "@mikefeng110808/basic";

/**
 *templatePayload
 * @param {string} key
 * @param {SingleUI} value
 * @interface templatePayload
 */
export interface templatePayload {
  key: string;
  value: typeof SingleUI;
}

/**
 *optionsPayload
 * @param {boolean} needValidHidden
 * @param {any} key: string
 * @interface optionsPayload
 */
export interface optionsPayload {
  needValidHidden: boolean;
  [key: string]: any;
}

export class UIList {
  options: optionsPayload;
  needValidHidden: any;
  rawList: SingleUIPayload[];
  list: any[];
  componentHasRendered: DataList
  private templateList: templatePayload[];
  classTarget: typeof UIList;
  constructor(list: any[] = [], options?: optionsPayload) {
    this.options = options || { needValidHidden: false };
    this.needValidHidden = this.options.needValidHidden;
    this.rawList = list;
    this.list = [];
    this.templateList = [];
    this.componentHasRendered = new DataList()
    this.classTarget = new.target
    this.reset();
  }
  /**
   *reset
   * @param {SingleUIPayload} list 
   * @memberof UIList
   */
  setList (list: SingleUIPayload[]) {
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
  addTemplate({ key, value }: templatePayload) {
    var rawValue = this.getValue()
    var target = this.templateList.find((item) => item.key == key);
    if (target) {
      target.value = value;
    } else {
      this.templateList.push({
        key,
        value,
      });
    }
    this.reset()
    this.setValue(rawValue)
  }
  /**
   *removeTemplate
   *
   * @param {string} key
   * @memberof UIList
   */
  removeTemplate(key: string) {
    var rawValue = this.getValue()
    this.templateList = this.templateList.filter((item) => item.key !== key);
    this.reset()
    this.setValue(rawValue)
  }
  /**
   *clearTemplate
   *
   * @memberof UIList
   */
  clearTemplate () {
    var rawValue = this.getValue()
    this.templateList = []
    this.reset()
    this.setValue(rawValue)
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
  private convert(item: SingleUIPayload) {
    var target = this.templateList.find((i) => i.key == item.type);
    if (target && target.value) {
      return new target.value(item);
    } else {
      return this.convertSinlgeUI(item);
    }
  } 
  convertSinlgeUI (item:SingleUIPayload) {
    return new SingleUI(item);
  }
  /**
   *getValid
   *
   * @returns Promise<validPayload>
   * @memberof UIList
   */
  getValid(): Promise<validPayload> {
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
  setValue(data: SingleUIValuePayload[]) {
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
  getValue(): SingleUIValuePayload[] {
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
  getAllItems(): SingleUI[] {
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
        return this.handleComponentKey(key)
      })).then(() => {
        resolve()
      })
    })
  }
  /**
   *getNeedRender
   * @returns string[]
   * @memberof UIList
   */
  getNeedRender() {
    return Array.from(
      new Set(
        this.getAllItems().reduce((total: string[], item) => {
          total = total.concat(item.getCanRender() ? [] : item.rawComponents);
          return total;
        }, [])
      )
    );
  }
  /**
   *render
   * @returns Promise
   * @memberof UIList
   */
  load() {
    return this.loadComponents().then(() => {
      var keys = this.componentHasRendered.get('key').map(item => item.data)
      this.getAllItems().forEach((item) => {
        if (item.canRender === false) {
          item.canRender = item.rawComponents.map((target) => {
            return keys.includes(target) 
          }).reduce((total, current) => total && current, true)
        }
      });
    });
  }
  render(): any[] {
    return this.getAllItems().map((item) => item.render());
  }
  /**
   *handleComponentKey
   * @param {any} key
   * @returns Promise
   * @memberof UIList
   */
  handleComponentKey (key:string) {
    return new Promise(resolve => {
      this.componentHasRendered.add({
        name: 'key',
        data: key
      })
      resolve() 
    })
  }
}
