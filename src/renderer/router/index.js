/*
 * @Description: 
 * @Version: 1.0
 * @Autor: in hengqi by mengze 
 * @Date: 2021-01-13 10:02:42
 * @LastEditors: in hengqi by mengze
 * @LastEditTime: 2021-01-15 17:41:30
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/findMusic"
    },
    {
      path: '/findMusic',
      name: 'findMusic',
<<<<<<< HEAD
      redirect: "/findMusic/personalRecommend",
      component:()=>
        import( '@/views/find-music/find-music.vue' ),
      children: [
        {
          path: "personalRecommend",
          name: "personalRecommend",
          component: ()=>
            import('@/views/find-music/personal-recommend.vue')
          
        },
        {
          path: "musicList",
          name: "musicList",
          component: ()=>
            import('@/views/find-music/music-list.vue')
          
        },
        {
          path: "radioAnchor",
          name: "radioAnchor",
          component: ()=>
            import('@/views/find-music/radio-anchor.vue')
          
        },
        {
          path: "musicRank",
          name: "musicRank",
          component: ()=>
            import('@/views/find-music/music-rank.vue')
        },

        {
          path: "singer",
          name: "singer",
          component: ()=>
            import('@/views/find-music/singer.vue')
          
        },
        {
          path: "latestMusic",
          name: "latestMusic",
          component: ()=>
            import('@/views/find-music/latest-music.vue')
          
        }
      ]
    },
    {
      path: '/videoList',
      name: 'videoList',
      redirect: '/videoList/video',
      component:()=>{
        return import('@/views/video/video-list.vue')
      },
      children: [
        {
          path: 'video',
          name: 'video',
          component:()=>{
            return import('@/views/video/video.vue')
          },
        },
        {
          path: 'mv',
          name: 'mv',
          component:()=>{
            return import('@/views/video/mv.vue')
          },
        },
      ]
    },
    {
      path: '/friendList',
      name: 'friendList',
      component:()=>{
        return  import('@/views/friend/friend-list.vue')
      }
    },
    {
      path: '/liveVideoList',
      name: 'liveVideoList',
      component:()=>{
        return  import('@/views/live-video/live-video-list.vue')
      }
    },
    {
      path: '/privateFm',
      name: 'privateFm',
      component:()=>{
        return  import('@/views/private-fm/private-fm-list.vue')
      }
=======
      component:()=>
        import( '@/views/find-music/find-music.vue' )
    },
    {
      path: '/music',
      name: 'music',
      component: ()=>import('@/views/music')
    },
    {
      path: "/musicDetail",
      name: 'musicDetail',
      component:()=>import('@/views/music-detail')
>>>>>>> cb4c48940edf6a1abfb29106fcfe032c6e830fce
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
