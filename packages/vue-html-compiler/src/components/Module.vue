<template>
  <div class="module" ref="target">
    <InstanceSlot class='instanceSlot' :instance="instance" :moduleGenrate='moduleGenrate'>
      <slot></slot>
    </InstanceSlot>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ModuleInstance,ModuleGenrate } from "../sdk";

var InstanceSlot = {
  
  props: {
    instance: {
      type: Object,
    },
    moduleGenrate: {
      type: Object,
    }, 
  },
  render(createElement, context) {
    let list = [];
    if (this.instance) {
      list = this.moduleGenrate.render({
        createElement,
        vueRoot: this,
        context,
      })
    }
    return list[0];
  },
};

@Component({ components: { InstanceSlot } })
export default class Module extends Vue {
  moduleGenrate = new ModuleGenrate()
  @Prop() private instance!: ModuleInstance;
  mounted() {
    this.moduleGenrate.isCompiler = true
    this.instance.target.setDom(this.$refs.target);
    this.moduleGenrate.setTarget(this.instance.target)
  }
  updated() {
    this.instance.target.setDom(this.$refs.target);
    this.moduleGenrate.setTarget(this.instance.target)
  }
}
</script>