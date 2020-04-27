<script>
import { Radar } from '../../../portfolio/node_modules/vue-chartjs';
//import { store } from '../store';

export default {
  name: 'Chart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: [],
        datasets: [
          {
            label: 'スキル詳細',
            data: [],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: "red",
            borderWidth: 2,
            pointDot:false,
          },
        ]
      },
      options: {
        scale: {
          pointLabels: {       // 軸のラベル（"国語"など）
            fontSize: 22,         // 文字の大きさ
                },
          ticks:{
            beginAtZero:true,
            max:5,
            min:0,
            stepSize: 1
          }
        },
        legend: {
          display:false
        }
      }
    }
  },
  //components:{
  //  store
  //},
  mounted () {
    this.getChartname();
    this.renderChart(this.data, this.options)
  },
  methods:{
    getChartname(){
      const names = this.$store.getters.skillName(0)
      this.data.labels = names

      const scores = this.$store.getters.skillscore(0)
      this.data.datasets[0].data = scores
    }
  }
}
</script>
