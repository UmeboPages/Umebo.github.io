'use strict';

$(function() {
  var $photographSection = $('#photograph .main section');

  $photographSection.hover(
    // カーソルが乗った時の処理
    function() {
      $(this).find('.photograph-list').slideDown('slow').removeClass('imgView');
    },
    // カーソルが外れた時の処理
    function() {
      $(this).find('.photograph-list').slideUp('slow').addClass('imgView');
    }
  );
});
