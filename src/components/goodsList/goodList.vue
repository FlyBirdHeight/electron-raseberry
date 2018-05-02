<template>
  <div>
    <el-container>
        <el-aside width="40%">
          <el-form ref="form" :model="form" label-width="150px"  style="margin-top:50px">
            <el-form-item label="商品名称：">
              <el-input v-model="form.name" style="width:55%"></el-input>
            </el-form-item>
            <el-form-item label="一维码：">
              <el-input v-model="form.isbn" style="width:55%"></el-input>
            </el-form-item>
            <el-form-item label="价格：">
              <el-input v-model="form.price" style="width:55%"></el-input>
            </el-form-item>
            <el-form-item label="是否上架：">
              <el-switch v-model="form.status" style="width:55%"></el-switch>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="addGoodsList">添加商品</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </el-aside>
        <el-main>
          <el-table
            v-loading="loading"
            :data="tableData"
            style="width:auto">
            <el-table-column
              prop="isbn"
              label="一维码"
              width="200">
            </el-table-column>
            <el-table-column
              prop="name"
              label="商品名称"
              width="150">
            </el-table-column>
            <el-table-column
              prop="price"
              label="价格"
              width="100">
            </el-table-column>
            <el-table-column
              prop="status"
              label="状态"
              width="100">
            </el-table-column>
            <el-table-column
              label="操作"
              width="250">
              <template slot-scope="scope">
                <el-button type="primary" icon="el-icon-edit" circle @click="editList(scope.$index, scope.row)"></el-button>
                <el-button type="danger" icon="el-icon-delete" circle  @click="delList(scope.$index, scope.row)"></el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-main>
      </el-container> 

      <el-dialog title="商品信息修改" :visible.sync="dialogFormVisible">
        <el-form :model="form01">
          <el-form-item label="商品名称：">
              <el-input v-model="form01.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="一维码：">
              <el-input v-model="form01.isbn" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="价格：">
              <el-input v-model="form01.price" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="是否上架：">
              <el-switch v-model="form01.status" auto-complete="off"></el-switch>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="submitEdit">确 定</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return {
      tableData: [],
      form: {
          name: '',
          isbn:'',
          price:'',
          status:false
        },
      form01:{
        name: '',
        isbn:'',
        price:'',
        status:false,
        index:0,
        id:0,
      },
      dialogFormVisible: false,
      shop:{},
      loading:true
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    getGoodsList(){
      this.axios.get('/api/shop/getList/'+this.shop[0].id).then((response) => {
        if(response.data.status == "success"){
          this.tableData = response.data.goodsList;
          // console.log(this.tableData.length);
          for(var i=0;i<this.tableData.length;i++){
            this.tableData[i].status = this.tableData[i].status==0?'未上架':'上架';
          }
          this.loading = false;
        }else{  
          console.log(response.data.goodsList)
        }
      }).catch((error) => {
        this.$notify.error({
          title: '错误',
          message: '网络问题，请确认网络是否连接'
        });
        console.log(error);
      })
    },
    addGoodsList(){
      this.axios.post('/api/shop/insertList',{
        'name':this.form.name,'isbn':this.form.isbn,'price':this.form.price,'status':this.form.status==true?1:0,'shop_id':this.shop[0].id
      }).then((response) => {
        if(response.data.status=="success"){
          this.$notify({
            title: '成功',
            message: '商品添加成功',
            type: 'success'
          });
          this.tableData.splice(0,0,{'name':this.form.name,'isbn':this.form.isbn,'price':this.form.price,'status':this.form.status?'上架':'未上架'});
          this.form.name = "";this.form.isbn="";this.form.price="";this.form.status=false;
        }else{
          this.$notify.error({
            title: '失败',
            message: '商品添加失败，请保证信息填写完全'
          });
        }
      }).catch((error) => {
        this.$notify.error({
          title: '失败',
          message: '商品添加失败，请保证信息填写完全'
        });
      })
    },
    delList(index,row){
      console.log(index)
      this.axios.post('/api/shop/delList',{
        'isbn':this.tableData[index].isbn
      }).then((response) => {
        if(response.data.status == "success"){
          this.$notify({
            title: '成功',
            message: '商品删除成功',
            type: 'success'
          });
          this.tableData.splice(index,1);
        }else{
          this.$notify.error({
            title: '失败',
            message: '商品删除失败，请稍后重试'
          });
        }
      }).catch((error) => {
        this.$notify.error({
          title: '错误',
          message: '网络问题，请确认网络是否连接'
        });
        console.log(error);
      })
    },
    editList(index,row){
      this.dialogFormVisible = true;
      this.form01.name = this.tableData[index].name;
      this.form01.price = this.tableData[index].price;
      this.form01.isbn = this.tableData[index].isbn;
      this.form01.status = this.tableData[index].status=="上架"?true:false;
      this.form01.index = index;
      this.form01.id = this.tableData[index].id;
    },
    submitEdit(){
      this.axios.post('/api/shop/editGoodList',{
        'id':this.form01.id,'name':this.form01.name,'price':this.form01.price,'isbn':this.form01.isbn,'status':this.form01.status=="上架"?1:0
      }).then((res) => {
        if(res.data.status=="success"){
          this.$notify({
            title: '成功',
            message: '商品更新成功',
            type: 'success'
          });
          this.tableData[this.form01.index].name = this.form01.name;
          this.tableData[this.form01.index].price = this.form01.price;
          this.tableData[this.form01.index].isbn = this.form01.isbn;
          this.tableData[this.form01.index].status = this.form01.status==true?"上架":"未上架";
          this.dialogFormVisible = false;
        }else{
          this.$notify({
            title: '失败',
            message: '商品更新失败。稍后重试',
            type: 'success'
          });
        }
      }).catch((error) => {
        this.$notify.error({
          title: '错误',
          message: '网络问题，请确认网络是否连接'
        });
        console.log(error);
      })
    }
  },
  mounted(){
    this.shop = JSON.parse(sessionStorage.getItem('shopInfo'));
    this.getGoodsList();
  }
}
</script>

<style>

</style>

