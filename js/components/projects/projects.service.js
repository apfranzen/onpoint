(function() {

  'use strict';

  angular
    .module('myApp.components.projects')
    .service('projectsService', projectsService);

  projectsService.$inject = ['$http'];

  function projectsService($http) {
    /*jshint validthis: true */

    const baseURL = 'https://gentle-shelf-53953.herokuapp.com/projects';

    this.getProjects = function() {
      return $http.get(baseURL);
    };

    this.getProject = function(project) {
      console.log('single project hit');
      return $http.get(`https://gentle-shelf-53953.herokuapp.com/projects/${project}`)
    }

    this.getAllPictures = function() {
      console.log('all pictures serivce hit');
      return $http.get(`https://gentle-shelf-53953.herokuapp.com/pictures/query/allpics`)
    }
  }

})();
