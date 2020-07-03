export class Style {
    style: CSSStyleDeclaration
    constructor (dom: HTMLElement) {
        this.style = dom.style
    }
    setKeyValue <K extends keyof (CSSStyleDeclaration)> (key: K, value: any) {
        this.style[key] = value
    }
}

