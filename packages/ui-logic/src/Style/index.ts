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
}

