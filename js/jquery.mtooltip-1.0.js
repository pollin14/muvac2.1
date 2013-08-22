/*
 * Tooltip
 *
 * Description: Crea un dialogo de ayuda conocido como tooltip:
 * Dependences: Jquery UI Animations.
 * Autor: Victor Aguilar
 * 
 */

(function($){
	$.fn.mtooltip = function(options){
		
		var defaults = {
			top: "auto",
			left: "auto",
			right: "auto",
			bottom: "auto",
			effect: "slide"
		}
		
		var settings = $.extend(defaults,options);
		
		this.each(function(){

			$(this).parent().css("position","relative");

			$(this).css({
				position: "absolute",
				left: settings["left"],
				top: settings["top"],
				right: settings["right"],
				bottom: settings["bottom"]
			});
			$(this).prepend('<div class="close"></div>')
			.children('.close').on('click',function(){
				$(this).parent().hide(settings['effect']);
			});
		});
		
		return this;
	}
})(jQuery);