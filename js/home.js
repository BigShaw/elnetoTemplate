

$( document ).ready(function() {

	var windowWidth = $(window).width();

	if ( windowWidth > 1080) {      
		$('.menuBar .menu a').click(function(e) {
			e.preventDefault();
			$('.menuBar').addClass('goToTop');
			var $a = $(this).addClass('active');
			setTimeout(function() {
				window.location.assign($a.attr('href'));
			}, 500);
		});
	} 
	else {
		$('.menuBar .menu a').click(function(e) {
			e.preventDefault();
			var $a = $(this).addClass('active');
			$('.mask').css('opacity','1');
			setTimeout(function() {
				window.location.assign($a.attr('href'));
			}, 500);
		});
	}


	function setImagePlacement(){
		var width = $('.movingImage .active img').width(),
		height = $('.movingImage .active img').height();
		$('.movingImage').css('width', windowWidth + width + windowWidth);
		$('.movingImage').css('margin-top', -height/2);
		$('.movingImage img').css('margin-right', windowWidth - width );
	}

	setImagePlacement();


	$('.menuBar .menu a').mouseenter(function(){
		var url = $(this).attr('href').split("/"),
		last_part = url[url.length-1];

		$('.movingImage').attr('id', last_part);
		$(".movingImage div").css('opacity',0);
		setTimeout(function() {
			$('.movingImage div').removeClass('active');
			$(".movingImage div." + last_part + "").addClass('active');
			setTimeout(function() {
				$(".movingImage div." + last_part + "").css('opacity',1);
				setImagePlacement();
			}, 300);
		}, 300);
	});


	$('.menuBar .menu a').mouseleave(function(){
		$(".movingImage div").css('opacity',0);
		setTimeout(function() {
			$('.movingImage').attr('id', '');
			$('.movingImage div').removeClass('active');
			$('.movingImage div.default').addClass('active');
			setTimeout(function() {
				$('.movingImage div.default').css('opacity',1);
				setImagePlacement();
			}, 300);
		}, 300);
	});



});
