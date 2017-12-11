angular.module('cmsapp.accessidentifiedCtrl', [])
.controller('accessidentifiedCtrl', function($scope,$state, $stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {


	$scope.access =$rootScope.issue_access;
	console.log($scope.access);
	console.log($rootScope.issue_access);

		$scope.newItem ={
			'a1':'',
			'a2':'',
			'a3':''
		}	
		if ($scope.access.accessed_info) {
			var data = $scope.access.accessed_info.split(' ');
			// for (var i = data.length - 1; i >= 0; i--) {
			console.log(data[0]);
			console.log(data[1]);
			console.log(data[0]);
			// }
				// beis projectinspectionreport propertyinventory
			if (data[0]) {
				$scope.newItem.a1 ='Y';
			}
			if (data[1]) {
				$scope.newItem.a2 ='Y';
			}
			if (data[2]) {
				$scope.newItem.a3 ='Y';
			}
		}
});
		
