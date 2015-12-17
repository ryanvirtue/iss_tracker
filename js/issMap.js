function initMap() {
	var mapOptions = {
		zoom: 2,
		center: {lat: 0, lng: 0}
	}
	map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function pointer(coordinates){
	marker = new google.maps.Marker({
		position: {lat: coordinates[0], lng: coordinates[1]},
		map: map
	})
}
