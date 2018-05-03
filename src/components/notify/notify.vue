<template>
  <div>
    <el-tabs :tab-position="tabPosition" style="height: auto;margin-top:30px;margin-left:100px">
      <el-tab-pane label="未读消息">
          <unreadNotify></unreadNotify> 
      </el-tab-pane>
      <el-tab-pane label="已读消息">
          <readNotify></readNotify>      
      </el-tab-pane>
      <el-tab-pane label="聊天">
          <chat></chat>   
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import readNotify from './readNotify';
import unreadNotify from './unreadNotify';
import chat from './chat';
export default {
  components: {
    readNotify,
    unreadNotify,
    chat
  },
  data () {
    return {
      tabPosition:'left',
    }
  },
  methods: {
    
  }
}
</script>

<style>

</style>

