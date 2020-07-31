<template>
  <div class='SimulateVue' v-show='target.props.show'>
    <el-input
      type="textarea"
      :rows="5"
      placeholder="模拟框"
      v-model="target.value">
    </el-input>
    <div>{{target.error}}</div>
    <div>{{target.simulateValueToString()}}</div>
  </div>
</template>
<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Watch
} from "vue-property-decorator";
import {SimulateVueUI} from '../index'
@Component
export default class SimulateVueUIComponent extends Vue {
  @Prop() private target!: SimulateVueUI;
  @Watch('target.value')
  watchSimulate (val) {
    this.target.simulate()
  }
}
</script>


