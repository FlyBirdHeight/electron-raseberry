<template>
  <div>
      <el-row style="margin-top:50px">
          <el-col :span="12">
              <div id="dayChart" style="width:600px;height:600px"/>
          </el-col>
          <el-col :span="12">
              <div id="changeChart" style="width:600px;height:600px"></div>
          </el-col>
      </el-row>
      
  </div>
</template>

<script>
let echarts = require('echarts/lib/echarts')
require('echarts/lib/chart/line')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
export default {
  mounted () {
      this.drawChart();
      this.drawChangeChart();
  },
  methods: {
      drawChart(){
          let dayChart = echarts.init(document.getElementById('dayChart'));
          dayChart.setOption({
            title: {
                text: '日时间段人数所占比列',
                x: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {d}%"
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['9:00-11:30','17:00-21:00','15:30-17:00','13:30-15:30','搜索引擎']
            },
            series : [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    roseType: 'angle',
                    data:[
                        {value:70, name:'9:00-11:30'},
                        {value:350, name:'17:00-21:00'},
                        {value:140, name:'15:30-17:00'},
                        {value:120, name:'13:30-15:30'},
                        {value:320, name:'11:30-13:30'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        })
      },
      drawChangeChart(){
          let changeChart = echarts.init(document.getElementById('changeChart'),'infographic');
          var option = {
                title: {
                    text: '实时店内客流变化曲线',
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#283b56'
                        }
                    }
                },
                legend: {
                    data:['最新客流人数', '预购队列']
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataView: {readOnly: false},
                        restore: {},
                        saveAsImage: {}
                    }
                },
                dataZoom: {
                    show: true,
                    start: 40,
                    end: 100,
                // filterMode: 'empty'
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: true,
                        data: (function (){
                            var now = new Date();
                            var res = [];
                            var len = 10;
                            while (len--) {
                                res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
                                now = new Date(now - 60000);
                            }
                            return res;
                        })()
                    }
                ],
                yAxis: [
                    {
                        type: 'value',
                        scale: true,
                        name: '人数',
                        max: 50,
                        min: 0,
                        boundaryGap: [0.2, 0.2]
                    }
                ],
                series: [
                    {
                        name:'实时店内客流',
                        type:'line',
                        data:(function (){
                            var res = [];
                            var len = 0;
                            while (len < 10) {
                                res.push((Math.random()*5 + 3).toFixed(0) - 0);
                                len++;
                            }
                            return res;
                        })()
                    }
                ]
            };
          changeChart.setOption(option);
            setInterval(function (){
                var axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');
                console.log(axisData);
                var data0 = option.series[0].data;
                
                data0.shift();
                data0.push((Math.random() * 10 + 20).toFixed(1) - 0);

                option.xAxis[0].data.shift();
                option.xAxis[0].data.push(axisData);
                changeChart.setOption(option);
            }, 60000);
      }
  }
}
</script>

<style>

</style>
