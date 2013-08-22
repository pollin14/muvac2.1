

(function($) {
    $.fn.rawAnimation = function(options) {
	var ops = $.extend({}, $.fn.rawAnimation.defaults, options);
	
	
	var images = $(this).children('img');
	var lastFrame = images.length - 1;
	var seconds = 1000 / ops.fps;

	var preframe = 0;
	var frame = 1;

	var animate = function() {
	    
	    if( frame === lastFrame +1 ){
		if( ops.stop ){
		    frame = preframe;
		    preframe = 0;
		    window.clearInterval(ticker);
		}else{
		    frame = 0;
		    preframe = lastFrame;
		}
	    }

	    $(images[preframe]).hide();
	    $(images[frame]).show();
	    preframe = frame;
	    frame++;
	};

	images.hide();
	$(images[0]).show();

//		$(this).data['ticker', window.setInterval(animate,seconds)];
	var ticker = window.setInterval(animate, seconds);
    };

    $.fn.rawAnimation.defaults = {
	fps: 15,
	stop: false
    };
})(jQuery);