(function() {

  'use strict';

  angular
    .module('myApp.components.projects', [])
    .controller('projectsController', projectsController);

  projectsController.$inject = ['projectsService'];

  function projectsController(projectsService) {
    /*jshint validthis: true */
    console.log('projectCtrl hit');
    this.greeting = 'projects greeting'

    projectsService.getProjects()
    .then((projects) => {
      console.log('projects controller hit');
      this.projects = projects.data.data;
      console.log(projects.data.data);
    })
    .catch((err) => {
      console.log('err: ', err);
    })

    this.getProject = function(project) {
      projectsService.getProject(project)
      .then((picture) => {
        console.log('projectService hit');
        this.picture = picture.data;
        console.log(this.pictures);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
    }
  }

})();
