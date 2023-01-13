$(window).ready(function(){
var winW = $(window).width();
    var winH = $(window).height();
    var windowScrollTop = $(document).scrollTop();
    var windowScrollBot = windowScrollTop + winH;
    var lastScrollTop = 0;
    function publicFn(){
        if(windowScrollTop>=100){
        	if((windowScrollTop>lastScrollTop) && (lastScrollTop>0)){
            	$("#header").addClass("hide")
            }else{
            	$("#header").removeClass("hide")
            }
            lastScrollTop=windowScrollTop;
        }
        $('.scroll-detect').each(function(index,item){
            var thisHeight = $(this).height();
            var thisTop = $(this).offset().top;
            var thisBot = thisTop - thisHeight;
            var topPadding = 100;
    
            if( thisTop < windowScrollBot - topPadding - thisHeight/2 && windowScrollTop < thisTop + thisHeight ){
                $(this).addClass('on-view')
            }else{
                $(this).removeClass('on-view')
            }
        })
        $('.scroll-detect-top').each(function(index,item){
            var thisHeight = $(this).height();
            var thisTop = $(this).offset().top;
            var thisBot = thisTop - thisHeight;
            var topPadding = 300;
    
            if( thisTop < windowScrollBot - topPadding - thisHeight/10 && windowScrollTop < thisTop + thisHeight ){
                $(this).addClass('on-view')
            }else{
                $(this).removeClass('on-view')
            }
        })
        $('.scroll-detect-instant').each(function(index,item){
            var thisTop = $(this).offset().top;
            var topPadding = 100;
    
            if(windowScrollTop < thisTop && thisTop < windowScrollBot - topPadding){
                setTimeout(()=>{
                    $(this).addClass('on-view')
                })
            }
        })
        $('.initiate-detect').each(function(){
            if(windowScrollTop<=200){//초기 스크롤 값이 200보다 위인 경우 on-view부여
                setTimeout(()=>{
                    $('.initiate-detect').addClass('on-view')
                },300)
            }
        })  
    }
    function publicRefresh(){
        windowScrollTop = $(document).scrollTop();
        windowScrollBot = windowScrollTop + winH;
    }
    $(window).resize(function(){
        publicRefresh();
        publicFn();
    })
    $(window).scroll(function(){
        publicRefresh();
        publicFn();
    })
    const header = $(".header__wrap");
    const navHam = $("#navHam");
    var navHamSW = false;
    navHam.click(function(){
        if(!navHamSW){
            $(this).addClass('on')
            navHam.addClass('on')
            $(".menu_mob").addClass('on')
        }else{
            navHam.removeClass('on')
            $(".menu_mob").removeClass('on')
        }
        navHamSW = !navHamSW;
    })
    
//마우스 커서
const cursorContainer = $('#cursor');
const cursor = $('.cursor-pointer');
let mouse = {x:0,y:0};
function cursorMove(e){
    TweenLite.to(cursor,0.3,{
        css:{
            left:(e.clientX - $(cursor).outerHeight()/2)+"px",
            top:(e.clientY - $(cursor).outerWidth()/2)+"px"
        }
      });
}
window.addEventListener("mousemove",function(e){
    cursorMove(e)
    var gutter = 30;
    if(e.clientX<gutter||e.clientX>(winW - gutter)||e.clientY<gutter||e.clientY>(winH - gutter)){
        cursor.addClass('out')
    }else{
        cursor.removeClass('out')
    }
})
$('button').mouseenter(function(){
    setTimeout(()=>{
        cursorContainer.addClass('link_hover')
    },10)
})
$('button').mouseleave(function(){
    cursorContainer.removeClass('link_hover')
})
$('a').mouseenter(function(){
    setTimeout(()=>{
        cursorContainer.addClass('link_hover')
    },10)
})
$('a').mouseleave(function(){
    cursorContainer.removeClass('link_hover')
})
})