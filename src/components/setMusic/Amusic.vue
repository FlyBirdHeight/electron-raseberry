<template>
   <el-form ref="form" :model="form" label-width="150px"  style="margin-top:50px">
            <el-form-item label="音乐名称：">
              <el-input v-model="form.name" style="width:55%"></el-input>
            </el-form-item>
            <el-form-item label="作者：">
              <el-input v-model="form.artist" style="width:55%"></el-input>
            </el-form-item>
            <el-form-item label="上传音乐：">
                <el-upload
                    class="upload-demo"
                    drag
                    action="/api/shopInfo/uploadMusic"
                    :multiple="false"
                    :on-success="uploadAMusic"
                    :limit="1"
                    name="music"
                    ref="uploadMusic"
                    >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <div class="el-upload__tip" slot="tip">只能上传mp3/wma文件</div>
                </el-upload>
            </el-form-item>
            <el-form-item label="上传封面：">
                <el-upload
                    action="/api/shopInfo/uploadImg"
                    list-type="picture-card"
                    :on-success="uploadFile"
                    :limit="1"
                    name="image"
                    ref="uploadImage"
                    >
                    <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                    <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="addMusic">添加音乐</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
</template>

<script>
export default {
  props: ['shopId'],  
  data () {
    return {
        form:{
            name:"",
            artist:"",
            path:"",
            cover:"",
        },
        fileList:[],
        dialogImageUrl:'',
        dialogVisible: false
    }
  },
  methods:{
    addMusic(){
        this.axios.post('/api/shopInfo/addMusic',{
            'shopId':this.shopId,'name':this.form.name,'path':this.form.path,'artist':this.form.artist,'cover':this.form.cover
        }).then((res) => {
            if(res.data.status == "success"){
                this.$notify({
                    title: '成功',
                    message: '音乐添加成功，自动加入音乐列表',
                    type: 'success'
                });
                this.$emit('addMusic',{
                    title: this.form.name,
                    artist: this.form.artist,
                    src: this.form.path,
                    pic: this.form.cover
                });
                this.form.name="";
                this.form.path="";
                this.form.artist = "";
                this.form.cover = "";
                this.$refs.uploadMusic.clearFiles();
                this.$refs.uploadImage.clearFiles();
            }else{
                this.$notify.error({
                    title: '错误',
                    message: '网络问题，请确认网络是否连接'
                });
            }
        }).catch((error) => {
            console.log(error);
            this.$notify.error({
                title: '错误',
                message: '网络问题，请确认网络是否连接'
            });
        })
    },
    uploadAMusic(response,file,fileList){
        this.form.path = response.response;
    },
    uploadFile(response,file,fileList){
        this.dialogImageUrl = file.url;
        this.form.cover = response.response;
    }
  },
  mounted(){
      console.log(this.shopId)
  },
  components: {

  }
}
</script>

<style>

</style>
