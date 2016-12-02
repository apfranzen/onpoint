(function() {
  angular.module('myApp.components.projects')
  .directive('maincontent', maincontent)

  function maincontent(){
    return {
      // scope: {
      //   breadcrumbs: '<',
      //   numprojects: '@'
      // },
      restrict: 'E',
      templateUrl: 'js/components/mainConent/maincontent.html'
    }
  }

}());
