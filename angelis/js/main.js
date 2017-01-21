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
	audioPlayer();

	function audioPlayer() {
		var currentSong = 0;
		$('#audioPlayer')[0].src = $("#playlist li a")[0];
		//$('#audioPlayer')[0].play();
		$('#playlist li a').click(function(e) {
			e.preventDefault();
			$('#audioPlayer')[0].src = this;
			$('#audioPlayer')[0].play();
			$('#playlist li').removeClass('current-song');
			currentSong = $(this).parent().index();
			$(this).parent().addClass('current-song')
		});

		$('#audioPlayer')[0].addEventListener('ended', function(){
			alert('Hi');
		});
	}

	var scroll_pos = 0;
	$(document).scroll(function(){
		scroll_pos = $(this).scrollTop();
		if(scroll_pos > 500){
			navbar.addClass('navbar-fixed-top');
			navbar.css('margin-top', '0');
			footer.css({
				'display': 'block'
			});
			footer.addClass('navbar-fixed-bottom');
		}
		else {
			navbar.removeClass('navbar-fixed-top');
			/*navbar.css('margin-top', '-3rem');*/
			footer.css({
				'display': 'none'
			});
			footer.removeClass('navbar-fixed-bottom');
		}
	});

	$(document).on('click','.navbar-collapse.in',function(e) {
	    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
	        $(this).collapse('hide');
	    }
	});

	var mediaquery = window.matchMedia("(max-width: 570px)");
	if (mediaquery.matches) {
		var scroll_pos = 0;
		$(document).scroll(function(){
			scroll_pos = $(this).scrollTop();
			if(scroll_pos > 0){
				navbar.addClass('navbar-fixed-top');
				navbar.css('margin-top', '0');
				footer.css({
					'display': 'block'
				});
				footer.addClass('navbar-fixed-bottom');
			}
			else {
				navbar.removeClass('navbar-fixed-top');
				/*navbar.css('margin-top', '-3rem');*/
				footer.css({
					'display': 'none'
				});
				footer.removeClass('navbar-fixed-bottom');
			}
		});
		servicesLink.on('click', function() {
			$('body').animate({ scrollTop: 380}, 'slow');
		});

		galleryLink.on('click', function() {
			$('body').animate({ scrollTop: 990}, 'slow');
		});

		faqLink.on('click', function() {
			$('body').animate({ scrollTop: 2980}, 'slow');
		});	

		contactLink.on('click', function() {
			$('body').animate({ scrollTop: 3470}, 'slow');
		});	
	} else {
	  	arrowDown.on('click', function() {
			$('body').animate({ scrollTop: 550}, 'slow');
		});

		servicesLink.on('click', function() {
			$('body').animate({ scrollTop: 550}, 'slow');
		});

		galleryLink.on('click', function() {
			$('body').animate({ scrollTop: 1200}, 'slow');
		});

		faqLink.on('click', function() {
			$('body').animate({ scrollTop: 2010}, 'slow');
		});	

		contactLink.on('click', function() {
			$('body').animate({ scrollTop: 2500}, 'slow');
		});	
	}

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