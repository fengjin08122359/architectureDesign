<template>
  <div class='RadioVueUI'>
    <el-radio-group  v-model="value" >
      <el-radio v-for="(item, index) in optionsArray"  :label='item.key' :key="index">
      {{item.value}}
      </el-radio>
    </el-radio-group>
  </div>
</template>
<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Watch
} from "vue-property-decorator";
import {RadioVueUI} from '../achieve'
@Component
export default class RadioVueUIComponent extends Vue {
  @Prop() private target!: RadioVueUI;
  value = ''
  optionsArray = []
  mounted() {
    console.log(this.target.ui.selfProp)
    this.resetSelfProp()
  }
  resetSelfProp (val = this.target.ui.selfProp) {
    this.value = val.opt.value || ''
    this.optionsArray = val.params.find(item =>item.key == 'value').props.optionsArray
  }
  @Watch('target.ui.selfProp', { deep: true }) 
  watchTab (val) {
    this.resetSelfProp(val)
  }
}
</script>

<style lang="less" scoped>
.NumberVue{
  font-size: 14px;
  line-height: 40px;
}
</style>

