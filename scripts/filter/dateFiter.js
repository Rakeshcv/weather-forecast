/**
 * Created by Rakesh on 19/07/15.
 */



app.filter('getDate', function () {
    return function (data,index) {

        console.log(index);
            var dates = new Date();

            console.log(dates.getDate() + "-" + dates.getMonth()+1 + "-" + dates.getFullYear());

            var month =  parseInt(dates.getMonth())+1;

            return dates.getDate()+index + "-" +  month + "-" + dates.getFullYear();

    }
});


