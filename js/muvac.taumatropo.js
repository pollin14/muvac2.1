/*
 * File Name
 *
 * Description: a description of script
 * Autor: Victor Aguilar
 * 
 */

(function($){
	
	/*
	 * Metodos privados
	 */
	var methods = {
		'init' : function(options){
	    
			var settings = $.extend({} ,$.fn.taumatropo.defaults,options);
		
			return $(this).each(function(){

				$(this).data('working',false);
				$(this).data('idInterval', null );
			
				var parent = $(this).parent();
				var newParent = $('<div class="taumatropo_wrapper"></div>');
			
				$(this).children('.front').addClass('visible'); // solo indicamos que la cara es visible.
			
				//if it is setting a width or height then we update them.
				//In otherwise, we do nothing
				if( settings.width != 150 || settings.height != 150){
					newParent.width(settings.width);
					newParent.height(settings.height);
				}
			
				parent.append(newParent);
				$(this).appendTo(newParent);
		
				newParent.hover( methods['flip'], methods['unflip'] );
				
				newParent.on(settings.event,function(){
				 
					var taumatropo = $(this).children('.taumatropo');
				 
					$(this).off('mouseenter',methods['flip']);
					$(this).off('mouseleave',methods['unflip']);
				
					$(this).find('.taumatropo').removeClass('flipped'); // Lo regresamos a su estado inicial
					$(this).find('.back').removeClass('back'); //hacemos que la cara tracera se vea;
				 
					if( ! $(this).data('working') ){
					
						var animation = function(){
						
							var invisible = taumatropo.find('.invisible');
							var visible = taumatropo.find('.visible');
						
							invisible.
							show().
							removeClass('invisible').
							addClass('visible');
					
							visible.
							removeClass('visible').
							addClass('invisible').
							hide();	
						}		   
					
						$(this).data('idInterval',window.setInterval(animation,settings.velocity) );
						$(this).data('working',true);
					}else{
									
						window.clearInterval($(this).data('idInterval') );
						$(this).data('working',false);
						//Tenemos que des-ocultar la cara frontal, porque puede
						//quedar oculta a causa del efecto. Además agregamos
						//a la cara de atras la clase back.
					
						$(this).find('.front').
						show().
						addClass('visible').
						removeClass('invisible').
						siblings().
						show().
						addClass('back').
						addClass('invisible').
						removeClass('visible');
				
						$(this).hover(methods['flip'],methods['unflip']);
					
					}
				});
			});
		},
		'flip' : function(){
			var taumatropo = null;
	    
			if( $(this).hasClass('taumatropo_wrapper')){
				taumatropo = $(this).children('.taumatropo');
			}else{
				taumatropo = $(this);
			}
			
			$(taumatropo).addClass('flipped');
			$(taumatropo).children('.back').addClass('visible'); //solo indica que es visible para el usuario
			$(taumatropo).children('.back').removeClass('invisible');
			$(taumatropo).children('.front').removeClass('visible');
			$(taumatropo).children('.front').addClass('invisible');
		},
		'unflip' : function(){
	    
			var taumatropo = null;
	    
			if( $(this).hasClass('taumatropo_wrapper')){
				taumatropo = $(this).children('.taumatropo');
			}else{
				taumatropo = $(this);
			}
	    
			$(taumatropo).removeClass('flipped');
			$(taumatropo).children('.front').addClass('visible'); //solo indica que es visible para el usuario
			$(taumatropo).children('.front').removeClass('invisible');
			$(taumatropo).children('.back').removeClass('visible');
			$(taumatropo).children('.back').addClass('invisible'); 
		}
	}
	
	$.fn.taumatropo = function(method){
		
		// Method calling logic
		if ( methods[method] ) {
			return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
		} else if ( typeof method === 'object' || ! method ) {
			return methods.init.apply( this, arguments );
		} else {
			$.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
		}  
	}
	
	$.fn.taumatropo.defaults = {
		event : 'none',
		velocity: 1000/30,
		width: 150,
		height: 150
	}
})(jQuery)