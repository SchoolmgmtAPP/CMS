angular.module('cmsapp.collaboratorlistCtrl', [])

.controller('collaboratorlistCtrl', function($scope,$state, $ionicModal,
										 $timeout,$ionicLoading,$ionicPopup,
										 collaboratorServices,$timeout) {
			var data = {
				user_id	: localStorage.getItem('user_id')
			}

		 collaboratorServices.view_invited_collaborator(data).then(function(response){
		 	$scope.visitors = response.data.response;
		 	// console.log(response);
		 })

		 collaboratorServices.view_collaborator(data).then(function(response){
		 	$scope.collaborator = response.data.response;
		 	// console.log(response);
		 })

		 $scope.delete_invitation = function(dataID){
		 	var confirmPopup = $ionicPopup.confirm({
            title: 'Confirmation',
            template: 'Are You Sure You Want Delete Account Permanently ?',
            buttons: [{ 
              text: 'Delete',
               type: 'button-positive',
              onTap: function(e) {
              	$scope.delete(dataID.invitation_id);
              }

            }, {
              text: 'Cancel',
             type: 'button-danger',
              onTap: function(e) {
                  
              }
            }]
        });
		 	console.log(dataID.invitation_id);
		 }

		 $scope.delete=function(invitation_id){
		var tmp = {
			invitation_id : invitation_id
		};
		
		collaboratorServices.cancel_invitation(tmp).then(function(response){	
			
				var alertPopup = $ionicPopup.alert({
		           title: response.data.success == 'true' ? 'Success' : 'Fail',
		           template: response.data.message,
		           cssClass:"messagePopup"
		         });
				 $timeout(function() {
                	alertPopup.close(); //close the popup after 3 seconds for some reason
            	}, 2000);
			if (response.data.success == 'true') {
				collaboratorServices.view_invited_collaborator(data).then(function(response){
				 	$scope.visitors = response.data.response;
				 	$ionicLoading.hide();
				 })
	
			 }
		});
	}

});
