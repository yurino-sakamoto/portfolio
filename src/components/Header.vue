<template>
  <div id="headerSection">    
    <button @click="toggle" class="btn-success">おす</button>
    <Drawer @close="toggle" align="left" :closeable="true">
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
  .headerSection{
    background:#F3F3F3;
    width:100%
  }    
</style>