angular.module('myPort').controller('ExtraController', ['$scope', '$http', function($scope, $http){
    var nasaUrl = "https://api.nasa.gov/planetary/apod?api_key=0YB4fW2DCUngcV4IcsSYY9Y3wBtJKdCtmzHzU2sC"
    var apiKey = "0YB4fW2DCUngcV4IcsSYY9Y3wBtJKdCtmzHzU2sC"
    var apod = "https://api.nasa.gov/planetary/apod";
    $http({
        url: apod,
        method: 'GET',
        params: {
            api_key: apiKey,
            hd: true,
        }
    }).then(function(response){
        $scope.imageOfTheDay = response.data.hdurl;
    }, function(err){
        console.log(err);
    })
    console.log('Extra Page');
}])