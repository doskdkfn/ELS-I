
$(document).ready(function() {
    /***************** pc menu *****************/

    $('#gnb > li').hover(function() {
        $('.submenu, .submenu-3', this).stop().slideDown();
    }, function() {
        $('.submenu, .submenu-3', this).stop().slideUp();
    });


    /***************** pc - slide *****************/

    function prev() {
        if(curPos > 0) {
            $('button').removeAttr('disabled')
            $($('#slide')[curPos]).toggleClass('active')
            $($('.a')[curPos]).toggleClass('active-step')
            $('#slide').hide();
            curPos -= 1;
            $($('#slide')[curPos]).toggleClass('active')
            $($('.a')[curPos]).toggleClass('active-step')
            $('.a').fadeIn(800);
        }
        if(curPos == 0){
            $(".prev")[0].setAttribute("disabled",'true')
        }
    }

    function next(){
        if(curPos < 3){
            $("button").removeAttr("disabled")
            $($("#slide")[curPos]).toggleClass("active")
            $($(".a")[curPos]).toggleClass("active-step")
            $("#slide").hide();
            curPos += 1;
            $($("#slide")[curPos]).toggleClass("active")
            $($(".a")[curPos]).toggleClass("active-step")
            $(".a").fadeIn(800); 
        }
        if(curPos == 3){
            $(".next")[0].setAttribute("disabled",'true')
        }
    }

    function init(){
        $("#slide").hide()
        $(".a").show()
        $(".left").click(prev)
        $(".rigt").click(next)
    }

    function next() {
        slider.stop().animate({
            'left': -moveSlider_width * incre
        }, 500);
        numSlider.stop().animate({
            'left': -numSlider_width * incre + num_init_left
        }, 500);
    }

    function prev() {
        slider.stop().animate({
            'left': -moveSlider_width * incre
        }, 500);
        numSlider.stop().animate({
            'left': -numSlider_width * incre + num_init_left
        }, 500);
    }

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
   
});




