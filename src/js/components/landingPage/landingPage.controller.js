(function() {

  'use strict';

  angular
  .module('myApp.components.landing', [])
  .controller('landingController', landingController);

  landingController.$inject = ['$location', '$anchorScroll'];

  function landingController($location, $anchorScroll) {
    /*jshint validthis: true */
    this.goToPortfolio = () => {
      $location.hash('portfolio');
      $anchorScroll();
    }

    this.goToFeatures = () => {
      $location.hash('features');
      $anchorScroll();
    }
  }

  })();
