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
const $complaintsListElement = $('#complaints');
const $inputElement = $('input');


// Process


/********** Event Listeners *******/
// What user will interact with
// Call funtions from below

$('#controls').on('click', 'button', handleClick);


/********** Functions **********/
// Process the data
// Values set of state variables
// Generate UI components

function handleClick(){
    borough = this.dataset.id;
    input = $inputElement.val() || 10;
    getAPIData();
}

function getAPIData() {
    const response = $.ajax({
        url: `${URL_ENDPOINT}`,
        data: {
            "$limit": input
        }
    });

    response.then(function(data){
        console.log(data);
    })
}

// OUTPUT
// transfer the state of the APP to the DOM


var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 41.881832, lng: -87.623177},
          zoom: 13
        });
      }