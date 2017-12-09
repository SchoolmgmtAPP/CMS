angular.module('cmsapp.registrationCtrl', [])

.controller('registrationCtrl', function($scope,$state, $ionicModal,
									 $timeout,$ionicLoading,$localStorage,
									 Constants,Registration,$rootScope) {

	$scope.data = {
			'name'			: '',
			'contact_number': '',
			'email_address'	: '',
			'password'		: '',
			'group_code'	: ''
		}
	$scope.registration=function(signupForm){
		$scope.submitted=true;
	 if(signupForm.$valid)
	    {
	    	$ionicLoading.show({
          content: 'Loading',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 0
        });

	    	$rootScope.email_address = $scope.data.mail;
		var tmp = {
			name			: $scope.data.name,
			contact_number  : $scope.data.contact_number,
			email_address	: $scope.data.mail,
			password		: $scope.data.pwd,
			group_code	: ''
		};
		Registration.RegisterUser(tmp).then(function(response){	
			console.log(response.verification_code);
			 localStorage.setItem('user_id',response.user_id); 
			 $ionicLoading.hide();

			 if (response.success) {
			 	$state.go('verifycode');
			 }
		});
	}
	}
	  
})

