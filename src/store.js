import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);


export default new Vuex.Store({
  state:{
    SkillCategories: [],
    loaded:false
  },
  getters:{
    skillNamef: (state) => {
      const skillNameArray = []
        state.SkillCategories[0].Frontend.forEach((Skill) => {
          skillNameArray.push(Skill.labels)
        })
      return skillNameArray
    },
    skillscoref: (state) => {
      const skillNameArray = []
        state.SkillCategories[0].Frontend.forEach((Skill) => {
          skillNameArray.push(Skill.data)
        })
      return skillNameArray
    },
    skillNameb: (state) => {
      const skillNameArray = []
        state.SkillCategories[1].Backend.forEach((Skill) => {
          skillNameArray.push(Skill.labels)
        })
      return skillNameArray
    },
    skillscoreb: (state) => {
      const skillNameArray = []
        state.SkillCategories[1].Backend.forEach((Skill) => {
          skillNameArray.push(Skill.data)
        })
      return skillNameArray
    },skillNamed: (state) => {
      const skillNameArray = []

        state.SkillCategories[2].DevOps.forEach((Skill) => {
          skillNameArray.push(Skill.labels)
        })
      return skillNameArray
    },
    skillscored: (state) => {
      const skillNameArray = []
        state.SkillCategories[2].DevOps.forEach((Skill) => {
          skillNameArray.push(Skill.data)
        })
      return skillNameArray
    },
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
      const res = await axios.get('https://us-central1-myfirstfirebase-1260d.cloudfunctions.net/skills');
      res.data.forEach((category) =>{
        SkillCategories.push(category);
      });
      commit('setSkillCategories', {SkillCategories});
    },
  },
});
//
//export default store
//const store = new Vuex.Store({
//  state: {
//    skillCategories: [],
//  },
//  getters:{
//      getSkills: (state) => (category) => {
//        if (state.skillCategories.length > 0) {
//          return state.skillCategories.find((skills) => skills.Categories===category);
//        }
//      return [];
//    },
//  },
//  mutations:{
//      setSkillCategories(state, payload){
//        state.skillCategories = payload.skillCategories;
//      },
//    },
//  actions:{
//    async updateskillCategories({commit}){
//      const skillCategories = [];
//      const res = await axios.get('https://us-central1-myfirstfirebase-1260d.cloudfunctions.net/skills');
//      res.data.forEach((category) =>{
//        skillCategories.push(category);
//      });
//      commit('setSkillCategories', {skillCategories});
//    },
//  },
//})
//
