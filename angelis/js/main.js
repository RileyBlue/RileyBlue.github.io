var navbar       = $('.navbar-default');
var arrowDown    = $('#arrow-down');
var footer       = $('.footer--container');
var faq          = $('#faq');
var faqLink      = $('#faqLink');
var services     = $('#services');
var servicesLink = $('#servicesLink');
var gallery      = $('#gallery');
var galleryLink  = $('#galleryLink');
var contact      = $('#contact');
var contactLink  = $('#contactLink');

$(document).ready(function() {
	console.log('Hello World');
	var scroll_pos = 0;
	$(document).scroll(function(){
		scroll_pos = $(this).scrollTop();
		if(scroll_pos > 750){
			navbar.addClass('navbar-fixed-top');
			navbar.css('margin-top', '0');
			footer.css({
				'display': 'block'
			});
			footer.addClass('navbar-fixed-bottom');
		}
		else {
			navbar.removeClass('navbar-fixed-top');
			navbar.css('margin-top', '-3rem');
			footer.css({
				'display': 'none'
			});
			footer.removeClass('navbar-fixed-bottom');
		}
	});

	arrowDown.on('click', function() {
		$('body').animate({ scrollTop: 800}, 'slow');
	});

	servicesLink.on('click', function() {
		$('body').animate({ scrollTop: 700}, 'slow');
	});

	galleryLink.on('click', function() {
		$('body').animate({ scrollTop: 1300}, 'slow');
	});

	faqLink.on('click', function() {
		$('body').animate({ scrollTop: 2110}, 'slow');
	});	

	contactLink.on('click', function() {
		$('body').animate({ scrollTop: 2700}, 'slow');
	});	

	$('.grid').masonry({
  // set itemSelector so .grid-sizer is not used in layout
	  itemSelector: '.grid-item',
	  // use element for option
	  columnWidth: '.grid-sizer',
	  percentPosition: true
	});

	$('#video').YTPlayer({
	    fitToBackground: true,
	    videoId: 'x2TchcMcnmI'
	});

});