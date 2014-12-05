'use strict';

/**
 * @ngdoc function
 * @name guysopherApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the guysopherApp
 */
angular.module('guysopherApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
