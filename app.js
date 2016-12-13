var myApp = angular.module('weather', []);

myApp.controller('WeatherController', function($scope, $http) {
	
	var currAverage, yestAverage;

	$http.get("http://api.wunderground.com/api/d2c25648f13d77b5/forecast/q/CA/San_Francisco.json")
	  .then(function(response){ 
			console.log(response);
			//provide a summary of the current weather 
			$scope.currWeather = response.data.forecast.txt_forecast.forecastday[0].fcttext; 
			
			//get the current high and the low for the weather 
			currHigh = response.data.forecast.simpleforecastforecastday[0].high.fahrenheit;
			currLow = response.data.forecast.simpleforecastforecastday[0].low.fahrenheit;
			//get the current weather average 
			currAverage = (currHigh + currLow)/2;
		})
		.catch(function(data){
			console.log(data);
		});

	$http.get("http://api.wunderground.com/api/d2c25648f13d77b5/yesterday/q/CA/San_Francisco.json")
	  .then(function(response){ 
			console.log(response);
			//get yesterdays average weather 
			yestAverage = response.data.history.dailysummary[0].meantempi;
		})
		.catch(function(data){
			console.log(data);
		});

	//get the difference in weather between yesterday and today
	$scope.weatherdiff = currAverage - yestAverage;




});


