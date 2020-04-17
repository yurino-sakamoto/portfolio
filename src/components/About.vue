<template>
  <div id="aboutSection">
    <h1
      id="hrskill"
      class="aboutTitle"
    >
      About Me
    </h1>
    <div class="aboutExplain">
      <p>
        熊本県育ちの新卒1年目です。宮崎県で生まれて、熊本で育ち、広島県に住んだのち、東京に住んでいます。
        大学では生物系の学部に所属していましたが、方向転換しプログラマーの道に進んでいます。
        プログラミングは未経験です。
        国際交流が好きですが、外国に行ったことは１回しかありません。
        これから、様々なところにいければと思っています。
        家では、Youtubeをみながら、何かしていることが多いです。
        のんびりと、でもしっかりと仕事をしていきたいと考えています。
        よろしくお願いいたします。
      </p>
    </div>
  </div>
</template>

<script>
</script>

<style scope>
#aboutSection {
  width: 70%;
  margin: 0 auto;
}

.aboutTitle {
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  text-shadow: 1px 1px gray;
}

.aboutExplain {
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 18px;
  overflow-wrap: normal;
  margin: 0 auto;
  border-bottom: 1px solid gray;
  padding-bottom: 30px;
}

@media (max-width: 1020px) {
  #aboutSection {
    padding-top: 400px;
  }
}

/* @media screen and (min-width: 980px) { */

/* 980px以上用（PC用）の記述 */

/* #aboutSection { */

/*  float:left; */

/*  width:50%; */

/* } */

/* } */

</style>
