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
      console.log('pictures controller');
      // this.pictures = pictures;
      this.pictures = pictures.data;
      console.log(this.pictures);
    })
    .catch((err) => {
      console.log('err: ', err);
    });
  }

})();
