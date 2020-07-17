<template>
  <div class="propManage">
    <el-row>
    <el-col>
      <InstanceSlot :instance="instance"></InstanceSlot>
    </el-col>
    </el-row>
    <el-button @click="save()">保存属性</el-button>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ModuleInstance } from "../../sdk";


var InstanceSlot = {
  props: {
    instance: {
      type: Object,
    },
  },
  computed: {
    value() {
      return this.instance.target.selfProp.params.map((item) =>
        item.getKeyValue()
      );
    },
  },
  render(createElement, context) {
    let list = [];
    if (this.instance) {
      list = this.instance.target.selfProp.renderParam({
        createElement,
        vueRoot: this,
        context,
      });
    }
    return createElement("div", {}, list);
  },
  watch: {
    value(val) {
      console.log(val);
    },
  },
};



@Component({ components: { InstanceSlot } })
export default class StyleManage extends Vue {
  @Prop() private instance!: ModuleInstance;
  mounted() {
  }
  save() {
    this.instance.target.selfProp.save()
  }
}
</script>