<template>
  <div class="module" ref="target">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ModuleInstance } from "../sdk";

@Component
export default class Module extends Vue {
  @Prop() private instance!: ModuleInstance;
  mounted() {
    this.instance.target.setDom(this.$refs.target);
  }
}
</script>