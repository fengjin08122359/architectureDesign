<template>
    <div class='ModuleConfig'>
      <div class='ModuleConfigList'>
        <span @click='setting' class='el-icon-setting'></span>
        <span @click='del' class='el-icon-delete'></span>
      </div>
      
      <el-drawer
        :visible.sync="visible"
        direction="rtl"
        :append-to-body="true"
        >
        <InstanceSlot :instance='instance'></InstanceSlot>
        <span>我来啦!</span>
      </el-drawer>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {containerModules,ModuleInstance} from '../sdk'

var InstanceSlot = {
  props: {
    instance: {
      type: Object
    },
  },
  render (createElement, context) {
    let list = []
    if (this.instance) {
      list =  this.instance.target.selfProp.renderParam({
        createElement, vueRoot:this , context
      })
    }
    return createElement('div', {}, list)
  }
}

@Component({components: {InstanceSlot}})
export default class ModuleConfig extends Vue {
  @Prop() private instance!: ModuleInstance;
  visible = false

  del () {
    containerModules.unCombi(this.instance.moduleId)
  }
  setting () {
    this.visible = true
    // var renders = this.instance.target.selfProp.render()
    // console.log(renders)
  }
  
}
</script>

<style lang="less" scoped>
.ModuleConfigList{
  width:32px;
  height: 16px;
  span {
    font-size: 14px;
    display:inline-block;
    cursor:pointer;
  }
}
</style>