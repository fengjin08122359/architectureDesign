<template>
    <el-row>
      <el-col>123123</el-col>
    </el-row>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Editor extends Vue {
  @Prop() private msg!: string;
}
</script>