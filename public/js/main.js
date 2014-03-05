var arrowDown = $('#arrow-down'),
	info      = $('#info'),
	projects  = $('#projects'),
	contact   = $('#contact'),
    arrowUp   = $('#arrow-up');

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
}

$(document).on('ready', onDocumentReady);
