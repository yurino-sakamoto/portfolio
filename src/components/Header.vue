<template>
  <div id="headerSection">
    <img
      class="humberger"
      src="../assets/hum.png"
      @click="toggle"
    >
    <Drawer
      id="drawer"
      align="left"
      :closeable="true"
      @close="toggle"
    >
      <div v-if="open">
        <a
          href="#Home"
          class="menu"
          @click="toggle"
        >Home</a>
        <a
          href="#aboutSection"
          class="menu"
          @click="toggle"
        >About Me</a>
        <a
          href="#hrskill"
          class="menu"
          @click="toggle"
        >Skill Sets</a>
        <a
          href="#hrvision"
          class="menu"
          @click="toggle"
        >Vision</a>
        <a
          href="#hrcontact"
          class="menu"
          @click="toggle"
        >Contact</a>
      </div>
    </Drawer>
  </div>
</template>

<script>
import Drawer from 'vue-simple-drawer'

export default {
  name: 'App',
  components: {
    Drawer
  },
  data() {
    return {
      open: false,
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  }
}
</script>

<style scope>
@media (max-width: 1020px) {
  #headerSection {
    background: #f3f3f3;
    width: 100%;
    height: auto;
    position: fixed;
    z-index: 5;
  }
}

#headerSection {
  background: #f3f3f3;
  width: 100%;
  height: auto;
}

.humberger {
  font-family: 'Noto Sans JP', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 60px;
  display: block;
  text-align: left;
}

.menu {
  display: block;
  font-size: 30px;
  color: black;
  margin-bottom: 10px;
  border-bottom: 1px solid gray;
}

#drawer {
  position: fixed;
  z-index: 10;
}
</style>

<style lang="scss">
@import "~bootstrap/scss/bootstrap-reboot",
  "~bootstrap/scss/buttons";
$--simple-drawer-bg-color:white;

@import "~vue-simple-drawer/src/index"
</style>
