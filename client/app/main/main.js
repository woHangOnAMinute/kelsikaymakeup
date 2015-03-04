'use strict';

angular.module('kelsikaymakeupApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('about', {
        url: '/',
        templateUrl: 'app/partials/about.html',
        controller: 'MainCtrl'
      })
      .state('services', {
        url: '/',
        templateUrl: 'app/partials/services.html',
        controller: 'MainCtrl'
      })
      .state('gallery', {
        url: '/',
        templateUrl: 'app/partials/Gallery.html',
        controller: 'MainCtrl'
      })
      .state('testimonials', {
        url: '/',
        templateUrl: 'app/partials/testimonials.html',
        controller: 'MainCtrl'
      })
      .state('contact', {
        url: '/',
        templateUrl: 'app/partials/contact.html',
        controller: 'MainCtrl'
      });
  });
