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
	//鼠标点击切换选项卡
	tab('.container-fluid .section2 ul li span','.container-fluid .section2 ol li','click');
	tab('.container-fluid .section2 ul li','.container-fluid .section2 ol li','click');
	// console.log($(document).height(),$('.nav').outerHeight())
	var a=($(window).height()-$('.nav').outerHeight())+'px';
	$('.nav').css({'top':a});













});