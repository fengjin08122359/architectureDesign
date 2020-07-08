
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
    constructor () {
        this.left = ''
        this.right = ''
        this.top = ''
        this.bottom = ''
        this.position = 'static'
        this.display = 'block'
        this.zIndex = '0'
        this.width = ''
        this.height = ''
        this.overflow = 'auto'
    }
    setKeyValue <K extends keyof (PositionPayload) >(key: K, value: any) {
        this[key] = value
    }
}
