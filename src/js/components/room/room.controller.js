(function() {

  'use strict';

  angular
    .module('myApp.components.room', [])
    .controller('roomController', roomController);

  roomController.$inject = ['roomService', '$stateParams'];

  function roomController(roomService, $stateParams) {
    /*jshint validthis: true */
    console.log('roomCtrl hit');

    this.getRoom = (project, room) => {
      this.project = project;
      this.room = room;
      console.log(project, room);
      roomService.getRoom(project, room)
      .then((pictures) => {
        this.roomPics = pictures.data.data
        console.log(pictures.data.data);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
      // $state.go('room', {project, room})
    }

    this.getRoom($stateParams.project, $stateParams.room);
  }

})();
