angular.module('movieApp', [])

  .controller('showTimesController', ['$scope', 'dataFactory', function($scope, dataFactory) {
    $scope.showTimes = dataFactory.getShowTimes();
    $scope.movieData = dataFactory.getMovies();

    $scope.handleCinemaSwitch = function(cinema) {
    	// populate movies, preserve in an array for filtering
        $scope.selectedCinema = cinema.name;
        console.log($scope.selectedCinema);
    	$scope.currentMovies = [];
    	Object.keys(cinema.showtimes).forEach(function(key) {
            // sort showtimes for better readability
            var sortedShowTimes = cinema.showtimes[key].sort(function (a, b) {
                return new Date('1970/01/01 ' + a) - new Date('1970/01/01 ' + b);
            });
    		var data = angular.extend({showtimes: sortedShowTimes}, $scope.movieData[key]);
    		$scope.currentMovies.push(data);
    	});
    };

    $scope.compareTimes = function(time) {
        var now = new Date();
        var yr = now.getFullYear();
        var mn = now.getMonth();
        // account for months going from 0-11 instead of 1-12 in the Date obj
        mn ++;
        var day = now.getDate();

        var showTimeDate = yr + '/' + mn + '/' + day + ' ' + time;

        // parse for comparison
        var rightNow = new Date(Date.parse(now));
        var showTime = new Date(Date.parse(showTimeDate));

        if (rightNow > showTime) {
            return 'faded';
        };
    };

}]);