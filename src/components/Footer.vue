<template>
  <div id="footerSection">
    <a
      href="#"
      @click="clickSmoothScroll()"
    >
      <img
        class="yazirusi"
        src="../assets/yazirusi.png"
      >
    </a>
    <div class="footerCopyright">
      ©︎Seattleconsulting
    </div>
  </div>
</template>

<script>

</script>

<style scope>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap');

#footerSection {
  background: linear-gradient(to bottom, #80e1f7, #06c1e6);
  width: 100%;
  padding-bottom: 40px;
  height: auto;
}

.footerCopyright {
  color: #000;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  font-size: 18px;
  text-shadow: 1px 1px #fff;
}

.yazirusi {
  height: 30px;
  width: 30px;
  position: relative;
  top: -10px;
}
</style>
