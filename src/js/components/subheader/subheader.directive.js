(function() {
  angular.module('myApp.components.projects')
  .directive('subnav', subnav)
  .filter('breadcrimufy', breadcrimufy);

  breadcrimufy.$inject = ['$compile', '$sce'];

  function breadcrimufy($compile, $sce) {
    return function(input) {
      let {text, state} = input;
      return $sce.trustAsHtml(`<a ui-sref="${state}">${text}</a>`)
    }
  }

  function subnav(){
    return {
      scope: {
        breadcrumbs: '<',
        numprojects: '@'
      },
      restrict: 'E',
      templateUrl: 'js/components/subheader/subheader.html'
    }
  }

}());
