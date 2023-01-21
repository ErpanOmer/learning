<template>
  <div id="chart"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted } from 'vue';
import interest from './interest'

onMounted(() => {
  const dom: HTMLElement = document.getElementById('chart')
  const chart = echarts.init(dom)

  const options = {
    textStyle: {
      color: '#ccc',
    },
    grid: {
      left: 30,
      right:15,
      top: 40,
      bottom: 30,
      borderColor: '#000'
    },
    legend: {
      textStyle: {
        color: '#ccc'
      }
    },
    xAxis: {
      type: 'category',
      axisLabel: {
        formatter: '{value} 天',
      },
      axisLine: {
        lineStyle: {
          color: '#ccc'
        }
      }
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}%',
        rotate: 30,
      },
      splitLine: {
        lineStyle: {
          color: '#444'
        }
      }
    },
    dataset: {
      source: [
        ['product', '手机支付', '信用卡支付']
      ]
  },
    series: [
      {
        type: 'bar',
        label: {
          show: true,
          color: '#fff',
          position: 'top',
          offset: [5, -5],
          rotate: 30,
          formatter: ({ value }) => `${value[1]}%`
        }
      },
      {
        type: 'bar',
        label: {
          show: true,
          color: '#fff',
          position: 'top',
          offset: [5, -5],
          rotate: 30,
          formatter: ({ value }) => `${value[2]}%`
        }
      }
    ],
    tooltip: {
      formatter: ({ value, seriesName, ...other }) => {
        // console.log(other)
        

        const item = value[3] || {}
        const dom = []

        for (const key in item) {
          if (Object.prototype.hasOwnProperty.call(item, key)) {
            const element: Object = item[key];

            if (key.trim() === '') {
              continue
            }

            dom.push(`<div>${key}: ${element[seriesName]}</div>`)
            
          }
        }
        

        return dom.join('')
      }
    }
  }


  for (let index = 30; index < 57; index++) {
    const element = interest(10000, index)

    options.dataset.source.push([
      index,
      element['年利率']['手机支付'].replace('%', ''),
      element['年利率']['信用卡支付'].replace('%', ''),
      element
    ])
    
  }


  chart.setOption(options)
})





</script>

<style scoped>
#chart {
  box-sizing: border-box;
  height: 100%;
  min-height: 100vh;
  flex: 1;
  padding: 20px;
}

</style>