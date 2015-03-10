'use strict';

angular.module('kelsikaymakeupApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.message = 'OH MY GOODNESS';

    $scope.testimonials = [];
    $scope.testimonials.push({'quote':'"suscipit enim eleifend, imperdiet posuere ante."', 'name':'- Josh Kay'});
    $scope.testimonials.push({'quote':'"Lorem ipsum dolor sit amet, consectetur "', 'name':'- Leah White'});
    $scope.testimonials.push({'quote':'"suscipit enim eleifend, imperdiet posuere ante."', 'name':'- Jonah Lomu'});

    $scope.myInterval = 5000;
    var slides = $scope.slides = [];
    $scope.addSlide = function(value) {
      var newWidth = 600 + slides.length + 1;
      slides.push({
        image: 'assets/images/'+ value +'.jpg',
      });
    };
    for (var i=0; i<8; i++) {
      $scope.addSlide(i+1);
    }
  });
