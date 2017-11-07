angular.module('cmsapp.chatMenuCtrl', ['ionic'])
.controller('chatMenuCtrl', function($scope, $timeout, $ionicScrollDelegate,$state,$location) {

	$scope.DetailPage = function(){
		$state.go('app.viewchat');
	}
});