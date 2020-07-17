<template>
  <div class="editorTemplate">
    <Editor class='Editor'></Editor>
  </div>
</template>
<script lang="ts">
import Editor from "../components/Editor.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({components: {Editor }})
export default class EditorTemplate extends Vue {
 
}
</script>

<style lang="less" scoped>
@toolWidth:200px;
.editorTemplate {
  .Editor{
    position: absolute;
    left:0;
    right:0;
    bottom:0;
    top:0;
    overflow: auto;
    font-size:0
  }
}
</style>