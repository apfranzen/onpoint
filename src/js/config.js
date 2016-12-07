(function() {

  'use strict';

  angular
    .module('myApp.config', ['ui.router'])
    .config(appConfig)
    .run(function($templateCache) {
      $templateCache.removeAll();
    });

  function appConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/#/',
        template:'<landing-page></landing-page>'
      })

      .state('pictures', {
        url: '/pictures',
        templateUrl: 'js/components/pictures/pictures.view.html',
        controller: 'picturesController',
        controllerAs: 'picCtrl'
      })

      .state('projects', {
        url: '/projects',
        templateUrl: 'js/components/projects/projects.view.html',
        controller: 'projectsController',
        controllerAs: 'projectCtrl'
      })

      .state('project', {
        url: '/projects/:project',
        templateUrl: 'js/components/projects/project.view.html',
        controller: 'projectsController',
        controllerAs: 'projectCtrl'
      })

      .state('room', {
        url: '/projects/:project/:room',
        templateUrl: 'js/components/room/room.view.html',
        controller: 'roomController',
        controllerAs: 'roomCtrl'
      })

      .state('signup', {
        url: '/auth/signup',
        templateUrl: 'js/components/auth/signup.view.html',
        controller: 'authController',
        controllerAs: 'authCtrl'
      })

      .state('largePicture', {
        url: '/projects/:project/:room/:pic_url',
        templateUrl: 'js/components/largePicture/largePicture.view.html',
        controller: 'largePictureController',
        controllerAs: 'lPicCtrl'
      })

      .state('landing', {
        url: '/landing',
        templateUrl: 'js/components/largePicture/largePicture.view.html'
      })

      // $urlRouterProvider
      //   .otherwise('/');
  }

})();
