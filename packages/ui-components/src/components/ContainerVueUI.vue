<template>
  <div class='ContainerVue'>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import {
  Component,
  Vue,
  Prop
} from "vue-property-decorator";
import {ContainerVueUI} from '../achieve'
@Component
export default class ContainerVueUIComponent extends Vue {
  @Prop() private target!: ContainerVueUI;
  mounted() {
    console.log(this.target.ui) 
  }
}
</script>


