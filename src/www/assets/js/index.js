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
      , mailTo = function mailTo(prefix) {

        var affix = '@'
          , antispam = '720kb.net';

          return prefix + affix + antispam;

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

    that.mailTo = mailTo;
    that.setActiveLink =  setActiveLink;
    that.toggleMobileMenu = toggleMobileMenu;
  }
  , VideoDirective = function videoDirective($window) {

    return {
      'restrict':'A',
      'scope': true,
      'link': function linkingFunction(scope, element, attr) {

        var hidden
          , visibilityChange
          , handleVisibilityChange = function handleVisibilityChange(videoElement) {

            if ($window.document[hidden]) {

              videoElement.pause();
              videoElement.currentTime = 0;
              videoElement.playbackRate = 0.65;

            } else {

              videoElement.play();
            }
          };

        if (typeof $window.document.hidden !== 'undefined') {

          hidden = 'hidden';
          visibilityChange = 'visibilitychange';
        } else if (typeof $window.document.mozHidden !== 'undefined') {

          hidden = 'mozHidden';
          visibilityChange = 'mozvisibilitychange';
        } else if (typeof $window.document.msHidden !== 'undefined') {

          hidden = 'msHidden';
          visibilityChange = 'msvisibilitychange';
        } else if (typeof $window.document.webkitHidden !== 'undefined') {

          hidden = 'webkitHidden';
          visibilityChange = 'webkitvisibilitychange';
        }

        element[0].pause();
        element[0].playbackRate = 0.65;

        $window.document.addEventListener(visibilityChange, handleVisibilityChange.bind(this, element[0]), false);
        angular.element(element).bind('timeupdate', function onTimeUpdateVideo(e) {

          if (e.target.currentTime > 5.9 &&
              e.target.currentTime < 6.2) {

            element[0].playbackRate = 0.55;

          } else if (e.target.currentTime >= 6.2 &&
            e.target.currentTime < 6.9) {

            element[0].playbackRate = 0.4;

          } else if (e.target.currentTime >= 6.9) {

            element[0].playbackRate = 0.25;

          } else if (e.target.currentTime >= 7) {

            element[0].playbackRate = 0.18;
          }
        });

        element[0].play();
      }
    };
  };

  angular.module('website', [
    'ngRoute',
    '720kb.fx'
  ])
  .config(['$locationProvider', ConfigFunction])
  .controller('HomeController', ['$scope', '$location', '$window', HomeController])
  .directive('videoHome',['$window', VideoDirective]);
}(angular));
