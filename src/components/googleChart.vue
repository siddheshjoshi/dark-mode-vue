<template>
    <div>
        From google chart

        <GChart
            type="ColumnChart"
            :data="chartData"
            :options="chartOptions"
        />

    </div>
</template>
<script>
import { GChart } from 'vue-google-charts'
// import axios from 'axios'

export default {
components:{
    GChart
},
  data () {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
      chartData: [
        ['Year', 'Sales', 'Expenses', 'Profit'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
      ],
      chartOptions: {
        chart: {
          title: 'Company Performance',
          subtitle: 'Sales, Expenses, and Profit: 2014-2017',
        }
      }
    }
  },
//   created() {
//       let baseUrl = '/'
//       axios.get(baseUrl + 'googleChartsData.json').then(response => {
//         // console.log(response.data);
//         this.chartData = response.data.performance
//         let tableData = google.visualization.arrayToDataTable(this.chartData) 
//         console.log('hello', tableData) 
//         console.log('this.chartData: ', this.chartData)
//      })
//   }
}
</script>

<style scoped>
div > svg > rect{
    fill: var(--bg-color);
}
</style>