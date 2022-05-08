

$(document).ready(function () {


    //헤더 메뉴 오버시 메뉴창
    $('header .main-menu.company').mouseover(function () {
        $('header .company-on').show()
    })
    $('header .main-menu.trading').mouseover(function () {
        $('header .trading-on').show()
    })
    $('header .main-menu.pharmacy').mouseover(function () {
        $('header .pharmacy-on').show()
    })
    $('header .main-menu.news').mouseover(function () {
        $('header .news-on').show()
    })
    $('header .main-menu.recru').mouseover(function () {
        $('header .recru-on').show()
    })
    $('header .main-menu span').mouseleave(function () {
        $('header .list-group').hide()

    })

    //sec01 바 오버 시 색상 변경
    // $('main .sec01 .swiper').mouseover(function () {
    //     $(this).addClass('active')
    // })
    // $('main .sec01 .swiper').mouseleave(function () {
    //     $(this).removeClass('active')
    // })

    $('.popup-area .btn-box button').click(function() {
        $('.popup-area').hide()
        $('.popup-area-bg').hide()
    })

    $('.popup-area-bg').click(function() {
        $('.popup-area').hide()
        $('.popup-area-bg').hide()
    })





    //메인 배너 화면 넘김 효과
    var swiper = new Swiper(".main-banner .swiper", {
        spaceBetween: 30,
        centeredSlides: true,
        effect: 'fade',
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".main-banner .swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".main-banner .swiper-button-next",
            prevEl: ".main-banner .swiper-button-prev",
        },
    });


    var swiper = new Swiper(".sec01 .swiper", {
        spaceBetween: 30,
        centeredSlides: true,
        effect: 'fade',
        speed: 1000,
        loop: true,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
    });


    //sec02 마우스 클릭시 창바뀜
    $('main .sec02 .txt-box .pharmacy').click(function () {
        $('main .sec02').addClass('pharmacy-click')
        $('main .sec02').removeClass('trading-click')

    })
    $('main .sec02 .txt-box .trading').click(function () {
        $('main .sec02').addClass('trading-click')
        $('main .sec02').removeClass('pharmacy-click')
    })


    $('main .sec03 .menu-area .more-btn').click(function () {
        if ($('main .sec03 .menu-area').hasClass('active') == true) {
            $('main .sec03 .menu-area').removeClass('active');
            $('main .sec03 .menu-area .menu-box').hide();

        } else {
            $('main .sec03 .menu-area').addClass('active');
            $('main .sec03 .menu-area .menu-box').show();

        }
    })

    //채용 FAQ
    $('.recruit-wrap li').click(function () {
        if($(this).hasClass('active')) {
            $('.recruit-wrap li').removeClass('active');
            $(this).children('.a-box').slideUp();
        }else {
            $('.recruit-wrap li').removeClass('active');
            $('.recruit-wrap li').children('.a-box').slideUp();
            $(this).addClass('active');
            $(this).children('.a-box').slideDown();
        }   
    })

    //모바일 메뉴 클릭시 팝업
    $('header .m-menu-btn').click(function(){
        if($('header .m-menu-btn').hasClass('active')){
            $('.mob-menu-pop-wrap').hide()
            $(this).removeClass('active');
        }else {
            $(this).addClass('active');

            $('.mob-menu-pop-wrap').show()
        }
    })








})
