var icon = "";

function weather() {

    var location = document.getElementById("location");
    var apiKey = '962982c3a78f1f376bb2c40492a9f775';
    var url = 'https://api.forecast.io/forecast/';

    navigator.geolocation.getCurrentPosition(success, error);

    function success(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;

      location.innerHTML = 'Your latitude is ' + latitude + '° and your longitude is ' + longitude + '°';

       $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
        //get temperature in F
        var tempF = data.currently.temperature;
        // change to celcius 
        tempF = parseFloat((tempF-32)/1.8).toFixed(2); 
        //Summary says partly cloudy as an example
        var summary = data.currently.summary;
        //gather icon data from API
        icon = data.currently.icon;
          //set variables for html fields
          var imgHome = document.getElementById("weatherIcon");
          var tempLocation = document.getElementById("temp");
          var resultText = document.getElementById("result");

          switch(icon){
            case 'clear-day':
            imgHome.src="images/sun.svg";
            tempLocation.innerHTML=("The temperature is " + tempF + " degrees celcius.");
            resultText.innerHTML=(summary);
            break;

            case 'clear-night':
            imgHome.src="images/night.svg";
            tempLocation.innerHTML=("The temperature is " + tempF + " degrees celcius.");
            resultText.innerHTML=(summary);
            break;
    
            case 'rain':
            imgHome.src="images/rain.svg";
            tempLocation.innerHTML=("The temperature is " + tempF + " degrees celcius.");
            resultText.innerHTML=(summary);
            break;
    
            case 'snow':
            imgHome.src="images/snowy.svg";
            tempLocation.innerHTML=("The temperature is " + tempF + " degrees celcius.");
            resultText.innerHTML=(summary);
            break;
    
            case 'sleet':
            imgHome.src="images/sleet.svg";
            tempLocation.innerHTML=("The temperature is " + tempF + " degrees celcius.");
            resultText.innerHTML=(summary);
            break;
    
            case 'wind':
            imgHome.src="images/wind.png";
            tempLocation.innerHTML=("The temperature is " + tempF + " degrees celcius.");
            resultText.innerHTML=(summary);
            break;
    
            case 'fog':
            imgHome.src="images/fog.svg";
            tempLocation.innerHTML=("The temperature is " + tempF + " degrees celcius.");
            resultText.innerHTML=(summary);
            break;
    
            case 'cloudy':
            imgHome.src="images/cloudy2.svg";
            tempLocation.innerHTML=("The temperature is " + tempF + " degrees celcius.");
            resultText.innerHTML=(summary);
            break;
    
            case 'partly-cloudy-day':
            imgHome.src="images/partlycloud.svg";
            tempLocation.innerHTML=("The temperature is " + tempF + " degrees celcius.");
            resultText.innerHTML=(summary);
            break;
    
            case 'partly-cloudy-night':
            imgHome.src="images/cloudnight.svg";
            tempLocation.innerHTML=("The temperature is " + tempF + " degrees celcius.");
            resultText.innerHTML=(summary);
            break;
            
            default:
            imgHome.src="images/search.png";
            tempLocation.innerHTML=("The temperature is " + tempF + " degrees celcius.");
            resultText.innerHTML=("We had trouble understanding the weather.");
          }
    })}

    function error() {
      location.innerHTML = "Unable to retrieve your location";
    }

    location.innerHTML = "Locating...";
  }
  
//call main function  
weather();
