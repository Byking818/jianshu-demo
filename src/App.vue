<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
    <home></home>
    <hot></hot>
    <list></list>
    
  </div>
</template>

<script>
	import Hot from './components/hot'
	import Home from './components/home'
	import List from './components/list'
export default {
  name: 'app',
  components:{
      Hot,Home,List
  }
}
</script>

<style>
	@import "./assets/fonts/iconfont.css";
	body{
		background-color: #fff;
	}
	*{margin:0;padding:0}
	a{
		text-decoration: none;
	}
	li{
		list-style: none;
	}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
