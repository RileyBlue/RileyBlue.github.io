var home    = $('#homeOption'),
    company = $('#companyOption'),
    ztrap   = $('#ztrapOption'),
    body    = $('body'),
    tree    = $('#treeOption');

function onDocumentReady () {
	company.on('click', function () {
		body.animate({ scrollTop: 1000 }, '600');
	});

	ztrap.on('click', function () {
		body.animate({ scrollTop: 4000 }, 'slow');
	});
}


$(document).on('ready', onDocumentReady);