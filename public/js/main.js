var arrowDown   = $('#arrow-down'),
	  info        = $('#info'),
	  projects    = $('#projects'),
	  contact     = $('#contact'),
    arrowUp     = $('#arrow-up'),
    navbar      = $('.navbar-default'),
    player      = $('#video-player');

var $el = $(this);

function onDocumentReady(){
	var scroll_pos = 0;
  $(document).scroll(function() { 
  	scroll_pos = $(this).scrollTop();
  	if(scroll_pos > 120) {
    	navbar.css({
    		'background-color': '#4d1a44', 
    		'box-shadow':'1px 2px 0 rgba(0,0,0,0.1)'
    });
    } else {
      navbar.css({
      	'background-color': 'rgba(0,0,0,0)',
      	'box-shadow':'0'
      });
    }
  });

  arrowDown.on('click', function() {
		$('body').animate({ scrollTop: 540}, 'slow');
	});

	info.on('click', function() {
		$('body').animate({ scrollTop: 540}, 'slow');
	});

	projects.on('click', function() {
		$('body').animate({ scrollTop: 1250}, 'slow');
	});

	contact.on('click', function() {
		$('body').animate({ scrollTop: 3780}, 'slow');
	});

  arrowUp.on('click', function() {
    $('body').animate({ scrollTop: 0}, 'slow');
  });

  $(window).scroll(function () {
  	if ($(this).scrollTop() > 520) {
  	  arrowUp.fadeIn();
    } else {
      arrowUp.fadeOut();
    }
  });

  player.fitVids();
}

$(document).on('ready', onDocumentReady);


