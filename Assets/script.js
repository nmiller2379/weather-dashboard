    //  e385e7158105fe8110b0408de5b4c2cd
// console.log("I am connected")
// fetch(
//     // Explain each parameter in comments below.
//     'http://api.openweathermap.org/data/2.5/weather?q=Denver&appid=7ba67ac190f85fdba2e2dc6b9d32e93c',
//   )
//     .then(function (response) {
//       console.log(response)
//     })
    // .then(function (data) {
    //   console.log(data);
    // })

// Declare variables in global memory 
// var citySearchListStringified = localStorage.getItem("citySearchList");
// var citySearchList = JSON.parse(citySearchListStringified);
// var keys; 
// var titleCasedCity;
// var cityListEntry = $("<button>")
// var latitude;
// var longitude;
// var moment;
// var displayMoment = $("<h3>");
// var weatherIcon = $("<img>");
// var cityName 
// var weatherIcon = $("<img>");
// var uvIndexDisplay = $("<button>");
// var forecastDate = $("<H5>");
// var forecastIcon = $("<ing>");
// var queryURL1; 
// var queryURL2;
// var queryURL3;


// function createCityList(citySearchList) {
//     $("#city-list").empty();
//     keys = Object.keys(citySearchList);
//     for (var i = 0; i <keys.length; i) {
//         cityListEntry.addClass("list-group-item list-group-item-action");
//         var splitStr = keys[i].toLocaleLowerCase().split("");
//         for (var j = 0; j < splitStr.length; j++) {
//             splitStr[j] = splitStr[j].charAt(0).toUpperCase() + splitStr[j].substring(1);
//         }
//         titleCasedCity = splitStr.join("");
//         cityListEntry.text(titleCasedCity);
//         $("#city-list").append(cityListEntry);
//     }
// }

// function populateCityWeather(city, citySearchList) {
//     createCityList(citySearchList);
//     queryURL1 = "http://api.openweathermap.org/data/2.5/forecast?&units=imperial&appid=63560d8cf9e10b4b633264289102c5c9&q=" + city;
//     $.ajax({
//         url: queryURL1,
//         method: "GET"
//     })
//     .then(function(weather) 
//     {
//         console.log(queryURL1);

//         console.log(weather);

//         moment = moment();
//         $("#city-name").empty();
//         $("#city-name").append(
//             displayMoment.text("(" + moment.format("M/D/YYYY") + ")")
//         );
//         cityName = $("<h3>").text(weather.name);
//         $("#city-name").prepend(cityName);
//         weatherIcon.attr("src", "https://openweathermap.org/img/w" + weather.weather[0].icon + ".png");
//         $("#current-icon").empty();
//         $("#current-icon").append(weatherIcon);
//         $("current-temp").text("Temperature: " + weather.main.temp + "°F");
//         $("#current-humidity").text("Humidity: " + weather.main.humidity + "%");
//         $("#current-wind").text("Wind Speed: " + weather.wind.speed + " MPH");

//         latitude = weather.coord.lat;
//         longitude = weather.coord.lon;

//         queryURL2 = "http://api.openweathermap.org/data/2.5/forecast?&units=imperial&appid=63560d8cf9e10b4b633264289102c5c9&q=" + city;
//         $.ajax({
//             url: queryURL2,
//             method: "GET"
//         }).then(function(uvIndex) {console.log(uvIndex[0].value);

//             queryURL3 = "http://api.openweathermap.org/data/2.5/forecast?&units=imperial&appid=63560d8cf9e10b4b633264289102c5c9&q=" + "&lat=" + latitude + "&long=" + longitude; 
//             $.ajax({
//                 url: queryURL3,
//                 method: "GET"
//             }).then(function(forecast) {
//                 console.log(queryURL2);
//                 console.log(forecast);

//                 for (var i = 6; i < forecast.list.length; i += 8) {
//                     console.log("#forecast-date" + forecastPosition);
//                     var forecastPosition = (i +2)/8;

//                     $("#forecast-date" + forecastPosition).empty();
//                     $("#forecast-date" + forecastPosition).append (forecastDate.text(moment.add(1, "days").format("M/D/YYYY")));

//                     forecastIcon.attr("src", "https://openweathermap.org/img/w" + forecast.list[i].weather[0].icon + ".png");
//                     $("#forecast-icon" + forecastPosition).empty();
//                     $("#forecast-icon" + forecastPosition).append(forecastIcon);
//                     $("#forecast-temp" + forecastPosition).text(
//                         "Temp: " + forecast.list[i].main.temp + " °F"
//                     );
//                     $("#forecast-humidity" + forecast.list[i].main.humidity + "%");
//                     $(".forecast").attr("style", "background-color:#0a4614; color:sandybrown");                
//                 }
//             });
//         });
//     });
// }
// $(document).ready(function(){
//     if (citySearchList == null) {
//         citySearchList = {};
//     }

