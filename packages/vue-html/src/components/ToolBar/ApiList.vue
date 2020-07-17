<template>
  <div class="styleManage">
    <el-row>
      <el-col>
        <span @click="addCol()">添加接口</span>
      </el-col>
      <el-col v-for="(item,index) in apiList.getList()" :key="index">
        <div class='instance-item'>
            <InstanceSlot :instance="item" :Generate='ApiGenerate'></InstanceSlot>
        </div>
        <el-col :span="4">
          <span @click="delCol(item.id)" class="el-icon-remove-outline"></span>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { apiList,
  addApi,
  removeApi,
  ApiGenerate
  } from "../../sdk";
import {InstanceSlot} from "../InstanceSlot"

@Component({ components: { InstanceSlot } })
export default class ApiList extends Vue {
  apiList = apiList;
  ApiGenerate = ApiGenerate
  mounted() {
  }
  addCol () {
    addApi()
  }
  delCol (id) {
    removeApi(id)
  }
  save () {
  }
}
</script>

<style lang="less" scoped>
.instance-item{
  border: 1px solid #999;
  padding: 10px;
}
</style>