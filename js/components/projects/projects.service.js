(function() {

  'use strict';

  angular
    .module('myApp.components.projects')
    .service('projectsService', projectsService);

  projectsService.$inject = ['$http'];

  function projectsService($http) {
    /*jshint validthis: true */

    const baseURL = '//localhost:3000/projects';

    this.getProjects = function() {
      return $http.get(baseURL);
    };

    this.getProject = function(project) {
      console.log('single project hit');
      return $http.get(`//localhost:3000/projects/${project}`)
    }

    this.getRoom = function(project, room) {
      console.log('get room hit');
      return $http.get(`//localhost:3000/projects/${project}/${room}`)
    }
  }

})();
