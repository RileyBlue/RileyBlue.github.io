var arrowDown = $('#arrow'),
	info      = $('#info'),
	projects  = $('#projects'),
	contact   = $('#contact');

var $el = $(this);

function onDocumentReady(){
	arrowDown.on('click', function() {
		$('body').animate({ scrollTop: 520}, 'slow');
	});

	info.on('click', function() {
		$('body').animate({ scrollTop: 520}, 'slow');
	});

	projects.on('click', function() {
		$('body').animate({ scrollTop: 1330}, 'slow');
	});

	contact.on('click', function() {
		$('body').animate({ scrollTop: 2780}, 'slow');
	});
}

$(document).on('ready', onDocumentReady);