<template>
  <div id="skillSection">
    <div class="skillTitle">
      Skill Set
    </div>
    <div class="skillExplain" />
    <label for="">gitHubLabel</label>
    <a
      class="githubLink"
      url="https://github.com/yurino-sakamoto/portfolio"
    >gitHub:https://github.com/yurino-sakamoto/portfolio</a>
    <a class="skillCategories" />
    <div class="skillList" />
    <div class="skillGraph">
      <chart />
    </div>
  </div>
</template>

<script>
import { Rader } from '../../../portfolio/node_modules/vue-chartjs';

export default {
  name: 'Chart',
  extends: Rader,
  data () {
    return {
      data: {
      labels: ['Develop1', 'Develop2', 'Develop3', 'Develop4', 'DEVELOP5', 'Develop6'],
      datasets: []
      },
      options: {}
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
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
    line-height: 0.25em;
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

</style>
