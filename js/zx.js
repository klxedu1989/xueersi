var app= angular.module('app',[]);
var arr =[];
var list ={
		data:[
			{
				'imgSrc':'./听讲座-学而思网校_files/14945005286706.png',
				'head':'The Very Hungry...',
				'time':'今天 19:00-20:00',
				'iInfo':'暂无'
			},
			{
				'imgSrc':'./听讲座-学而思网校_files/14907860243526.jpg',
				'head':'The Very Hungry...',
				'time':'今天 19:00-20:00',
				'iInfo':'暂无'
			},
			{
				'imgSrc':'./听讲座-学而思网校_files/14919035649424.jpg',
				'head':'The Very Hungry...',
				'time':'今天 19:00-20:00',
				'iInfo':'暂无'
			},
			{
				'imgSrc':'./听讲座-学而思网校_files/14921648185018.jpg',
				'head':'The Very Hungry...',
				'time':'今天 19:00-20:00',
				'iInfo':'暂无'
			},
			{
				'imgSrc':'./听讲座-学而思网校_files/14933735208411.jpg',
				'head':'The Very Hungry...',
				'time':'今天 19:00-20:00',
				'iInfo':'暂无'
			},
			{
				'imgSrc':'./听讲座-学而思网校_files/14949215378069.jpg',
				'head':'The Very Hungry...',
				'time':'今天 19:00-20:00',
				'iInfo':'暂无'
			},
			{
				'imgSrc':'./听讲座-学而思网校_files/14915316415278.jpg',
				'head':'The Very Hungry...',
				'time':'今天 19:00-20:00',
				'iInfo':'暂无'
			},
			{
				'imgSrc':'./听讲座-学而思网校_files/14948451382537.jpg',
				'head':'The Very Hungry...',
				'time':'今天 19:00-20:00',
				'iInfo':'暂无'
			},
		]
};
app.controller('show',function($scope){
	arr=list.data;
	$scope.listjson=arr;
});