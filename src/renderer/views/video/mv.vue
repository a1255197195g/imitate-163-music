<template>
  <div class="mv-field">
      <div class="latest-mv mv-item">
        <div class="category">
          <div class="left-item">
              <a>最新MV ></a>
          </div>
          <ul class="right-item">
            <li v-for="item in latestMvCategoryList" :key="item.id">
                {{item.name}}
            </li>
          </ul>
        </div>
        <ul class="content-field">
          <li v-for="item in latestMvList" :key="item.id">
            <div class="img">
              <p class="count">{{item.count}}</p>
            </div>
            <p class="name">{{item.name}}</p>
            <p class="username">{{item.username}}</p>
          </li>
        </ul>   
      </div>
      <div class="hot-mv  mv-item">
        <div class="category">
          <div class="left-item">
              <a>热播MV ></a>
              <ul class="right-item">
              </ul>
          </div>
        </div>
        <ul class="content-field">
            <li v-for="item in hotMvList" :key="item.id">
              <div class="img">
                <p class="count">{{item.count}}</p>
              </div>
              <p class="name">{{item.name}}</p>
              <p class="username">{{item.username}}</p>
            </li>
        </ul>   
      </div>
      <div class="net-pruduct  mv-item">
        <div class="category">
          <div class="left-item">
              <a>网易出品 ></a>
              <ul class="right-item">
              </ul>
          </div>
        </div>
        <ul class="content-field">
            <li v-for="item in netProductList" :key="item.id">
              <div class="img">
                <p class="count">{{item.count}}</p>
              </div>
              <p class="name">{{item.name}}</p>
            </li>
        </ul>   
      </div>
      <div class="rank-mv">
        <div class="category">
          <div class="left-item">
              <a>MV排行榜 ></a>
              <ul class="right-item"></ul>
          </div>
          <ul class="content-field">
            <li v-for="item in rankMvList" :key="item.id">
              <div class="order">
                <span>{{item.order}}</span>
                <span :class="isGroup(item.isGroup)"  class="group iconfont"></span>
              </div>
              <div class="img">
                <p class="count">{{item.count}}</p>
              </div>
              <div class="info">
                <p class="name">{{item.name}}</p>
                <p class="username">{{item.username}}</p>
              </div>
              
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
      latestMvCategoryList: [
        {
          id: 1,
          name: "内地"
        },
        {
          id:2,
          name: "港台"
        },
        {
          id: 3,
          name: "欧美"
        },
        {
          id: 4,
          name: "日本"
        },
        {
          id: 5,
          name: "韩国"
        }
      ],
      latestMvList: [
        {
          id: 1,
          name: "野心",
          username: "薛之谦",
          count: "51万"
        },
        {
          id: 2,
          name: "《悬崖上的波妞》中文版",
          username: "久石让/吴青峰/李乐琪(Lucky)",
          count: "71万"
        },
        {
          id: 3,
          name: "我们的罗曼史",
          username: "苏婉/吕书军",
          count: "14万"
        },
        {
          id: 4,
          name: "欲控",
          username: "毕雯珺",
          count: "17万"
        },
        {
          id: 5,
          name: "蝙蝠(Bat)",
          username: "刺猬",
          count: "79794"
        },
        {
          id: 6,
          name: "《资深庸才》音乐纪录片",
          username: "周深/王子",
          count: "17万"
        },
      ],
      hotMvList: [
        {
          id: 1,
          name: "过",
          username: "王嘉尔/林俊杰",
          count: "174万"
        },
        {
          id: 2,
          name: "《悬崖上的波妞》中文版",
          username: "久石让/吴青峰/李乐琪(Lucky)",
          count: "71万"
        },
        {
          id: 3,
          name: "天外来物",
          username: "薛之谦",
          count: "470万"
        },
        {
          id: 4,
          name: "最下官网的地方(迪士尼《心灵奇旅》中文主题曲)",
          username: "林俊杰",
          count: "65万"
        },
        {
          id: 5,
          name: "Therefore I Am",
          username: "Billie Eilish",
          count: "102万"
        },
        {
          id: 6,
          name: "TFBOY「日光旅行」七周年演唱会",
          username: "TFBOYS",
          count: "678万"
        },
      ],
      netProductList: [
        {
          id: 1,
          name: "超级面对面 第230期 辣目洋子:我为什么要撕掉网红标签",
          count: "96万"
        },
        {
          id: 2,
          name: "超级面对面 第229期 陈奕迅:我是树上的一只懒懒的豹",
          count: "142万"
        },
        {
          id: 3,
          name: "音乐好朋友3 EP06沈以诚&刘瑞琪\"深夜食堂\"限时营业，解馋解忧",
          count: "32万"
        },
        {
          id: 4,
          name: "超级面对面 第228期 孟美岐:少女有铠甲",
          count: "72万"
        },
        {
          id: 5,
          name: "超级面对面 第227期 GALI:无腔调,不Rapper",
          count: "44万"
        },
        {
          id: 6,
          name: "音乐好朋友3 EP05刘瑞琪&韦礼安:所有的丧,都会被\"喵\"治愈!",
          count: "111万"
        }
      ],
      rankMvList: [
        {
          id: 1,
          name: "过",
          username: "王嘉尔/林俊杰",
          img: "",
          order: "01",
          isGroup: 1,
          count: 34442
        },
        {
          id: 2,
          name: "为什么",
          username: "马思唯",
          img: "",
          order: "02",
          isGroup: 1,
          count: 29855
        },
        {
          id: 3,
          name: "天外来物",
          username: "薛之谦",
          img: "",
          order: "03",
          isGroup: 1,
          count: 28063
        },
        {
          id: 4,
          name: "不系吧",
          username: "CJ周密/KnowKnow",
          img: "",
          order: "04",
          isGroup: -1,
          count:19071
        },
        {
          id: 5,
          name: "why oh why",
          username: "李子璇",
          img: "",
          order: "05",
          isGroup: 1,
          count: 19305
        },
        {
          id: 6,
          name: "野心",
          username: "薛之谦",
          img: "",
          order: "06",
          isGroup: 1,
          count: 15700
        },
        {
          id: 7,
          name: "2021年空军招飞宣传片",
          username: "易烊千玺/吴京",
          img: "",
          order: "07",
          isGroup: 1,
          count: 10556
        },
        {
          id: 8,
          name: "过去完成时",
          username: "鞠婧祎",
          img: "",
          order: "08",
          isGroup: 1,
          count: 12590
        },
        {
          id: 9,
          name: "遥望",
          username: "范丞丞/程潇",
          img: "",
          order: "09",
          isGroup: -1,
          count: 15522,
        },
        {
          id: 10,
          name: "百忧解",
          username: "SAM努尔夏提/那奇沃夫",
          img: "",
          order: "10",
          isGroup: -1,
          count: 6882
        }
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
  }
}
</script>

<style lang="scss" scoped>
@import "./mv.scss"
</style>