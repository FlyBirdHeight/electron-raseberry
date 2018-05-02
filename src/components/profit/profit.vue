<template>
  <div style="margin-top:40px">
    <el-row :gutter="10" class="mgb20">
        <el-col :span="6">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
                <div class="grid-content grid-con-1">
                    <i class="el-icon-tickets grid-con-icon"></i>
                    <div class="grid-cont-right">
                        <div class="grid-num">1单</div>
                        <div>有效订单数量</div>
                    </div>
                </div>
            </el-card>
        </el-col>
        <el-col :span="6">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
                <div class="grid-content grid-con-2">
                    <i class="el-icon-message grid-con-icon"></i>
                    <div class="grid-cont-right">
                        <div class="grid-num">19.4元</div>
                        <div>金额收益</div>
                    </div>
                </div>
            </el-card>
        </el-col>
        <el-col :span="6">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
                <div class="grid-content grid-con-3">
                    <i class="el-icon-goods grid-con-icon"></i>
                    <div class="grid-cont-right">
                        <div class="grid-num">3件</div>
                        <div>销售商品数量</div>
                    </div>
                </div>
            </el-card>
        </el-col>
        <el-col :span="6">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
                <div class="grid-content grid-con-4">
                    <i class="el-icon-refresh grid-con-icon"></i>
                    <div class="grid-cont-right">
                        <div class="grid-num">↑100%</div>
                        <div>较昨日收益情况比较</div>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
    <el-row :gutter="60" class="mgb20">
        <el-col :span="8">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>日收益情况:19.4元</span>
            </div>
            <div class="text item">
              日有效订单：
            </div>
            <div class="text item">
              日有效收入金额：
            </div>
            <div class="text item">
              日有效销售产品数：
            </div>
            <div class="text item">
              日到店消费顾客数：
            </div>
            <div class="text item">
              日无效订单数：
            </div>
            <div class="text item">
              较昨日订单有效数变化:  
            </div>
            <div class="text item">
              较昨日收入金额变化:  
            </div>
            <div class="text item">
              较昨日客流人数变化:  
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>周收益情况</span>
            </div>
            <div class="text item">
              周有效总订单：
            </div>
            <div class="text item">
              周有效收入总金额：
            </div>
            <div class="text item">
              周有效销售产品总数：
            </div>
            <div class="text item">
              周到店消费顾客总数：
            </div>
            <div class="text item">
              周无效订单数：
            </div>
            <div class="text item">
              较上周订单有效数变化:  
            </div>
            <div class="text item">
              较上周收入金额变化:  
            </div>
            <div class="text item">
              较上周客流人数变化:  
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>月收益情况</span>
            </div>
            <div class="text item">
              月有效总订单：
            </div>
            <div class="text item">
              月有效收入总金额：
            </div>
            <div class="text item">
              月有效销售产品总数：
            </div>
            <div class="text item">
              月到店消费顾客总数：
            </div>
            <div class="text item">
              月无效订单数：
            </div>
            <div class="text item">
              较上月订单有效数变化:  
            </div>
            <div class="text item">
              较上月收入金额变化:  
            </div>
            <div class="text item">
              较上月客流人数变化:  
            </div>
          </el-card>
        </el-col>
    </el-row>
    <el-row :gutter="60" class="mgb20" style="margin-top:50px">
        <el-col :span="8">
            <div id="dc01" style="width:400px;height:400px"/>
        </el-col>
        <el-col :span="8">
            <div id="weekChart01" style="width:400px;height:400px"></div>
        </el-col>
        <el-col :span="8">
            <div id="monthChart01" style="width:400px;height:400px"></div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods: {
      dayChart01(){
            let dc01 = this.echarts.init(document.getElementById('dc01'));
            var option = {
                title: {
                    text: '日产品销售一览',
                    x: 'right'
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['网络商城订单产生', '到店购物订单产生']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis:  {
                    type: 'value'
                },
                yAxis: {
                    type: 'category',
                    data: ['大炸鸡','可乐','奶茶','香辣鸡腿堡','柠檬水','汤粉']
                },
                series: [
                    {
                        name: '网络商城订单产生',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [20, 15, 18, 25, 22, 21]
                    },
                    {
                        name: '到店购物订单产生',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [8, 16, 2, 15, 11, 16]
                    },
                ]
            }
          dc01.setOption(option);
      },
      weekChart01(){
          let weekChart01 = this.echarts.init(document.getElementById('weekChart01'));
          var option = {
                title: {
                    text: '周产品销售一览',
                    x: 'right'
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['网络商城订单产生', '到店购物订单产生']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis:  {
                    type: 'value'
                },
                yAxis: {
                    type: 'category',
                    data: ['大炸鸡','可乐','奶茶','香辣鸡腿堡','柠檬水','汤粉']
                },
                series: [
                    {
                        name: '网络商城订单产生',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [180, 116, 84, 217, 134, 162]
                    },
                    {
                        name: '到店购物订单产生',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [64, 50, 31, 94, 61, 91]
                    },
                ]
            }
            weekChart01.setOption(option);
      },
      monthChart(){
          let monthChart = this.echarts.init(document.getElementById('monthChart01'),'infographic');
           var option = {
                title: {
                    text: '月产品销售一览',
                    x: 'right'
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['网络商城订单产生', '到店购物订单产生']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis:  {
                    type: 'value'
                },
                yAxis: {
                    type: 'category',
                    data: ['大炸鸡','可乐','奶茶','香辣鸡腿堡','柠檬水','汤粉']
                },
                series: [
                    {
                        name: '网络商城订单产生',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [742, 512, 401, 748, 612, 674]
                    },
                    {
                        name: '到店购物订单产生',
                        type: 'bar',
                        stack: '总量',
                        label: {
                            normal: {
                                show: true,
                                position: 'insideRight'
                            }
                        },
                        data: [410, 462, 261, 586, 351, 533]
                    },
                ]
            }
            monthChart.setOption(option);
      }
  },
  mounted () {
      this.dayChart01();
      this.weekChart01();
      this.monthChart();
  }

}
</script>

<style>
    .el-row {
        margin-bottom: 20px;
    }
    .grid-content {
        display: flex;
        align-items: center;
        height: 100px;
    }
    .grid-cont-right {
        flex: 1;
        text-align: center;
        font-size: 12px;
        color: #999;
    }
    .grid-num {
        font-size: 30px;
        font-weight: bold;
    }
    .grid-con-icon {
        font-size: 50px;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        color: #fff;
    }
    .grid-con-1 .grid-con-icon {
        background: rgb(45, 140, 240);
    }
    .grid-con-1 .grid-num {
        color: rgb(45, 140, 240);
    }
    .grid-con-2 .grid-con-icon {
        background: rgb(100, 213, 114);
    }
    .grid-con-2 .grid-num {
        color: rgb(45, 140, 240);
    }
    .grid-con-3 .grid-con-icon {
        background: rgb(242, 94, 67);
    }
    .grid-con-3 .grid-num {
        color: rgb(242, 94, 67);
    }
    .grid-con-4 .grid-con-icon {
        background: rgb(243, 241, 113);
    }
    .grid-con-4 .grid-num {
        color: rgb(242, 94, 67);
    }
    .user-info {
        display: flex;
        align-items: center;
        padding-bottom: 20px;
        border-bottom: 2px solid #ccc;
        margin-bottom: 20px;
    }
    .user-avator {
        width: 120px;
        height: 120px;
        border-radius: 50%;
    }
    .user-info-cont {
        padding-left: 50px;
        flex: 1;
        font-size: 14px;
        color: #999;
    }
    .user-info-cont div:first-child {
        font-size: 30px;
        color: #222;
    }
    .user-info-list {
        font-size: 14px;
        color: #999;
        line-height: 25px;
    }
    .user-info-list span {
        margin-left: 70px;
    }
    .mgb20 {
        margin-bottom: 20px;
    }
    .todo-item {
        font-size: 14px;
    }
    .todo-item-del {
        text-decoration: line-through;
        color: #999;
    }
    .text {
      font-size: 14px;
    }

    .item {
      margin-bottom: 18px;
    }

    .clearfix:before,
    .clearfix:after {
      display: table;
      content: "";
    }
    .clearfix:after {
      clear: both
    }

    .box-card {
      width: 480px;
    }
</style>
