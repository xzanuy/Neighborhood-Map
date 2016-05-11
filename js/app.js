'use strict';

var map;
var marker;


function initMap(){
    var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 41.383947, lng: 2.173453},
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });

    var infowindow = new google.maps.InfoWindow();


        // Initialize View Model Binding
        ko.applyBindings(new viewModel());
}






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
var iMarker = function(data){
    this.markerName = ko.observable(data.markerName);
    this.markerLat = ko.observable(data.markerLat);
    this.markerLon = ko.observable(data.markerLon);
    this.markerDescription = ko.observableArray(data.markerDescription);
    this.isVisible = ko.observable(false);

    

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

    self.markerList = ko.observableArray([]);
    self.filter = ko.observable("");

    initialMarkers.forEach(function(markerItem){
        self.markerList.push(new iMarker(markerItem) );
    });
    
    //console.log(self.markerList());
    self.markerList().forEach(function(markerItem){
        console.log(markerItem);

    marker = new google.maps.Marker({
        position: new google.maps.LatLng(markerItem.markerLat(), markerItem.markerLon()),
        map : map,
        setMap : map,
        animation: google.maps.Animation.DROP

      });
        
    });


    self.filterMarkers = ko.computed(function () {
        var search  = self.filter().toLowerCase();
        return ko.utils.arrayFilter(self.markerList(), function (pin) {
            var doesMatch = pin.markerName().toLowerCase().indexOf(search) >= 0;
            pin.isVisible(doesMatch);
            return doesMatch;
        });
    });


   //create marker
   /* for (var i = 0; i < initialMarkers.length; i++) {  
      

        //Add event listener info window and bounce animation to each marker
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(initialMarkers[i].markerName);
          infowindow.open(map, marker);
          if (marker.getAnimation() !== null) {
             marker.setAnimation(null);
             } else {
             marker.setAnimation(google.maps.Animation.BOUNCE);
            };
        }
      })(marker, i));
    };


    


    // to store the filter value 
    

    // computed to know what placers are matched
    self.filterPlaces = ko.computed(function(){
        var returnArray = [];
        hide all markers
    for (var i=0; i<markerList.length; i++) {
    markerList[i].setVisible(false);
    }
        //push matches 

        //display markers of the match list
    })

    for (var i = ko.length - 1; i >= 0; i--) {
        ko[i]
    };

    //this.currentCat = ko.observable(this.catList()[0]);

    /*this.incrementCount = function () {
        this.catCount(this.catCount() + 1);
    }

    this.setCat = function(catclicked){
        self.currentCat(catclicked);
    }*/
};


console.log(viewModel);





  
  





















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




