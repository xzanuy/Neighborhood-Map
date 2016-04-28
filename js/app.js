var viewModel = function(){

   var myObservableArray = ko.observableArray();

   var initialMarkers = [{
        markerName : 'Basílica de la Sagrada Família',
        lat : '41.403590',
        lon : '2.174238',
        },{
        markerName : 'La Pedrera-Casa Milà',
        lat : '41.395393',
        lon : '2.163160',
        },{
        markerName : 'Camp Nou',
        lat : '41.381025',
        lon : '2.124189',
        },{
        markerName : 'Catedral de Barcelona',
        lat : '41.384012',
        lon : '2.177562',
        },{
        markerName : 'Tibidabo',
        lat : '41.421762',
        lon : '2.120835',}
        ]

console.log(myObservableArray);

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: new google.maps.LatLng(41.383947, 2.173453),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < initialMarkers.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(initialMarkers[i].lat, initialMarkers[i].lon),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(initialMarkers[i].markerName);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }

 for (var i = 0; i < initialMarkers.length; i++) {
   
    myObservableArray.push(initialMarkers[i]);    
    };

};
ko.applyBindings(new viewModel());

