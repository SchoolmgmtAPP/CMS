angular.module('cmsapp.acknowledgeissueCtrl', [])
.controller('acknowledgeissueCtrl', function($scope,$state, $stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {


	$scope.choice =$rootScope.resolve.feedback_followup;
	$scope.choice2 =$rootScope.resolve.issue_acknowledgment_by;
	$scope.basedata="";
	$scope.save=function(ch1,ch2){
		$rootScope.loadingOn();
		var data = {
			user_id					: localStorage.getItem('user_id'),
			issue_id 				: localStorage.getItem('issue_id'),
			feedback_followup 		: ch1,
			issue_acknowledgment_by	: ch2,
			copy_of_acknowledgment	: $scope.basedata
		}
		
		issueServices.acknowledge_issue(data).then(function(resonse){
			console.log(resonse);
			$rootScope.loadingOff();
		});
	}

	$('.reportImg').bind("click" , function () {
        $('#fileinput').click();
        
    });
		function getBase64(file) {
			   var reader = new FileReader();
			   reader.readAsDataURL(file);
			   reader.onload = function () {
			     $scope.basedata = reader.result;
			   };
			   reader.onerror = function (error) {
			     console.log('Error: ', error);
			   };
			}

		   	$scope.onSelected = function(files) {
		     	console.log("files - " + files[0]);
				     if (files[0]) {
				     	getBase64(files[0]);
				     }
		 	}
})