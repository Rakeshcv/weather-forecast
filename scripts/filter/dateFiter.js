/**
 * Created by Rakesh on 19/07/15.
 */



app.filter('getDate', function () {
    return function (data,index) {
            var dates = new Date();


            var month =  parseInt(dates.getMonth())+1;

            return dates.getDate()+index + "-" +  month + "-" + dates.getFullYear();

    }
});


