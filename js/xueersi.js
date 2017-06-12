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
        xuan('.about-b-u li','.about-b-o>li ','click','First');       
    })();
    $.ajax({
        url:'data/zhibo.data',
        type:'get',
        success:function(res){
            var json = eval('('+res+')');
            console.log(typeof json);
            console.log(json);            
        }
    })
})