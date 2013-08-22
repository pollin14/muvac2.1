// JavaScript Document

	    $(document).ready(function() {

		$("#lint").click(function() {
		    $("#informacion_aparatos").fadeIn("fast");

		});

		$("#mutos").click(function() {
		    $("#informacion_aparatos").fadeIn("500");


		});
		//sirve para cerrar el cuadro de informaci'on
		$(".cerrar").click(function() {
		    $("#informacion_aparatos").slideToggle('fast');
		    $("#informacion_aparatos").fadeOut("500");
		});


		$("li#header_prin_cine").mouseleave(function() {
		    $(".header_secciones_cine").slideToggle("fast");
		});

		//    para poder accesar desde el menu principal
		$(".menu_fundamentos").click(function() {
		    $(".fundamentos_comic").slideToggle("1000");
		    $(".precine_aparatos").hide("fast");
		    $(".amateur_aparatos").hide("fast");
		    $(".profe_aparatos").hide("fast");
		    $(".ingenio_aparatos").hide("fast");
		     $(".tres_d_recorrido").hide("fast");

		});
		
		$(".menu_precine").click(function() {
		    
		    $(".precine_aparatos").slideToggle("1000");
		    $(".fundamentos_comic").hide("fast");
		    $(".amateur_aparatos").hide("fast");
		    $(".profe_aparatos").hide("fast");
		    $(".ingenio_aparatos").hide("fast");
		     $(".tres_d_recorrido").hide("fast");
		});

		$(".menu_amateur").click(function() {

		    $(".amateur_aparatos").slideToggle("1000");
		    $(".fundamentos_comic").hide("fast");
		    $(".precine_aparatos").hide("fast");
		    $(".profe_aparatos").hide("fast");
		    $(".ingenio_aparatos").hide("fast");
		     $(".tres_d_recorrido").hide("fast");
		});

		$(".menu_prof").click(function() {

		    $(".profe_aparatos").slideToggle("1000");
		    $(".fundamentos_comic").hide("fast");
		    $(".amateur_aparatos").hide("fast");
		    $(".precine_aparatos").hide("fast");
		    $(".ingenio_aparatos").hide("fast");
		     $(".tres_d_recorrido").hide("fast");

		});

		$(".menu_ingenio").click(function() {
		    $(".ingenio_aparatos").slideToggle("1000");
		    $(".fundamentos_comic").hide("fast");
		    $(".profe_aparatos").hide("fast");
		    $(".amateur_aparatos").hide("fast");
		    $(".precine_aparatos").hide("fast");
		     $(".tres_d_recorrido").hide("fast");
		});
		$(".menu_3d").click(function() {
		    $(".tres_d_recorrido").slideToggle("1000");
		    $(".fundamentos_comic").hide("fast");
		    $(".profe_aparatos").hide("fast");
		    $(".amateur_aparatos").hide("fast");
		    $(".precine_aparatos").hide("fast");
		     $(".ingenio_aparatos").hide("fast");
		});
		$(".abajo").click(function() {
		    $(".menu_fundamentos").slideToggle("1000");
		    $(".menu_precine").slideToggle("1000");
		    $("#header_prin_cine").slideToggle("1000");
		    $(".menu_3d").slideToggle("1000");

		});





	    });
	