<template>
  <div class='TableVueUI'>
    <el-table
      class="list-table"
      size="mini"
      :data="target.mergetList"
      v-loading="target.loading"
      fit
      stripe
      :show-header="target.mergeShowHeader"
      style="width: 99.9%"
    >
      <template v-for="(item, index) in target.mergeCols">
        <el-table-column
          :key="index"
          :type="item.type"
          :label="item.label"
          :prop="item.prop"
          :sortable="item.sortable"
          :class-name="item.className"
          :width="item.width"
          :min-width="item.minWidth"
          :fixed="item.fixed"
          :show-overflow-tooltip="item.showOverflowTooltip"
        >
          <template slot-scope="scope">
            <TabelColSlot :tableCol="item" :propkey="target.getTableKey(scope, item)" :row="target.getTableRow(scope, item)"></TabelColSlot>
          </template>
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>
<script lang="ts">
import {
  Component,
  Vue,
  Prop,
  Watch
} from "vue-property-decorator";
import {TableVueUI, TableCol} from '../achieve'

@Component
class TabelColSlot extends Vue {
  @Prop() private tableCol: TableCol;
  @Prop() private row: Object;
  @Prop() private propkey: Object;
  render (h, data) {
    return this.tableCol.render(h, data, this.row, this.propkey);
  }
}

@Component({components: {TabelColSlot}})
export default class TableVueUIComponent extends Vue {
  @Prop() private target!: TableVueUI;
  value = ''
  prepend = ''
  mounted() {
    console.log(this.target) 
    this.resetOpt()
  }
  resetOpt (val = this.target.ui.selfProp.opt) {
    this.value = val.value || ''
    this.prepend = val.prepend || ''
  }
  @Watch('target.ui.selfProp.opt') 
  watchTab (val) {
    this.resetOpt(val)
  }
}
</script>


