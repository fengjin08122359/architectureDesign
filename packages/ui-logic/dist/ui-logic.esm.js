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

class ContainerUI {
    constructor(dom) {
        this.dom = dom || document.createElement('div');
        this.eventBind = new EventBind(this.dom);
        this.position = new Position(this.dom);
    }
}

let gennerateUUID = () => {
    return new Date().getTime().toString();
};

class ComponentSingleUI {
    constructor(dom) {
        this.dom = dom;
        this.style = new Style(dom);
        this.eventBind = new EventBind(dom);
        this.position = new Position(dom);
    }
}
class ComponentMultipleUI extends ComponentSingleUI {
    constructor(dom) {
        super(dom);
        this.id = gennerateUUID();
        this.children = new DataList();
        this.selfProp = new SelfProp();
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
class SelfProp {
    constructor() {
    }
}

let gennerateUUID$1 = () => {
    return new Date().getTime().toString();
};

export { ComponentMultipleUI, ComponentSingleUI, ContainerUI, EventBind, Position, SelfProp, Style, gennerateUUID$1 as gennerateUUID };
