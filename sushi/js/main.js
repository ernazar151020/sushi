$(document).ready(function () {
	$('.navbar-toggler').click(function () {
		$('.navbar-toggler').toggleClass('change')
		$('.collapse').toggleClass('show')

	})
	$(window).scroll(function () {
		let position = $(this).scrollTop();
		if (position >= 718) {
			$('.navbar').addClass('navbar-background');
			$('.navbar').addClass('fixed-top');
		}
		else {
			$('.navbar').removeClass('navbar-background');
			$('.navbar').removeClass('fixed-top');
		}
		console.log(position)
})
	$(window).scroll(function () {
		let position = $(this).scrollTop();
		if (position >= 718) {
			$('#back-to-top').addClass('scrollTop');
	
		}
		else {
			$('#back-to-top').removeClass('scrollTop');
		}
		console.log(position)
})



	$('#header , .info').ripples({
		dropRadius: 25,
		perturbance: 0.03,
	});

	$('.parent-container').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		gallery: {
			enabled:true
		}
	
	});


});