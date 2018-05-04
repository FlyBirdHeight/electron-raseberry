<template>
  <div style="margin-left:35%;">
        <el-container>
            <el-main>
                <img src="http://p53z0yfgy.bkt.clouddn.com/aevzqgdrbhctlxonmwjyfipuk.png" alt="300*300" widht="500px" height="500px">
            </el-main>
            <el-footer style="margin-left:50px">
                <el-button @click="editQRcode()">刷新二维码</el-button>
                <div style="margin-top:20px">
                    是否打开自动刷新二维码(30秒刷新一次)：
                    <el-switch v-model="delivery"></el-switch>
                </div>   
            </el-footer>
        </el-container>  
    </div>
  
</template>

<script>
export default {
    props: ['ws'],
    created(){
        
    },
    methods: {
        editQRcode(){

        }
    },
    data () {
        return {
            delivery:false
        }
    }
}
</script>

<style>

</style>
