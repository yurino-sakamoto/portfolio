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
        熊本県育ちの新卒1年目です。宮崎県、熊本、広島県、東京に居住経験があります。
        大学では生物系の学部に所属し日々研究に追われていました。
        現在は方向転換し、プログラマーの道に進んでいます。
        国際交流が好きですが、海外に行ったことは１度しかありません。
        これから、様々な国にいきたいと考えています。
        休日は、基本的に家にいますが、旅行に行くときは前日に予定を決めるタイプです。
        のんびりとした雰囲気を持ちつつ、テキパキと仕事をしていきたいです。
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
