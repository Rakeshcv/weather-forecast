/**
 * Created by Rakesh on 19/07/15.
 */

app.factory('forecastService',['$http', function ($http) {
    var getForecast = function(cityName){
        return $http.get("http://api.openweathermap.org/data/2.5/forecast/daily?q="+cityName+"&cnt=5&units=metric").then(function (response) {
            return response.data;

        })
    };

    return {
        getForecast: getForecast
    }
}]);