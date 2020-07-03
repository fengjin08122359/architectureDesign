<template>
  <div class="editorTemplate">
    <ToolBar class='ToolBar'></ToolBar>
    <Editor class='Editor'></Editor>
    <ModuleConfig class='ModuleConfig'></ModuleConfig>
  </div>
</template>
<script lang="ts">
import ToolBar from "../components/ToolBar.vue";
import Editor from "../components/Editor.vue";
import ModuleConfig from "../components/ModuleConfig.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({components: {ToolBar,Editor, ModuleConfig }})
export default class EditorTemplate extends Vue {
 
}
</script>

<style lang="less" scoped>
@toolWidth:100px;
.editorTemplate {
  position: fixed;
  left:0;
  right:0;
  bottom:0;
  top:0;
  overflow: hidden;
  .ToolBar{
    position: absolute;
    left:0;
    width:@toolWidth;
    bottom:0;
    top:0;
    overflow: auto;
  }
  .Editor{
    position: absolute;
    left:@toolWidth;
    right:0;
    bottom:0;
    top:0;
    overflow: auto;
  }
  .ModuleConfig{
    position: absolute;
    right: 0;
    width: 60vw;
    bottom:0;
    top:0;
    display: none;
  }
}
</style>