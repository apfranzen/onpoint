(function() {

  'use strict';

  angular
    .module('myApp.components.largePicture')
    .service('largePictureService', largePictureService);

  largePictureService.$inject = ['$http'];

  function largePictureService($http) {
    this.getPic = function(project, room, pic_url) {
      console.log('project: ', project, 'room: ', room, 'pic_url: ', pic_url);
      console.log('get largePicture service hit');
      return $http.get(`https://gentle-shelf-53953.herokuapp.com/projects/${project}/${room}/${pic_url}`)
    }
  }


})();
