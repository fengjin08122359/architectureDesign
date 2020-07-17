<template>
  <div class='DialogContainerVue'>
    <div class='DialogContainerVue-block' v-if='!target.isCompiler'>
      <slot></slot>
    </div>
    <el-dialog :visible.sync='visible' :append-to-body="true" :title="title" v-if='target.isCompiler'>
      <slot></slot>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Watch
} from "vue-property-decorator";
import {DialogContainerVueUI} from '../achieve'
@Component
export default class DialogContainerVueUIComponent extends Vue {
  @Prop() private target!: DialogContainerVueUI;
  visible = false
  title = ''
  mounted() {
    console.log(this.target.ui) 
  }
}
</script>

<style lang="less" scoped>
.DialogContainerVue{
  .DialogContainerVue-block{
    border: 20px solid #909399;
    box-sizing: border-box;
    height: 100%;
  }
}
</style>

