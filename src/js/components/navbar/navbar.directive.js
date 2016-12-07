(function() {
  angular.module('myApp.components.navbar', [])
  .directive('navbar', navbar)

  function navbar(){
    return {
      scope: {},
      restrict: 'E',
      templateUrl: 'js/components/navbar/navbar.view.html'
    }
  }

}());
