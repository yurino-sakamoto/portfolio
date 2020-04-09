<template>
  <div id= "skillSection">
    <div class="skillTitle">Skill Set</div>
    <div class="skillExplain"></div>
    <label for="">gitHubLabel</label>
    <a class="githubLink" url="https://github.com/yurino-sakamoto/portfolio">gitHub:https://github.com/yurino-sakamoto/portfolio</a>
    <a class="skillCategories"></a>
    <div class="skillList"></div>
    <div class="skillGraph">
      <chart />
    </div>
  </div>
</template>

<script>
import { Rader } from '../../../portfolio/node_modules/vue-chartjs';

export default {
  extends: Rader,
  name: 'chart',
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
  .skillSection{
    background:#FFFFFF;
    width:100%
  }

  .skillTitle{
    color:#20879F;
    font-family: Noto Sans;
    font-size:18px;
    font-weight: bold;
    text-shadow:1px 1px #FFFFFF;
  }

  .skillExplain{
    color: #707070;
    font-size: Nano Sans;
    font-size: 12px;
    overflow-wrap: normal;
    line-height: 0.25em;
  }

  .gitHubLabel{
    color: #20879F;
    font-size: Nano Sans;
    font-size: 12px;
  }

  .gitHubLink{
    color:#20879F;
    font-size: Nano Sans;
    font-size: 12px;
  }
    

</style>