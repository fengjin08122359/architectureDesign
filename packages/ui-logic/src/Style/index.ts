import { convertPx, setPx, styleOptions } from "@mikefeng110808/utils";

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
    clear () {
        for (let key of Object.keys(this)) {
            if (styleOptions.find((item) => item == key)) {
                delete this[key]
            }
        }
    }
    move (x: number, y: number) {
      var left = convertPx(this.target.style.left) + x
      var top = convertPx(this.target.style.top) + y
      this.target.style.setKeyValue('left', setPx(left))
      this.target.style.setKeyValue('top', setPx(top))
    }
}

