$(function() {
    $('.accordion dl dd').hide();
    $('.accordion dl dt.open').nextUntil('.accordion dl dt').show();
    $('.accordion dl dt').click(function(e) {
      $(this).toggleClass('open');
      $(this).nextUntil('.accordion dl dt').slideToggle('normal');
    });
  
  });