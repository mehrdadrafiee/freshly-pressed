var App = angular.module("App", ["ionic"]);

App.controller("AppCtrl", ["$scope", "$log", "$ionicPopup", "$timeout", AppCtrl]);

function AppCtrl ($scope, $log, $ionicPopup, $timeout) {
	$scope.refresh = function () {
        alert("Button pressed!");
	};
}