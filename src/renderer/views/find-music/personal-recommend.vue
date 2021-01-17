!<template>
  <div class="personal-recommend-field">
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
    <div class="recommend-mv-field">
        <h3>推荐MV ></h3>
        <ul>
            <li class="recommend-item" v-for="(item) in recommendMvList" :key="item.id">
                <div class="img">
                    <!-- <img src="" alt=""> -->
                </div>
                <p class="detail">{{item.name}}</p>
                <p class="username">{{item.username}}</p>
            </li>
        </ul>
    </div>
    <div class="single-visit-field">
        <h3>独家放送 ></h3>
        <ul>
            <li class="recommend-item" v-for="(item) in visitList" :key="item.id">
                <div class="img">
                    <!-- <img src="" alt=""> -->
                </div>
                <p class="detail">{{item.name}}</p>
            </li>
        </ul>
    </div>

    <div class="latest-music-field">
        <h3>最新音乐 ></h3>
        <ul>
            <li class="recommend-item" v-for="(item) in latestMusicList" :key="item.id">
                <div class="img">
                    <!-- <img src="" alt=""> -->
                </div>
                <div>    
                    <p class="detail">{{item.name}}</p>
                    <p class="username">{{item.username}}</p>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
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
     ],
     recommendMvList: [
         {
             id: 1,
             name: "愿你风尘仆仆",
             username: "伊扬",
             img: ""
         },
         {
             id: 2,
             name: "MADKID ONE-NAN CONCERT -REBOOT-限时回放",
             username: "MADKID",
             img: ""
         },
         {
             id: 3,
             name: "你也曾是被人的光",
             username: "妖痴",
             img: ""
         }
     ],
     visitList:[
         {
             id: 1,
             name: "超级面对面 第230期 辣目洋子：我为什么要撕掉网红标签？",
             img: ""
         },
         {
             id: 2,
             name: "超级面对面 第229期 陈奕迅：我是书上一只懒懒的豹",
             img: ""
         },
         {
             id: 3,
             name: "音乐好朋友3 EP07告五人&沈以城 最终篇之告白派对 好想大声说爱你",
             img: ""
         }
     ],
     latestMusicList: [
         {
             id: 1,
             name: "34+35(Remix)",
             username: "Anana Grande/Doja/Mega thee Stallion",
             img: ""
         },
         {
             id: 2,
             name: "关于爱上自己这件事",
             username: "Yamy郭颖",
             img: ""
         },
         {
             id: 3,
             name: "生而为见",
             username: "赵珂",
             img: ""
         },
         {
             id: 4,
             name: "De Una Vez",
             username: "Selena Gomez",
             img: ""
         },
         {
             id: 5,
             name: "为什么",
             username: "马思唯",
             img: ""
         },
         {
             id: 6,
             name: "醉墨(影视剧《领域》主题曲)",
             username: "范丞丞",
             img: ""
         },
         {
             id: 7,
             name: "红黑",
             username: "蔡文静",
             img: ""
         },
         {
             id: 8,
             name: "Chemtrails Over The Country Club",
             username: "Lana Del Rey",
             img: ""
         },
         {
             id: 9,
             name: "波特兰灯塔",
             username: "张紫宁",
             img: ""
         },
         {
             id: 10,
             name: "火花(HWAA)",
             username: "(G)IDLE",
             img: ""
         },
         {
             id: 11,
             name: "改口茶(电视剧《陪你漫步这个世界》)",
             username: "品冠",
             img: ""
         },
         {
             id: 12,
             name: "Flames(feat. Avil Lavigne)",
             username: "Mod Sun/Avril Lavigne",
             img: ""
         }
     ]  
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./personal-recommend.scss";

.el-carousel__item {
    background-color: #99a9bf;
    border-radius: 6px;    
}

.el-carousel__item--card {
    width: 50%;
}

</style>