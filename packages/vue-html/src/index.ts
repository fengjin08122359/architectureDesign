import Vue from "vue";
import App from './App.vue'
import ElementUI from 'element-ui'

Vue.use(ElementUI)
export default new Vue({
    render (h) {
        return h(App)
    },
}).$mount("#app");
