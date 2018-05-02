<template>
    <div>
        <el-menu
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1" style="width:12.5%;text-align:center;margin-left:6.25%">二维码</el-menu-item>
            <el-menu-item index="2" style="width:12.5%;text-align:center">商品添加</el-menu-item>
            <el-menu-item index="3" style="width:12.5%;text-align:center">订单查看</el-menu-item>
            <el-menu-item index="4" style="width:12.5%;text-align:center">收银状况统计查看</el-menu-item>
            <el-menu-item index="5" style="width:12.5%;text-align:center">店内客流查看</el-menu-item>
            <el-menu-item index="6" style="width:12.5%;text-align:center">店内音乐设置</el-menu-item>
            <el-menu-item index="7" style="width:12.5%;text-align:center">消息通知查看</el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    methods: {
        handleSelect(key) {
            switch(key){
                case '1':
                    this.$router.push('/shopIndex/qrcode');
                    break;
                case '2':
                    this.$router.push('/shopIndex/goodList');
                    break;
                case '3':
                    this.$router.push('/shopIndex/order');
                    break;
                case '4':
                    this.$router.push('/shopIndex/profit');
                    break;
                case '5':
                    this.$router.push('/shopIndex/personInfo');
                    break;
                case '6':
                    this.$router.push('/shopIndex/music');
                    break;
                case '7':
                    this.$router.push('/shopIndex/notify');
                    break;
                default:
                    break;
            }
        }
    }
}
</script>

<style>

</style>
