
import { GeneratePiece } from "../sdk";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";


@Component
export class InstanceSlot extends Vue {
  @Prop() private instance: any;
  @Prop() private Generate: any;
  @Prop() private generator: any;
  generate:GeneratePiece = new GeneratePiece() 
  created() {
    if (this.Generate) {
      this.generate = new this.Generate()
    } else if (this.generator) {
      this.generate = this.generator
    }
  }
  mounted() {
    this.reset()
  }
  get value () {
    return this.generate.uiList.list.map((item) =>
      item.getKeyValue()
    )
  }
  reset () {
    this.generate.uiList.setValue(this.generate.uiList.getValue().map(item => {
      return {
        key:item.key,
        value: this.instance.opt[item.key],
        children: []
      }
    }))
  }
  render(createElement:any, context:any) {
    let list = [];
    if (this.generate) {
      list = this.generate.render({
        createElement,
        vueRoot: this,
        context,
      });
    }
    return createElement("div", {}, list);
  }
  @Watch('value')
  watchValue (val: any) {
    this.instance.setValue(val.reduce((total:any, item:any) => {
      total[item.key] = item.value
      return total
    },{}))
  }
  @Watch('instance.opt')
  watchOpt (val:any ,oldVal:any) {
    if (JSON.stringify(val) != JSON.stringify(oldVal)) {
      this.reset()
    }
  }
}



@Component
export class InstanceSlotPure extends Vue {
  @Prop() private instance: any;
  @Prop() private Generate: any;
  generate:GeneratePiece = new GeneratePiece() 
  created() {
    if (this.Generate) {
      this.generate = new this.Generate()
    }
  }
  get value () {
    return this.generate.uiList.list.map((item) =>
      item.getKeyValue()
    )
  }
  reset () {
    this.generate.uiList.setValue(this.generate.uiList.getValue().map(item => {
      return {
        key:item.key,
        value: this.instance.opt[item.key],
        children: []
      }
    }))
  }
  render(createElement:any, context:any) {
    let list = [];
    if (this.generate) {
      list = this.generate.render({
        createElement,
        vueRoot: this,
        context,
      });
    }
    return createElement("div", {}, list);
  }
}
