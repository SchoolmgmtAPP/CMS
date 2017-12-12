angular.module('cmsapp.feedbackreportCtrl', [])
.controller('feedbackreportCtrl', function($scope,$state, $stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {

	$scope.feedback = {

	}
	$scope.preview = function(form) {
		$scope.submitted=true;
		if (form.valid) {

			$state.go('app.previewfeedbackreport');
		}
	}
	$scope.save = function(){

		if (typeof $scope.feedback.other_details !='undefined' || $scope.feedback.other_details =='') {

			var data = $scope.feedback.issueof+"," + $scope.feedback.schoolin+"," + $scope.feedback.existedfor+"," + $scope.feedback.other_details;
		}else{
			var data = $scope.feedback.issueof+"," + $scope.feedback.schoolin+"," + $scope.feedback.existedfor;
		}
			$rootScope.previewdata = data;
			console.log(data);
			var datamain ={
				issue_id 		:	localStorage.getItem('issue_id'),
				feedback_text 	: 	data
			}
			issueServices.save_feedback(datamain).then(function(response){
				console.log(response);
			})
		
	}

});