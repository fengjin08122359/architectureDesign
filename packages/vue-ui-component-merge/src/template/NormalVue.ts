import {
  Component,
  Vue,
  Prop,
  Watch
} from "vue-property-decorator";
import {
  MergeVueUI
} from '../render/logic'


@Component
export default class NormalVue extends Vue {
  @Prop() protected target!: MergeVueUI;
  @Prop() needRender!: boolean;
  template = "<div></div>"
  mounted() {
    if (this.target.lifeCycle) {
      this.target.lifeCycle.mounted()
    }
    this.resetProps()
    this.template = this.target.renderTemplate
  }
  resetProps(props = this.target.props) {
  }
  resetRenderTemplate (renderTemplate = this.target.renderTemplate) {
    if (this.needRender) {
      if (renderTemplate) {
        this.template = renderTemplate || ''
      } else {
        this.template = ''
      }
    }
  }
  render (h: [createElement: any]) {
    return Vue.compile(this.template).render.apply(this, h)
  }
  @Watch('target.props')
  watchTab(val:any) {
    this.resetProps(val)
  }
  @Watch('target.renderTemplate')
  watchRenderTemplate(val:any) {
    this.resetRenderTemplate(val)
  }
}
