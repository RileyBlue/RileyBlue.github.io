function onDocumentReady() {
  new WOW().init();
  $('#sliderExtravaganas').owlCarousel({
		rtl:false,
	    loop:true,
	    margin:0,
	    nav:true,
	    fluidSpeed: 1800,
	    smartSpeed: 1800,
	    autoplay:true,
	    slideBy: 500,
	    autoplayTimeout: 0,
	    //autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items: 4
	        },
	        600:{
	            items: 6
	        },
	        1000:{
	            items: 8
	        }
	    }
	});
}

$(document).on('ready', onDocumentReady);