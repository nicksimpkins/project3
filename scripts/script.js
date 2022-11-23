function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15.25,
    center: { lat: 43.175663650480004, lng: -71.53027115476273},
  });
  var marker = new google.maps.Marker({
    position: { lat: 43.175663650480004, lng: -71.53027115476273},
    map: map,
  });
  var infowindow = new google.maps.InfoWindow({
    content:"Bow Subway"
  });
  infowindow.open(map, marker);
}
window.initMap = initMap;