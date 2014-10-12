$(document).on('ready', function(){
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