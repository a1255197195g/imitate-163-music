<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: in hengqi by mengze 
 * @Date: 2021-01-13 10:02:42
 * @LastEditors: in hengqi by mengze
 * @LastEditTime: 2021-01-15 18:22:12
-->
<template>
  <div ref="app" id="app">
    <Main></Main>
  </div>
</template>

<script>
import Main from "./views/main"
  export default {
    name: 'my-project',
    components: {
      Main
    },
    mounted(){
      // window.addEventListener('resize', ()=>{
      //   this.$refs.app.style.width = window.outerWidth;
      //   this.$refs.app.style.height = window.outerHeight;
      // })
    }
  }
</script>

<style>
* {
  padding: 0;
  margin: 0
}

#app {
  font-family: Microsoft YaHei, Microsoft YaHei-Regular;
}


li {
  list-style: none;
}

<<<<<<< HEAD
a {
  color: #333;
  text-decoration: none;
}
=======
>>>>>>> cb4c48940edf6a1abfb29106fcfe032c6e830fce


  /* CSS */
</style>
