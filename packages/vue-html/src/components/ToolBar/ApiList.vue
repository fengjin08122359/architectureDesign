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
              :value="t.key"
              :label="t.value"
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
    <el-button @click="save()">保存样式</el-button>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ModuleInstance } from "../../sdk";

@Component
export default class StyleManage extends Vue {
  @Prop() private instance!: ModuleInstance;
  styleOptions = [];
  styleSetting = [];
  created() {
    for (let [key, value] of Object.entries(this.instance.target.dom.style)) {
      this.styleOptions.push({
        key,
        value,
      });
    }
    this.getFromStyle();
  }
  getFromStyle() {
    this.styleSetting = [];
    for (let [key, value] of Object.entries(this.instance.target.style)) {
      if (this.styleOptions.find((item) => item.key == key)) {
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
    this.styleSetting.forEach((item) => {
      this.instance.target.style.setKeyValue(item.key, item.value);
    });
  }
}
</script>