(function() {

  'use strict';

  angular
    .module('myApp.config', [])
    .config(appConfig)
    .run(function($templateCache) {
      $templateCache.removeAll();
    });

  function appConfig($routeProvider) {
    $routeProvider
      .when('/pictures', {
        templateUrl: 'js/components/pictures/pictures.view.html',
        controller: 'picturesController',
        controllerAs: 'picCtrl'
      })
      // 
      // .otherwise({
      //   redirectTo: '/'
      // });
  }

})();
