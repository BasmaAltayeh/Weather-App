# Weather-Report App
Weather report app is a javascript web application which gives you the weather forecast for a city. It displays the temperatures in Celsius and displays the current temperature plus the temperatures in the coming 15 hours with a 3-hour span.

# Installation
1. Make sure you have node + npm installed
2. Download this repo
3. Run the below command in your terminal
```bash
npm install
```
4. Open landing-page.html page in your browser of choice.


# Features

## Search for cities
The search box autocompletes the user's search while they are typing. It sends a search request on every character typed and retrieves the matching results.

The background changes depending on the user's local time.

### Using Algolia Search API
This was an alternative to using google places API since its not free. Algolia is specialized in search APIs, you provide it with the json info of your objects and your search key, and it provides you with a search API using that key through the objects you provided.
Check https://www.algolia.com/ for more info about Algolia

## Your previous searches
After you've done a couple of searches, you'll have easy access to the forecast of the last four cities you've searched for. They will be displayed on the landing page. Your search history is stored in your browser local storage.

Only the last four searches are stored in the browser's local storage, even if the user makes more searches. And repetitions are not included.

## Fast access to the weather at your location
Requires that you allow the app to use your location
In the top right of the landing page, there's an icon that can redirect you to the weather forecast in the user's current location. The user's location is retreived by using the geoIP Database API, check https://www.maxmind.com/en/solutions/geoip2-enterprise-product-suite for more info about GeoIP API.

** If the user does not allow the app to access their location info, this icon will not be displayed.

## Weather Information in a city
Once the user searches for a city, they will be redirected to a second page that displays the results. The weather forecast consists of the current temperature in the selected city, plus the temperatures in the coming 15 hours displayed on a 3-hour intervals. The icons are made to reflect the weather status. And the background changes depending on the weather status too. All temperatures are displayed in Celsius.

Weather information is retrieved from Open Weather Map API. Check https://rapidapi.com/community/api/open-weather-map?endpoint=apiendpoint_f719676c-072b-4a2d-ad2e-78f8375ea9c8 for more info.

## Ability to re-search in the weather results page
When the user is redirected to the results page, the user is still able to refine their search, using the search box on the side. The user is able to search for another city's weather forecast without having to go back to the landing page.

## Responsive
The web app is implemented in a responsive manner, it is meant to be used on different desktop screens as well as mobile screens.

### Mobile view
https://github.com/BasmaAltayeh/Weather-App/blob/main/screenShots/landing-page-mobile.png
https://github.com/BasmaAltayeh/Weather-App/blob/main/screenShots/weather-info-page-mobile.png

### Desktop view


# Technologies
1. Bootstrap
2. Jquery
3. font-awesome for icons
4. Algolia
5. GeoIP Database
6. Javascript
7. HTML + CSS

# Assignment Details
## Time Tracking
I was only able to work on this assignment during the weekends, it took me 23 hours (3.5 days)

## Design Inspiration
https://i.pinimg.com/originals/14/e4/15/14e4159de055c62b101844c1fe556e7b.jpg

## Author
Basma Al Tayeh
basma.altayeh@gmail.com

