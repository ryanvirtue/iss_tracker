var issAPI = 'http://api.open-notify.org/iss-now.json';
var map
function callForData(){
	$.get(
		issAPI,
		successFunction,
		'jsonp'
	)
}

function successFunction(data){
	var stationLocation = data.iss_position
	var coordinates = coordinateBuilder(stationLocation)
	renderCoordinateData(coordinates)
	pointer(coordinates)
}

function coordinateBuilder(locationData){
	var lat = locationData["latitude"]
	var lng = locationData["longitude"]
	return [lat, lng]
}

function renderCoordinateData(coordinates){
	var string = "The International Space Station is currently located at: " + coordinates[0] + ", " + coordinates[1]
	$(".location").html(string)
}

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
callForData()
setInterval(callForData, 5000)