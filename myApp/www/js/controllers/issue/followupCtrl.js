angular.module('cmsapp.followupCtrl', [])
.controller('followupCtrl', function($scope,$state,$stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {

	$scope.data ={
		'feedback':$rootScope.resolve.followup_text
	}
	// $scope.feedback = $rootScope.resolve.followup_text;
	
	$scope.save=function(){
		$rootScope.loadingOn();
		var data ={
			user_id					: localStorage.getItem('user_id'),
			issue_id 				: localStorage.getItem('issue_id'),
			followup_text 			:  $scope.data.feedback
		}
		issueServices.send_followup(data).then(function(resonse){
			console.log(resonse);
			$rootScope.loadingOff();
		});
	}
});
