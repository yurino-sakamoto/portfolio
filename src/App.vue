<template>
  <div id="app">
    <Header />
    <Main />
    <About />
    <Skill />
    <Vision />
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

export default {
  name: 'App',
  components: {
    Header,
    Main,
    About,
    Skill,
    Vision,
    Footer
  },
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

@media (max-width: 1020px) {
  #app {
    width: 800px;
  }
}

</style>
