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
    <el-color-picker v-model="editorInstance.borderColor"></el-color-picker>
    <el-row>
      <el-col>
        <el-button class="toolTitle" @click="visible = true">api列表, 事件列表</el-button>
      </el-col>
    </el-row>
    <el-button-group>
    <el-button @click="restoreFromConfig()">restoreFromConfig</el-button>
    <el-button @click="restoreFromEdit()">restoreFromEdit</el-button>
    </el-button-group>

    <el-button-group>
    <el-button @click="saveFromConfig()">saveFromConfig</el-button>
    <el-button @click="saveFromEdit()">saveFromEdit</el-button>
    </el-button-group>
    
    <el-drawer :visible.sync="visible" direction="rtl" :append-to-body="true">
      <div class="drawer-section">
        <el-tabs v-model="activeTab">
          <el-tab-pane label="api列表" name="ApiList">
            <ApiList></ApiList>
          </el-tab-pane>
          <el-tab-pane label="事件列表" name="EventList">
            <EventList></EventList>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-drawer>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {
  basicModules,
  continerModules,
  mergeModules,
  editorInstance,
  saveFromConfig,
  saveFromEdit,
  restoreFromEdit,
  restoreFromConfig
} from "../sdk";
import DragCol from "./DragCol.vue";
import ApiList from "./ToolBar/ApiList.vue";
import EventList from "./ToolBar/EventList.vue";

@Component({ components: { DragCol, ApiList, EventList } })
export default class ToolBar extends Vue {
  basicModules = basicModules;
  continerModules = continerModules;
  mergeModules = mergeModules;
  editorInstance = editorInstance;
  saveFromConfig = saveFromConfig;
  saveFromEdit = saveFromEdit;
  restoreFromEdit = restoreFromEdit
  restoreFromConfig = restoreFromConfig
  visible = false
  activeTab = "ApiList"
}
</script>

<style lang="less" >
.el-drawer__body {
  overflow: auto;
}
</style>