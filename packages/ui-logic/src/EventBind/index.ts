import { DataList } from "@mikefeng110808/basic"

export class EventBind {
    dataList: DataList
    constructor () {
        this.dataList = new DataList()
    }
    bind <K extends keyof HTMLElementEventMap> (key: K, event: EventListener, options?: boolean | AddEventListenerOptions) {
        if (this.dataList.get(key).length > 0) {
            this.unbind(key)
        }
        this.dataList.add({
            name: key, 
            data: {
                event,
                options
            }
        })
    }
    unbind <K extends keyof HTMLElementEventMap> (key: K) {
        this.dataList.remove(key)
    }
}
