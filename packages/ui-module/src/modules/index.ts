import {
  CardContainerSelfProp,
  ContainerSelfProp,
  MergeSelfProp,
  ButtonSelfProp,
  InputSelfProp,
  NumberSelfProp,
  TimePickerSelfProp,
  TimeGroupSelfProp,
  SelectSelfProp,
  CheckboxSelfProp,
  CheckBoxGroupSelfProp,
  RadioSelfProp,
  MulSelectSelfProp,
  IframeSelfProp,
} from "./selfProp";
import {
  ContainerUI,
  ComponentSingleUI,
} from "@mikefeng110808/ui-module";

export class BaiscContainerUI extends ContainerUI {
  typeId = "1";
  name = "基本容器";
  constructor() {
    super();
    this.selfProp = new ContainerSelfProp();
    this.selfProp.setParam([
      {
        type: "input",
        key: "input",
        props: { label: "input" },
        value: "",
      },
      {
        type: "array",
        key: "array",
        props: { label: "array" },
        value: [],
      },
      {
        type: "object",
        key: "object",
        props: { label: "object" },
        value: {},
      },
      {
        type: "number",
        key: "number",
        props: { label: "number" },
        value: 0,
      },
      {
        type: "select",
        key: "select",
        props: { label: "select" },
        value: "",
      },
      {
        type: "mulSelect",
        key: "mulSelect",
        props: { label: "mulSelect" },
        value: [],
      },
    ]);
  }
}

export class CardContainerUI extends ContainerUI {
  activeCard: string;
  typeId = "2";
  name = "选项卡";
  constructor() {
    super();
    this.activeCard = "";
    this.selfProp = new CardContainerSelfProp();
    this.selfProp.setParam([
      {
        type: "array",
        key: "tab",
        props: { label: "选项卡" },
      },
    ]);
  }
  filterChildren(instance: any): boolean {
    return this.moduleIdList.find(
      (item) =>
        item.moduleId == instance.moduleId && this.activeCard == item.tab
    );
  }
  addModuleId(moduleId: string) {
    this.moduleIdList.push({
      moduleId,
      tab: this.activeCard,
    });
  }
  removeModuleId(moduleId: string) {
    this.moduleIdList = this.moduleIdList.filter(
      (item) => item.moduleId != moduleId
    );
  }
}

export class DialogContainerUI extends ContainerUI {
  typeId = "3";
  name = "弹窗";
  constructor() {
    super();
    this.selfProp = new ContainerSelfProp();
  }
}


export class ButtonComponent extends ComponentSingleUI {
  typeId = "4";
  name = "按钮";
  constructor() {
    super();
    this.selfProp = new ButtonSelfProp();
    this.selfProp.setParam([
      {
        type: "input",
        key: "label",
        props: { label: "描述" },
      },
    ])
  }
}


export class InputComponent extends ComponentSingleUI {
  typeId = "5";
  name = "输入框";
  constructor() {
    super();
    this.selfProp = new InputSelfProp();
    this.selfProp.setParam([
      {
        type: "input",
        key: "value",
        props: { label: "值" },
      },
      {
        type: "input",
        key: "prepend",
        props: { label: "前缀" },
      },
    ])
  }
}

export class NumberComponent extends ComponentSingleUI {
  typeId = "6";
  name = "数字输入框";
  constructor() {
    super();
    this.selfProp = new NumberSelfProp();
    this.selfProp.setParam([
      {
        type: "input",
        key: "value",
        props: { label: "值" },
      },
      {
        type: "input",
        key: "label",
        props: { label: "标签" },
      },
    ])
  }
}

export class TimePickerComponent extends ComponentSingleUI {
  typeId = "7";
  name = "日期选择";
  constructor() {
    super();
    this.selfProp = new TimePickerSelfProp();
    this.selfProp.setParam([
      {
        type: "input",
        key: "value",
        props: { label: "值" },
      },
      {
        type: "input",
        key: "placeholder",
        props: { label: "placeholder" },
      },
      {
        type: "select",
        key: "type",
        props: {
          label: "日期类型",
          optionsArray: [
            {
              key: "year",
              value: "year",
            },
            {
              key: "month",
              value: "month",
            },
            {
              key: "date",
              value: "date",
            },
            {
              key: "week",
              value: "week",
            },
            {
              key: "datetime",
              value: "datetime",
            },
            {
              key: "datetimerange",
              value: "datetimerange",
            },
            {
              key: "daterange",
              value: "daterange",
            },
          ],
          configVisible: false,
        },
      },
    ])
  }
}


