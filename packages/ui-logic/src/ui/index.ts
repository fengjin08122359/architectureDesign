import { SingleUI, SingleUIPayload } from "@mikefeng110808/logic"
import { DataList, Debounce, ObserverSubject} from "@mikefeng110808/basic"

var generateList = new DataList()

class ObserverSingleUI extends SingleUI {
  constructor(params: SingleUIPayload) {
    super(params)
  }
  changeVal(data: {val:any, oldVal:any}): any {
    return data;
  }
} 

generateList.add({
  name: '',
  data: SingleUI,
})

let genrateUI  = (data: SingleUIPayload): ObserverSingleUI => {
  var target = generateList.find(data.type)
  var ui = target ? target.data : SingleUI
  return new ui(data);
}

export class ObserverUIList {
  UIChangeValObserver: ObserverSubject;
  UIList: ObserverSingleUI[];
  result: any[];
  debounce: Debounce;
  constructor (list: SingleUIPayload[]){
    let that = this
    this.debounce = new Debounce()
    this.UIChangeValObserver = new ObserverSubject();
    this.UIChangeValObserver.registerObserver({
      update() {
        that.debounce.do(() => {
          that.getValue()
        }, 300)
      }
    })
    this.UIList = this.generateUIList(list)
    this.result = []
  }
  getValue () {
    this.result = this.UIList.map(item => item.getValue())
  }
  generateUIList (list: SingleUIPayload[]):ObserverSingleUI[] {
    return list.map(item => {
      var target = genrateUI(item)
      target.changeVal = (data: {val:any, oldVal:any}) => {
        this.UIChangeValObserver.notifyObservers(data);
      }
      return target
    })
  }
}