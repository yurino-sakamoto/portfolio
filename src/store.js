import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    skillCategories: [],
  },
  getters:{
      getSkills: (state) => (category) => {
        if (state.skillcategories.length > 0) {
          return state.skillcategories.find((skill) => skill.category===category);
        }
      return [];
    },
  },
  mutations:{
    setSkillCategories(state, payload){
      state.skillCategories = payload.skillCategories;
    },
  },
  actions:{
    async updateSkillcategories({commit}){
      const skillCategories = [];
      const res = await axios.get('https://us-central1-myfirstfirebase-1260d.cloudfunctions.net/skills');
      res.date.forEach((category) =>{
        skillCategories.push(category);
      });
      commit('setSkillCategories', {skillCategories});
    },
  },
});

