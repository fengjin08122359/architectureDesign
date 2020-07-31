<template>

  <div class='inputVue' v-show='target.props.show'>
    <el-input v-model="target.value" :disabled='target.props.disabled' clearable :type='target.props.inputType'>
      <template slot='append' v-if='target.props.append'>{{target.props.append}}</template>
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
export default class InputVueUI extends Vue {
  @Prop() private target!: VueUI;
}
</script>


