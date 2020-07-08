<template>
<div >
  <CoverEl :instance="containerModules"></CoverEl>
</div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import {containerModules,editorInstance} from '../sdk'
import CoverEl from './CoverEl.vue'

@Component({components: {CoverEl}})
export default class Editor extends Vue {
  containerModules = containerModules
  mounted () {
    document.addEventListener("keydown", (event) => {
      if (event.keyCode == 46 ) {
        editorInstance.deleteActive()
      }
    }, false);
    window["containerModules"] = containerModules
  }
}
</script>