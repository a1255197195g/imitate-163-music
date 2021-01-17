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
    <router-view></router-view>
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
             isSelect: true,
             path: "/findMusic/personalRecommend"
         },
         {
             id: 2,
             name: "歌单",
             isSelect: false,
             path: "/findMusic/musicList"
         },
         {
             id: 3,
             name: "主播电台",
             isSelect: false,
             path: "/findMusic/radioAnchor"
         },
         {
             id: 4,
             name: "排行榜",
             isSelect: false,
             path: "/findMusic/musicRank"
         },
         {
             id: 5,
             name: "歌手",
             isSelect: false,
             path: "/findMusic/singer"
         },
         {
             id: 6,
             name: "最新音乐",
             isSelect: false,
             path: "/findMusic/latestMusic"
         },
         
     ]
}
},
methods: {
    changeNav(item){
        this.navList.forEach( item=>{
            item.isSelect = false
        })
        item.isSelect = true;
        this.$router.push(item.path)
    }
}
};
</script>
<style lang='scss' scoped>
@import "./find-music.scss";
</style>