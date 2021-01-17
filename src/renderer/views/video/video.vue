<template>
  <div class="video-field">
      <div class="category-field">
          <div class="left-item">
              <a>全部视频 ></a>
          </div>
           <ul class="right-item">
          <li v-for="item in categoryList" :key="item.id">
              {{item.name}}
          </li>
      </ul>
      </div>
      <ul class="content-field">
          <li v-for="item in contentList" :key="item.id">
              <div class="img">
                  <p class="count">{{item.count}}</p>
                  <p class="duration">{{item.duration}}</p>
              </div>
              <p class="name">{{item.name}}</p>
              <p class="username">{{item.username}}</p>        
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return {
            categoryList: [
                {
                    id: 1,
                    name: "现场"
                },
                {
                    id: 2,
                    name: "翻唱"
                },
                {
                    id: 3,
                    name: "舞蹈"
                },
                {
                    id: 4,
                    name: "听BGM"
                },
                {
                    id: 5,
                    name: "MV"
                },
                {
                    id: 6,
                    name: "生活"
                }
                ,{
                    id: 7,
                    name: "游戏"
                }
                ,{
                    id: 8,
                    name: "ACG音乐"
                }
                ,{
                    id: 9,
                    name: "最佳饭制"
                }
            ],
            contentList: [
                {
                    id: 1,
                    name: "我的世界单人生第16期",
                    username: "by我是爱音乐的星尘",
                    duration: "3615",
                    count: "05:25",
                    img: ""
                },
                {
                    id: 2,
                    name: "Genta Ismajli - Dy dashni.",
                    username: "by Dj-MraDel",
                    duration: "03:30",
                    count: "349万"
                },
                {
                    id: 3,
                    name: "花泽香菜2019北京卫视跨年晚会演唱《恋爱循环》",
                    username: "by白水好甜",
                    duration: "02:39",
                    count: "814万"
                },
                {
                    id: 4,
                    name: "乡村女孩韩甜甜现场一首《飞云之下》,引来全场观众爆灯",
                    username: "网易音乐怪蜀黍",
                    duration: "05：49",
                    count: "361万"
                },
                {
                    id: 5,
                    name: "他唱一首张国荣的《风继续吹》,一开嗓全场都坐不住了",
                    username: "02:19",
                    duration: "426万",
                    count: ""
                },
                {
                    id: 6,
                    name: "当彭于晏在健身房遇到张钧甯",
                    username: "by YouTube韩娱精选",
                    duration: "00:51",
                    count: "607万"
                },
                {
                    id: 7,
                    name: "横扫全网的《出山》爆火后，花粥新歌《浮白》又来了",
                    username: "by 下饭音乐music",
                    duration: "03:01",
                    count: "256万"
                },
                {
                    id: 8,
                    name: "张韶涵《你的答案》刷屏网络，开口就忘记原唱，太好听了",
                    username: "by 唯一音乐老撕机",
                    duration: "04:46",
                    count: "147万"
                },
                {
                    id: 9,
                    name: "听完这首《瞎子》难受的讲不出话来！",
                    username: "by 小石头和孩子们",
                    duration: "03:35",
                    count: "32万"
                },
                {
                    id: 10,
                    name: "迷你世界5-资深建筑师告诉你，怎么在游戏中建一座竹石结构的小房",
                    username: "by 迷你世界图图",
                    duration: "03:33",
                    count: "15332"
                },
                {
                    id: 11,
                    name: "最近突然火起来的《salt》太好听了，旋律太洗脑了",
                    username: "by 小二音乐驿站",
                    duration: "03:14",
                    count: "65万"
                },
                {
                    id: 12,
                    name: "我那么喜欢你，我们凭什么做朋友",
                    username: "by ThisisMiyarain",
                    duration: "04:10",
                    count: "354万"
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./video.scss"
</style>