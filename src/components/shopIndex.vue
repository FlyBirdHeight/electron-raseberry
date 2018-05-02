<template>
    <div>
        <Header></Header>
        <router-view></router-view>
    </div>
</template>

<script>
import Header from './common/Header'
export default {
    components: {
        Header
    },
    methods:{
      threadPoxi(){  // 实际调用的方法
            //若是ws开启状态
            if (this.ws.readyState === this.ws.OPEN) {
                this.websocketsend(this.msg)
            }
            // 若是 正在开启状态，则等待300毫秒
            else if (this.ws.readyState === this.ws.CONNECTING) {
                let that = this;//保存当前对象this
                setTimeout(function () {
                    that.websocketsend(this.msg)
                }, 300);
            }
            // 若未开启 ，则等待500毫秒
            else {
                this.initWebSocket();
                let that = this;//保存当前对象this
                setTimeout(function () {
                    that.websocketsend(this.msg)
                }, 500);
            }
        },
        initWebsocket(){
            this.ws = new WebSocket("ws://106.15.228.184:2347");  
            if(this.ws.OPEN){
                console.log("success")
            }
            this.ws.onmessage = this.websocketonmessage;
        },
        websocketonmessage(e){ //数据接收
            console.log(e.data);
            document.getElementById("content").innerHTML += "<span>" + e.data + "</span><br>";
        },
        websocketsend(msg){//数据发送
            this.ws.send(JSON.stringify({'type':'msg','msg':msg}));
        },
        websocketclose(e){  //关闭
            console.log("connection closed (" + e.code + ")");
        },
        close(){
            this.ws.onclose=function(e){
                 console.log(e);
                 ws.close();
            };
            console.log(123);
        }
    },
}
</script>

<style>

</style>

