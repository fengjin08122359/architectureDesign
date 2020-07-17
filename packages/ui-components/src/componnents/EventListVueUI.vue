<template>
  <div class='eventListVue'>
    <div>{{target.props.label}}</div>
    <el-row>
      <el-col>
       <el-select v-model="target.value" filterable>
          <el-option v-for="(item, index) in options" :value="item.key" :label='item.value' :key="index">

          </el-option>
        </el-select>
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
import {EventListVueUI} from '../achieve'
@Component
export default class EventListVueUIComponent extends Vue {
  @Prop() private target!: EventListVueUI;

  get options () {
    var list = this.target.apiList.getList().map(item => {
      return {
        key:item.opt.id,
        value: `api:${item.opt.name}`
      }
    }).concat(this.target.eventList.getList().map(item => {
      return {
        key:item.opt.id,
        value: `${item.opt.type}:${item.opt.name}`
      }
    })) 
    return list
  }
}
</script>


