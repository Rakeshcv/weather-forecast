/**
 * Created by Rakesh on 19/07/15.
 */

app.controller('MainCtrl', ['$scope', 'forecastService', function ($scope, forecastService) {

    $scope.data = null;

    $scope.getData = function () {
        forecastService.getForecast($scope.cityName).then(onComplete, onError);
    };

    var onComplete = function (data) {
        if (data.hasOwnProperty('message')) {
            if (data.message.toString().indexOf("Error") >= 0) {
                $scope.error = true;
                $scope.data = "City not found for \"" + $scope.cityName + "\"";
                return;
            }
        }

        $scope.error = false;
        $scope.data = data;

    };

    var onError = function () {
        $scope.error = true;
        $scope.data = "Network Error"
    };


}]);