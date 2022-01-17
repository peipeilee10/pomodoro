<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  data: () => ({
    chartdata: {
      labels: ['7/9', '7/10', '7/11', '7/12', '7/13', '7/14', '7/15'],
      datasets: [
        {
          data: [12, 9, 7, 9, 10, 6, 7],
          borderWidth: 2,
          borderColor: '#F2F0C9',
          backgroundColor: 'rgba(240,241,201,0.5)',
          lineTension: 0
        }
      ]
    },
    options: {
      scales: {
        yAxes: {
          beginAtZero: true
        }
      },
      plugins: {
        title: {
          display: false
        }
      },
      responsive: false,
      maintainAspectRatio: false
    }
  }),

  mounted () {
    this.renderChart(this.chartdata, this.options)
  }
}
</script>
