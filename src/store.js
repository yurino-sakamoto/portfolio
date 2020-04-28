import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
Vue.use(Vuex);


export default new Vuex.Store({
  state:{
    SkillCategories: [],
    loaded:false,
    categories: { 'front-end' : 0, 'back-end' : 1, 'devops' : 2 }
  },
  getters:{
    skillName: (state) => (index) => {
      const skillNameArray = []
        state.SkillCategories[index].skillCategory.forEach((Skill) => {
          skillNameArray.push(Skill.labels)
        })
      return skillNameArray
    },
    skillscore: (state) => (index) => {
      const skillNameArray = []
        state.SkillCategories[index].skillCategory.forEach((Skill) => {
          skillNameArray.push(Skill.data)
        })
      return skillNameArray
    }
  },
  mutations:{
    setSkillCategories(state, payload){
      state.SkillCategories = payload.SkillCategories;
      state.loaded=true
    },
  },
  actions:{
    async updateSkillCategories({commit}){
      const SkillCategories = [];
      const functionsUrl = 'https://us-central1-'+ process.env.VUE_APP_FUNCTIONS_API +'.cloudfunctions.net/skills';
      const res = await axios.get(functionsUrl);
      res.data.forEach((category) =>{
        SkillCategories.push(category);
      });
      commit('setSkillCategories', {SkillCategories});
    },
  },
});
