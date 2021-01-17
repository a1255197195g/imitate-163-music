<template>
    <div class="music-rank-field">
        <div class="authority-rank-field">
            <h3>官方榜</h3>
            <div class="grow-rank-field">
                <!-- 飙升榜 -->
                <div class="img">
                    <p >飙升榜</p>
                    <p class="date">01月16号更新</p>
                </div>
                <div class="content">
                    <ul>
                        <li class="rank-item" v-for="(item,index)  in growRankList" :key="item.id">
                            <div>
                                <span :class="index<3?'rank-top':''" class="rank">{{item.rank}}</span>
                                <span class="rate">{{item.rate}}</span>
                                <span class="name">{{item.name}}</span>
                            </div>
                            <div>
                                <span class="username">{{item.username}}</span>
                            </div>
                        </li>
                    </ul>
                    <div class="look-all"><a @click.prevent="toAll(0)">查看全部 ></a></div>
                </div>
            </div>
            <div class="new-rank-field">
                <!-- 新歌榜 -->
                <div class="img">
                    <p >新歌榜</p>
                    <p class="date">01月16号更新</p>
                </div>
                <div class="content">
                    <ul>
                        <li class="rank-item" v-for="(item,index)  in newRankList" :key="item.id">
                            <div>
                                <span :class="index<3?'rank-top':''" class="rank">{{item.rank}}</span>
                                <span :class="isGroup(item.isGroup)"  class="group iconfont"></span>
                                <span class="name">{{item.name}}</span>
                            </div>
                            <div>
                                <span class="username">{{item.username}}</span>
                            </div>
                        </li>
                    </ul>
                   <div class="look-all"><a @click.prevent="toAll(1)">查看全部 ></a></div>
                </div>
            </div>
            <div class="create-rank-field">
                <!-- 原创榜 -->
                <div class="img">
                    <p >原创榜</p>
                    <p class="date">01月16号更新</p>
                </div>
                <div class="content">
                    <ul>
                        <li class="rank-item" v-for="(item,index)  in createRankList" :key="item.id">
                            <div>
                                <span :class="index<3?'rank-top':''" class="rank">{{item.rank}}</span>
                                <span class="new">{{item.isNew ? 'new' : ''}}</span>
                                <span class="name">{{item.name}}</span>
                            </div>
                            <div>
                                <span class="username">{{item.username}}</span>
                            </div>
                        </li>
                    </ul>
                    <div class="look-all"><a @click.prevent="toAll(2)">查看全部 ></a></div>
                </div>
            </div>
            <div class="hot-rank-field">
                <!-- 热歌榜 -->
                <div class="img">
                    <p >热歌榜</p>
                    <p class="date">01月16号更新</p>
                </div>
                <div class="content">
                    <ul>
                        <li class="rank-item" v-for="(item,index)  in hotRankList" :key="item.id">
                            <div>
                                <span :class="index<3?'rank-top':''" class="rank">{{item.rank}}</span>
                                <span :class="isGroup(item.isGroup)"  class="group iconfont"></span>
                                <span class="name">{{item.name}}</span>
                            </div>
                            <div>
                                <span class="username">{{item.username}}</span>
                            </div>
                        </li>
                    </ul>
                    <div class="look-all"><a @click.prevent="toAll(3)">查看全部 ></a></div>
                </div>
            </div>
            <div class="singer-rank-field">
                <!-- 歌手榜 -->
                <div class="img">
                    <p >歌手榜</p>
                    <p class="date">01月16号更新</p>
                </div>
                <div class="content">
                    <ul>
                        <li class="rank-item" v-for="(item,index)  in singerRankList" :key="item.id">
                            <div>
                                <span :class="index<3?'rank-top':''" class="rank">{{item.rank}}</span>
                                <span :class="isGroup(item.isGroup)"  class="group iconfont"></span>
                                <span class="name">{{item.username}}</span>
                            </div>
                        </li>
                    </ul>
                    <div class="look-all"><a @click.prevent="toAll(4)">查看全部 ></a></div>
                </div>
            </div>
        </div>
        <div class="global-rank-field">
            <h3>全球榜</h3>
            <div>
                <ul>
                    <li class="global-rank-item" v-for="(item) in globalRankList" :key="item.id">
                        <div :class="item.name? 'img':'blank'" >
                            <p class="title" v-if="item.name">
                                {{item.title}}
                            </p>
                        </div>
                        <p class="name">{{item.name}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            growRankList: [
                {
                    id: 1,
                    name:"我在等",
                    rate: "272%",
                    username: "林包馨",
                    rank: 1,
                },
                {
                    id: 2,
                    name:"四季予你",
                    rate: "214%",
                    username: "程响",
                    rank: 2,
                },
                {
                    id: 3,
                    name:"34+35(Remix)",
                    rate: "202%",
                    username: "Aruaba Grande/Doja Cat/Megan thee Stallion",
                    rank: 3,
                },
                {
                    id: 4,
                    name:"错位时空",
                    rate: "188%",
                    username: "艾辰",
                    rank: 4,
                },
                {
                    id: 5,
                    name:"踏山河",
                    rate: "164%",
                    username: "是七叔呢",
                    rank: 5,
                }
            ],
            newRankList: [
                {
                    id: 1,
                    name:"四季与你",
                    isGroup: 0, //未上涨为下跌
                    username: "程响",
                    rank: 1,
                },
                {
                    id: 2,
                    name:"关机又关机",
                    isGroup: 0,
                    username: "YangYang",
                    rank: 2,
                },
                {
                    id: 3,
                    name:"错位时空",
                    isGroup: 1, //上涨
                    username: "艾辰",
                    rank: 3,
                },
                {
                    id: 4,
                    name:"红黑",
                    isGroup: 0,
                    username: "蔡文静",
                    rank: 4,
                },
                {
                    id: 5,
                    name:"我在等",
                    isGroup: -1, //下降
                    username: "林宝鑫",
                    rank: 5,
                }
            ],
            createRankList: [
                {
                    id: 1,
                    name:"山水有幸逢星城",
                    isNew: 1, //未上涨为下跌
                    username: "国风堂/付青",
                    rank: 1,
                },
                {
                    id: 2,
                    name:"关于爱上自己这件事",
                    isNew: 1,
                    username: "Yamy郭颖",
                    rank: 2,
                },
                {
                    id: 3,
                    name:"玫瑰与泪",
                    isNew: 1,
                    username: "银临",
                    rank: 3,
                },
                {
                    id: 4,
                    name:"试着忘记(我试着一点点一点点忘记)",
                    isNew: 1,
                    username: "卢卢快闭嘴/巴音汗",
                    rank: 4,
                },
                {
                    id: 5,
                    name:"悔过",
                    isNew: 0,
                    username: "王二浪",
                    rank: 5,
                }
            ],
            hotRankList: [
                {
                    id: 1,
                    name:"四季与你",
                    isGroup: 0,
                    isNew: 0, //未上涨为下跌
                    username: "程响",
                    rank: 1,
                },
                {
                    id: 2,
                    name:"关机又关机",
                    isNew: 1,
                    isGroup: 1,
                    username: "YangYang",
                    rank: 2,
                },
                {
                    id: 3,
                    name:"踏山河",
                    isNew: 0,
                    isGroup: -1,
                    username: "是七叔呢",
                    rank: 3,
                },
                {
                    
                    id: 4,
                    name:"芒",
                    isNew: 0,
                    isGroup: -1,
                    username: "李润祺",
                    rank: 4,
                },
                {
                    
                    id: 5,
                    name:"花间酒",
                    isNew: 0,
                    isGroup: 1,
                    username: "澄海伯伯/超级橘子Orange",
                    rank: 5,
                }
            ],
            singerRankList:[
                {
                    id: 1,
                    isGroup: 0, //未上涨为下跌
                    username: "薛之谦",
                    rank: 1,
                },
                {
                    id: 2,
                    isGroup: 0, //未上涨为下跌
                    username: "林俊杰",
                    rank: 2,
                },
                {
                    id: 3,
                    isGroup: 0, //未上涨为下跌
                    username: "隔壁老樊",
                    rank: 3,
                },
                {
                    id: 4,
                    isGroup: 0, //未上涨为下跌
                    username: "陈奕迅",
                    rank: 4,
                },
                {
                    id: 5,
                    isGroup: 0, //未上涨为下跌
                    username: "华晨宇",
                    rank: 5,
                }
            ],

            globalRankList: [
                {
                    id: 1,
                    name: "黑胶VIP爱听榜",
                    title: "黑胶VIP爱听榜",
                    img: ""
                },
                {
                    id: 2,
                    name: "云音乐说唱榜",
                    title: "说唱榜",
                    img: ""
                },
                {
                    id: 3,
                    name: "云音乐古典榜",
                    title: "古典榜",
                    img: ""
                },
                {
                    id: 4,
                    name: "云音乐电音榜",
                    title: "电音榜",
                    img: ""
                },
                {
                    id: 5,
                    name: "云音乐抖音榜",
                    title: "抖音榜",
                    img: ""
                },
                {
                    id: 6,
                    name: "云音乐ACG榜",
                    title: "ACG榜",
                    img: ""
                },
                {
                    id: 7,
                    name: "云音乐韩语榜",
                    title: "韩语榜",
                    img: ""
                },
                {
                    id: 8,
                    name: "云音乐国电榜",
                    title: "国电榜",
                    img: ""
                },
                {
                    id: 9,
                    name: "UK排行榜周榜",
                    title: "UK榜",
                    img: ""
                },
                {
                    id: 10,
                    name: "美国Billboard榜",
                    title: "billboard",
                    img: ""
                },

                {
                    id: 11,
                    name: "Beatport全球电子舞曲榜",
                    title: "beatport",
                    img: ""
                },
                {
                    id: 12,
                    name: "KTV麦榜",
                    title: "KTV麦榜",
                    img: ""
                },
                {
                    id: 13,
                    name: "iTunes榜",
                    title: "iTunes",
                    img: ""
                },
                {
                    id: 14,
                    name: "日本Oricon榜",
                    title: "Oricon",
                    img: ""
                },
                {
                    id: 15,
                    name: "云音乐欧美热歌榜",
                    title: "欧美热歌榜",
                    img: ""
                },
                {
                    id: 16,
                    name: "云音乐欧美新歌榜",
                    title: "欧美新歌榜",
                    img: ""
                },
                {
                    id: 17,
                    name: "法国 NRJ Vos Hits 周榜",
                    title: "HRJ",
                    img: ""
                },
                {
                    id: 18,
                    name: "云音乐ACG动画榜",
                    title: "ACG动画",
                    img: ""
                },
                {
                    id: 19,
                    name: "云音乐ACG游戏榜",
                    title: "ACG游戏",
                    img: ""
                },
                {
                    id: 20,
                    name: "云音乐ACG VOCALOID榜",
                    title: "VOCAKOID",
                    img: ""
                },
                {
                    id: 21,
                    name: "中国新乡村音乐排行",
                    title: "乡村音乐",
                    img: ""
                },
                {
                    id: 22,
                    name: "云音乐日语榜",
                    title: "日语",
                    img: ""
                },
                {
                    id: 23,
                    name: "云音乐摇滚榜",
                    title: "摇滚",
                    img: ""
                },
                {
                    id: 24,
                    name: "云音乐古风榜",
                    title: "古风",
                    img: ""
                },
                {
                    id: 25,
                    name: "潜力爆款榜",
                    title: "潜力爆款",
                    img: ""
                },
                {
                    id: 26,
                    name: "云音乐民谣榜",
                    title: "民谣",
                    img: ""
                },
                {
                    id: 27,
                    name: "",
                    title: "",
                    img: ""
                },
                {
                    id: 28,
                    name: "",
                    title: "",
                    img: ""
                },
                {
                    id: 29,
                    name: "",
                    title: "",
                    img: ""
                },
                {
                    id: 30,
                    name: "",
                    title: "",
                    img: ""
                },
            ]
        }
    },
    methods: {
        isGroup(  isGroup, isNew ){
            // 表示是新歌 
            if( isNew !== undefined && isNew ){
                return "new"    
            }
            if( isGroup >0 ){
                return "icon-arrowTop asc"
            }else if( isGroup < 0 ){
                return "icon-arrowBottom desc"
            }
            return "icon-jianhaocu"
        },
        toAll(index){

        }
    }
}
</script>

<style lang="scss" scoped>
@import "./music-rank.scss"
</style>