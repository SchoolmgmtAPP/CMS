angular.module('cmsapp.accessidentifiedCtrl', [])
.controller('accessidentifiedCtrl', function($scope,$state, $stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {


	$scope.access =$rootScope.issue_access;
	console.log($scope.access);
	console.log($rootScope.issue_access);


		$scope.newItem ={
			'a1':'',
			'a2':'',
			'a3':'',
			'elapse_days':''
		}	
		if ($scope.access.accessed_info) {
			var data = $scope.access.accessed_info.split(' ');
			// for (var i = data.length - 1; i >= 0; i--) {
			console.log(data[0]);
			console.log(data[1]);
			console.log(data[0]);
			// }
				// beis projectinspectionreport propertyinventory
			if (data[0]) {
				$scope.newItem.a1 ='Y';
				$scope.query1 ='beis '; 
			}
			if (data[1]) {
				$scope.newItem.a2 ='Y';
				$scope.query2 ='projectinspectionreport ';
			}
			if (data[2]) {
				$scope.newItem.a3 ='Y';
				$scope.query3 ='propertyinventory ';
			}
		}
		
		$('.photoImg').bind("click" , function () {
        $('#fileinput').click();
        
    	});

		$(".hideshow").hide();
		$scope.stateChanged = function(checkStatus){
			if (checkStatus) {
				console.log("checked");
				$(".hideshow").show();
				$scope.check=true;
			}else{
				$scope.check=false;
				$(".hideshow").hide();
			}

		}

			$scope.onFilesSelected = function(files) {
		     console.log("files - " + files[0]);
		     if (files[0]) {
		     // $rootScope.loadingOn();
		     var base64data = getBase64(files[0]);
		 	}
		 }
		 function getBase64(file) {
			   var reader = new FileReader();
			   reader.readAsDataURL(file);
			   reader.onload = function () {
			     console.log(reader.result);
			     $scope.basedata = reader.result;
			     return reader.result;
			   };
			   reader.onerror = function (error) {
			     console.log('Error: ', error);
			   };
			}
		$scope.savedata=function(argument) {
			var x =$scope.query1+" "+$scope.query2+" "+$scope.query3;
			if ($scope.check) {
				$scope.poerson = $scope.newItem.elapse_days;
			}else{
				$scope.poerson = '0';
			}
			var data ={
					issue_id		: localStorage.getItem('issue_id'),
					accessed_info 	: x,
					elapse_days 	: $scope.poerson,
					relevent_photo	: $scope.basedata
				}
			console.log(data);
			
			issueServices.save_accessinfo(data).then(function(responce) {
				console.log(responce);
			})
		}

		
		$scope.stateChanged1 = function(checkStatus){
			if (checkStatus) {
				console.log("checked");
				$scope.query1 ='beis '; 
			}else{
				$scope.query1 ='';
			}

		}
		$scope.stateChanged2 = function(checkStatus){
			if (checkStatus) {
				console.log("checked");
				$scope.query2 ='projectinspectionreport ';
			}else{
				$scope.query2 ='';
			}

		}
		$scope.stateChanged3 = function(checkStatus){
			if (checkStatus) {
				console.log("checked");
				$scope.query3 ='propertyinventory ';
			}else{
				$scope.query3 ='';
			}

		}


});
		
