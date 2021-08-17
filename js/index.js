'use strict';

$(function() {
  // View of greeting
  const $topGreeting = $('#index #wrap .content > h1');
  $topGreeting.fadeIn(3000);

  // Button
  const $btn = $('.btn > a');
  $btn
    .on('mouseover', function() {
      $(this).stop(true).animate({
        top: '-5px',
        left: '-5px',
        boxShadow: '10px 10px 30px #111',
      }, 200)
    },)
    .on('mouseout', function() {
      $(this).stop(true).animate({
        top: 0,
        left: 0,
        boxShadow: '0 0 0 #000',
      }, 200)
    });
});
