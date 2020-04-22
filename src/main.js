import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store.js'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),store
}).$mount('#app')


////Sample関連
//import store from './store'
//new Vue({
//  el: '#app',
//  //storeをVueインスタンスのプロパティに設定することで紐づくコンポーネントからstoreを使うことが出来る
//  store,
//})
