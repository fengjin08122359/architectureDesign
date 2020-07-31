<template>

  <div class='BooleanVueUI' v-show='target.props.show'>
    <el-checkbox v-model="target.value">是否选中</el-checkbox>
  </div>
</template>
<script lang="ts">
import {
  Component,
  Vue,
  Prop
} from "vue-property-decorator";
import {VueUI} from '../index'
@Component
export default class InputVueUI extends Vue {
  @Prop() private target!: VueUI;
}
</script>


