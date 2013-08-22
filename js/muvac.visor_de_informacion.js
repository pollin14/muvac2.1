/**
 * 
 * Author: Victor Aguilar 
 * 
 * Dependencies: 
 *		jquery.js
 *		jquery.scrollTo.js
 *		jquery.serialScroll.js
 *		
 *		muvac.visorDeInformacion.css
 * 
 * Proyecto: Muvac
 * 
 * Description:Carga el contenido del un link en el elemento seleccionado para
 * visualizar su información.
 */

(function($) {

    $.visorDeInformacion = function(settings) {

	var ops = $.extend({}, $.visorDeInformacion.defaults, settings);

	$(ops.container).addClass('visor-de-informacion');

	$(ops.links).on('click', function(event) {
	    event.preventDefault();

	    $(ops.container).load($(this).attr('href'), function() {

		var $screen = $(this).find('.screen');
		var elems = $screen.find('> div.sections > ul > li').length;
		var width = (elems === 0) ? 0 : (100 / elems);
		var newClass = '\
<style>\n\
' + ops.container + ' div.screen li{\n\
width:' + (width) + '%;}\n\
</style>';
		$('head').append(newClass);

		console.log(newClass);
//	    width = $('#informacion_aparatos').width();

		newClass = '\
<style>\n\
' + ops.container + ' div.screen ul{\n\
width:' + (100 * elems) + '%;}\n\
</style>';
		$('head').append(newClass);
		console.log(newClass);

		$(this).children('.screen').serialScroll({
		    target: '.sections',
		    items: 'li', // Selector to the items ( relative to the matched elements, '.sections' in this case )
		    prev: 'img.prev', // Selector to the 'prev' button (absolute!, meaning it's relative to the document)
		    next: 'img.next', // Selector to the 'next' button (absolute too)
		    axis: 'x', // The default is 'y' scroll on both ways
		    //			navigation:'nav.equipment ul li ul.submenu li a',
		    duration: 300, // Length of the animation (if you scroll 2 axes and use queue, then each axis take half this time)
		    force: true // Force a scroll to the element specified by 'start' (some browsers don't reset on refreshes)
		});

		$(ops.container + "li").each(function() {
		    var html = $(this).html();
		    $(this).html("")
			    .append('<div class="caja_info_aparato"></div>')
			    .chidlren().html(html);

		});
		$(this).show(ops.sh);
		
		$(ops.container).find(ops.closedButton).on('click', function() {
		    $(ops.container).hide(ops.sh);
		});

	    });
	});


    };

    $.visorDeInformacion.defaults = {
	container: '#mi_super_visor_de_informacion',
	links: '#enlaces_con_la_informacion a',
	closedButton: 'div.closedButton', //relativo a container.
	sh: {} // opciones para las funciones show y hide (sh).
    };

})(jQuery);