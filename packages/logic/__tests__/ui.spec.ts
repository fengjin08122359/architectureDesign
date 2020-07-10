import { UIList, SingleUI, SingleUIPayload } from "../src";

class TextareaUI extends SingleUI {
  constructor(params: SingleUIPayload) {
    super(params);
    this.type = "textarea";
    this.value = this.rawData.value || "";
  }
  render() {
    if (this.getCanRender()) {
      return "textareaUI";
    } else {
      return "";
    }
  }
}

class NormalUIList extends UIList {
  constructor(params: any[]) {
    super(params);
  }
  loadComponents() {
    return new Promise((resolve) => {
      var needRender = this.getNeedRender();
      needRender.forEach((key) => {
        // loadEach
      });
      resolve();
    });
  }
}

describe("logic: ui", () => {
  test("SingleUI init", () => {
    var singleUI = new SingleUI({
      type: "input",
      props: {
        label: "inputaaa",
      },
      value: "123123",
      key: "input",
    });
    expect(singleUI.getKey()).toEqual("input");
    expect(singleUI.getCanRender()).toEqual(true);
    expect(singleUI.getKeyValue()).toStrictEqual({
      children: [],
      key: "input",
      value: "123123",
    });
    expect(singleUI.getValue()).toEqual("123123");
    singleUI.getValid().then((data) => {
      expect(data.success).toEqual(true);
    });
  });
  test("SingleUI set", () => {
    var singleUI = new SingleUI({
      type: "input",
      props: {
        label: "inputaaa",
      },
      value: "123123",
      key: "input",
    });
    singleUI.setKeyValue({
      key: "input",
      value: "22",
      children: [],
    });
    expect(singleUI.getValue()).toEqual("22");
    singleUI.setKeyValue({
      key: "input2",
      value: "23",
      children: [],
    });
    expect(singleUI.getValue()).toEqual("22");

    expect(singleUI.setDisabled(true)).toEqual(true);
  });
  test("SingleUI extend", () => {
    var textareaUI = new TextareaUI({
      type: "textarea",
      props: {
        label: "textareabbb",
      },
      value: "111",
      key: "textarea1",
    });
    expect(textareaUI.getKey()).toEqual("textarea1");
    expect(textareaUI.getCanRender()).toEqual(true);
    expect(textareaUI.getKeyValue()).toStrictEqual({
      children: [],
      key: "textarea1",
      value: "111",
    });
    expect(textareaUI.getValue()).toEqual("111");
  });
  test("UIList init", () => {
    var uiList = new UIList([
      {
        type: "input",
        props: {
          label: "inputaaa",
        },
        value: "123123",
        key: "input",
      },
      {
        type: "select",
        props: {
          label: "selectaaa",
          multiple: true,
          data: [
            {
              key: "1",
              value: "N1",
            },
            {
              key: "2",
              value: "N2",
            },
          ],
        },
        value: [],
        key: "select",
      },
      {
        type: "textarea",
        props: {
          label: "textareaaaa",
        },
        value: "223223",
        key: "textarea",
      },
    ]);
    expect(uiList.getAllItems().length).toEqual(3);
    expect(uiList.getNeedRender().length).toEqual(0);
    expect(uiList.getValue()).toStrictEqual([
      {
        key: "input",
        value: "123123",
        children: [],
      },
      {
        key: "select",
        value: [],
        children: [],
      },
      {
        key: "textarea",
        value: "223223",
        children: [],
      },
    ]);
    uiList.getValid().then((res) => {
      expect(res.success).toEqual(true);
    });
  });
  test("UIList set", () => {
    var uiList = new UIList([
      {
        type: "input",
        props: {
          label: "inputaaa",
        },
        value: "123123",
        key: "input",
      },
      {
        type: "select",
        props: {
          label: "selectaaa",
          multiple: true,
          data: [
            {
              key: "1",
              value: "N1",
            },
            {
              key: "2",
              value: "N2",
            },
          ],
        },
        value: [],
        key: "select",
      },
      {
        type: "textarea",
        props: {
          label: "textareaaaa",
        },
        value: "223223",
        key: "textarea",
        rawComponents: ["textarea-need"],
      },
    ]);
    uiList.addTemplate({
      key: "textarea",
      value: TextareaUI,
    });
    uiList.reset();
    expect(uiList.getNeedRender().length).toEqual(1);
    expect(uiList.getAllItems().length).toEqual(3);
    uiList.setValue([
      {
        key: "input",
        value: "223",
        children: [],
      },
      {
        key: "select",
        value: ["1"],
        children: [],
      },
      {
        key: "textarea",
        value: "123",
        children: [],
      },
    ]);
    expect(uiList.getValue()).toStrictEqual([
      {
        key: "input",
        value: "223",
        children: [],
      },
      {
        key: "select",
        value: ["1"],
        children: [],
      },
      {
        key: "textarea",
        value: "123",
        children: [],
      },
    ]);
    expect(uiList.render()).toStrictEqual([undefined, undefined, ""]);
    uiList.load().then(() => {
      expect(uiList.getNeedRender().length).toEqual(0);
      expect(uiList.render()).toStrictEqual([
        undefined,
        undefined,
        "textareaUI",
      ]);
    });
  });
  test("UIList extends", () => {
    var normalUIList = new NormalUIList([
      {
        type: "input",
        props: {
          label: "inputaaa",
        },
        value: "123123",
        key: "input",
      },
      {
        type: "select",
        props: {
          label: "selectaaa",
          multiple: true,
          data: [
            {
              key: "1",
              value: "N1",
            },
            {
              key: "2",
              value: "N2",
            },
          ],
        },
        value: [],
        key: "select",
      },
      {
        type: "textarea",
        props: {
          label: "textareaaaa",
        },
        value: "223223",
        key: "textarea",
      },
    ]);
    expect(normalUIList.getAllItems().length).toEqual(3);
    expect(normalUIList.getNeedRender().length).toEqual(0);
    expect(normalUIList.getValue()).toStrictEqual([
      {
        key: "input",
        value: "123123",
        children: [],
      },
      {
        key: "select",
        value: [],
        children: [],
      },
      {
        key: "textarea",
        value: "223223",
        children: [],
      },
    ]);
    normalUIList.getValid().then((res) => {
      expect(res.success).toEqual(true);
    });
  });
});
