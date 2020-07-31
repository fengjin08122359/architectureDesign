<template>
  <div class="coverEl" :style="style" >
    <Module class='coverEl-target  total-cover' :instance="instance" ref="bgTarget">
      <CoverEl v-for="(item,index) in children" :key="index" :instance="item"></CoverEl>
    </Module>
  </div>
</template>
<script lang="ts">
import {
  Component,
  Prop,
  Vue,
  Watch
} from "vue-property-decorator";
import {
  ModuleInstance,
} from '../sdk'
import Module from './Module.vue'



@Component({components: {Module}})
export default class CoverEl extends Vue {
  @Prop() private instance!: ModuleInstance;
  get children () {
    return this.instance.getChildren()
  }
  get style () {
    let val = {}
    for (let [key,value] of Object.entries(this.instance.target.style)) {
      val[key] = value
    }
    return val 
  }
}
</script>



<style scoped>
.coverEl {
  position: relative;
  box-sizing: border-box;
  /* pointer-events: none; */
}

.coverEl > .total-cover {
  margin: 0;
  width: 100%;
  height: 100%;
  /* position: absolute; */
  box-sizing: border-box;
  padding: 0px;
}

.coverEl>.coverEl-target {
  z-index: -1;
  position: static;
}
</style>
