//estas lineas de abajo sirven para ocultar y mostrar las secciones

$(document).ready(function() {
	$("#fundamentos_texto").click(function() {
		$(".fundamentos_comic").slideToggle("1000");
		$(".precine_aparatos").hide("fast");
		$(".amateur_aparatos").hide("fast");
		$(".profe_aparatos").hide("fast");
		$(".ingenio_aparatos").hide("fast");
		$(".tres_d_recorrido").hide("fast");
	});

	$("#precine_texto").click(function() {
		$(".precine_aparatos").slideToggle("1000");
		$(".fundamentos_comic").hide("fast");
		$(".amateur_aparatos").hide("fast");
		$(".profe_aparatos").hide("fast");
		$(".ingenio_aparatos").hide("fast");
		$(".tres_d_recorrido").hide("fast");
	});


	$("#amateur_texto").click(function() {
		$(".amateur_aparatos").slideToggle("1000");
		$(".fundamentos_comic").hide("fast");
		$(".precine_aparatos").hide("fast");
		$(".profe_aparatos").hide("fast");
		$(".ingenio_aparatos").hide("fast");
		$(".tres_d_recorrido").hide("fast");
	});

	$("#profe_texto").click(function() {
		$(".profe_aparatos").slideToggle("1000");
		$(".fundamentos_comic").hide("fast");
		$(".amateur_aparatos").hide("fast");
		$(".precine_aparatos").blur("fast");
		$(".ingenio_aparatos").hide("fast");
		$(".tres_d_recorrido").hide("fast");
	});

	$("#ingenio_texto").click(function() {
		$(".ingenio_aparatos").slideToggle("1000");
		$(".fundamentos_comic").hide("fast");
		$(".profe_aparatos").hide("fast");
		$(".amateur_aparatos").hide("fast");
		$(".precine_aparatos").hide("fast");
		$(".tres_d_recorrido").hide("fast");
	});


	$("#tres_d_texto").click(function() {
		$(".tres_d_recorrido").slideToggle("1000");
		$(".fundamentos_comic").hide("fast");
		$(".profe_aparatos").hide("fast");
		$(".amateur_aparatos").hide("fast");
		$(".precine_aparatos").hide("fast");
		$(".ingenio_aparatos").hide("fast");
	});

	$.visorDeInformacion({
		container: '#informacion_aparatos', // Selector para elemento donde se cargara la informacón.
		links: 'li a', // Selector para los enlaces a la informacion. Es CRITICO  que tenga el atributo HREF 
		closedButton: 'div.boton_cerrar', // Selector para el elemento que cierra el container. Es relativo a container.
		hideOptions: {easing: 'fade'}, // Opciones para el metodo hide (jquery)
		showOptions: {easing: 'fade'}, //Opciones para el metodo show (jquery)
		callback: Muvac.aparatos
	});



	/*Carga el comic de prometeo y la luz cuando se preciona el boton con el ID #fundamentos_texto */

	$('#fundamentos_texto').click(function() {
		$('#comic').load('secciones/fundamentos_de_la_luz/prometeo_y_la_luz/prometeo_y_la_luz.html',
				function() {
					Muvac.comic['prometeo y la luz']();
				}
		);
	});

	$.visorDeInformacion({
		container: '#informacion_aparatos', // Selector para elemento donde se cargara la informacón.
		links: '#tres_d_texto', // Selector para los enlaces a la informacion. Es CRITICO  que tenga el atributo HREF 
		closedButton: 'div.boton_cerrar', // Selector para el elemento que cierra el container. Es relativo a container.
		hideOptions: {easing: 'fade'}, // Opciones para el metodo hide (jquery)
		showOptions: {easing: 'fade'}, //Opciones para el metodo show (jquery)
		callback: function() {
			Muvac.startUnity({
				path: "secciones/cine3d/prueba.unity3d",
				size: {
					width: 600,
					height: 400
				}
			});
		}
	});


});


