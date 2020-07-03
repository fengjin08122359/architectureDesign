class Module {
    constructor() {
        this.width = 100;
        this.height = 100;
        this.children = [];
    }
    changeSize({ width = this.width, height = this.height }) {
        this.width = width;
        this.height = height;
    }
}

let gennerateUUID = () => {
    return new Date().getTime().toString();
};

export { Module, gennerateUUID };
