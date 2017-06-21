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