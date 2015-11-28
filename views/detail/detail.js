'use strict';

angular.module('myApp')

.controller('detailCtrl',['$http','$scope','$templateCache','$location','$rootScope','getService','$sce','$routeParams', function($http, $scope, $templateCache, $location, $rootScope, getService, $sce, $routeParams) {

  // 
  // var youTubeURL = 'http://gdata.youtube.com/feeds/api/videos/'+$routeParams.id+'?v=2&alt=json';
  // var json = (function() {
  //     var json = null;
  //     $.ajax({
  //         'async': false,
  //         'global': false,
  //         'url': youTubeURL,
  //         'dataType': "json",
  //         'success': function(data) {
  //             json = data;
  //         }
  //     });
  //     return json;
  // })();
  //
  // alert("Title: " + json.entry.title.$t +"\nDescription:\n " + json.entry.media$group.media$description.$t + "\n");

}]);
