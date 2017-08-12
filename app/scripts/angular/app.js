angular.module('movieApp', [])

  .controller('showTimesController', ['$scope', 'dataFactory', function($scope, dataFactory) {
    $scope.showTimes = dataFactory.getShowTimes();
    $scope.movieData = dataFactory.getMovies();

    $scope.handleCinemaSwitch = function(cinema) {
    	// populate movies, preserve in an array for filtering
    	$scope.currentMovies = [];
    	Object.keys(cinema.showtimes).forEach(function(key) {
    		var data = angular.extend({showtimes: cinema.showtimes[key]}, $scope.movieData[key]);
    		$scope.currentMovies.push(data);
    	});
    };
  }]);