<template>
  <div>
      <el-row style="margin-top:50px">
          <el-col :span="12">
              <div id="dayChart01" style="width:600px;height:600px"/>
          </el-col>
          <el-col :span="12">
              <div id="changeChart01" style="width:600px;height:600px"></div>
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
          let dayChart01 = echarts.init(document.getElementById('dayChart01'));
          dayChart01.setOption({
            title: {
                text: '每日时间段人数所占比列',
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
                        {value:95, name:'9:00-11:30'},
                        {value:400, name:'17:00-21:00'},
                        {value:140, name:'15:30-17:00'},
                        {value:120, name:'13:30-15:30'},
                        {value:340, name:'11:30-13:30'}
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
          let changeChart01 = echarts.init(document.getElementById('changeChart01'));
          changeChart01.setOption({
                //图表标题
                title: {
                    text: '每日平均顾客数分析图',
                    subtext: '单位（位u）'
                },
                //图表提示框
                tooltip: {
                    trigger: 'axis'
                },
                //图例
                legend: {
                    data:['峰值','最低值']
                },
                //工具箱（右上角那几个按钮）
                toolbox: {
                    show: true,
                    //各工具配置项，除了各个内置的工具按钮外，还可以自定义工具按钮（自定义的工具名字，只能以 my 开头）
                    feature: {
                        //数据区域缩放
                        dataZoom: {
                            show: true,
                            //不缩放Y轴
                            yAxisIndex: 'none'
                        },
                        //数据视图工具，可以展现当前图表所用的数据
                        dataView: {
                            //是否只读，修改数据可改变图表
                            readOnly: true
                        },
                        //动态类型切换('line', 'bar', 'stack', 'tiled')
                        magicType: {type: ['line', 'bar',]},
                        //配置项还原
                        restore: {},
                        //保存为图片
                        saveAsImage: {}
                    }
                },
                //X轴
                xAxis:  {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一','周二','周三','周四','周五','周六','周日']
                },
                //Y轴
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        //y轴坐标格式化
                        formatter: '{value} 位'
                    }
                },
                series: [
                    {
                        name:'峰值',
                        type:'line',
                        data:[46, 39, 42, 50, 68, 70, 71],
                        //图表标注
                        markPoint: {
                            //标记的图形（'circle', 'rect', 'roundRect', 'triangle', 'diamond', 'pin', 'arrow'）
                            symbol: 'roundRect',
                            symbolSize: '20',
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                        //图表标线
                        markLine: {
                            data: [
                                {type: 'average', name: '平均值'}
                            ],
                            //标线的标签设置
                            label: {
                                normal:{
                                    show: true,
                                    //标签位置
                                    position: 'end',

                                }
                            }

                        }
                    },
                    {
                        name:'最低值',
                        type:'line',
                        data:[15, 19, 21, 14, 22, 25, 27],

                        markLine: {
                            data: [
                                {type: 'average', name: '平均值'},
                                [
                                    {
                                        symbol: 'none',
                                        x: '90%',
                                        yAxis: 'min'
                                    }, 
                                    {
                                        symbol: 'circle',
                                        label: {
                                            normal: {
                                                position: 'start',
                                                formatter: '最小值',
                                            }
                                        },
                                        type: 'min',
                                        name: '最低点'
                                    },

                                ],
                                [
                                    {
                                        symbol: 'none',
                                        x: '90%',
                                        yAxis: 'max'
                                    }, 
                                    {
                                        symbol: 'circle',
                                        label: {
                                            normal: {
                                                position: 'start',
                                                formatter: '最大值'
                                            }
                                        },
                                        type: 'max',
                                        name: '最高点'
                                    },

                                ]
                            ]
                        }
                    }
                ]
            });
      },
  }
}
</script>

<style>

</style>
