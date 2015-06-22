stockModule.controller('taxCalculatorController', function($scope) {

	$scope.income = 0

	$scope.taxSystem = [
		{
			level:1,
			info:'5% from 0 to 50M IDR',
			minIncome:0,
			maxIncome: 5e7,
			rate:0.05,
		},
		{
			level:2,
			info:'15% from 50M to 250M IDR',
			minIncome:5e7,
			maxIncome: 25e7,
			rate:0.15,
		},
		{
			level:3,
			info:'25% from 250M to 500M IDR',
			minIncome:25e7,
			maxIncome: 5e8,
			rate:0.25,
		},
		{
			level:4,
			info:'30% from 500M IDR',
			minIncome:5e8,
			maxIncome: Infinity,
			rate:0.3,
		}
	]

	
	$scope.computeTaxes = function(){
		
		$scope.taxes 		= []
		$scope.totalTaxes 	= 0

		angular.forEach($scope.taxSystem, function(tax) {
  		
  			if ($scope.income > tax.minIncome)
  				
  				$scope.taxes.push(
  					$scope.income < tax.maxIncome ? ($scope.income - tax.minIncome) * tax.rate : (tax.maxIncome - tax.minIncome) * tax.rate
  				)
		})

		$scope.totalTaxes = eval( $scope.taxes.join('+') )

	};
});