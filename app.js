function weather() {

    var location = document.getElementById("location");
    var apiKey = '962982c3a78f1f376bb2c40492a9f775';
    var url = 'https://api.forecast.io/forecast/';

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;

      location.innerHTML = 'Latitude is ' + latitude + '° Longitude is ' + longitude + '°';

       $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
        var temp = data.currently.temperature;
        console.log(temp);
        var summary = data.currently.summary;
        console.log(summary);

        var icon = data.currently.icon;
        console.log(icon);

      });
    }

    function error() {
      location.innerHTML = "Unable to retrieve your location";
    }

    location.innerHTML = "Locating...";
  }

  function iconSelect (){
      if (document.getElementById("icon").innerHTML = "cloudy"){
          console.log("clouds");   
          document.getElementById("icon").classList.add('CloudClass');
          document.getElementById("cloud").classList.remove('hidden');
          document.getElementById("cloud").classList.add('picsize');
      }
  }

  weather();
  iconSelect();