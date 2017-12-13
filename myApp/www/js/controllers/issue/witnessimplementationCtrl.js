angular.module('cmsapp.witnessimplementationCtrl', [])
.controller('witnessimplementationCtrl', function($scope,$state,$stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {

	$scope.temp ={
		'sof_service':$rootScope.resolve.source_of_fund_service,
		'voi_service':$rootScope.resolve.value_of_improved_service
	}

	$scope.save = function() {
		$rootScope.loadingOn();
		var data ={
			user_id						: 	localStorage.getItem('user_id'),
			issue_id 					: 	localStorage.getItem('issue_id'),
			source_of_fund_service		:  	$scope.temp.sof_service,
			value_of_improved_service	: 	$scope.temp.voi_service,
			photo_of_improved_service	: 	$scope.basedata
		}
		console.log(data);
		issueServices.witness_implementation(data).then(function(resonse){
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
});