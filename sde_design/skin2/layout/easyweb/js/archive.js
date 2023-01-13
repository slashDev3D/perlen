$(window).ready(function(){
    const s1 = $("#sect1")
    const s2 = $("#sect2")
    const s3 = $("#sect3")
    var winH = $(window).height()
    var scrollTop = $(window).scrollTop()
    var scrollBot = scrollTop + winH;
    setTimeout(()=>{
        $(".header__wrap").addClass('white')
    },100)
    gsap.set(s1,{
        opacity:1
    })
    gsap.to(s1,0.1,{
        opacity:0,
        scrollTrigger:{
            trigger:s1,
            start:"30% top",
            end:"80% top",
            scrub:1
        }
    })
    $(window).resize(function(){
        winH = $(window).height()
    })
    $(window).scroll(function(){
        scrollTop = $(window).scrollTop()
        scrollBot = scrollTop + winH

        $(".scroll-detect").each(function(){
            var thisTop = $(this).offset().top
            var thisHeight = $(this).innerHeight()
            if(thisTop+150 < scrollBot && scrollBot < thisTop + winH + thisHeight){
                $(this).addClass('on-view')
            }else{
                $(this).removeClass('on-view')
            }
        })
    })
});