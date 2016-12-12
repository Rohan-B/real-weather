var myApp = angular.module('weather', []);

myApp.controller('WeatherController', [function($scope, $http) {
	$scope.currWeather = "hi";
	
	$http.jsonp("http://api.wunderground.com/api/d2c25648f13d77b5/forecast/q/CA/San_Francisco.json")
	  .then(function(response){ 
			console.log("get here");
			$scope.currWeather = response.forecast.txt_forecast.forecastday[0].fctext; 
		});
}]);
