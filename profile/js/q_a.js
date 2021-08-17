'use strict';
$(function() {
  $('.question > h3').click(function() {
    var answer = $(this).siblings('.answer');

    if(answer.hasClass('answer')) {
      $(this).siblings('p').slideDown().removeClass('answer');
      $(this).find('.state').text('-');
    }
    else {
      $(this).siblings('p').slideUp().addClass('answer');
      $(this).find('.state').text('+');
    }
  });
});
