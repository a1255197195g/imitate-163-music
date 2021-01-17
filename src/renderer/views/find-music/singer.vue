<template>
  <div class="singer-field">
      <div class="filter-condition-field">
          <div class="language">
              <span class="title">语种:</span>
              <div>
                  <span class="all">全部</span>
                  <span v-for="item in languageList" :key="item.id">
                      {{item.name}}
                  </span>  
              </div>
          </div>
          <div class="category">
              <span class="title">分类:</span>
              <div>
                  <span class="all">全部</span>
                  <span v-for="item in categoryList" :key="item.id">
                      {{item.name}}
                  </span>   
              </div>
          </div>
          <div class="filter">
              <span class="title">筛选:</span>
              <div>
                  <span class="all">热门</span>
                  <span v-for="item in filterList" :key="item.id">
                      {{item.name}}
                  </span>   
              </div>
          </div>
      </div>
      <div class="singer-list">
          <ul>
              <li  class="singer-item" v-for="item in singerList" :key="item.id">
                  <div class="img">
                      <p class="title">{{item.title}}</p>
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
            languageList: [
                {
                    id: 2,
                    name: "华语"
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
                },
                {
                    id: 6,
                    name: "全部"
                },
                
            ],
            categoryList: [
                {
                    id: 2,
                    name: "男歌手"
                },
                {
                    id: 3,
                    name: "女歌手"
                },
                {
                    id: 4,
                    name: "乐队组合"
                },
            ],
            filterList: [
                {
                    id: 2,
                    name: "A"
                },{
                    id: 3,
                    name: "B"
                },{
                    id: 4,
                    name: "C"
                },{
                    id: 5,
                    name: "D"
                },{
                    id: 6,
                    name: "E"
                },{
                    id: 7,
                    name: "F"
                },{
                    id: 8,
                    name: "G"
                },{
                    id: 9,
                    name: "H"
                },{
                    id: 10,
                    name: "I"
                },{
                    id: 11,
                    name: "J"
                },{
                    id: 12,
                    name: "K"
                },{
                    id: 13,
                    name: "L"
                },{
                    id: 14,
                    name: "M"
                },{
                    id: 15,
                    name: "N"
                },{
                    id: 16,
                    name: "O"
                },{
                    id: 17,
                    name: "P"
                },{
                    id: 18,
                    name: "Q"
                },{
                    id: 19,
                    name: "R"
                },{
                    id: 20,
                    name: "S"
                },{
                    id: 21,
                    name: "T"
                },{
                    id: 22,
                    name: "U"
                },{
                    id: 23,
                    name: "V"
                },{
                    id: 24,
                    name: "W"
                },{
                    id: 25,
                    name: "X"
                },
                {
                    id: 26,
                    name: "Y"
                },
                {
                    id: 27,
                    name: "Z"
                },
                {
                    id: 28,
                    name: "#"
                },
            ],
            singerList: [
                {
                    id: 1,
                    title: "歌手榜",
                    name: "歌手排行榜>",
                    img: ""
                },
                {
                    id: 2,
                    title: "薛之谦",
                    name: "薛之谦",
                    img: ""
                },
                {
                    id: 3,
                    title: "刘大壮",
                    name: "刘大壮",
                    img: ""
                },
                {
                    id: 4,
                    title: "程响",
                    name: "程响",
                    img: ""
                },
                {
                    id: 5,
                    title: "林俊杰",
                    name: "林俊杰",
                    img: ""
                },
                {
                    id: 6,
                    title: "陈奕迅",
                    name: "陈奕迅",
                    img: ""
                },
                {
                    id: 7,
                    title: "是七叔呢",
                    name: "七叔",
                    img: ""
                },
                {
                    id: 8,
                    title: "许嵩",
                    name: "许嵩",
                    img: ""
                },
                {
                    id: 9,
                    title: "老樊",
                    name: "隔壁老樊",
                    img: ""
                },
                {
                    id: 10,
                    title: "华晨宇",
                    name: "华晨宇",
                    img: ""
                },{
                    id: 11,
                    title: "王二浪",
                    name: "王二浪",
                    img: ""
                }
                ,{
                    id: 12,
                    title: "毛不易",
                    name: "毛不易",
                    img: ""
                }
                ,{
                    id: 13,
                    title: "李荣浩",
                    name: "李荣浩",
                    img: ""
                }
                ,{
                    id: 14,
                    title: "傲七爷",
                    name: "傲七爷",
                    img: ""
                }
                ,{
                    id: 15,
                    title: "颜人中",
                    name: "颜人中",
                    img: ""
                }
                ,{
                    id: 16,
                    title: "邓紫棋",
                    name: "G.E.M邓紫棋",
                    img: ""
                }
                ,{
                    id: 17,
                    title: "沈以诚",
                    name: "沈以诚",
                    img: ""
                }
                ,{
                    id: 18,
                    title: "Taylor Swift",
                    name: "Taylor Swift",
                    img: ""
                }
                ,{
                    id: 19,
                    title: "任然",
                    name: "任然",
                    img: ""
                }
                ,{
                    id: 20,
                    title: "张杰",
                    name: "张杰",
                    img: ""
                }

            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import "./singer.scss"
</style>