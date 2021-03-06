import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store.js'
import smoothScroll from 'vue-smoothscroll'
Vue.use(smoothScroll)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),store
}).$mount('#app')
