export function setUpFooter() {

	// footer accordion links for mobile
	var footer = document.querySelector('footer');
	var ulOne, ulTwo;

	function getHeight(el) {
		if ( el.matches('.second') ) {
			return ulTwo;
		} else {
			return ulOne;
		}
	}

	function footerAccordion(e) {
		e.preventDefault();
		// get the element
		if (!event.target.matches('.footer-fancy') && !event.target.matches('.plus')) return;

		var hdr = e.target.closest('.footer-fancy');
		var hdrPlus = hdr.querySelector('.plus');
		var hdrPlusVal = hdr.querySelector('.plus').innerText;

		// get the UL
		var ul = hdr.nextElementSibling;

		// get its parent
		var parentDiv = ul.closest('.footer-links');

		// get the height needed to animate
		var height = getHeight(parentDiv);

		//check if it's collapsed or not
		ul.offsetHeight > 0 ? ul.style.height= 0 : ul.style.height = height + 'px';
		hdrPlusVal == '+' ? hdrPlus.innerText = '-' : hdrPlus.innerText = '+';
	}


	// set up accordion for small screens
	function checkScreen() {
		if (window.screen.width <= 900) {
			// get the heights of the ULs so we can animate the height
			ulOne = footer.querySelector('.footer-links ul').offsetHeight;
			ulTwo = footer.querySelector('.footer-links.second ul').offsetHeight;
			// this will hide the second list and set up some styles
			footer.classList.add('accordion');
			// call the accordion
			footer.addEventListener('click', footerAccordion);
		} else {
			footer.classList.remove('accordion');
		}
	}
	checkScreen();
	window.onresize = checkScreen;
	// END footer accordion links for mobile
}