
$(document).ready(function() {
    /***************** pc menu *****************/

    $('#gnb > li').hover(function() {
        $('.submenu, .submenu-3', this).stop().slideDown();
    }, function() {
        $('.submenu, .submenu-3', this).stop().slideUp();
    });


    /***************** pc - slide *****************/

    // $('#slide').bxSlider();
    
    $('#slide').bxSlider({
        touchEnabled : (navigator.maxTouchPoints > 0),
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

    $("#m-open").click(function() {
        $("#m-menu").animate({right: "0%"}, 500);
        $("#m-back").fadeIn(600);
    })

    $(".close").click(function() {
        $("#m-menu").animate({right: "-100%"}, 500);
        $("#m-back").fadeOut(600);
    })

    /***************** m-toggle btn *****************/

    $('.m-gnb-2').click(function() {
        $(this).next('.m-submenu').stop().slideToggle(300);
        $(this).toggleClass('on').siblings().removeClass('on');
        $(this).next('.m-sbumenu').siblings('.m-submenu').slideUp(300);
    });

    // $('.m-gnb-2').click(function() {
    //     $('.m-submenu').slideToggle();
    // });

    /******************** popup **********************/

    $('.pop').click(function() {
        $('#pop-back').fadeIn();
    });

    $('.closed').click(function() {
        $('#pop-back').hide();
    });

    $('.end').click(function() {
        $('#pop-back').hide();
    });

    /******************** 팝업 하루 동안 열지 않음 **********************/

    function setPopUpStart(obj) {
		// 체크박스 체크시
		if(obj.checked == true) {
			let expireDate = new Date();
            //쿠키 유효시간 한 달 설정
			expireDate.setDay(expireDate.getDay()+1); 
			// 쿠키 재설정
			document.cookie =
                "notShowPop=true;path=/;expires="+expireDate.toGMTString();
			window.close();
		}
	}

});




