$('.navbar__link').click(function() {
	var pageShow = $(this).attr('href');
	$('.navbar__link.navbar--current').removeClass('navbar--current');
	$(this).addClass('navbar--current');
	// $('.page.active').fadeOut(function() {
	$('.page.active').removeClass('active');
	// });
	$(pageShow).fadeIn(function() {
		$(pageShow).addClass('active');
		$(pageShow).removeAttr('style');
		if ($('#resume').hasClass('active')) {
			if (
				document.querySelectorAll('.skill').length > 0 &&
				document.querySelectorAll('.skill [data-progress]').length > 0
			) {
				// run all elments have [data-progress] attribut
				document.querySelectorAll('.skill [data-progress]').forEach((x) => AnimateProgress(x));
			}
		}
	});
});

function AnimateProgress(elem) {
	// add className .animate-progress to the elem
	elem.className = 'animate-progress';
	// set custom attribue to the elem base on the [data-progress]
	elem.setAttribute('style', `--animate-progress:${elem.getAttribute('data-progress')}%;`);
}

$('#mobileMenu').click(function() {
	console.log('run');
	// $('#menu').toggle('slide', { direction: 'right' }, 1000);
	if ($('#menu').hasClass('menu--active')) {
		$('#menu').hide();
		$('#menu').removeClass('menu--active');
	} else {
		$('#menu').show();
		$('#menu').removeAttr('style');
		$('#menu').addClass('menu--active');
	}
});

// $('#mobileMenu').click(function() {
// 	if ($('#menu:visible').length) $('#another-element').hide('slide', { direction: 'right' }, 1000);
// 	else $('#another-element').show('slide', { direction: 'right' }, 1000);
// });