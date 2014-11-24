var home    = $('#homeOption'),
    company = $('#companyOption'),
    ztrap   = $('#ztrapOption'),
    body    = $('body'),
    tree    = $('#treeOption');

function onDocumentReady () {
	company.on('click', function () {
		body.animate({ scrollTop: 1565 }, 2000);
	});

	tree.on('click', function () {
		body.animate({ scrollTop: 1565 }, 2000);
	});

	ztrap.on('click', function () {
		body.animate({ scrollTop: 3490 }, 3000);
	});
}

$(window).stellar();

$(document).on('ready', onDocumentReady);