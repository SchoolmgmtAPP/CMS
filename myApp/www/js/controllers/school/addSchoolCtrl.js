angular.module('cmsapp.addSchoolCtrl', [])
.controller('addSchoolCtrl', function($scope, $stateParams,schoolServices,
                                    $ionicLoading) {
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
            };
            console.log(data);
            schoolServices.addschool(data).then(function(response){

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
      }
    }
});