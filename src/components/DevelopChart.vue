<script>
import { Radar } from '../../../portfolio/node_modules/vue-chartjs';

export default {
  name: 'Chart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['Linux', 'Node', 'Git', 'Github', 'Firebase'],
        datasets: [
          {
            label: 'スキル詳細',
            data: [3, 1, 3, 3, 2],
            backgroundColor: 'rgba(153, 2, 223, 0.1)',
            borderColor: 'purple',
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
    this.renderChart(this.data, this.options)
  }
}

</script>
