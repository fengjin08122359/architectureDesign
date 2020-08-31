<template>
<div id="app">
  <MergeRender></MergeRender>
</div>
</template>

<script lang="ts">
import MergeRender from "./pages/MergeRender.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({components: {MergeRender }})
export default class App extends Vue {

}
</script>
