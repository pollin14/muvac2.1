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
		/**Esta parte prepara la capa obscura */
		$('body').append('<div id="slayer" class="slayer"></div>');
		$(ops.container).appendTo('#slayer');

		$(ops.links).on('click', function(event) {
			event.preventDefault();


			$(ops.container).load($(this).attr('href'), function() {

				var $screen = $(this).find('.screen');
				var elems = $screen.find('> div.sections > ul > li').length;
				var width = (elems === 0) ? 0 : (100 / elems);

				$(this).find('div.screen li').width(width + "%");
				$(this).find('div.screen ul').width((100 * elems) + "%");

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

				$(this).find("li").each(function() {
					var html = $(this).html();
					$(this).html("")
							.append('<div class="caja_info_aparato"></div>').
							children().html(html);
					$(this).children('.caja_info_aparato').append('<div style="clear:both"></div>')

				});


				//No se porque show no me acepta un objeto con sus opciones.
				//$('#slayer').show(ops.showOptions);
				$('#slayer').show(
						ops.showOptions.easing,
						ops.showOptions.options,
						ops.showOptions.duration,
						ops.showOptions.callback
						);

				$(this).find(ops.closedButton).on('click', function() {
					$('#slayer').hide(
							ops.hideOptions.easing,
							ops.hideOptions.options,
							ops.hideOptions.duration,
							function() {
								$(ops.container).html('');
								if( ops.hideOptions.callback !== undefined)
									ops.hideOptions.callback();
							}
					);
				});

			});
		});


	};

	$.visorDeInformacion.defaults = {
		container: '#mi_super_visor_de_informacion',
		links: '#enlaces_con_la_informacion a',
		closedButton: 'div.closedButton', //relativo a container.
		hideOptions: {}, // Opciones de la animación hide
		showOptions: {} //Opciones de la animación show
	};

})(jQuery);