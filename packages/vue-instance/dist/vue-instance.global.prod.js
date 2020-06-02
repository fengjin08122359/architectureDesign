var Istance=function(e,t,s){"use strict";t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,s=s&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s;class n{constructor(){this.datas=[]}add(e){this.datas.push(e)}remove(e){this.datas=this.datas.filter(t=>t.name!==e)}get(e=""){return this.datas.filter(t=>""===e||t.name===e)}}class i{constructor(){this.dataList=new n}collect(e){this.dataList.add({name:"errorCode",data:e})}get(){return this.dataList.get("errorCode").map(e=>e.data)}}class r{constructor(){this.handlers=[]}add(e){this.handlers.push(e)}remove(e){this.handlers=this.handlers.filter(t=>t.name!==e)}get(e,t=""){return this.handlers.filter(e=>""===t||e.name===t).map(t=>({name:t.name,res:t.fun(e)}))}}class a extends r{constructor(){super(),this.handlers=[]}addIntercept(e){this.add(e)}removeIntercept(e){this.remove(e)}getIntercept(e,t=""){return this.get(e,t).filter(e=>e.res).map(e=>e.name)}}class o{constructor(){this.dataList=new n}log(...e){this.dataList.add({name:"log",data:e})}error(...e){this.dataList.add({name:"error",data:e})}debug(...e){this.dataList.add({name:"debug",data:e})}info(...e){this.dataList.add({name:"info",data:e})}warn(...e){this.dataList.add({name:"warn",data:e})}get(e=""){return this.dataList.get(e).map(e=>e.data)}}class c{constructor(){this.EventList=new Array}static getInstance(){return this.instance=this.instance||new c,this.instance}addEventListener(e,t){this.EventList.push({name:e,listener:t})}removeEventListener(e){this.EventList=this.EventList.filter(t=>t.name!==e)}dispatchEvent(e,t){this.EventList.filter(t=>t.name===e).map(e=>e.listener).forEach(e=>e(t))}}class l{constructor(e){this.key=e.key||"",this.props=e.props||{label:"",required:"",data:[],disabled:!1,show:!0,placeholder:""},this.valid=e.valid||[],this.type=e.type||"",this.value=void 0===e.value?"":e.value,this.children=e.children||[],this.rawData=e,this.rawComponents=e.rawComponents||[],this.canRender=!1}dataFind(e){var t=null;return(this.props.data||[]).forEach(s=>{void 0!==s[e]&&(t=s[e])}),t}save(e){var t=this.value;this.value=e,t!=this.value&&this.onChange({val:this.value,oldVal:t})}getKey(){return this.key}getValue(){return this.value}hasChange(){return!(""==this.getValue())}onChange({val:e,oldVal:t}){return{val:e,oldVal:t}}getValid(){var e={success:!0,message:"",type:"success"};return new Promise(t=>{this.key?(this.props.required&&!this.hasChange()&&(e={success:!1,message:this.props.label||"",type:"requiredEmpty"}),t(e)):t(e)})}setDisabled(e=!1){return this.props.disabled=e,this.props.disabled}getKeyValue(){return{key:this.getKey(),value:this.getValue(),children:this.children.map(e=>e.getKeyValue())}}setKeyValue({key:e,value:t,children:s}){""!=this.getKey()&&this.getKey()==e&&(this.save(t),s.forEach(e=>{var t=this.children.find(t=>e.key==t.getKey());t&&t.setKeyValue(e)}))}getAllItems(){return this.children.map(e=>e.getAllItems()).concat(this)}getCanRender(){return this.canRender||0==this.rawComponents.length}render(...e){}}class h{constructor(e,t){this.options=t||{needValidHidden:!1},this.needValidHidden=this.options.needValidHidden,this.rawList=e,this.list=[],this.templateList=[],this.componentHasRendered=new n,this.classTarget=new.target,this.reset()}reset(){this.list=this.rawList.map(e=>{var t=this.convert(e);return t.children&&(t.children=new this.classTarget(t.children,this.options).list),t},[])}addTemplate({key:e,value:t}){var s=this.templateList.find(t=>t.key==e);s?s.value=t:this.templateList.push({key:e,value:t})}getTemplate(){return this.templateList}convert(e){var t=this.templateList.find(t=>t.key==e.type);return t&&t.value?new t.value(e):this.convertSinlgeUI(e)}convertSinlgeUI(e){return new l(e)}getValid(){var e=this.getAllItems().filter(e=>this.needValidHidden||0!=e.props.show).map(e=>e.getValid(),[]);return new Promise(t=>{Promise.all(e).then(e=>{var s=e.filter(e=>!e.success);t({success:0==s.length,message:s.length>0?s[0].message:"",type:s.length>0?s[0].type:"success"})})})}save(e){e.forEach(e=>{var t=this.list.find(t=>e.key==t.getKey());t&&t.setKeyValue(e)})}getValue(){return this.list.map(e=>e.getKeyValue())}getAllItems(){return this.list.reduce((e,t)=>e=e.concat(t),[])}loadComponents(){return new Promise(e=>{var t=this.getNeedRender();Promise.all(t.map(e=>this.handleComponentKey(e))).then(()=>{e()})})}getNeedRender(){return Array.from(new Set(this.getAllItems().reduce((e,t)=>e=e.concat(t.getCanRender()?[]:t.rawComponents),[])))}load(){return this.loadComponents().then(()=>{var e=this.componentHasRendered.get("key").map(e=>e.data);this.getAllItems().forEach(t=>{!1===t.canRender&&(t.canRender=t.rawComponents.map(t=>e.includes(t)).reduce((e,t)=>e&&t,!0))})})}render(){return this.getAllItems().map(e=>e.render())}handleComponentKey(e){return new Promise(t=>{this.componentHasRendered.add({name:"key",data:e}),t()})}}const d=new class extends o{constructor(){super();var e=this;console.log=function(t){return(...s)=>{e.log(s),t(s)}}(console.log),console.warn=function(t){return(...s)=>{e.warn(s),t(s)}}(console.warn),console.info=function(t){return(...s)=>{e.info(s),t(s)}}(console.info),console.error=function(t){return(...s)=>{e.error(s),u.collect(s),t(s)}}(console.error),console.debug=function(t){return(...s)=>{e.debug(s),t(s)}}(console.debug)}},u=new i,m=new c,p=new a,g=new a,v=new a;class w{constructor(e){this.ws=e.ws,this.pong=0,this.checkTime=3,this.reconnectTime=20,this.connnectNumber=0,this.connectLimit=1,this.keepAliveModel=!0}init(){this.pong=0,this.connnectNumber=0,this.interval&&clearInterval(this.interval),this.check(),this.interval=setInterval(()=>{this.check()},1e3*this.checkTime)}setConnectLimit(e){this.connectLimit=e}setPong(){this.connnectNumber=0,this.pong=(new Date).getTime()}check(){(navigator&&0==navigator.onLine||this.ws.isClosed()||this.pong&&(new Date).getTime()-this.pong>1e3*this.reconnectTime)&&this.endTimeout()}endTimeout(){this.keepAliveModel&&this.end(),this.reconnect()||(this.interval&&clearInterval(this.interval),g.getIntercept("close","keepalive"))}close(){this.interval&&clearInterval(this.interval),g.getIntercept("close","keepalive")}end(){this.ws.endClient()}reconnect(){var e=!1;return this.connnectNumber<=this.connectLimit&&(e=!0,this.ws.canReconnected()&&this.connnectNumber++,g.getIntercept("reconnect","keepalive")),e}}class y extends l{constructor(e){super(e)}render(e){return this.getCanRender()?this.renderInstance(e):e.createElement()}renderInstance(e){return e.createElement("div",{...e.context,attrs:this},[this.props.label,e.vueRoot.$slots.default])}}return e.Auth=class{constructor(){this.judgeList=[]}add(e){this.judgeList.push(e)}remove(e){this.judgeList=this.judgeList.filter(t=>t.name!==e)}match(...e){var t=this.judgeList.map(t=>t.fun(e),[]),s=this.judgeList.map(e=>e);return new Promise(e=>{Promise.all(t).then(t=>{t.forEach((t,n)=>{t&&e(s[n].name)}),e("")})})}},e.DataList=n,e.Debounce=class{constructor(){this.timeout=null}do(e,t){null!==this.timeout&&clearTimeout(this.timeout),this.timeout=setTimeout(()=>{e.apply(this,e.arguments),this.timeout=null},t)}},e.ErrorCode=i,e.EventDispatcher=c,e.HanderList=r,e.HttpInstance=class{constructor(e){this.baseURL=e.baseURL||"",this.init()}init(){t.interceptors.request.use(e=>this.convertRequest(e),e=>Promise.reject(e)),t.interceptors.response.use(e=>this.convertResponse(e),e=>Promise.reject(e))}convertRequest(e){return e}convertResponse(e){return e}create(e){const s={ts:Date.now()},n=(e.method||"get").toUpperCase(),i={method:n,baseURL:this.baseURL,url:e.url,responseType:e.responseType||"",timeout:2e4};e.meta&&(i.headers=e.meta);return["PUT","POST","PATCH"].includes(n)?i.data=e.data||{}:i.params={...s,...e.data||{}},e.formData&&(i.transformRequest=[e=>{const t=new FormData;return e&&Object.entries(e).forEach(e=>{t.append(e[0],e[1])}),t}]),new Promise((s,n)=>{t(i).then(t=>{this.handleSuccess(t,s,e)}).catch(t=>{this.handleError(t,n,e)})})}handleSuccess(e,t,s){p.getIntercept({response:e,opts:s},"http-success"),t(e)}handleError(e,t,s){p.getIntercept({error:e,opts:s},"http-error"),t(e)}},e.Intercept=a,e.Log=o,e.ObserverSubject=class{constructor(){this.observers=[]}registerObserver(e){this.observers.push(e)}removeObserver(e){let t=this.observers.indexOf(e);-1!==t&&this.observers.splice(t,1)}notifyObservers(e,t=this.observers){for(let s of t)s.update(e)}},e.SingleUI=l,e.Storage=class{constructor(){this.storage={}}get(e){return this.storage[e]}set(e,t){this.storage[e]=t}remove(e){this.storage[e]=void 0}clear(){this.storage={}}},e.Throttle=class{constructor(){this.timeout=null,this.lastTriggerTime=null,this.lastExecutedTime=null,this.executeOncePerWait=!1,this.immediate=!1}do(e,t){!this.executeOncePerWait&&(this.lastTriggerTime=Date.now());const s=this.immediate&&!this.timeout;this.timeout||(this.executeOncePerWait&&(this.lastExecutedTime=Date.now()),this.timeout=setTimeout(()=>{this.later(e,t,arguments)},t)),s&&(this.executeOncePerWait&&(this.lastExecutedTime=Date.now()),e.apply(this,arguments))}later(e,t,s){const n=Date.now()-((this.executeOncePerWait?this.lastExecutedTime:this.lastTriggerTime)||0);n<t&&n>0?setTimeout(()=>{this.later(e,t,s)},t-n):(this.immediate||(this.executeOncePerWait&&(this.lastExecutedTime=Date.now()),e.apply(this,s)),this.timeout=null)}},e.UIList=h,e.VueUI=y,e.VueUIList=class extends h{constructor(e,t){super(e,t),this.componentHasRendered=new n}convertSinlgeUI(e){return new y(e)}handleComponentKey(e){return new Promise(t=>{this.componentHasRendered.add({name:"key",data:e}),t()})}getRenderList(e){return this.getAllItems().map(t=>t.render(e))}},e.WebSocketInstance=class{constructor(){this.client=null,this.keepAlive=new w({ws:this})}isClosed(){return!this.client||this.client.readyState===this.client.CLOSED}canReconnected(){var e=this.client&&this.client.readyState==this.client.CLOSED;return e&&this.start(this.url),e}endClient(){this.client&&this.client.readyState==this.client.OPEN&&this.client.close()}start(e){this.url=e,this.client=new s.w3cwebsocket(e,"echo-protocol"),this.client.onerror=function(e){console.log("Connection Error"),g.getIntercept({client:this.client,data:e},"ws-error")},this.client.onopen=function(e){console.log("WebSocket Client Connected"),g.getIntercept({client:this.client,data:e},"ws-open"),this.keepalive.init()},this.client.onclose=function(e){console.log("echo-protocol Client Closed"),g.getIntercept({client:this.client,data:e},"ws-close")},this.client.onmessage=function(e){g.getIntercept({client:this.client,data:e.data},"ws-message"),this.keepAlive.setPong()}}setConnectLimit(e){this.keepAlive.setConnectLimit(e)}send(e){this.client&&this.client.send(e)}end(){this.client.close()}},e.errorCode=u,e.httpIntercept=p,e.keyFrame=m,e.log=d,e.routerIntercept=v,e.wsIntercept=g,e}({},axios,websocket);
