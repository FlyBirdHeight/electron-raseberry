<template>
    <div>
        <div style="margin-top: 20px;margin-left:10%">
            <el-button @click="readAllNotify()">全部消息已读</el-button>
            <el-button @click="readNotify()">已读选中消息</el-button>
            <el-button @click="delNotify()">删除选中消息</el-button>
            <el-button @click="delAllNotify()">删除全部消息</el-button>
            <el-button @click="init()">刷新</el-button>
        </div>
        <el-table
            ref="multipleTable"
            :data="tableData"
            v-loading="loading"
            tooltip-effect="dark"
            style="width: 806px;margin-left:10%;margin-top:30px"
            border
            @selection-change="handleSelectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
            label="日期"
            width="200">
            <template slot-scope="scope">{{ scope.row.created_at }}</template>
            </el-table-column>
            <el-table-column
            prop="user.name"
            label="发送人"
            width="150">
            </el-table-column>
            <el-table-column
            prop="type"
            label="类型"
            width="150"
            >
            </el-table-column>
            <el-table-column
              label="操作"
              width="250">
              <template slot-scope="scope">
                <el-button type="success" icon="el-icon-search" circle  @click="seeList(scope.$index, scope.row)"></el-button>
                <el-button type="primary" icon="el-icon-edit" circle @click="editList(scope.$index, scope.row)"></el-button>
                <el-button type="danger" icon="el-icon-delete" circle  @click="delList(scope.$index, scope.row)"></el-button>
              </template>
            </el-table-column>
        </el-table>


        <el-dialog title="通知信息详情" :visible.sync="dialogVisible">
        <div>
          <div style="border-bottom:2px solid #f0f1f2;margin-bottom:20px">
            <span style="font-size:20px">下单人：{{data.name}}</span>
          </div>
          <div style="border-bottom:2px solid #f0f1f2;margin-bottom:20px">
            <span style="font-size:20px">消息类型：{{data.type}}</span>
          </div>
          <div style="border:2px solid #f0f1f2;border-radius:3px">
            <span style="font-size:20px">消息内容：{{data.content}}</span>
          </div>
        </div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">关闭</el-button>
        </div>
      </el-dialog>
    </div>
</template>

<script>
export default {
     data() {
      return {
        tableData: [],
        multipleSelection: [],
        shop:[],
        dialogVisible:false,
        data:{
          name:"",
          content:"",
          type:""
        },
        loading:true
      }
    },
    methods: {
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        console.log(val);
      },
      readAllNotify(){
        var arr = [];
        for(var i=0;i<this.tableData.length;i++){
          arr.splice(0,0,{'id':this.tableData[i].id});
        }
        this.axios.post('/api/shopInfo/editNotify',{
          'editNotify':arr
        }).then((res) => {
          if(res.data.status == "success"){
            this.$notify({
              title: '成功',
              message: '消息已读',
              type: 'success'
            });
            this.tableData.splice(0,this.tableData.length);
          }
        }).catch((error) => {
          console.log(error);
          this.$notify.error({
            title: '错误',
            message: '网络问题，请确认网络是否连接'
          });
        });
      },
      readNotify(){
        var arr = [];
        for(var i=0;i<this.multipleSelection.length;i++){
          arr.splice(0,0,{'id':this.multipleSelection[i].id});
        }
        this.axios.post('/api/shopInfo/editNotify',{
          'editNotify':arr
        }).then((res) => {
          if(res.data.status == "success"){
            this.$notify({
              title: '成功',
              message: '消息已读',
              type: 'success'
            });
            this.init();
          }
        }).catch((error) => {
          console.log(error);
          this.$notify.error({
            title: '错误',
            message: '网络问题，请确认网络是否连接'
          });
        });
      },
      delNotify(){
        var arr = [];
        for(var i=0;i<this.multipleSelection.length;i++){
          arr.splice(0,0,{'id':this.multipleSelection[i].id});
        }
        this.axios.post('/api/shopInfo/delNotify',{
          'delNotify':arr
        }).then((res) => {
          if(res.data.status == "success"){
            this.$notify({
              title: '成功',
              message: '删除成功',
              type: 'success'
            });
            this.init();
          }
        }).catch((error) => {
          console.log(error);
          this.$notify.error({
            title: '错误',
            message: '网络问题，请确认网络是否连接'
          });
        });
      },
      delAllNotify(){
        var arr = [];
        for(var i=0;i<this.tableData.length;i++){
          arr.splice(0,0,{'id':this.tableData[i].id});
        }
        this.axios.post('/api/shopInfo/delNotify',{
          'delNotify':arr
        }).then((res) => {
          if(res.data.status == "success"){
            this.$notify({
              title: '成功',
              message: '删除成功',
              type: 'success'
            });
            this.tableData.splice(0,this.tableData.length);
          }
        }).catch((error) => {
          console.log(error);
          this.$notify.error({
            title: '错误',
            message: '网络问题，请确认网络是否连接'
          });
        });
      },
      seeList(index,row){
        this.dialogVisible = true;
        this.data.name = this.tableData[index].user.name;
        this.data.content = this.tableData[index].body;
        this.data.type = this.tableData[index].type;
      },
      delList(index,row){
        var arr = [];
        arr.splice(0,0,{'id':this.tableData[index].id});
        console.log(arr[0]);
        this.axios.post('/api/shopInfo/delNotify',{
          'delNotify':arr
        }).then((res) => {
          if(res.data.status == "success"){
            this.$notify({
              title: '成功',
              message: '删除消息成功',
              type: 'success'
            });
            this.tableData.splice(index,1);
          }
        }).catch((error) => {
          console.log(error);
          this.$notify.error({
            title: '错误',
            message: '网络问题，请确认网络是否连接'
          });
        });
      },
      editList(index,row){
        var arr = [];
        arr.splice(0,0,{'id':this.tableData[index].id});
        console.log(arr[0]);
        this.axios.post('/api/shopInfo/editNotify',{
          'editNotify':arr
        }).then((res) => {
          if(res.data.status == "success"){
            this.$notify({
              title: '成功',
              message: '消息已读',
              type: 'success'
            });
            this.tableData.splice(index,1);
          }
        }).catch((error) => {
          console.log(error);
          this.$notify.error({
            title: '错误',
            message: '网络问题，请确认网络是否连接'
          });
        });
      },
      init(){
        this.axios.get('/api/shopInfo/noReadNotify/'+this.shop[0].id).then((res) => {
          if(res.data.status!='success'){
            this.tableData = [];
            this.loading = false;
          }else{
            this.tableData = res.data.response;
            this.loading = false;
          }
        }).catch((error) => {
          console.log(error);
          this.$notify.error({
            title: '错误',
            message: '网络问题，请确认网络是否连接'
          });
        })
        }
    },
    mounted () {
      this.shop = JSON.parse(sessionStorage.getItem('shopInfo'));
      this.init();
    }
}
</script>

<style>

</style>

