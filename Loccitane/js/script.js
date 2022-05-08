$(document).ready(function () {
    
    // 메인배너 스와이퍼
    var swiper = new Swiper("main .main-banner.swiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination: {
            el: "main .main-banner.swiper .swiper-pagination",
            type: "progressbar",
        },
    });


    // 헤더스크롤 색상변경
    $(document).ready(function(){
        $(window).scroll(function(){
          var scroll = $(window).scrollTop();
          if (scroll > 1) {
            $("header").addClass('active');
            $("header .box").addClass('hide')
          }
          else{
            $("header").removeClass('active');   
            $("header .box").removeClass('hide')

          }
        })
      })
   
    // 모바일 메뉴 팝업
    $('.m-menu-btn').click(function () {
        // console.log(1)
        $('.m-menu-pop-wrap').addClass('show')
    })
    $('.close-btn').click(function () {
        $('.m-menu-pop-wrap').removeClass('show')
    })



      
})
