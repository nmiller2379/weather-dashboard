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
var citySearchListStringified = localStorage.getItem("citySearchList");
var citySearchList = JSON.parse(citySearchListStringified);
var city = $("#city-input").val().trim().toLowerCase();
var keys = Object.keys(citySearchList);
var splitStr = keys[i].toLocaleLowerCase().split("");
var titleCasedCity = splitStr.join("");
var cityListEntry = $("<button>")
var latitude;
var longitude;
var moment = moment();
var displayMoment = $("<h3>");
var weatherIcon = $("<img>");
var cityName = $("<h3>").text(weather.name);
var weatherIcon = $("<img>");
var uvIndexDisplay = $("<button>");
var forecastDate = $("<H5>");
var forecastPosition = (i +2)/8;
var forecastIcon = $("<ing>");

var queryURL1 = "http://api.openweathermap.org/data/2.5/forecast?&units=imperial&appid=63560d8cf9e10b4b633264289102c5c9&q=" + city;
var queryURL2 = "http://api.openweathermap.org/data/2.5/forecast?&units=imperial&appid=63560d8cf9e10b4b633264289102c5c9&q=" + city;
var queryURL3 = "http://api.openweathermap.org/data/2.5/forecast?&units=imperial&appid=63560d8cf9e10b4b633264289102c5c9&q=" + "&lat=" + latitude + "&long=" + longitude;


function createCityList(citySearchList) {
    $("#city-list").empty()
}    

$.ajax({
    url: "http://api.openweathermap.org/data/2.5/forecast?q=Denver&appid=63560d8cf9e10b4b633264289102c5c9",
    method: "GET"
    }).then(function (response) 
    {
        console.log(response)

});