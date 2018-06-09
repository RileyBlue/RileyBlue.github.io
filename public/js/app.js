'use strict';

var arrowDown    = $('#arrow-down');
var navbar       = $('.navbar-default');
var navHome      = $('.navHome');
var navAbout     = $('.navAbout');
var navResume    = $('.navResume');
var navPortfolio = $('.navPortfolio');
var navContact   = $('.navContact');
var navBlog      = $('.navBlog'); 

$(document).on('ready', function(){
	var scroll_pos = 0;
	$(document).scroll(function(){
		scroll_pos = $(this).scrollTop();
		if(scroll_pos > 800){
			navbar.addClass('navbar-fixed-top');
		}
		else {
			navbar.removeClass('navbar-fixed-top');
		}
	});

	arrowDown.click(function() {
		$('html, body').animate({ scrollTop:  $('#about').offset().top}, 'slow');
	});

	navHome.on('click', function() {
		$('html, body').animate({ scrollTop:  $('#about').offset().top}, 'slow');
	});

	navAbout.on('click', function() {
		$('html, body').animate({ scrollTop:  $('#about').offset().top}, 'slow');
	});

	navResume.on('click', function() {
		$('html, body').animate({ scrollTop: $('#resume').offset().top }, 'slow');
	});

	navPortfolio.on('click', function() {
		$('html, body').animate({ scrollTop: $('#portfolio').offset().top}, 'slow');
	});

	navContact.on('click', function() {
		$('html, body').animate({ scrollTop:  $('#contact').offset().top}, 'slow');
	});

	 $(function() {
  	$(".container").mixItUp();
	})
});