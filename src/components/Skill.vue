<template>
  <div id="skillSection">
    <h1 class="skillTitle">
      Skill Set
    </h1>
    <div class="skillExplain">
      修練の末に身につけたスキルをまとめました。フロントエンドを興味があり、
      デザインなども同時に学習していきたいと考えています。さらに高度な技術を身につけるために、
      バックエンド系の開発に携わる機会も増やし、専門性を高めたいと考えています。
      記載はありませんが、GoogleアナリティクスやSEO関連に携わった経験があります。
      また、以前インターンをしていた会社では記事のライティングとSNS周りの業務を行っていました。
      これらの知識も生かして業務を行なえればと考えています。
    </div>
    <label>
      <a
        class="githubLink"
        href="https://github.com/yurino-sakamoto/portfolio"
      >gitHub:https://github.com/yurino-sakamoto/portfolio</a>
    </label>
    <a class="skillCategories">
      <p
        class="cateFront-end"
        @click="FEchange"
      > Front-end</p>
      <p
        class="cateBack-end"
        @click="BKchange"
      >Back-end</p>
      <p
        class="cateDevelop"
        @click="Devchange"
      >DevOps</p>
    </a>
    <div class="skillList">
      <div
        class="Front-end"
        :class="{'FEactive': FEclicked}"
      >
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>SCSS</p>
        <p>Vue</p>
        <p>WordPress</p>
      </div>
      <div
        class="Back-end"
        :class="{'BKactive': BKclicked}"
      >
        <p>Java</p>
        <p>Ruby</p>
        <p>RubyOnRails</p>
        <p>MySQL</p>
      </div>
      <div
        class="DevOps"
        :class="{'Devactive': Devclicked}"
      >
        <p>Linux</p>
        <p>Node</p>
        <p>Git</p>
        <p>GitHub</p>
        <p>Firebase</p>
      </div>
    </div>
    <div class="skillGraph">
      <div v-if="FEclicked">
        <FrontChart />
      </div>
      <div v-if="BKclicked">
        <BackChart />
      </div>
      <div v-if="Devclicked">
        <DevelopChart />
      </div>
    </div>
  </div>
</template>



<script>
import FrontChart from './FrontChart.vue';
import BackChart from './BackChart.vue';
import DevelopChart from './DevelopChart.vue';

export default {
    components: {
      FrontChart,
      BackChart,
      DevelopChart,
    },
  data() {
    return{
      FEclicked:true,
      BKclicked:false,
      Devcliced:false
    }
  },
    methods:{
      FEchange(){
        this.FEclicked=true;
        this.BKclicked=false;
        this.Devclicked=false;
      },
      BKchange(){
        this.BKclicked=true;
        this.FEclicked=false;
        this.Devclicked=false;
      },
      Devchange(){
        this.BKclicked=false;
        this.FEclicked=false;
        this.Devclicked=true;
      }
    }
}
</script>


<style scope>
.skillSection {
  background: #fff;
  width: 100%;
}

.skillTitle {
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-weight: bold;
  text-shadow: 1px 1px gray;
}

.skillExplain {
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 18px;
  overflow-wrap: normal;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 20px;
}

.gitHubLabel {
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
}

/* リンクの文字の変更 */
.githubLink {
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  margin-bottom: 10px;
  font-size: 18px;
}

/* カテゴリー関連 */
.skillCategories {
  width: 70%;
  margin: 0 auto;
  display: block;
  padding-top: 10px;
  font-size: 26px;
}

/* [カテゴリー関連]ジャンル別設定 */
.cateFront-end {
  padding: 0 5px;
  display: inline-block;
  margin: 0 auto;
  color: red;
}

.cateBack-end {
  padding: 0 5px;
  display: inline-block;
  margin: 0 auto;
  color: blue;
}

.cateDevelop {
  padding: 0 5px;
  display: inline-block;
  margin: 0 auto;
  color: purple;
}

/* [スキルリスト]全体 */
.skillList {
  width: 70%;
  margin: 0 auto;
  font-size: 18px;
}

/* [スキルリスト]通常状態 */
.Front-end p {
  color: red;
  margin: 10px;
  float: left;
  border: solid 1px gray;
  padding: 0 5px;
}

.Back-end p {
  color: blue;
  margin: 10px;
  float: left;
  border: solid 1px gray;
  padding: 0 5px;
}

.DevOps p {
  color: purple;
  margin: 10px;
  float: left;
  border: solid 1px gray;
  padding: 0 5px;
}

/* [スキルリスト]ボタンを押したとき */
.FEactive p {
  background-color: rgba(216, 42, 29, 0.1);
}

.BKactive p {
  background-color: rgba(13, 29, 245, 0.1);
}

.Devactive p {
  background-color: rgba(153, 2, 223, 0.1);
}


/* グラフ関連 */
.skillGraph {
  width: 70%;
  margin: 0 auto;
  margin-bottom: 20px;
}
</style>
