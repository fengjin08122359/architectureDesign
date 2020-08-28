<script lang="ts">
import {
  Component,
} from "vue-property-decorator";
import NormalVue from './NormalVue';

@Component
export default class DoubleTitleComponent extends NormalVue {
  title1 = ''
  title2 = ''
  template = ""
  resetProps(props = this.target.props) {
    this.title1 = props.title1
    this.title2 = props.title2
  }
}
</script>

<style lang="less" scoped>
  .DoubleTitle{
    background: blue;
    color: #fff;
  }
</style>
