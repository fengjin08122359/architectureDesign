<template>
  <div class='CardContainerVue'>
    <el-tabs v-model="target.ui.activeCard" >
    <el-tab-pane v-for="(tab, index) in tabs" :key="index" :label="tab.value" :name="tab.key">
      <slot></slot>
    </el-tab-pane>
  </el-tabs>
  </div>
</template>
<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Watch
} from "vue-property-decorator";
import {CardContainerVueUI} from '../achieve'
@Component
export default class CardContainerVueUIComponent extends Vue {
  @Prop() private target!: CardContainerVueUI;
  tabs = []
  activeTab = ''
  mounted() {
    console.log(this.target.ui) 
    console.log(this.target.ui.selfProp.opt)
    this.resetTabs()
  }
  resetTabs (val = this.target.ui.selfProp.opt) {
    this.tabs = (val.tab).map((item, index) => {
      return {
        key: index.toString(),
        value: item.toString()
      }
    })
    this.target.ui.activeCard = this.target.ui.activeCard || this.tabs[0].key || ''
  }
  @Watch('target.ui.selfProp.opt') 
  watchTab (val) {
    this.resetTabs(val)
  }
}
</script>


