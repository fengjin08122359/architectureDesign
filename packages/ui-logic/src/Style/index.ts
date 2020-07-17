export class Style { 
    changed: number;
    [x:string]: any
    constructor () {
        this.changed = 0
    }
    setKeyValue <K extends keyof (CSSStyleDeclaration)> (key: K, value: any) {
        this[key] = value
        this.changed++
    }
    getValue() {
        return Object.assign({}, this)
    }
    setValue (val:any) {
        for (let [key, value] of Object.entries(val)) {
            try {
                this.setKeyValue(key as any, value)
            } catch (error) {}
        }
    }
}

