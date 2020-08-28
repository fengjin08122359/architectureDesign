<template>
  <div class="mergeRender">
    <InstanceSlot :instance="target"></InstanceSlot>
    <el-input type='textarea' :value="staticTemplate" ></el-input>
    <InstanceSlot :instance="target" :needRender='true'></InstanceSlot>
    <el-input type='textarea' v-model="target.view"></el-input>
    <div v-for="(error, index) in errors" :key="index">
      <el-input type='textarea' :value="error"></el-input>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import {CompMergeInstance} from "../sdk"
import { compile } from 'vue-template-compiler/build.js'

@Component
export class InstanceSlot extends Vue {
  @Prop() private instance: CompMergeInstance;
  @Prop() private needRender: boolean;

  render(createElement:any, context:any) {
    let list = createElement("div", {}, []);
    if (this.instance) {
      if (this.needRender) {
        list = this.instance.renderInstance({
          createElement,
          vueRoot: this,
          context,
        });
      } else {
        list = this.instance.renderStaticInstance({
          createElement,
          vueRoot: this,
          context,
        });
      }
    }
    return list;
  }
}


@Component({components: {InstanceSlot}})
export default class MergeRender extends Vue {
  target = new CompMergeInstance()
  staticTemplate = ''
  get errors ():string[] {
    var res = compile(this.target.instance.renderTemplate)
    return res.errors
  }
  mounted() {
    this.staticTemplate = this.target.instance.renderTemplate
    this.target.view = this.target.instance.renderTemplate
  }
  @Watch('target.view')
  onWatchIV (val) {
    if (val) {
      this.target.instance.renderTemplate = val
    }
  }
}
</script>

<style lang="less" scoped>
@toolWidth: 200px;

.mergeRender {
  .Editor {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    overflow: auto;
    font-size: 0;
  }
}
</style>
