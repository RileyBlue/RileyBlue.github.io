var home    = $('#homeOption'),
    company = $('#companyOption'),
    ztrap   = $('#ztrapOption'),
    tree    = $('#treeOption');

function onDocumentReady () {
	home.on('click', function () {
		body.animate({ scrollTop: 200 }, 'slow');
	});
}


$(document).on('ready', onDocumentReady);