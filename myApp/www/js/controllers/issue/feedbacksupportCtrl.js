angular.module('cmsapp.feedbacksupportCtrl', [])
.controller('feedbacksupportCtrl', function($scope,$state, $stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {

	$scope.data={
		'support':$rootScope.feedback.no_of_supports
	}
	$scope.save=function(){
		console.log($scope.data.support);
		$rootScope.loadingOn();
		var dd ={
			issue_id 		:	localStorage.getItem('issue_id'),
			no_of_supports	: 	$scope.data.support
		}
		console.log(dd);

		issueServices.save_feedback(dd).then(function(response){
				console.log(response);
				$rootScope.loadingOff();
			})
		
	}
});