<script>
import { Radar } from '../../../portfolio/node_modules/vue-chartjs';

export default {
  name: 'Chart',
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['HTML', 'CSS', 'Javascript', 'SCSS', 'Vue', 'WordPress','jQuery'],
        datasets: [
          {
            label: 'スキル詳細',
            data: [3, 3, 2, 1, 2, 4, 2],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 2,
            pointDot:false,
            scaleFontSize: 20,
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
