<template>
<div class='mulSelectVue'>
  <div>{{target.props.label}}</div>
  选项:
  <el-row>
    <el-col v-for="(item,index) in target.props.optionsArray" :key="index">
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

  结果:
  <el-select v-model="target.value" multiple>
    <el-option v-for="(item, index) in target.props.optionsArray" :value="item.key" :label='item.value' :key="index">
    </el-option>
  </el-select>
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
export default class MulSelectVueUI extends Vue {
  @Prop() private target!: VueUI;
}
</script>


