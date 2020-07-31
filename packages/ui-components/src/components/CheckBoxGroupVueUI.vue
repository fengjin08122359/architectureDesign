<template>
  <div class='CheckBoxGroupVueUI'>
    <el-checkbox-group v-model="value">
      <el-checkbox v-for="(item, index) in optionsArray" :key='index' :label="item.key">
      {{item.value}}
      </el-checkbox>
    </el-checkbox-group>
  </div>
</template>
<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Watch
} from "vue-property-decorator";
import {CheckBoxGroupVueUI} from '../achieve'
@Component
export default class CheckBoxGroupVueUIComponent extends Vue {
  @Prop() private target!: CheckBoxGroupVueUI;
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
