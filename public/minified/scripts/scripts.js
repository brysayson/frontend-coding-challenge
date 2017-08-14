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
angular.module('movieApp')
    .factory('dataFactory', ['$http', function($http) {
    var dataFactory = {};
    //TODO: ideally these would be urls, doing gets using $http

    dataFactory.getShowTimes = function () {
        return this.showTimes;
    };

    dataFactory.getMovies = function() {
        return this.movies;
    };

    dataFactory.movies = {
        "440cc42b43bbcb8b5d38fbdede9e22f1": {
            "title": "The Great Wall",
            "rating": "PG-13",
            "poster": "https://dl.dropboxusercontent.com/s/0zs1xh77m9g0fmx/the_great_wall.jpg"
        },
        "b4c2c326a4d335da654d4fd944bf88d0": {
            "title": "Fifty Shades Darker",
            "rating": "R",
            "poster": "https://dl.dropboxusercontent.com/s/dt6wgt92cu9wqcr/fifty_shades_darker.jpg"
        },
            "f94447a9a91123041f6eb0679f01d80d": {
            "title": "Doctor Strange",
            "rating": "PG-13",
            "poster": "https://dl.dropboxusercontent.com/s/tt2523gcspjr7l7/doctor_strange.jpg"
        },
        "56a14924d53cc5f82f75505b52deffbd": {
            "title": "Nocturnal Animals",
            "rating": "R",
            "poster": "https://dl.dropboxusercontent.com/s/k2oyo7iez0fl88j/nocturnal_animals.jpg"
        },
        "52208a5a1900898799ddef74d62ca710": {
            "title": "Jurassic World",
            "rating": "PG-13",
            "poster": "https://dl.dropboxusercontent.com/s/xptvkca3epeh9z0/jurassic_world.jpg"
        },
        "83eca80b80a52736a16663dded65e5f2": {
            "title": "Suicide Squad",
            "rating": "R",
            "poster": "https://dl.dropboxusercontent.com/s/qs0rnitbjc2cccu/suicide_squad.jpg"
        },
        "bb768d6cd40339bd98c948be36ed8fe7": {
            "title": "War Dogs",
            "rating": "R",
            "poster": "https://dl.dropboxusercontent.com/s/bf49uxvt4ys020p/war_dogs.jpg"
        },
        "eb97596c1083cce466f1c664994983bb": {
            "title": "Mad Max: Fury Road",
            "rating": "R",
            "poster": "https://dl.dropboxusercontent.com/s/dk1q22xef2o70o4/mad_max.jpg"
        },
        "1150762c2724f57b7cf83b5cb5c9fad5": {
            "title": "Anthropoid",
            "rating": "R",
            "poster": "https://dl.dropboxusercontent.com/s/y4jhi3fd21r4l15/anthropoid.jpg"
        }
      }

    dataFactory.showTimes = [
      {
        "id": "2030c64ce72b4e4605cb01f2ba405b7d",
        "name": "Arclight",
        "showtimes": {
          "b4c2c326a4d335da654d4fd944bf88d0": [
              "11:30 pm", "2:45 pm", "8:35 pm", "4:15 pm", "10:30 pm"
          ],
          "f94447a9a91123041f6eb0679f01d80d": [
              "10:30 am", "6:20 pm", "2:25 pm", "9:40 pm"
          ],
          "56a14924d53cc5f82f75505b52deffbd": [
              "10:00 am", "12:30 pm", "5:25 pm", "3:30 pm", "9:15 pm", "11:55 pm"
          ],
          "52208a5a1900898799ddef74d62ca710": [
              "12:20 pm", "12:50 pm", "5:15 pm", "3:50 pm", "9:55 pm", "12:35 am"
          ],
          "bb768d6cd40339bd98c948be36ed8fe7": [
              "12:05 pm", "8:30 am", "7:25 pm", "4:10 pm", "9:25 pm", "1:25 pm"
          ],
          "eb97596c1083cce466f1c664994983bb": [
              "11:00 am", "2:35 pm", "5:35 pm", "3:10 pm", "9:25 pm", "11:25 pm"
          ],
          "1150762c2724f57b7cf83b5cb5c9fad5": [
              "10:45 am", "12:15 pm", "5:40 pm", "11:20 am", "8:05 pm"
          ]
        }
      },
      {
        "id": "58f3356c0ffe87bcb324454056587b67",
        "name": "Pacific Theatres",
        "showtimes": {
          "f94447a9a91123041f6eb0679f01d80d": [
              "11:30 pm", "2:45 pm", "8:35 pm", "4:15 pm", "10:30 pm"
          ],
          "56a14924d53cc5f82f75505b52deffbd": [
              "10:30 am", "6:20 pm", "2:25 pm", "9:40 pm"
          ],
          "52208a5a1900898799ddef74d62ca710": [
              "12:05 pm", "8:30 am", "7:25 pm", "4:10 pm", "9:25 pm", "1:25 pm"
          ],
          "83eca80b80a52736a16663dded65e5f2": [
              "12:20 pm", "12:50 pm", "5:15 pm", "3:50 pm", "9:55 pm", "12:35 am"
          ],
          "bb768d6cd40339bd98c948be36ed8fe7": [
              "10:40 am", "6:30 pm", "2:15 pm", "9:45 pm"
          ],
          "eb97596c1083cce466f1c664994983bb": [
              "9:30 am", "11:20 pm", "5:25 pm", "11:10 am", "8:15 pm"
          ],
          "1150762c2724f57b7cf83b5cb5c9fad5": [
              "10:00 am", "12:30 pm", "5:25 pm", "3:30 pm", "9:15 pm", "11:55 pm"
          ]
        }
      },
      {
        "id": "af3de16703f2af385a6941de07f076a0",
        "name": "AMC",
        "showtimes": {
          "440cc42b43bbcb8b5d38fbdede9e22f1": [
              "11:00 am", "2:35 pm", "5:35 pm", "3:10 pm", "9:25 pm", "11:25 pm"
          ],
          "b4c2c326a4d335da654d4fd944bf88d0": [
              "10:00 am", "12:30 pm", "5:25 pm", "3:30 pm", "9:15 pm", "11:55 pm"
          ],
          "f94447a9a91123041f6eb0679f01d80d": [
              "10:45 am", "12:15 pm", "5:40 pm", "11:20 am", "8:05 pm"
          ],
          "56a14924d53cc5f82f75505b52deffbd": [
              "10:30 am", "6:20 pm", "2:25 pm", "9:40 pm"
          ],
          "52208a5a1900898799ddef74d62ca710": [
              "12:20 pm", "12:50 pm", "5:15 pm", "3:50 pm", "9:55 pm", "12:35 am"
          ],
          "83eca80b80a52736a16663dded65e5f2": [
              "9:30 am", "11:20 pm", "5:25 pm", "11:10 am", "8:15 pm"
          ],
          "bb768d6cd40339bd98c948be36ed8fe7": [
              "12:05 pm", "8:30 am", "7:25 pm", "4:10 pm", "9:25 pm", "1:25 pm"
          ]
        }
      }
    ]

    return dataFactory;
}]);
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
angular.module('movieApp')
    .factory('dataFactory', ['$http', function($http) {
    var dataFactory = {};
    //TODO: ideally these would be urls, doing gets using $http

    dataFactory.getShowTimes = function () {
        return this.showTimes;
    };

    dataFactory.getMovies = function() {
        return this.movies;
    };

    dataFactory.movies = {
        "440cc42b43bbcb8b5d38fbdede9e22f1": {
            "title": "The Great Wall",
            "rating": "PG-13",
            "poster": "https://dl.dropboxusercontent.com/s/0zs1xh77m9g0fmx/the_great_wall.jpg"
        },
        "b4c2c326a4d335da654d4fd944bf88d0": {
            "title": "Fifty Shades Darker",
            "rating": "R",
            "poster": "https://dl.dropboxusercontent.com/s/dt6wgt92cu9wqcr/fifty_shades_darker.jpg"
        },
            "f94447a9a91123041f6eb0679f01d80d": {
            "title": "Doctor Strange",
            "rating": "PG-13",
            "poster": "https://dl.dropboxusercontent.com/s/tt2523gcspjr7l7/doctor_strange.jpg"
        },
        "56a14924d53cc5f82f75505b52deffbd": {
            "title": "Nocturnal Animals",
            "rating": "R",
            "poster": "https://dl.dropboxusercontent.com/s/k2oyo7iez0fl88j/nocturnal_animals.jpg"
        },
        "52208a5a1900898799ddef74d62ca710": {
            "title": "Jurassic World",
            "rating": "PG-13",
            "poster": "https://dl.dropboxusercontent.com/s/xptvkca3epeh9z0/jurassic_world.jpg"
        },
        "83eca80b80a52736a16663dded65e5f2": {
            "title": "Suicide Squad",
            "rating": "R",
            "poster": "https://dl.dropboxusercontent.com/s/qs0rnitbjc2cccu/suicide_squad.jpg"
        },
        "bb768d6cd40339bd98c948be36ed8fe7": {
            "title": "War Dogs",
            "rating": "R",
            "poster": "https://dl.dropboxusercontent.com/s/bf49uxvt4ys020p/war_dogs.jpg"
        },
        "eb97596c1083cce466f1c664994983bb": {
            "title": "Mad Max: Fury Road",
            "rating": "R",
            "poster": "https://dl.dropboxusercontent.com/s/dk1q22xef2o70o4/mad_max.jpg"
        },
        "1150762c2724f57b7cf83b5cb5c9fad5": {
            "title": "Anthropoid",
            "rating": "R",
            "poster": "https://dl.dropboxusercontent.com/s/y4jhi3fd21r4l15/anthropoid.jpg"
        }
      }

    dataFactory.showTimes = [
      {
        "id": "2030c64ce72b4e4605cb01f2ba405b7d",
        "name": "Arclight",
        "showtimes": {
          "b4c2c326a4d335da654d4fd944bf88d0": [
              "11:30 pm", "2:45 pm", "8:35 pm", "4:15 pm", "10:30 pm"
          ],
          "f94447a9a91123041f6eb0679f01d80d": [
              "10:30 am", "6:20 pm", "2:25 pm", "9:40 pm"
          ],
          "56a14924d53cc5f82f75505b52deffbd": [
              "10:00 am", "12:30 pm", "5:25 pm", "3:30 pm", "9:15 pm", "11:55 pm"
          ],
          "52208a5a1900898799ddef74d62ca710": [
              "12:20 pm", "12:50 pm", "5:15 pm", "3:50 pm", "9:55 pm", "12:35 am"
          ],
          "bb768d6cd40339bd98c948be36ed8fe7": [
              "12:05 pm", "8:30 am", "7:25 pm", "4:10 pm", "9:25 pm", "1:25 pm"
          ],
          "eb97596c1083cce466f1c664994983bb": [
              "11:00 am", "2:35 pm", "5:35 pm", "3:10 pm", "9:25 pm", "11:25 pm"
          ],
          "1150762c2724f57b7cf83b5cb5c9fad5": [
              "10:45 am", "12:15 pm", "5:40 pm", "11:20 am", "8:05 pm"
          ]
        }
      },
      {
        "id": "58f3356c0ffe87bcb324454056587b67",
        "name": "Pacific Theatres",
        "showtimes": {
          "f94447a9a91123041f6eb0679f01d80d": [
              "11:30 pm", "2:45 pm", "8:35 pm", "4:15 pm", "10:30 pm"
          ],
          "56a14924d53cc5f82f75505b52deffbd": [
              "10:30 am", "6:20 pm", "2:25 pm", "9:40 pm"
          ],
          "52208a5a1900898799ddef74d62ca710": [
              "12:05 pm", "8:30 am", "7:25 pm", "4:10 pm", "9:25 pm", "1:25 pm"
          ],
          "83eca80b80a52736a16663dded65e5f2": [
              "12:20 pm", "12:50 pm", "5:15 pm", "3:50 pm", "9:55 pm", "12:35 am"
          ],
          "bb768d6cd40339bd98c948be36ed8fe7": [
              "10:40 am", "6:30 pm", "2:15 pm", "9:45 pm"
          ],
          "eb97596c1083cce466f1c664994983bb": [
              "9:30 am", "11:20 pm", "5:25 pm", "11:10 am", "8:15 pm"
          ],
          "1150762c2724f57b7cf83b5cb5c9fad5": [
              "10:00 am", "12:30 pm", "5:25 pm", "3:30 pm", "9:15 pm", "11:55 pm"
          ]
        }
      },
      {
        "id": "af3de16703f2af385a6941de07f076a0",
        "name": "AMC",
        "showtimes": {
          "440cc42b43bbcb8b5d38fbdede9e22f1": [
              "11:00 am", "2:35 pm", "5:35 pm", "3:10 pm", "9:25 pm", "11:25 pm"
          ],
          "b4c2c326a4d335da654d4fd944bf88d0": [
              "10:00 am", "12:30 pm", "5:25 pm", "3:30 pm", "9:15 pm", "11:55 pm"
          ],
          "f94447a9a91123041f6eb0679f01d80d": [
              "10:45 am", "12:15 pm", "5:40 pm", "11:20 am", "8:05 pm"
          ],
          "56a14924d53cc5f82f75505b52deffbd": [
              "10:30 am", "6:20 pm", "2:25 pm", "9:40 pm"
          ],
          "52208a5a1900898799ddef74d62ca710": [
              "12:20 pm", "12:50 pm", "5:15 pm", "3:50 pm", "9:55 pm", "12:35 am"
          ],
          "83eca80b80a52736a16663dded65e5f2": [
              "9:30 am", "11:20 pm", "5:25 pm", "11:10 am", "8:15 pm"
          ],
          "bb768d6cd40339bd98c948be36ed8fe7": [
              "12:05 pm", "8:30 am", "7:25 pm", "4:10 pm", "9:25 pm", "1:25 pm"
          ]
        }
      }
    ]

    return dataFactory;
}]);