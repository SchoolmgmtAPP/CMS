angular.module('cmsapp.firstCtrl', [])

.controller('firstCtrl', function($scope,$rootScope,$state, $ionicModal, $timeout
							,$ionicPopup,$ionicLoading,deleteAccountService) {

console.log(localStorage.getItem('loggedin'));
	if (typeof localStorage.getItem('loggedin') == 'undefined' || localStorage.getItem('loggedin') == '') {
			$state.go('home');
	}else{
		$state.go('app.dashboard');
	}
});