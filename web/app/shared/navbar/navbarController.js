stockModule.controller('navbarController', function($scope, $location) {

	$scope.isActive = function (viewLocation) {
        return $location.path().indexOf(viewLocation) > -1;
    };
  
});