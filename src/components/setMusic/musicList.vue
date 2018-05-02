<template>
  <el-table
    :data="tableData"
    style="width: 100%">
    <el-table-column
      label="歌名"
      width="180">
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.title }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="演唱"
      width="180"
      prop="artist"
      >
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props:['musicList'],
  data () {
      return {
          tableData:[]
      }
  },
  methods: {
    handleEdit(index, row) {
        console.log(index, row);
    },
    handleDelete(index, row) {
        console.log(index, row);
    }
  },
  mounted(){
    this.tableData = this.musicList;
  }
}
</script>

<style>

</style>
