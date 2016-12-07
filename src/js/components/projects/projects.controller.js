(function() {

  'use strict';

  angular
    .module('myApp.components.projects', [])
    .controller('projectsController', projectsController);

  projectsController.$inject = ['projectsService', '$stateParams', '$state', '$rootScope'];

  function projectsController(projectsService, $stateParams, $state, $rootScope) {
    /*jshint validthis: true */

    this.filterValue = 'name';
    this.filter = function(value) {
      this.filterValue = value;
    }

    projectsService.getProjects()
    .then((projects) => {
      this.projects = projects.data.data;
      console.log(projects.data.data);
    })
    .catch((err) => {
      console.log('err: ', err);
    })

    this.singleProject = '';
    this.getProject = (project) => {
      this.singleProject = project;
      console.log(this.singleProject);
      projectsService.getProject(project)
      .then((pictures) => {
        this.singleProjectData = pictures.data.data
        // this.singleProjectRooms = pictures.data.rooms
        // this.singProjectLevels = pictures.data.levels
        console.log(pictures.data.data);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
    }

    // this.getRoom = (project, room) => {
    //   console.log(project, room);
    //   projectsService.getRoom(project, room)
    //   .then((pictures) => {
    //     this.roomPics = pictures.data.data[0]
    //     console.log(pictures.data.data);
    //   })
    //   .catch((err) => {
    //     console.log('err: ', err);
    //   });
    //   $state.go('room', {project, room})
    // }

    this.getProject($stateParams.project);

    projectsService.getAllPictures()
    .then((pictures) => {
      this.allpics = pictures.data.data
      console.log('allPics: ', pictures);
    })
    .catch((err) => {
      console.log('err: ', err);
    });

    console.log($stateParams);
    this.breadcrumbs = [
      {
        state: 'projects',
        text: 'Projects'
      }
    ]

  }

})();
