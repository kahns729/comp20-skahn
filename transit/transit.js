/*var xhr;*/

function initialize(){
	latlng=new google.maps.LatLng(-34.397, 150.644);
	myOptions = {center:latlng, zoom:8};
	var map = new google.maps.Map(
		document.getElementById("map_canvas"),myOptions);
	console.log(map);
}

/*
function load(){
	xhr = new XMLHttpRequest();
	xhr.open("GET", 
		"http://mbtamap.herokuapp.com/mapper/rodeo.json", true);
	xhr.onreadystatechange = dataReady;
	xhr.send(null);
}

function dataReady(){
	if(xhr.readyState == 4 && xhr.status == 200){
		schedule = JSON.parse(xhr.responseText);
		scheduleElement = document.getElementById("schedule");
		scheduleElement.innerHTML = schedule["line"];
	}
	else if (xhr.readyState == 4 && xhr.status == 500){
		scheduleElement = document.getElementById("schedule");
		scheduleElement.innerHTML = "could not load";
	}
}
*/
