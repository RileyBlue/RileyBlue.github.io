var home    = $('#homeOption'),
    company = $('#companyOption'),
    ztrap   = $('#ztrapOption'),
    tree    = $('#treeOption');

function onDocumentReady () {
	company.on('click', function () {
		body.animate({ scrollTop: 1000 }, 'slow');
	});

	ztrap.on('click', function () {
		body.animate({ scrollTop: 2000 }, 'slow');
	});
}


$(document).on('ready', onDocumentReady);