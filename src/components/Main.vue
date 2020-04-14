<template>
  <div id="mainSection">
    <div class="userName">
      Y.Sakamoto
    </div>
    <div class="companyname">
      Seattleconsulting
    </div>
    <img
      class="myphoto"
      src="../assets/IMG_1386 2.jpg"
    >
  </div>
</template>

<script>

</script>

<style scope>
#mainSection {
  width: 100%;
  background: linear-gradient(to bottom, #80e1f7, #06c1e6);
  padding-bottom: 20px;
  margin: 20px 0;
}

.userName {
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  font-size: 18px;
  text-shadow: 1px 1px #fff;
  border-bottom: 1px solid white;
  width: 30%;
  margin: 0 auto;
  padding: 10px;
}

.companyname {
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  font-size: 18px;
  text-shadow: 1px 1px #fff;
  padding: 10px;
}

.myphoto {
  width: 15%;
  height: 15%;
  border-radius: 50%;
}
</style>
