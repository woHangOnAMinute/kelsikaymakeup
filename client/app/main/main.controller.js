'use strict';

angular.module('kelsikaymakeupApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.message = 'OH MY GOODNESS';

    $scope.testimonials = [];
    $scope.testimonials.push({'quote':'"Kelsi did an absolutely fantastic job of my hair and make up for a red carpet event I attended. I usually struggle getting the right colour for my skin tone and other make up artists have made me look very orange. Kelsi kept my make up nice and natural with elegant touches to dress it up for the occasion. She has the best selection of lipstick colours too! I highly recommend her services and had many compliments on the night - stunning was the word I heard most!"', 'name':'- Emma'});
    // $scope.testimonials.push({'quote':'"Lorem ipsum dolor sit amet, consectetur "', 'name':'- Leah White'});
    // $scope.testimonials.push({'quote':'"suscipit enim eleifend, imperdiet posuere ante."', 'name':'- Jonah Lomu'});

    $scope.myInterval = 3000;
    var slides = $scope.slides = [];
    $scope.addSlide = function(value) {
      slides.push({
        image: 'assets/images/'+ value +'.jpg',
      });
    };
    for (var i=0; i<8; i++) {
      $scope.addSlide(i+1);
    }
  });
