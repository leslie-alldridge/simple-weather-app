var icon = "";

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

        icon = data.currently.icon;
        console.log(icon);

        
          var imgHome = document.getElementById("weatherIcon");
          switch(icon){
            case 'clear-day':
            imgHome.src="images/sun.svg"
            break;
            case 'clear-night':
            break;
    
            case 'rain':
            break;
    
            case 'snow':
            break;
    
            case 'sleet':
            break;
    
            case 'wind':
            break;
    
            case 'fog':
            break;
    
            case 'cloudy':
            break;
    
            case 'partly-cloudy-day':
            imgHome.src="images/sun.svg"
            console.log("case");
            break;
    
            case 'partly-cloudy-night':
            break;
    
            default:
          }
      
      

    })}

    function error() {
      location.innerHTML = "Unable to retrieve your location";
    }

    location.innerHTML = "Locating...";
  }
  

  weather();
  //iconSelect();