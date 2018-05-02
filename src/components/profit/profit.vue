<template>
  <div style="margin-top:40px">
    <el-row :gutter="50" class="mgb20">
        <el-col :span="6">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
                <div class="grid-content grid-con-1">
                    <i class="el-icon-view grid-con-icon"></i>
                    <div class="grid-cont-right">
                        <div class="grid-num">15单</div>
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
                        <div class="grid-num">169元</div>
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
                        <div class="grid-num">60件</div>
                        <div>销售商品数量</div>
                    </div>
                </div>
            </el-card>
        </el-col>
        <el-col :span="6">
            <el-card shadow="hover" :body-style="{padding: '0px'}">
                <div class="grid-content grid-con-3">
                    <i class="el-icon-goods grid-con-icon"></i>
                    <div class="grid-cont-right">
                        <div class="grid-num">↑15%</div>
                        <div>较昨日收益情况比较</div>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
    <el-row :gutter="100" class="mgb20">
        <el-col :span="8">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>日收益情况</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>周收益情况</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>月收益情况</span>
            </div>
            <div v-for="o in 4" :key="o" class="text item">
              {{'列表内容 ' + o }}
            </div>
          </el-card>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  
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
