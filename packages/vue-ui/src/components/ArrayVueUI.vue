<template>
  <div class='arrayVue' v-show='target.props.show'>
    <div>{{target.props.label}}</div>
    <el-row>
      <el-col v-for="(item,index) in target.value" :key="index">
        <el-input v-model="item.value" >
          <template slot="append" >
            <span @click="target.addCol()" class='el-icon-circle-plus-outline'></span>
            <span v-if="index != 0" @click="target.delCol(index)" class='el-icon-remove-outline'></span>
          </template>
        </el-input>
      </el-col>
    </el-row>
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


