// get the city name from the url 
let cityName = window.location.search;
if (cityName) {
    cityName = decodeURIComponent(cityName.substr(6, cityName.length-1));
    
} else {
    window.location.replace(`landing-page.html`);
}
// store the searches in local storage with limit 4
if (localStorage.getItem("cityHistory") === null) {
    localStorage.setItem("cityHistory", JSON.stringify([cityName]));
  }else{
    const cities = JSON.parse(localStorage.getItem("cityHistory"));
    if (cities.indexOf(cityName) === -1) {
        if(JSON.parse(localStorage.getItem("cityHistory")).length >= 4){
            cities.shift();
            cities.push(cityName);
            localStorage.setItem("cityHistory", JSON.stringify(cities));
        }else {
            cities.push(cityName);
            localStorage.setItem("cityHistory", JSON.stringify(cities));
        }
    }
  }
// get the weather info depending on the city name
getWeather(cityName);
// convert the time in the api to a 12h system
function tConvert (time) {
    // Check correct time format and split into components
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
  
    if (time.length > 1) { // If time format correct
      time = time.slice (1);  // Remove full string match value
      time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
      time[0] = +time[0] % 12 || 12; // Adjust hours
      time=time[0]+time[5]
    }
    return time; // return adjusted time or original string
  }
// change wheather icon depending on the weather status
function getWeatherIcon(weather){
    if(weather.toLowerCase() === 'snow'){
        return 'snowy'
    }else if(weather.toLowerCase() === 'rain'){
        return 'rainy'
    }else if(weather.toLowerCase() === 'clouds'){
        return 'cloudy'
    }else if(weather.toLowerCase() === 'clear'){
        return'sunny'
    }
    
}
// change background image depending on the weather status
function getWeatherImage(weather){
    if(weather.toLowerCase() === 'snow'){
        $('#bg > img').attr("src",'./images/snow.jpg');
    }else if(weather.toLowerCase() === 'rain'){
        $('#bg > img').attr("src",'./images/rain.jpg');
    }else if(weather.toLowerCase() === 'clouds'){
        $('#bg > img').attr("src",'./images/clouds.jpg');
    }else if(weather.toLowerCase() === 'clear'){
        $('#bg > img').attr("src",'./images/clear.jpg');
    }
    
}
// hit the api and get the weather info then enject it in html 
function getWeather(cityName) { 
    $.ajax(
        {
        "async": true,
        "crossDomain": true,
        "url": `https://community-open-weather-map.p.rapidapi.com/forecast?q=${cityName}&units=metric`,
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "dd3b215dacmsh0fc900bebe41f9fp1964ccjsn2a45d2ede313",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        }
    }).done(function (response) {
        getWeatherImage(response.list[0].weather[0].main);
        var mainIcon = getWeatherIcon(response.list[0].weather[0].main);
        $("#city-name").text(cityName);
        $("#date").text(response.list[0].dt_txt.split(" ")[0]);
        $("#weather-icon").addClass(mainIcon);
        $("#weather").text(response.list[0].weather[0].main);
        $("#temp").html(`<p>${Math.floor(response.list[0].main.temp)}</p><span>&#8451;</span>`)
        var icon;
        var time;
        for(var i = 0; i < 6; i++){
            if(i === 0){
                time="NOW"
            }else{
                time=tConvert(response.list[i].dt_txt.split(" ")[1])
            }
            icon=getWeatherIcon(response.list[i].weather[0].main)
            $(".weather-hours").append(`<div class="mr-5 mb-3 text-center font-3 text-white"><p>${time}</p><div class="d-flex align-items-center min-h-68"><div class="itemIcon ${icon}"></div></div><p class="mt-3">${Math.floor(response.list[i].main.temp)}&deg;</p></div>`)
        }
    });
}