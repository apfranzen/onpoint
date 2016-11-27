(function() {

  'use strict';

  angular
    .module('myApp.components.pictures', [])
    .controller('picturesController', picturesController);

  picturesController.$inject = ['picturesService'];

  function picturesController(picturesService) {
    /*jshint validthis: true */
    console.log('picCtrl hit');
    this.greeting = 'picture controllers!';

    // this.pictures = function() {
    //   picturesService.
    // }

    picturesService.getPictures()
    .then((pictures) => {
      this.pictures = pictures;
    })
    .catch((err) => {
      console.log('err: ', err);
    })
  }

})();
