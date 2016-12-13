var myApp = angular.module('weather', []);

myApp.controller('WeatherController', function($scope, $http) {

	$http.get("http://api.wunderground.com/api/d2c25648f13d77b5/forecast/q/CA/San_Francisco.json")
	  .then(function(response){ 
			console.log(response);
			$scope.currWeather = response.data.forecast.txt_forecast.forecastday[0].fcttext; 
			$scope.currHigh = response.data.forecast.simpleforecastforecastday[0].high.fahrenheit;
			$scope.currLow = response.data.forecast.simpleforecastforecastday[0].low.fahrenheit;
			$scope.currAverage = ($scope.currHigh + $scope.currLow)/2;
		})
		.catch(function(data){
			console.log(data);
		});

$http.get("http://api.wunderground.com/api/d2c25648f13d77b5/yesterday/q/CA/San_Francisco.json")
	  .then(function(response){ 
			console.log(response);
		})
		.catch(function(data){
			console.log(data);
		});





});


