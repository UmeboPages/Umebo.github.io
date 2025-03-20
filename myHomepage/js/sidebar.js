'use strict';
$(function() {
    const $sidebar = $('.sidebar');
    const duration = 300;
    const $btn = $('.sidebar-toggle-btn');
    $btn
        .on('click', function() {
            $sidebar.toggleClass('open');
            // click to open
            if ($sidebar.hasClass('open')) {
                $sidebar.stop(true).animate({
                    left: '70%'
                }, duration);
                $(this).find('img').attr('src', '../img/close.png');
            }
            // click to close
            else {
                $sidebar.stop(true).animate({
                    left: '95%'
                }, duration);
                $(this).find('img').attr('src', '../img/open.png');
            }
        },);
});