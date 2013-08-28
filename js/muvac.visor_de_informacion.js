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

				ops.callback(this);

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
		showOptions: {}, //Opciones de la animación show
		callback: function(){}
	};

})(jQuery);