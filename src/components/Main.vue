<template>
  <div id="mainSection">
    <h1 class="userName">
      Y.Sakamoto
    </h1>
    <h1 class="companyname">
      Seattleconsulting
    </h1>
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
  margin-bottom: 20px;
  position: fixed;
  top: 60px;
}

.userName {
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  text-shadow: 1px 1px gray;
  border-bottom: 1px solid white;
  width: 30%;
  margin: 0 auto;
  padding: 10px;
}

.companyname {
  color: #fff;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  text-shadow: 1px 1px gray;
  padding: 10px;
}

.myphoto {
  width: 15%;
  height: 15%;
  border-radius: 50%;
}
</style>
