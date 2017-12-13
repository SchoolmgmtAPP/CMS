angular.module('cmsapp.shareagreedsolutionCtrl', [])
.controller('shareagreedsolutionCtrl', function($scope,$state,$stateParams,issueServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {

	$scope.choice={};
	$scope.temp ={
		'people_agree':$rootScope.resolve.number_of_people_agreed
	}

	if ($rootScope.resolve.inform_concerned_people !='') {				
		$scope.load_people = $rootScope.resolve.inform_concerned_people.split(',');
		console.log($scope.load_people);
		angular.forEach($scope.load_people, function(value, key) {
			
				if (value == 'Email') {
					$scope.choice[0] =true;					
				}else if(value == 'Text'){
					$scope.choice[1] =true;
				}else if(value == 'Meeting'){
					$scope.choice[2] =true;
				}else if(value == 'FB'){
					$scope.choice[3] =true;
				}else{
					$scope.choice[4] =true;
				}
		});

		
	}	

		$scope.format=function(){
		  $scope.modifiedOrder=[];
		  angular.forEach($scope.choice, function(value, key) {
		    if(value){
		      // $scope.modifiedOrder.push($scope.choice[key].value);
		      if (key == 0) {
		      		$scope.modifiedOrder.push('Email');
		      }else  if(key == 1){
		      		$scope.modifiedOrder.push('Text');
		      }else  if(key == 2){
		      		$scope.modifiedOrder.push('Meeting');
		      }else  if(key == 3){
		      		$scope.modifiedOrder.push('FB');
		      }else{
		      		$scope.modifiedOrder.push('Visit');
		      }
		    }
		});

		  console.log($scope.modifiedOrder);

		}

	$scope.save = function() {
		$rootScope.loadingOn();
		$scope.tempchoice="";
		 angular.forEach($scope.modifiedOrder, function(value, key) {
		 		$scope.tempchoice += value+','; 
		 });
		$scope.inform =$scope.tempchoice.substring(0, $scope.tempchoice.length - 1);
		var data ={
			user_id					: localStorage.getItem('user_id'),
			issue_id 				: localStorage.getItem('issue_id'),
			inform_concerned_people	: $scope.inform,
			number_of_people_agreed	: $scope.temp.people_agree
		}
		console.log(data);
		issueServices.agree_on_issue(data).then(function(resonse){
			console.log(resonse);
			$rootScope.loadingOff();
		});
	}
})
