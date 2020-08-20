export function setUpHeader() {
	// fixed header code
	var scrollPosition = window.scrollY;
	var body = document.querySelector('body');
	var headerNav = document.querySelector('header.header');
	var headerSpacer = document.querySelector('.header_spacer');
	var announcement = document.querySelector('.announcement');
	var annc_height = announcement.offsetHeight;
	var header_height = headerNav.offsetHeight;

	window.addEventListener('scroll', function() {

		scrollPosition = window.scrollY;
		
		
		if (scrollPosition >= annc_height) {
			body.classList.add('page--scrolled');
			headerSpacer.style.height = header_height + 'px';
		} else if (scrollPosition < annc_height) {
			body.classList.remove('page--scrolled');
			headerSpacer.style.height = 0;
		}

	});

	// END fixed header code
}