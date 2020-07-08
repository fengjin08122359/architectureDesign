<template>
  <el-input></el-input>
</template>
<script lang="ts">
import {
  Component,
  Vue,
  Prop
} from "vue-property-decorator";
import {VueUI} from '../index'
@Component
export default class InputVueUI extends Vue {
  @Prop() private target!: VueUI;
}
</script>


