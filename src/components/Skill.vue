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
      <p> Front-end</p>
      <p>Back-end</p>
      <p>DevOps</p>
    </a>
    <div class="skillList">
      <div class="Front-end">
        <p>HTML</p>
        <p>CSS</p>
        <p>JavaScript</p>
        <p>SCSS</p>
        <p>Vue</p>
      </div>
      <div class="Back-end">
        <p>Java</p>
        <p>Ruby</p>
        <p>RubyOnRails</p>
        <p>MySQL</p>
      </div>
      <div class="DevOps">
        <p>Linux</p>
        <p>Node</p>
        <p>Git</p>
        <p>GitHub</p>
        <p>Firebase</p>
      </div>
    </div>
    <div class="skillGraph">
      <chart />
    </div>
  </div>
</template>

<script>
import { Rader } from '../../../portfolio/node_modules/vue-chartjs';

export default {
  name: 'Rader',
  extends: Rader,
  data () {
    return {
      data: {
        labels: ['Develop1', 'Develop2', 'Develop3', 'Develop4', 'Develop5', 'Develop6'],
        datasets: [
          {
            label: 'Bar Dataset',
            data: [50, 50, 50, 50, 50, 50],
            pointRotation:0,



          },
        ]
      },
      options: {
        scales: {
          angleLines: {
            display: false
        },
        ticks: {
            suggestedMin: 50,
            suggestedMax: 100
          }
        }
      }
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

  .skillCategories p {
    padding: 20px;
  }

  .skillGraph {
    width: 100%;
    height: 500px;
  }

  .Front-end p {
    color: red;
    margin: 10px;
    float: left;
  }

  .Back-end p {
    color: green;
    margin: 10px;
    float: left;
  }

  .DevOps p {
    color: purple;
    margin: 10px;
  }

</style>
