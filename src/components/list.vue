<template>
	<div class="main">
		<div class="line_bj"></div>
		<ul>
			<li v-for="site in sites">
				<div class="list_title">
					<a href="javascript:;" class="a-img"><img v-bind:src="site.user_url" alt="" /></a>
					<a href="javascript:;" class="a-name">{{site.name}}</a>
				</div>
				<img class="list_img" :src="site.list_img" alt="" />
				<h3>{{site.title}}</h3>
				<div class="border_bottom"></div>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default {
		name:'List',
		data(){
			return {
				sites:[
					{name:'张三',user_url:'./static/img/a1.jpg',list_img:'./static/img/c1.jpg',title:'《芳华》：看得懂的都是有故事的人，看不懂的都是幸福的人'},
					{name:'李四',user_url:'./static/img/a2.jpg',list_img:'./static/img/c2.jpg',title:'考研的前一天里，我选择放弃'},
					{name:'赵五',user_url:'./static/img/a3.jpg',list_img:'./static/img/c3.jpg',title:'为什么你好像什么都知道，但现实中却一事无成？'},
				],
			}
		}
	}
</script>

<style type="text/css" scoped>
.main{
	position: relative;
}
.main ul{
	/*padding: 0rem 1.5rem;*/
}
.main ul li .list_title{
	/*padding: 0rem 1.5rem;*/
}
.main ul li{
	border-bottom: #f1f1f1 solid 1px;
	position: relative;
	padding: 20px 1.5rem;
}
.main .list_title{
	
}
/*.main .border_bottom{
	border-bottom: #666 solid 1px;
	width:100%;
	height:1px;
	position: absolute;
	bottom: 0;
}*/
.a-name{
	color:#000;
	height:17px;
	line-height: 17px;
}
.main .list_img{
	width:100%;
	margin-top: 15px;
}
.main h3{
    margin: 10px 0 0;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;
    color: #333;
}
.main .list_title .a-img img{
	width:32px;
	height:32px;
	border-radius: 50%;
	vertical-align: middle;
}
.main .line_bj{
	background-color: #f5f5f5;
	height:0.5rem;
	width:100%;
}
</style>