//     createCityList(citySearchList);

//     $("#current-weather").hide();
//     $("#forecast-weather").hide();

//     $("#search-button").on("click", function(event) {
//         event.preventDefault();
//         var city = $("#city-input").val().trim().toLowerCase();

//         if (city != "") {
//             citySearchList[city] = true;
//             localStorage.setItem("citySearchList", JSON.stringify(citySearchList));

//         populateCityWeather(city, citySearchList);
        
//         $("#current-weather").show();

//         }
//     });

//     $("#city-list").on("click", "button", function(event) {
//         event.preventDefault();
//         var city = $(this).text();
//         populateCityWeather(city, citySearchList);
//         $("#current-weather").show();
//         $("#forecast-weather").show();
//     });
// })    
    
 


$(document).ready(function() {
    $("#search-button").on("click", function(event) {
        event.preventDefault();
        var searchedCity = $("#city-input").val().trim().toLowerCase();
        var queryURL1 = "http://api.openweathermap.org/data/2.5/weather?q="+searchedCity+"&units=imperial&appid=63560d8cf9e10b4b633264289102c5c9";
        var queryURL2 = "http://api.openweathermap.org/data/2.5/forecast?q="+searchedCity+"&units=imperial&appid=63560d8cf9e10b4b633264289102c5c9"
        if(searchedCity != "") {
            $.ajax({
                url: queryURL1,
                method: "GET",
                datatype: "jsonp",
                success: function(data) {
                    var name = displayName(data);
                    $("#city-name").html(name);
                    // var mainIcon = displayMainIcon(data);
                    // $("#current-icon").html(mainIcon);
                    var stats = displayStats(data);
                    $("#weather-stats").html(stats);
                }
            })
            $.ajax({
                url: queryURL2,
                method: "GET",
                datatype:"jsonp",
                success: function(forecast) {
                    var forecastStats1 = displayForecast1(forecast);
                    $("#forecast-stats1").html(forecastStats1);
                    var forecastStats2 = displayForecast2(forecast);
                    $("#forecast-stats2").html(forecastStats2);
                    var forecastStats3 = displayForecast1(forecast);
                    $("#forecast-stats3").html(forecastStats3);
                    var forecastStats4 = displayForecast4(forecast);
                    $("#forecast-stats4").html(forecastStats4);
                }
            })
        } else {
            $("#error").html("Please enter a city.");
        }
        
        // console.log(searchedCity);
        // console.log(queryURL1);
        // $.ajax({
        //     url: testURL,
        //     method: "GET",
        // }). then(function (response) {
        //     {
        //         console.log(response)
        //     }
        // })
    });
    function displayName(data) {
        var days = dayjs().format("MMM. D");
        return "<h3><strong> " + data.name + "</strong> " + days + "</h3>"
    };
    // function displayMainIcon(data) {
    //     return "<img src='https://openweathermap.org/imgw" + data.weather[0].icon + ".png' alt='" + data.weather[0].main + "'>"
    // };
    function displayStats(data) {
        return "<p><strong> Current temperature</strong>: " + data.main.temp + " degrees</p>" +
               "<p> <strong> Humidity</strong>: " + data.main.humidity + " percent </p>" +
               "<p> <strong> Wind Speed</strong>: " + data.wind.speed + "MPH </p>"
    };
    function displayForecast1(forecast) {
        var date1 = dayjs().add(1, "day").format("MMM. D");
        return "<h6>" + date1 + "</h6>" +  
               "<p><strong> High</strong>: " + forecast.list[0].main.temp_max + " degrees</p>" +
               "<p><strong> Low</strong>: " + forecast.list[0].main.temp_min + " degrees</p>" +
               "<p><strong> Forecast:</strong> " + forecast.list[0].weather[0].description + "</p>"  
    };
    function displayForecast2(forecast) {
        var date2 = dayjs().add(2, "day").format("MMM. D");
        return "<h6>" + date2 + "</h6>" +  
               "<p><strong> High</strong>: " + forecast.list[0].main.temp_max + " degrees</p>" +
               "<p><strong> Low</strong>: " + forecast.list[0].main.temp_min + " degrees</p>" +
               "<p><strong> Forecast:</strong> " + forecast.list[0].weather[0].description + "</p>"  
    };
    
})


$.ajax({
    url: "http://api.openweathermap.org/data/2.5/forecast?q=Denver&appid=63560d8cf9e10b4b633264289102c5c9",
    method: "GET"
    }).then(function (response) 
    {
        console.log(response)
        var dates = dayjs().add(1, "day").format("MMM. D");
        console.log(dates)

});