if (! Muvac){ var Muvac = {};};

Muvac.aparatos = function(container) {
	var $screen = $(container).find('.screen');
	var elems = $screen.find('> div.sections > ul > li').length;
	var width = (elems === 0) ? 0 : (100 / elems);

	$(container).find('div.screen li').width(width + "%");
	$(container).find('div.screen ul').width((100 * elems) + "%");

	$(container).children('.screen').serialScroll({
		target: '.sections',
		items: 'li', // Selector to the items ( relative to the matched elements, '.sections' in this case )
		prev: 'img.prev', // Selector to the 'prev' button (absolute!, meaning it's relative to the document)
		next: 'img.next', // Selector to the 'next' button (absolute too)
		axis: 'x', // The default is 'y' scroll on both ways
		//			navigation:'nav.equipment ul li ul.submenu li a',
		duration: 300, // Length of the animation (if you scroll 2 axes and use queue, then each axis take half this time)
		force: true // Force a scroll to the element specified by 'start' (some browsers don't reset on refreshes)
	});

	$(container).find("li").each(function() {
		var html = $(this).html();
		$(this).html("")
				.append('<div class="caja_info_aparato"></div>').
				children().html(html);
		$(this).children('.caja_info_aparato').append('<div style="clear:both"></div>');

	});

};