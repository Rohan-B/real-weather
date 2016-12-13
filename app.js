var myApp = angular.module('weather', []);

myApp.controller('WeatherController', function($scope, $http) {
	
	var currAverage, yestAverage;

	$http.get("http://api.wunderground.com/api/d2c25648f13d77b5/forecast/q/CA/San_Francisco.json")
	  .then(function(response){ 
			//provide a summary of the current weather 
			$scope.currWeather = response.data.forecast.txt_forecast.forecastday[0].fcttext; 
			console.log(response.data);	
			//get the current high and the low for the weather 
			currHigh = parseInt(response.data.forecast.simpleforecast.forecastday[0].high.fahrenheit);
			currLow = parseInt(response.data.forecast.simpleforecast.forecastday[0].low.fahrenheit);
			//get the current weather average 
			
			currAverage = (currHigh + currLow)/2;
			console.log(currAverage);
			
			$http.get("http://api.wunderground.com/api/d2c25648f13d77b5/yesterday/q/CA/San_Francisco.json")
			.then(function(response){ 
				console.log(response);
				//get yesterdays average weather 
				yestAverage = response.data.history.dailysummary[0].meantempi;
				//get the difference in weather between yesterday and today
				$scope.weatherdiff = currAverage - yestAverage;
				console.log("here");
			})
			.catch(function(data){
				console.log(data);
			});
		})




});


