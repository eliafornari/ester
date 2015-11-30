angular.module('myApp')
.controller('headerCtrl', function(){



})

/*...................................logo-fade-out...................................*/

.directive('logoheaderDirective', function(){
  return {
    restrict: 'E',
    scope: {

    },
    // transclude: true,
    templateUrl: 'components/header/header.html',
    link: function(scope, element, attr){




      var headerHidden = false;
      $(document).bind("scroll", function(){
        if ($(document).scrollTop() >= 300) {
          jQuery('.title').addClass('title-inactive');
          headerHidden = true;
        }
        else if (($(document).scrollTop() < 300) && (headerHidden)){
          jQuery('.title').removeClass('title-inactive');
        }
});
    }
  }
});
