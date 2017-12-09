angular.module('cmsapp.addissueCtrl', [])
.controller('addissueCtrl', function($scope,$state, $stateParams,issueServices,
                                  $ionicLoading, $ionicPopup,$rootScope,$timeout) {

  $scope.data={
    mandatary_agency:'',
    description:''
  };

  $scope.submitted= false;
    $scope.selected = '';
     
     $scope.loading = function(){
      $ionicLoading.show({
          content: 'Loading',
          animation: 'fade-in',
          showBackdrop: true,
          maxWidth: 200,
          showDelay: 0
        });
    }
    
    $scope.loading();
    var datatoschool ={
      user_id : localStorage.getItem('user_id')
    }
    $scope.autoload = function(){

          issueServices.view_school(datatoschool).then(function(response){
             $scope.SchoolList = response.data.response;
           });
           issueServices.get_service_category().then(function(response){
             $scope.serviceCategory = response.data.response;
           });
           issueServices.get_service_item().then(function(response){
                   $scope.serviceItem = response.data.response;
            });
           issueServices.get_issue_type().then(function(response){
                   $scope.IssueType = response.data.response;
            });

              $ionicLoading.hide();
      }     
    $scope.autoload();
     $scope.SelectedCountry = null;
 
    $scope.addissue = function(form){
      $scope.submitted= true;
      if (form.$valid) {
          var data = {
              school_id : $scope.selectedSchool,
              title     : $scope.data.description,
              service_category_id : $scope.SelectedCategory,
              service_item_id : $scope.SelectedServiceItem,
              issue_type_id : $scope.SelectedIssueType,
              mandated_agency : $scope.data.mandatary_agency,
              image           : $scope.cameraimage64
            };
            console.log(data);
            issueServices.saveissue(data).then(function(response){
               if (response.data.success = 'true') {
                var alertPopup = $ionicPopup.alert({
                   title: 'success',
                   template: response.data.message,
                   cssClass:"messagePopup"
                 });
                 $timeout(function() {
                    alertPopup.close(); //close the popup after 3 seconds for some reason
                }, 2000);
                alertPopup.then(function(){
                  $state.go('app.listissues');
                })
              }
            })
        }
    }

    $scope.afterSchool=function(selected){
      if (selected) {
        $scope.selectedSchool = selected.originalObject.school_id;
      }
    }
    $scope.afterCategory = function(selected){
      if (selected) {
            $scope.SelectedCategory = selected.originalObject.category_id;
      }
    }
    $scope.afterIssueType = function(selected){
      if (selected) {
            $scope.SelectedIssueType = selected.originalObject.issue_type_id;
      } 
    }
    $scope.afterServiceItem = function (selected) {
        if (selected) {
            $scope.SelectedServiceItem = selected.originalObject.service_category_id;
        }
    }

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
        });
    }

});