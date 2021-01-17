<template>
  <div class="video-list-field">
    <div class="video-nav-list">
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
    data(){
        return {
         navList: [
            {
                id: 1,
                name: "视频",
                isSelect: true,
                path: "/videoList/video"
            },
            {
                id: 2,
                name: "MV",
                isSelect: false,
                path: "/videoList/mv"
            }]
        }
        
    },
    methods: {
        changeNav(item){
            this.navList.forEach( item=>{
                item.isSelect = false
            })
            item.isSelect = true;
            this.$router.push(item.path)
    ``}
    }
}
</script>

<style lang="scss" scoped>
@import "./video-list.scss"
</style>