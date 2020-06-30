import { DataList } from "@mikefeng110808/basic"

export class EventBind {
    dataList: DataList
    dom: HTMLElement
    constructor (dom: HTMLElement) {
        this.dom = dom
        this.dataList = new DataList()
    }
    bind <K extends keyof HTMLElementEventMap> (key: K, event: EventListener, options?: boolean | AddEventListenerOptions) {
        if (this.dataList.get(key).length > 0) {
            this.unbind(key)
        }
        this.dom.addEventListener(key, event, options)
        this.dataList.add({
            name: key, 
            data: {
                event,
                options
            }
        })
    }
    unbind <K extends keyof HTMLElementEventMap> (key: K) {
        this.dataList.get(key).forEach((item: any) => {
            this.dom.removeEventListener(key, item.data.event, item.data.options)
        })
        this.dataList.remove(key)
    }
}
