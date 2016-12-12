var myApp = angular.module('weather', []);

myApp.controller('WeatherController', ['$scope', function($scope, $htpp) {
	$scope.currWeather = "hi";

	$http.get("http://api.wunderground.com/api/d2c25648f13d77b5/forecast/q/CA/San_Francisco.json")
	  .then(function(response){ 
			$scope.currWeather = response.forecast.txt_forecast.forecastday[0].fctext; 
		});
}]);
