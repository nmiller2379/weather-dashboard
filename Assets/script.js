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




$(document).ready(function() {
    $("#search-button").on("click", function(event) {
        event.preventDefault();
        var searchedCity = $("#city-input").val().trim();
        var queryURL1 = "https://api.openweathermap.org/data/2.5/weather?q="+searchedCity+"&units=imperial&appid=63560d8cf9e10b4b633264289102c5c9";
        var queryURL2 = "https://api.openweathermap.org/data/2.5/forecast?q="+searchedCity+"&units=imperial&appid=63560d8cf9e10b4b633264289102c5c9";
        if(searchedCity != "") {
            $.ajax({
                url: queryURL1,
                method: "GET",
                datatype: "json",
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
                datatype:"json",
                success: function(forecast) {
                    var forecastStats1 = displayForecast1(forecast);
                    $("#forecast-stats1").html(forecastStats1);
                    var forecastStats2 = displayForecast2(forecast);
                    $("#forecast-stats2").html(forecastStats2);
                    var forecastStats3 = displayForecast3(forecast);
                    $("#forecast-stats3").html(forecastStats3);
                    var forecastStats4 = displayForecast4(forecast);
                    $("#forecast-stats4").html(forecastStats4);
                }
            })
        } else {
            $("error").html("Please enter a city.");
        }

        
        var populateCityList = displayCityList(searchedCity);
        $(".city-list").append(populateCityList);

        function displayCityList() {
            return "<button class='list-group-item' 'list-group-item-action'>" + searchedCity + "</button>"
        }

        $("#city-input").val("")
    

        
        
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
               "<p><strong> Temp</strong>: " + forecast.list[0].main.temp + " degrees</p>" +
               "<p><strong> Forecast:</strong> " + forecast.list[0].weather[0].description + "</p>"  
    };
    function displayForecast2(forecast) {
        var date2 = dayjs().add(2, "day").format("MMM. D");
        return "<h6>" + date2 + "</h6>" +  
               "<p><strong> Temp</strong>: " + forecast.list[1].main.temp + " degrees</p>" +
               "<p><strong> Forecast:</strong> " + forecast.list[1].weather[0].description + "</p>"  
    };
    function displayForecast3(forecast) {
        var date2 = dayjs().add(3, "day").format("MMM. D");
        return "<h6>" + date2 + "</h6>" +  
               "<p><strong> Temp</strong>: " + forecast.list[2].main.temp + " degrees</p>" +
               "<p><strong> Forecast:</strong> " + forecast.list[2].weather[0].description + "</p>"  
    };
    function displayForecast4(forecast) {
        var date2 = dayjs().add(4, "day").format("MMM. D");
        return "<h6>" + date2 + "</h6>" +  
               "<p><strong> Temp</strong>: " + forecast.list[3].main.temp + " degrees</p>" +
               "<p><strong> Forecast:</strong> " + forecast.list[3].weather[0].description + "</p>"  
    };
    

    
})


$.ajax({
    url: "https://api.openweathermap.org/data/2.5/forecast/?q=Denver&appid=63560d8cf9e10b4b633264289102c5c9",
    method: "GET"
    }).then(function (response) 
    {
        console.log(response)
        var dates = dayjs().add(1, "day").format("MMM. D");
        console.log(dates)

});