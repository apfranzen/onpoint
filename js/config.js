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
        url: '/'
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

      $urlRouterProvider
        .otherwise('/');
  }

})();
