<template>
    <div>
        <el-tabs :tab-position="tabPosition" style="height: auto;margin-top:30px;margin-left:100px">
            <el-tab-pane label="所有订单">
                <allOrder></allOrder>    
            </el-tab-pane>
            <el-tab-pane label="未支付订单">
                <unpayOrder></unpayOrder>   
            </el-tab-pane>
            <el-tab-pane label="未完成订单">
                <onDoingOrder></onDoingOrder>   
            </el-tab-pane>
            <el-tab-pane label="完成订单">
                <endOrder></endOrder>   
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import allOrder from './allOrder';
import endOrder from './endOrder';
import onDoingOrder from './onDoingOrder';
import unpayOrder from './unpayOrder';
export default {
    data () {
        return {
            tabPosition:'left'
        }
    },
    components: {
        allOrder,
        endOrder,
        onDoingOrder,
        unpayOrder
    },
    mounted(){
        
    }
}
</script>

<style>
.el-tabs--left .el-tabs__item.is-left {
    height: 150px;
    line-height: 150px;
}
</style>
