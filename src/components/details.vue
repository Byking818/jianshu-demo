<template>
	<h3>{{msg}}</h3>
</template>

<script>
	export default{
		name:'Details',
		data(){
			return {
				msg:'我是详情页面'
			}
		}
	}
</script>

<style scoped>
	h3{
		color:red;
	}
</style>