
$(document).ready(function () {
    /***************** pc menu *****************/

    $('#gnb > li').hover(function () {
        $('.submenu, .submenu-3', this).stop().slideDown();
    }, function () {
        $('.submenu, .submenu-3', this).stop().slideUp();
    });


    /***************** pc - slide *****************/

    // $('#slide').bxSlider();

    $('#slide').bxSlider({
        touchEnabled: (navigator.maxTouchPoints > 0),
    });



    //    $('.prev').click(function() {
    //     $('.a').animate({width: "toggle" }, 400);
    //    });

    //    $('.next').click(function() {
    //     $('.a').animate({width: "toggle" }, 400);
    //    });

    // var idx = 0;
    // setInterval(function() {
    //     $('#slide > .a').eq(idx).animate({left:'-100%'}, 400).animate({left:'-100%'}, 0);
    //     idx==2?idx=0:idx++;
    //     $('#slide > .a').eq(idx).animate({left:0}, 400);
    // }, 3000);


    /************* mobile-open & close ************/

    $("#m-open").click(function () {
        $("#m-menu").animate({ right: "0%" }, 500);
        $("#m-back").fadeIn(600);
    })

    $(".close").click(function () {
        $("#m-menu").animate({ right: "-100%" }, 500);
        $("#m-back").fadeOut(600);
    })

    /***************** m-toggle btn *****************/

    $('.m-gnb-2').click(function () {
        $(this).next('.m-submenu').stop().slideToggle(300);
        $(this).toggleClass('on').siblings().removeClass('on');
        $(this).next('.m-sbumenu').siblings('.m-submenu').slideUp(300);
    });

    // $('.m-gnb-2').click(function() {
    //     $('.m-submenu').slideToggle();
    // });

    /******************** popup **********************/

    $('.pop').click(function () {
        $('#pop-back').fadeIn();
    });

    $('.closed').click(function () {
        $('#pop-back').hide();
    });

    $('.end').click(function () {
        $('#pop-back').hide();
    });

   

    /********************************* 제품 메뉴얼 클릭 시 확대 ***********************************/

    // $('.menual-thum').click(function() {
    //     $('#big').empty();
    //     var src = $(this).attr('src');
    //     var fName = src.split('/');
    //     $('#big').append('<img src="images/big-'+fName[1]+'">');
    // });

    $('.thumb_item').click(function () {
        $('#menual-back,#big,.munual-close').fadeIn();
    });

    $('.xmark').click(function () {
        $('#menual-back,#big').hide();
    });
});




