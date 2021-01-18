<!--
 * @Description: 
 * @Version: 1.0
 * @Autor: in hengqi by mengze 
 * @Date: 2021-01-13 10:02:42
 * @LastEditors: in hengqi by mengze
 * @LastEditTime: 2021-01-18 19:13:31
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
    data(){
      return {
        
      }
    },
    methods: {
  
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

a {
  color: #333;
  text-decoration: none;
}


  /* CSS */
</style>
