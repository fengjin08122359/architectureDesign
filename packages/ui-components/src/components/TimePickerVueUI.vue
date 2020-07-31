<template>
  <div class='TimePickerVue'>
    <el-date-picker
      v-model="value"
      :type="type"
      :placeholder="placeholder">
    </el-date-picker>
    
  </div>
</template>
<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Watch
} from "vue-property-decorator";
import {TimePickerVueUI} from '../achieve'
@Component
export default class TimePickerVueUIComponent extends Vue {
  @Prop() private target!: TimePickerVueUI;
  value = ''
  type = 'datetime'
  placeholder = ''
  mounted() {
    this.resetOpt()
  }
  resetOpt (val = this.target.ui.selfProp.opt) {
    this.value = val.value || ''
    this.type = val.type || 'datetime'
    this.placeholder = val.placeholder || ''
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

