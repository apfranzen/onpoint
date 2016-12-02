// sample angular code

(function() {

  'use strict';

  angular
    .module('myApp', [
      'ngRoute',
      'ui.router',
      'myApp.config',
      'myApp.components.main',
      'myApp.components.pictures',
      'myApp.components.projects'
    ]);

})();
