var home    = $('#homeOption'),
    company = $('#companyOption'),
    ztrap   = $('#ztrapOption'),
    body    = $('body'),
    tree    = $('#treeOption'),
    arrow		= $('#arrow-up');

function onDocumentReady () {
	company.on('click', function () {
		body.animate({ scrollTop: 1645 }, 1500);
	});

	tree.on('click', function () {
		body.animate({ scrollTop: 1645 }, 1500);
	});

	ztrap.on('click', function () {
		body.animate({ scrollTop: 2980 }, 1500);
	});

	arrow.on('click', function (){ 
		body.animate({ scrollTop: 0 }, 1500);
	});
}

$(window).stellar();

$(document).on('ready', onDocumentReady);