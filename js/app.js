function initMap(){
    var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.383947, lng: 2.173453},
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });

    var infowindow = new google.maps.InfoWindow();

//create marker
for (i = 0; i < initialMarkers.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(initialMarkers[i].lat, this.initialMarkers[i].lon),
        map: map
      });

        //Add event listener to each marker
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(initialMarkers[i].markerName);
          infowindow.open(map, marker);
        }
      })(marker, i));};

};




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
        ];

//marker constructor
var Marker = function(data){
    this.markerName = ko.observable(data.markerName);
    this.markerLat = ko.observable(data.markerLat);
    this.markerLon = ko.observable(data.markerLon);
    this.markerDescription = ko.observableArray(data.markerDescription);
    

    /*this.title = ko.computed(function(){
        var title;
        var clicks = this.catCount();
        if(clicks < 10){
            title = 'level 1';
        } else if(clicks < 50){
            title = 'level 2';
        }
        return title;
    },this)*/

}

var viewModel = function(){

    var self = this;

    this.markerList = ko.observableArray([]);

    initialMarkers.forEach(function(markerItem){
        self.markerList.push(new Marker(markerItem) );
    });
        
    self.filter = ko.observable("");// to store the filter value


    //this.currentCat = ko.observable(this.catList()[0]);

    /*this.incrementCount = function () {
        this.catCount(this.catCount() + 1);
    }

    this.setCat = function(catclicked){
        self.currentCat(catclicked);
    }*/
};


console.log(viewModel);



  
  ko.applyBindings(new viewModel());





















/*

model = {






viewModel = function() {

//var self = this;


   

    



};

function loadMap(){
    initmap()
}

ko.applyBindings(new viewModel());



 /*self.allMarkers = ko.observableArray();  // change name of ko observable array to allMarkers
myLocations.forEach(function(loc){
        var marker = new google.maps.Marker({ // declare and initialize marker object in local scope
            position:loc.loc,
            map:map
         });





   /* 


        marker.addListener('click', function(){ // attach event listener to marker object
            console.log('clicked');
        });
        allMarkers.push(marker); // push marker object to allMarkers ko observable array
    });


};*/




