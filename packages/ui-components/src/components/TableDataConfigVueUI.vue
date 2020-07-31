<template>
  <div class='TableVueUI'>
    <div></div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="column 管理" name="column">

        <el-row v-for="(item, index) in target.cols" :key="index">
          <el-col>
            type:
            <el-select v-model="item.type" filterable>
              <el-option v-for="(item, index) in typeArray" :value="item.key" :label='item.value' :key="index">
              </el-option>
            </el-select>
          </el-col>
          <el-col>
            <el-input v-model="item.label">
              <template slot='prepend'>
                label
              </template>
            </el-input>
          </el-col>
          <el-col>
            <el-input v-model="item.prop">
              <template slot='prepend'>
                prop
              </template>
            </el-input>
          </el-col>
          <el-col>
            <el-checkbox v-model="item.sortable">sortable</el-checkbox>
          </el-col>
          <el-col>
            <el-input v-model="item.className">
              <template slot='prepend'>
                className
              </template>
            </el-input>
          </el-col>
          <el-col>
            <el-input v-model="item.width">
              <template slot='prepend'>
                width
              </template>
            </el-input>
          </el-col>
          <el-col>
            <el-input v-model="item.minWidth">
              <template slot='prepend'>
                minWidth
              </template>
            </el-input>
          </el-col>
          <el-col>
            <el-checkbox v-model="item.fixed">fixed</el-checkbox>
          </el-col>
          <el-col>
            <el-checkbox v-model="item.showOverflowTooltip">showOverflowTooltip</el-checkbox>
          </el-col>
          <span @click="target.addCol()" class='el-icon-circle-plus-outline'></span>
          <span v-if="index != 0" @click="target.delCol(index)" class='el-icon-remove-outline'></span>
        </el-row>
      </el-tab-pane>
      <el-tab-pane label="tableData 管理" name="tableData">
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
import {TableDataConfigVueUI} from '../achieve'


@Component
export default class TableDataConfigVueUIComponent extends Vue {
  @Prop() private target!: TableDataConfigVueUI;
  activeName = 'column'
  typeArray= [{
    key: '',
    value: '默认'
  },{
    key: 'selection',
    value: 'selection'
  },{
    key: 'index',
    value: 'index'
  },{
    key: 'expand',
    value: 'expand'
  },]
  mounted() {
    console.log(this.target) 
  }
}
</script>


