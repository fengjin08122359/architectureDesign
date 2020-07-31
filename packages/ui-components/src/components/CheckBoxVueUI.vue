<template>
  <div class='CheckBoxVueUI'>
    <el-checkbox v-model="value">{{label}}</el-checkbox>
  </div>
</template>
<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Watch
} from "vue-property-decorator";
import {CheckBoxVueUI} from '../achieve'
@Component
export default class CheckBoxVueUIComponent extends Vue {
  @Prop() private target!: CheckBoxVueUI;
  label = ''
  value = ''
  mounted() {
    this.resetOpt()
  }
  resetOpt (val = this.target.ui.selfProp.opt) {
    this.value = val.value || ''
    this.label = val.label || ''
  }
  @Watch('target.ui.selfProp.opt') 
  watchTab (val) {
    this.resetOpt(val)
  }
}
</script>
