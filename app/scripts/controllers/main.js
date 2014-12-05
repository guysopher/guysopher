'use strict';

/**
 * @ngdoc function
 * @name guysopherApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the guysopherApp
 */
angular.module('guysopherApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
