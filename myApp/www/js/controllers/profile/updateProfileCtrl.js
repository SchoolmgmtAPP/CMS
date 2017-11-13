angular.module('cmsapp.updateProfileCtrl', [])

.controller('updateProfileCtrl', function($scope,$state,$rootScope,
							 		$ionicModal,$timeout,$ionicLoading,
							 		$localStorage,Constants,$cordovaCamera,
							 		$ionicPopup,profileService) {

	// $scope.data = {
	// 		'name'			: '',
	// 		'contact_number': '',
	// 		'email_address'	: '',
	// 		'password'		: '',
	// 		'group_code'	: ''
	// 	}
	var dataTosend = {
		user_id : localStorage.getItem('user_id')
	}	
	profileService.getProfile(dataTosend).then(function(response){
		$scope.data = response.data.response;
		$scope.copy = response.data.response;
	})

		/********** Show Popup on Click of receipt image ***************/
   	$scope.showPopup = function() {
		$scope.data = {};
		$scope.myPopup = $ionicPopup.show({
		    cssClass: 'Choose options',
		    scope: $scope,
		    template: '<button ng-click="closePopup()" class="image-popup-cancel" <b>X</b></button><br><div class="pop-image-picture-type"><img src="img/camera.png" class="image"></div><div class="popmessage" >Where do you wish to use your photo from? </div><br><button ng-click="takePhoto()" class="popup-buttons-picture-type" <b>Camera</b></button>  <button ng-click="choosePhoto()" class="popup-buttons-picture-type" <b>Gallery</b></button>',
		});
		
		$scope.closePopup = function(){
			window.localStorage.setItem("isUploadingImage", "false");
			$scope.myPopup.close();
		};
 	};
	/********** Take Photo from camera ***************/   
   $scope.takePhoto = function () {
   		// window.localStorage.setItem("isUploadingImage", "true");
    	var options = {
	        quality: $rootScope.DefaultImageQuality,
	        destinationType: Camera.DestinationType.DATA_URL,
	        sourceType: Camera.PictureSourceType.CAMERA,
	        allowEdit: false,
	        encodingType: Camera.EncodingType.JPEG,
	        popoverOptions: CameraPopoverOptions,
	        saveToPhotoAlbum: false,
	        correctOrientation: true
    	};
			
        $cordovaCamera.getPicture(options).then(function (imageData) {
			$scope.cameraimage = imageData;
			$scope.cameraimage64 =  "data:image/jpeg;base64," + imageData;

			// var imageSize = $scope.cameraimage.length;
			// if(imageSize > $rootScope.DefaultImageSize){
			// var Message="Your image file size is too large.";
			// $rootScope.flashPopupWithMessage(Message, $scope);
			// }
		 // $scope.IsImageUpdated = 1;
		 // setTimeout(function(){$scope.closePopup();}, 500);
       
      }, function (err) {
    		// setTimeout(function(){$scope.closePopup();}, 500);
      });
   }
   
   /********** Choose Photo from Gallery ***************/              
	$scope.choosePhoto = function () {
   		// window.localStorage.setItem("isUploadingImage", "true");
      	var options = {
	        quality: $rootScope.DefaultImageQuality,
	        destinationType: Camera.DestinationType.DATA_URL,
	        sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
	        allowEdit: false,
	        encodingType: Camera.EncodingType.JPEG,
	        popoverOptions: CameraPopoverOptions,
	        saveToPhotoAlbum: false,
	        correctOrientation: true
   		};

   		$cordovaCamera.getPicture(options).then(function (imageData) {
			$scope.cameraimage = imageData;
			$scope.cameraimage64 =  "data:image/jpeg;base64," + imageData;

			// var imageSize = $scope.cameraimage.length;
			// if(imageSize > $rootScope.DefaultImageSize){
			// 	var Message="Your image file size is too large.";
			// 	$rootScope.flashPopupWithMessage(Message, $scope);
			// }
			// $scope.IsImageUpdated = 1;
   //      	setTimeout(function(){$scope.closePopup();}, 500);
        	}, function (err) {  
        		// setTimeout(function(){$scope.closePopup();}, 500);
        	}
        );
    }

  /*****************Cancel Popup************************/

  $scope.CancelPopup = function(){
  	$scope.$apply();
  }

  $scope.resetdata = function(){
  		$scope.data = angular.copy($scope.copy);
  };
	$scope.updateProfile=function(signupForm){
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

		var tmp = {
			user_id			: localStorage.getItem('user_id'),
			name			: $scope.data.name,
			contact_number  : $scope.data.contact_number,
			email_address	: $scope.data.email_address,
			image 			: $scope.cameraimage64
		};
		profileService.updateProfile(tmp).then(function(response){	
			 $ionicLoading.hide();
			 var alertPopup = $ionicPopup.alert({
		           title: response.success == 'true' ? 'Success' : 'Fail',
		           template: response.message
		         });

			if (response.success == 'true') {
				alertPopup.then(function(res) {
			 		$state.go('app.viewprofile');
				});
			 }
		});
	}
	}
	  
})

