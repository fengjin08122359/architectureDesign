<template>
  <div class='NumberVue'>
    <el-row>
    <el-col :span='label ? 4 : 0'>{{label}}</el-col>
    <el-col :span='label ? 20 : 24'>
      <el-input-number v-model="value" :label='label'></el-input-number>
    </el-col>
    </el-row>
    
  </div>
</template>
<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Watch
} from "vue-property-decorator";
import {NumberVueUI} from '../achieve'
@Component
export default class NumberVueUIComponent extends Vue {
  @Prop() private target!: NumberVueUI;
  value = ''
  label = ''
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

<style lang="less" scoped>
.NumberVue{
  font-size: 14px;
  line-height: 40px;
}
</style>

