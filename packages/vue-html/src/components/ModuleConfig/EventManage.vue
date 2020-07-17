<template>
  <div class="eventManage">
    <el-row>
      <el-col>
        <span @click="addInCol()">添加输入事件</span>
      </el-col>
       <el-col v-for="(item,index) in this.instance.target.eventBind.getInList()" :key="index">
        <div class='instance-item'>
            <InstanceSlot :instance="item" :Generate="InEventGenerate"></InstanceSlot>
        </div>
        <el-col :span="4">
          <span @click="delInCol(item.id)" class="el-icon-remove-outline"></span>
        </el-col>
      </el-col>
    </el-row>
  
    <el-row>
      <el-col>
        <span @click="addOutCol()">添加输出事件</span>
      </el-col>
       <el-col v-for="(item,index) in this.instance.target.eventBind.getOutList()" :key="index">
        <div class='instance-item'>
            <InstanceSlot :instance="item" :Generate="OutEventGenerate"></InstanceSlot>
        </div>
        <el-col :span="4">
          <span @click="delOutCol(item.id)" class="el-icon-remove-outline"></span>
        </el-col>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { 
  ModuleInstance,
  InEventGenerate,
  OutEventGenerate
} from "../../sdk";
import {InstanceSlot} from "../InstanceSlot"

@Component({ components: { InstanceSlot } })
export default class EventManage extends Vue {
  @Prop() private instance!: ModuleInstance;
  InEventGenerate = InEventGenerate
  OutEventGenerate = OutEventGenerate
  mounted() {
    
  }
  addInCol () {
    this.instance.target.eventBind.addIn()
  }
  delInCol (id) {
    this.instance.target.eventBind.removeIn(id)
  }
  
  addOutCol () {
    this.instance.target.eventBind.addOut()
  }
  delOutCol (id) {
    this.instance.target.eventBind.removeOut(id)
  }
}
</script>