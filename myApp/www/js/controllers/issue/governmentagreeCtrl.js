angular.module('cmsapp.governmentagreeCtrl', [])
.controller('governmentagreeCtrl', function($scope,$state, $stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {


	$scope.choice =$rootScope.resolve.issue_agreed_by;
	// $scope.monitory_value= $rootScope.resolve.monetary_value;
	// $scope.source_fund	= $rootScope.resolve.source_of_fund;

	$scope.temp = {
		'monitory_value': $rootScope.resolve.monetary_value,
		'source_fund'	:$rootScope.resolve.source_of_fund	
	}
	console.log($scope.choice);
	console.log($scope.temp);
	

	$scope.save = function(choice) {
		$rootScope.loadingOn();
		var data ={
			user_id					: localStorage.getItem('user_id'),
			issue_id 				: localStorage.getItem('issue_id'),
			issue_agreed_by			: $scope.choice,
			monetary_value			: $scope.temp.monitory_value,
			source_of_fund			: $scope.temp.source_fund,
			copy_of_agreement 		: $scope.basedata
		}
		console.log(data);
		issueServices.acknowledge_upload(data).then(function(resonse){
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
