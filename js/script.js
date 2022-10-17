
$(document).ready(function() {
    $('#gnb > li').hover(function() {
        $('.submenu', this).stop().slideDown();
    }, function() {
        $('.submenu', this).stop().slideUp();
    });
});




