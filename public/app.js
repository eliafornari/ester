'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngResource',
  'ngAnimate',
  'myApp.routes',
  'myApp.services'
])

.directive('googleAnalytics', function(){
  return{
    restrict: 'A',
    link: function(){

      //google analytics

    }
  }
});
