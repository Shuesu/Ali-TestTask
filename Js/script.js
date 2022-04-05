var map;

DG.then(function () {
	map = DG.map('map', {
		center: [43.228293, 76.944122],
		zoom: 14
	});

	DG.marker([43.233956, 76.957977]).addTo(map).bindPopup('Приходите!');
	DG.marker([43.218796, 76.929014]).addTo(map).bindPopup('Приходите!');
	DG.marker([43.218648, 76.945761]).addTo(map).bindPopup('Приходите!');
});