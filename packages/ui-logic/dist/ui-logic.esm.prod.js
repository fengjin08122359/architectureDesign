class t{constructor(t){this.dom=t,this.left=t.style.left,this.right=t.style.right,this.top=t.style.top,this.bottom=t.style.bottom,this.position=t.style.position,this.display=t.style.display,this.zIndex=t.style.zIndex,this.width=t.style.width,this.height=t.style.height,this.overflow=t.style.overflow}setKeyValue(t,s){this[t]=s,this.dom.style[t]=s}}class s{constructor(t){this.style=t.style}setKeyValue(t,s){this.style[t]=s}}class e{constructor(){this.datas=[]}add(t){this.datas.push(t)}remove(t){this.datas=this.datas.filter(s=>s.name!==t)}get(t=""){return this.datas.filter(s=>""===t||s.name===t)}find(t=""){var s=this.datas.find(s=>s.name===t),e=this.datas.find(t=>""===t.name);return s?s.data:e?e.data:null}}class i{constructor(t){this.dom=t,this.dataList=new e}bind(t,s,e){this.dataList.get(t).length>0&&this.unbind(t),this.dom.addEventListener(t,s,e),this.dataList.add({name:t,data:{event:s,options:e}})}unbind(t){this.dataList.get(t).forEach(s=>{this.dom.removeEventListener(t,s.data.event,s.data.options)}),this.dataList.remove(t)}}class n{constructor(s){this.dom=s||document.createElement("div"),this.eventBind=new i(this.dom),this.position=new t(this.dom)}}class h{constructor(e){this.dom=e,this.style=new s(e),this.eventBind=new i(e),this.position=new t(e)}}class a extends h{constructor(t){super(t),this.id=(new Date).getTime().toString(),this.children=new e,this.selfProp=new d}combi(t){this.findUI(t).length>0&&this.unCombi(t),this.children.add({name:t.id,data:t}),this.dom.append(t.dom)}unCombi(t){this.findUI(t).forEach(t=>{this.children.remove(t.name)}),this.dom.parentElement&&this.dom.removeChild(t.dom)}findUI(t){return this.children.get(t.id)}}class d{constructor(){}}let o=()=>(new Date).getTime().toString();export{a as ComponentMultipleUI,h as ComponentSingleUI,n as ContainerUI,i as EventBind,t as Position,d as SelfProp,s as Style,o as gennerateUUID};
