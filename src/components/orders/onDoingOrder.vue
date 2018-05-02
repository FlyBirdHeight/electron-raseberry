<template>
  <div>
        <el-table
            :data="allOrderData"
            border
            style="width:59.28%;margin-left:17%;">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                    <el-form-item label="商品名称">
                        <!-- <span>{{ props.row.name }}</span> -->
                    </el-form-item>
                    <el-form-item label="所属店铺">
                        <!-- <span>{{ props.row.shop }}</span> -->
                    </el-form-item>
                    <el-form-item label="商品 ID">
                        <!-- <span>{{ props.row.id }}</span> -->
                    </el-form-item>
                    <el-form-item label="店铺 ID">
                        <!-- <span>{{ props.row.shopId }}</span> -->
                    </el-form-item>
                    <el-form-item label="商品分类">
                        <!-- <span>{{ props.row.category }}</span> -->
                    </el-form-item>
                    <el-form-item label="店铺地址">
                        <!-- <span>{{ props.row.address }}</span> -->
                    </el-form-item>
                    <el-form-item label="商品描述">
                        <!-- <span>{{ props.row.desc }}</span> -->
                    </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column
                prop="name"
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
                prop="status"
                label="状态"
                width="100">
            </el-table-column>
            <el-table-column
                prop="phone"
                label="联系电话"
                width="100">
            </el-table-column>
            <el-table-column
                prop="address"
                label="地址"
                width="200">
            </el-table-column>
            <el-table-column
                prop="address"
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
            allOrderData:[]
        }
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
