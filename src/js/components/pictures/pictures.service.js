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

    const baseURL = 'https://447252371969227:V-FVFFtZ3P6QOxWwudo3caL1998@api.cloudinary.com/v1_1/apfranzen/resources/image'

    this.getPictures = function() {
      return $http.get(baseURL);
    };
  }

})();
