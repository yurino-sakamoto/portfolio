<template>
  <div
    id="skillSection"
    class="Section"
  >
    <h1>
      Skill Set
    </h1>
    <div class="Explain">
      フロントエンドを興味があり、デザインなども同時に身につけていきたいと考えています。
      高度な技術を身につけるために、まずバックエンド系の開発に携わる機会も増やし、専門性を高めたいです。
      記載はありませんが、Googleアナリティクス、ライティング、SEO、SNS関連の知識が少しあります。
      これらの知識も生かし、広い視野を持って業務をおこないたいと考えています。
    </div>
    <label>
      <a>gitHub：</a>
      <a
        href="https://github.com/yurino-sakamoto/portfolio"
      >https://github.com/yurino-sakamoto/portfolio</a>
    </label>
    <div>
      <p
        class="clicktitle"
      >
        クリックで各スキルを確認
      </P>
    </div>
    <div>
      <button
        class="FrontEnd"
        @click="setCurrentChart('Front')"
      >
        Front-end
      </button>
      <button
        class="BackEnd"
        @click="setCurrentChart('Back')"
      >
        Back-end
      </button>
      <button
        class="DevOps"
        @click="setCurrentChart('DevOps')"
      >
        DevOps
      </button>
    </div>
    <div
      id="hrvision"
      class="skillList"
    >
      <div v-if="isFrontActive && loaded">
        <div
          class="FrontEnd"
        >
          <p>HTML</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>SCSS</p>
          <p>Vue</p>
          <p>WordPress</p>
          <p>jQuery</p>
        </div>
        <FrontChart />
      </div>
      <div v-if="isBackActive">
        <div
          class="BackEnd"
        >
          <p>Java</p>
          <p>Ruby</p>
          <p>RubyOnRails</p>
          <p>MySQL</p>
        </div>
        <BackChart />
      </div>
      <div v-if="isDevActive">
        <div
          class="DevOps"
        >
          <p>Linux</p>
          <p>Node</p>
          <p>Git</p>
          <p>GitHub</p>
          <p>Firebase</p>
        </div>
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
      currentChart:'Front'
    }
  },
    computed:{
      isFrontActive(){
        return this.currentChart=='Front';
      },
      isBackActive(){
        return this.currentChart=='Back';
      },
      isDevActive(){
        return this.currentChart=='DevOps';
      },
      loaded(){
        return this.$store.state.loaded
      }
    },
    methods:{
      setCurrentChart(chart){
        this.currentChart = chart;
      }
    }
}
</script>


<style scope>
label,
label a {
  color: #20879f;
  font-size: 20px;
  padding: 20px 0;
}

.clicktitle {
  border-bottom: 1px solid gray;
  display: inline-block;
  padding: 10px 0;
  margin: 20px 0 10px 0;
}

/* カテゴリー関連 */
button {
  font-size: 30px;
  cursor: pointer;
  margin: 10px;
  border-radius: 10%;
  color: gray;
}

/* [カテゴリー関連]ジャンル別設定 */
.skillList p {
  margin: 5px;
  float: left;
  border-bottom: solid 1px gray;
  padding: 0 5px;
  font-size: 22px;
  color: gray;
  border-radius: 10%;
}

.FrontEnd,
.FrontEnd p {
  background-color: rgba(216, 42, 29, 0.1);
}

.BackEnd,
.BackEnd p {
  background-color: rgba(13, 29, 245, 0.1);
}

.DevOps,
.DevOps p {
  background-color: rgba(153, 2, 223, 0.1);
}
</style>
