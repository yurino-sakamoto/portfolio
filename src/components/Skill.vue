<template>
  <div id="skillSection">
    <div class="skillTitle">
      Skill Set
    </div>
    <div class="skillExplain">
      修練の末に身につけたスキルをまとめました。フロントエンドを興味があり、
      デザインなども同時に学習していきたいと考えています。さらに高度な技術を身につけるために、
      バックエンド系の開発に携わる機会も増やし、専門性を高めたいと考えています。
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
        :class="{'active': FEclicked}"
      >
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>SCSS</p>
        <p>Vue</p>
      </div>
      <div
        class="Back-end"
        :class="{'active': BKclicked}"
      >
        <p>Java</p>
        <p>Ruby</p>
        <p>RubyOnRails</p>
        <p>MySQL</p>
      </div>
      <div
        class="DevOps"
        :class="{'active': Devclicked}"
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
  font-size: 18px;
  font-weight: bold;
  text-shadow: 1px 1px #fff;
}

.skillExplain {
  color: #707070;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12px;
  overflow-wrap: normal;
  text-align: center;
}

.gitHubLabel {
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12px;
}

.gitHubLink {
  color: #20879f;
  font-family: 'Noto Sans JP', sans-serif;
  font-size: 12px;
}

.cateFront-end {
  padding: 0 5px;
  display: inline-block;
  margin: 0 auto;
  color: red;
}

.active p {
  background-color: rgba(84, 190, 238, 0.5);
}

.cateFront-end:active {
  background-color: red;
}

.cateBack-end {
  padding: 0 5px;
  display: inline-block;
  margin: 0 auto;
  color: blue;
}

.cateBack-end:active {
  background-color: blue;
}

.cateDevelop {
  padding: 0 5px;
  display: inline-block;
  margin: 0 auto;
  color: purple;
}

.cateDevelop:active {
  background-color: purple;
}

.skillGraph {
  width: 100%;
}

.BKsee {
  display: none;
}

.DevSee {
  display: none;
}

.Front-end p {
  color: red;
  margin: 10px;
  float: left;
  border: solid 1px #000;
  padding: 0 5px;
}

.Back-end p {
  color: green;
  margin: 10px;
  float: left;
  border: solid 1px #000;
  padding: 0 5px;
}

.DevOps p {
  color: purple;
  margin: 10px;
  float: left;
  border: solid 1px #000;
  padding: 0 5px;
}

</style>
