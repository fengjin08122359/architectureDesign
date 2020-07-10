<template>
  <div class="toolBarList">
    <div class="toolTitle">容器组件（拖拽操作）</div>
    <el-row>
      <el-col :span="12" v-for="(item, index) in continerModules" :key="index">
        <DragCol :target="item"></DragCol>
      </el-col>
    </el-row>
    <div class="toolTitle">表单组件（拖拽操作）</div>
    <el-row>
      <el-col :span="12" v-for="(item, index) in basicModules" :key="index">
        <DragCol :target="item"></DragCol>
      </el-col>
    </el-row>
    <div class="toolTitle">复杂组件（拖拽操作）</div>
    <el-row>
      <el-col :span="12" v-for="(item, index) in mergeModules" :key="index">
        <DragCol :target="item"></DragCol>
      </el-col>
    </el-row>
    <el-switch v-model="editorInstance.isRelative"></el-switch>
    <div class="toolTitle">api列表</div>
    <div class="toolTitle">事件列表</div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {
  basicModules,
  continerModules,
  mergeModules,
  editorInstance,
} from "../sdk";
import DragCol from "./DragCol.vue";

@Component({ components: { DragCol } })
export default class ToolBar extends Vue {
  basicModules = basicModules;
  continerModules = continerModules;
  mergeModules = mergeModules;
  editorInstance = editorInstance;
}
</script>

<style lang="less" scoped>
.toolBarList {
}
</style>