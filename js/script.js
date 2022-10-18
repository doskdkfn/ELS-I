
$(document).ready(function() {
    $('#gnb > li').hover(function() {
        $('.submenu, .submenu-3', this).stop().slideDown();
    }, function() {
        $('.submenu, .submenu-3', this).stop().slideUp();
    });
});




