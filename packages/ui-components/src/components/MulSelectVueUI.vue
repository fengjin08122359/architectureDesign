<template>
  <div class='MulSelectVueUI'>
    <el-select v-model="value" multiple filterable clearable>
      <el-option v-for="(item, index) in optionsArray" :value="item.key" :label='item.value' :key="index">
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
import {MulSelectVueUI} from '../achieve'
@Component
export default class MulSelectVueUIComponent extends Vue {
  @Prop() private target!: MulSelectVueUI;
  value = []
  optionsArray = []
  mounted() {
    console.log(this.target.ui.selfProp)
    this.resetSelfProp()
  }
  resetSelfProp (val = this.target.ui.selfProp) {
    this.value = val.opt.value || []
    this.optionsArray = val.params.find(item =>item.key == 'value').props.optionsArray
  }
  @Watch('target.ui.selfProp', { deep: true }) 
  watchTab (val) {
    this.resetSelfProp(val)
  }
}
</script>
