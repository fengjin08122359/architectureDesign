<template>
  <div class='ButtonVue'>
    <el-button>{{label}}</el-button>
  </div>
</template>
<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Watch
} from "vue-property-decorator";
import {ButtonVueUI} from '../achieve'
@Component
export default class ButtonVueUIComponent extends Vue {
  @Prop() private target!: ButtonVueUI;
  label = ''
  mounted() {
    console.log(this.target.ui) 
    console.log(this.target.ui.selfProp.opt)
    this.resetOpt()
  }
  resetOpt (val = this.target.ui.selfProp.opt) {
    this.label = val.label || ''
  }
  @Watch('target.ui.selfProp.opt') 
  watchTab (val) {
    this.resetOpt(val)
  }
}
</script>


