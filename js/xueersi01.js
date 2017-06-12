// 点击关闭div
function close(obj1,obj2){
    obj1.click(function (){
        obj2.css('display','none')
    });
};
function xuan (selected1,selected2,action,ifFirst){
    if(ifFirst=='First'){
        $(selected1).eq(0).addClass('select');
        $(selected2).eq(0).addClass('active');
    };
    $(selected1)[action](function(){
        $(selected1).removeClass('select');
        $(selected2).removeClass('active');
        $(this).addClass('select');
        $(selected2).eq($(this).index()).addClass('active');
    });
};

(function(){
    $(function () {   
        // header
        (function(){
            var oSpan = $('.appdownload-left-span');
            var oDiv = $('.appdownload');
            var oCover = $('.search-box-cover');
            var oSearch = $('.search-box');
            var oMSearch = $('.search-input');
            var oMSearchSpan = $('.search-span');        
            var oSearchRBox = $('.serch-box-a2');
            var oSearchRSpan =$('.search-right-span')
            var oA = $('.serch-box-a2');
            var oBox = $('.box');

            // console.log(oSpan,oDiv);
            close(oSpan,oDiv);
            $(window).scroll(function(){
                var xTop = $(document).scrollTop();  
                if(xTop>=50){
                    oDiv.css('display','none');
                    oCover.css('opacity',0.8);
                    oCover.css('position','fixed');
                    oSearch.css('position','fixed');
                }else{
                    oDiv.css('display','block');
                    oCover.css('opacity',0);
                    oCover.css('position','absolute');
                    oSearch.css('position','absolute');
                }
                
            });
            oMSearch.focus(function () {
                oMSearchSpan.css("display","none");            
                oSearchRSpan.css("display","block");
                oSearchRBox.css('background',"transparent  center no-repeat")
            
                
            });
            oMSearch.blur(function () {
                oMSearchSpan.css("display","block");            
                oSearchRSpan.css("display","none");
                oSearchRBox.css('background',"transparent url('img/a-monkey.png') center no-repeat");
                oSearchRBox.css('backgroundSize',"50px")
                
            });
        })();
        //mask-banner
        (function(){
            var oMask = $('.mask');
            var oSpan = $('.mask span');
            var oBanner = $('.banner');
            var CH = $(document).width()+'px';
            oMask.css('height',CH);
            oBanner.click( function () {
                oMask.css('display','block')
            });
            oSpan.click( function () {
                oMask.css('display','none')
            })
        })(); 
        //section 课程tabs
        (function () {        
            xuan('.kecheng-ul li','.tabs-con-ol>li ','click','First'); 
                  
        })();
        $.ajax({
            url:'data/zhibo.aaa',
            type:'get',
            success:function(res){
                var json = eval('('+res+')');
                var data = json.data;
                // console.log(data);
                if(!json.error){
                    for(var i=0;i<data.length;i++){
                        var oLi =$('<li class="zb-middle-li"><img src="'+ data[i].src +'" alt=""><span>'+ data[i].title +'</span><i>' + data[i].time + '</i><b>' + data[i].num + '</b></li>');
                        $('.zb-m-shuju01').append(oLi);
                    }
                }            
            }
        })
        $.ajax({
            url:'data/jiangzuo.aaa',
            type:'get',
            success:function(res){
                var json = eval('('+res+')');
                var data = json.data;
                if(!json.error){
                    for(var i=0;i<data.length;i++){
                        var oLi = $('<li class="zb-middle-li01"><img src="'+ data[i].src +'" alt=""><span>'+ data[i].title +'</span><i>' + data[i].time + '</i><b>' + data[i].num + '</b></li>');
                        $('.zb-m-shuju02').append(oLi);
                    }
                }
            }
        })
        $.ajax({
            url:'data/about.aaa',
            type:'get',
            success:function(res){
                var json = eval('('+res+')');
                var data1 = json.data01;
                var data2 = json.data02;

                if(!json.error){
                    for(var i=0;i<data1.length;i++){
                        var oLi1 = $('<li class="about-b-l"><img src="'+data1[i].src+'" alt="" class="about-b-m"><div class="lanf"></div></li>');
                        var oLi2 = $('<li><a href="javascript:;" class="about-b-a">'+data2[i].con+'</a></li>');
                        $('.about-b-u').append(oLi1);
                        $('.about-b-o').append(oLi2);
                        xuan('.about-b-u li','.about-b-o>li ','click','First'); 
                    }
                }
            }
        })

    })  
})()
