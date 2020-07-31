<template>
  <div class="coverEl" :class="{active: activeClass}" :style="style" 
    @mousedown.stop.prevent="mouseDownHandler" @drop="dropHandler" @dragover="dragoverHandler">
    <ModuleConfig class='ModuleConfig' :instance="instance"></ModuleConfig>
    <div class='coverEl-bg total-cover' :style="{borderColor: editorInstance.borderColor}">
      
    </div>
    <Module class='coverEl-target  total-cover' :instance="instance" ref="bgTarget">
      <CoverEl v-for="(item,index) in children" :key="index" :instance="item"></CoverEl>
    </Module>
  </div>
</template>
<script lang="ts">
import {
  Component,
  Prop,
  Vue,
  Watch
} from "vue-property-decorator";
import {
  ModuleInstance,
  currentEl,
  clearCurrentEl,
  editorInstance,
  setEditorInstance,
  setPx,
  convertPx,
  elementsFromPoint,
  generateModule
} from '../sdk'
import Module from './Module.vue'
import ModuleConfig from "../components/ModuleConfig.vue";

function getPoint(obj) { //获取某元素以浏览器左上角为原点的坐标
  var offsetTop = obj.offsetTop; //获取该元素对应父容器的上边距
  var offsetLeft = obj.offsetLeft; //对应父容器的上边距
  //判断是否有父容器，如果存在则累加其边距
  while (obj = obj.offsetParent) {//等效 obj = obj.offsetParent;while (obj != undefined)
      offsetTop += obj.offsetTop; //叠加父容器的上边距
      offsetLeft += obj.offsetLeft; //叠加父容器的左边距
  }
  return {
    offsetTop,offsetLeft
  }
}


@Component({components: {Module, ModuleConfig}})
export default class CoverEl extends Vue {
  editorInstance = editorInstance
  initialAbsPos= {x: 0, y: 0}
  initialRelPos= {x: 0, y: 0}
  currentAbsPos=  {x: 0, y: 0}
  currentRelPos=  {x: 0, y: 0}
  zoom = 1
  @Prop() private instance!: ModuleInstance;
  get children () {
    return this.instance.getChildren()
  }
  get style () {
    let val = {}
    for (let [key,value] of Object.entries(this.instance.target.style)) {
      val[key] = value
    }
    return val 
  }
  get activeClass () {
    return this.instance && this.editorInstance.active && this.editorInstance.active.moduleId == this.instance.moduleId
  }

