var map;

function initMap() {

  var autocomplete;

  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 59.9212708,
      lng: 27.8545131
    },
    zoom: 8
  });

  autocomplete = new google.maps.places.Autocomplete(document.getElementById('search-autocomplete'));
  autocomplete.bindTo('bounds', map);

}
