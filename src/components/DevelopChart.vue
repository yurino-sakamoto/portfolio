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
            data: [2, 2, 2, 2, 2],
            backgroundColor: [
              'rgba(153, 2, 223, 0.1)',
            ],
            borderColor: [
              'rgba(153, 2, 223, 0.1)'
            ],
            borderWidth: 1
          },

        ]
      },
      options: {
        scale: {
          ticks:{
			beginAtZero:true,
			max:5,
			min:0
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
