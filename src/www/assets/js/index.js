/*global angular window*/
(function withAngular(angular) {

'use strict';
var ConfigFunction = function ($locationProvider) {

    $locationProvider.html5Mode({
      'enabled': true,
      'requireBase': false
    }).hashPrefix('#');
  }
  , HomeController = function HomeController($scope, $location, $window) {

  var that = this
    , hash
    , setActiveLink = function setActiveLink(link) {
      that.activeLink = link;
    }
    , toggleMobileMenu = function toggleMobileMenu() {
      that.mobileMenu = !that.mobileMenu;
    };

  if ($location.$$hash) {

    that.activeLink = $location.$$hash;
  } else {

    that.activeLink = 'hello';
  }

  that.setActiveLink =  setActiveLink;
  that.toggleMobileMenu = toggleMobileMenu;
}
, VideoDirective = function videoDirective() {

  return {
    'restrict':'A',
    'link': function linkingFunction(scope, element, attr) {

      element[0].playbackRate = 1;
    }
  };
}
angular.module('website', [
  'ngRoute',
  '720kb.fx'
])
.config(['$locationProvider', ConfigFunction])
.controller('HomeController', ['$scope', '$location', '$window', HomeController])
.directive('videoHome',[VideoDirective]);
}(angular));
