angular.module('myPort').controller('HomeController', ['$scope', function($scope) {
    var skills = [
        'Junior Web Developer',
        'Photographer',
        'Front-End Developer',
        'Back-End Developer'
    ];
    $scope.skill = skills[Math.floor(Math.random()*skills.length)];
    console.log($scope.skill);
}])