<template>
  <div>
    <Header class="divbig" />
    <Main class="divbig" />
    <About class="divsmall" />
    <Skill class="divsmall" />
    <Vision class="divsmall" />
    <Contact class="divsmall" />
    <Footer class="divbig" />
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
import {mapActions} from 'vuex'

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
  computed: {
  SkillCategories(){
  return this.$store.getters.SkillCategories
  },
  },
  mounted () {
  this.updateSkillCategories();
  },
  methods: {
  ...mapActions(['updateSkillCategories']),
  }
}

</script>



<style scoped>
/* Google fontsで導入したいfonts から@importのコードを取得 */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

* {
  text-align: center;
  font-family: 'Noto Sans JP', sans-serif;
  margin: 0 auto;
  font-size: 18px;
  font-weight: bold;
  color: gray;
}

.divsmall {
  width: 70%;
}

.divbig {
  width: 100%;
}

h1 {
  color: #20879f;
  text-shadow: 1px 1px gray;
}
</style>
