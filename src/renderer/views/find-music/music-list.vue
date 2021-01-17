<template>
  <div class="music-list-field">
      <div class="top">
          <div class="img"></div>
          <div>
              <h3 class="category">精品歌单</h3>
              <p class="title">欧美 | 让Acappella净化你的耳朵吧</p>
              <p class="detail">用不一样的方式，演绎最打动人心的好音乐</p>
          </div>
      </div>
      <div class="list">
          <div class="list-header-field">
              <div>
                    <a href="">全部歌单 ></a>
              </div>
              <div>
                  <ul>
                      <li v-for="(item) in musciTypeList" :key="item.id">
                          <a @click.prevent="selectMusicType">{{item.name}}</a>
                      </li>
                  </ul>
              </div>
          </div>
          <div class="list-content">
              <ul>
                  <li class="music-item" v-for="(item) in musicList" :key="item.id">
                      <div class="img">

                      </div>
                      <p class="detail">{{item.name}}</p>
                  </li>
              </ul>
          </div>  
          <div class="pagination-field">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="300">
</el-pagination>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            musciTypeList:[
                {
                    id: 1,
                    name: "华语"
                },
                {
                    id: 2,
                    name: "流行"
                },
                {
                    id: 3,
                    name: "摇滚"
                },
                {
                    id: 4,
                    name: "民谣"
                },
                {
                    id: 5,
                    name: "电子"
                },
                {
                    id: 6,
                    name: "另类/独立"
                },
                {
                    id: 7,
                    name: "轻音乐"
                },
                {
                    id: 8,
                    name: "综艺"
                },
                {
                    id: 9,
                    name: "影视原声"
                },
                {
                    id: 10,
                    name: "ACG"
                },
            ],
            musicList: [
                {
                    id: 1,
                    name: "冲破黑暗，对着迎面的阳光说声嗨",
                    img: ""
                },
                {
                    id: 2,
                    name: "冲破黑暗，对着迎面的阳光说声嗨",
                    img: ""
                },
                {
                    id: 3,
                    name: "韩 语 女 声 ｜元 气少 女 魔 法 书",
                    img: ""
                },
                {
                    id: 4,
                    name: "特立独行 | 我们在屋顶上讨论云的形状",
                    img: ""
                },
                {
                    id: 5,
                    name: "周末宅家必备：慵懒午后降躁指南",
                    img: ""
                },
                {
                    id: 6,
                    name: "Happy牛year你最牛",
                    img: ""
                },
                {
                    id: 7,
                    name: "纯音乐｜温柔治愈",
                    img: ""
                },
                {
                    id: 8,
                    name: "还是喜欢百事可乐",
                    img: ""
                },
                {
                    id: 9,
                    name: "闲暇时光|音乐是送给自己最好的礼物",
                    img: ""
                },

                {
                    id: 10,
                    name: "『纯音』你会因为一个梦而喜欢上一个人吗",
                    img: ""
                },
                {
                    id: 11,
                    name: "妳 和 我 在夕 陽 下奔 跑",
                    img: ""
                },
                {
                    id: 12,
                    name: "明知这是一场意外",
                    img: ""
                },
                {
                    id: 13,
                    name: "和对象一起听的歌",
                    img: ""
                },
                {
                    id: 14,
                    name: "刘大壮",
                    img: ""
                },
                {
                    id: 15,
                    name: "刘大壮/是你的垚/王泽科/王巨星/王小帅",
                    img: ""
                },
                {
                    id: 16,
                    name: "寒来暑往 秋收冬藏 我们来日方长",
                    img: ""
                },
                {
                    id: 17,
                    name: "「纯音乐」温馨美好，涤荡心扉的旋律",
                    img: ""
                },
                {
                    id: 18,
                    name: "做我的公主吧 我把皇冠给你",
                    img: ""
                },


                {
                    id: 19,
                    name: "想你的雨夜车窗起雾l写作业用",
                    img: ""
                },
                {
                    id: 20,
                    name: "所有的好运气，都在这个秋天如约而至",
                    img: ""
                },
                {
                    id: 21,
                    name: "你和别人炫耀过他吗",
                    img: ""
                },
                {
                    id: 22,
                    name: "最怕温柔与爱抵不过新鲜感",
                    img: ""
                },
                {
                    id: 23,
                    name: "我总不能阻止你离开我吧",
                    img: ""
                },
                {
                    id: 24,
                    name: "月光所照 皆是故乡",
                    img: ""
                },
                {
                    id: 25,
                    name: "感同身受这个词本来就不适合聆听者.",
                    img: ""
                },
                {
                    id: 26,
                    name: "到点了，该来这里听歌了。",
                    img: ""
                },
                {
                    id: 27,
                    name: "没来得及说抱歉",
                    img: ""
                },


                {
                    id: 28,
                    name: "Chris吴大友(今天也好鬼痛)",
                    img: ""
                },
                {
                    id: 29,
                    name: "第31届金曲奖得奖名单",
                    img: ""
                },
                {
                    id: 30,
                    name: "适合比喜欢更重要",
                    img: ""
                },
                {
                    id: 31,
                    name: "网易云精选伤感歌单",
                    img: ""
                },
                {
                    id: 32,
                    name: "治愈|慢慢变好，我是你也是",
                    img: ""
                }
            ]
        }
    },
    method: {
        selectMusicType(){

        }
    }
}
</script>
<style>
.el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #EC4141;
}


 
</style>
<style lang="scss" scoped>
@import "./music-list.scss"
</style>