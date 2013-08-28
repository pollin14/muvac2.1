
(function($){
	$.subpage = function(settings){
		
		var ops = $.extend({},$.subpage.defaults, settings);
		
		$('body').append('<div id="slayer" class="slayer"><div class="closedButton"></div></div>');
		$(ops.container).appendTo('#slayer').addClass('subpage');
		
		$('#slayer').children('.closedButton').click(function(){
			$(ops.container).html('');
			$('#slayer').hide(ops.hideOptions);
		});
	};
	
	$.subpage.defaults = {
		container : '#subpage',
		hideOptions: {},
		showOptions: {}
	};
})(jQuery);
