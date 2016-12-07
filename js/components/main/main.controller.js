(function() {

  'use strict';

  angular
    .module('myApp.components.main', [])
    .controller('mainController', mainController);

  mainController.$inject = ['$rootScope', '$state', '$location'];

  function mainController($rootScope, $state, $location) {
    /*jshint validthis: true */
    this.greeting = 'Hello World!';
    $rootScope.$on('$locationChangeStart', () => {
      $rootScope.urlPath = $location.$$path;
    });
  }

})();
