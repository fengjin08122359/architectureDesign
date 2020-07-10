<template>
  <div class="eventManage"></div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ModuleInstance } from "../../sdk";

@Component
export default class EventManage extends Vue {
  @Prop() private instance!: ModuleInstance;
  mounted() {}
}
</script>