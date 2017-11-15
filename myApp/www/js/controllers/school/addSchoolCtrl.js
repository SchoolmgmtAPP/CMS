angular.module('cmsapp.addSchoolCtrl', [])
.controller('addSchoolCtrl', function($scope, $stateParams,schoolServices,
                                    $ionicLoading,$ionicPopup,$state) {
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
     schoolServices.getRegions().then(function(response){
	     $scope.Regions = response.data.response;
        $ionicLoading.hide();
     });
     $scope.SelectedCountry = null;
  
      $scope.addschool = function(form){
      $scope.submitted= true;
      if (form.$valid) {
          var data = {
                user_id   : localStorage.getItem('user_id'),
                school_id : $scope.selectedschool
            };
            schoolServices.addschool(data).then(function(response){
              if (response.data.success = 'true') {
                var alertPopup = $ionicPopup.alert({
                   title: 'success',
                   template: response.data.message
                 });

                alertPopup.then(function(){
                  $state.go('app.listschools');
                })
              }
            })
        }
    }

    //After select country event
    $scope.afterSelectedRegion = function (selected) {
        if (selected) {
          $scope.loading();
            $scope.SelectedRegion = selected.originalObject.region_id;
            var data = {
              region_id : $scope.SelectedRegion
            };
            schoolServices.getDivisons(data).then(function(response){
             $scope.Divisions = response.data.response;
           });
            $ionicLoading.hide();
        }
    }

    //After selected Division
    $scope.afterSelectedDivision = function (selected) {
        if (selected) {
          $scope.loading();
            $scope.SelectedDivision = selected.originalObject.division_id;
            var data = {
              division_id : $scope.SelectedDivision
            };
            schoolServices.getCities(data).then(function(response){
             $scope.Citys = response.data.response;
           });
            $ionicLoading.hide();
        }
    }
    $scope.afterSelectedCity = function(selected){
      if (selected) {
        $scope.selectedcity = selected.originalObject.city_id;
        var data = {
              city_id : $scope.selectedcity
            };
            schoolServices.getSchool(data).then(function(response){
             $scope.Schools = response.data.response;
           });
      }
    }
    $scope.afterSelectedSchool=function(selected){
      if (selected) {
        $scope.selectedschool = selected.originalObject.school_id;
      }
    }
});