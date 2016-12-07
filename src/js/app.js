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
      'myApp.components.projects',
      'myApp.components.room',
      'myApp.components.largePicture',
      'myApp.components.navbar',
      'myApp.components.landingPage',
      'myApp.components.landing'
    ]);

})();
