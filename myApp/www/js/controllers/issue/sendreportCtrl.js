angular.module('cmsapp.sendreportCtrl', [])
.controller('sendreportCtrl', function($scope,$state, $stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {

	$scope.choice=$rootScope.feedback.report_sent_by;
	$scope.abc ={
		'other':""
	}

	$scope.save = function(choice){

		$rootScope.loadingOn();
	if ($scope.abc.other !='') {		
		var data = choice + ','+ $scope.abc.other;
	}else{
		var data = choice;
	}

		var dataTosend={
			issue_id 		:	localStorage.getItem('issue_id'),
			report_sent_by	: data
		}
		console.log(dataTosend);
			issueServices.save_feedback(dataTosend).then(function(response){
				console.log(response);
				$rootScope.loadingOff();
			})
	}
});