class t{constructor(){this.judgeList=[]}add(t){this.judgeList.push(t)}remove(t){this.judgeList=this.judgeList.filter(e=>e.name!==t)}match(...t){var e=this.judgeList.map(e=>e.fun(t),[]),s=this.judgeList.map(t=>t);return new Promise(t=>{Promise.all(e).then(e=>{e.forEach((e,a)=>{e&&t(s[a].name)}),t("")})})}}class e{constructor(){this.datas=[]}add(t){this.datas.push(t)}remove(t){this.datas=this.datas.filter(e=>e.name!==t)}get(t=""){return this.datas.filter(e=>""===t||e.name===t)}}class s{constructor(){this.dataList=new e}collect(t){this.dataList.add({name:"errorCode",data:t})}get(){return this.dataList.get("errorCode").map(t=>t.data)}}class a{constructor(){this.handlers=[]}add(t){this.handlers.push(t)}remove(t){this.handlers=this.handlers.filter(e=>e.name!==t)}get(t,e=""){return this.handlers.filter(t=>""===e||t.name===e).map(e=>({name:e.name,res:e.fun(t)}))}}class r extends a{constructor(){super(),this.handlers=[]}addIntercept(t){this.add(t)}removeIntercept(t){this.remove(t)}getIntercept(t,e=""){return this.get(t,e).filter(t=>t.res).map(t=>t.name)}}class i{constructor(){this.dataList=new e}log(...t){this.dataList.add({name:"log",data:t})}error(...t){this.dataList.add({name:"error",data:t})}debug(...t){this.dataList.add({name:"debug",data:t})}info(...t){this.dataList.add({name:"info",data:t})}warn(...t){this.dataList.add({name:"warn",data:t})}get(t=""){return this.dataList.get(t).map(t=>t.data)}}class n{constructor(){this.EventList=new Array}static getInstance(){return this.instance=this.instance||new n,this.instance}addEventListener(t,e){this.EventList.push({name:t,listener:e})}removeEventListener(t){this.EventList=this.EventList.filter(e=>e.name!==t)}dispatchEvent(t,e){this.EventList.filter(e=>e.name===t).map(t=>t.listener).forEach(t=>t(e))}}class d{constructor(){this.observers=[]}registerObserver(t){this.observers.push(t)}removeObserver(t){let e=this.observers.indexOf(t);-1!==e&&this.observers.splice(e,1)}notifyObservers(t,e=this.observers){for(let s of e)s.update(t)}}class h{constructor(){this.storage={}}get(t){return this.storage[t]}set(t,e){this.storage[t]=e}remove(t){this.storage[t]=void 0}clear(){this.storage={}}}export{t as Auth,e as DataList,s as ErrorCode,n as EventDispatcher,a as HanderList,r as Intercept,i as Log,d as ObserverSubject,h as Storage};
