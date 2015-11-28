

'use strict';

angular.module('myApp')
.controller('navCtrl', ['$scope', '$http', '$routeParams','$route', '$location','$rootScope', function($scope, $http, $routeParams, $route, $location, $rootScope) {
  // to get the parameter f the url to show it in the collection-page


$scope.isSoundOpen = true;

$rootScope.openSound = function() {
  $scope.isSoundOpen = !$scope.isSoundOpen;

}




}])



.directive('navDirective', function() {
	return {
		restrict: 'E',
		templateUrl: 'components/nav/nav.html',
    link: function(){

                jQuery('.ripple').on('click', function (event) {
                  event.preventDefault();

                  var $div = jQuery('<div/>'),
                      btnOffset = $(this).offset(),
                  		xPos = event.pageX - btnOffset.left,
                  		yPos = event.pageY - btnOffset.top;



                  $div.addClass('ripple-effect');
                  var $ripple = $(".ripple-effect");

                  $ripple.css("height", jQuery(this).height());
                  $ripple.css("width", jQuery(this).height());
                  $div
                    .css({
                      top: yPos - ($ripple.height()/4),
                      left: xPos - ($ripple.width()/4),
                      background: jQuery(this).data("ripple-color")
                    })
                    .appendTo(jQuery(this));

                  window.setTimeout(function(){
                    $div.remove();
                  }, 2000);
                });





    }
	}
})


.directive('backDirective', function() {
	return {
		restrict: 'E',
		templateUrl: 'components/nav/back.html',
    link: function(){



    }
	}
});
