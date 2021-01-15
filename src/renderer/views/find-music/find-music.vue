<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: in hengqi by mengze 
 * @Date: 2021-01-15 17:27:39
 * @LastEditors: in hengqi by mengze
 * @LastEditTime: 2021-01-15 18:42:42
-->
<template>
<div class='find-music-field'>
    <div class="find-music-nav-list">
        <ul>
            <li v-for="(item, index) in navList" :key="item.id" :class="item.isSelect?'selected': ''">
                <a @click.prevent="changeNav(item, index)">{{item.name}}</a>
            </li> 
        </ul>
    </div>
    <div class="carousel-field">
        <el-carousel :interval="4000" type="card" height="180px">
            <el-carousel-item v-for="item in 6" :key="item">
            </el-carousel-item>
         </el-carousel>
    </div>
    <div class="recommend-list-field">
        <h3>推荐歌单 ></h3>
        <ul>
            <li class="recommend-item" v-for="(item) in recommendList" :key="item.id">
                <div class="img">
                    <!-- <img src="" alt=""> -->
                </div>
                <p class="detail">{{item.name}}</p>
            </li>
        </ul>
    </div>
</div>
</template>
<script>

export default {
name : '', 
data(){
 return {
     navList: [
         {
             id: 1,
             name: "个性推荐",
             isSelect: true
         },
         {
             id: 2,
             name: "歌单",
             isSelect: false
         },
         {
             id: 3,
             name: "主播电台",
             isSelect: false
         },
         {
             id: 4,
             name: "排行榜",
             isSelect: false
         },
         {
             id: 5,
             name: "歌手",
             isSelect: false
         },
         {
             id: 6,
             name: "最新音乐",
             isSelect: false
         },
         
     ],
     recommendList: [
         {
             id: 1,
             name: "每日歌曲推荐",
             img: ""
         },
         {
             id: 2,
             name: "等雨停 等风止 等故事再开始",
             img: ""
         },
         {
             id: 3,
             name: "走新旋律叫醒你东面的耳朵 | 硬地原创123456",
             img: ""
         },
         {
             id: 4,
             name: "今天从《恨爱交加》听起 | 私人雷达",
             img: ""
         },
         {
             id: 5,
             name: "【永远Beyond 永远黄家驹】",
             img: ""
         },
         {
             id: 6,
             name: "时间有泪一香港十大作词人写尽时间酸甜苦辣",
             img: ""
         },
         {
             id: 7,
             name: "滚石香港黄金十年",
             img: ""
         },
         {
             id: 8,
             name: "【武侠影视金曲100首】每个人心中的武侠梦",
             img: ""
         },
         {
             id: 9,
             name: "网易云评论最多的粤语歌TOP50",
             img: ""
         },
         {
             id: 10,
             name: "真武侠，永不死。",
             img: ""
         }
     ]
}
},
methods: {
    changeNav(item){
        this.navList.forEach( item=>{
            item.isSelect = false
        })
        item.isSelect = true;
    }
}
};
</script>
<style lang='scss' scoped>
@import "./find-music.less";

.el-carousel__item {
    background-color: #99a9bf;
    border-radius: 6px;    
}

.el-carousel__item--card {
    width: 50%;
}

</style>