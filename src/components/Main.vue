<template>
  <div id="mainSection">
    <p class="username">
      Y.Sakamoto
    </p>
    <p class="companyname">
      Seattleconsulting
    </p>
    <img
      class="myphoto"
      src="../assets/IMG_1386 2.jpg"
    >
  </div>
</template>

<script>

</script>

<style scope>

@media (max-width: 1020px) {
  #mainSection {
    position: fixed;
    z-index: 1;
    top: 60px;
  }
}

#mainSection {
  background: linear-gradient(to bottom, #80e1f7, #06c1e6);
  padding: 20px 0;
}

.username {
  border-bottom: 1px solid white;
  font-size: 36px;
  display: inline-block;
}

.companyname {
  font-size: 30px;
}

#mainSection p {
  color: #fff;
  padding: 10px;
  text-shadow: 1px 1px gray;
  margin: 0 auto;
}

.myphoto {
  width: 15%;
  height: 15%;
  border-radius: 50%;
}
</style>
