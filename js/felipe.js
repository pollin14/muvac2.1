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
		closedButton: 'div.boton_cerrar' // Selector para el elemento que cierra el container. Es relativo a container.
	});



	/*Carga el comic de prometeo y la luz cuando se preciona el boton con el ID #fundamentos_texto */

	$('#fundamentos_texto').click(function() {
		$('#comic').load('secciones/fundamentos_de_la_luz/prometeo_y_la_luz/prometeo_y_la_luz.html',
				function() {
					var playlist = [
						"thunder_roll",
						'rain_heavy_thunder', // sin audio.
						"magico_glass",
						"thunder",
						'rain_heavy_thunder'
					];

					var dir = "sonidos/";

					var extension = Modernizr.audio.ogg ? '.ogg' : '.mp3';

					var animate = function() {
						if ($('#intro_partenon1') !== {}) {
							$('#intro_partenon1').rawAnimation({
								fps: 9,
								stop: false
							});
						}

						if ($('#intro_partenon2') !== {}) {
							$('#intro_partenon2').rawAnimation({
								fps: 9,
								stop: false
							});
						}

						if ($('#prometeo_baja') !== {}) {
							$('#prometeo_baja').rawAnimation({
								fps: 30,
								stop: true
							});
						}



						if ($('#frente_luz_maravillado') !== {}) {
							$('#frente_luz_maravillado').rawAnimation({
								fps: 9,
								stop: false
							});
						}

						if ($('#roba_luz_maravillado') !== {}) {
							$('#roba_luz_maravillado').rawAnimation({
								fps: 15,
								stop: false
							});
						}

						if ($('#prometeo_nubes') !== {}) {
							$('#prometeo_nubes').rawAnimation({
								fps: 15,
								stop: false
							});
						}

						if ($('#prometeo_humanos01') !== {}) {
							$('#prometeo_humanos01').rawAnimation({
								fps: 15,
								stop: false
							});
						}

						if ($('#prometeo_alsa_luz') !== {}) {
							$('#prometeo_alsa_luz').rawAnimation({
								fps: 15,
								stop: false
							});
						}
						if ($('#sorprendidos') !== {}) {
							$('#sorprendidos').rawAnimation({
								fps: 15,
								stop: false
							});
						}
					};

					var changeSound = function(track) {

						track = track - 1;


						if (playlist[track] !== undefined) {
							$("#audio")[0].src = dir + playlist[track] + extension;
							$("#audio")[0].play();
						}


					};


					/** Efecto del libro **/
					$("#book").turn(
							{
								autoCenter: true,
								when: {
									turning: function(event, page, pageObject) {

										changeSound(page / 2);
										animate();

									}
								}
							}
					);

					/** Globo con consejo para usar el libro **/
					$('#tooltip_book').mtooltip({
						top: 90,
						right: 90,
						effect: "explode" //Esta puede recibir cualquier animación de jquery ui
					});
				}
		);
	});

	$('#tres_d_texto').click(function() {
		$('#tres_d_recorrido').load('secciones/cine3d/cine3d.html',
				function() {
					Muvac.startUnity({
						path: "secciones/cine3d/prueba.unity3d",
						size: {
							width: 900,
							height: 200
						}
					});
				}
		);
	});
});


