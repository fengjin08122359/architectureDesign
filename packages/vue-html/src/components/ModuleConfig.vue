<template>
  <div class="ModuleConfig">
    <div class="ModuleConfigList">
      <span @click="setting" class="el-icon-setting"></span>
      <span v-if='instance.canDrag' @click="del" class="el-icon-delete"></span>
    </div>

    <el-drawer :visible.sync="visible" direction="rtl" :append-to-body="true">
      <div class="drawer-section">
        <el-tabs v-model="activeTab">
          <el-tab-pane label="属性管理" name="propManage">
            <PropManage :instance="instance"></PropManage>
          </el-tab-pane>
          <el-tab-pane label="样式管理" name="styleManage">
            <StyleManage :instance="instance"></StyleManage>
          </el-tab-pane>
          <el-tab-pane label="事件管理" name="eventManage">
            <EventManage :instance="instance"></EventManage>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-drawer>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { containerModules, ModuleInstance } from "../sdk";
import EventManage from "./ModuleConfig/EventManage.vue";
import StyleManage from "./ModuleConfig/StyleManage.vue";
import PropManage from "./ModuleConfig/PropManage.vue";


@Component({ components: { PropManage, EventManage, StyleManage } })
export default class ModuleConfig extends Vue {
  @Prop() private instance!: ModuleInstance;
  visible = false;
  activeTab = "propManage";
  del() {
    containerModules.unCombi(this.instance.moduleId);
  }
  setting() {
    this.visible = true;
  }
}
</script>

<style lang="less" scoped>
.ModuleConfigList {
  width: 32px;
  height: 16px;
  text-align: right;
  span {
    font-size: 14px;
    display: inline-block;
    cursor: pointer;
  }
}
</style>
<style lang="less">
.el-drawer__body {
  overflow: auto;
}
</style>