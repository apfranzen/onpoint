(function() {

  'use strict';

  angular
    .module('myApp.components.largePicture', [])
    .controller('largePictureController', largePictureController);

  largePictureController.$inject = ['largePictureService', '$stateParams'];

  function largePictureController(largePictureService, $stateParams) {
    /*jshint validthis: true */
    console.log('largePictureCtrl hit');

    this.getPic = (project, room, pic_url) => {
      this.project = project;
      this.room = room;
      this.pic_url = pic_url;
      largePictureService.getPic(project, room, pic_url)
      .then((pic) => {
        this.pic = pic.data.data[0]
        this.date = pic.data.date;
        console.log(pic.data.date);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
      // $state.go('room', {project, room})
    }

    this.getPic($stateParams.project, $stateParams.room, $stateParams.pic_url);
  }

})();
