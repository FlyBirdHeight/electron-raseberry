<template>
    <div>
        <Header :ws="websock"></Header>
        <router-view :ws="websock"></router-view>
    </div>
</template>

<script>
import Header from './common/Header'
// this.ws.send({'type':'register','userInfo':JSON.parse(sessionStorage.getItem('user')),'shopInfo':JSON.parse(sessionStorage.getItem('shopInfo')),'token':sessionStorage.getItem('token')})
export default {
    components: {
        Header
    },
    data () {
        return {
            websock: null,
            address:"ws://106.15.228.184:2347"
        }
    },
    methods:{
        threadPoxi(){  // 实际调用的方法
            //参数
            const agentData = "mymessage";
            //若是ws开启状态
            if (this.websock.readyState === this.websock.OPEN) {
                this.websocketsend(agentData)
            }
            // 若是 正在开启状态，则等待300毫秒
            else if (this.websock.readyState === this.websock.CONNECTING) {
                let that = this;//保存当前对象this
                setTimeout(function () {
                    that.websocketsend(agentData)
                }, 300);
            }
            // 若未开启 ，则等待500毫秒
            else {
                this.initWebSocket();
                let that = this;//保存当前对象this
                setTimeout(function () {
                    that.websocketsend(agentData)
                }, 500);
            }
        },
        initWebSocket(){ //初始化weosocket
            //ws地址
            this.websock = new WebSocket(this.address);
            console.log(this.websock);
            this.websock.onmessage = this.websocketonmessage;
            this.websock.onclose = this.websocketclose;
        },
        websocketonmessage(e){ //数据接收
            const redata = JSON.parse(e.data);
            this.$notify({
                title: redata.date,
                message: redata.notice,
                type: 'success',
                duration: 0
            });
            var url = "http://p53z0yfgy.bkt.clouddn.com/%E8%AE%A2%E5%8D%95.m4a"
            var n = new Audio(url);
            n.src = url;
            n.play();
        },
        websocketsend(agentData){//数据发送
            this.websock.send(agentData);
        },
        websocketclose(e){  //关闭
            console.log("connection closed (" + e.code + ")");
        },
    },
    created(){
        this.initWebSocket()
    }
}
</script>

<style>

</style>

