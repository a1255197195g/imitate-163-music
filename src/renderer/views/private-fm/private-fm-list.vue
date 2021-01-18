<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: in hengqi by mengze 
 * @Date: 2021-01-18 12:54:03
 * @LastEditors: in hengqi by mengze
 * @LastEditTime: 2021-01-18 21:24:12
-->
<template>
  <div class="private-fm-field">
    private-fm-field

    <p><span style="display:inline-block;width:300px">上一首：{{prevMusic.name}}</span>  <a @click.prevent="prev">听上一首</a></p>
    <p><span style="display:inline-block;width:300px">当前： {{curMusic.name}}</span>    <a @click.prevent="start">停止</a></p>
    <p><span style="display:inline-block;width:300px">下一首: {{nextMusic.name}}</span>  <a @click.prevent="next">听下一首</a></p>
    
    <audio
      ref="audio"
      id="audio"
      :src="curUrl" 
      >
    </audio>
  </div>
</template>

<script>
export default {
   data(){
     return {
       curIndex: -1,
       prevMusic: {},
       curMusic: {},
       nextMusic: {},
       curUrl: "",
       isPlaying: false,
       
       fmList: []
     }
   },
   computed: {
      audio() {
        return this.$refs.audio;
      }
   },
   mounted(){
     this.getNext() 
     this.audio.loop = false;
     this.audio.addEventListener("ended", e => {
      this.curUrl = this.fmList[this.curIndex++];
      this.audio.pause();
      this.resetAudio({});
    });
    this.audio.addEventListener("timeupdate", e => {
      // let percentage = this.audio.currentTime / this.audio.duration;
      // //加载数据之后第一次触发，会是一个NaN导致报错
      // if (!isNaN(percentage)) {
      //   this.curAudio.percentage =
      //     (this.audio.currentTime / this.audio.duration) * 100;
      // }
    });

    /***
     * 每次切换播放源的时候触发
     */
    this.audio.addEventListener("durationchange", e => {
      // this.curAudio.percentage = 0;
    });

    this.audio.addEventListener("canplay", () => {
      console.log("加载完毕....");
      this.audio.loop = undefined;
      this.audio.play();
    });

    audio.addEventListener("error", () =>{   //请求数据时遇到错误
        this.curIndex++;
    });
   },
   watch: {
     curIndex(newValue){
       //获取当前音乐的url
       this.getUrl(newValue);
       if( this.curIndex >=0 && this.curIndex < this.fmList.length ){
          this.curMusic = this.fmList[this.curIndex];
        }
        if( this.curIndex >=0 && this.curIndex < this.fmList.length-1 ){
          this.nextMusic = this.fmList[this.curIndex+1];
        }
        if( this.curIndex > 0 ){
          this.prevMusic = this.fmList[this.curIndex-1];

       //开始获取新的三首歌
        this.isPlaying = false;
       if( newValue > this.fmList.length-2 ){
          this.getNext();
       }
       
     }
   }}
   ,
   methods: {
     prev(){
       if( this.curIndex > 0 ){
         this.curIndex--;
       }
     },
     next(){
       if( this.curIndex < this.fmList.length-1 ){
          this.curIndex++;
       }
     },
     start(){
       if( this.audio.paused ){
         this.audio.play()
       }else {
          this.audio.pause();
       }
     },
     getUrl(index){
       let item = this.fmList[index];
       if( !item ){
         this.getNext();
         return;
       }
        this.$http.get(`http://39.108.15.104/song/url?id=${item.id}`).then( (res={}) => {
          //获取到音乐的URL文件
          let data = res.data;
          if(data.code === 200){
              data = data.data || [];
              let item = data[0];
              if( item ){
                this.curUrl = item.url;
                //更新歌曲要显示的信息
             }
          }
        }).catch( err=>{
          console.log(err)
        } )
     },
     
     getNext(){
       let date = new Date();
       this.$http.get( `http://39.108.15.104/personal_fm?timestamp1=${date}`).then( (res={})=>{
         let data = res.data;
         if( data.code === 200 ){
            this.fmList.push(...data.data)
            if( !this.isPlaying ){
                this.curIndex++;
                this.isPlaying = true;
            }
         }
       }).catch( err => {
         console.log("获取私人FM失败")
       })
     }
   }
}
</script>

<style>
a {
  cursor: pointer;
}

</style>