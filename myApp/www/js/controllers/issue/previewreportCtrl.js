angular.module('cmsapp.previewreportCtrl', [])
.controller('previewreportCtrl', function($scope,$state, $stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {

	console.log($rootScope.feedback);

	if ($rootScope.feedback == null) {
		$state.go('app.feedbackreport');
	}else{
	// if ($rootScope.feedback.feedback_text) {

		$scope.data = $rootScope.feedback.feedback_text;

		if (typeof $rootScope.previewdata !='undefined' || $rootScope.previewdata !='') {
				$scope.data	= $rootScope.previewdata;			
		}
		$scope.text = $scope.data.split(',');

		for (var i = $scope.text.length - 1; i >= 0; i--) {
			console.log($scope.text[i]);
		}
	}

	// }
});
