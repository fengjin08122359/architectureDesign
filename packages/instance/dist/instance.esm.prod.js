class e{constructor(){this.judgeList=[]}add(e){this.judgeList.push(e)}remove(e){this.judgeList=this.judgeList.filter(t=>t.name!==e)}match(...e){var t=this.judgeList.map(t=>t.fun(e),[]),s=this.judgeList.map(e=>e);return new Promise(e=>{Promise.all(t).then(t=>{t.forEach((t,a)=>{t&&e(s[a].name)}),e("")})})}}class t{constructor(){this.datas=[]}add(e){this.datas.push(e)}remove(e){this.datas=this.datas.filter(t=>t.name!==e)}get(e=""){return this.datas.filter(t=>""===e||t.name===e)}}class s{constructor(){this.dataList=new t}collect(e){this.dataList.add({name:"errorCode",data:e})}get(){return this.dataList.get("errorCode").map(e=>e.data)}}class a{constructor(){this.handlers=[]}add(e){this.handlers.push(e)}remove(e){this.handlers=this.handlers.filter(t=>t.name!==e)}get(e,t=""){return this.handlers.filter(e=>""===t||e.name===t).map(t=>({name:t.name,res:t.fun(e)}))}}class r extends a{constructor(){super(),this.handlers=[]}addIntercept(e){this.add(e)}removeIntercept(e){this.remove(e)}getIntercept(e,t=""){return this.get(e,t).filter(e=>e.res).map(e=>e.name)}}class i{constructor(){this.dataList=new t}log(...e){this.dataList.add({name:"log",data:e})}error(...e){this.dataList.add({name:"error",data:e})}debug(...e){this.dataList.add({name:"debug",data:e})}info(...e){this.dataList.add({name:"info",data:e})}warn(...e){this.dataList.add({name:"warn",data:e})}get(e=""){return this.dataList.get(e).map(e=>e.data)}}class n{constructor(){this.EventList=new Array}static getInstance(){return this.instance=this.instance||new n,this.instance}addEventListener(e,t){this.EventList.push({name:e,listener:t})}removeEventListener(e){this.EventList=this.EventList.filter(t=>t.name!==e)}dispatchEvent(e,t){this.EventList.filter(t=>t.name===e).map(e=>e.listener).forEach(e=>e(t))}}class h{constructor(){this.observers=[]}registerObserver(e){this.observers.push(e)}removeObserver(e){let t=this.observers.indexOf(e);-1!==t&&this.observers.splice(t,1)}notifyObservers(e,t=this.observers){for(let s of t)s.update(e)}}class d{constructor(){this.storage={}}get(e){return this.storage[e]}set(e,t){this.storage[e]=t}remove(e){this.storage[e]=void 0}clear(){this.storage={}}}class l{constructor(e){this.key=e.key||"",this.props=e.props||{label:"",required:"",data:[],disabled:!1,show:!0,placeholder:""},this.valid=e.valid||[],this.type=e.type||"",this.value=void 0===e.value?"":e.value,this.children=e.children||[],this.rawData=e,this.rawComponents=e.rawComponents||[],this.canRender=!1}dataFind(e){var t=null;return(this.props.data||[]).forEach(s=>{void 0!==s[e]&&(t=s[e])}),t}save(e){var t=this.value;this.value=e,t!=this.value&&this.onChange({val:this.value,oldVal:t})}getKey(){return this.key}getValue(){return this.value}hasChange(){return!(""==this.getValue())}onChange({val:e,oldVal:t}){return{val:e,oldVal:t}}getValid(){var e={success:!0,message:"",type:"success"};return new Promise(t=>{this.key?(this.props.required&&!this.hasChange()&&(e={success:!1,message:this.props.label||"",type:"requiredEmpty"}),t(e)):t(e)})}setDisabled(e=!1){return this.props.disabled=e,this.props.disabled}getKeyValue(){return{key:this.getKey(),value:this.getValue(),children:this.children.map(e=>e.getKeyValue())}}setKeyValue({key:e,value:t,children:s}){""!=this.getKey()&&this.getKey()==e&&(this.save(t),s.forEach(e=>{var t=this.children.find(t=>e.key==t.getKey());t&&t.setKeyValue(e)}))}getAllItems(){return this.children.map(e=>e.getAllItems()).concat(this)}getCanRender(){return this.canRender||0==this.rawComponents.length}render(...e){}}class o{constructor(e,t){this.options=t||{needValidHidden:!1},this.needValidHidden=this.options.needValidHidden,this.rawList=e,this.list=[],this.templateList=[],this.reset()}reset(){this.list=this.rawList.map(e=>{var t=this.convert(e);return t.children&&(t.children=new o(t.children,this.options).list),t},[])}addTemplate({key:e,value:t}){var s=this.templateList.find(t=>t.key==e);s?s.value=t:this.templateList.push({key:e,value:t})}getTemplate(){return this.templateList}convert(e){var t=this.templateList.find(t=>t.key==e.type);return t&&t.value?new t.value(e):new l(e)}getValid(){var e=this.getAllItems().filter(e=>this.needValidHidden||0!=e.props.show).map(e=>e.getValid(),[]);return new Promise(t=>{Promise.all(e).then(e=>{var s=e.filter(e=>!e.success);t({success:0==s.length,message:s.length>0?s[0].message:"",type:s.length>0?s[0].type:"success"})})})}save(e){e.forEach(e=>{var t=this.list.find(t=>e.key==t.getKey());t&&t.setKeyValue(e)})}getValue(){return this.list.map(e=>e.getKeyValue())}getAllItems(){return this.list.reduce((e,t)=>e=e.concat(t),[])}loadComponents(){return new Promise(e=>{e()})}getNeedRender(){return Array.from(new Set(this.getAllItems().reduce((e,t)=>e=e.concat(t.getCanRender()?[]:t.rawComponents),[])))}load(){return this.loadComponents().then(()=>{this.getAllItems().forEach(e=>{e.canRender=!0})})}render(){return this.getAllItems().map(e=>e.render())}}export{e as Auth,t as DataList,s as ErrorCode,n as EventDispatcher,a as HanderList,r as Intercept,i as Log,h as ObserverSubject,l as SingleUI,d as Storage,o as UIList};
