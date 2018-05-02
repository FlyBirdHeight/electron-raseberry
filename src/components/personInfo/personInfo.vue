<template>
  <div>
    <el-tabs :tab-position="tabPosition" style="height: auto;margin-top:30px;margin-left:100px">
      <el-tab-pane label="日客流分析">
          <day></day>
      </el-tab-pane>
      <el-tab-pane label="周客流分析">
          <week></week> 
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Day from './day';
import Week from './week';
export default {
  components: {
    Day,
    Week,
  },
  data () {
    return {
      tabPosition:'left'
    }
  }
}
</script>

<style>

</style>

