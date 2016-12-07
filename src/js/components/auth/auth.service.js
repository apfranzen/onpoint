(function() {

  'use strict';

  angular
    .module('myApp.components.auth')
    .service('authService', authService);

  authService.$inject = ['$http'];

  function authService($http) {
    /*jshint validthis: true */
    console.log('picService hit');
    this.greeting = 'picture services!';

    const baseURL = '//localhost:3000/auth';

    this.getauth = function() {
      return $http.get(baseURL);
    };
  }

})();
