(function() {

  'use strict';

  angular
    .module('myApp.components.room')
    .service('roomService', roomService);

  roomService.$inject = ['$http'];

  function roomService($http) {
    this.getRoom = function(project, room) {
      console.log('get room hit');
      return $http.get(`https://gentle-shelf-53953.herokuapp.com/projects/${project}/${room}`)
    }
  }


})();