  dropHandler (e) {
    if (currentEl) {
      let zoom = this.zoom
      let current = this.instance.combi(generateModule(currentEl))
      clearCurrentEl()
      var mainContainer = this.$refs.bgTarget.$el
      let {width='auto', height='auto'} = current.target.selfProp.getStyle()
      width = convertPx(width)
      height = convertPx(height)
      let { offsetTop, offsetLeft} = getPoint(mainContainer)
      let top = e.pageY + mainContainer.scrollTop - mainContainer.offsetTop - this.$el.offsetTop - offsetTop + convertPx(this.instance.target.style.top)
      let left = e.pageX + mainContainer.scrollLeft - mainContainer.offsetLeft - this.$el.offsetLeft - offsetLeft + convertPx(this.instance.target.style.left)
      if (typeof height == 'number') {
        top = top - (height / 2)
      }
      if (typeof width == 'number') {
        left = left - (width / 2)
      }
      top = Math.round(top / zoom)
      left = Math.round(left / zoom)
      
      current.target.style.setKeyValue('position', 'absolute')
      current.target.style.setKeyValue('top', setPx(top))
      current.target.style.setKeyValue('left', setPx(left))
      current.target.style.setKeyValue('height', setPx(height))
      current.target.style.setKeyValue('width', setPx(width))
      if (this.editorInstance.isRelative) {
        current.resetRelativeStyle()
      }
    }
    
      
      
      // comp.saveStyle({position: 'absolute', top, left, height, width})
    e.preventDefault();
  }
  dragoverHandler (e) {
    e.preventDefault();
    e.stopPropagation();

    console.log(this.instance, this.instance.target.insertable)
    if (!this.instance.target.insertable) {
      e.dataTransfer.dropEffect = 'none'
    } else{
      e.dataTransfer.dropEffect = 'copy'
    }
  }
  clickHandler (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  getMouseAbsPoint (e) {
    return {x: e.clientX, y: e.clientY}
  }
  getMouseRelPoint (e) {
    var mainContainer = this.$refs.bgTarget.$el
    let { offsetTop, offsetLeft} = getPoint(mainContainer)
    const x = e.clientX + mainContainer.scrollLeft - mainContainer.offsetLeft - this.$el.offsetLeft - offsetTop
    const y = e.clientY + mainContainer.scrollTop - mainContainer.offsetTop - this.$el.offsetTop - offsetLeft

    return {x, y}
  }
  mouseDownHandler (e) {
    e.preventDefault();
    e.stopPropagation();
    setEditorInstance(this.instance);
    let isMrs = false
    this.initialAbsPos = this.currentAbsPos = this.getMouseAbsPoint(e)
    this.initialRelPos = this.currentRelPos = this.getMouseRelPoint(e)
    var el = elementsFromPoint(e.clientX,e.clientY)
    
    if (this.editorInstance.active && this.editorInstance.active.canDragFilter()) {
      isMrs = true
      // this.$emit('movestart')
      // if (e.ctrlKey) {
      //   var comp = components.register({
      //     style: this.active.style,
      //     raw: this.active.raw,
      //     type: this.active.type,
      //     childrenName: this.active.childrenName,
      //     children: this.active.children,
      //   })
      //   comp.saveStyle({top: this.active.stylePure.top + 20, left: this.active.stylePure.left + 20})
      //   rgHandle.componentsClass.setActive(comp);
      //   this.activeMove = comp
      // }
    }
    if (isMrs) {
      this.$nextTick(() => {
        document.documentElement.addEventListener('mousemove', this.mouseMoveHandler, true)
        document.documentElement.addEventListener('mouseup', this.mouseUpHandler, true)
      })
    }
  }
  mouseMoveHandler (e) {
    let zoom = this.zoom
    const lastAbsX = this.currentAbsPos.x
    const lastAbsY = this.currentAbsPos.y
    
    this.currentAbsPos = this.getMouseAbsPoint(e)
    this.currentRelPos = this.getMouseRelPoint(e)

    let offX = this.currentAbsPos.x - lastAbsX
    let offY = this.currentAbsPos.y - lastAbsY
    if (this.editorInstance.active) {
      if (!e.ctrlKey) {
        this.editorInstance.active.move(offX/zoom, offY/zoom)
      }
    }
  }
  mouseUpHandler (e) {
    document.documentElement.removeEventListener('mousemove', this.mouseMoveHandler, true)
    document.documentElement.removeEventListener('mouseup', this.mouseUpHandler, true)
  }
}
</script>



<style scoped>
.coverEl {
  position: relative;
  box-sizing: border-box;
  /* pointer-events: none; */
  background: #fff;
}
.coverEl:hover {
  cursor: move;
  /* pointer-events: auto; */
}

.coverEl > .total-cover {
  margin: 0;
  width: 100%;
  height: 100%;
  /* position: absolute; */
  box-sizing: border-box;
  padding: 12px;
}

.coverEl > .coverEl-bg {
  position: absolute;
  z-index: 1;
  background: transparent;
  border-color: #bdbdbd;
  border-style: dashed;
  border-width: 1px;
  padding:0;
  overflow: hidden;
}
.coverEl.active>.coverEl-bg {
  border-color: #03a9f4!important;
  border-style: solid;
  border-width: 1px;
  z-index: 9999997;
}
.coverEl>.coverEl-target {
  z-index: 2;
  position: absolute;
}
.coverEl.active>.coverEl-target {
  z-index: 9999998;
  position: absolute;
}
.selection-box {
  border: 2px solid #03a9f4;
}
.coverEl > .ModuleConfig{
  position: absolute;
  top:0;
  right:0;
  z-index: 0;
  display: none;
}
.coverEl.active>.ModuleConfig{
  z-index: 9999999;
  display: block;
}
.handle {
  box-sizing: border-box;
  display: none;
  position: absolute;
  width: 10px;
  height: 10px;
  font-size: 1px;
  border-radius: 50%;
  border: 1px solid #fff;
}
.tl {
  top: -3px;
  left: -3px;
  cursor: nwse-resize;
  background: #03a9f4;
}
.mt {
  top: 0;
  width: 100%;
  border-radius: 0;
  border-width: 2px;
  border-color: #03a9f4;
  border-style: solid none none none;
  cursor: ns-resize;
}
.tr {
  top: -3px;
  right: -3px;
  cursor: nesw-resize;
  background: #03a9f4;
}
.mr {
  top: 0;
  right: 0;
  height: 100%;
  border-radius: 0;
  border-width: 2px;
  border-color: #03a9f4;
  border-style: none solid none none;
  cursor: ew-resize;
}
.br {
  bottom: -3px;
  right: -3px;
  cursor: nwse-resize;
  background: #03a9f4;
}
.mb {
  bottom: 0;
  width: 100%;
  border-radius: 0;
  border-width: 2px;
  border-color: #03a9f4;
  border-style: none none solid none;
  cursor: ns-resize;
}
.bl {
  bottom: -3px;
  left: -3px;
  cursor: nesw-resize;
  background: #03a9f4;
}
.ml {
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 0;
  border-width: 2px;
  border-color: #03a9f4;
  border-style: none none none solid;
  cursor: ew-resize;
}
</style>
