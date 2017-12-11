angular.module('cmsapp.reviewinfoCtrl', [])
.controller('reviewinfoCtrl', function($scope,$state, $stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {

	$scope.access =$rootScope.issue_access;
	
	console.log($scope.access);

	if ($scope.access.is_info_useful == 'Y') {
		$scope.useful = true;
		$scope.status1 = true;
	}else{
		$scope.useful = false;
		$scope.status1 = false;
	}

	if ($scope.access.is_issue_mentioned =='Y') {
		$scope.mention = true;
		$scope.status2 = true;
	}else{
		$scope.mention = false;
		$scope.status2 = false;
	}

	if ($scope.access.is_office_responsible_identified == 'N') {
		$scope.office_res = false;
		$scope.status3 = false;
	}else{
		$scope.office_res = true;
		$scope.status3 = false;
	}

	$scope.save=function() {
		console.log($scope.status1);
		console.log($scope.status2);
		console.log($scope.status3);
		if ($scope.status1) {
			$scope.status11 = 'Y';
		}else{
			$scope.status11 = 'N';
		}
		if ($scope.status2) {
			$scope.status22 = 'Y';
		}else{
			$scope.status22 = 'N';
		}
		if ($scope.status3) {
			$scope.status33 = 'Y';
		}else{
			$scope.status33 = 'N';
		}
		var data = {
			issue_id							: localStorage.getItem('issue_id'),
			is_office_responsible_identified 	: $scope.status33,
			is_issue_mentioned					: $scope.status22,
			is_info_useful						: $scope.status11
		}	
		issueServices.save_accessinfo(data).then(function(responce) {
				console.log(responce);
			})
	}
		$scope.stateChanged1 = function(checkStatus){
			if (checkStatus) {
				$scope.status1 =true; 
			}else{
				$scope.status1 =false;
			}

		}
		$scope.stateChanged2 = function(checkStatus){
			if (checkStatus) {
				$scope.status2 =true;
			}else{
				$scope.status2 =false;
			}

		}
		$scope.stateChanged3 = function(checkStatus){
			if (checkStatus) {
				$scope.status3 =true;
			}else{
				$scope.status3 =false;
			}

		}
})
