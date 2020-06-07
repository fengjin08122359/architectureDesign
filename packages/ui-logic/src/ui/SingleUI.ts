/**
 *SingleUIProps
 * @param {string} label
 * @param {string} required
 * @param {Array} data
 * @param {boolean} disabled
 * @param {boolean} show
 * @param {placeholder} placeholder
 * @param {any} key: string
 * @interface SingleUIProps
 */
export interface SingleUIProps {
  label?: string; //标题
  required?: string; //必填提示
  data?: []; //单项关联数据
  disabled?: boolean; //禁用
  show?: boolean; //展示
  placeholder?: string;
  [key: string]: any;
}
/**
 *SingleUIPayload
 * @param {string} key
 * @param {SingleUIProps} props
 * @param {Array} valid
 * @param {string} type
 * @param {any} value
 * @param {Array} children
 * @interface SingleUIPayload
 */
export interface SingleUIPayload {
  key?: string;
  props: SingleUIProps;
  valid?: any[];
  type?: string;
  value?: any;
  children?: any[];
  rawComponents?: string[];
}
/**
 *SingleUIValuePayload
 * @param {string} key
 * @param {any} value
 * @param {SingleUIValuePayload} children
 * @interface SingleUIValuePayload
 */
export interface SingleUIValuePayload {
  key: string;
  value: any;
  children: SingleUIValuePayload[];
}
/**
 *validPayload
 * @param {boolean} success
 * @param {string} message
 * @param {string} type
 * @interface validPayload
 */
export interface validPayload {
  success: boolean;
  message: string;
  type: string;
}

class SingleUI {
  key: string;
  props: SingleUIProps;
  valid: any[];
  type: string;
  value: any;
  children: any[];
  rawData: SingleUIPayload;
  rawComponents: string[];
  canRender: boolean;
  constructor(params: SingleUIPayload) {
    this.key = params.key || ""; //键
    this.props = params.props || {
      label: "", //标题
      required: "", //必填提示
      data: [], //单项关联数据
      disabled: false, //禁用
      show: true, //展示
      placeholder: "", //占位符
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
  dataFind(data: string | number) {
    var result = null;
    (this.props.data || []).forEach((item: { [x: string]: any }) => {
      if (typeof item[data] != "undefined") {
        result = item[data];
      }
    });
    return result;
  }
  /**
   *save
   * @param {string} value
   * @memberof SingleUI
   */
  save(value: string) {
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
  onChange({ val, oldVal }: any) {
    return { val, oldVal };
  }
  /**
   *getValid
   *
   * @returns Promise<validPayload>
   * @memberof SingleUI
   */
  getValid(): Promise<validPayload> {
    var result: validPayload = {
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
  setDisabled(flag: boolean = false) {
    this.props.disabled = flag;
    return this.props.disabled;
  }
  /**
   *getKeyValue
   * @returns SingleUIValuePayload
   * @memberof SingleUI
   */
  getKeyValue(): SingleUIValuePayload {
    return {
      key: this.getKey(),
      value: this.getValue(),
      children: this.children.map((item: { getKeyValue: () => any }) => {
        return item.getKeyValue();
      }),
    };
  }
  /**
   *setKeyValue
   * @param {SingleUIValuePayload} ({ key, value, children })
   * @memberof SingleUI
   */
  setKeyValue({ key, value, children }: SingleUIValuePayload) {
    if (this.getKey() != "" && this.getKey() == key) {
      this.save(value);
      children.forEach((item: any) => {
        var target = this.children.find(
          (target: { getKey: () => any }) => item.key == target.getKey()
        );
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
  getAllItems(): SingleUI[] {
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
  render(...res: any): any {
    return;
  }
}

export { SingleUI };
