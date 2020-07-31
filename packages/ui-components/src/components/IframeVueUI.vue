<template>
  <div class='IframeVueUI'>
    <div class='IframeVueUI-block' v-if='!target.isCompiler'></div>
    <iframe  v-if='target.isCompiler' :src="src" frameborder="0"></iframe>
  </div>
</template>
<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Watch
} from "vue-property-decorator";
import {IframeVueUI} from '../achieve'
@Component
export default class IframeVueUIComponent extends Vue {
  @Prop() private target!: IframeVueUI;
  src = ''
  mounted() {
    console.log(this.target.ui) 
    console.log(this.target.ui.selfProp.opt)
    this.resetOpt()
  }
  resetOpt (val = this.target.ui.selfProp.opt) {
    this.src = val.src || ''
  }
  @Watch('target.ui.selfProp.opt') 
  watchTab (val) {
    this.resetOpt(val)
  }
}
</script>

<style lang="less" scoped>
.IframeVueUI{
  width: 100%;
  height: 100%;
  .IframeVueUI-block{
    background: #909399;
    height: 100%;
    width: 100%;
  }
  iframe{
    border:0;
    height: 100%;
    width: 100%;
  }
}
</style>
