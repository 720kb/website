/*global angular window*/
(function withAngular(angular) {

'use strict';

angular.module('website', [
  'ngRoute',
  '720kb.fx'
])
.config(['$locationProvider', function ($locationProvider) {

  $locationProvider.html5Mode({
    'enabled': true,
    'requireBase': false
  });
}])
.controller('Ctrl', ['$scope', '$location',
  function Ctrl($scope, $location) {

  var hash;

  $scope.appsSliderType = 'music';

  if ($location.hash()) {

    $scope.activeLink = $location.hash();
  } else {

    $scope.activeLink = 'hello';
  }
  $scope.setActiveLink = function setActiveLink(link) {
    $scope.activeLink = link;
  };
  $scope.setAppsSliderType = function setAppsSliderType(type) {
    $scope.appsSliderType = type;
  };
}]);
}(angular));
