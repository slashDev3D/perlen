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
})