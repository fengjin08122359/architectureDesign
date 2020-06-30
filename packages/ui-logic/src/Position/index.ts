
export interface PositionPayload{
    left?: any
    right?: any
    top?: any
    bottom?: any
    position?: any
    display?: any
    zIndex?: any
    width?: any
    height?: any
    overflow?: any
}

export class Position{
    left: any
    right: any
    top: any
    bottom: any
    position: any
    display: any
    zIndex: any
    width: any
    height: any
    overflow: any
    dom: HTMLElement
    constructor (dom: HTMLElement) {
        this.dom = dom
        this.left = dom.style.left
        this.right = dom.style.right
        this.top = dom.style.top
        this.bottom = dom.style.bottom
        this.position = dom.style.position
        this.display = dom.style.display
        this.zIndex = dom.style.zIndex
        this.width = dom.style.width
        this.height = dom.style.height
        this.overflow = dom.style.overflow
    }
    setKeyValue <K extends keyof (PositionPayload | CSSStyleDeclaration) >(key: K, value: any) {
        this[key] = value
        this.dom.style[key] = value
    }
}
