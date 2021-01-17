<template>
  <div class="last-music-field">
      <div class="option-field">
          <div class="switch">
              <div class="switch-item" v-for="(item, index) in switchList"
               :key="item.id" :class="item.isSelect?'select':''">
                <a @click="toNav(item, index)">{{item.name}}</a>
               </div>
          </div>
      </div>
      <div v-if="navIndex === 0">
          <div class="category-field">
              <ul>
                  <li class="category-item" v-for="(item, index) in newMusicCategoryList" 
                  :key="item.id" >
                      <a  :class="item.isSelect?'select':''" @click.prevent="selectCategory(item, index)">{{item.name}}</a>
                  </li>
              </ul>
              <div class="play-like">
                  <a @click.prevent="playAll" class="play-all">播放全部</a>
                  <a @click.prevent="likeAll" class="like-all">收藏全部</a>
              </div>
          </div>
          <div class="music-list">
              <ul>
                  <li class="music-item" v-for="(item) in newMusicList" :key="item.id">
                      <div class="left-item">
                        <div class="order">{{(""+item.order).padStart(2,'0')}}</div>
                        <div class="img"></div>
                        <div class="name">{{item.name}}</div>
                      </div>
                      <div class="right-item">
                        <div class="username">{{item.username}}</div>  
                        <div class="duration">{{item.duration}}</div>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
      <div v-else>
          <div class="category-field">
              <ul>
                  <li class="category-item" v-for="(item, index) in newMusicCategoryList" 
                  :key="item.id" >
                      <a  :class="item.isSelect?'select':''" @click.prevent="selectCategory(item, index)">{{item.name}}</a>
                  </li>
              </ul>
              <div class="recommend-all">
                  <a @click.prevent="playAll" class="recommend">推荐</a>
                  <span class="sep"></span>
                  <a @click.prevent="likeAll" class="all">全部</a>
              </div>
          </div>
          <div class="new-card-field">
              <div class="new-card-item" v-for="item in newCartList" :key="item.id">
                <div class="date-field" :class="item.isNew?'new':''">
                     <p>{{item.month}}</p>
                     <p>{{item.year}}</p>  
                 </div>
                 <ul class="content-field">
                     <li v-for="dataItem in item.dataList" :key="dataItem.id">
                         <div class="img"></div>
                         <p class="name">{{dataItem.name}}</p>
                         <p class="username">{{dataItem.username}}</p>
                     </li>
                </ul>
              </div>
              
          </div>
      </div>
      
  </div>
</template>

