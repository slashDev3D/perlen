$(window).ready(function(){
    setTimeout(()=>{
        $('.s1__container').addClass('init')
        $('#sect2').addClass('init')
        $(".header__wrap").addClass('white')
    },100)
    var winH = $(window).height();
    var winW = $(window).width();
    var scrollTop;
    var scrollBot;
    const s1star = $("#s1star")
    const s2star = $("#s2star")
    const s1starRotateSpeed = 360;
    const s3textWrapper = $("#s3textWrapper")

    const s2figure = $(".s2__figure")
    var s2figureHeight = s2figure.height();

    const s3textBox = $(".s3__textBox")
    const s1 = $("#sect1")
    const s2 = $("#sect2")
    const s3 = $("#sect3")
    const s4 = $("#sect4")
    const s5 = $("#sect5")
    const s6 = $("#sect6")

    gsap.to(s2star,0.1,{
        rotation:s1starRotateSpeed,
        scrollTrigger:{
            trigger:s1,
            start:"0 top",
            end:"100% top",
            scrub:1
        }
    })
    gsap.set(s2figure,{
        y:"0%",
        // x:"-50%",
        opacity:"1"
    })
    gsap.to(s2figure,0.1,{
         invalidateOnRefresh: true,
        width:"100%",
        y:"0%",
        // x:"-50%",
        scrollTrigger:{
            trigger:s2,
            start:"5% top",
            end:"80% top",
            scrub:0,
            invalidateOnRefresh: true,
        }
    })
    gsap.to(s2figure,0.1,{
        opacity:0,
        scrollTrigger:{
            trigger:s2,
            start:"30% top",
            end:"80% top",
            scrub:0,
            invalidateOnRefresh: true,
        }
    })
    gsap.set(s3textWrapper,{
	    opacity:1,
    })
    gsap.to(s3textWrapper,{
    	opacity:0,
        scrollTrigger:{
        	trigger:s3,
            start:"50% top",
            end:"60% top",
            scrub:0,
            invalidateOnRefresh: true,
        }
    })
    gsap.set(".s6__bg",{
        opacity:0
    })
    gsap.to(".s6__bg",0.1,{
        opacity:1,
        scrollTrigger:{
            trigger:s5,
            start:"0% top",
            end:"15% top",
            scrub:0,
            invalidateOnRefresh: true,
        }
    })

    var s1Top = s1.offset().top;
    var s2Top = s2.offset().top;
    var s3Top = s3.offset().top;
    var s4Top = s4.offset().top;
    var s5Top = s5.offset().top;
    var s2Height = s2.innerHeight();
    var s3Height = s3.innerHeight();
    var s4Height = s4.innerHeight();
    var headerHeight = $("#header").height();

    var s3Bot = s3Top + s3Height;
    var s4Bot = s4Top + s4Height;

    $(".s4__body_list").mouseenter(function(){
        $(".s4__body_list").removeClass('on-hover')
        $(this).addClass('on-hover')
    })

    var swiper = new Swiper(".swiper-container",{
        spaceBetween: 10,
        slidesPerView:1.5,
        centeredSlides: true,
        clickable:true,
        loop:true,
		autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        breakpoints:{
            480:{
                slidesPerView:2.5,
                spaceBetween: 10,
            },
            768:{
                slidesPerView:2.5,
                spaceBetween: 30,
            },
            1024:{
                slidesPerView:3.5,
                spaceBetween: 30,
            },
            1300:{
                slidesPerView:3.5,
                spaceBetween: 60,
            },
            1920:{
                slidesPerView:4.5,
                spaceBetween: 60,
            }
        }
    });
    $(window).resize(function(){
        winH = $(window).height();
        winW = $(window).width();
        s1Top = s1.offset().top;
        s2Top = s2.offset().top;
        s3Top = s3.offset().top;
        s4Top = s4.offset().top;
        s5Top = s5.offset().top;
		s2Height = s2.innerHeight();
		s3Height = s3.innerHeight();
		s4Height = s4.innerHeight();
        s3Bot = s3Top + s3Height;
        s4Bot = s4Top + s4Height;
        headerHeight = $("#header").height();
        s2figureHeight = s2figure.height();
        console.log(s2figureHeight)
        ScrollTrigger.refresh();
    })
    
    $(window).scroll(function(){
        winH = $(window).height();
        s1Top = s1.offset().top;
        s2Top = s2.offset().top;
        s3Top = s3.offset().top;
        s4Top = s4.offset().top;
		s2Height = s2.innerHeight();
		s3Height = s3.innerHeight();
		s4Height = s4.innerHeight();
        scrollTop = $(document).scrollTop();
        s2figureHeight = s2figure.height();
        scrollBot = scrollTop+winH;
        s3Bot = s3Top + s3Height;
        s4Bot = s4Top + s4Height;

        if(s2Top+s2figureHeight<scrollBot && scrollBot < s2Top+s2Height){
            s2figure.removeClass('position-bottom')
            s2figure.removeClass('position-top')
            s2figure.addClass('fixed')
        }else if(scrollBot >= s2Top + s2Height){
            s2figure.removeClass('fixed')
            s2figure.removeClass('position-top')
            s2figure.addClass('position-bottom')
        }else if(scrollBot<=s2Top + s2figureHeight){
            s2figure.removeClass('position-bottom')
            s2figure.removeClass('fixed')
            s2figure.addClass('position-top')
        }


        if(s3Top<scrollTop && scrollTop < s3Bot - winH){
            s3textBox.removeClass('position-bottom')
            s3textBox.removeClass('position-top')
            s3textBox.addClass('fixed')
        }else if(scrollTop >= s3Bot - winH){
            s3textBox.removeClass('fixed')
            s3textBox.removeClass('position-top')
            s3textBox.addClass('position-bottom')
        }else if(scrollTop <= s3Top){
            s3textBox.removeClass('position-bottom')
            s3textBox.removeClass('fixed')
            s3textBox.addClass('position-top')
        }

        if(s4Top<scrollTop && scrollTop < s4Bot - headerHeight/2){
            $("#header").addClass("black")
            $("#header").removeClass("white")
            $(".header__wrap").addClass('black')
            $(".header__wrap").removeClass('white')
            $(".logo_wrap .logo img").attr({"src":"/web/upload/image/header_logo_black.png"})
        }else{
            $("#header").addClass("white")
            $("#header").removeClass("black")
            $(".header__wrap").removeClass('black')
            $(".header__wrap").addClass('white')
            $(".logo_wrap .logo img").attr({"src":"/web/upload/image/header_logo.png"})
        }
    })
})

