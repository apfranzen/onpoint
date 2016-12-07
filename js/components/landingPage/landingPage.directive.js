(function() {
  angular.module('myApp.components.landingPage', [])
  .directive('landingPage', landingPage)

  function landingPage(){
    return {
      scope: {},
      restrict: 'E',
      templateUrl: 'js/components/landingPage/landingPage.view.html',
      controller: 'landingController',
      controllerAs: 'landingCtrl'
    }
  }

}());
