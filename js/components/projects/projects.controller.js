(function() {

  'use strict';

  angular
    .module('myApp.components.projects', [])
    .controller('projectsController', projectsController);

  projectsController.$inject = ['projectsService', '$stateParams'];

  function projectsController(projectsService, $stateParams) {
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
        console.log(pictures.data.data);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
    }

    this.getProject($stateParams.project);
  }

})();
