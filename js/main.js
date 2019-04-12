var t = $('#top');
$(window).scroll(function() {
  if ($(window).scrollTop()> 300) {
    t.addClass('show');
  } else {
    t.removeClass('show');
  }
});
t.on('click', function(e){
  e.preventDefault();
  $('html,body').animate({scrollTop:0}, '300');
});
$('.burger').on('click', function(event) {
	event.preventDefault();
	/* Act on the event */
	$('.nav').addClass('open');
});
$('[data-trigger="dropdown"]').on('mouseenter', function(){
  var submenu = $(this).parent().find('.nav');
  submenu.fadeIn(300);

  $(this).on('mouseleave', function(){

    $('.burger').on('mouseleave', function(){
      submenu.fadeOut(300);
    });
  });
});