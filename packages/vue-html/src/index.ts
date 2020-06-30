import Vue from "Vue";
import {ContainerUI} from '@mikefeng110808/ui-logic'

Vue.component('UISlot', {
    data() {
        return {
            UI: new ContainerUI()
        }
    },
    render (h, data) {
        return h('div',{
            attrs: {
                id: 'UISlot'
            },
        })
    },
    mounted() {
        this.UI.setDom(this.$el as HTMLElement)
        this.UI.style.setKeyValue('background', 'red')
        this.UI.position.setKeyValue('width', '100px')
        this.UI.position.setKeyValue('height', '100px')
        console.log(this.UI.position)
    },
})
Vue.component('MainSlot', {
    data() {
        return {
            containerUI: new ContainerUI(this.$el as HTMLElement)
        }
    },
    render (h, data) {
        return h('UISlot',{})
    },
  })
export default new Vue({
    data () {
        return {
        }
    },
    render (h, context) {
        return h('MainSlot',{
        })
    },
}).$mount("#app");