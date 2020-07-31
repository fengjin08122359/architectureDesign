<template>
  <div class='TimeGroupVue'>
    <el-select v-model="year" filterable>
      <el-option v-for="(item, index) in target.year" :value="item.key" :label='item.value' :key="index">
      </el-option>
    </el-select>
    <el-select v-model="report" filterable>
      <el-option v-for="(item, index) in target.report" :value="item.key" :label='item.value' :key="index">
      </el-option>
    </el-select>
  </div>
</template>
<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Watch
} from "vue-property-decorator";
import {TimeGroupVueUI} from '../achieve'
@Component
export default class TimeGroupVueUIComponent extends Vue {
  @Prop() private target!: TimeGroupVueUI;
  year = '2020'
  report = 1
  mounted() {
    this.resetOpt()
  }
  resetOpt (val = this.target.ui.selfProp.opt) {
    this.year = val.year || '2020'
    this.report = val.report || 1
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

