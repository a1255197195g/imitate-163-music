<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: in hengqi by mengze 
 * @Date: 2021-01-13 18:57:24
 * @LastEditors: in hengqi by mengze
 * @LastEditTime: 2021-01-15 17:41:55
-->
<template>
<div class='home-field'>
    <div class="header-field">
        <div class="header-left">
            <h1>网易云音乐</h1>
        </div>
        <div class="header-right">
            <a class="iconfont icon-zuixiaohua" @click="startMiniWindow"></a>
            <a class="iconfont icon-minimum" @click="startMinWindow"></a>
            <a class="iconfont icon-zuidahua" @click="startMaxWindow"></a>
            <a class="iconfont icon-guanbi" @click="startClose"></a>
        </div>
    </div>
    <div class="main">
        <div class="aside-menu">
            <div class="part">
                <h2>发现音乐</h2>
                <ul>
                    <li>视频</li>
                    <li>朋友</li>
                    <li>直播</li>
                    <li>私人FM</li>
                </ul>
            </div>
            <div class="part my-music">
                <h3>我的音乐</h3>
                <ul>
                    <li>本地音乐</li>
                    <li>下载管理</li>
                    <li>我的音乐云盘</li>
                    <li>我的电台</li>
                    <li>我的收藏</li>
                </ul>
            </div>
            <div class="part my-music-list">
                <h3>创建的歌单</h3>
                <ul>
                    <li>我喜欢的音乐</li>
                    <li>1111111</li>
                </ul>
            </div>
            <div class="part my-music-collect">
                <h3>收藏的歌单</h3>
                <ul>
                    <li>歌单</li>
                    <li>台湾-张宇</li>
                </ul>
            </div>
        </div>
        <div class="main-content">
            <router-view></router-view>
        </div>
    </div>
</div>
</template>
<script>
const {ipcRenderer: ipc} = require('electron');
export default {
    name : '', 
    data(){
        return {
        }
    },
    methods: {
        /**
         * 开启小窗口模式
         */
        startMiniWindow(){
            ipc.send('startMiniWindow');
        },

        /**
         * 开启最小化模式
         */
        startMinWindow(){
            ipc.send('startMinWindow');
        },
        
        /**
         * 开启最大化模式
         */
        startMaxWindow(){
            ipc.send("startMaxWindow")
        },

        /***
         * 关闭应用
         */
        startClose(){
            ipc.send("startClose")
        }
    }
};
</script>
<style lang='scss' scoped>
@import "./main.less";

/*新加入隐藏滚动条效果*/
.scroll-bar::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 4px;
}
.scroll-bar::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 5px;
}

::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 6px;
  border-radius: 4px;
}
:hover::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 5px;
  background: linear-gradient(to right, #eee, #ddd, #eee);
}
:hover::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  /* // -webkit-box-shadow: inset 0 0 5px rgba(240, 240, 240, 1); */
  border-radius: 0;
  background: transparent;
}

::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  /* // -webkit-box-shadow: inset 0 0 5px rgba(240, 240, 240, 1); */
  border-radius: 0;
  background: transparent;
}
</style>