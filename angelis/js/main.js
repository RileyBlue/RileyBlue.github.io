var navbar       = $('.navbar-default');
var arrowDown    = $('#arrow-down');
var footer       = $('.footer--container');

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