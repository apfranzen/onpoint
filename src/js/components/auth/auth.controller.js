(function() {

  'use strict';

  angular
    .module('myApp.components.auth', [])
    .controller('authController', authController);

  authController.$inject = ['authService'];

  function authController(authService) {
    /*jshint validthis: true */
    console.log('picCtrl hit');
    this.greeting = 'picture controllers!';

    // this.auth = function() {
    //   authService.
    // }

    // authService.getauth()
    // .then((auth) => {
    //   console.log('auth controller');
    //   // this.auth = auth;
    //   this.auth = auth.data;
    //   console.log(this.auth);
    // })
    // .catch((err) => {
    //   console.log('err: ', err);
    // });
  }

})();
