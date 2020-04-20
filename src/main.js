import Vue from 'vue'
import App from './App.vue'

// npm install --save axios vue-axios を実行してデータにアクセスできるようにする
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import vuex from 'vuex'
Vue.use(vuex)

//// モジュールシステムを利用しているときはあらかじめ Vue.use(Vuex) を呼び出していることを確認しておいてください
//const store = new Vuex.Store({
//  data: {
//    // Jsonデータ格納用
//    search_list: []
//  },
//  methods: {
//    // Ajax通信でJsonを取得し、特定のプロパティに格納する
//    // 取得したら GET_AJAX_COMPLETE で通知する
//    get_ajax(url, name) {
//      return axios.get("https://us-central1-myfirstfirebase-1260d.cloudfunctions.net/users")
//      .then((res) => {
//        Vue.set(this, name, res.data);
//        this.$emit('GET_AJAX_COMPLETE');
//      });
//    },
//    // プロパティ名を指定してデータを取得
//    get_data(name) {
//      return this.$data[name];
//    }
//  }
//});
//
//store.commit('increment')
//console.log(store.state.count) // -> 1
