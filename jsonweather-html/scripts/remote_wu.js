// Current Location Scripts
$(function () {

  var status = $('#status');

  (function getGeoLocation() {
    status.text('Getting Location...');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude;
        var long = position.coords.longitude;

        // Call the getData function, send the lat and long
        getData(lat, long);

      });
    } else {
      status.text("Your browser doesn't support Geolocation or it is not enabled!");
    }

  })();

  // Get the data from the wunderground API
  function getData(lat, long){
      $.ajax({url: "http://api.wunderground.com/api/8c68a198c4c50c75/geolookup/conditions/hourly/q/" + lat + "," + long + ".json", success: function(data){
          $(console.log(data));
          $("#currentTemp").text(data.current_observation.dewpoint_f + "°F");
          $("#summary").text(data.current_observation.weather);
          $("#add1").text("Feels like: " + data.current_observation.feelslike_string);
          $("#add2").text("Wind: " + data.current_observation.wind_string);
          $("#add3").text("Visibility: " + data.current_observation.visibility_mi + "mi");
          $("#cityDisplay").text(data.location.city + ", " + data.location.state);
          $("#wetness").text("Precipitation: " + data.current_observation.precip_1hr_in);
          $(".location").text(data.current_observation.display_location.city);
          
          $(".hour1").text(data.hourly_forecast["0"].dewpoint);
      }})
  }

  // A function for changing a string to TitleCase
  function toTitleCase(str){
    return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
  }
});


//Geocoding key:   AIzaSyApPmAE0IAYcYyBUtuGZysdUBmuoC5FZFc
//Weather key:     8c68a198c4c50c75