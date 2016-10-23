$(document).ready(function() {
	console.log('Hello World');
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