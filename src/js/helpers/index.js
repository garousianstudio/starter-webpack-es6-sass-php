import $ from 'jquery';

global.requestAnimationFrame = window.requestAnimationFrame
			|| window.mozRequestAnimationFrame
			|| window.webkitRequestAnimationFrame
			|| window.msRequestAnimationFrame;

global.cancelAnimationFrame = window.cancelAnimationFrame
			|| window.mozCancelAnimationFrame;

// media query breakpoints
global.SCREEN = {
	XS: 500,
	SM: 800,
	MD: 1050,
	LG: 1440,
};

global.$window = $(window);
global.$document = $(document);
global.$body = $('body');
global.$page = $('.page');
