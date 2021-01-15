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
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
