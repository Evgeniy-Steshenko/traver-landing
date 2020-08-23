import Vue from 'vue'
import App from './App.vue'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VModal from 'vue-js-modal'
Vue.use(VModal)
Vue.use(ElementUi)
Vue.config.productionTip = false




new Vue({
  render: h => h(App),
}).$mount('#app')
