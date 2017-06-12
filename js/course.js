//选项卡
function tab(selector1,selector2,action) {
	$(selector1)[action](function(){
			//移出所有的样式
		$(selector1).removeClass('active');
		$(selector2).removeClass('active');
			//添加显示的样式: active
		$(this).addClass('active');
		$(selector2).eq($(this).index()).addClass('active');
	});
}

$(function(){
	//滚动条滚动到选项卡,将其变成吸顶条
	$(document).scroll(function(){
		var l=$('header').outerHeight();
		var l1=$(document).scrollTop();
		if (l1>l) {
			$('.select ul').css({'position':'fixed','top':0,'z-index':100});
		} else {
			$('.select ul').css('position','static');
		}
	})

	tab('.select ul li','.select ol li','click');

	//模拟vue交互数据
	var vm=new Vue({
		el:'#box',
		data:{
			arr1:[]
		},
		methods:{
			get:function(){
				var tmp={};
				this.$http.get('data/course.bbb').then(function(res){
					//将服务器接受的数据赋值给Vue的arr1
					// tmp=res.data.data;
						tmp=eval('('+res.data+')')
					console.log(tmp.data);
					for (var i = 0; i < tmp.data.length; i++) {
						this.arr1.push(tmp.data[i]);
					}
					
				},function(res){
					console.log('请在服务器环境下打开');
				})
			}
		}
	})
	vm.get();

	var a=($(window).height()-$('.nav').outerHeight())+'px';
	$('.nav').css({'top':a});

})