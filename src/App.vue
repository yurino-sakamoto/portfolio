<template>
  <div id="app">
    <Header />
    <Main />
    <About />
    <Skill />
    <!-- <div>{{ this.skills }}</div> -->
    <Vision />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import  Header from './components/Header.vue'
import  Main from './components/Main.vue'
import  About from './components/About.vue'
import  Skill from './components/Skill.vue'
import  Vision from './components/Vision.vue'
import  Footer from './components/Footer.vue'
import  Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
    About,
    Skill,
    Vision,
    Footer,
    Contact
  },
  data() {
    return {
      skills: []
    }
  },
  mounted () {
    this.getSkills();
  },
  methods: {
    getSkills() {
      // dataのスキルを初期化する
      this.skills = [];
      // this.skillsを一時変数のitemsに参照コピーする
      let items = this.skills;
      // axios.getを用いてデプロイ済のfunctionにアクセスする
      this.axios.get('https://us-central1-myfirstfirebase-1260d.cloudfunctions.net/skills')

        .then((response) => {
          response.data.forEach(function(skill) {
            // 取得したデータを１件ずつ配列に設定する
            items.push(skill);
          })
        })
        .catch((e) => {
          alert(e);
        });
    }
  }

}

</script>



<style scoped>
/* Google fontsで導入したいfonts から@importのコードを取得 */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

#app {
  text-align: center;
}

@media (max-width: 767px) {
  #app {
    width: 800px;
  }
}

/* @media (max-width: 1020px) { */

/*  #app { */

/*    width: 800px; */

/*  } */

/* } */

</style>
