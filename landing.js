//get location of the user
$(document).ready(function(){
    $.getJSON('https://geoip-db.com/json/geoip.php?jsonp=?') 
        .done (function(location) {
            $('#location').append(`<i class="fas fa-compass bounce text-white" title="Check weather at your location"></i>`)
            $('#location').on('click',function(){
                goToWeatherPage(location.city)
            })
    });
});
// change background image depending on the user timezone
const currentTime = new Date().getHours();
let currentImageClass;
if (currentTime >= 19 || currentTime <= 5 ) {
    currentImageClass = './images/midnight.jpg';
}

if (currentTime >= 6 && currentTime <= 15) {
    currentImageClass = './images/sunrise.jpg';
}
if (currentTime >= 16 && currentTime <= 18) {
    currentImageClass = './images/sunset.jpg';
}

$('#bg > img').attr("src",currentImageClass );
// get the last cities that were searched
const citiesHistory =JSON.parse(localStorage.getItem('cityHistory'));
// display the the previous search
if (citiesHistory && citiesHistory.length) {
    $('#history-citiesHistory').empty
    $('#history-cities').before(`<h3 class="text-white pt-10 pl-3 mb-4">Your previous searches:</h3>`)
    for (let i = 0; i < citiesHistory.length; i++) {
        const city = citiesHistory[i];
        $('#history-cities').append(`
            <div onclick="goToWeatherPage('${city}')" class="mb-4 city-card p-3 text-white cursor-p mr-4">
               <h1><i class="fas fa-city"></i></h1> 
               <h3 class="city-name">${city}</h3>
            </div>
        `);
        
    }
} else {
    $('#history-cities').hide();
}
//redirect to the weather page
function goToWeatherPage(city) {
    window.location.replace(`weather-page.html?city=${city}`);

}