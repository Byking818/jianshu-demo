<template>
	<div class="all">
			<!--<home></home>-->
			<h3>{{msg}}</h3>
	</div>
	
</template>

<script>
	import Home from './home'
	import List from './list'
	export default{
		name:'Details',
		data(){
			return {
				msg:'我是详情页面'
			}
		},
		components:{
			Home
		}
	}
</script>

<style scoped>
	h3{
		color:red;
	}
</style>