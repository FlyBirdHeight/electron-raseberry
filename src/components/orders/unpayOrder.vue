<template>
  <div>
        <el-table
            :data="unpayOrderData"
            border
            v-loading="loading"
            style="width:66.5%;margin-left:17%;">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="订单号">
                        <span>{{ props.row.order_code }}</span>
                    </el-form-item>
                    <el-form-item label="订单金额">
                        <span>{{ props.row.price }}元</span>
                    </el-form-item>
                    <el-form-item label="商品列表">
                        <el-table
                            :data="props.row.goods"
                            border
                            style="margin-top:-30px;margin-left:100px;width:520px">
                            <el-table-column
                                prop="name"
                                label="名称"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="pivot.num"
                                label="数量"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="pivot.price"
                                label="价格">
                            </el-table-column>
                        </el-table>
                    </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column
                prop="user.name"
                label="下单人"
                width="100">
            </el-table-column>
            <el-table-column
                prop="created_at"
                label="下单日期"
                width="200">
            </el-table-column>
            <el-table-column
                prop="price"
                label="总金额"
                width="100">
            </el-table-column>
            <el-table-column
                label="状态"
                width="100">
                <template slot-scope="scope">
                    <span>{{scope.row.status==1?"已完成":(scope.row.status==0?"未支付":"未完成")}}</span>
                </template>
            </el-table-column>
            <el-table-column
                prop="user.phone"
                label="联系电话"
                width="150">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址"
                width="260">
            </el-table-column>
            <el-table-column
                prop="get_type"
                label="取货方式"
                width="150">
            </el-table-column>
        </el-table>
  </div>
</template>

<script>
export default {
    data () {
        return {
            unpayOrderData:[],
            loading:true
        }
    },
    methods: {
        getAllOrder(){
            this.axios.get('/api/app/getOrderUnpay/'+this.shop[0].id).then((res) => {
                if(res.data.status=="success"){
                    this.onDoingOrderData = res.data.response;
                    console.log(this.onDoingOrderData)
                }else{
                   this.onDoingOrderData = [];
                   console.log(res.data);
                }
                this.loading = false;
            }).catch((error) => {
                this.$notify.error({
                    title: '错误',
                    message: '网络问题，请确认网络是否连接'
                });
            })
        }
    },
    mounted(){
        this.shop = JSON.parse(sessionStorage.getItem('shopInfo'));
        this.getAllOrder();
    }
}
</script>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>
