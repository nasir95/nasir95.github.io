//Input Process Output

//Input

/******* Declare and Initialize State Variables and Constants *******/


// Constant data
// - api URL

const URL_ENDPOINT = "https://data.cityofchicago.org/resource/85ca-t3if.json";

// Data that change
// - User input
// - Data retrieved from API

var userInput, map, results;


// Process

// Google Maps 

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
            // get information when click on markers
            marker.addListener('click', function(evt) {
                for(let i = 0; i < 1; i++){
                    $('dt.delete dd').remove(i)
                }
                var latitude, longitude;
                latitude = evt.latLng.lat();
                console.log(evt.latLng.lat().toFixed(9));
                console.log(results[7].latitude);
                // console.log(evt.latLng.lat());
                longitude = evt.latLng.lng();
                console.log(results[7].longitude);
                console.log(evt.latLng.lng().toFixed(9));
                // console.log(evt.latLng.lng());
                for(let i = 0;i < results.length; i++){
                    if(results[i].longitude === longitude.toFixed(9) && results[i].latitude === latitude.toFixed(9)){
                        console.log(results[i]);
                        $('dt.street').append(`<dd class='grey'>${results[i].street_name}</dd>`);
                        $('dt.crash').append(`<dd class='grey'>${results[i].crash_type}</dd>`);
                        $('dt.cost').append(`<dd class='grey'>${results[i].damage}</dd>`);
                        $('dt.injured').append(`<dd class='grey'>${results[i].injuries_total}</dd>`);
                        $('dt.speed').append(`<dd class='grey'>${results[i].posted_speed_limit}</dd>`);
                        $('dt.cause').append(`<dd class='grey'>${results[i].prim_contributory_cause}</dd>`);
                        $('dt.weather').append(`<dd class='grey'>${results[i].weather_condition}</dd>`);
                    }

                }
                console.log(evt);
              });

}



/********** Event Listeners *******/
// What user will interact with
// Call funtions from below

$('form').on('submit', (event) =>{
     console.log('click')
    event.preventDefault();
    userInput = $('input').val() || 10;
    getAPIData()
    initMap()
});
/********** Functions **********/
// Process the data
// Values set of state variables
// Generate UI components

$(function(){
    $('form').submit();
})



function getAPIData() {
    const response = $.ajax({
        url: `${URL_ENDPOINT}`,
        data: {
            "$limit": userInput,
            
        }
    });

    response.then(function(data){
        results = data;
        console.log(data);
        for(let i = 0; i <= data.length; i++){
            data[i];
    const mark = addMarker({lat: data[i].location.coordinates[1],lng: data[i].location.coordinates[0]});
            console.log(mark);
        }
    })
}




