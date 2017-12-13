angular.module('cmsapp.changestoryCtrl', [])
.controller('changestoryCtrl', function($scope,$state, $stateParams,storyServices,$ionicLoading, $ionicPopup,$rootScope,$timeout) {


	$scope.data= {
		'story':($rootScope.issue_story != null) ? $rootScope.issue_story.story_text : '',
		'needtoshow':true
	}
	$scope.send = function(){

		var data ={
			user_id		: localStorage.getItem('user_id'),
			story_id 	: $scope.story_id
		}
		storyServices.send_story(data).then(function(resonse){
			$rootScope.loadingOff();
			
		});
	}
	$scope.save = function(){
		if ($scope.data.story.length > 0) {
		$rootScope.loadingOn();
		var data = {
			issue_id 				: localStorage.getItem('issue_id'),
			story_text 				: $scope.data.story
		}
		
		storyServices.save_story(data).then(function(resonse){
			$rootScope.loadingOff();
			console.log(resonse);

			if (resonse.data.success == 'true') {
				$scope.data.needtoshow = false;
				$scope.story_id =  resonse.data.story_id;
			}
		});
	}
	}
});