/**
 * Created by Rakesh on 19/07/15.
 */

app.directive('weatherInfo', function () {
    return {
        restrict: 'AE',
        scope:{
            data: '='
        },
        controller: 'MainCtrl',
        templateUrl: 'scripts/views/weatherinfotemplate.html'
    }
});
