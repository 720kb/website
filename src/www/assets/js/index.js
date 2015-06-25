/*global angular window*/
(function (angular) {

'use strict';

angular.module('website', [
  '720kb.fx'
])
.controller('Ctrl', ['$scope', '$location', function ($scope, $location) {

  $scope.activeLink = 'hello';

  $scope.setActiveLink = function setActiveLink(link) {

      $scope.activeLink = link;
  };
}]);
}(angular));
