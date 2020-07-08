<template>
    <div draggable="true"  @dragstart="dragModule">
        {{target.name}}
    </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import {ModuleTargetPayload, setCurrentModule} from '../sdk'
@Component
export default class DragCol extends Vue {
  @Prop() private target!: ModuleTargetPayload;

  dragModule(e) {
    e.dataTransfer.effectAllowed = 'all'
    e.dataTransfer.dropEffect = 'copy'
    setCurrentModule(this.target)
  }
}
</script>