<template>
  <div class="styleManage">
    <el-row>
      <el-col>
        <span @click="addCol()">添加样式</span>
        <span @click="getFromStyle()">重置</span>
      </el-col>
      <el-col v-for="(item,index) in styleSetting" :key="index">
        <el-col :span="10">
          <el-select v-model="item.key" filterable>
            <el-option
              v-for="(t, index) in styleOptions"
              :value="t"
              :label="t"
              :key="index"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="10">
          <el-input v-model="item.value"></el-input>
        </el-col>
        <el-col :span="4">
          <span @click="delCol(index)" class="el-icon-remove-outline"></span>
        </el-col>
      </el-col>
    </el-row>
    <div>
      <el-button @click="dragConfig">拖拽需要配置position: absolute;top:0;left;0</el-button>
      <el-button @click="noDragConfig">无法拖拽需要配置position: absolute;top:0;left;0</el-button>
    </div>
    <el-button @click="save()">保存样式</el-button>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ModuleInstance, styleOptions } from "../../sdk";

@Component
export default class StyleManage extends Vue {
  @Prop() private instance!: ModuleInstance;
  styleOptions = styleOptions;
  styleSetting = [];
  mounted() {
    this.getFromStyle();
  }
  getFromStyle() {
    this.styleSetting = [];
    for (let [key, value] of Object.entries(this.instance.target.style)) {
      if (this.styleOptions.find((item) => item == key)) {
        this.styleSetting.push({
          key,
          value,
        });
      }
    }
  }
  addCol() {
    this.styleSetting.push({
      key: "",
      value: "",
    });
  }
  delCol(index) {
    this.styleSetting.splice(index, 1);
  }
  save() {
    this.instance.target.style.clear()
    this.styleSetting.forEach((item) => {
      this.instance.target.style.setKeyValue(item.key, item.value);
    });
  }
  dragConfig () {
    this.instance.target.style.setKeyValue('position', 'absolute');
    this.instance.target.style.setKeyValue('top', 0);
    this.instance.target.style.setKeyValue('left', 0);
    this.getFromStyle();
  }
  noDragConfig  () {
    this.instance.target.style.setKeyValue('position', 'relative');
    this.instance.target.style.setKeyValue('top', 0);
    this.instance.target.style.setKeyValue('left', 0);
    this.getFromStyle();
  }
}
</script>