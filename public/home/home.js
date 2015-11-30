'use strict';

angular.module('myApp')

.controller('homeCtrl',['$http','$scope','$templateCache','$location','$rootScope','getService','$sce', function($http, $scope, $templateCache, $location, $rootScope, getService, $sce) {
  // $scope.link ={};
  $rootScope.library = [];
  $rootScope.detailID = "";
  $rootScope.index=0;

    // This service's function returns a promise, but we'll deal with that shortly

    getService.get('library')
    // then() called when son gets back
    .then(function(data) {

        $rootScope.library = data;
        $rootScope.pageLoading = false;


    }, function(error) {
        // promise rejected, could log the error with: console.log('error', error);

        alert("an error occurred please reload the page.");

    }).then(function(){
      // for (i in $rootScope.library){
      //
      //   $scope.baseUrl = 'https://www.youtube.com/embed/'+$rootScope.library[i].id;+'?rel=0&amp;&autoplay=1&controls=1&loop=1&showinfo=0&modestbranding=1&theme=dark&color=white?vq=hd1080';
      //   $rootScope.library[i].trusted = $sce.trustAsResourceUrl($scope.baseUrl);
      //   console.log($rootScope.library);
      // }


    });





    $rootScope.thisVideo = function(i){


      $rootScope.index = i;


      $scope.baseUrl = 'https://www.youtube.com/embed/'+$rootScope.library[i].id+'?rel=0&amp;&autoplay=1&controls=1&loop=1&showinfo=0&modestbranding=1&theme=dark&color=white?vq=hd1080';
      $rootScope.detailID = $sce.trustAsResourceUrl($scope.baseUrl);


    }










}]);
