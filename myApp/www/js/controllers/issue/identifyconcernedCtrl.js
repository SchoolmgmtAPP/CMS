angular.module('cmsapp.identifyconcernedCtrl', [])
.controller('identifyconcernedCtrl', function($scope,$state, $stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {

		
		// $scope.engage1 = $rootScope.engage;
		// console.log($rootScope.engage);

		// $rootScope.engage ={
		// 	no_of_parents : ''
		// }
	$scope.saveData = function(){
		console.log($rootScope.engage);
		$rootScope.loadingOn();
		issueServices.engagepeople_saved($rootScope.engage).then(function(response){
			console.log(response);
			$rootScope.loadingOff();
					var alertPopup = $ionicPopup.alert({
					           title: response.data.success == 'true' ? 'Success' : 'Fail',
					           template: response.data.message,
					           cssClass:"messagePopup"
					         });
						$timeout(function() {
						     	alertPopup.close(); //close the popup after 3 seconds for some reason
							}, 3000);
		});
	}
})	