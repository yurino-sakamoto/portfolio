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

<style lang="scss">
@import "~bootstrap/scss/bootstrap-reboot",
  "~bootstrap/scss/buttons";

</style>

<style>
/* Google fontsで導入したいfonts から@importのコードを取得 */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

#app {
  font-family: 'Noto Sans JP', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 150px;
  width: 800px;
}
</style>
