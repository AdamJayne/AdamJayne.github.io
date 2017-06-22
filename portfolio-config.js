var app = angular.module('myPort', ['ngRoute'])

	.config(['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/', {
				templateUrl: "views/home.html"
			}).otherwise({
				redirectTo: "/home"
			})
			.when('/home', {
				templateUrl: "views/home.html",
				controller: "HomeController"
			})
			.when('/info', {
				templateUrl: "views/info.html",
				controller: "InfoController"
			})
			.when('/projects', {
				templateUrl: "views/projects.html",
				controller: "ProjectController"
			})
			.when('/photos', {
				templateUrl: "views/photos.html",
				controller: "PhotoController"
			})
			.when('/contact', {
				templateUrl: "views/contact.html",
				controller: "ContactController"
			})
			.when('/misc', {
				templateUrl: "views/misc.html",
				controller: "ExtraController"
			}).otherwise({
				redirectTo: "/home"
			});
	}]);

	// app.controller('HomeController', function($scope) {
	// 	$scope.pageClass = 'page-home';
	// });

	// app.controller('InfoController', function($scope) {
	// 	$scope.pageClass = 'page-info';
	// });

	// app.controller('ProjectController', function($scope) {
	// 	$scope.pageClass = 'page-projects';
	// });

	// app.controller('PhotoController', function($scope) {
	// 	$scope.pageClass = 'page-photos';
	// });

	// app.controller('ContactController', function($scope) {
	// 	$scope.pageClass = 'page-contact';
	// });

	// app.controller('ExtraController', function($scope) {
	// 	$scope.pageClass = 'page-misc';
	// });