<script>
export default {
    data(){
        return {
            navIndex: 0,
            switchList: [
                {
                    id: 1,
                    name: "新歌速递",
                    isSelect: true
                },
                {
                    id: 2,
                    name: "新碟上架",
                    isSelect: false
                }
            ],
            newMusicCategoryList: [
                {
                    id: 0,
                    name: "全部",
                    isSelect: true
                },
                {
                    id: 1,
                    name: "华语",
                    isSelect: false
                },
                {
                    id: 2,
                    name: "欧美",
                    isSelect: false
                },
                {
                    id: 3,
                    name: "韩国",
                    isSelect: false
                },
                {
                    id: 4,
                    name: "日本",
                    isSelect: false
                }
            ],
            newMusicList: [
                {
                    id: 1,
                    name: "32+35(Remix)",
                    username: "Ariana Grande/Doja Cat/Megan thee Stallion",
                    duration: "03:02",
                    img: "",
                    order: 1
                },
                {
                    id: 2,
                    name: "De Una Vez",
                    username: "Selene Gomez",
                    duration: "02:36",
                    img: "",
                    order: 2

                },
                {
                    id: 3,
                    name: "红黑",
                    username: "蔡文静",
                    duration: "03:51",
                    img: "",
                    order: 3
                },
                {
                    id: 4,
                    name: "火花",
                    username: "(G)L-DLE",
                    duration: "03-17",
                    img: "",
                    order: 4
                },
                {
                    id: 5,
                    name: "关于爱上自己这件事",
                    username: "Yamy郭颖",
                    duration: "03:10",
                    img: "",
                    order: 5
                },
                {
                    id: 6,
                    name: "为什么",
                    username: "马思唯",
                    duration: "03:29",
                    img: "",
                    order: 6
                },
                {
                    id: 7,
                    name: "Chemtrails Over The Country Club",
                    username: "Lana Del Rey",
                    duration: "04:31",
                    img: "",
                    order: 7
                },
                {
                    id: 8,
                    name: "改口茶",
                    username: "品冠",
                    duration: "03:12",
                    img: "",
                    order: 8
                },
                {
                    id: 9,
                    name: "生而为见",
                    username: "赵珂",
                    duration: "04:06",
                    img: "",
                    order: 9
                }
                ,{
                    id: 10,
                    name: "醉墨",
                    username: "范丞丞",
                    duration: "04:33",
                    img: "",
                    order: 10
                }
                ,{
                    id: 11,
                    name: "波特兰灯塔",
                    username: "张紫宁",
                    duration: "03:07",
                    img: "",
                    order: 11
                }
                ,{
                    id: 12,
                    name: "Flames(feat.Avril Lavigne)",
                    username: "Mod Sun/Avril Lavigne",
                    duration: "02:31",
                    img: "",
                    order: 12
                }
                ,{
                    id: 13,
                    name: "Universe(动画电影(多啦A梦：大雄的宇宙小战争2021))",
                    username: "Offical鬓子男dismiss",
                    duration: "04:46",
                    img: "",
                    order: 13
                }
                ,{
                    id: 14,
                    name: "right where you left me",
                    username: "Taylor Swift",
                    duration: "04:05",
                    img: "",
                    order: 14
                }
                ,{
                    id: 15,
                    name: "陆壹叁",
                    username: "黄榕生",
                    duration: "04:14",
                    img: "",
                    order: 15
                }
                ,{
                    id: 16,
                    name: "想变成一切美好的事物",
                    username: "唐松韵/谢春花",
                    duration: "04:16",
                    img: "",
                    order: 16
                }
            ],
            newCardCategoryList: [
                {
                    id: 0,
                    name: "全部",
                    isSelect: true
                },
                {
                    id: 1,
                    name: "华语",
                    isSelect: false
                },
                {
                    id: 2,
                    name: "欧美",
                    isSelect: false
                },
                {
                    id: 3,
                    name: "韩国",
                    isSelect: false
                },
                {
                    id: 4,
                    name: "日本",
                    isSelect: false
                }
            ],
            newCartList: [
                {
                    id: 1,
                    month: "本周",
                    year: "新碟",
                    isNew: true,
                    dataList: [
                        {
                            id: 1,
                            name: "红黑",
                            username: "蔡文静",
                            img: ""
                        },
                        {
                            id: 2,
                            name: "波特兰灯塔",
                            username: "张紫宁",
                            img: ""
                        },
                        {
                            id: 3,
                            name: "Flames(feat Avril Lavigne)",
                            username: "Mod Sun",
                            img: ""
                        },
                        {
                            id: 4,
                            name: "睡吧(2020少年音乐大战选手曲目)",
                            username: "网易云音乐校园",
                            img: ""
                        },
                        {
                            id: 5,
                            name: "嗨唱转起来第二季 第12期",
                            username: "嗨唱转起来",
                            img: ""
                        },
                        {
                            id: 6,
                            name: "天官赐福 动画第二季原声带",
                            username: "鹿晗",
                            img: ""
                        },
                        {
                            id: 7,
                            name: "一朝不舍",
                            username: "印子月",
                            img: ""
                        },
                        {
                            id: 8,
                            name: "Luv Express OST",
                            username: "Kristel Fulgar",
                            img: ""
                        },
                        {
                            id: 9,
                            name: "澳门大学2021 cypher",
                            username: "xMASwu",
                            img: ""
                        },
                        {
                            id: 10,
                            name: "Invaders",
                            username: "Arius",
                            img: ""
                        },
                        {
                            id: 11,
                            name: "我有病",
                            username: "春晓乐队CHUNXIAO",
                            img: ""
                        },
                        {
                            id: 12,
                            name: "施舍",
                            username: "不是花火呀",
                            img: ""
                        },
                        {
                            id: 13,
                            name: "留白",
                            username: "许任一",
                            img: ""
                        },
                        {
                            id: 14,
                            name: "不系吧",
                            username: "CJ周密",
                            img: ""
                        },
                        {
                            id: 15,
                            name: "20",
                            username: "苏二零",
                            img: ""
                        },
                        {
                            id: 16,
                            name: "你是我未曾拥有过的梦",
                            username: "我是张怡啊",
                            img: ""
                        },
                        {
                            id: 17,
                            name: "森林栖息居",
                            username: "苏运莹",
                            img: ""
                        },
                        {
                            id: 18,
                            name: "匆匆的过客",
                            username: "常毅凯",
                            img: ""
                        },
                        {
                            id: 19,
                            name: "rain",
                            username: "小可乐",
                            img: ""
                        },
                        {
                            id: 20,
                            name: "醉墨(影视剧《领域》主题曲)",
                            username: "范丞丞",
                            img: ""
                        }
                    ]
                },
                {
                    id: 1,
                    month:"01",
                    year: "2021",
                    dataList: [
                        {
                            id: 1,
                            name: "红黑",
                            username: "蔡文静",
                            img: ""
                        },
                        {
                            id: 2,
                            name: "波特兰灯塔",
                            username: "张紫宁",
                            img: ""
                        },
                        {
                            id: 3,
                            name: "Flames(feat Avril Lavigne)",
                            username: "Mod Sun",
                            img: ""
                        },
                        {
                            id: 4,
                            name: "睡吧(2020少年音乐大战选手曲目)",
                            username: "网易云音乐校园",
                            img: ""
                        },
                        {
                            id: 5,
                            name: "嗨唱转起来第二季 第12期",
                            username: "嗨唱转起来",
                            img: ""
                        },
                        {
                            id: 6,
                            name: "天官赐福 动画第二季原声带",
                            username: "鹿晗",
                            img: ""
                        },
                        {
                            id: 7,
                            name: "一朝不舍",
                            username: "印子月",
                            img: ""
                        },
                        {
                            id: 8,
                            name: "Luv Express OST",
                            username: "Kristel Fulgar",
                            img: ""
                        },
                        {
                            id: 9,
                            name: "澳门大学2021 cypher",
                            username: "xMASwu",
                            img: ""
                        },
                        {
                            id: 10,
                            name: "Invaders",
                            username: "Arius",
                            img: ""
                        },
                        {
                            id: 11,
                            name: "我有病",
                            username: "春晓乐队CHUNXIAO",
                            img: ""
                        },
                        {
                            id: 12,
                            name: "施舍",
                            username: "不是花火呀",
                            img: ""
                        },
                        {
                            id: 13,
                            name: "留白",
                            username: "许任一",
                            img: ""
                        },
                        {
                            id: 14,
                            name: "不系吧",
                            username: "CJ周密",
                            img: ""
                        },
                        {
                            id: 15,
                            name: "20",
                            username: "苏二零",
                            img: ""
                        },
                        {
                            id: 16,
                            name: "你是我未曾拥有过的梦",
                            username: "我是张怡啊",
                            img: ""
                        },
                        {
                            id: 17,
                            name: "森林栖息居",
                            username: "苏运莹",
                            img: ""
                        },
                        {
                            id: 18,
                            name: "匆匆的过客",
                            username: "常毅凯",
                            img: ""
                        },
                        {
                            id: 19,
                            name: "rain",
                            username: "小可乐",
                            img: ""
                        },
                        {
                            id: 20,
                            name: "醉墨(影视剧《领域》主题曲)",
                            username: "范丞丞",
                            img: ""
                        }
                    ]
                }
            ]
        }
    },
    methods: {
        selectCategory( index ){

        },
        toNav(item, index){
            this.switchList.forEach( item => { item.isSelect = false } )
            item.isSelect = true;
            this.navIndex = index;
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./latest-music.scss"
</style>