<template>
  <div>
    <el-container style="margin-top:60px;margin-left:5%">
      <el-aside width="60%">
        <aplayer :autoplay="false"
          :music="{
            title: '追梦赤子心',
            artist: 'GALA',
            src: 'http://101.132.71.227/image/1525070888GALA - 追梦赤子心.mp3',
            pic: 'http://101.132.71.227/image/1525070940music.jpg'
          }"
          listMaxHeight="600px"
          :listFolded="show"
          :list="music"
          style="width:95%"
        />
      </el-aside>
      <el-main>
          <el-tabs type="border-card">
            <el-tab-pane label="音乐列表">
              <music-list :musicList="music"></music-list>
            </el-tab-pane>
            <el-tab-pane label="音乐上传">
              <amusic :shopId="shop[0].id" @addMusic="addNewMusic"></amusic>
            </el-tab-pane>
            <el-tab-pane label="音乐库添加">
              <moremusic></moremusic>
            </el-tab-pane>
          </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Amusic from './Amusic';
import Moremusic from "./moreMusic";
import Aplayer from 'vue-aplayer';
import MusicList from "./musicList";
export default {
  data () {
    return {
      music:[],
      shop:[],
      first:[],
      show:true
    }
  },
  methods:{
    addNewMusic(data){
      this.music.splice(this.music.length,0,data);
    }
  },
  created(){
    this.shop = JSON.parse(sessionStorage.getItem('shopInfo'));
    this.axios.get('/api/shopInfo/getMusicList/'+this.shop[0].id).then((res) => {
      if(res.data.status=="success"){
        console.log(res.data.response.length)
        for(var i=0;i<res.data.response.length;i++){
          var data = res.data.response[i];
          this.music.splice(this.music.length,0,{'title':data.name,'artist':data.artist,'src':data.path,'pic':data.cover})
        }
      }else{
        this.music.splice(0,0,{
            title: '追梦赤子心',
            artist: 'GALA',
            src: 'http://101.132.71.227/image/1525070888GALA - 追梦赤子心.mp3',
            pic: 'http://101.132.71.227/image/1525070940music.jpg'
          });
      }
    }).catch((error) => {
      this.$notify.error({
        title: '错误',
        message: '网络问题，请确认网络是否连接'
      });
    })
  },
  components: {
    Aplayer,
    Amusic,
    Moremusic,
    MusicList
  }
}
</script>

<style>

</style>
