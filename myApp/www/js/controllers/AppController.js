angular.module('cmsapp.AppCtrl', [])

.controller('AppCtrl', function($scope,$rootScope,$state, $ionicModal, $timeout
							,$ionicPopup,$ionicLoading,deleteAccountService) {

	$scope.delete_account = function(){

		 var confirmPopup = $ionicPopup.confirm({
            title: 'Confirmation',
            template: 'Are You Sure You Want Delete Account Permanently ?',
            buttons: [{ 
              text: 'Delete',
               type: 'button-positive',
              onTap: function(e) {
              	$scope.delete();
              }

            }, {
              text: 'Cancel',
             type: 'button-danger',
              onTap: function(e) {
                  
              }
            }]
        });
        confirmPopup.then(function(res){
            if(res){

            }else{

            }
        });
	}  
	$scope.delete=function(){
		var tmp = {
			user_id : localStorage.getItem('user_id')
		};
		
		deleteAccountService.delete(tmp).then(function(response){	
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
	$rootScope.logout = function() {

			localStorage.setItem('user_id','');
			localStorage.setItem('loggedin','')
			$state.go('login');
	}
})

