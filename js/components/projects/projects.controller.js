(function() {

  'use strict';

  angular
    .module('myApp.components.projects', [])
    .controller('projectsController', projectsController);

  projectsController.$inject = ['projectsService', '$stateParams', '$state'];

  function projectsController(projectsService, $stateParams, $state) {
    /*jshint validthis: true */

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
        this.singleProjectPics = pictures.data.data
        console.log(pictures);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
    }

    this.getRoom = (project, room) => {
      // this.project = project;
      // this.room = room;
      console.log(project, room);
      projectsService.getRoom(project, room)
      .then((pictures) => {
        this.roomPics = pictures.data.data
        console.log(pictures);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
      $state.go('room', {project, room})
    }

    this.getProject($stateParams.project);

    console.log($stateParams);
    this.breadcrumbs = [
      {
        state: 'projects',
        text: 'Projects'
      },
      {
        state: 'project',
        text: 'Project'
      },
      {
        state: 'room',
        text: 'Room'
      },
    ]

  }

})();
