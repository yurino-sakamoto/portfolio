<template>
  <div id="headerSection">
    <button
      class="btn-success"
      @click="toggle"
    >
      <img
        class="humberger"
        src="../assets/hum.png"
      >
    </button>

    <Drawer
      align="left"
      :closeable="true"
      @close="toggle"
    >
      <div v-if="open">
        <Menu />
      </div>
    </Drawer>
  </div>
</template>

<script>
  import Drawer from 'vue-simple-drawer'
  import  Menu from './Menu.vue'
  export default {
    name: 'App',
    components: {
      Menu,
      Drawer
  },

  data() {
    return {
      open: false
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
.headerSection {
  background: #f3f3f3;
  width: 100%;
}

.humberger {
  font-family: 'Noto Sans JP', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: auto;
}
</style>
