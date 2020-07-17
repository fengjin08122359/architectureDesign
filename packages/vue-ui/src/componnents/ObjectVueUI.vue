<template>
  <div class='objectVue' v-show='target.props.show'>
    <div>{{target.props.label}}</div>
    <el-row>
      <el-col v-for="(item,index) in target.props.objectArray" :key="index">
        <el-col :span='10'>
          <el-input v-model="item.key" >
            <template slot='prepend'>key</template>
          </el-input>
        </el-col>
        <el-col :span='10'>
          <el-input v-model="item.value" >
            <template slot='prepend'>value</template>
          </el-input>
        </el-col>
        <el-col :span='4'>
          <span @click="target.addCol()" class='el-icon-circle-plus-outline'></span>
          <span v-if="index != 0" @click="target.delCol(index)" class='el-icon-remove-outline'></span>
        </el-col>
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
export default class ObjectVueUI extends Vue {
  @Prop() private target!: VueUI;
}
</script>


