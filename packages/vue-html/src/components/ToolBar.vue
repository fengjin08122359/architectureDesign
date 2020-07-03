<template>
    <div class='toolBarList'>
      <div class='toolTitle'>容器组件（拖拽操作）</div>
      <el-row>
        <el-col :span="12" v-for="(item, index) in continerModules" :key="index">
          {{item.name}}
        </el-col>
      </el-row>
      <div class='toolTitle'>表单组件（拖拽操作）</div>
      <el-row>
        <el-col :span="12" v-for="(item, index) in basicModules" :key="index">
          {{item.name}}
        </el-col>
      </el-row>
      <div class='toolTitle'>复杂组件（拖拽操作）</div>
      <el-row>
        <el-col :span="12" v-for="(item, index) in mergeModules" :key="index">
          {{item.name}}
        </el-col>
      </el-row>
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {basicModules, continerModules, mergeModules} from '@mikefeng110808/ui-design'
@Component
export default class ToolBar extends Vue {
  basicModules = basicModules
  continerModules = continerModules
  mergeModules = mergeModules
  
}

console.log(basicModules)
</script>

<style lang="less" scoped>
  .toolBarList{

  }
</style>