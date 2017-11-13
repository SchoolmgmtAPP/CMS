angular.module('cmsapp.resetpasswordCtrl', [])

.controller('resetpasswordCtrl', function($scope,$state, $ionicModal,
										 $timeout,Constants,ChangePwdService,
										 ResetPasswordService,VerifyCodeService,
										 $ionicLoading,$ionicPopup) {

	$scope.data = {
			'email_address'	: '',
			'code':''
		}

	$scope.resetchangepassword=function(resetForm){
		$scope.submitted=true;
	 if(resetForm.$valid)
	    {
	    	$ionicLoading.show({
          content: 'Loading',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 0
        });

		var tmp = {
			email_address	: $scope.data.mail
		};
		
		ResetPasswordService.sendEmail(tmp).then(function(response){	
			console.log(response);
		});
		$ionicLoading.hide();
	}
	}

	$scope.varifyCode=function(varificationForm){
		$scope.submittedCode=true;
		if(varificationForm.$valid)
	    {
	    	$ionicLoading.show({
          content: 'Loading',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 0
        });

		var tmp = {
			verification_code	: $scope.data.code,
			user_id				: localStorage.getItem('user_id')
		};
		
		VerifyCodeService.verify(tmp).then(function(response){	
			$ionicLoading.hide();
			var alertPopup = $ionicPopup.alert({
		           title: response.success == 'true' ? 'Success' : 'Fail',
		           template: response.message
		         });

			if (response.success == 'true') {
				alertPopup.then(function(res) {
			 		$state.go('login');
				});
			 }
		});
	}
	}
// this is for change Password
	$scope.changePwd =function(form){
		$scope.submittedpwd=true;

		if(form.$valid)
	    {
		    $ionicLoading.show({
	          content: 'Loading',
	          animation: 'fade-in',
	          showBackdrop: true,
	          maxWidth: 200,
	          showDelay: 0
	        });

		var tmp = {
			user_id			: localStorage.getItem('user_id'),
			old_password	: $scope.data.opwd,
			new_password	: $scope.data.pwd
		};
		
		ChangePwdService.change(tmp).then(function(response){	
			console.log(response);

			$ionicLoading.hide();
			if (response.success == 'true') {
			 	$state.go('app.viewprofile');
			 }else{
			 	 var alertPopup = $ionicPopup.alert({
		           title: 'Error',
		           template: response.message
		         });
			 }
		});
	}
	}
	  
})

