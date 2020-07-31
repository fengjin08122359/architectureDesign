<template>
  <div class="propManage">
    <el-row>
    <el-col>
      <InstanceSlot :instance="instance.target.selfProp" :generator="generator"></InstanceSlot>
    </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { ModuleInstance, PropGeneratePiece } from "../../sdk";
import {InstanceSlot} from "../InstanceSlot"


@Component({ components: { InstanceSlot } })
export default class StyleManage extends Vue {
  @Prop() private instance!: ModuleInstance;
  generator = new PropGeneratePiece()
  created() {
    this.generator.generate(this.instance.target.selfProp.params)
  }
  @Watch('instance.id')
  updateParam () {
     this.generator.generate(this.instance.target.selfProp.params)
  }
}
</script>