<template>
	<div class="header">
		<div class="h_con">
			<h3>简书</h3>
			<span>创作你的创作</span>
			<a href="javascript:;">免费下载 ></a>
		</div>
		<div class="new">
			<img src="../assets/banner.png"/>
			<ul>
				<li><a href="javascript:;">随时随地发现和创作内容</a></li>
				<li><a href="javascript:;">每天为你精选好文</a></li>
				<li><a href="javascript:;">第时间收到作者文章更新</a></li>
			</ul>
		</div>
		<hot></hot>
		<list></list>
	</div>
	<!--<hot></hot>-->
</template>
<script>
	import Hot from './hot'
	import List from './list'
	export default{
		name:'Home',
		data(){
			return {
				msg:''
			}
		},
		components:{
		   Hot,List
		}
	}
</script>
<style type="text/css" scoped>
	*{
		margin:0;
		padding: 0;
	}
	a{
		text-decoration: none;
	}
	.header{
		
		
		width:100%;
		position: relative;
		background-color: #fff;
		
	}
	.header .h_con{
		width:90%;
		padding:0 5%;
		position: fixed;
		top:0;
		left:0;
		overflow: hidden;
		background-color: #fff;
		z-index: 1;
		height:42px;
		box-shadow: 0 2px 4px rgba(0,0,0,.1);
	}
	.header h3{
		font-size:1.8rem;
		color:#ea6f5a;
		display: block;
		line-height: 42px;
		float:left;
	}
	.header span{
		padding-left: 0.3rem;
		font-size:1rem;
		line-height: 42px;
		display:block;
		float:left;
	}
	.header .h_con a{
		position: absolute;
		right:18px;
		top:0.2rem;
		color:#EA6F5A;
		text-decoration: none;
		line-height: 34px;
		font-size:1rem;
		font-weight: bold;
	}
	.header .new{
		margin-top: 40px;
		background-color: #fff;
		position: relative;
		overflow: hidden;
	}
	.header .new ul{
		padding:15px 0;
		padding-left: 40px;
	}
	.header .new ul li{
		line-height: 30px;
	}
	.header .new ul li a{
		color:#333;
		font-size:0.9rem;
	}
	.header .new img{
		position: absolute;
		right:0;
		height: 168px;
		bottom:0;
	}
</style>