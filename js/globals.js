

$( document ).ready(function() {
	$('.mask').css('opacity','0');


	$('.menuBar .title').click(function(e) {
		e.preventDefault();
		$('.mask').css('opacity','1');
		$('.menuBar .menu a').removeClass('active');
		setTimeout(function() {
			window.location.assign($('.menuBar > a').attr('href'));
		}, 500);
	});

	$('.menuBar.goToTop .menu a').click(function(e) {
		e.preventDefault();
		var $a = $(this).addClass('active');
		$('.mask').css('opacity','1');
		setTimeout(function() {
			window.location.assign($a.attr('href'));
		}, 500);
	});


});