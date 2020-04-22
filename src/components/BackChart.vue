<script>
import { Radar } from '../../../portfolio/node_modules/vue-chartjs';

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
            backgroundColor: 'rgba(13, 29, 245, 0.1)',
            borderColor: 'blue',
            borderWidth: 1
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
  mounted () {
    this.getChartname();
    this.renderChart(this.data, this.options)
  },
  methods:{
    getChartname(){
      const names = this.$store.getters.skillNameb
      this.data.labels = names

      const scores = this.$store.getters.skillscoreb
      this.data.datasets[0].data = scores
    }
  }
}

</script>
