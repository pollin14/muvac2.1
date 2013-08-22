Muvac.comic = {};

Muvac.comic['prometeo y la luz'] = function() {
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
};

