<template>
  <div class='InputVue'>
    <el-input v-model='value'>
      <template slot='prepend' v-if="prepend">
        {{prepend}}
      </template>
    </el-input>
  </div>
</template>
<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Watch
} from "vue-property-decorator";
import {InputVueUI} from '../achieve'
@Component
export default class InputVueUIComponent extends Vue {
  @Prop() private target!: InputVueUI;
  value = ''
  prepend = ''
  mounted() {
    console.log(this.target.ui) 
    console.log(this.target.ui.selfProp.opt)
    this.resetOpt()
  }
  resetOpt (val = this.target.ui.selfProp.opt) {
    this.value = val.value || ''
    this.prepend = val.prepend || ''
  }
  @Watch('target.ui.selfProp.opt') 
  watchTab (val) {
    this.resetOpt(val)
  }
}
</script>


