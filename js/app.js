var map;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 59.9212708,
      lng: 27.8545131
    },
    zoom: 8
  });
}
