(function() {

  'use strict';

  angular
    .module('myApp.components.pictures')
    .service('picturesService', picturesService);

  picturesService.$inject = ['$http'];

  function picturesService($http) {
    /*jshint validthis: true */
    console.log('picService hit');
    this.greeting = 'picture services!';

    const baseURL = '//localhost:3000/pictures';

    this.getPictures = function() {
      return $http.get(baseURL);
    };
  }

})();
