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
    , toggleMobileMenu = function toggleMobileMenu(event, toggle) {

      event.preventDefault();

      if (toggle) {
        that.mobileMenu = !that.mobileMenu;
      }
    };

  if ($location.$$hash) {

    that.activeLink = $location.$$hash;
  } else {

    that.activeLink = 'hello';
  }

  that.setActiveLink =  setActiveLink;
  that.toggleMobileMenu = toggleMobileMenu;
}
, NavbarDirective = function navbarDirective($window) {
  return {
    /*'restrict': 'C',
    'scope': true,
    'link': function navbarDirective(scope, element, attrs) {

      var theWindow = angular.element($window);
      if (theWindow[0].scrollY > 100) {

        element.addClass('scrolling');
      }
      theWindow.bind('scroll', function onWindowScrollNavbar() {
        if (theWindow[0].scrollY > 60) {

          element.addClass('scrolling');
        } else {
          element.removeClass('scrolling');
        }
      });
    }*/
  };
}
, VideoDirective = function videoDirective($window) {

  return {
    'restrict':'A',
    'scope': true,
    'link': function linkingFunction(scope, element, attr) {
      element[0].pause();
      element[0].playbackRate = 0.55;

      element[0].play();
    }
  };
}
angular.module('website', [
  'ngRoute',
  '720kb.fx'
])
.config(['$locationProvider', ConfigFunction])
.controller('HomeController', ['$scope', '$location', '$window', HomeController])
.directive('navbar', ['$window', NavbarDirective])
.directive('videoHome',['$window', VideoDirective]);
}(angular));
