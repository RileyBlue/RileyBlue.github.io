var home    = $('#homeOption'),
    company = $('#companyOption'),
    ztrap   = $('#ztrapOption'),
    body    = $('body'),
    tree    = $('#treeOption');

function onDocumentReady () {
	company.on('click', function () {
		body.animate({ scrollTop: 1000 }, 'slow');
	});

	ztrap.on('click', function () {
		body.animate({ scrollTop: 4000 }, 'slow');
	});
}

$(window).stellar();

$(document).on('ready', onDocumentReady);