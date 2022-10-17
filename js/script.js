$(document).ready(function() {
    $('#gnb > li').hover(function() {
        $('.submenu').stop().slideDown();
    }, function() {
        $('.submenu').stop().slideUp();
    });
});