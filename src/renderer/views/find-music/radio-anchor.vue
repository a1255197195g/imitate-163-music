<template>
  <div class="radio-anchor-field">
    <div class="carousel-field">
        <el-carousel :interval="4000" type="card" height="180px">
            <el-carousel-item v-for="item in 6" :key="item">
            </el-carousel-item>
         </el-carousel>
    </div>
    <div class="menu-button-field ">
        <ul>
            <li class="menu-button-item" v-for="item in menuButtonList" :key="item.id">
                <div class="img">
                    <div class="iconfont"  :style=" {fontSize: item.fontSize? item.fontSize: '16px' }" :class="item.iconfont"></div>
                </div>
                <p class="name">{{item.name}}</p>
            </li>
        </ul>
    </div>
    <div class="listen-list-field radio-item">
        <h3>听听 ></h3>
        <ul >
            <li class="listen-list-item list-item" v-for="item in listenList" :key="item.id">
                <div class="img"></div>
                <p class="name">{{item.name}}</p>
                <p class="username">{{item.username}}</p>    
            </li>
        </ul>
    </div>
    <div class="character-recommend-field radio-item">
        <h3> 电台个性推荐 ></h3>
        <ul >
            <li class="character-recommend-item list-item" v-for="item in recommendList" :key="item.id">
                 <div class="img">
                      <p class="username">
                         {{item.username}}
                     </p>
                 </div>
                <p class="name">{{item.name}}</p>
            </li>
        </ul>
    </div>
    <div class="create-imitate-field radio-item">
        <h3>创作翻唱 ></h3>
        <ul >
            <li class="create-imitate-item list-item" v-for="item in createImitateList" :key="item.id">
                 <div class="img">
                     <p class="username">
                         {{item.username}}
                     </p>
                 </div>
                <p class="name">{{item.name}}</p>
            </li>
        </ul>
    </div>
    <div class="voice-theatre-field radio-item">
        <h3>声之剧场 ></h3>
        <ul >
            <li class="voice-theatre-item list-item" v-for="item in createImitateList" :key="item.id">
                 <div class="img">
                     <p class="username">
                         {{item.username}}
                     </p>
                 </div>
                <p class="name">{{item.name}}</p>
            </li>
        </ul>
    </div>
    <div class="music-story-field radio-item">
        <h3>音乐故事 ></h3>
        <ul >
            <li class="music-story-item list-item" v-for="item in createImitateList" :key="item.id">
                 <div class="img">
                     <p class="username">
                         {{item.username}}
                     </p>
                 </div>
                <p class="name">{{item.name}}</p>
                   <p class="username">
                         {{item.username}}
                     </p>
            </li>
        </ul>
    </div>
    <div class="emotion-fm-field radio-item">
        <h3>情感调频 ></h3>
        <ul >
            <li class="emotion-fm-item list-item" v-for="item in createImitateList" :key="item.id">
                 <div class="img">
                     <p class="username">
                         {{item.username}}
                     </p>
                 </div>
                <p class="name">{{item.name}}</p>
            </li>
        </ul>
    </div>
    <div class="voice-lover-field radio-item">
        <h3>声音恋人 ></h3>
        <ul>
            <li class="voice-lover list-item" v-for="item in createImitateList" :key="item.id">
                 <div class="img">
                     <p class="username">
                         {{item.username}}
                     </p>
                 </div>
                <p class="name">{{item.name}}</p>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            menuButtonList: [
                {
                    id: 7,
                    name: "排行榜",
                    iconfont: "icon-paixing"
                },
                {
                    id: 8,
                    name: "情感调频",
                    iconfont: "icon-shuimianmoshi-02",
                    fontSize: "28px"
                },
                {
                    id: 9,
                    name: "音乐故事",
                    iconfont: "icon-yinle1",
                
                },
                {
                    id: 10,
                    name: "声音恋人",
                    iconfont: "icon-qingganganqing"
                },
                {
                    id: 11,
                    name: "创作翻唱",
                    iconfont: "icon-huatong"
                },
                {
                    id: 12,
                    name: "声之剧场",
                    iconfont: "icon-dianying2"
                },
                {
                    id: 13,
                    name: "脱口秀",
                    iconfont: "icon-luyin"
                },
                {
                    id: 14,
                    name: "侃侃而谈",
                    iconfont: "icon-huatong1"
                },

                {
                    id: 1,
                    name: "电音趴",
                    iconfont: "icon-yueliang1"
                },
                {
                    id: 2,
                    name: "助眠解压",
                    iconfont: "icon-shuimian"
                },
                {
                    id: 3,
                    name: "你好爱豆",
                    iconfont: "icon-yonghu"
                },
                {
                    id: 4,
                    name: "铃声",
                    iconfont: "icon-lingsheng"
                },
                {
                    id: 5,
                    name: "其他",
                    iconfont: "icon-lingsheng"
                },
                {
                    id: 6,
                    name: "我要做主播",
                    iconfont: "icon-yiwen"
                },
            ],
            listenList: [
                {
                    id: 1,
                    name: "新主播 求守护",
                    username: "狐喵",
                    img: ""
                },
                {
                    id:2,
                    name: "背景本人嗲妹音",
                    username: "乔酱Queen",
                    img: "",
                },
                {
                    id:3,
                    name: "甜美御音 怀旧经典",
                    username: "婕妮_Jennie",
                    img: "",
                },
                {
                    id:4,
                    name: "最迷人的反派角色",
                    username: "未卿",
                    img: "",
                },
                {
                    id:5,
                    name: "我是个唱播啊",
                    username: "囧囧丸",
                    img: "",
                }
            ],
            recommendList: [
                {
                    id: 1,
                    name: "不一样的味道，确实一样的感觉",
                    username: "张家旺",
                    img: ""
                },
                {
                    id: 2,
                    name: "喜欢唱歌的一个女孩",
                    username: "火羊瞌睡了",
                    img: ""
                },
                {
                    id: 3,
                    name: "拼音师混音单曲/BGM",
                    username: "听完整版请到我的歌单",
                    img: ""
                },
                {
                    id: 4,
                    name: "相关游戏:明日方舟",
                    username: "《明日方舟》游戏",
                    img: ""
                },
                {
                    id: 5,
                    name: "元气少女唱好听的歌送给你",
                    username: "网瘾少女叽",
                    img: ""
                }
            ],
            createImitateList: [
  {
                    id: 1,
                    name: "不一样的味道，确实一样的感觉",
                    username: "张家旺",
                    img: ""
                },
                {
                    id: 2,
                    name: "喜欢唱歌的一个女孩",
                    username: "火羊瞌睡了",
                    img: ""
                },
                {
                    id: 3,
                    name: "拼音师混音单曲/BGM",
                    username: "听完整版请到我的歌单",
                    img: ""
                },
                {
                    id: 4,
                    name: "相关游戏:明日方舟",
                    username: "《明日方舟》游戏",
                    img: ""
                },
                {
                    id: 5,
                    name: "元气少女唱好听的歌送给你",
                    username: "网瘾少女叽",
                    img: ""
                }
            ],
            voiceTheatreList: [
{
                    id: 1,
                    name: "不一样的味道，确实一样的感觉",
                    username: "张家旺",
                    img: ""
                },
                {
                    id: 2,
                    name: "喜欢唱歌的一个女孩",
                    username: "火羊瞌睡了",
                    img: ""
                },
                {
                    id: 3,
                    name: "拼音师混音单曲/BGM",
                    username: "听完整版请到我的歌单",
                    img: ""
                },
                {
                    id: 4,
                    name: "相关游戏:明日方舟",
                    username: "《明日方舟》游戏",
                    img: ""
                },
                {
                    id: 5,
                    name: "元气少女唱好听的歌送给你",
                    username: "网瘾少女叽",
                    img: ""
                }
            ],
            musicStoryList: [
{
                    id: 1,
                    name: "不一样的味道，确实一样的感觉",
                    username: "张家旺",
                    img: ""
                },
                {
                    id: 2,
                    name: "喜欢唱歌的一个女孩",
                    username: "火羊瞌睡了",
                    img: ""
                },
                {
                    id: 3,
                    name: "拼音师混音单曲/BGM",
                    username: "听完整版请到我的歌单",
                    img: ""
                },
                {
                    id: 4,
                    name: "相关游戏:明日方舟",
                    username: "《明日方舟》游戏",
                    img: ""
                },
                {
                    id: 5,
                    name: "元气少女唱好听的歌送给你",
                    username: "网瘾少女叽",
                    img: ""
                }
            ],
            emotionFmList: [
{
                    id: 1,
                    name: "不一样的味道，确实一样的感觉",
                    username: "张家旺",
                    img: ""
                },
                {
                    id: 2,
                    name: "喜欢唱歌的一个女孩",
                    username: "火羊瞌睡了",
                    img: ""
                },
                {
                    id: 3,
                    name: "拼音师混音单曲/BGM",
                    username: "听完整版请到我的歌单",
                    img: ""
                },
                {
                    id: 4,
                    name: "相关游戏:明日方舟",
                    username: "《明日方舟》游戏",
                    img: ""
                },
                {
                    id: 5,
                    name: "元气少女唱好听的歌送给你",
                    username: "网瘾少女叽",
                    img: ""
                }
            ],
            voiceLoverList: [
{
                    id: 1,
                    name: "不一样的味道，确实一样的感觉",
                    username: "张家旺",
                    img: ""
                },
                {
                    id: 2,
                    name: "喜欢唱歌的一个女孩",
                    username: "火羊瞌睡了",
                    img: ""
                },
                {
                    id: 3,
                    name: "拼音师混音单曲/BGM",
                    username: "听完整版请到我的歌单",
                    img: ""
                },
                {
                    id: 4,
                    name: "相关游戏:明日方舟",
                    username: "《明日方舟》游戏",
                    img: ""
                },
                {
                    id: 5,
                    name: "元气少女唱好听的歌送给你",
                    username: "网瘾少女叽",
                    img: ""
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./radio-anchor.scss";
.el-carousel__item {
    background-color: #99a9bf;
    border-radius: 6px;    
}

.el-carousel__item--card {
    width: 50%;
}

</style>