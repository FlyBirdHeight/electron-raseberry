<template>
    <div>
        <div style="margin-top: 20px;margin-left:10%">
            <el-button @click="readAllNotify()">全部消息已读</el-button>
            <el-button @click="readNotify()">已读选中消息</el-button>
            <el-button @click="delNotify()">删除选中消息</el-button>
            <el-button @click="delAllNotify()">删除全部消息</el-button>
        </div>
        <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 47.46%;margin-left:10%;margin-top:30px"
            border
            @selection-change="handleSelectionChange">
            <el-table-column
            type="selection"
            width="55">
            </el-table-column>
            <el-table-column
            label="日期"
            width="200">
            <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column
            prop="name"
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
                <el-button type="primary" icon="el-icon-edit" circle @click="seeList(scope.$index, scope.row)"></el-button>
                <el-button type="danger" icon="el-icon-delete" circle  @click="delList(scope.$index, scope.row)"></el-button>
              </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
export default {
     data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '管理员',
          type: '系统通知',
          notify:"",
        }, {
          date: '2016-05-02',
          name: '管理员',
          type: '新订单',
          notify:"",
        }],
        multipleSelection: []
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

      },
      readNotify(){

      },
      delNotify(){

      },
      delAllNotify(){

      },
      seeList(index,row){
      
      },
      delList(index,row){

      }
    }
}
</script>

<style>

</style>

