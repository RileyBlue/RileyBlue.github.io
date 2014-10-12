var arrowDown   = $('#arrow-down');
var navbar      = $('.navbar-default');

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

	arrowDown.on('click', function() {
		$('body').animate({ scrollTop: 800}, 'slow');
	});
	$(function() {
    $('.chart').easyPieChart({
      easing: 'easeOutBounce',
      barColor: '#ddd',
      size: 130,
      lineWidth: 7,
      onStep: function(from, to, percent) {
        $(this.el).find('.percent').text(Math.round(percent));
      }
    });
  }); 

  $(function() {
  	$(".container").mixItUp();
	})
});