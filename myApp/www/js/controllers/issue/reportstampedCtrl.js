angular.module('cmsapp.reportstampedCtrl', [])
.controller('reportstampedCtrl', function($scope,$state, $stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {

		if ($rootScope.feedback.stamp_report_file != '') {
			$scope.uploaded = true;
			$scope.notupload= false;
		}else{
			$scope.notupload= true;
			$scope.uploaded = false;
		}

		console.log($scope.notupload);
		console.log($scope.uploaded);
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

		$scope.save = function() {
			$rootScope.loadingOn();
				var data = {
					issue_id 			: localStorage.getItem('issue_id'),
					stamp_report_file	:  $scope.basedata
				}
			console.log(data);
				issueServices.save_feedback(dd).then(function(response){
					console.log(response);
					$rootScope.loadingOff();
				})
		}
});
