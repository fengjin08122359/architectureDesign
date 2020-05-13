export interface SingleItemProps {
  label: string; //标题
  required: string; //必填提示
  data: []; //单项关联数据
  disabled: boolean; //禁用
  show: boolean; //展示
  placeholder: string;
  [key: string]: any;
}

export interface SingleItemPayload {
  key: string;
  props: SingleItemProps;
  valid: any[];
  type: string;
  value: any;
  children: any[];
}

export interface SingleItemValuePayload {
  key: string;
  value: any;
  children: SingleItemValuePayload[];
}

export interface validPayload {
  success: boolean;
  message: string;
  type: string;
}

class SingleItem {
  key: string;
  props: SingleItemProps;
  valid: any[];
  type: string;
  value: any;
  children: any[];
  rawData: {
    key: string;
    props: SingleItemProps;
    valid: any[];
    type: string;
    value: any;
    children: any[];
  };
  rawComponents: string[];
  canRender: boolean;
  constructor(params: SingleItemPayload) {
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
    this.rawComponents = [];
    this.canRender = false;
  }
  dataFind(data: string | number) {
    var result = null;
    this.props.data.forEach((item: { [x: string]: any }) => {
      if (typeof item[data] != "undefined") {
        result = item[data];
      }
    });
    return result;
  }
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
  getKey() {
    return this.key;
  }
  getValue() {
    return this.value;
  }
  hasChange() {
    return !(this.getValue() == "");
  }
  onChange({ val, oldVal }: any) {
    return { val, oldVal };
  }

  getValid() {
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
          message: this.props.label,
          type: "requiredEmpty",
        };
      }
      resolve(result);
    });
  }
  setDisabled(flag: any) {
    this.props.disabled = flag;
    return this.props.disabled;
  }
  getKeyValue(): SingleItemValuePayload {
    return {
      key: this.getKey(),
      value: this.getValue(),
      children: this.children.map((item: { getKeyValue: () => any }) => {
        return item.getKeyValue();
      }),
    };
  }
  setKeyValue({ key, value, children }: SingleItemValuePayload) {
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
  getAllItems(): SingleItem[] {
    return this.children
      .map((item) => {
        return item.getAllItems();
      })
      .concat(this);
  }
  getCanRender() {
    return this.canRender || this.rawComponents.length == 0;
  }
  render(...res: any) {
    return;
  }
}

export { SingleItem };
