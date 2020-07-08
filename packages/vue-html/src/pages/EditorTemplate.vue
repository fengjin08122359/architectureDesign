<template>
  <div class="editorTemplate">
    <ToolBar class='ToolBar'></ToolBar>
    <Editor class='Editor'></Editor>
  </div>
</template>
<script lang="ts">
import ToolBar from "../components/ToolBar.vue";
import Editor from "../components/Editor.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({components: {ToolBar,Editor }})
export default class EditorTemplate extends Vue {
 
}
</script>

<style lang="less" scoped>
@toolWidth:200px;
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
    font-size:0
  }
}
</style>