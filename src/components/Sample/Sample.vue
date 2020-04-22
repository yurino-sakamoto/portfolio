<template>
  <div class="a">
    <p>a</p>
  </div>
</template>

<script>
console.log("こんにちはスクリプトさん");
console.log(2+2);
export default {
  computed: {
    //store
  },
}
//Storeの作成例
//import Vue from 'vue'
//import Vuex from 'vuex'
//
//Vue.use(Vuex)
//
//const store = new Vuex.Store({
//    state: {
//        searchText:""
//    },
//    mutations: {
//        searchTextStore(state,searchText){
//            state.searchText = searchText
//            }
//    },
//    getters:{
//        searchTextGetter: (state) => {
//            return state.searchText.slice(2,7)
//        }
//    }
//})

//function(){

//}
//skillName: (state) => (index) => {
//      const skillNameArray = []
//      if(state.skills[index]){
//        state.skills[index].skill.forEach((Skill) => {
//          skillNameArray.push(Skill.name)
//        })
//      }
//      return skillNameArray
//    }
</script>

<style scoped>
.class {
  color: red;
}
</style>
