$(document).ready(function() {

    var $insideScrollwhat = $('.insideScroll-what');
    var $insideScrollwho = $('.insideScroll-who');
    var $insideScrollwhere = $('.insideScroll-where');
    var $insideScrollwhy = $('.insideScroll-why');

   $('.menu-what').click(function () {
     $(this).toggleClass('isActive');
    $insideScrollwhat.toggleClass('isActive');
     });

    $('.menu-who').click(function () {
      $(this).toggleClass('isActive');
      $insideScrollwho.toggleClass('isActive');
     });

    $('.menu-where').click(function () {
      $(this).toggleClass('isActive');
      $insideScrollwhere.toggleClass('isActive');
     });

    $('.menu-why').click(function () {
      $(this).toggleClass('isActive');
      $insideScrollwhy.toggleClass('isActive');
    });

      $('.insideScroll-menu-element').each( function() {
        var $buttonRow = $( this );
        var $activeButton = $buttonRow.find('.insideScroll-menu-element.isАctive');

        $buttonRow.on( 'click', '.insideScroll-menu-element', function( event ) {
          $activeButton.removeClass('isActive');
          $activeButton = $( this );
          $activeButton.addClass('isActive');
  });

    });

    // бегущая по лезвию

    window.requestAnimationFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

var speed = 6000;
(function currencySlide(){
    var currencyPairWidth = $('.slideItem:first-child').outerWidth();
    $(".slideContainer").animate({marginLeft:-currencyPairWidth},speed, 'linear', function(){
                $(this).css({marginLeft:-0}).find("li:last").after($(this).find("li:first"));
        });
        requestAnimationFrame(currencySlide);
})();


});
