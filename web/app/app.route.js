stockModule.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/items");

    $stateProvider
        .state('items', {
            url: "/items",
            views: {
                'main': {
                    templateUrl: "app/components/grid/data/dataView.html",
                    controller: "itemsController as itemsCtrl"
                }
            },
        })

        .state('taxCalculator', {
            url: "/taxCalculator",
            views: {
                'main': {
                    templateUrl: "app/components/tax/taxView.html",
                    controller: "taxCalculatorController as taxCalculatorCtrl"
                }
            },
        });

})

.controller('navbarController', function($scope, $location) {

    $scope.isActive = function (viewLocation) {
        return $location.path().indexOf(viewLocation) > -1;
    };
  
});