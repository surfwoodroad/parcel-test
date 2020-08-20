export function setUpHamburger() {
	// hamburger nav code

	var hamburgerBtn = document.querySelector('.hamburger');
	var hamburgerMenu = document.querySelector('.main_nav');
	hamburgerBtn.addEventListener('click', function(e) {
		e.preventDefault();
		if (hamburgerMenu.classList.contains('menu-display')) {
			hamburgerMenu.classList.remove('menu-display');
			hamburgerBtn.classList.remove('make-x');
		} else {
			hamburgerMenu.classList.add('menu-display');
			hamburgerBtn.classList.add('make-x');
		}
	});

	var regularMenuItem = document.querySelector('.main_nav');

	regularMenuItem.addEventListener('click', function() {
		var hamburgerMenuItem = document.querySelector('.main_nav.menu-display a');
		if (hamburgerMenuItem) {
			hamburgerMenu.classList.remove('menu-display');
			hamburgerBtn.classList.remove('make-x');
		}
	});

	// END hamburger nav code
}