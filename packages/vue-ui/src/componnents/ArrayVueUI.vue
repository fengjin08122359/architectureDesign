<template>
  <div class='arrayVue'>
    <div>{{target.props.label}}</div>
    
    <el-input v-model="target.value" :disabled='target.props.disabled' :type='target.props.inputType'>
      <template slot='append' ></template>
      <template slot="prepend" v-if='target.props.label'>{{target.props.label}}</template>
    </el-input>
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
export default class ArrayVueUI extends Vue {
  @Prop() private target!: VueUI;
}
</script>


