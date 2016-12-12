var myApp = angular.module('weather', []);

myApp.controller('WeatherController', function($scope, $http) {
	$scope.currWeather = "hi";
	$scope.test = "willthiswork";

	$http.jsonp("http://api.wunderground.com/api/d2c25648f13d77b5/forecast/q/CA/San_Francisco.json")
	  .success(function(response){ 
			console.log("get here");
			console.log(response);
			$scope.currWeather = response.data.forecast.txt_forecast.forecastday[0].fcttext; 
			console.log(currWeather);
		});
});