export class TimeComponent extends ComponentSingleUI {
  typeId = "8";
  name = "时间选择";
  constructor() {
    super();
    this.selfProp = new TimeGroupSelfProp();
    this.selfProp.setParam([
      {
        type: "select",
        key: "year",
        props: {
          label: "日期类型",
          optionsArray: new Array(21)
            .fill(2020)
            .map((item, index) => item - index)
            .map((item) => {
              return {
                key: item,
                value: item,
              };
            }),
          configVisible: false,
        },
      },
      {
        type: "select",
        key: "report",
        props: {
          label: "日期类型",
          optionsArray: [
            {
              key: 1,
              value: "年报",
            },
            {
              key: 2,
              value: "三季",
            },
            {
              key: 3,
              value: "中期",
            },
            {
              key: 4,
              value: "一季",
            },
          ],
          configVisible: false,
        },
      },
    ])
  }
}

export class SelectComponent extends ComponentSingleUI {
  typeId = "9";
  name = "数字输入框";
  constructor() {
    super();
    this.selfProp = new SelectSelfProp();
    this.selfProp.setParam([
      {
        type: "select",
        key: "value",
        props: {
          label: "日期类型",
          optionsArray: [
            {
              key: 1,
              value: "选项一",
            },
            {
              key: 2,
              value: "选项二",
            },
            {
              key: 3,
              value: "选项三",
            },
          ],
          configVisible: true,
        },
      },
    ])
  }
}


export class CheckboxComponent extends ComponentSingleUI {
  typeId = "10";
  name = "多选框";
  constructor() {
    super();
    this.selfProp = new CheckboxSelfProp();
    this.selfProp.setParam([
      {
        type: "boolean",
        key: "value",
      },
      {
        type: "input",
        key: "label",
      },
    ])
  }
}
export class CheckBoxGroupComponent extends ComponentSingleUI {
  typeId = "11";
  name = "多选框组";
  constructor() {
    super();
    this.selfProp = new CheckBoxGroupSelfProp();
    this.selfProp.setParam([
      {
        type: "mulSelect",
        key: "value",
        props: {
          optionsArray: [
            {
              key: 1,
              value: "选项一",
            },
            {
              key: 2,
              value: "选项二",
            },
            {
              key: 3,
              value: "选项三",
            },
          ],
          configVisible: true,
        },
      },
    ])
  }
}

export class RadioComponent extends ComponentSingleUI {
  typeId = "12";
  name = "单选框组";
  constructor() {
    super();
    this.selfProp = new RadioSelfProp();
    this.selfProp.setParam([
      {
        type: "select",
        key: "value",
        props: {
          label: "日期类型",
          optionsArray: [
            {
              key: 1,
              value: "选项一",
            },
            {
              key: 2,
              value: "选项二",
            },
            {
              key: 3,
              value: "选项三",
            },
          ],
          configVisible: true,
        },
      },
    ])
  }
}
export class MulSelectComponent extends ComponentSingleUI {
  typeId = "13";
  name = "下拉框";
  constructor() {
    super();
    this.selfProp = new MulSelectSelfProp();
    this.selfProp.setParam([
      {
        type: "mulSelect",
        key: "value",
        props: {
          optionsArray: [
            {
              key: 1,
              value: "选项一",
            },
            {
              key: 2,
              value: "选项二",
            },
            {
              key: 3,
              value: "选项三",
            },
          ],
          configVisible: true,
        },
      },
    ])
  }
}


export class LineEchartComponent extends ComponentSingleUI {
  typeId = "15";
  name = "柱状折现图";
  constructor() {
    super();
    this.selfProp = new MergeSelfProp();
  }
}
export class PieEchartComponent extends ComponentSingleUI {
  typeId = "16";
  name = "饼图";
  constructor() {
    super();
    this.selfProp = new MergeSelfProp();
  }
}
export class TableComponent extends ComponentSingleUI {
  typeId = "17";
  name = "表格";
  constructor() {
    super();
    this.selfProp = new MergeSelfProp();
    this.selfProp.setParam([
      {
        type: "tableDataConfig",
        key: "config",
      },
    ])
  }
}
export class IframeComponent extends ComponentSingleUI {
  typeId = "18";
  name = "嵌入式页面";
  constructor() {
    super();
    this.selfProp = new IframeSelfProp();
    this.selfProp.setParam([
      {
        type: "input",
        key: "src",
      },
    ])
  }
}
