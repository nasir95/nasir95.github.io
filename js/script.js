//Input Process Output

//Input

/******* Declare and Initialize State Variables and Constants *******/

// Data work on = API - User Input - Button/Field input

// Constant data
// - api URL

const URL_ENDPOINT = "https://data.cityofchicago.org/resource/85ca-t3if.json";

// Data that change
// - User input
// - Data retrieved from API

let complaints, input, borough;

/********** Cached Element Reference *******/
//Elements I interact with
const $streetEL = $('.street');
const $typeEl = $('.type');
const $damageEl = $('.damage');
const $injuredEl = $('.injured');
const $speedEl = $('.speed');
const $causeEl = $('.cause');
const $weatherEl = $('.weather');


// Process

// Google Maps 
var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 41.881832, lng: -87.623177},
          zoom: 10.5
        });
        
      }
      // add markers
      function addMarker(coords){
        var marker = new google.maps.Marker({
                position: coords,
                map:map,
                icon: "http://maps.google.com/mapfiles/kml/pal3/icon39.png",
                
            });

            marker.addListener('click', function(evt) {
                console.log(evt);
                getAPIData()
              });

}



/********** Event Listeners *******/
// What user will interact with
// Call funtions from below



/********** Functions **********/
// Process the data
// Values set of state variables
// Generate UI components


function getAPIData() {
    const response = $.ajax({
        url: `${URL_ENDPOINT}`,
        data: {
            "$limit": 10
        }
    });

    response.then(function(data){
        console.log(data);
        initMap()
        for(let i = 0; i <= data.length; i++){
            data[i];
            addMarker({lat: data[i].location.coordinates[1],lng: data[i].location.coordinates[0]});
            $streetEL.html(data[i].street_name);
        }
    })
}

// OUTPUT
// transfer the state of the APP to the DOM

getAPIData()
