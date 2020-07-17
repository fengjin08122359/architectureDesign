<template>
<div >
  <CoverEl :instance="compilerInstance"></CoverEl>
</div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import {compilerInstance} from '../sdk'
import CoverEl from './CoverEl.vue'

@Component({components: {CoverEl}})
export default class Editor extends Vue {
  compilerInstance = compilerInstance
  mounted () {
  }
}
</script>