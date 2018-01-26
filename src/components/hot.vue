<template>
	<div class="hot">
		<div class="line_bj"></div>
		<h3>{{msg}}</h3>
		 <div>

	        <p class="button" @click="jump('helloword')"> 跳转至helloword页面 </p>
	
	    </div>
		<a href="javascript:;">
			<i class="icon iconfont icon-refresh"></i>
			<span>
				换一批
			</span>
		</a>
		<ul>
			<li><a href="javascript:;">连载小说</a></li>
			<li><a href="javascript:;">生活家</a></li>
			<li><a href="javascript:;">谈写作</a></li>
			<li><a href="javascript:;">故事</a></li>
			<li><a href="javascript:;">读书</a></li>
			<li><a href="javascript:;">谈谈情，说说爱</a></li>
			<li><a href="javascript:;">历史</a></li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'Hot',
		data(){
			return {
				msg:'热门专题'
			}
		},
		 methods:{
            jump:function (e) {
                    this.$router.push(e);
            }
        }
	}
</script>
<style type="text/css" scoped>
	.hot{
		position: relative;
	}
	.hot .line_bj{
		background-color: #f5f5f5;
		height:0.5rem;
		width:100%;
	}
	.hot h3{
		padding-left: 1.5rem;
		font-size:1rem;
		margin-top: 0.6rem;
	}
	.hot i{
		cursor: pointer;
		position: absolute;
		right:4rem;
		top:24px;
		font-size: 13px;
		color: #333;
	}
	.hot a{
		display:block;
	}
	.hot span{
		cursor: pointer;
		position: absolute;
		right:1rem;
		top:20px;
		color:#666;
		font-size: 13px;
	}
	.hot ul{
		margin-top:10px;
		margin-bottom:10px;
		padding:0 1rem;
		display: flex;
		flex-wrap: wrap;
	}
	.hot ul li{
		border:1px solid #ea6f5a;
		list-style: none;
		border-radius:4px;
		padding:2px 10px;
		margin: 5px 8px;
		box-sizing: border-box;
	}
	.hot ul li a{
		color:#ea6f5a;
		font-size:0.8rem;
		text-decoration: none;
	}
</style>