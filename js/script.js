
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

    /******************** 팝업 하루 동안 열지 않음 **********************/

    // function getCookie(name) {
    //     var nameOfCookie = name + "=";
    //     var x = 0;
    //     while (x <= document.cookie.length) {
    //         var y = (x + nameOfCookie.length);
    //         if (document.cookie.substring(x, y) == nameOfCookie) {
    //             if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
    //                 endOfCookie = document.cookie.length;
    //             return unescape(document.cookie.substring(y, endOfCookie));
    //         }
    //         x = document.cookie.indexOf(" ", x) + 1;
    //         if (x == 0)
    //             break;
    //     }
    //     return "";
    // }

    // function setPopUpStart(obj) {
    //     // 체크박스 체크시
    //     if (obj.checked == true) {
    //         let expireDate = new Date();
    //         //쿠키 유효시간 설정
    //         setCookie("Notice", "done", 1);//1은 하루동안 새창을 열지 않게 합니다.
    //         // 쿠키 재설정
    //         document.cookie =
    //             "notShowPop=true;path=/;expires=" + expireDate.toGMTString();
    //         window.close();
    //     }
    // }

   
    function setCookie(name, value, expiredays) {
        var todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + expiredays);
        document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
    }

    function closeWin() {
        if (document.pop.Notice.checked)
            setCookie("Notice", "done", 1);//1은 하루동안 새창을 열지 않게 합니다. 
        window.close();
    }

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




