(function() {

  'use strict';

  angular
    .module('myApp.components.projects')
    .service('projectsService', projectsService);

  projectsService.$inject = ['$http'];

  function projectsService($http) {
    /*jshint validthis: true */
    console.log('projectService hit');
    this.greeting = 'project services!';

    const baseURL = '//localhost:3000/projects';

    this.getProjects = function() {
      return $http.get(baseURL);
    };

    this.getProject = function(project) {
      return $http.get(`//localhost:3000/projects/${project}`)
    }
  }

})();
