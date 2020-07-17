<template>
<div class='numberVue' v-show='target.props.show'>
  <div>{{target.props.label}}</div>
  <el-input-number v-model="target.value" :disabled='target.props.disabled' ></el-input-number>
</div>
</template>
<script lang="ts">
import {
  Component,
  Vue,
  Prop
} from "vue-property-decorator";
import {VueUI} from '../index'
@Component
export default class NumberVueUI extends Vue {
  @Prop() private target!: VueUI;
}
</script>


