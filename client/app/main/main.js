'use strict';

angular.module('kelsikaymakeupApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/partials/home.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: '/',
        templateUrl: 'app/partials/about.html',
        controller: 'MainCtrl'
      });
  });
