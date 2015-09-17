var App = angular.module("App", ["ionic"]);

App.service("FreshlyPressed", ["$http", "$log", FreshlyPressed]);

App.controller("AppCtrl", ["$scope", "FreshlyPressed", "$log", "$ionicPopup", "$timeout", AppCtrl]);

function AppCtrl ($scope, $log, FreshlyPressed, $ionicPopup, $timeout) {
	$scope.refresh = function () {
        FreshlyPressed.getBlogs();
	}
}

function FreshlyPressed ($http, $log) {
	this.getBlogs = function() {
		$http.jsonp("https://public-api.wordpress.com/rest/v1.1/freshly-pressed?callback=JSON_CALLBACK");
		  .success(function (result) {
		  	$log.info(JSON.stringify(result.posts));
		  });
	};
}